import React from "react";
import img from "./img.jpg";

const user = {
  name: "Mark Zuckerberg",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  imageSize: 200,
};

const isLoggedIn = true;

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

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
      <hr />
      <ul>{listItems}</ul>
    </>
  );
};

export default MyApp;
