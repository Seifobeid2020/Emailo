import Prodkeys from "./prod.js";

const f = () => {
  let keys;

  if (process.env.NODE_ENV !== "production") {
    //We are in production - return the prod set of keys

    keys = Prodkeys;
  } else {
    keys = Prodkeys;
  }
  return keys;
};

const keys = f();
export default keys;
