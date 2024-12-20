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
  //Eingabe wird in Input gespeichert
  const input = args
  const result = []

  // Schleife über jedes Zeichen der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wandelt das Zeichen in einen Grossbuchstaben um
    const upperCase = currentElement.toUpperCase()

    // Fügt den Grossbuchstaben zur Ergebnisliste hinzu
    result.push(upperCase)
  }

  //Rückgabe des Ergebnisses als String
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  // Eingabe wird in Input gespeichert
  const input = args
  const result = []

  // Zähler für ''e'' initalisieren
  let eCount = 0

  // Schleife über jedes Zeichen der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das Zeichen ein ''e'' ist, erhöhe den Zähler
    if (currentElement === "e") {
      eCount = eCount + 1
    }
  }
  // Rückgabe der Anzahl der ''e''s
  return eCount
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  //Eingabe wird in Input gespeichert
  const input = args
  const result = []

  // Schleife, um nur Buchstaben und Leerzeichen zu filtern
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0)

    // Wenn es ein Buchstabe oder Leerzeichen ist, füge es zur Ergebnisliste hinzu
    if (asciiCode >= 65 && asciiCode <= 90) {
      // Grossbuchstaben
      result.push(currentElement)
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      // Kleinbuchstaben
      result.push(currentElement)
    } else if (asciiCode === 32) {
      // Leerzeichen
      result.push(currentElement)
    }
  }

  // Neue Liste zur Vermeidung von mehrfachen Leerzeichen hintereinander
  const result2 = []

  // Schleife, um doppelte Leerzeichen zu entfernen
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // Ignoriere das erste Leerzeichen
    } else {
      result2.push(currentElement)
    }
  }

  // Zähle die Anzahl der Leerzeichen
  let spaceCount = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      spaceCount = spaceCount + 1
    }
  }

  // Rückgabe der Anzahl der Wörter (Leerzeichen + 1)
  return spaceCount + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  //Eingabe wird in Input gespeichert
  const input = args

  //Schleife über die Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //ASCII-Code des aktuellen Zeichens
    const asciiCode = currentElement.charCodeAt(0)

    //Prüfe, ob der ASCII-Code einem Grossbuchstaben entspricht (65-90)
    if (asciiCode >= 65 && asciiCode <= 90) {
      //Sobald ein Grossbuchstabe gefunden wird, gibt true zurück
      return true
    }
  }

  //Wenn kein Grossbuchstabe gefunden wurde, gibt false zuruck
  return false
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  //Eingabe wird in Input gespeichert
  const input = args
  const result = []

  //Erstelle eine Variable hasSpecialCharacter die am anfang falsch ist
  let hasSpecialCharacter = false

  // Schleife über jedes Zeichen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // ASCII-Werte der Zeichen prüfen
    const asciiCode = currentElement.charCodeAt(0)

    //Prüfe ob der ASCII code zwischen 65 und 90 ist
    if (asciiCode >= 65 && asciiCode <= 90) {
      // Grossbuchstaben
      // kein sonderzeichen
    } else if (asciiCode >= 48 && asciiCode <= 57) {
      // Zahlen
      // kein Sonderzeichen
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      // Kleinbuchstaben
      // kein sonderzeichen
    } else {
      // Wenn ja, dann setze die hasSpecialCharacter auf true
      hasSpecialCharacter = true
    }
  }

  // Gebe hasSpecialCharacter zurück
  return hasSpecialCharacter
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  //Eingabe wird in Input gespeichert
  const input = args
  const result = []

  //Erstelle eine Variable um zu testen ob in einem Text das Wort 'und' vorkommt
  let hasUnd = false

  // Schleife durch den Eingabetext
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Prüfe, ob ''und'' vorkommt
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
  //Eingabe wird in Input gespeichert
  const input = args
  const result = []

  // Schleife über jedes Zeichen der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Ersetze jedes ''e'' oder ''E'' mit ''3''
    if (currentElement === "e" || currentElement === "E") {
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }

  // Rückgabe der Resultats als String
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  //Eingabe wird in Input gespeichert
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
  let position = -1 // Standardmässig -1, falls kein ''e'' gefunden wird

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das aktuelle Zeichen ein e ist, speichere die Position
    if (currentElement === "e") {
      position = i
      break // Beende die Schleife nach dem ersten ''e''
    }
  }

  // Rückgabe der Position des ersten ''e'' oder -1, wenn kein ''e'' gefunden wurde
  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let position = -1 // Standardmässig -1, falls kein ''e'' gefunden wird

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      position = i
    }
  }

  // Rückgabe der Position des letzten ''e'' oder -1, wenn kein ''e'' gefunden wurde
  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let position = -1
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Prüfe ob das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      count = count + 1

      // Wenn das dritte e gefunden wurde
      if (count === 3) {
        position = i
        break
      }
    }
  }
  return position // Gebe die position des dritten e zuruck (oder falls kein e gefunden wurde, gebe -1 zuruck)
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  let result = ""

  // Durchlaufe die Eingabezeichen, bis das erste Leerzeichen gefunden wurde
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn das aktuelle Zeichen ein Leerzeichen ist, breche die Schleife ab
    if (currentElement === " ") {
      break
    }
    // Füge das aktuelle Zeichen zur Ergebnisliste hinzu
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

  // Durchlaufe die Eingabezeichen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das aktuelle Zeichen ein Dollarzeichen ist, schalte um secondPart
    if (currentElement === "$") {
      foundDollar = true
      continue // Überspringe das Dollarzeichen
    }

    // Füge das aktuelle Zeichen zu firstPart hinzu
    if (foundDollar === false) {
      firstPart = firstPart + currentElement
    } else {
      secondPart = secondPart + currentElement
    }
  }

  // Ergebnis als Array ausgeben
  return [firstPart, secondPart]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalist = []
  const currentlist = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn wir ein Leeerzeichen treffen, dann schreiben wir alles was wir bisher jetzt haben, in die totalist

    if (currentElement === " ") {
      totalist.push(currentlist.join(""))
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
    }
  }

  //Wir schreiben alles was wir noch bis zum Ende gelesen haben, in die Liste
  totalist.push(currentlist.join(""))

  return totalist
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args

  // Wir verwenden die Aufgabe 17 um eine Liste zu bekommen
  const nameAndAge = aufgabe17(input)

  // Wir generieren unsere Ausgabeliste
  const result = []

  // Hier schreiben wir ganze Worte in die Liste, auch das ist möglich
  result.push("Sie heissen ")

  // Wir setzen die Liste dann so zusammen, dass der Name und das Alter an der richtigen Stelle eingefüg werden
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  // Wir geben das Resultat als Text zuruck
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args

  // Verdopple jedes Zeichen in der Eingabe
  let doubledInput = ""
  for (let i = 0; i < input.length; i++) {
    doubledInput = doubledInput + input[i] + input[i] //Verdopple jedes Zeichen
  }

  // Ausgabe der verdopplten Eingabe
  return doubledInput
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args

  // überprüfe, ob der Benutzer den Dialog abbricht
  if (input === null) {
    return
  }

  // Prüfe, ob nach jedem Punkt ein Leerzeichen kommt
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") {
      if (input[i + 1] !== " ") {
        //Nach einem Punkt kommt kein Leerzeichen
        return false
      }
    }
  }

  //Nach jedem Punkt kommt ein Leerzeichen
  return true
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  // Kehr die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    //Speichere das akutelle Zeichen in der Variablen ''currentElement''
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  // Eine Variable ''foundk'', die überpfrüft, ob das Zeichen ''k'' gefunden wurde
  let foundk = false

  // Schleife durch jedes Zeichen der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das Zeichen ''k'' gefunden wird, setze ''foundk'' auf true
    if (currentElement === "k") {
      foundk = true
    }

    // Wenn ''k'' noch nicht gefunden wurde, ersetze das Zeichen durch ''_''
    if (foundk === false) {
      result.push(`_`)
    } else {
      // Wenn ''k'' gefunden wurde, füge das aktuelle Zeichen unverändert hinzu
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args // Eingabe-Text
  const firsChar = input[0] // Erstes Zeichen in der Eingabe

  // Rückgabe: Erstes Zeichen vorne + Originaltext + Erstes Zeichen hinten
  return firsChar + input + firsChar
}

