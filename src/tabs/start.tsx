import React, { ReactElement } from 'react';
import TextAnimation from '../animation/animatedText';
import StartAnimationButton from '../animation/startAnimationButton';

const maxLength = 37

class StartTab extends React.Component {
  render() {
    return (
      <div className='start_tab tab_hidden' style={{display:"block"}} id="_start">
        <StartAnimationButton str='Starten' frame={0} maxLength={maxLength}></StartAnimationButton>
        <StartAnimationButton str='Start Überspringen' size={3} frame={1} maxLength={maxLength}></StartAnimationButton>
        {getAnimationText()}
      </div>
    );
  }
}

function getAnimationText(): ReactElement {
  return <>
      <TextAnimation str='Willkommen' frame={0} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={1} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='In diesem Programm' frame={2} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='geht es um' frame={3} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Künstliche Intelligenz' frame={4} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='im Buch Erebos' frame={5} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='von Ursula Poznanski' frame={6} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={7} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Dieses Programm' frame={8} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='ist in drei Segmente' frame={9} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='unterteilt' frame={10} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={11} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Als erstes schauen wir' frame={12} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='uns die Funktionsweise' frame={13} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='von KI an' frame={14} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={15} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Als nächstes gehen wir' frame={16} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='zum Einsatz von KI' frame={17} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='in Erebos über' frame={18} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={19} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Wir werden erstaunliches' frame={20} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='bemerken' frame={21} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={22} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Zum Schluss sehen' frame={23} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='wir uns die Entwicklung' frame={24} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='der Technologie' frame={25} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='seitdem das Buch' frame={26} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='geschrieben wurde' frame={27} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='an' frame={28} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='und setzen es' frame={29} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='in einen zeitlichen Kontext' frame={30} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='' frame={31} maxLength={maxLength}></TextAnimation>
        <TextAnimation str='Viel Spaß dabei' frame={32} maxLength={maxLength}></TextAnimation>
    </>
}

export default StartTab;
