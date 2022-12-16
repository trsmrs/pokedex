import React, { useEffect, useState } from "react"
import './HalfCard.css'
import pika from "./imgs/pika.png"
import meow from "./imgs/Meow.png"
import gengar from "./imgs/Gengar.png"
import psyduk from "./imgs/Psyduck.png"
import blank from "./imgs/Blank.png"




const HalfCard = () => {


    const [pokemon, setPokemon] = useState(blank)
    const [pokename, setPokename] = useState()
    const [poktype, setPoketype] = useState()
    const [colorBg, setColorBg] = useState('')
    const [hp, sethp] = useState('')
    const [atk, setAtk] = useState('')
    const [def, setDef] = useState('')
    const [spd, setSpd] = useState('')
    const [tot, setTot] = useState('')


    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')

    



    




    useEffect(() => {
        
    }, [pokemon])

    const handleOnClick = selector => {


        if (selector === meow) {
            let newVal = meow
            let newName = "Meowth"
            let newColor = 'blue'
            let newHp = 200
            sethp(newHp)
            let newAtk = 100
            setAtk(newAtk)
            let newDef = 300
            setDef(newDef)
            let newSpd = 150
            setSpd(newSpd)

            let newTot = newHp+
            newAtk+
            newDef+
            newSpd 
            setTot(newTot)

            let newSkill1 ='Agarrada'
            let newSkill2 ='Bola de pelo'

            let newType = 'Físico'

            setPoketype(newType)
            setSkill1(newSkill1)
            setSkill2(newSkill2)
            setColorBg(newColor)
            setPokemon(newVal)
            setPokename(newName)

        }


        if (selector === pika) {
            let newVal = pika
            let newName = "Pikachu"
            let newColor = 'yellow'
            let newHp = 300
            sethp(newHp)
            let newAtk = 200
            setAtk(newAtk)
            let newDef = 250
            setDef(newDef)
            let newSpd = 170
            setSpd(newSpd)

            let newTot = newHp+
            newAtk+
            newDef+
            newSpd 
            setTot(newTot)

            let newSkill1 ='Choque do Trovão'
            let newSkill2 ='Cabeçada ( ͡° ͜ʖ ͡°)'

            let newType = 'Elétrico'

            setPoketype(newType)
            setSkill1(newSkill1)
            setSkill2(newSkill2)
            setColorBg(newColor)
            setPokemon(newVal)
            setPokename(newName)

        }

        if (selector === gengar) {
            let newVal = gengar
            let newName = "Gengar"
            let newColor = 'purple'
            let newHp = 400
            sethp(newHp)
            let newAtk = 300
            setAtk(newAtk)
            let newDef = 250
            setDef(newDef)
            let newSpd = 100
            setSpd(newSpd)

            let newTot = newHp+
            newAtk+
            newDef+
            newSpd 
            setTot(newTot)

            let newSkill1 ='Maldição'
            let newSkill2 ='Veneno Mortal'

            let newType = 'Fantasma'

            setPoketype(newType)
            setSkill1(newSkill1)
            setSkill2(newSkill2)
            setColorBg(newColor)
            setPokemon(newVal)
            setPokename(newName)
        }

        if (selector === psyduk) {
            let newVal = psyduk
            let newName = "Psyduck"
            let newColor = 'green'
            let newHp = 150
            sethp(newHp)
            let newAtk = 70
            setAtk(newAtk)
            let newDef = 400
            setDef(newDef)
            let newSpd = 250
            setSpd(newSpd)

            let newTot = newHp+
            newAtk+
            newDef+
            newSpd 
            setTot(newTot)

            let newSkill1 ='Transe psíquico '
            let newSkill2 ='Sono profundo'

            let newType = 'Psíquico'

            setPoketype(newType)
            setSkill1(newSkill1)
            setSkill2(newSkill2)
            setColorBg(newColor)
            setPokemon(newVal)
            setPokename(newName)
        }


    }

    return (

        <div className={`halfcard ${colorBg}`}>

            <button onClick={() => handleOnClick(meow)}>Meowth</button>
            <button onClick={() => handleOnClick(pika)}>Pikachu</button>
            <button onClick={() => handleOnClick(gengar)}>Gengar</button>
            <button onClick={() => handleOnClick(psyduk)}>Psyduck</button>
            <h3>{pokename}</h3>
            <h5 className={`${colorBg}`}>{poktype}</h5>
            <img src={pokemon} alt=""></img>


            <div className="cards">
                <div>
                    <h4>Status</h4>
                    <hr></hr>
                    <span>HP: {hp}</span>
                    <hr></hr>
                    <span>Ataque: {atk}</span>
                    <hr></hr>
                    <span>Defesa: {def}</span>
                    <hr></hr>
                    <span>Velocidade: {spd}</span>
                    <hr></hr>
                    <span>Total: {tot}</span>
                </div>
                <div>
                    <h4>Habilidades</h4>
                    <hr></hr>
                    <span>{skill1}</span>
                    <hr></hr>
                    <span>{skill2}</span>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}




export default HalfCard