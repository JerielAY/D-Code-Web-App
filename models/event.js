// event.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/26/20
// License: GPL 3.0
// Instantiates and maintains event information with the MongoDB database.

const { Schema, model } = require("mongoose");

// Schema for events information relating to each project.
const eventSchema = new Schema({
  name: String,
  description: String,
  date: String
});

// Instantiate event information.
const Event = model("Event", eventSchema, "event");

module.exports = Event;
