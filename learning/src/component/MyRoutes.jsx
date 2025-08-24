import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Job from "./Job.jsx";
import School from './school/School.jsx';
import Details from './school/Details.jsx';
import Create from './school/Create.jsx';
import Update from './school/Update.jsx';
import College from './college/College.jsx';
import Details1 from './college/Details1.jsx';
import Update1 from './college/Update1.jsx';
import Create1 from './college/Create1.jsx';
import Property from './property/Property.jsx';
import Details2 from './property/Details2.jsx';
import Create2 from './property/Create2.jsx';

import Update2 from './property/Update2.jsx';

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<div>This is Contact Page</div>}></Route>
            <Route path="/about" element={<div>This is About Page</div>}></Route>
            <Route path="/login" element={<div>This is Login Page</div>}></Route>
            <Route path="/job/:id" element={<Job></Job>}></Route>
            <Route path="/school" element={<School></School>}></Route>
            <Route path="/school/:id" element={<Details></Details>}></Route>
            <Route path="/school/create" element={<Create></Create>}></Route>
            <Route path="/school/update/:id" element={<Update></Update>}></Route>
           
            <Route path="/college" element={<College></College>}></Route>
            <Route path="/college/:id" element={<Details1></Details1>}></Route>
            <Route path="/college/create" element={<Create1></Create1>}></Route>
            <Route path="/college/update/:id" element={<Update1></Update1>}></Route>
            
            <Route path="/property" element={<Property></Property>}></Route>
            <Route path="/property/:id" element={<Details2></Details2>}></Route>
            <Route path="/property/create" element={<Create2></Create2>}></Route>
            <Route path="/property/update/:id" element={<Update2></Update2>}></Route>

            <Route path="*" element={<div>Not Found</div>}></Route>
        </Routes>
    </div>
  )
}

export default MyRoutes


