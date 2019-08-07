var LocalStrategy = require('passport-local').Strategy;
var db            = require('../db/models');

// expose this function to our app using module.exports
module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((uuid, done) => {
        db.user.findOne({where: {id: uuid}})
            .then(function(user){
                if(user) {
                    done(null, user.get());
                } else {
                    done(user.errors, null);
                }
            });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists

        db.user.findOne({
            where: {
            	email: email
            }
        })
            .then(function(user, err) {
                if(err) {
                    return done(err);
                }
                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false, 'That email is already taken.');
                } else {
                // if there is no user with that email
                // create the user
                    db.user.create({
                        email: req.body.email,
                        password: password
                    })
                        .then(function(dbUser){
                            // send post back to render
                            return done(null, dbUser);
                        })
                        .catch(function(err) {
                            // handle error;
                            console.log(err);
                        });
                }
            });
        });

    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        db.user.findOne({
            where: {
                email: req.body.email
            }
        }).then((user, err) => {
            // if there are any errors, return the error before anything else
            if (err){
                console.log("err", err);
                return done(err);
            }
            // if no user is found, return the message
            if (!user){
                return done(null, false,'No user found.'); 
            }
            // if the user is found but the password is wrong
            if (user.password !== req.body.password){
                return done(null, false, 'invalid email / password combination.');
            }
            // all is well, return successful user
            return done(null, user);
        });

    }));
};




