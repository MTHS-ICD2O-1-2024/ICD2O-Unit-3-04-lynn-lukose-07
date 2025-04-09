// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Updated by Lynn Lukose
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function convertFahrenheitToCelsius() {
  // input
  const degreesInFahrenheit = parseFloat(
    document.getElementById("temp-f").value
  )

  // process
  const degreesInCelsius = (degreesInFahrenheit - 32) * (5 / 9)

  // output
  document.getElementById("temperature").innerHTML =
    "The temperature in Celsius is: " + degreesInCelsius.toFixed(3) + " °C"
}
