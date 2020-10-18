//Import user model 
const User = require("../model/User")

//User auth methods

//Register new user
exports.registerNewUser = async (req, res) => {
    try {
        let user = await User.find({ email: req.body.email}) //Check if the user exists
        if (user.length>=1){
            return res.status(409).json({
                message: "The email is already in use!"
            })
        }
        user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            location: req.body.location,
            password: req.body.password
        })
        let data = await user.save()
        const token = await user.generateAuthToken() //Calling the token generating method in the model
        res.status(201).json({ data, token})
    } catch (err) {
        res.status(400).json({err: err})
    }
}

//Login user
exports.loginUser = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      user = await User.findByCredentials(email, password);
      if (!user) {
        return res
          .status(401)
          .json({ error: "Login failed! Check authentication credentials" });
      }
     token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (err) {
      res.status(400).json({ err: err });
    }
  };
  exports.getUserDetails = async (req, res) => {
    await res.json(req.userData);
  };


/*{
"name": "Amos Kosgei",
"email": "cheruiyotca@gmail.com",
"mobile": "712345678",
"location": "Nairobi,Kenya",
"password": "amosamos"
}
*/
/*{
    "name": "test account",
    "email": "test@gmail.com",
    "mobile": "120456",
    "location": "Nairobi,Kenya",
    "password": "amosamos"
}*/