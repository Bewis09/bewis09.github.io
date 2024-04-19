import React from 'react';
import MultipleChoiceQuiz, { Element as MultipleChoiceElement } from '../elements/multipleChoiceQuiz';
import { TwoElementSite } from '../elements/threeElementSite';
import ImageView from '../ImageView';
import Empty from '../util/empty';
import { BoxText, CenteredText, InfoBoxText } from '../text';
import { H } from '../util/text_snippets';
import { GoToNextElement } from '../go_to_next_element';

class AiTab extends React.Component {
  render() {
    return (
      <div className='tab_hidden' id="_ai">
          <h1 className='headline' id='_ai_1'>Wo wird KI in Erebos eingesetzt?</h1>
          <MultipleChoiceQuiz id='erebos_ai_one'>
            <MultipleChoiceElement text='Welche Rolle spielt die KI in Erebos?' first='Sie steuert die Handlungen der Charaktere' second='Sie erschafft eine virtuelle Realität' third='Sie ist ein Ratgeber für die Spieler' fourth='Sie hilft den Spieler:innen beim Verbreiten des Spieles' correct={0} quiz={[]}></MultipleChoiceElement>
            <MultipleChoiceElement text='Woran merkt Nick das erste Mal, dass das Programm eine Art KI beinhalten muss?' first='Die Chataktäre geben Antworten' second='Das Spiel versteht, was sich Nick wünscht' third='Das Spiel gibt sinnvolle Antworten auf beliebige Fragen' fourth='Adrian erzählt es ihm' correct={2} quiz={[]}></MultipleChoiceElement>
            <MultipleChoiceElement text='Welchen Status hat die KI in Erebos?' first='Sie ist ein gleichrangiger Mitspieler' second='Sie ist ein kleiner unwichtiger Teil der Geschichte' third='Sie ist der wichtigste Teil des ganzen Spieles und steht über allen Spieler:innen' fourth='Die KI unterstützt nur die Spieler in ihren Aufgaben und macht nie etwas gegen sie' correct={2} quiz={[]}></MultipleChoiceElement>
            <MultipleChoiceElement text='Wie beeinflusst die KI in Erebos die echte Welt' first='Sie beeinflusst die echte Welt nicht' second='Sie bringt die Spieler:innen dazu Aufgaben in der echten Welt zu erledigen' third='Sie gibt den Spieler:innen private Informationen anderer Spieler:innen' fourth='Sie steuert Roboter in der echten Welt' correct={1} quiz={[]}></MultipleChoiceElement>
            <MultipleChoiceElement text='Was zeigt, dass die Spieler:innen die KI manchmal als etwas bewusstes Ansehen?' first='Sie reden mit der KI, wie mit einem echten Menschen' second='Sie verstehen, dass die KI ihnen sinnvolle Antworten geben kann' third='Sie gehorchen der KI' fourth='Nick schämt sich dafür, den Boten zu enttäuschen' correct={3} quiz={[]}></MultipleChoiceElement>
          </MultipleChoiceQuiz>
          <InfoBoxText size={20}>In Erebos wird <H>fast alles von einer KI gesteuert</H>. Sie muss sich <H>überlegen</H>, was sie den Spieler:innen sagt und <H>welche Aufträge</H> sie ihnen gibt. Gewisse Teile sind schon <H>vorprogrammiert</H>, jedoch zeigt, dass das Spiel auf <H>unerwartete Vorkommnisse</H> reagieren kann, dass die KI <H>selber denkt und plant</H>.</InfoBoxText>
          <h1 className='headline' id='_ai_2'>Was ist das für eine KI?</h1>
          <TwoElementSite text='Die Arten von KI in Erebos'
            first={<><b><CenteredText size={25}>Generative KI</CenteredText></b><Empty/>Generative KI wird in Erebos zur <H>Kommunikation</H> mit den Spielern verwendet. Die NPCs verwenden <H>menschenähnliche Sprache</H> um sinnvoll zu <H>kommunizieren und Aufträge zu erteilen</H>. Fast alle Texte in Erebos sind <H>KI-generiert</H>.</>}
            second={<><b><CenteredText size={25}>Starke KI</CenteredText></b><Empty/>Eine <H>"starke KI"</H> wird in Erebos verwendet um das gesamte Spiel zu <H>steuern</H>. Sie <H>verarbeitet Daten</H> und überlegt sich, was <H>sinnvoll</H> ist als nächstes zu tun und <H>welche Auftrage</H> man den Spieler:innen geben soll.</>}
          ></TwoElementSite>
          <h1 className='headline' id='_ai_3'>Wie funktioniert diese KI?</h1>
          <ImageView id='ai_in_erebos.png'/>
          <BoxText size={25}><CenteredText size={25}><b>Was machen die einzelnen Elemente?</b></CenteredText>
            <InfoBoxText size={20}><CenteredText size={25}>Der Bote</CenteredText><Empty/>
              Der <H>Bote</H> ist für die <H>Kommunikation</H> mit den Spieler:innen zuständig. Er sammelt <H>Informationen aus der echten Welt</H>, verteilt <H>Aufträge</H> und <H>hilft</H> Spieler:innen im Spiel. Auch wenn oft die Rede von "dem Boten" ist, gibt es <H>gleichzeitig mehrere Boten</H>, welche sich um die Spieler kümmern. Die Boten selber können auch <H>nicht denken</H>, sondern bekommen <H>alle Informationen nur von der "Zentralen KI"</H>.
            </InfoBoxText>
            <InfoBoxText size={20}><CenteredText size={25}>Das Spiel</CenteredText><Empty/>
              Die <H>Spielweise in Erebos</H> wird sehr sicher auch zur <H>Informationsfindung</H> von der "Zentralen KI" analysiert. Dabei wird darauf geachtet, ob die Spieler:innen ihr <H>Verhalten plötzlich verändert</H> haben oder wie diese sich allgemein <H>verhalten</H>.
            </InfoBoxText>
            <InfoBoxText size={20}><CenteredText size={25}>Infos auf dem Computer</CenteredText><Empty/>
              Der <H>Computer der Spieler:innen</H> wird von Erebos auch nach <H>wichtigen Informationen</H> durchsucht. Dadurch weiß die "Zentrale KI" besser, was die Spieler:innen sich <H>wünschen</H> oder wie man diesen <H>Schaden</H> kann. Dass Inhalte auf dem <H>Computer verändert</H> werden (außer der Zugriff auf Webseiten) ist <H>nicht</H> bekannt.
            </InfoBoxText>
            <InfoBoxText size={20}><CenteredText size={25}>In-Game-Chats</CenteredText><Empty/>
              Das Spiel analysiert auch die <H>Chats im Spiel</H>, woran es zum Beispiel sehen kann, wenn jemand <H>zu neugierig</H> ist oder sich <H>gegen die Regeln</H> verhält. Außerdem kann man dort <H>weitere Informationen</H> über die Spieler:innen bekommen. Auch wenn die Spieler:innen <H>nicht wissen</H>, wer die anderen Personen sind, <H>weiß das Spiel die echten Namen</H> und kann diesen auch die <H>Informationen zuordnen</H>.
            </InfoBoxText>
            <InfoBoxText size={20}><CenteredText size={25}>Zentrale KI</CenteredText><Empty/>
              Die <H>Zentrale KI</H> macht die <H>gesamte Arbeit</H> und <H>überlegt</H> sich, was der Bote machen soll. Bei dieser KI handelt es sich wahrscheinlich um einen <H>riesigen Datenspeicher</H> und einem Programm, welches sich <H>die Aktionen überlegt</H>. Diese Programme denken aber <H>nicht durchgängig</H> wie ein Mensch, sondern passen nur die <H>vorhanden Ergebnisse</H> den <H>neuen Informationen</H> an.
            </InfoBoxText>
          </BoxText>
          <MultipleChoiceQuiz id='which_for_what'>
            <MultipleChoiceElement quiz={[]} correct={2} text='Über welchen Kanal bekommt die KI die meisten Informationen aus der Schule?' first='In-Game-Chats' second='Direkte Beobachtungen' third='Der Bote' fourth='Daten auf dem Computer'></MultipleChoiceElement>
            <MultipleChoiceElement quiz={[]} correct={0} text='Was davon wird nicht zur Informationsbeschaffung benutzt?' first='Eigene Nachforschungen' second='Abfragen von Ereignissen' third='Spionage' fourth='Abhören von Kommunikation'></MultipleChoiceElement>
            <MultipleChoiceElement quiz={[]} correct={1} text='Woran merkt man, dass die Zentrale KI eine "starke KI" ist (also denken kann)?' first='Sie reagiert auf ungeplante Ereignisse' second='Sie kann die Zukunft planen' third='Sie verarbeitet Informationen' fourth='Sie kann mit Menschen kommunizieren'></MultipleChoiceElement>
            <MultipleChoiceElement quiz={[]} correct={2} text='Worüber kann das Spiel nicht mit den Spieler:innen kommunizieren?' first='Der Bote' second='Umgebung im Spiel' third='Zettel in der Schule' fourth='Andere NPCs im Spiel'></MultipleChoiceElement>
          </MultipleChoiceQuiz>
          <GoToNextElement id="_development"></GoToNextElement>
          <Empty></Empty>
      </div>
    );
  }
}

export default AiTab;
