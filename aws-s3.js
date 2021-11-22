require('dotenv').config()
const AWS=require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const s3=new AWS.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
})

module.exports=(file)=>{
let s3FileType=file.originalname.split(".")[1];
let fileName=`${uuidv4()}.${s3FileType}`;

const s3Params={
    Bucket:process.env.AWS_S3_BUCKET,
    Key:fileName,
    Body:file.buffer,
    ACL:'public-read'


}
console.log(process.env.AWS_S3_BUCKET)
    
return s3.upload(s3Params).promise();


}