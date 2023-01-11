import { useRef } from 'react';
import './App.modules.css';
import finnVFern from './images/Finn V Fern.png';
import astronaut from './images/AstronautLarge.png';
import lucy from './images/Lucy Cyberpunk.png';
import shera from './images/Adora Catra.png';
import forest from './images/Autumn Forest Path.gif';
import lich from './images/The Lich.gif';
import slash from './images/Slash.gif';
import planet323 from './images/Lil Astronaut on 323.gif';
import assets16 from './images/Assets16x16.png';
import assets32 from './images/Assets32x32.png';

import sheraDimensions from './images/commissionsPage/Adora Catra Dimensions.png';
import lucyDimensions from './images/commissionsPage/Lucy Cyberpunk Dimensions.png';
import finnVFernDimensions from './images/commissionsPage/Finn V Fern Dimensions.png';

function App() {
  const scrollMessageRef = useRef(null);

  return (
    <div className="App" onWheel={() => {
        console.log("B");
        scrollMessageRef.current.style.display = 'none';
      }}>
      <div className='ScrollMessage' ref = {scrollMessageRef}>
        <div>Scroll down to see!</div>
      </div>
      <div className='IntroPage'>
        <div className='Intro'>
          <div className = 'IntroLineOne'>
            <span className='LineOneHi'>HI!</span> 
            <span className='LineOneIm'> I'M</span>
          </div>
          <div className = 'IntroLineTwo'>SUNNY</div>
          <div className = 'IntroLineThree'>AND HERE ARE SOME OF MY ARTWORKS.</div>
        </div>
      </div>
      <div className='StaticPage'>
        <div className = 'PageHeading'>STATIC SCENES</div>
        <div className='ImageContainers'>
          <div className='ImageContainer'>
            <img src={finnVFern} alt = ""></img>
          </div>
          <div className='ImageContainer'>
            <img src={astronaut} alt = ""></img>
          </div>
          <div className='ImageContainer'>
            <img src = {lucy} alt = ""></img>
          </div>
          <div className='ImageContainer'>
            <img src = {shera} alt = ""></img>
          </div>
        </div>
      </div>
      <div className = 'AnimatedPage'>
        <div className = 'PageHeading'>ANIMATED SCENES</div>
        <div className='ImageContainer'>
          <img src = {forest} alt = ""></img>
        </div>
        <div className='ImageContainer'>
          <img src = {lich} alt = ""></img>
        </div>
        <div className='ImageContainer'>
          <img src = {slash} alt = ""></img>
        </div>
        <div className='ImageContainer'>
          <img src = {planet323} alt = ""></img>
        </div>
      </div>
      <div className='AssetsPage'>
        <div className = 'PageHeading'>ASSETS</div>
        <div className='SubHeading'>16x16</div>
        <div className='AssetsContainer'>
          <img src = {assets16} alt = ""></img>
        </div>
        <div className='SubHeading'>32x32</div>
        <div className='AssetsContainer'>
          <img src = {assets32} alt = ""></img>
        </div>
      </div>
      <div className='CommissionsPage'>
        <div className='PageHeading'>COMMISSIONS</div>
        <div>Email sunnydoescommissions@gmail.com or message me on my social network accounts for a personal art piece!</div>
        <div>50% upfront cost</div>
        <div className='SubHeading'>STATIC SCENES</div>
        <div className='ImageContainers'>
          <div className='ImageContainer'>
            <div>SMALL 72x72 - $20</div>
            <img src = {sheraDimensions} alt = ""></img>
          </div>
          <div className='ImageContainer'>
            <div>MEDIUM 120x120 - $30</div>
            <img src = {lucyDimensions} alt = ""></img>
          </div>
          <div className='ImageContainer'>
            <div>LARGE 180x180 - $45</div>
            <img src = {finnVFernDimensions} alt = ""></img>
          </div>
        </div>
        <div>Backgrounds are an additional $10</div>
        <br />
        <div className='SubHeading'>ANIMATED SCENES</div>
        <div>$20-$24 depending on complexity</div>
        <div>All work will be recorded</div>
        <br />
        <div className='SubHeading'>ASSETS</div>
        <div>16x16: $3 per, $10 for 4-pack</div>
        <div>32x32: $6 per, $22 for 4-pack</div>
        <br />
        <div>DIMENSIONS AND PRICING WILL VARY ON A PRODUCT TO PRODUCT BASIS</div>
      </div>
      <div className='AboutPage'>
        <div className='PageHeading'>ABOUT ME</div>
        <div className='Bio'>
          MY NAME IS SUNNY KWONG, AND I'VE BEEN DOING PIXEL ART FOR OVER 9 
          YEARS. WHAT STARTED OFF AS A WAY TO PASS TIME, BY SCRIBBLING WITH A 
          MOUSE AND KEYBOARD INSTEAD OF A PEN AND PAPER, BECAME A LIFELONG HOBBY. 
          I AM A GENERALIST PIXEL ARTIST THAT DOES WORK IN ASSET, CHARACTER AND 
          ENVIRONMENTAL ARTS AS WELL AS ANIMATION.
        </div>
      </div>

    </div>
  );
}

export default App;
