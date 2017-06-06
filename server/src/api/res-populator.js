var _ = require('lodash');
var currencyFormatter = require('currency-formatter');
var config = require('../config');
var moment = require('moment');

var placesMap = {};
var legsMap = {};
var currenciesMap = {};
var agentsMap = {};
var carriersMap = {};

const livePricingPopulator = {
  populate: function(payload){
    return new Promise((resolve, reject) => {
      var response = {};
      try{
        placesMap = fieldToMap(payload.Places, 'Id');
        legsMap = fieldToMap(payload.Legs, 'Id');
        currenciesMap = fieldToMap(payload.Currencies, 'Code');
        agentsMap = fieldToMap(payload.Agents, 'Id');
        carriersMap = fieldToMap(payload.Carriers, 'Id');

        buildResultHeader(payload, response);
        buildResultItineraries(payload, response);
        resolve(response);
      }catch(e){
        console.log('error build response ');
        console.log(e);
        reject(new Error('GEN_ERR'));
      }
    });
  }
};

function fieldToMap(payload, key){
  var fieldToMap =_.reduce(payload, function(map, p){
    map[p[key]] = p;
    return map;
  }, {});
  return fieldToMap;
}

function buildResultHeader(payload, response){
  var responseHeader = {};
  responseHeader['from'] = placesMap[payload.Query.OriginPlace].Code;
  responseHeader['to'] = placesMap[payload.Query.DestinationPlace].Code;
  responseHeader['travellers'] = payload.Query.Adults + payload.Query.Children + payload.Query.Infants;
  responseHeader['class'] = payload.Query.CabinClass;
  response.header = responseHeader;
}

function buildResultItineraries(payload, response){
  var responseItineraries = _.map(payload.Itineraries, function(o){
      var itinerary = {};
      itinerary.outbound = buildLeg(o.OutboundLegId);
      itinerary.inbound = buildLeg(o.InboundLegId);
      var price = buildPrice(o.PricingOptions[0].Price, payload.Query.Currency);
      var agent = agentsMap[o.PricingOptions[0].Agents[0]].Name;
      itinerary.pricingOptions = {price: price, agent: agent};
      return itinerary;
  });
  response.itineraries = responseItineraries;
}

function buildLeg(id){
  function formatDate(date){
      return moment(date, 'YYYY-MM-DDTHH:mm:ss').format('HH:mm');
  }
  function formatDuration(durationInMin){
    var duration = moment.duration(durationInMin, 'minutes');
    var formattedDuration = '';
    var days = duration.get('days');
    if(days > 0){
      formattedDuration += days + 'd ';
    }
    var hours = duration.get('hours');
    if(hours > 0){
      formattedDuration += hours + 'h ';
    }
    var minutes = duration.get('minutes');
    if(minutes > 0){
      formattedDuration += minutes;
    }

    return formattedDuration;
  }
  var responseLeg = {};
  var leg = legsMap[id];
  var from = placesMap[leg.OriginStation].Code;
  var to = placesMap[leg.DestinationStation].Code;
  responseLeg.from = from;
  responseLeg.to = to;
  responseLeg.departure = formatDate(leg.Departure);
  responseLeg.arrival = formatDate(leg.Arrival);
  responseLeg.duration = formatDuration(leg.Duration);
  responseLeg.stops = leg.Stops.length;
  responseLeg.id = leg.Id;
  var carrier = carriersMap[leg.Carriers[0]];
  var carrierName = carrier.Name;
  var carrierCode = carrier.ImageUrl.substring(carrier.ImageUrl.lastIndexOf('/')+1);
  var carrierImageUrl = config.carrierLogosBaseUrl.replace('{carrierCode}', carrierCode);
  responseLeg.carrier = {name: carrierName, imageUrl: carrierImageUrl};
  return responseLeg;
}

function buildPrice(amount, currency){
  var currencyConfig = currenciesMap[currency];

  function addRounding(price){
    return Math.ceil(price);
  }
  function addSymbol(price){
    var separator = currencyConfig.SpaceBetweenAmountAndSymbol?' ':'';
    return currencyConfig.SymbolOnLeft?currencyConfig.Symbol + separator + price :price + separator + currencyConfig.Symbol;
  }

  function addDecimalSeparator(price){
    return currencyFormatter.format(price, {
      decimal: currencyConfig.DecimalSeparator,
      thousand: currencyConfig.ThousandsSeparator,
      precision: currencyConfig.RoundingCoefficient,
      format: '%v'
    });
  }
  return addSymbol(addDecimalSeparator(addRounding(amount)));
}

module.exports = livePricingPopulator;
