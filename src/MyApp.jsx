import React from "react";
import img from "./img.jpg";

let isLoggedIn = true;

const user = {
  name: "Mark Zuckerberg",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  imageSize: 200,
};

function MyButton() {
  return <button>I'm a button</button>;
}

function AboutPage() {
  return (
    <>
      <h1>about</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

const MyApp = () => {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />
      <hr />
      <img src={img} className="avatar" />
      <hr />
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
        }}
      />
      <hr />
      {isLoggedIn ? <h1>Logged In</h1> : <h1>Login form</h1>}
      {isLoggedIn && <h1>Logged In</h1>}
    </>
  );
};

export default MyApp;
