# CAPS

## Current LAB - 13

## CAPS Phase 3

- In this phase, we’ll be adding a layer of complexity to our application. Rather than just “fire” events and hope that our vendors and drivers respond to them, we’re going to implement a “queue” system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

- In this final phase, we’ll be building out the queue itself, getting our vendors subscribed to it, and focusing on just one event - delivered to set the pattern for subscribing to, and working with queues.

### Author: Mark Thanadabouth

### Collaborators:

### Setup

#### Running App
- node `caps.js` in caps-api folder
- node `hub.js` in hub-server folder
- node `driver.js` in modules folder
- node `vendor.js` in modules folder

#### Endpoints
- http://localhost:3001/pickup
- http://localhost:3001/in-transit
- http://localhost:3001/delivered

#### Tests
- `npm test`

### WRRC
![Lab12wrrc](/assets/lab12wrrc.jpg)

### Reflections and Comments
* Start date (11/01)

### LAB - 12

Name of feature: Phase 3

Estimate of time needed to complete: 5 Hours

Start time: 12pm(11/08)

Finish time: 3pm(11/04)

Actual time needed to complete: 7 hours
