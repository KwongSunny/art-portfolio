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

function App() {
  return (
    <div className="App">
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
        <div className='ImageContainer'>
          <img src={finnVFern}></img>
        </div>
        <div className='ImageContainer'>
          <img src={astronaut}></img>
        </div>
        <div className='ImageContainer'>
          <img src = {lucy}></img>
        </div>
        <div className='ImageContainer'>
          <img src = {shera}></img>
        </div>
      </div>
      <div className = 'AnimatedPage'>
        <div className = 'PageHeading'>ANIMATED SCENES</div>
        <div className='ImageContainer'>
          <img src = {forest}></img>
        </div>
        <div className='ImageContainer'>
          <img src = {lich}></img>
        </div>
        <div className='ImageContainer'>
          <img src = {slash}></img>
        </div>
        <div className='ImageContainer'>
          <img src = {planet323}></img>
        </div>
      </div>
      <div className='AssetsPage'>
        <div className = 'PageHeading'>ASSETS</div>
        <div>16x16</div>
        <div className='AssetsContainer'>
          <img src = {assets16}></img>
        </div>
        <div>32x32</div>
        <div className='AssetsContainer'>
          <img src = {assets32}></img>
        </div>
      </div>
      <div className='CommissionsPage'>
        <div className='PageHeading'>COMMISSIONS</div>
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
