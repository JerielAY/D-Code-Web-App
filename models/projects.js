// projects.js
// D-Code-Wep_App
// Authors: Team 4
// Date: 10/26/20
// License: GPL 3.0
// Instantiates and maintains a list of projects with the MongoDB database.

const { Schema, model } = require("mongoose");


//Schema for project member
const memberSchema = new Schema({ name: String, email: String,});

// Schema for each project.
const projectSchema = new Schema({name: String, description: String, members: {type: [memberSchema]} });

// Schema for a projects list.
const projectsSchema = new Schema({type: [projectSchema]});


// Instantiate member 
const Member = model("Member", memberSchema);

// Instantiate project 
const Project = model("Project", projectSchema);

// Instantiate projects 
const Projects = model("Projects", projectsSchema);



module.exports = Project, Member, Projects;
