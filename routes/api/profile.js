// aws-sdk code
require("dotenv").config();
const provider = require("../db/models/provider");
const aws = require( 'aws-sdk');
const multerS3 = require( 'multer-s3' );
const multer = require( 'multer' );
const path = require( 'path' );
const url = require( 'url' );


// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });


// Middleware
const router = express.Router();

// Start of Profile Image Storage
const s3 = new aws.S3({
    accessKeyId: 'AWS_ACCESS_KEY_ID',
    secretAccessKey: 'AWS_SECRET_ACCESS_KEY',
    Bucket: 'onclick'
});

// Single Upload only
const profileImgUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'onclick',
        acl: 'public-read',
        key: fuction (req, file, cb) {
            cb(null,
            path.basename( file.originalname,
            path.extname( file.originalname ) ) +
            '-' + Date.now() +
            path.extname( file.originalname ) )
        }
    }),
    limits: { fileSize: 20000000 },
    fileFilter: function( req, file, cb ){
        checkFileType: (file, cb );
    }
}).single('profileImage');
function checkFileType( file, cb ){
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = 
    filetypes.test( path.extname( file.originalname ).toLowerCase());
    const mimetype =
    filetypes.test( file.mimetype );
    if( mimetype && extname ){
        return cb( null, true );
    } else {
        cb ( 'Error: Images only' );
    }
    }
router.post( '/profile-img-upload', 
( req, res ) => {
profileImgUpload ( req, res, ( error ) 
=> {
    // console.log( 'request0kokoko', req.file );
    // console.log( 'error', error );
    
    if ( error ){
    console.log( 'errors', error );
    res.json( { error: error } );
            } else {
                if ( req.file === undefined ){
                    console.log( 'Error: No File Selected' );
                    res.json('Error: No File Selected' );
                } else {
                    if( req.file === undefined ){
                        console.log( 'Error: No FIle Selected' );
                        res.json( 'Error: No FIle Selected' );
                    } else {
                        const imageName = req.file.key;
                        const imageLocation = req.file.location;
                        res.json( { 
                            image: imageName,
                            location: imageLocation
                        } );
                    }
                }
                } );
            } );
        });
// const uploadsBusinessGallery = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'onlick',
//         acl: 'public-read',
//         key: function (req, file, cb) {
//             cb( null,
//             path.basename( file.originalname,
//             path.extname( file.originalname ) ) + 
//             '-' + Date.now() + 
//             path.extname( file.originalname ) ) 
//         ]
//         })
// })
module.exports = router
