<!--
title: 'AWS Send SMS Message with Twilio in NodeJS'
description: 'This is an AWS Send SMS Message with Twilio in NodeJS app.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/romion'
authorName: 'Roman Sazhniev'
authorAvatar: 'https://avatars.githubusercontent.com/u/10283789?v=4'
-->
# Send SMS Message with Twilio

This is a demo app for sending SMS messages with the Twilio SDK and AWS lambda.

[Live the live demo](https://oxth7jnn81.execute-api.us-east-1.amazonaws.com/dev)

## Use Cases:

* Sending sms via Twilio

## Setup

1. Sign up for a [Twilio account](http://www.twilio.com)

2. Create a [new phone number](https://www.twilio.com/console/phone-numbers/) in your Twilio trial account

3. Grab your ACCOUNT SID and AUTH TOKEN from the [Twilio console](https://www.twilio.com/console) and plug those into the `serverless.yml` file in the next step

4. Set your `env` variables in `serverless.yml` with your Twilio account values

      ```yml
      environment:
        # replace these env variables with your twilio account values
        TWILIO_ACCOUNT_SID: YOUR-TWILIO-ACCOUNT-SID-HERE
        TWILIO_AUTH_TOKEN: YOUR-TWILIO-AUTH-TOKEN-HERE
        TWILIO_PHONE_NUMBER: YOUR-TWILIO-PHONE-NUMBER-HERE
      ```
    
5. Install the dependencies required by the service 
      ```bash
      npm i --only=prod
      ```
      
6. Deploy the service 
      ```bash
      serverless deploy
      ```

7. Invoke the function and send an SMS message

      Update the `to` phone number the `event.json` file and `message` to send in the SMS
    
      Then invoke the function with the serverless CLI. Set the `--path event.json` so the function knows where to send the SMS.
    
      ```bash
      serverless invoke -f sendText --path event.json
      ```

8. (Optional) Deploy the front-end application
