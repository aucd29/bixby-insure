module.exports.function = function findInsureFiltering (type) {
  console.log("Find Insure filter by a specific type")
  var options = { 
    format: 'json',
    query: {
      type: type
    }
  };
  // If type is "Formal", then this makes a GET call to /shoes?type=Formal
  // var response = http.getUrl(config.get('remote.url') + '/shoes', options);
  var travelResponse = [
    {
      "id":1,
      "name":"즐거운여행보험", "description":"이 여행자 보험에대한 설명", "type":"여행", "price":{
      "value": 85,
      "currencyType": {
        "currencyCode": "USD",
        "prefixSymbol": "$"
      }
    }},
    {
      "id":2,
      "name":"그냥여행보험", "description":"이 여행자 보험에대한 설명", "type":"여행", "price":{
      "value": 10,
      "currencyType": {
        "currencyCode": "USD",
        "prefixSymbol": "$"
      }
    }}
  ];
  
  var lifeResponse = [
    {
      "id":1,
      "name":"즐거운생명보험", "description":"이 여행자 보험에대한 설명", "type":"여행", "price":{
      "value": 300,
      "currencyType": {
        "currencyCode": "USD",
        "prefixSymbol": "$"
      }
    }}
  ];
  
  var response = travelResponse;
  if (type == "생명") {
    response = lifeResponse;
  }
    
  return response;
}
