const mongoose = require("mongoose");

const Event = require("./event");
const User = require("./user");
const Project = require("./projects");
const DATABASE_URL = "mongodb+srv://D-CODE:Davidson6@cluster0.ewwyp.mongodb.net/D-Code-Webapp?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,  { useNewUrlParser: true });

module.exports = {
    User,
    Event,
    Project,
    db: {
      registerNewUser
    }
  };


/**
* creates a new user and returns the document with their data from the database
* @param username of the user
* @param email of the user
*/
async function createUser({ username, email }) {
    return await User.create({ username, email });
}

/**
* creates a project list for a new user.  expects an owner object from Mongo
* @param owner object from the database
* @returns a new object with the user and their closet
*/
async function createProjects({ owner }) {
    // make a new empty projects list that's connected to its owner
    const project = await Project.create({ owner });

 // connect the user object with the new closet
 const user = await User.findById(owner._id);
 user.project = project;
 await user.save();

 // return the project
 return project;
}

/**
* register a new user and create an empty closet for them
* @param name of the new user
* @param email of the new user
* @returns object with user and closet properties
*/
async function registerNewUser({ name, email }) {
    const owner = await createUser({ username: name, email });
    const project = await createProject({ owner });
    return { user, project }
}
