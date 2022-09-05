import * as React from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { RandomReveal } from 'react-random-reveal'

import '../css/Roulette.css'

const Roulette = () =>{
    const [champions, setChampions] = React.useState<string[]>([]);
    const [picks, setPicks] = React.useState<string[]>([]);
    const [roles, setRoles] = React.useState<string[]>([]);

    let builds:string[] = [
        'CRIT',
        'AP',
        'ATK SPD',
        'LETALIDAD',
        'TANK',
        'MOV.SPD',
        'SUPPORT',
        'QUEMADURA',
        'OMNIVAMP/LIFESTEAL',
        'ABILTY HASTE'
    ]

    const version = "12.14.1";

    const PickRandomRole = () =>{
        setPicks(champions.sort(() =>Math.random()-0.5).slice(0,5))
        setRoles(builds.sort(() =>Math.random()-0.5).slice(0,5))
    }
    
    const fetchChampions = React.useCallback(async ()=>{
        await axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`).then(res =>{
            if(res){
                Object.values(res.data.data).map((e:any) =>{
                    return setChampions(prev => ([...prev, e.id]));
                })
            }
        }).catch(err =>{
            window.location.replace('/')
            return console.log(err)
        })
    },[])

    const RandomEffect = (text:any) =>{
        return(
            <RandomReveal
                isPlaying 
                duration={2} 
                characters={text as string} 
            />     
        )
    }
    
    React.useEffect(()=>{
        fetchChampions();
    },[fetchChampions])
    
    React.useEffect(()=>{
        console.log(champions);
    },[champions])

    React.useEffect(()=>{
        console.log(picks);
    },[picks])

    return(
        <div className='roulette-container'>
            {picks.length === 0 ? (
                <>
                    <h2>
                        TOP:
                    </h2>
                    <h2>
                        JUNGLE:
                    </h2>
                    <h2>
                        MID:
                    </h2>
                    <h2>
                        ADC:
                    </h2>
                    <h2>
                        SUPPORT:
                    </h2>
                </>
            ):(
                <>
                    <h2>
                        TOP: {RandomEffect(picks[0])}:{RandomEffect(roles[0])}
                    </h2>
                    <h2>
                        JUNGLE: {RandomEffect(picks[1])}:{RandomEffect(roles[1])}
                    </h2>
                    <h2>
                        MID: {RandomEffect(picks[2])}:{RandomEffect(roles[2])}
                    </h2>
                    <h2>
                        ADC: {RandomEffect(picks[3])}:{RandomEffect(roles[3])}
                    </h2>
                    <h2>
                        SUPPORT: {RandomEffect(picks[4])}:{RandomEffect(roles[4])}
                    </h2>
                </>
            )}

        <Button onClick={() =>{PickRandomRole()}}>Generate!</Button>
        </div>
    )
}

export default Roulette;