import { useState } from "react";

const User = ({ location, name }) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(12);
  return (
    <div>
      <h2>count={count}</h2>
      <h2>count1={count1}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increse butttton
      </button>
      <h3>My Name is {name}</h3>
      <h3>i am a Senior Software Engineer!!</h3>
      <h3>Location: {location}</h3>
    </div>
  );
};
export default User;
