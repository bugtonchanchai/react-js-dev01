import React, { useState } from "react";
import img from "./img.jpg";

const user = {
  name: "Mark Zuckerberg",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  imageSize: 200,
};

const isLoggedIn = true;

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.isFruit ? "magenta" : "darkred",
    }}
  >
    {product.title}
  </li>
));

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
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
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("You clicked me!");
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
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
      <hr />
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
};

export default MyApp;
