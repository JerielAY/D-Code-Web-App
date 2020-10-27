const { Schema, model } = require("mongoose");

const EventsSchema = new Schema(events: [{type: Schema.Types.ObjectID, ref: Event}]);
const ProjectSchema = new Schema({name: String, description: String, events: EventsSchema});

const projectSchema = new Schema({
  projects = [ProjectSchema],
});

const Projects = model("Projects", projectsSchema, "projects");

module.exports = Projects;
