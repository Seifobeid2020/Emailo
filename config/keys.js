// const keys = {
//   googleClientID:
//     "670818577570-eddjabghnkkabb3f3f4ebud7mn36u8qd.apps.googleusercontent.com",
//   googleClientSecret: "YiHY26kNR0iaRGQ1SEQR4xXh",
//   mongoURI:
//     "mongodb+srv://dbEmail:xQgZhInj9AMpsmTm@semail.eznle.mongodb.net/test?retryWrites=true&w=majority",

//   cookieKey: "redacted",
// };

// export default keys;

//keys.js - figure out what set of credentials to return

// if (process.env.NODE_ENV !== "production") {
//   //We are in production - return the prod set of keys
//   // keys = require("./prod");
//   module.exports = require("./prod.js");
// } else {
//   //we are in development - return the dev keys!!!
//   // keys = require("./dev");
//   module.exports = require("./dev.js");
// }
// console.log(require("./dev.js"));
// export const key = import("./dev.js");
// export const key = import("./dev.js");
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// if (process.env.NODE_ENV !== "production") {
//   //We are in production - return the prod set of keys
//   // keys = require("./prod");
//   module.exports = require("./prod.js");
// } else {
//   //we are in development - return the dev keys!!!
//   // keys = require("./dev");
//   module.exports = require("./dev.js");
// }
import Prodkeys from "./prod.js";
import Devkeys from "./dev.js";
const f = () => {
  let keys;
  if (process.env.NODE_ENV !== "production") {
    //We are in production - return the prod set of keys
    // keys = require("./prod");
    // prod.toString = () => {
    //   return JSON.stringify(this);
    // };
    // console.log("this is prod : " + keyss.cookieKey);
    // console.log("this is prod" + prod.toString());
    keys = Devkeys;
  } else {
    //we are in development - return the dev keys!!!
    // keys = require("./dev");
    keys = Devkeys;
  }
  return keys;
};
console.log("here where the all keys: " + f());
const keys = f();
export default keys;

// console.log(module.exports);
