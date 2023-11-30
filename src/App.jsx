import { useEffect, useState } from "react"

import { GoogleIcon, DuckDuckGoIcon, BingIcon } from "./assets/icons/Icons"

function App() {
  const [chosen, setChosen] = useState("duck")
  const [input, setInput] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const words = input.split(" ")

      if (chosen === "google") {
        window.open("https://google.com/search?q=" + words.join("+"), "_self")
      } else if (chosen === "bing") {
        window.open("https://bing.com/search?q=" + words.join("+"), "_self")
      } else {
        window.open(
          "https://duckduckgo.com/?t=h_&q=" + words.join("+"),
          "_self"
        )
      }
    }
  }

  useEffect(() => {
    document.getElementById("Video").playbackRate = 0.75

    const Google = document.getElementById("Google")
    const Bing = document.getElementById("Bing")
    const Duck = document.getElementById("Duck")

    if (chosen === "google") {
      Google.style.fill = "#FFFFFF"
      Bing.style.fill = "#FFFFFF75"
      Duck.style.fill = "#FFFFFF75"

      Google.style.opacity = "1"
      Bing.style.opacity = "0"
      Duck.style.opacity = "0"
    } else if (chosen === "bing") {
      Bing.style.fill = "#FFFFFF"
      Google.style.fill = "#FFFFFF75"
      Duck.style.fill = "#FFFFFF75"

      Bing.style.opacity = "1"
      Google.style.opacity = "0"
      Duck.style.opacity = "0"
    } else {
      Duck.style.fill = "#FFFFFF"
      Google.style.fill = "#FFFFFF75"
      Bing.style.fill = "#FFFFFF75"

      Duck.style.opacity = "1"
      Bing.style.opacity = "0"
      Google.style.opacity = "0"
    }
  }, [chosen]) // Adding `currentHour` to the dependencies array to update the gradient on time change

  return (
    <div>
      <video
        id="Video"
        preload="auto"
        autoPlay
        loop
        muted
        type="video/webm"
        src="https://firebasestorage.googleapis.com/v0/b/monsan-dev.appspot.com/o/LabeX%2FLabeX.webm?alt=media&token=8dd5abfb-0caa-46e4-aa59-e586de98ed77"
      />

      <section id="Selector">
        <GoogleIcon setChosen={setChosen} />
        <DuckDuckGoIcon setChosen={setChosen} />
        <BingIcon setChosen={setChosen} />
      </section>

      <input
        autofocus
        type="text"
        id="Search"
        placeholder="Pesquisar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} // Add event listener for keydown event
      />

      <a href="https://lucasmonsan.com.br">
        Criado por: <strong>Lucas Monsan</strong>
      </a>
    </div>
  )
}

export default App
