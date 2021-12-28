"use strict";

const diceInput = document.querySelector("#dice-quantity");
const diceSides = document.querySelector("#dice-sides");
const selectLog = document.querySelector(".select-log");
const diceInfo = document.querySelector(".dice-info");
const log = document.querySelector(".log");

function handleForm(e) {
  e.preventDefault();
}
diceInfo.addEventListener("submit", handleForm);

function diceQuantity(e) {
  log.textContent = e.target.value;
}
diceInput.addEventListener("change", diceQuantity);

function assignDiceSides(e) {
  selectLog.textContent = e.target.value;
}
diceSides.addEventListener("change", assignDiceSides);
