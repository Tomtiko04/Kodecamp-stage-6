## Question 
Create two new routes, a /general (unrestricted) route and a /restricted (restricted) route.

The unrestricted route can be queried by anybody, any response can be given to the unrestricted route.

The restricted route will have a middleware that checks a JSON web token, verifies it, then sends verified users to the next route, or returns a response "You are not allowed access to this route" if the user didn't supply a valid token to the middleware.

Note: This is going to require a register and login routes. Remember to hash the user's password when registering, generate the jsonwebtoken when users log in and pass the Authorization token as Bearer when trying to query the restricted route.
