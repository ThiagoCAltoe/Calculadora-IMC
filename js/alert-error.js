import { inputWeight, inputHeight } from "./script.js"

export const AlertError = {
  element: document.querySelector(".alert-error"),
  open() {
    AlertError.element.classList.add("open")
    inputWeight.value = ""
    inputHeight.value = ""
  },
  close() {
    AlertError.element.classList.remove("open")
  },
}
