import React from 'react';
import "./slide_show.scss"
import { SlideShowProp } from '../props';

export default class SlideShow extends React.Component<SlideShowProp> {
    render() {
        return (
            <div className='outer_box slideshow'>
                <div style={{display: this.props.showArrows===undefined?"block":"none"}} className='left_slide slide_button' onClick={e=>goOn(-1,this.props.id, this.props.length)}><span className="material-symbols-outlined slide_arrow">arrow_back</span></div>
                <img className='slide_image' id={'img_'+this.props.id} alt='' src={this.props.id+"/slide1.png"} style={{width:"calc(min(80%, 400px))"}} onClick={e=>{
                    const j = document.getElementById('big_img_display') as HTMLImageElement
                    const k = document.getElementById('img_'+this.props.id) as HTMLImageElement
                    document.getElementById("other_than_big")!!.style.filter = "brightness(50%) blur(1px)"
                    document.getElementById("other_than_big")!!.style.backdropFilter = "brightness(50%) blur(1px)"
                    document.getElementById("big")!!.style.display = "block"
                    j!!.style.display = "block"
                    j!!.src = k.src
                }
                }></img>
                <div style={{display: this.props.showArrows===undefined?"block":"none"}} className='right_slide slide_button' onClick={e=>goOn(1,this.props.id, this.props.length)}><span className="material-symbols-outlined slide_arrow">arrow_forward</span></div>
            </div>
        );
    }
}

function goOn(by:number,id:string,max:number) {
    const k = document.getElementById('img_'+id) as HTMLImageElement

    const m = parseInt(k.src.split("/slide")[1].split(".png")[0])
    const n = Math.min(max,Math.max(1,m+by))

    if(m===n) return

    k.style.filter = "brightness(0%) blur(5px)"

    setTimeout(()=>{
        k.src = id+"/slide"+(n)+".png"
        setTimeout(() => {
            k.style.filter = "brightness(100%) blur(0px)"
        }, 200);
    },500)
}