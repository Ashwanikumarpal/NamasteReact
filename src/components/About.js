import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <User location={"Delhi (function)"} name={"Ashwani Pal(funstion)"} />
      <UserClass location={"Delhi (class)"} name={"Ashwani pal(class)"} />
    </div>
  );
};
export default About;
