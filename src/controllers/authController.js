// app.post("/login", async (req, res) => {

//     // Our login logic starts here
//      try {
//       // Get user input
//       const { email, password } = req.body;
  
//       // Validate user input
//       if (!(email && password)) {
//         res.status(400).send("All input is required");
//       }
//       // Validate if user exist in our database
//       const user = await User.findOne({ email });
  
//       if (user && (await bcrypt.compare(password, user.password))) {
//         // Create token
//         const token = jwt.sign(
//           { user_id: user._id, email },
//           process.env.TOKEN_KEY,
//           {
//             expiresIn: "5h",
//           }
//         );
  
//         // save user token
//         user.token = token;
  
//         // user
//         return res.status(200).json(user);
//       }
//       return res.status(400).send("Invalid Credentials");
      
//   }});
  