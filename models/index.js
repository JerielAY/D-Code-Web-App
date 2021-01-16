
// const DATABASE_URL = "mongodb+srv://D-CODE:Davidson6@cluster0.ewwyp.mongodb.net/D-Code-Webapp?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://D-CODE:davidson6@cluster0.ewwyp.mongodb.net/D-CODE?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true },{ useUnifiedTopology: true });
const { User, Projects } = require("../models");
client.connect(function(err, client) {
  const myclient = client;
  if(!err) {
    console.log("We are connected");
  }


    /**
  * creates a new user and returns the document with their data from the database
  * @param username of the user
  * @param email of the user
  */
  async function createUser({ username, email }) {
    const result = await User.create({ username, email, function(err) {if(err) return handleError(err); } });
    return  result;

  }

  /**
  * creates a project list for a new user.  expects an owner object from Mongo
  * @param owner object from the database
  * @returns a new object with the user and their projects list
  */
  async function createProjects({ owner }) {
    // make a new empty projects list that's connected to its owner
    const project = await Projects.create(owner);

  // connect the user object with the new project list
  const user = await User.findById(owner._id);
  user.projects = project;
  await user.save(function(err) {
  if(err) return handleError(err);
  });

  // return the project
  return project;
  }

  /**
  * register a new user and create an empty project list for them
  * @param name of the new user
  * @param email of the new user
  * @returns object with user and project properties
  */
  async function registerNewUser({ name, email }) {
    const user = await createUser({ name, email });
    console.log(user);
    const projects = await createProjects(user);
    console.log(projects);
    return { user, projects };
  }



  module.exports = {
    Projects,
    client: {
      registerNewUser
    }
  };

});


client.close();








