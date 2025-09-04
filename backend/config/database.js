const mongoose = require('mongoose');

const connectDatabase = () => {
   
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase

PORT = 4001
NODE_ENV = DEVELOPMENT
DB_URI = 

CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 

JWT_SECRET = 
JWT_EXPIRES_TIME = 
COOKIE_EXPIRES_TIME = 

SMTP_HOST = 
SMTP_PORT = 
SMTP_EMAIL = 
SMTP_PASSWORD = 
SMTP_FROM_EMAIL = 
SMTP_FROM_NAME = 

CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 