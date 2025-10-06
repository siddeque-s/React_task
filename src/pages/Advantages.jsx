import React from 'react'
import "./Advantages.css"
import speed from "../assets/speedn.png"
import comb from "../assets/compn.png"
import gear from "../assets/gearn.png"
import community from "../assets/commn.png"

const Advantages = () => {
  return (
    <div className="MegaParentAdvantages">
      <div className="container">
        <h2 className="advantagesTitle">Key Advantages of React</h2>
<br />
<br />

       
        <div className='rows parentofAdvantages'>
          <div className="col-3 parentAdvantaParaImg">
            <img src={speed} alt="" />
          </div>
          <div className="col-7 parentAdvantaPara">
            <h3 className="advantagesTitle">1. Fast Performance</h3>
            <p className="advantagesDesParag">
              Thanks to the <span className="highlightAdvantagesParaS">Virtual DOM</span>, 
              <span className="highlightAdvantagesParaS"> React </span> only updates the parts of the UI that have changed,
              resulting in blazing-fast rendering and smoother user experiences.
              This efficiency ensures even complex applications remain highly responsive, 
              enhancing user satisfaction and engagement.
            </p>
          </div>
        </div>

        <div className="rows parentofAdvantages">
          <div className="col-7 parentAdvantaPara">
            <h3 className="advantagesTitle">2. Reusable Components</h3>
            <p className="advantagesDesParag">
              <span className="highlightAdvantagesParaS">React</span> follows a component-based structure, 
              allowing developers to create modular and reusable UI blocks. This approach simplifies 
              maintenance, enhances readability, and boosts development speed — particularly for 
              large-scale applications handled by multiple teams.
            </p>
          </div>
          <div className="col-3 parentAdvantaParaImg">
            <img src={comb} alt="" />
          </div>
        </div>

       
        <div className='rows parentofAdvantages'>
          <div className="col-3 parentAdvantaParaImg">
            <img src={gear} alt="" />
          </div>
          <div className="col-7 parentAdvantaPara">
            <h3 className="advantagesTitle">3. Rich Ecosystem</h3>
            <p className="advantagesDesParag">
              The <span className="highlightAdvantagesParaS">React ecosystem</span> includes powerful libraries 
              and tools such as <span className="highlightAdvantagesParaS">Redux</span>, 
              <span className="highlightAdvantagesParaS"> React Router</span>, and 
              <span className="highlightAdvantagesParaS"> Next.js</span>. Together, they make state management, 
              routing, and server-side rendering incredibly efficient, helping developers build robust, 
              scalable applications with ease.
            </p>
          </div>
        </div>

        <div className="rows parentofAdvantages">
          <div className="col-7 parentAdvantaPara">
            <h3 className="advantagesTitle">4. Cross-Platform Development</h3>
            <p className="advantagesDesParag">
              With <span className="highlightAdvantagesParaS">React Native</span>, developers can create mobile apps 
              for both iOS and Android using the same codebase and React knowledge. This enables faster 
              development, cost efficiency, and smoother collaboration between web and mobile teams.
            </p>
          </div>
          <div className="col-3 parentAdvantaParaImg">
            <img src={community} alt="" />
          </div>
        </div>

        <div className="rows parentofAdvantages">
          <div className="col-3 parentAdvantaParaImg">
            <img src={speed} alt="" />
          </div>
          <div className="col-7 parentAdvantaPara">
            <h3 className="advantagesTitle">5. Declarative & Maintainable</h3>
            <p className="advantagesDesParag">
              <span className="highlightAdvantagesParaS">React's</span> declarative syntax makes it simple 
              to describe how the UI should look for any given state. This predictability 
              reduces bugs, simplifies debugging, and improves long-term code maintenance — 
              a huge win for growing applications.
            </p>
          </div>
        </div>

        
        <div className="rows parentofAdvantages">
          <div className="col-7 parentAdvantaPara">
            <h3 className="advantagesTitle">6. Strong Community Support</h3>
            <p className="advantagesDesParag">
              Backed by <span className="highlightAdvantagesParaS">Meta</span> and a massive open-source 
              community, <span className="highlightAdvantagesParaS">React</span> continues to evolve with 
              modern tools, libraries, and tutorials. Developers benefit from community-driven 
              innovation, quick solutions to problems, and continuous improvement of the framework.
            </p>
          </div>
          <div className="col-3 parentAdvantaParaImg">
            <img src={gear} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}


export default Advantages