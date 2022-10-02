import React, { useState } from "react"
import { createRoot } from "react-dom/client"

import "./style.css";

type Status = {
  message: string
  variant: string
}

const App: React.FC = () => {
  const [status, setStatus] = useState(null as Status)
  const [fruit, setFruit] = useState("")

  const handleClickSave = () => {
    chrome.storage.sync.set(
      {
        fruit
      },
      () => { setStatus({ variant: "success", message: "Success to save !" }) }
    )
  }

  return (
    <div>
      <h2>Options window</h2>
      <div>
        <span>Favorite fruit: </span>
        <select name="fruit" id="fruit" onChange={(e) => setFruit(e.target.value)}>
        {["Apple", "Banana", "Cherry"].map(value => 
          <option key={value} value={value}>{value}</option>
        )}
        </select>
      </div>
      <div>
        <button onClick={handleClickSave}>Save</button>
      </div>
      { (status != null)
        ? <p className={`message ${status.variant}`}>{status.message}</p>
        : <></>
      }
    </div>
  )
}

createRoot(document.getElementById("app")).render(<App/>)
