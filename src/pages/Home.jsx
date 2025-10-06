import React from "react";
import "./Home.css";
import logo from "../assets/logo.png";


const Home = () => {
  return (
    <div className="megaParentHome">
      <div className="container">
        <h1 className="homeTitle">Welcome to React</h1>
        <div className="parenthome d-flex justify-content-center">
          <div
            data-aos="flip-left"
            className="card d-flex justify-content-center"
            style={{ width: "18rem" }}
          >
            <img src={logo} className="card-img-top" alt="..." />
          </div>
        </div>
        <p className="homeDesPara">
          React is a popular JavaScript library for building user interfaces,
          primarily for web applications. Developed and maintained by Facebook,
          it allows developers to create reusable UI components and efficiently
          update the DOM using a virtual DOM approach.
        </p>

        <p className="homeDesPara">
          React works on a component-based architecture, which means the UI is
          divided into small, reusable pieces called components. Each component
          manages its own state and can be composed together to build complex
          user interfaces.
        </p>

        <p className="homeDesPara">
          One of the key features of React is the use of the Virtual DOM.
          Instead of directly manipulating the real DOM, React updates a virtual
          representation first, calculates the minimum changes required, and
          then updates the real DOM efficiently. This results in faster
          performance and smoother user experiences.
        </p>

        <p className="homeDesPara">
          React is declarative, which means developers describe how the UI
          should look for a given state, and React ensures the actual UI matches
          that state. This makes code easier to understand, debug, and maintain.
        </p>

        <p className="homeDesPara">
          Another strength of React is its rich ecosystem. It can be paired with
          libraries like Redux for state management, React Router for
          navigation, and testing libraries like Jest. React also integrates
          smoothly with TypeScript for type safety and with modern front-end
          build tools like Vite or Webpack.
        </p>

        <p className="homeDesPara">
          With React, developers can also build mobile applications using React
          Native, making the skills transferable beyond web development. Its
          component reusability, performance optimizations, and strong community
          support have made React one of the most popular front-end libraries in
          the world.
        </p>

        <p className="homeDesPara">
          In this website, you will explore React’s history, advantages, working
          principles, and potential future trends in web development. This
          foundation will help you understand why React is widely adopted and
          how it empowers developers to create modern, dynamic, and interactive
          user interfaces.
        </p>
      </div>
    </div>
  );
};

export default Home;
