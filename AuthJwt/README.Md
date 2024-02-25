# Problem statement 
   - create backend for user singUp and Login
   - add basic validations like = empty filed , email should be uniques of each user
   - while sign-up password should be hashed
   - use jwt token for authorization
   - passing jwt use headers 


  - approach 
     - create schemas for for user
          -  name
          -  email
          -  password
          -  timestamp of creation

- create sing-up controller
    - fetch data from user form request ki body - name email password
    - check all details are filled 
    - check email is already registered
    - if all ok 
       - hash password using bcrypt.hash(pass,saltRounds)
       - send it into user 
    - if all works 
      - create new sign up entry and save to the database
    - if error 
      - handle each error using status code 

- create login controller
 
