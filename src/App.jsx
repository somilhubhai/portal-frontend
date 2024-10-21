import { Outlet } from "react-router-dom"
import Header from "./components/Header"


// import Category from "./components/Category"
// import User from "./components/User"
// import Feeder from "./components/Feeder"

function App() {

  return (
    <>
    <Header />
    <Outlet />
    {/* <Feeder /> */}
    {/* <User /> */}
    {/* <Category /> */}
    </>
  )
}

export default App
