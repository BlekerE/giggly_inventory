import React from "react";
import ReactDOM from 'react-dom';
import "./InventoryTable.css";

function InventoryTable(){

    {/*Arrays to hold the different products, designs, colors and vinyls*/}
    const products = ["Grill","Feet","Vinyl"];
    const design = ["Truck", "Board"];
    const colors = ["Red","Blue","Black"];
    const vinyls = ["Camo", "Flag", "Flower", "Bark", "Wonder"];
    const walker = ["2-Wheels","4-Wheels"];
    const bottoms = ["Puppy", "Bobber"];
    return(
      <div class="across">
        {/*Nested bullet points seen on the InventoryTable page*/}
        <ul class="products"><h2 class="inventory">Grill</h2>
          {design.map((value, index) => {
            return <li key={index}>{value}
              <ul>
                {colors.map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ul>
            </li>
          })}
        </ul>

        <ul class="products"><h2 class="inventory">Feet</h2>
          <li>Puppy</li>
              <ul>
                {colors.map((value, index) => {
                  return <li key={index}>{value}</li>
                })}
              </ul>
          <li>Bobber</li>
        </ul>

        <ul class="products"><h2 class="inventory">Vinyl</h2>
          {walker.map((value, index) => {
            return <li key={index}>{value}
            <ul>
              {vinyls.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
            </li>
          })}
        </ul>
      </div>
    )

}

export default InventoryTable
