import React from "react";
import "./Home.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="megaParentHome">
      <div className="container">
        <h1 className="homeTitle">Welcome to <span className="highlightHomeParaS">React</span></h1>

        <div className="parenthome d-flex justify-content-center">
          <div
            data-aos="flip-left"
            className="card d-flex justify-content-center"
            style={{ width: "18rem" }}
          >
            <img src={logo} className="card-img-top" alt="" />
          </div>
        </div>

        <p className="homeDesPara">
          <span className="highlightHomeParaS">React</span> is a popular 
          <span className="highlightHomeParaS"> JavaScript library </span> 
          for building user interfaces, primarily for web applications. Developed and maintained by 
          <span className="highlightHomeParaS"> Facebook</span>, it allows developers to create 
          reusable <span className="highlightHomeParaS">UI components</span> and efficiently update 
          the DOM using a <span className="highlightHomeParaS">Virtual DOM</span> approach.
        </p>

        <p className="homeDesPara">
          <span className="highlightHomeParaS">React</span> works on a 
          <span className="highlightHomeParaS"> component-based architecture</span>, 
          which means the UI is divided into small, reusable pieces called 
          <span className="highlightHomeParaS"> components</span>. Each component manages its own 
          <span className="highlightHomeParaS"> state</span> and can be composed together to build 
          complex user interfaces.
        </p>

        <p className="homeDesPara">
          One of the key features of <span className="highlightHomeParaS">React</span> is the use of 
          the <span className="highlightHomeParaS">Virtual DOM</span>. Instead of directly manipulating 
          the real DOM, React updates a virtual representation first, calculates the minimum changes 
          required, and then updates the real DOM efficiently. This results in 
          <span className="highlightHomeParaS"> faster performance </span>and smoother user experiences.
        </p>

        <p className="homeDesPara">
          <span className="highlightHomeParaS">React</span> is 
          <span className="highlightHomeParaS"> declarative</span>, which means developers describe how 
          the UI should look for a given state, and React ensures the actual UI matches that state. 
          This makes code <span className="highlightHomeParaS"> easier to understand</span>, 
          <span className="highlightHomeParaS"> debug</span>, and 
          <span className="highlightHomeParaS"> maintain</span>.
        </p>

        <p className="homeDesPara">
          Another strength of <span className="highlightHomeParaS">React</span> is its 
          <span className="highlightHomeParaS"> rich ecosystem</span>. It can be paired with 
          libraries like <span className="highlightHomeParaS">Redux</span> for state management, 
          <span className="highlightHomeParaS">React Router</span> for navigation, and testing tools 
          like <span className="highlightHomeParaS">Jest</span>. React also integrates smoothly with 
          <span className="highlightHomeParaS"> TypeScript</span> for type safety and modern front-end 
          build tools like <span className="highlightHomeParaS">Vite</span> or 
          <span className="highlightHomeParaS"> Webpack</span>.
        </p>

        <p className="homeDesPara">
          With <span className="highlightHomeParaS">React Native</span>, developers can also build 
          mobile applications for both iOS and Android using the same knowledge and components as 
          web apps. Its component reusability, performance optimizations, and strong 
          <span className="highlightHomeParaS"> community support</span> have made React one of the 
          most popular front-end libraries in the world.
        </p>

        <p className="homeDesPara">
          In this website, you will explore React’s 
          <span className="highlightHomeParaS"> history</span>, 
          <span className="highlightHomeParaS"> advantages</span>, 
          <span className="highlightHomeParaS"> working principles</span>, and 
          <span className="highlightHomeParaS"> future trends</span> in web development. 
          This foundation will help you understand why React is widely adopted and how it empowers 
          developers to create modern, dynamic, and interactive user interfaces.
        </p>
      </div>
    </div>
  );
};

export default Home;
