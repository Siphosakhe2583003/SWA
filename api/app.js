const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const cars = require('./cars.json');

//get all cars
app.get('/src/cars', (req, res) => {
    res.json(cars);
});

//get car by id
app.get('/src/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});

//update car
app.put('/src/cars/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});

//delete car
app.delete('/src/cars/:id', (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('/src/cars', (req, res) => {
    console.log(req);
    const newCar = req.body;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
