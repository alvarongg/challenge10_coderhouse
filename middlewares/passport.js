const passport = require("passport");
const path = require("path");
//const bCrypt = require('bcrypt')
const LocalStrategy = require("passport-local").Strategy;


const Contenedor = require("../class/contenedor");
const users_contenedor = new Contenedor(
  path.join(__dirname, "../data/users.json")
);

/* function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
} */
/* function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
} */

function validPassword(user, password) {
  let index = users_contenedor.getByUser(user.username);
  console.log(index);
  if (users_contenedor.getAll()[index].password === password) {
    console.log("paso");
    return user;
  } else {
    console.log("Invalid password");
    return false;
  }
}
/* LOGIN PASSPORT */

function getByUsername(username) {
  try {
    const users = users_contenedor.getAll();
    const match = users.find((user) => user.username === username);
    return match ? match : null;
  } catch (error) {
    throw new Error(
      `Error al obtener el usuario con username:'${username}': ${error}`
    );
  }
}

passport.use(
  'login',
  new LocalStrategy((username, password, callback) => {
    try {
      const User = getByUsername(username);
      console.log("Usuario para loguear " + User);
      if (!User) {
        console.log("User Not Found with username " + username);
        return callback(null, false);
      }

      

      callback(null, validPassword(User, password));
    } catch (error) {
      console.error(`Error al loguear usuario: ${error}`);
      callback(error);
    }
  })
);

/* REGISTER PASSPORT */
passport.use(
  'signup',
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, callback) => {
      try {
        const User = getByUsername(username);
        if (User) {
          console.log("User already exists");
          return callback(null, false);
        }
        const { name, address, age, phone, avatar } = req.body;
        const newUser = {
          username,
          password: password /* createHash(password) */,
          name,
          address,
          age,
          phone,
          avatar,
          role: "user",
        };
        const newUserAdded = users_contenedor.save(newUser);

        console.log(
          `${username} Registration succesful with ID ${newUserAdded.id}`
        );

        callback(null, newUserAdded);
      } catch (e) {
        console.log(`Error passport.js singup, ${e}`);
      }
    }
  )
);

passport.serializeUser((user, callback) => {
  callback(null, user);
});

passport.deserializeUser((id, callback) => {
  let user = users_contenedor.getById(id);
  callback(null, user);
});

const passportAuthLogin = passport.authenticate('login');

const passportAuthRegister = passport.authenticate('signup');

module.exports = { passport, passportAuthLogin, passportAuthRegister };
