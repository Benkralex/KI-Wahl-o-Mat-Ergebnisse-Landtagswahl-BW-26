# 🗳️ Wahl-o-Mat AI Analyse

## ⚠️ Wichtiger Hinweis

**!!! DIES IST KEINE WAHLEMPFEHLUNG UND DIENT NUR DER INFORMATION! KEINE GARANTIE AUF RICHTIGKEIT DER DATEN! !!!**

Dieses Projekt ist eine experimentelle Analyse zur Untersuchung, wie verschiedene KI-Modelle die Fragen des Wahl-o-Mats beantworten würden. Es soll keine politische Position repräsentieren oder Wahlempfehlungen geben.

## 📊 Über dieses Projekt

Ich habe 8 verschiedene KI-Modelle die 38 Fragen des [Wahl-o-Mats für die Landtagswahl Baden-Württemberg 2026](https://www.wahl-o-mat.de/bw2026/) gestellt und ihre Antworten systematisch dokumentiert.

### Testmethodik

- **Neutrale Umgebung**: Alle Tests wurden in Inkognito-Fenstern durchgeführt
- **Keine Personalisierung**: Tests ohne Login oder bei Anthropic mit einem neuen, frischen Account ohne persönliche Informationen (siehe [accounts.txt](accounts.txt))
- **Verschiedene UIs**: Tests sowohl in nativen Oberflächen als auch in alternativen Clients (T3 Chat)
- **Mehrere Durchläufe**: Einige Modelle wurden mehrfach getestet, um Konsistenz zu überprüfen

## 🤖 Getestete KI-Modelle

### Erfolgreich getestet:
- **ChatGPT Auto** (Native UI) - 5 Durchläufe
- **GPT-5 mini** (T3 Chat) - 1 Durchlauf
- **Grok Schnell** (Native UI) - 2 Durchläufe
- **Grok 4.20 (Beta)** (Native UI) - 2 Durchläufe
- **Kimi K2** (T3 Chat) - 1 Durchlauf
- **Kimi K2.5** (T3 Chat) - 1 Durchlauf
- **Llama 4 Scout** (T3 Chat) - 1 Durchlauf
- **Mistral Auto** (Native UI) - 2 Durchläufe

### Verweigert (nicht getestet):
- **Gemini 3 Flash** (T3 Chat) - Verweigert politische Stellungnahme
- **Gemini 3 Flash** (Native UI) - Verweigert politische Stellungnahme
- **Claude Sonnet 4.6** (Native UI) - Verweigert politische Stellungnahme
- **Claude Haiku 4.5** (Native UI) - Verweigert politische Stellungnahme

Vier Modelle haben die Beantwortung der Fragen verweigert, da sie darauf programmiert sind, keine politischen Positionen einzunehmen.

## 📁 Projektstruktur

```
.
├── web/
│   └── index.html          # Interaktive Weboberfläche zur Analyse
├── results.csv             # Konsolidierte Ergebnisse aller Tests
├── questions.csv           # Die 38 Wahl-o-Mat-Fragen
├── prompt.txt              # Verwendeter Prompt für die KI-Modelle
├── accounts.txt            # Informationen zu verwendeten Accounts
├── verweigert.txt          # Liste der Modelle, die verweigert haben
├── besonderheiten.txt      # Besondere Beobachtungen während der Tests
├── *-raw.txt               # Rohe Antworten der Modelle
└── *.txt                   # Bereinigte/strukturierte Antworten
```

## 🌐 Weboberfläche

Die interaktive Weboberfläche ([web/index.html](web/index.html)) bietet:

- **Filteroptionen**: Nach Modell, UI und Durchlauf filtern
- **Fragen-Auswahl**: Einzelne Fragen auswählen oder deaktivieren
- **Übersichtsstatistiken**: Anzahl Zustimmungen, Ablehnungen und neutraler Antworten
- **Vergleichsanalyse**: Visuelle Darstellung der Antwortmuster
- **Responsive Design**: Funktioniert auf Desktop und Mobil

## 📈 Antwortformat

Die Antworten sind wie folgt kodiert:

- `1` = Zustimmung ✓
- `0` = Neutral/Unentschieden ~
- `-1` = Ablehnung ✗
- `-` = Keine eindeutige Antwort

## 🔍 Interessante Beobachtungen

Siehe [besonderheiten.txt](besonderheiten.txt) für detaillierte Beobachtungen während der Tests.

## 📋 Rohdaten

Alle Rohdaten sind in diesem Repository verfügbar:

- **Raw-Dateien** (`*-raw.txt`): Ungefilterte Antworten der KI-Modelle
- **Bereinigte Dateien** (`*.txt`): Strukturierte Extraktion der Antworten
- **CSV-Dateien**: Maschinenlesbare Formate für Analyse

## 🙏 Verwendungszweck

Dieses Projekt dient:

- Der Forschung zu KI-Verhaltensweisen bei politischen Fragen
- Der Transparenz bzgl. KI-Antwortmustern
- Der Dokumentation von Unterschieden zwischen verschiedenen Modellen
- Der Illustration, dass KI-Modelle unterschiedlich reagieren

## ⚖️ Lizenz & Haftungsausschluss

Die Daten werden zu Informations- und Forschungszwecken bereitgestellt. Es wird keine Garantie für die Richtigkeit oder Vollständigkeit gegeben. Die Antworten der KI-Modelle repräsentieren nicht notwendigerweise konsistente oder rationale politische Positionen.

## 🔗 Links

- [Wahl-o-Mat Baden-Württemberg 2026](https://www.wahl-o-mat.de/bw2026/)
- [GitHub Repository](https://github.com/Benkralex/KI-Wahl-o-Mat-Ergebnisse-Landtagswahl-BW-26)

---

**Stand**: Februar 2026  
**Landtagswahl Baden-Württemberg**: 2026
