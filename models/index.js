
// const DATABASE_URL = "mongodb+srv://D-CODE:Davidson6@cluster0.ewwyp.mongodb.net/D-Code-Webapp?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const User = require("./user");
const Projects = require("./projects");
const uri = "mongodb+srv://D-CODE:davidson6@cluster0.ewwyp.mongodb.net/DCODE?retryWrites=true&w=majority&ssl=true";
// mongoose.connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
try {
  mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
  console.log("connected"));    
}catch (error) { 
  console.log("could not connect");    
}

mongoose.connection.on('error', err => {
  console.log("Something happened to the connection");
  console.log(err);
});

// const connection = mongoose.connection;

// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });


module.exports = {
  User,
  Projects,
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
  * @returns a new object with the user and their projects list
  */
  async function createProjects({ owner }) {
    console.log({owner});
    // make a new empty projects list that's connected to its owner
    const project = await Projects.create({owner});

  // connect the user object with the new project list
  
  const user = await User.findById(owner._id);
  user.projects = project;
  await user.save(function (err) {
  if (err){
    console.log("there was an error in create projects");
  };
  console.log("saved");
});;

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
    const owner = await createUser({ username: name, email });
    console.log(owner);
    console.log(owner.id);
    const projects = await createProjects({owner});
    console.log(projects);
    return { owner, projects };
  }
