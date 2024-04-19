import React from 'react';
import {CenteredText} from './text';

class Top extends React.Component {
  render() {
    return (
      <div className='top'>
        <span className="material-symbols-outlined icon_top" onClick={e=>openCloseMenu()}>
            menu
        </span>
        <CenteredText text="Künstliche Intelligenz in Erebos" size={25}></CenteredText>
      </div>
    );
  }
}

export function openCloseMenu() {
  const d = document.getElementById("tabs")

  const bl = d!!.style.left!=="-450px"
  
  d!!.style.left = bl ? "-450px" : "0px"
  
  const t = document.getElementById("__tabs__")

  t!!.style.transition = "left 0.5s"
  t!!.style.left = !bl ? "225px" : "0px"

  setTimeout(() => {
    t!!.style.transition = ""
  }, 500);
}

export default Top;
