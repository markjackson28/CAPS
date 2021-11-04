# CAPS

## Current LAB - 12

## CAPS Phase 2

In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called socket.io so that we can do networked events. Socket.io manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but a new set theme emerges to get us through the refactoring.

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.

And as developers, here are some of the development stories that are relevant to the above.

- As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and web applications

### Author: Mark Thanadabouth

### Collaborators: Jeremy, Charlie

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

Name of feature: Phase 2

Estimate of time needed to complete: 5 Hours

Start time: 12pm(11/01)

Finish time: 3pm(11/04)

Actual time needed to complete: 7 hours
