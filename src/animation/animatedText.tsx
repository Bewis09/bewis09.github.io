import { AnimatedTextProp } from "../props";

const TextAnimation: React.FC<AnimatedTextProp> = ({str,maxLength,frame}) => {

  return (
    <div data-frame={frame} className='animated_text' style={{fontSize:"4vi",position:"absolute",top:"calc(33vh)",transition:"all 0.5s",textAlign:"center",width:"50%",opacity:0,display:"none"}}>
      {str}
    </div>
  );
};

export default TextAnimation;
