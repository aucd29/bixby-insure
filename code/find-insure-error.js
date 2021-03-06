module.exports.function = function findInsureError () {
  try {
    // This call will throw a 500, and the http library will throw a JavaScript error that you can catch.
    var response = http.getUrl(config.get('remote.url') + '/error', { format: 'json' });
  } catch (e) {
    console.log(e);
    throw fail.checkedError('This error will cause a halt.', 'ErrorWhichHalts', {})
  }
  return 'Not implemented';
}
