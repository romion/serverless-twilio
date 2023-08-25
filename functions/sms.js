const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);

module.exports.sendText = (event, context, callback) => {
  const response = {
    headers: { 'Access-Control-Allow-Origin': '*' }, // CORS requirement
    statusCode: 200,
  };

  Object.assign(event, { from: process.env.TWILIO_PHONE_NUMBER });

  // use twilio SDK to send text message
  const sms = {
    to: event.body.to,
    body: event.body.message || '',
    from: event.from,
  };

  twilioClient.messages.create(sms)
    .then((message) => {
      // text message sent!
      console.log(`message ${message.body}`);
      console.log(`date_created: ${message.date_created}`);
      response.body = JSON.stringify({
        message: 'Text message successfully sent!',
        data: message,
      });
      callback(null, response);
    })
    .catch((error) => {
      response.statusCode = error.status;
      response.body = JSON.stringify({
        message: error.message,
        error: error,
      });
      callback(null, response);
    });
};
