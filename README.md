# kochbuch

Sammlung meiner kochrezepte

## So fügst du ein neues Rezept deinem Kochbuch hinzu

1. Benötigte Programme:  
- [Hugo](https://gohugo.io/) (Website-Generator)  
- [Dart-Sass](https://sass-lang.com/dart-sass/) (CSS-Compiler)  
- [Git](https://git-scm.com/) (Versionierungstool)  

**Installation**

**Linux (Arch Linux):**
```bash
sudo pacman -S git hugo dart-sass 
```
**Mac (Homebrew):**

```bash
brew install git hugo dart-sass 
```

**Windows:**

```sh
choco install hugo-extended dart-sass git
```

2. Erstelle eine lokale Kopie von github

```bash
git clone git@github.com:spielhuus/kochbuch.git
```

3. **Erstelle ein neues Rezept**  

Verwende den folgenden Befehl, um ein neues Rezept in deinem `content/recipes`-Verzeichnis zu generieren:  

```bash
cd kochbuch
hugo new content/recipes/neues_rezept.md 
```

4. **Bilder organisieren**  

- Alle Rezeptbilder müssen im Verzeichnis `assets/images` gespeichert werden. 
- Der Dateiname des Bildes muss dem Rezeptnamen entsprechen (ohne Leerzeichen oder Sonderzeichen).  
- Beispiel: Für das Rezept `neues_rezept` wird das Bild als `assets/images/neues_rezept.jpg` gespeichert.

6. **Teste deine Änderungen**  

- Nach der Bearbeitung des Rezept-Files (`neues_rezept.md`) kannst du die Änderungen lokal testen, indem du den Server startest:  

```bash
hugo server -D
```

- Öffne deinen Browser und prüfe, ob das Rezept korrekt angezeigt wird.

6. **Rezept veröffentlichen**  

- Nachdem du das Rezept fertiggestellt hast, setze die `draft`-Option auf
`false`, um es für die Website sichtbar zu machen.  
- Öffne die Datei `neues_rezept.md` und entferne oder kommentiere die Zeile
`draft: true`.

