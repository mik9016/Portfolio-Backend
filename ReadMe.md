# Porfolio Site - Backend

Backend for my portfolio website. Created to handle form submitions from portfolio-client side and handle login from admin site.

## How it works?

- Form Handling:
1. Backend takes JSON from client form. 
2. Saves it to Mongo DB using Mongoose Model.
3. Then sends back response with succesfull message or error.

- Admin website
1. checks if login and password is correct and gives back list of messages to the client.
## Technologies

- NodeJS
- Express
- Mongo DB
- Moongoose
