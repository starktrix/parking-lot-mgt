# Starktrix Inc. Parking Lot Management System

<h4>Status: Developement</h4>


## Starktrix Inc. Tackles Parking Challenges in city of Metropolis

### Overview
In the bustling city of Metropolis, vehicle theft and vandalism have become pressing issues, causing distress among residents and visitors alike. The city, known for its vibrant community and dynamic urban life, is now grappling with rising crime rates in its parking lots. Vehicles are frequently stolen or vandalized, leading to significant financial losses and a growing sense of insecurity among drivers.

In response to these challenges, the newly elected mayor of Metropolis, Mayor Jane Thompson, has taken decisive action. She reached out to Starktrix Inc., a leading technology company renowned for its innovative solutions in smart city infrastructure. The mayor's vision is to transform the city’s parking facilities into secure, efficient, and user-friendly environments that not only address the immediate issues of theft and vandalism but also improve overall parking management.

### Starktrix Inc.'s Mission
Starktrix Inc. has been entrusted with the task of developing a comprehensive Parking Lot Management System (PLMS) for Metropolis. The primary goals of this system are to:

- Enhance Security: Implement advanced monitoring and security features to prevent theft and vandalism.
- Improve Efficiency: Streamline the management of parking lots to ensure optimal use of space and reduce congestion.
- Increase User Satisfaction: Provide a seamless and convenient parking experience for residents and visitors.

### Key Solutions and Features
To achieve these objectives, Starktrix Inc. will develop the PLMS with the following features:

1. Enhanced Security Measures
Surveillance Integration: Incorporate real-time video monitoring and AI-driven analytics to detect suspicious activities and alert authorities immediately.
License Plate Recognition (LPR): Utilize LPR technology to track vehicle entries and exits, ensuring that only registered vehicles have access to parking facilities.
Emergency Alerts: Enable users to quickly alert security personnel in case of an emergency through a mobile app.
2. Efficient Parking Management
Real-Time Availability: Provide drivers with real-time information about available parking spots through a mobile app, reducing the time spent searching for parking.
Automated Ticketing: Implement an automated parking ticket system to streamline the process of entering and exiting parking lots.
Dynamic Pricing: Introduce dynamic pricing based on demand to optimize parking space utilization and generate additional revenue for the city.
3. User-Friendly Features
Mobile App: Develop a user-friendly mobile app that allows drivers to locate available parking spots, reserve spaces, and pay for parking effortlessly.
User Registration and Vehicle Management: Allow users to register their accounts and vehicles, providing personalized parking recommendations and improving security through verified vehicle registrations.
Billing and Payment Integration: Simplify the payment process with integrated billing and payment options, including digital wallets and credit/debit cards.

### Expected Outcomes
By implementing the Parking Lot Management System, Starktrix Inc. aims to:

- Reduce Vehicle Theft and Vandalism: Enhanced security measures will deter criminal activities and provide a safer environment for drivers.
- Optimize Parking Space Utilization: Real-time availability and dynamic pricing will ensure efficient use of parking spaces.
- Improve User Experience: A seamless and convenient parking experience will increase satisfaction among residents and visitors.


## Functional Requirements

### Core
- Register a new parking lot.
- Lot owner should be able to register their lot
- Add parking spots to a parking lot.
- View available parking spots.

- Register a new user account.
- Log in to an existing user account.
- Register a vehicle.
- View registered vehicle details.

- Enter a parking lot and generate a parking ticket.
- Exit a parking lot and close the parking ticket.
- Generate a parking fee.
- View parking ticket details.
- Driver should be able to park at a parking lot with their subscription
- Driver should be billed their subscription
- Driver should be issued tickets per parking
- Driver should register their vehicles
- Driver should be able to rate parking lot
- Based on driver location, they should be able to estimate closest available lot to them
- City admin can deregister a private lot if they foul the rules
- Driver should be able to reserve parking spot
- parking lot should have levels, VIP, premium,...
- Provide administrative tools for managing parking policies and user permissions.

### Extended
- Advanced analytics
- AI License plate recognition
- Implement dynamic pricing based on demand.
- Provide emergency alert mechanisms for users.
- Implement surveillance integration for real-time monitoring.
- Allow customization of parking rules and regulations based on specific zones or times.
- Generate reports on parking usage, revenue, and security incidents.
- Integrate with city-wide IoT networks for seamless traffic management***.
Coordinate with public transportation systems for multi-modal commuting***.
- AI integration for recommending lot to user based on rating and proximity and destination****.

## Non Functional Requirement

- Availability
- Consistency
- Fault tolerant
- Low Latency

## Capacity Estimation


## High Level Design


## Component Design

### DDD
- Bounded Context
-- parking lot management (+ticketing system, rating system)
-- user management
-- vehicle managment
-- Billing system
-- Notification system
-- AuthN/Z system

### API Design
- parking lot
```js
// register parking lot: 
POST: /lots
// unregister parking lot
PATCH: /lots/{:lotId}
// add new spot
POST: /lots/{:lotId}/spots
// update spot
PUT: /lots/{:lotId}/spots/{:spotId}
// delete spot
DELETE: /lots/{:lotId}/spots/{:spotId}
// reserve spot
POST: /spot/reserve ///spot:reserve
// park
POST: /spot/park ///spot:park
// add parking level
POST: /lot/level
// update level
PUT: /lot/level/{:levelId}
// delete level
DELETE: /lot/level
// get lot occupancy
GET: /lot/occupancy
// manually update occupancy
PATCH: /lot/{:lotId}/occupancy
// get all lots
GET: /lots
// get avaiable spots
GET: /lots/{:lotId}/available


// # start region
// Ticketting
GET: /tickets
// # end region

// # start region
// rating
POST: /lots/{:lotId}/rate
// # end region
```

- user mgt
```js
// create driver account
POST: /accounts/driver
// create city admin account
POST: /account/city-admin
// create lot owner account
POST: /accounts/lot-owner
// register lot admin
POST: /accounts/lot-admin
// register lot ssecurity agent
POST: /accounts/security-agent
// get details
GET: /accounts/{:accountId}
// get all accounts
GET: /accounts
```

- vehicle mgt
```js
// register vehicle
POST: /vehicles/register
// update vehicle details
PUT: /vehicles/{:vehicleId}
// get all vehicles
GET: /vehicles

```

- billing system
```js
// create subsription payment
POST: /bills/subscription
// spot reserve payment
POST: /bills/reserve
// pay per park
POST: /bills/pay-per-park
// print invoice
GET: /bills/invoice
// print receipt
GET: /bills/receipt

```

- auth system
```js
// create user account
POST: /register
// create account for (tenancy: sec-agent, lot admin)
POST: /register/{:uniqueId}
// verify account
POST: /verify
// login
POST: /login
// logout
POST: /logout

```