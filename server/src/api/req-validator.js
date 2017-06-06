const moment = require('moment');
const _ = require('lodash');

const livePricingValidator = {
  validate: function (payload){
    return new Promise((resolve, reject) => {
      try{
        validateAdults(payload);
        validateClass(payload);
        validatePlace(payload);
        validateDate(payload);
        resolve(payload);
      }catch(e){
        reject(e);
      }
    });
  }
};

function validateAdults(payload){
  if(_.isEmpty(payload.adults)){
    throw new Error('SEARCH_ADULTS_ERR');
  }
}

function validateClass(payload){
  if(_.isEmpty(payload.class)){
    throw new Error('SEARCH_CLASS_ERR');
  }}

function validatePlace(payload){
  if(_.isEmpty(payload.toPlace) || _.isEmpty(payload.fromPlace) ||
      !_.isString(payload.toPlace) || !_.isString(payload.fromPlace)){
        throw new Error('SEARCH_PLACE_ERR');
  }
}

function validateDate(payload){
  if(!moment(payload.toDate,'YYYY-MM-DD').isValid() || !moment(payload.fromDate,'YYYY-MM-DD').isValid() ||
      moment(payload.toDate,'YYYY-MM-DD').isBefore(moment(payload.fromDate,'YYYY-MM-DD'))){
        throw new Error('SEARCH_DATE_ERR');
      }
}

module.exports = livePricingValidator;
