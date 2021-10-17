const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const config = require('config');
const cookieParser = require('cookie-parser');

var app = express()
app.use(cookieParser())

router.post(
    '/',
   
    [
        check('name', 'name is required')
            .not()
            .isEmpty(),
        check('email', 'Please enter a valid Email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
    ], 
    async (req, res) => {
      
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            
            return res.status(400).json({ errors: errors.array() });
        }
      
        const { name, email, password } = req.body;
       
        try {
            let user = await User.findOne({email}); 
            if(user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }
              
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })
            user = new User({
                name, 
                email,
                avatar,
                password
            });
            // var id;
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
        //    User.find({email:req.body.email},(error,data)=>{
        //         if(error)
        //         console.log(error);
        //         else
        //         {
        //              console.log(data[0]._id);
        //              id=data[0]._id;
        //              console.log(id);
                     
        //         }
              
        //     });
      
        //     res.cookie('_id',data[0].email);
       
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(
                payload, 
                config.get('jwtSecret'),
                { expiresIn: 360000},
                (err, token) => {
                    if(err) throw err;
                    res.json({token});
                }
            );
        } catch(err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
        
    }
);

module.exports = router;