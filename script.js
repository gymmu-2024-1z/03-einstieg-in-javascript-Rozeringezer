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

export function aufgabe05(args) {
  const input = args
  const result = []

  // Erstelle eine Variable hasCapitalLetter die am anfang falsch ist
  let hasCapitalLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // erstelle eine Variable die den ascii code vom current element speichert
    const asciiCode = currentElement.charCodeAt(0)

    // Prüfe ob der ASCII code zwischen 65 und 90 ist
    if (asciiCode >= 65 && asciiCode <= 90) {
      // Wenn ja, dann setze die hasCapitalLetter auf true
      hasCapitalLetter = true
    }
  }
  //gebe die Anzahl der Großbuchstaben zuruck
  return hasCapitalLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []

  //Erstelle eine Variable hasSpecialCharacter die am anfang falsch ist
  let hasSpecialCharacter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // erstelle eine Variable die den ascii code vom current element speichert
    const asciiCode = currentElement.charCodeAt(0)

    //Prüfe ob der ASCII code zwischen 65 und 90 ist
    if (asciiCode >= 65 && asciiCode <= 90) {
      //Grossbuchstaben
      // kein sonderzeichen
    } else if (asciiCode >= 48 && asciiCode <= 57) {
      //Zahlen
      // kein sonderzeichen
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      // Kleinbuchstaben
      // kein sonderzeichen
    } else {
      // Wenn ja, dann setze die hasSpecialCharacter auf true
      hasSpecialCharacter = true
    }
  }

  //gebe hasSpecialCharacter zuruck
  return hasSpecialCharacter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []

  //Erstelle eine Variable um zu testen ob in einem Text das Wort 'und' vorkommt
  let hasUnd = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (
      currentElement === "u" &&
      input[i + 1] === "n" &&
      input[i + 2] === "d"
    ) {
      // Wenn ja, dann setze die hasUnd auf true
      hasUnd = true
    }
  }
  //gebe hasUnd zuruck
  return hasUnd
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das aktuelle Zeichen ein e ist, dann hänge eine 3 an
    if (currentElement === "e" || currentElement === "E") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1
  }

  // Wenn count genau gleich 6 ist, dann gebe true zuruck
  if (count === 6) {
    return true
  } else {
    return false
  } // Wenn nicht, gebe false zuruck
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args

  //RegEx für gültige Hex-Codes (6 oder 3 Stellen nach dem #)
  const isHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  //Rückgabe, ob es sich um einen gültigen Hex-Code handelt
  return isHex.test(input)
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  //Prüfe, ob genau ein Zeichen übergeben wurde
  if (input.length === 1) {
    return -1 //Falls die Eingabe nicht genau ein Zeichen ist, gebe -1 zuruck
  }

  const asciiCode = input.charCodeAt(0)

  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  let position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      position = i
      break // breche die schleife ab
    }
  }

  //gebe die position des ersten e zuruck
  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      position = i
    }
  }
  return position //gebe die position des letzten e zuruck
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let position = -1
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Prüfe ob das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      count = count + 1

      //Wenn das dritte e gefunden wurde
      if (count === 3) {
        position = i
        break
      }
    }
  }
  return position //gebe die position des dritten e zuruck (oder falls kein e gefunden wurde, gebe -1 zuruck)
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  let result = ""

  //Durchlaufe die Eingabezeichen, bis das erste Leerzeichen gefunden wurde
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn das aktuelle Zeichen ein Leerzeichen ist, breche die Schleife ab
    if (currentElement === " ") {
      break
    }
    //Füge das aktuelle Zeichen zur Ergebnisliste hinzu
    result = result + currentElement
  }
  return result
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  let firstPart = ""
  let secondPart = ""
  let foundDollar = false

  //Durchlaufe die Eingabezeichen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn das aktuelle Zeichen ein Dollarzeichen ist, schalte um secondPart
    if (currentElement === "$") {
      foundDollar = true
      continue // Überspringe das Dollarzeichen
    }

    //Füge das aktuelle Zeichen zu firstPart hinzu
    if (foundDollar) {
      firstPart = firstPart + currentElement
    } else {
      secondPart = secondPart + currentElement
    }
  }

  //Ergebnis als Array ausgeben
  return [firstPart, secondPart]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  let currentEntry = ""
  let result = []

  //Durchlaufe die Eingabezeichen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn das aktuelle Zeichen `,` ist, füge den aktuellen Eintrag zur Ergebnisliste hinzu
    if (currentElement === ",") {
      result.push(currentEntry) //Speichere den bisherigen Eintrag
      currentEntry = "" //Resette den aktuellen Eintrag
    } else {
      currentEntry = currentEntry + currentElement
    }
  }

  //Füge den letzten Eintrag zur Ergebnisliste hinzu (nach der Schleife)
  if (currentEntry !== "") {
    result.push(currentEntry)
  }

  return result //Gebe die Ergebnisliste zuruck
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const name = prompt("Wie heißt du?")
  const age = prompt("Wie alt bist du?")

  //Ausgabe mit den eingegeben Werten
  const output = `Hallo ${name}, du bist ${age} Jahre alt!`

  // Ausgabe der Nachricht
  console.log(output)
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args

  //Verdopple jedes Zeichen in der Eingabe
  let doubledInput = ""
  for (let i = 0; i < input.length; i++) {
    doubledInput = doubledInput + input[i] + input[i] //Verdopple jedes Zeichen
  }

  //Ausgabe der verdopplten Eingabe
  return doubledInput
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args

  //überprüfe, ob der Benutzer den Dialog abbricht
  if (input === null) {
    return
  }

  //Prüfe, ob nach jedem Punkt ein Leerzeichen kommt
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") {
      if (input[i + 1] !== " ") {
        return false //Nach einem Punkt kommt kein Leerzeichen
      }
    }
  }
  return true //Nach jedem Punkt kommt ein Leerzeichen
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  //Kehr die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []
  let foundk = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "k") {
      foundk = true
    }

    if (foundk === false) {
      result.push(`_`)
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)
