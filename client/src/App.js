import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import {Box, Stack} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp.tsx";
import LogIn from "./components/LogIn.tsx";
import Profile from "./components/Profile";
import CollectionCreatePage from "./components/CollectionCreatePage";

function App() {
  return (
      <Router>
     <Box>
             <NavBar/>
         <Stack direction={"row"} spacing={2} justifyContent={"center"} padding={10}>
             <Routes>
                 <Route path="/signup" element={<SignUp/>}/>
                 <Route path="/login" element={<LogIn/>}/>
                 <Route path="/profile" element={<Profile/>}/>
                 <Route path="/createCollection" element={<CollectionCreatePage/>}/>
             </Routes>
         </Stack>
     </Box>
      </Router>
  );
}

export default App;
