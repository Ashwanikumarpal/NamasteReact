import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "mkvngkv",
        avatar_url: "dummyurl",
      },
    };
  }

  async componentDidMount() {
    //Api call happens here
    const data = await fetch("https://api.github.com/users/hiteshchoudhary");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    //const { count, count1 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h3>My Name is {name}</h3>
        <img src={avatar_url} />
        <h3>i am a Senior Software Engineer!!</h3>
        <h3>Location:{location}</h3>
      </div>
    );
  }
}

export default UserClass;
