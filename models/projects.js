// projects.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/26/20
// License: GPL 3.0
// Instantiates and maintains a list of projects with the MongoDB database.

const { Schema, model } = require("mongoose");

// // Schema for events information relating to each project.
// const EventsSchema = new Schema({type: Schema.Types.ObjectID,
//  ref: "Event"});

// Schema for each project.
const ProjectSchema = new Schema({name: String,
  description: String, events: [{type: Schema.Types.ObjectId, ref: "Event"}] });

// Schema for project list.
const projectSchema = new Schema({
  projects : [ProjectSchema]
});

// Instantiate projects information.
const Projects = model("Projects", projectSchema, "projects");

module.exports = Projects;
