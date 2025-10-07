import React from 'react';
import "./History.css";
import founder from "../assets/founder.jpg";

const History = () => {
  return (
    <div className='MegaParentHistory'>
      <div className="container">
        <h1 className="historyTitle">History of React</h1>

        <div className='rows'>
          <div className='col-4 parentFinderHisImage'>
            <img src={founder} alt="Jordan Walke" />
          </div>
          <div className='col-7 parentFinderHis'>
            <h3>Jordan Walke - Creator of React</h3>
            <p className="historyDesParaAuthor">
              Jordan Walke is a software engineer at <span className="highlightHistoryParaS">Facebook</span> who created <span className="highlightHistoryParaS">React</span> in 2011. 
              He developed it as an internal solution to manage <span className="highlightHistoryParaS">Facebook’s</span> complex and dynamic user interfaces. 
              Known for his innovation, Walke introduced the concept of the <span className="highlightHistoryParaS">Virtual DOM</span>, 
              which revolutionized how web applications handle UI updates efficiently. 
              His work laid the foundation for one of the most popular and widely adopted JavaScript libraries in modern web development, 
              enabling developers worldwide to build fast, interactive, and reusable components.
            </p>
          </div>
        </div>

        <div className='discriptionsHistory'>
          <p className="historyDesPara">
            After its open-source release in 2013, <span className="highlightHistoryParaS">React</span> quickly gained popularity among developers because of its component-based architecture and declarative programming style. 
            Companies like <span className="highlightHistoryParaS">Facebook</span>, <span className="highlightHistoryParaS">Instagram</span>, <span className="highlightHistoryParaS">WhatsApp</span>, and <span className="highlightHistoryParaS">Airbnb</span> adopted <span className="highlightHistoryParaS">React</span> to build dynamic and scalable user interfaces.
          </p>

          <p className="historyDesPara">
            In 2015, <span className="highlightHistoryParaS">React Native</span> was introduced, allowing developers to use <span className="highlightHistoryParaS">React</span> for building mobile applications on iOS and Android. 
            This innovation enabled a unified codebase for web and mobile, further increasing <span className="highlightHistoryParaS">React’s</span> adoption across the industry.
          </p>

          <p className="historyDesPara">
            Over time, the React team introduced several important features like <span className="highlightHistoryParaS">JSX</span> for template syntax, the <span className="highlightHistoryParaS">Context API</span> for global state management, 
            and <span className="highlightHistoryParaS">React Hooks</span> in 2019. Hooks simplified state management in functional components and reduced the need for class-based components, streamlining the development process.
          </p>

          <p className="historyDesPara">
            The <span className="highlightHistoryParaS">React ecosystem</span> continued to expand with supporting libraries such as <span className="highlightHistoryParaS">Redux</span>, <span className="highlightHistoryParaS">React Router</span>, and <span className="highlightHistoryParaS">Next.js</span>, 
            which enhanced state management, routing, and server-side rendering capabilities. These tools made <span className="highlightHistoryParaS">React</span> suitable for both small-scale projects and large enterprise applications.
          </p>

          <p className="historyDesPara">
            Today, <span className="highlightHistoryParaS">React</span> maintains a strong and active developer community. Conferences, online tutorials, and open-source contributions ensure that <span className="highlightHistoryParaS">React</span> continues to evolve, 
            keeping pace with modern web development trends like server-side rendering, performance optimization, and mobile-first design.
          </p>

          <p className="historyDesPara">
            <span className="highlightHistoryParaS">React’s history</span> is a testament to continuous innovation, collaboration, and adaptation. 
            From an internal <span className="highlightHistoryParaS">Facebook</span> project to a worldwide standard for front-end development, <span className="highlightHistoryParaS">React</span> has fundamentally changed the way developers build dynamic and efficient user interfaces.
          </p>
        </div>
      </div>
    </div>
  )
}

export default History;
