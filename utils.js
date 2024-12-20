export function print(args) {
  var element = document.querySelector("#output-content")
  const outputHeight = parseInt(
    getComputedStyle(document.querySelector(":root"))
      .getPropertyValue("--output-height")
      .split("px")[0],
  )
  const outputHeaderHeight = parseInt(
    getComputedStyle(document.querySelector(":root"))
      .getPropertyValue("--output-header-height")
      .split("px")[0],
  )
  const scrollToBottom =
    element.scrollHeight - element.scrollTop <=
    outputHeight - outputHeaderHeight
      ? true
      : false
  var oldContent = element.textContent
  element.textContent = `${oldContent}\n> ${args}`
  if (true /*scrollToBottom*/) {
    element.scrollTop = element.scrollHeight
  }
}

export function read() {
  var element = document.querySelector("#input")
  return element.value
}

export function parseArgs(input) {
  return input.split(" ")
}

export function $(callback) {
  const value = read()
  const result = callback(value)
  print(result)
}

function increaseFontSize() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-font-size")
  currentFontSize = currentFontSize.split("pt")[0]
  cssRoot.style.setProperty(
    "--output-font-size",
    `${parseInt(currentFontSize) + 2}pt`,
  )
}
linkupHandler("[data-click='increaseFontSize']", increaseFontSize)

function decreaseFontSize() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-font-size")
  currentFontSize = currentFontSize.split("pt")[0]
  cssRoot.style.setProperty(
    "--output-font-size",
    `${parseInt(currentFontSize) - 2}pt`,
  )
}
linkupHandler("[data-click='decreaseFontSize']", decreaseFontSize)

function decreaseOutputHeight() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-height")
  currentFontSize = currentFontSize.split("vh")[0]
  cssRoot.style.setProperty(
    "--output-height",
    `${parseInt(currentFontSize) - 2}vh`,
  )
}
linkupHandler("[data-click='decreaseOutputHeight']", decreaseOutputHeight)

function increaseOutputHeight() {
  const cssRoot = document.querySelector(":root")
  const rootStyles = getComputedStyle(cssRoot)
  let currentFontSize = rootStyles.getPropertyValue("--output-height")
  currentFontSize = currentFontSize.split("vh")[0]
  cssRoot.style.setProperty(
    "--output-height",
    `${parseInt(currentFontSize) + 2}vh`,
  )
}
linkupHandler("[data-click='increaseOutputHeight']", increaseOutputHeight)

function clearConsole() {
  const consoleElement = document.querySelector("#output-content")
  consoleElement.textContent = ">>>"
}
linkupHandler("[data-click='clearConsole']", clearConsole)

function linkupHandler(selector, cb) {
  const elem = document.querySelector(selector)
  if (elem) {
    elem.addEventListener("click", cb)
  }
}

export function linkupExerciseHandler(selector, cb) {
  const elem = document.querySelector(selector)
  if (elem) {
    elem?.addEventListener("click", () => $(cb))
  }
}

// Bubble Sort
export function bubbleSort(input, isAlphabet = false) {
  let arr = parseInput(input, isAlphabet)
  if (!arr) return "Ungültige Eingabe. Bitte korrekte Daten eingeben." // Korrekt Anführungszeichen

  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)

  return arr.join(", ")
}

// Selection Sort
export function selectionSort(input, isAlphabet = false) {
  let arr = parseInput(input, isAlphabet)
  if (!arr) return "Ungültige Eingabe. Bitte korrekte Daten eingeben." // Korrekt Anführungszeichen

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr.join(", ")
}

// Insertion Sort
export function insertionSort(input, isAlphabet = false) {
  let arr = parseInput(input, isAlphabet)
  if (!arr) return "Ungültige Eingabe. Bitte korrekte Daten eingeben." // Korrekt Anführungszeichen

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }

  return arr.join(", ")
}

// Hilfsfunktion zur Eingabeprüfung und Konvertierung
function parseInput(input, isAlphabet) {
  let arr = input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)

  if (isAlphabet) {
    // Prüfen, ob alle Einträge Buchstaben sind
    if (!arr.every((char) => /^[a-zA-Z]+$/.test(char))) return null
    return arr.map((char) => char.toLowerCase()).sort() // Optional: case-insensitive
  } else {
    // Prüfen, ob alle Einträge Zahlen sind
    let numArr = arr.map((num) => parseInt(num, 10))
    if (numArr.some(isNaN)) return null
    return numArr
  }
}
