import React from 'react';
import SideBar from './sidebar';
import FunctionTab from './tabs/function';
import StartTab from './tabs/start';
import AiTab from './tabs/erebosAI';
import DevelopmentTab from './tabs/development';
import Music from './music';

class App extends React.Component {
  render() {
    return (<>
      <div id='big' onClick={e=>{
        const j = document.getElementById('big_img_display') as HTMLImageElement
        document.getElementById("other_than_big")!!.style.filter = "brightness(100%)"
        document.getElementById("other_than_big")!!.style.backdropFilter = "brightness(100%) blur(10px)"
        document.getElementById("big")!!.style.display = "none"
        j!!.style.display = "none"
      }}></div>
      <div style={{display: "grid"}}>
      <img id='big_img_display' alt=''></img></div>
      <div id='other_than_big'>
      <div className='app' id='__app__'>
        <SideBar></SideBar>
        <div id='__tabs__' className='tab_view'>
          <StartTab></StartTab> 
          <FunctionTab></FunctionTab>
          <AiTab></AiTab>
          <DevelopmentTab></DevelopmentTab>
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default App;

export const music = new Music("start_music.mp3")