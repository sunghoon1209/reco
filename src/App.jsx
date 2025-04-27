import AppRouter from "./rotuer"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppRouter />
  )
}

export default App
