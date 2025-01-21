const express = require("express");
const employees = require("./employees");

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  console.log(randomEmployee);
  if(!randomEmployee){
    res.status(404).send("Random employee is not found!")
  } else {
    res.send(randomEmployee);
  }
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  const employee = employees.find((element)=> element.id == id);

  if(!employee) {
    res.status(404).send("Employee is not found!");
  } else {
    res.json(employee);
  }
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `);
})