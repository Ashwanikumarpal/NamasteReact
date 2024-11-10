import User from "./User";
import UserClass from "./UserClass";
import usercontext from "../utils/usercontext";

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <div>
        user Logged in:
        <usercontext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </usercontext.Consumer>
      </div>
      <User location={"Delhi (function)"} name={"Ashwani Pal(funstion)"} />
      <UserClass location={"Delhi (class)"} name={"Ashwani pal(class)"} />
    </div>
  );
};
export default About;
