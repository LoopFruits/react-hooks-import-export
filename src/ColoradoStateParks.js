import React from "react";
import aDifferentName from "./parks/howManyParks"; // altough our export was originally from howManyParks, we can change it to whatever we want in the import as long as the module has the correct pathing 
import { trees, wildlife, elevation } from './parks/RockyMountain'; // importing specific variables 


function ColoradoStateParks() {
  aDifferentName(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}
console.log(trees); 
wildlife();
elevation();

export default ColoradoStateParks;