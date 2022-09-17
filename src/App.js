import React from 'react'
import Navbar from './components/Navbar.js'
import Data from "./data.js"
import Journal from "./components/Journal.js"


export default function App() {
  let newData = Data.map(item => {
    return <Journal 
    title={item.title} 
    location={item.location} 
    maps={item.googleMapsUrl}
    startDate={item.startDate}
    endDate={item.endDate}
    description={item.description}
    image={item.imageUrl}
    />
  });
  return (
    <div className="container">
      <Navbar />
      {newData}
    </div>
  )
}