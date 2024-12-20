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
export function bubbleSort(arr) {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tausche die Elemente
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// Selection Sort
export function selectionSort(arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    // Tausche das Minimum-Element mit dem aktuellen Element
    let temp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = temp
  }
  return arr
}

// Insertion Sort
export function insertionSort(arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }
  return arr
}

// Funktion zur Überprüfung, ob eine Zahl eine Primzahl ist
export function isPrime(number) {
  if (number <= 1) {
    return false // Zahlen kleiner oder gleich 1 sind keine Primzahlen
  }
  // Überprüfe, ob die Zahl durch eine Zahl von 2 bis zur Quadratwurzel der Zahl teilbar ist
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false // Es ist keine Primzahl
    }
  }
  return true // Es ist eine Primzahl
}
