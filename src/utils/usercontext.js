import { createContext } from "react";

const usercontext = createContext({
  loggedInUser: "default user",
});

export default usercontext;
