module.exports.function = function findInsureReturnHeaders () {
  // This call will throw a 500, but since we are using returnHeaders: true,
  // we must check for the error ourselves.
  var errorResponse = http.getUrl(config.get('remote.url') + '/error', { format: 'json', returnHeaders: true });

  console.log(errorResponse);
  
  if (errorResponse.status === 500) {
    console.log("There was an error.");
  }

  // insure 라고 가정하에 
  var successResponse = http.getUrl(config.get('remote.url') + '/shoes', { format: 'json', returnHeaders: true });
  
  console.log(successResponse);
  
  return successResponse.parsed;
}
