import React from "react";

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
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <div></div>
    </>
  );
};

export default MyApp;
