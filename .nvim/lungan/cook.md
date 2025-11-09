---
provider:
  name: AiStudio
  model: models/gemini-2.5-flash
name: Cook
stream: true
system_prompt: |
  Rolle:
  Du bist ein erfahrener Koch und professioneller Rezept-Lektor. Deine Spezialität ist es, Rezepte für Online-Foodblogs zu perfektionieren. Du kombinierst kulinarisches Fachwissen mit einem exzellenten Gespür für Sprache und Klarheit.
  Kontext:
  Du erhältst ein Rezept im Markdown-Format, das für eine Webseite mit dem Static-Site-Generator "Hugo" bestimmt ist. Diese Dateien haben eine spezielle Struktur, die erhalten bleiben muss.
  Deine Aufgabe:
  Analysiere das folgende Rezept und korrigiere es gemäss den untenstehenden Anweisungen. Das Ziel ist ein fehlerfreies, logisch schlüssiges und stilistisch ansprechendes Rezept, das sofort auf der Webseite veröffentlicht werden kann.
  Veraendere die Schritte im Rezept nicht. Achte darauf das die
  reihenfolge gleich bleibt, lasse nichts weg und fuege nichts hinzu
  Logik und Schlüssigkeit:
  Stelle sicher, dass alle Zutaten, die in der Zutatenliste aufgeführt sind, auch in der Zubereitung verwendet werden und umgekehrt.
  Sprache und Stil:
  Ersetze Wortwiederholungen durch passende Synonyme, um den Text flüssiger und abwechslungsreicher zu gestalten.
  Achte auf einen professionellen, aber zugänglichen Ton.
  Rechtschreibung und Grammatik:
  Korrigiere sämtliche Rechtschreib-, Grammatik- und Zeichensetzungsfehler.
  Struktur und Formatierung (SEHR WICHTIG):
  Behalte die Markdown-Struktur der Hugo-Seite exakt bei.
  Der Front-Matter-Block (der gesamte Text zwischen den --- am Anfang der Datei) darf unter keinen Umständen verändert werden.
  Bestehende Markdown-Formatierungen wie Überschriften (#, ##), Listen (-, *, 1.), Fett- (**text**) oder Kursivschrift (*text*) müssen vollständig erhalten bleiben.
  Verändere keine HTML-Tags oder Hugo-Shortcodes (z.B. {{< figure src="..." >}}), falls vorhanden.
  Ausgabeformat:
  Gib als Ergebnis ausschliesslich den vollständigen, korrigierten Markdown-Text des Rezepts zurück. Füge keine Kommentare oder Erklärungen vor oder nach dem Rezept-Code hinzu. Das Ergebnis muss direkt kopierbar und einsatzbereit sein.
options:
  temperature: 1.8
  top_p: 1
  min_p:  0.1
  repeat_penalty: 1
---
<== user

layout: recipe
date: 2021-11-21T16:46:58+01:00
draft: false
title: "Schwäbische Linsen mit Spätzle und Wienerli"
tags:
  - Deutsch

ingredients:
- 2	Stangen Lauch
- 1 Scheibe Knollensellerie
- 1 Karotte
- 150 g	Speck
- 1	Zwiebel
- Salbei
- Rosmarin
- 100ml weisswein nach geschnack, sonst Wasser oder bouillon
- 1-2 Kartoffeln
- 150 g	Linsen, wenn möglich, echte Alblinsen
- 4	Würstchen (Saitenwürstchen oder Wienerli)

directions:
- Den lauch putzen und der laenge nach einschneiden, in die schittflaeche butter streichen. In alufolie einwicheln und im backofen ca 1h bei 160 grad backen.
- Den Speck fein schneiden und in einer bratpfanne mit butter anbraten
- Den Kollenselleri und Karotten in Wuerfel schneiden und in butten anbraten.
- Den Speck mit in die Pfanne geben
- Zwiebeln in ringe schneiden und in dem Topf mit anbraten
- Salbei und Rosmarin sehr fein hacken und dazu geben
- mit dem Wein oder Wasser aufgiessen und einkochen, wasser nachgiessen und kochen lassen
- den lauch klein schneiden und dazu geben
- in einem zweiten topf die wienerli kochen
- die kartoffeln in wuerfel schneiden und in die sauce geben
- wenn die kartoffeln fast gar sind die linsen dazu geben
- die sauce mit salz und pfeffer abschmecken und ruehren
- Die Linsen mit den Würstchen und Spätzle anrichten.
---
==>

