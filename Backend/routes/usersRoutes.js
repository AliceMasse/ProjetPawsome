
import express from 'express';
const router = express.Router();
import User from '../models/userModel.js';
import verifyToken from '../middleware/AuthMiddleware.js';  
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer'
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';
import cors from 'cors';


const app = express();
app.use(cors({
  origin: '*', // Replace YOUR_FRONTEND_PORT with the actual port of your front-end
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// tous les utilisateurs
router.get('/users', verifyToken, async (req, res) => {
    try {
       
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Passport middleware setup
router.use(passport.initialize());


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// Google 
passport.use(new GoogleStrategy({
  clientID: 'your_google_client_id',
  clientSecret: 'your_google_client_secret',
  callbackURL: 'http://192.168.1.27:3000/auth/google/callback',  // Update with your actual callback URL
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // tchouf Google ID mwjouda fel BD
    let user = await User.findOne({ 'google.id': profile.id });

    if (!user) {
      // mouch mawjouda taaml wehd 
      user = await User.create({
        google: {
          id: profile.id,
          email: profile.emails[0].value,
          
        },
       
      });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// Facebook 
passport.use(new FacebookStrategy({
  clientID: 'your_facebook_app_id',
  clientSecret: 'your_facebook_app_secret',
  callbackURL: 'http://192.168.1.27:3000/auth/facebook/callback', 
  profileFields: ['id', 'displayName', 'email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // tchouf Facebook ID mwjouda fel BD
    let user = await User.findOne({ 'facebook.id': profile.id });

    if (!user) {
      
      user = await User.create({
        facebook: {
          id: profile.id,
          email: profile.emails[0].value,
          
        },
        
      });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

//  Google OAuth2 authentication
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after successful Google authentication
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    
    res.redirect('/');
  }
);

//  Facebook OAuth2 authentication
router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Callback route after successful Facebook authentication
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    
    res.redirect('/');
  }
);

class Pet {
    static create(data) {
      // This is a mock, replace it with your actual database logic
      console.log('Creating new Pet:', data);
      return data;
    }
  }
  
  //  verification email
  async function sendVerificationEmail(email, verificationCode) {
    // Configure email 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'oussemamourali1@gmail.com',
        pass: 'nudq ktep xxoj qtfq',
      },
    });
  
    // Email 
    const mailOptions = {
      from: 'oussemamourali1@gmail.com',
      to: email,
      subject: 'Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };
  
    // envoyer email
    await transporter.sendMail(mailOptions);
  }

// créer user
router.post('/users', async (req, res) => {
    const { Username, Password, Email, PhoneNumber, Role } = req.body;

  try {
    // Validation
    if (!Email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    

    // Email format 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    // Generate a random verification code
    const verificationCode = crypto.randomBytes(6).toString('hex');

    // envoyer email
    await sendVerificationEmail(Email, verificationCode);

    
    const user = await User.create({
      Username,
      Password,
      Email,
      PhoneNumber,
      Role,
      verificationCode,
    });

    res.status(201).json({ message: 'User created. Check your email for verification.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

//  l'authentification
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Trouver l'utilisateur par son email
        const user = await User.findOne({ Email: email });

        if (!user || user.Password !== password) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Générer un jeton d'authentification
        const token = jwt.sign({ userId: user._id, email: user.Email, role: user.Role }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



export default router;
