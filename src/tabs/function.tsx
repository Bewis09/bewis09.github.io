import React from 'react';
import { BoxText, InfoBoxText } from '../text';
import YesNoQuiz, {Element} from '../elements/yesNoQuiz';
import { H } from '../util/text_snippets';
import TopTen from '../elements/topTen';
import SlideShow from '../elements/slideShow';
import Empty from '../util/empty';
import { ThreeElementSite } from '../elements/threeElementSite';
import { GoToNextElement } from '../go_to_next_element';

class FunctionTab extends React.Component {
  render() {
    return (
      <div className='tab_hidden' id="_function">
          <h1 className='headline' id='_function_1'>Was ist KI?</h1>
          <InfoBoxText text={<><H>Künstliche Intelligenz</H>, kurz KI, ist eine Technologie, die es Computern ermöglicht, ähnlich wie Menschen zu <H>denken</H> und zu <H>lernen</H>. KI kann Aufgaben wie <H>Bilderkennung, Spracherkennung und Entscheidungsfindung</H> übernehmen.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>KI lernt aus <H>Daten</H>. Diese Daten können <H>Bilder, Texte, Zahlen</H> oder andere <H>Informationen</H> sein. Die Daten werden in einem Computerprogramm verarbeitet, das <H>Muster und Beziehungen</H> in den Daten erkennt. So kann das Programm lernen, Aufgaben <H>selbstständig</H> zu lösen.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>KI wird in vielen Bereichen eingesetzt, z. B. in <H>der Medizin, der Industrie, dem Verkehr und der Unterhaltung</H>. In der Medizin kann KI z. B. bei der <H>Diagnose</H> von Krankheiten helfen. In der Industrie kann KI zur <H>Steuerung von Robotern</H> eingesetzt werden. Im Verkehr kann KI zur Entwicklung von <H>selbstfahrenden Autos</H> beitragen.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>KI kann uns helfen, Aufgaben <H>schneller, effizienter und genauer</H> zu erledigen. KI kann auch neue Möglichkeiten eröffnen, z. B. in der Entwicklung <H>neuer Medikamente</H> oder der <H>Erforschung des Weltraums</H>.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>Es gibt auch <H>Risiken</H> im Zusammenhang mit KI. z. B. könnte KI dazu verwendet werden, Menschen zu <H>manipulieren</H> oder zu <H>überwachen</H>. Es ist wichtig, dass wir die Entwicklung und Nutzung von KI <H>verantwortungsvoll</H> gestalten.</>} size={20}></InfoBoxText>
          <TopTen id='top_ten_ai' text="Die 10 meistbenutzten KI-Tools" entries={[
            "ChatGPT",
            "character.ai",
            "Quillbot",
            "Midjourney",
            "HuggingFace",
            "Bard",
            "NovelAI",
            "CapCut",
            "JanitorAI",
            "civitai"
          ]}></TopTen>
          <h1 className='headline' id='_function_2'>Neuronale Netzwerke</h1>
          <InfoBoxText text={<><H>Neuronale Netze</H> sind Systeme, die dem <H>menschlichen Gehirn</H> nachempfunden sind. Sie bestehen aus vielen kleinen Einheiten, die <H>"Künstliche Neuronen"</H> genannt werden. Diese Neuronen sind miteinander <H>verbunden</H> und bilden so ein Netz.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>Jedes künstliche Neuron <H>verarbeitet Informationen</H> und leitet sie an die nächsten Neuronen weiter. So kann das Netz <H>komplexe Muster</H> in <H>Daten</H> erkennen und lernen, <H>Aufgaben zu lösen</H>.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>Neuronale Netze werden in vielen Bereichen eingesetzt, z.B. in der <H>Bilderkennung, Spracherkennung und maschinellen Übersetzung</H>. Sie ermöglichen es <H>Computern</H>, Aufgaben zu erledigen, die früher <H>nur Menschen</H> möglich waren.</>} size={20}></InfoBoxText>
          <SlideShow length={6} id='neural_network_slide'></SlideShow>
          <YesNoQuiz id='is_neural_network' text='Basieren folgende Programme auf neuronalen Netzwerken?'>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='ChatGPT' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Schachcomputer' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Einfache Roboter' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Empfehlungssysteme (z.B. für Produkte/Filme)' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='DALL·E 3 (Bildgenerierung)' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Spamfilter für E-Mails' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Sprachassistenten' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Betrugserkennung bei Onlinebezahldiensten' isTrue={false}></Element>
          </YesNoQuiz>
          <BoxText text={<>Wenn du dein Wissen vertiefen willst, dann schau dir dieses <a target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=aircAruvnKk&t=2s'>Video</a> von 3Blue1Brown über neuronale Netzwerke an. Es ist auf englisch und erklärt die Mathematik und Funktionsweise dahinter etwas genauer. Wenn du noch mehr wissen willst, schau dir auch die <a target="_blank" rel="noreferrer" href='https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'>drei weiteren Videos</a> von 3B1B zu dem Thema an.</>} size={20}></BoxText>
          <h1 className='headline' id='_function_3'>Generative KI</h1>
          <InfoBoxText text={<><H>Generative KI</H> ist eine besondere Art der <H>Künstlichen Intelligenz</H>, die etwas <H>Neues</H> erschaffen kann. Sie lernt aus einer riesigen Menge an <H>Daten</H>, wie zum Beispiel <H>Texten, Bildern oder Musik</H>. Diese Daten nutzt sie dann, um <H>eigene Werke</H> zu erstellen, die oft gar <H>nicht von menschlichen Werken zu unterscheiden</H> sind.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>So kann generative KI zum Beispiel <H>neue Bilder generieren</H>, die aussehen wie <H>Fotos</H>, oder <H>neue Musikstücke komponieren</H>, die wie von einem Komponisten geschrieben klingen. Sogar <H>neue Texte</H> kann sie schreiben, die <H>wie von einem Menschen</H> verfasst aussehen.</>} size={20}></InfoBoxText>
          <InfoBoxText text={<>Die Möglichkeiten von generativer KI sind <H>endlos</H>. Sie kann in vielen Bereichen eingesetzt werden, zum Beispiel in der <H>Kunst, der Musik, der Werbung oder sogar in der Wissenschaft</H>. Generative KI hat das Potenzial, unsere Welt grundlegend zu verändern und uns neue Möglichkeiten zu eröffnen, <H>kreativ</H> zu sein und <H>Probleme zu lösen</H>.</>} size={20}></InfoBoxText>
          <ThreeElementSite 
            first={<>Generative KI im <H>Unterricht</H> kann Schüler:innen durch <H>kreative Schreibübungen</H>, <H>Sprachunterstützung </H>und<H> Lehrmaterialerstellung</H> ein <H>interaktives </H>und<H> bereicherndes Lernen</H> ermöglichen. Darüber hinaus kann sie bei der <H>Erzeugung von Musik und Kunst</H> helfen, um die <H>künstlerischen Fähigkeiten</H> der Schüler:innen zu fördern und ihren Horizont zu erweitern.</>} 
            second={<>Generative KI kann beim <H>Programmieren</H> auf verschiedene Weisen eingesetzt werden, z. B. zur <H>Codegenerierung</H>, <H>Textgenerierung</H>, <H>Bildgenerierung</H> und sogar zur <H>Musikgenerierung</H>. Dadurch können Entwickler:innen ihre <H>Produktivität steigern</H>, indem sie <H>repetitive oder zeitaufwändige Aufgaben</H> automatisieren und <H>kreative Lösungen</H> generieren lassen.</>} 
            third={<>Dank Generativer KI können Unternehmen <H>maßgeschneiderte Marketinginhalte</H> entwickeln und den Kundenservice durch <H>automatisierte Interaktionen</H> optimieren. Diese fortschrittliche Technologie ermöglicht es, auf <H>individuelle Bedürfnisse</H> einzugehen, <H>Effizienz zu steigern und Kosten zu senken</H>, während gleichzeitig die <H>Kundenzufriedenheit verbessert</H> wird.</>} 
            text='Beispielanwendungen für generative KI'></ThreeElementSite>
          <YesNoQuiz id='is_generative' text='Basieren folgende Programme auf generativer KI?'>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='ChatGPT' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Personalisierte Werbung' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Selbstfahrende Autos' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Tiktok-Algorithmus' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='DALL·E 3 (Bildgenerierung)' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Medizinische Diagnosen' isTrue={false}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Sprachassistenten' isTrue={true}></Element>
            <Element quiz={[]} trueText='Ja' falseText='Nein' text='Gesichtserkennung' isTrue={false}></Element>
          </YesNoQuiz>
          <GoToNextElement id="_ai"></GoToNextElement>
          <Empty></Empty>
      </div>
    );
  }
}

export default FunctionTab;