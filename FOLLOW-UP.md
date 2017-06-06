# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
For this test I used:
- moment.js: an utility library to handle time calculations

### Q) What is the command to start the server?

node backend: APIKEY=ss630745725358065467897349852985 npm run server
frontend: npm run client OR

npm run build -- --debug-template
npm install -g pushstate-server
pushstate-server build

---

# General:

### Q) How long, in hours, did you spend on the test?
I spent 24h
### Q) If you had more time, what further improvements or new features would you add?
First of all I'll focus on project related feature such as
- testing;
- adding a logging library (e.g winston);
- improving error handling;
- injecting in the client a configuration to let the frontend point to the correct API url;
- coding a responsive layout;


### Q) Which parts are you most proud of? And why?
I paid a lot of attention in integrating nicely in the project structure and in using
the resources provided (e.g. bpk-mixins, webpack, live-prices api,react..). The reason is that I think adding too (not required) complexity make projects messy and difficult to maintain.
### Q) Which parts did you spend the most time with? What did you find most difficult?
I spent the most time in coding the ui. The hardest part was understanding and building a lighter version of the response starting from the api provided, without loosing required information.
### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
The test was quite easy. I slightly changed the error handling to hide to the client side the internal error messages.
I tried to run 'npm run build -- --debug-template' but was broken because of some wrong path that I fixed, so now it's possible to deploy the static generated resources to any http server.
