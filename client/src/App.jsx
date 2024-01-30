
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './Components/AddUser/AddUser'
import UpdateUser from './Components/UpdateUser/UpdateUser'
import AllUsersList from './Components/AllUsersList/AllUsersList'
function App() {


  return (
    <>



      <BrowserRouter>


        <Routes>

          <Route path="/" element={<AllUsersList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user" element={<UpdateUser />} />



        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
