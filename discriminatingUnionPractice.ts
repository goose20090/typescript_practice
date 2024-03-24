/* eslint-disable @typescript-eslint/no-unused-vars */
interface MovingThing {
  speed: number;
}

// Add the necessary properties to allow for discriminating unions
interface Car extends MovingThing {
  wheels: number;
  type: "car";
}
interface Boat extends MovingThing {
  drag: number;
  type: "boat";
}
interface Plane extends MovingThing {
  drag: number;
  engines: number;
  type: "plane";
}
interface Train extends MovingThing {
  cars: number;
  wheels: number;
  type: "train";
}

type Vehicle = Car | Boat | Plane | Train;

// Without changing the parameter type, use discriminating unions
// to fix the type errors
function speed(vehicle: Vehicle) {
  console.log(vehicle.speed);
}
function wheelCount(vehicle: Vehicle) {
  if (vehicle.type === "car" || vehicle.type === "train") {
    console.log(vehicle.wheels);
  }
}
function dragAmount(vehicle: Vehicle) {
  //   if (vehicle.type === "boat" || vehicle.type === "plane") {
  if ("drag" in vehicle) {
    console.log(vehicle.drag);
  }
}
function numberOfCars(vehicle: Vehicle) {
  if (vehicle.type === "train") {
    console.log(vehicle.cars);
  }
}
