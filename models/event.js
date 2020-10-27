const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  name: String,
  description: String,
  date: String
});

const Event = model("Event", eventSchema, "event");

module.exports = Event;
