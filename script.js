import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
    } else {
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wandle das aktuelle zeichen in einen grossbuchstaben um
    const upperCase = currentElement.toUpperCase()
    result.push(upperCase)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  // mache eine neue variable um die anzahl an es zu zählen
  let eCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // wenn das aktuelle zeichen ein e ist, dann zähle es
    if (currentElement === "e") {
      // erhöhe den e zähler
      eCount = eCount + 1
    }
  }
  return eCount
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um die Anzahl der Wörter zu zahlen
  let wordCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn das aktuelle Zeichen ein Leerzeichen ist, dann erhöhe die Anzahl der Wörter
    if (currentElement === " ") {
      wordCount = wordCount + 1
    }
  }
  //gebe die Anzahl der Wörter zurück
  return wordCount + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)
