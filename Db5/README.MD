# what we did 

## In case of sing-up 
   - problem statement
   - what we need to sign up 
     - schemas 
          - name
          - email
          - password
          - role:["User","Admin","Visitor"]

 - Sing Up Controller
   - fetch data from req ki body to sing up
   - check if email is already exist
     - if yes  return response
   - Hash the password using bcrypt 
   - create the user and insert password: Hashed Password
   - if not sen response error

## In case of login 
  - problem statement
  - requirement for log in 
    - fetch email and password from request ki body
    - check email and password is filled correctly
    - check user is signed up or not by email
      - if not then redirect to sign up -message
    - if user exist 
      - compare the entered password with hashed password
      - use bcrypt.compare(pass,hashedPass) 
      - if yes then do token generation 
- Jwt token generation 
  - require 3 things 
    1. payload - create using user.information
    2. secret-key - user-defined
    3. options - like expiry time 
  - pass token into user     user.token = token
  - hide password from user  user.pass = undefined
- send all information into cookie
  - create cookie 
  - require three things
    1. name (any like "barer")
    2. token (jwt we just created)
    3. option (expires in)
    4. option eg 
    ```javascript
      const options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), 
        // from now to 3 days
        httpOnly: true,
      };
    ```
- send Data(token,user) into cookie and done 😇

```javascript
res.cookie("berar", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged in successfully, Have a nice session",
      });

```
## Middlewares for Authentication and authorization
  - problem statement
  - create Auth middleware which checks 
    - is valid user
    - is route for User
    - is route for Admin
    - is route for Visitor
  - require jwt token for authorization

- Steps to follow for extracting authorized user
 - fetched token from request ki body
    -  if not found send error user is not authorized
 - extract payload from jwt token 
 - send payload to user req.user = payload
  - if not error
- call next() 


- if Authorized user then find protected routes
- Route for isUser

  - check req.body.role == "User"
    - if not send Error
  - else call Next()


- Route for isAdmin

  - check req.body.role == "Admin"
    - if not send Error
  - else call Next()