// Verknüpfung der Aufgaben
linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args

  // Wenn der Text weniger als 2 Zeichen hat, gibt es nichts zu vertauschen
  if (input.length < 2) {
    return input
  }

  // Speichere das erste und das letzte Zeichen
  const firstChar = input[0]
  const lastChar = input[input.length - 1]

  // Erzeuge den neuen Text mit vertauschten Zeichen
  const middle = input.slice(1, input.length - 1)
  const result = lastChar + middle + firstChar

  // Gib das Ergebnis zuruck
  return result
}

linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args

  // Wenn der Text weniger als 2 Zeichen hat, gibt es nichts zu löschen
  if (input.length < 2) {
    return input
  }

  const length = input.length

  // Wenn die Anzahl Zeichen ungerade ist
  if (length % 2 !== 0) {
    const middleIndex = Math.floor(length / 2)

    return input.slice(0, middleIndex) + input.slice(middleIndex + 1)
  }

  // Wenn die Anzahl Zeichen gerade ist
  const middleStart = length / 2 - 1
  const middleEnd = length / 2 + 1 // Der End-Index ist der nächste nach den mittleren Zeichen
  return input.slice(0, middleStart) + input.slice(middleEnd)
}

linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args

  // Wenn der Text weniger als 2 Zeichen hat, gibt es nichts zu tauschen
  if (input.length < 2) {
    return input
  }

  const firstChar = input[0]
  const secondChar = input[1]

  // Vergleichen der beiden ersten Zeichen alphanumerisch
  if (firstChar > secondChar) {
    // Wenn das erste Zeichen größer ist, tausche sie
    return secondChar + firstChar + input.slice(2) //Nur die ersten beiden Zeichen tauschen
  }

  // Ansonsten bleibt  die Reihenfolge wie es ist
  return input
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args

  // Überprüfen, ob es eine Zahl ist
  const isNumber = !isNaN(input) && input.trim() !== ""

  // Rückgabe, ob es eine Zahl ist
  return isNumber
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args.trim()

  // Die Eingabe wird in zwei Teile unterteilt
  const parts = input.split(" ")

  // Überprüfen, ob es genau zwei Teile gibt und beide Teile gültige Zahlen sind
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    // Umwandeln der beiden Teile in Zahlen und berechnen der Summe
    const num1 = parseFloat(parts[0])
    const num2 = parseFloat(parts[1])
    return num1 + num2
  }

  // Falls es keine zwei Zahlen sind oder der Input ungültig ist
  return "Fehler: Bitte geben Sie zwei Zahlen durch ein Leerzeichen getrennt ein."
}
linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

// Eigene Aufgabe 01: Entfernen der Vokale
export function eigeneAufgabe01(args) {
  const input = args.trim()
  return input.replace(/[aeiouAEIOU]/g, "") // Ersetzt alle Vokale mit einem leeren String
}

linkupExerciseHandler("[data-click=eigeneAufgabe01]", eigeneAufgabe01)

// Eigene Aufgabe 02: Überprüfen, ob der Text nur aus Zahlen besteht
export function eigeneAufgabe02(args) {
  const input = args.trim()
  const isNumber = /^\d+$/.test(input) // Prüft, ob der Text nur Ziffern enthält
  return isNumber ? "Nur Zahlen" : "Nicht nur Zahlen"
}

linkupExerciseHandler("[data-click=eigeneAufgabe02]", eigeneAufgabe02)

// Eigene Aufgabe 03: Entfernen von Leerzeichen
export function eigeneAufgabe03(args) {
  const input = args.trim()
  return input.replace(/\s+/g, "") // Entfernt alle Leerzeichen
}

linkupExerciseHandler("[data-click=eigeneAufgabe03]", eigeneAufgabe03)
