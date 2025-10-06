import React from "react";
import "./Working.css";

function Working() {
  return (
    <div className="MegaParentWorking">
      <div className="container">
        <h2 className="workingTitle">How React Works</h2>

        <div className="workingSection">
          <h3 className="workingSubTitle">1. Component-Based Architecture</h3>
          <p className="workingDesPara">
            <span className="highlightWorkingParaS">React</span> applications
            are built using independent, reusable components. Each component
            handles its own structure and logic, making the code modular and
            easier to debug. This approach allows developers to reuse components
            across multiple pages, leading to faster development and consistent
            UI behavior.
          </p>
        </div>

        <div className="workingSection">
          <h3 className="workingSubTitle">2. Virtual DOM</h3>
          <p className="workingDesPara">
            React maintains a lightweight copy of the actual DOM called the 
            <span className="highlightWorkingParaS">Virtual DOM</span>. When
            data changes, React compares the current and previous Virtual DOMs
            and updates only the changed elements in the real DOM. This process,
            known as <span className="highlightWorkingParaS">diffing</span>,
            boosts performance and makes updates extremely fast.
          </p>
        </div>

        <div className="workingSection">
          <h3 className="workingSubTitle">3. One-Way Data Flow</h3>
          <p className="workingDesPara">
            React follows a one-directional data flow, meaning data is passed
            from parent components to child components using 
            <span className="highlightWorkingParaS">props</span>. This makes it
            easier to manage data and ensures a predictable flow of
            information. If child components need to send data back, they use
            callback functions provided by the parent.
          </p>
        </div>

        <div className="workingSection">
          <h3 className="workingSubTitle">4. JSX Syntax</h3>
          <p className="workingDesPara">
            React uses <span className="highlightWorkingParaS">JSX</span>, a
            JavaScript syntax extension that lets developers write HTML-like
            code directly within JavaScript. JSX makes code more readable,
            enables UI structure visualization, and allows developers to include
            dynamic values using curly braces <code>{"{}"}</code>.
          </p>
        </div>

        <div className="workingSection">
          <h3 className="workingSubTitle">5. React Hooks</h3>
          <p className="workingDesPara">
            <span className="highlightWorkingParaS">Hooks</span> make functional
            components more powerful by adding features like state and lifecycle
            management. Common hooks like 
            <span className="highlightWorkingParaS">useState</span> and 
            <span className="highlightWorkingParaS">useEffect</span> simplify
            state handling and side-effect management without needing class
            components.
          </p>
        </div>

        <div className="workingSection">
          <h3 className="workingSubTitle">6. Reconciliation Process</h3>
          <p className="workingDesPara">
            When the state or props of a component change, React determines what
            parts of the UI need to be updated through a process called 
            <span className="highlightWorkingParaS">Reconciliation</span>. It
            compares the old and new Virtual DOM trees and efficiently updates
            only the modified parts — making React applications smooth and
            high-performing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Working;
