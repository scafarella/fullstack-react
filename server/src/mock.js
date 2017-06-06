var mock = {
  header: {
    from: "EDI",
    to: "LTN",
    travellers: 1,
    class: "Economy"
  },
  itineraries: [{
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021625--32356-0-11235-1706021740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£72.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "17:10",
        arrival: "18:25",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021710--32356-0-11235-1706021825",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£72.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "19:15",
        arrival: "20:30",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021915--32356-0-11235-1706022030",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£72.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "15:40",
        arrival: "16:55",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011540--32356-0-13771-1706011655",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021625--32356-0-11235-1706021740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£88.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "15:40",
        arrival: "16:55",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011540--32356-0-13771-1706011655",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "17:10",
        arrival: "18:25",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021710--32356-0-11235-1706021825",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£88.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "15:40",
        arrival: "16:55",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011540--32356-0-13771-1706011655",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "19:15",
        arrival: "20:30",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021915--32356-0-11235-1706022030",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£88.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011625--32356-0-13771-1706011740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021625--32356-0-11235-1706021740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£88.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011625--32356-0-13771-1706011740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "17:10",
        arrival: "18:25",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021710--32356-0-11235-1706021825",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£88.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011625--32356-0-13771-1706011740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "19:15",
        arrival: "20:30",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021915--32356-0-11235-1706022030",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£88.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "11:55",
        arrival: "13:10",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021155--32356-0-11235-1706021310",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£158.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "15:40",
        arrival: "16:55",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011540--32356-0-13771-1706011655",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "11:55",
        arrival: "13:10",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021155--32356-0-11235-1706021310",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£174.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011625--32356-0-13771-1706011740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "11:55",
        arrival: "13:10",
        duration: "1h 15",
        stops: 0,
        id: "13771-1706021155--32356-0-11235-1706021310",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      pricingOptions: {
        price: "£174.98",
        agent: "easyJet"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "09:05",
        arrival: "19:40",
        duration: "10h 35",
        stops: 1,
        id: "13771-1706020905--31685-1-11235-1706021940",
        carrier: {
          name: "Vueling Airlines",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/07.png"
        }
      },
      pricingOptions: {
        price: "£222.11",
        agent: "Expedia"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "09:05",
        arrival: "19:40",
        duration: "10h 35",
        stops: 1,
        id: "13771-1706020905--32222-1-11235-1706021940",
        carrier: {
          name: "Iberia",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/IB.png"
        }
      },
      pricingOptions: {
        price: "£226.15",
        agent: "Expedia"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "09:05",
        arrival: "19:40",
        duration: "10h 35",
        stops: 1,
        id: "13771-1706020905--32480-1-11235-1706021940",
        carrier: {
          name: "British Airways",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/BA.png"
        }
      },
      pricingOptions: {
        price: "£226.55",
        agent: "Expedia"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "06:20",
        arrival: "07:45",
        duration: "1h 25",
        stops: 0,
        id: "11235-1706010620--32356-0-13771-1706010745",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "09:05",
        arrival: "19:40",
        duration: "10h 35",
        stops: 1,
        id: "13771-1706020905--32480,-32222-1-11235-1706021940",
        carrier: {
          name: "British Airways",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/BA.png"
        }
      },
      pricingOptions: {
        price: "£226.55",
        agent: "Expedia"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "15:40",
        arrival: "16:55",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011540--32356-0-13771-1706011655",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "09:05",
        arrival: "19:40",
        duration: "10h 35",
        stops: 1,
        id: "13771-1706020905--31685-1-11235-1706021940",
        carrier: {
          name: "Vueling Airlines",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/07.png"
        }
      },
      pricingOptions: {
        price: "£249.15",
        agent: "Opodo"
      }
    },
    {
      outbound: {
        from: "EDI",
        to: "LTN",
        departure: "16:25",
        arrival: "17:40",
        duration: "1h 15",
        stops: 0,
        id: "11235-1706011625--32356-0-13771-1706011740",
        carrier: {
          name: "easyJet",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/EZ.png"
        }
      },
      inbound: {
        from: "LTN",
        to: "EDI",
        departure: "09:05",
        arrival: "19:40",
        duration: "10h 35",
        stops: 1,
        id: "13771-1706020905--31685-1-11235-1706021940",
        carrier: {
          name: "Vueling Airlines",
          imageUrl: "https://logos.skyscnr.com/images/airlines/favicon/07.png"
        }
      },
      pricingOptions: {
        price: "£249.15",
        agent: "Opodo"
      }
    }
  ]
}
module.exports = mock;
