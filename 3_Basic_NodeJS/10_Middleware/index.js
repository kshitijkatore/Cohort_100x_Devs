const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require('fs');
const app = express();
const PORT = 3000;


// Middleware - Pligin
app.use(express.urlencoded({ extended: false}));

app.use((req, res, next)=>{
    console.log("Middleware 1");
    req.myUserName = "Xitijkatore.dev";
  next();
});

app.use((req, res, next)=>{
    console.log("Middleware 2", req.myUserName);
    fs.appendFile('./log.txt', `${Date.now()}:${req.ip}: ${req.method} :${req.path}\n`, (err, data)=>{
        next();
    });

});

//Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

  res.send(html);
});

// REST-APIs
app.get("/api/users", (req, res) => {
  return res.json(users);
});


app.post("/api/users", (req, res) => {
  const body = req.body;
  // console.log("Body", body);

  users.push({...body, id: users.length + 1});
  
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
    return res.json({status : "success", id: users.length});
  });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    if (user) {
      res.status(200).json(user); // Respond with updated user object
    } else {
      res.status(404).json({ error: 'User not found' }); // Respond with error if user is not found
    }
  }) 
  .patch((req, res) =>{
    const id = req.params.id;
    const body = req.body;
    const user = users.find((user) => user.id == id); // Find the user by ID
    if (user) {
      Object.assign(user, body); // Update user object with the data from the request body
      res.status(200).json(user); // Respond with updated user object
    } else {
      res.status(404).json({ error: 'User not found' }); // Respond with error if user is not found
    }
  })
  .delete((req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server Started PORT:${PORT}`);
});