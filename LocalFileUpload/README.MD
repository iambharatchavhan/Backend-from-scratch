# File Handeling (Local file upload)

1. congfig / database.js
  a. creating connection to the database
2. congfig / cloudinaryConnect.js
  a. creating connection to the cloudinaray 
  b. require name, key and secret
  b. example 
    ```javascript
    cloudinary.config({ 

  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY

                    });

    ```
3.  Simple express middleware for uploading files. 

```javascript
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

```

4. define schema for file upload handler
   - what it does? 
   - it fetch media from client(local server) store in temp and upload to the cloud
- ✏️ How to extract file ?
- 🖊️ Follow the hierarchy => req.files.file

- define the path of the file __dirname => CWD current working directory
- eg path = __dirname + "/files/" + date.now() + extension

   ``` let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}` ```

- move to server using mv with cb function mv(path,(err)=>{})

 



