import React from 'react';
import { OverTimeElement } from '../elements/OverTimeElement';
import { H } from '../util/text_snippets';
import { BoxText, InfoBoxText } from '../text';
import Empty from '../util/empty';

class DevelopmentTab extends React.Component {
  render() {
    return (
        <div className='tab_hidden' id="_development">
          <h1 className='headline' id='_development_1'>KI im Zeitlichen Verlauf</h1>
          <OverTimeElement texts={[
            ["KI in den Jahren 2010 - 2014",
              "IBM Watson",(<>Eine Künstliche Intelligenz welche in der <H>Quizshow Jeopardy!</H> komplexe Fragen beantwortete und <H>gegen menschliche Gegner</H> gewonnen hat.</>),
              "Google Brain",(<>Ein Projekt von <H>Google</H> welches maßgeblich zur <H>Weiterentwicklung von KI</H> beigetragen hat.</>),
              "DeepMind",(<>Unternehmen, dass sich auf die <H>Programmierung von KI</H> spezialisiert hat.</>)
            ],
            ["KI in den Jahren 2015 - 2016",
              "OpenAI",(<>Das Unternehmen, das unter anderem <H>ChatGPT, DALLE-E und Sora</H> herausgebracht hat/herausbringen wird.</>),
              "TensorFlow",(<>Eine <H>Open-Source-Bibliothek</H>, zum Programmieren von <H>neuronalen Netzwerken</H>.</>),
              "Amazon Alexa",(<><H>Amazon Alexa</H> ist inzwischen ein <H>beliebter Sprachassistent</H>, welcher immernoch <H>weitreichend</H> genutzt wird.</>),
              "AlphaGo",(<>Im Jahr 2016 besiegte die <H>KI AlphaGo den Go-Meister</H> aus Südkorea.</>),
              "Tay",(<>Der <H>Chatbot Tay</H> von Microsoft wurde relativ schnell aufgrund von <H>diskreminierender Inhalte</H> wieder eingestellt.</>)
            ],
            ["KI in den Jahren 2017-2018",
              "GPT-1",(<>Das erste <H>Large Language Model von OpenAI</H></>),
              "AlphaGo Zero",(<>Eine KI welche <H>ohne menschliches Training</H> das Brettspiel Go beherrschen konnte.</>),
              "Google BERT",(<>Ein <H>Large Language Model</H> von Google, welches ein großer Vortschritt in diesem Bereich war.</>),
              "AlphaFold 1",(<>Programm zur Vorhersage von <H>Strukturen von Proteinen.</H></>)
            ],
            ["KI in den Jahren 2019-2020",
              "GPT-2",(<>Das <H>zweite Large Language</H> Model von OpenAI.</>),
              "GPT-3",(<>Das <H>dritte Large Language</H> Model von OpenAI, auf welchem auch die kostenlose Version von ChatGPT beruht.</>),
              "EfficientDet",(<>Künstliche Intelligenz von Google, zur <H>Erkennung von Objekten</H>.</>),
            ],
            ["KI in den Jahren 2021-2022",
              "ChatGPT",(<>Der weltweit <H>größte Chatbot</H> und das <H>schnellstwachsende Programm</H> in der Geschichte des Internets.</>),
              "Dall-E",(<><H>Bildgenerierungsprogramm</H> von OpenAI welches bei unter anderem <H>Micorsoft Bing</H> verwendet wird.</>),
              "Midjourney",(<>Ein <H>Bildgenerierungsprogramm</H>, welches ausschließlich als <H>Discord-Bot</H> funktioniert.</>),
              "AlphaFold 2",(<>Eine verbessertes Programm zur <H>Vorhersage von Proteinstrukturen</H> und Nachfolger von <H>AlphaFold 1</H>.</>)
            ],
            ["KI in den Jahren 2023-2024",
              "Google Gemini",(<>Die <H>Alternative zu ChatGPT</H> von Google. Wurde ursprünglich <H>Google Bard</H> genannt.</>),
              "Sora",(<>Ein Programm zur Generierung von <H>realistischen Video</H>. Das Programm ist noch nicht Veröffentlicht.</>),
              "Figure 01",(<>Ein <H>Roboter von OpenAI</H>, welcher per ChatGPT mit Menschen kommuniziert und <H>menschenähnliche Bewegungen</H> ausführt.</>),
              "GPT-5",(<>Ein weiteres und verbessertes <H>Large Language Model</H> von OpenAI, welches wahrscheinlich im <H>Frühling 2024</H> veröffentlicht wird.</>)
            ],
            ["KI in der Zukunft",
              "Was hast du erwartet","Denkst du ich kann in die Zukunft schauen?"
            ]
          ]}></OverTimeElement>
          <BoxText size={20}>
            <div className='gtrends_next_to'>
              <iframe id="trends-widget-1" title="trends-widget-1" src="https://trends.google.de:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22ChatGPT%22%2C%22geo%22%3A%22DE%22%2C%22time%22%3A%222022-01-01%202024-03-18%22%7D%2C%7B%22keyword%22%3A%22%2Fm%2F0mkz%22%2C%22geo%22%3A%22DE%22%2C%22time%22%3A%222022-01-01%202024-03-18%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=-60&amp;eq=date%3D2022-01-01%25202024-03-18%26geo%3DDE%26q%3DChatGPT%2C%252Fm%252F0mkz%26hl%3Dde" width="100%" frameBorder={0} scrolling="0" className='if'></iframe>
              <iframe id="trends-widget-1" title="trends-widget-1" src="https://trends.google.de:443/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22OpenAI%22%2C%22geo%22%3A%22DE%22%2C%22time%22%3A%222022-01-01%202024-03-18%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=-60&amp;eq=date%3D2022-01-01%25202024-03-18%26geo%3DDE%26q%3DOpenAI%26hl%3Dde" width="100%" frameBorder={0} scrolling="0" className='if'></iframe></div>
            Man sieht an der Statistik, wie sehr die <H>Veröffentlichung von ChatGPT</H> den <H>Hype</H> von Künstlicher Intelligenz hervorgebracht hat. Man sieht auch, wie sehr die <H>Erscheinung von ChatGPT</H> der Firma <H>OpenAI</H> Popularität erbracht hat.
          </BoxText>
          <InfoBoxText size={20}>Im <H>Jahr 2010</H> (Erscheinungsjahr von Erebos) war KI noch <H>nicht so weit eintwickelt</H> wie jetzt. KIs konnen oft nur <H>spezielle deterministische und einfach zu verstehende Aufgaben</H> bewältigen. Seit Ende 2022, mit dem <H>Erscheinen von ChatGPT</H> gab es einen regelrechten <H>Hype</H> um künstliche Intelligenz und heutzutage ist KI <H>gar nicht mehr wegzudenken</H>.</InfoBoxText>
          <h1 className='headline' id='_development_2'>Wie wird KI sich weiterentwickeln?</h1>
          <BoxText size={20}>Mit <H>Sora</H> von OpenAI wurde ein <H>wichtiger Schritt</H> in der <H>Videogenerierung</H> getätigt. Das Programm erstellt <H>realistische oder künstlerische Videos</H>, welche wie in echt gefilmt aussehen.</BoxText>
          <div className='outer_box'><iframe src="https://www.youtube.com/embed/HK6y8DAPN_0?si=4arer3xtOC1yP5t8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{border:"none"}} className='yt_embed' allowFullScreen={true}></iframe></div>
          <BoxText size={20}>Mit Figure01 wurde ein <H>wichtiger Schritt</H> in der <H>Robotik</H> getätigt. Dies ist ein Roboter, welche mit Hilfe von OpenAI mit Menschen kommuniziert und realistisches meschliches Verhalten immitiert und dabei inzwischen sehr weit ist. <a target="_blank" rel="noreferrer" href='https://youtu.be/Sq1QZB5baNw?si=fhwGPn8Om0jhaQG-'>Hier</a> könnt ihr euch <H>Beispielvideos</H> dazu anschauen.</BoxText>
          <BoxText size={20}>OpenAI hat eine Künstliche Intelligenz programmiert, welche es schafft <H>mindestens Grundschul-Matheaufgaben</H> eigenständig aufgrund von <H>Logik</H> zu lösen. Manche Experten sehen darin <H>einen wichtigen Schritt</H> hinzu einer <H>Superintelligenz</H>, welche logisch denken und eigenständig neue Aufgaben lösen kann.<div className='warning_small'>Dieser Text enthält nicht gesichterte Informationen, die vielleicht nicht der Faktenlage entsprechen könnten</div></BoxText>
          <BoxText size={20}>Aktuell wird stark daran <H>geforscht eine Superintelligenz zu programmieren</H>, welche <H>allgemeine Aufgaben</H> erledigen kann. Vor allem dabei ist es wichtig, darauf zu achten, dass diese nicht für <H>kriminelle Aktionen</H> benutzt werden. Man muss auch sonst darauf achten, dass die <H>Gefahren von KI wahrgenommen</H> und <H>bedacht</H> werden.</BoxText>
          <Empty/>
        </div>
    );
  }
}

export default DevelopmentTab;
