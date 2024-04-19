import React from 'react';
import { music } from '../app';
import { AnimationButtonProp } from '../props';

const StartAnimationButton: React.FC<AnimationButtonProp> = ({ str, frame, maxLength, size }) => {

  if (!size)
    size = 4

  return (
    <div className='animated_button' onClick={e => {
      if (frame === 0) {
        const as = document.getElementsByClassName("animated_button")

        for (let index = 0; index < as.length; index++) {
          const element = as[index] as HTMLElement;

          element.style.opacity = "0"
        }
      }

      setTimeout(() => {
        const ds = document.getElementsByClassName("animated_text")
        if (frame === 0) {
          for (let index = 0; index < ds.length; index++) {
            const element = ds[index] as HTMLElement;
            element.style.display = "block"

            const f = Number(element.dataset.frame)

            for (let i = 0; i < maxLength - f; i++) {
              setTimeout(() => {
                (element).style.top = "calc(33vh - " + (2.3 * i + 3) + "vi)";
                (element).style.fontSize = ("3vi");

                (element).style.opacity = String(Math.max(0, 1 - i * 0.1));
              }, f * 1500 + 1500 + i * 1500);
            }

            setTimeout(() => {
              element.style.opacity = "100"
            }, f * 1500 + 200);
          }

          music.play()

          setTimeout(() => {
            document.getElementById("body")!!.style.filter = "brightness(0%)"
            document.getElementById("body")!!.style.backdropFilter = "brightness(0%) blur(10px)"
            setTimeout(() => {
              document.getElementById("_start")!!.style.display = "none"
              document.getElementById("__app__")!!.style.display = "block"
              document.getElementById("body")!!.style.filter = "brightness(100%)"
              document.getElementById("body")!!.style.backdropFilter = "brightness(100%) blur(10px)"
              document.getElementById("sidebar_main")!!.style.display = "block"
              document.getElementById("__tabs__")!!.style.left = "225px"
              var i = [0]
              const s: string | number | NodeJS.Timeout | number[] | undefined = []
              s[0] = setInterval(() => {
                i[0]++
                music.setVolume((20 - i[0]) / 100)

                if (i[0] === 20) clearInterval(s[0])
              }, 20, i, s)
            }, frame===0 ? 6000 : 1000);
          }, (frame === 0) ? maxLength * 1500 - 3000 : 0);
        } else {
          document.getElementById("_start")!!.style.display = "none"
          document.getElementById("__app__")!!.style.display = "block"
          document.getElementById("sidebar_main")!!.style.display = "block"
          document.getElementById("__tabs__")!!.style.left = "225px"
        }

        const as = document.getElementsByClassName("animated_button")

        for (let index = 0; index < as.length; index++) {
          const element = as[index] as HTMLElement;

          element.style.display = "none"
        }
      }, frame===0 ? 1000 : 0);
    }} style={{ fontSize: size + "vi", position: "absolute", top: "calc(33vh + " + 6 * frame + "vi)", transition: "all 0.5s", textAlign: "center", width: "50%", opacity: 1, display: "block" }}>
      {str}
    </div>
  );
};

export default StartAnimationButton;
