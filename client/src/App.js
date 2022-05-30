import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import {Box, Stack} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp.tsx";
import LogIn from "./components/LogIn.tsx";
import Profile from "./components/Profile";
import CollectionCreatePage from "./components/CollectionsComponents/CollectionCreatePage";
import Content from "./components/Content";
import CollectionViewPage from "./components/CollectionsComponents/CollectionViewPage";
import ItemCreatePage from "./components/ItemsComponents/ItemCreatePage";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  return (
      <Router>
     <Box>
             <NavBar/>
         <Stack direction={"row"} spacing={2} justifyContent={"center"} padding={10}>
             <Routes>
                 <Route path="/signup" element={<SignUp/>}/>
                 <Route path="/adminPanel" element={<AdminPanel/>}/>
                 <Route path='/collectionView/:collectionId' element={<CollectionViewPage key={window.location.pathname}/>}/>
                 <Route path="/login" element={<LogIn/>}/>
                 <Route path="/profile" element={<Profile/>}/>
                 <Route path="/createCollection" element={<CollectionCreatePage/>}/>
                 <Route path="/createItem" element={<ItemCreatePage/>}/>
                 <Route path="/home" element={<Content/>}/>
                 <Route path="/" element={<Content/>}/>
             </Routes>
         </Stack>
     </Box>
      </Router>
  );
}

export default App;
