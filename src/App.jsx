import { useEffect, useState } from "react";
import "./styles.css";
import {Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Pets from "./components/Pets";
import AdoptionForm from "./components/AdoptionForm";
import ApplicationInfo from "./components/ApplicationInfo";
import Footer from "./components/Footer";
import axios from "axios"

function App() {
  const petsData = [
    { id: '1', name: 'Buddy', age: 2, species: 'Dog', date_entered: '2024-07-01', image: 'pet-image1.jpeg' },
    { id: '2', name: 'Mittens', age: 3, species: 'Cat', date_entered: '2024-06-20', image: 'pet-image2.jpeg' },
    { id: '3', name: 'Rex', age: 1, species: 'Dog', date_entered: '2024-07-05', image: 'pet-image3.jpeg' },
    { id: '4', name: 'Whiskers', age: 4, species: 'Cat', date_entered: '2024-06-15', image: 'pet-image4.jpeg' },
    { id: '5', name: 'Garfield', age: 4, species: 'Cat', date_entered: '2024-06-20', image: 'pet-image4.jpeg' }
  ];
  // useEffect(()=>{
  //   // get pets from api
  //   axios.get(GET_PETS_URL)
  //     .then(res => {
  //       console.log(res.data);
  //       setPets(res.data.pets);
  //     })
  //     .catch(err => console.log(err))
  // },[])
  const [pets, setPets] = useState([]);
  return (
    <div className="App">
      <Header />
      {/* at the route /, the home compnent renders */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pets" element={<Pets pets={pets}/>} />
          <Route path="/adopt" element={<AdoptionForm pets={pets}/>} />
          <Route path="/application-info" element={<ApplicationInfo />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
