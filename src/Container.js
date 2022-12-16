import React, { useEffect, useState } from "react"
import Card from './Card'
import HalfCard from './HalfCard'
import './Container.css'
import pokebola from "./imgs/pokebola.png"




const Container = () => {





    return (



        <div className="container">

            <h1 className="pokedex-name">Pokédex</h1>



            <div className="card">
                <Card />
                <HalfCard />
                





            </div>
        </div>
    )
}



export default Container