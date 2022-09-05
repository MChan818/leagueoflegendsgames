import * as React from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { RandomReveal } from 'react-random-reveal'
import icon_Top from '../css/img/Position_Gold-Top.png'
import icon_Jungle from '../css/img/Position_Gold-Jungle.png'
import icon_Mid from '../css/img/Position_Gold-Mid.png'
import icon_Bot from '../css/img/Position_Gold-Bot.png'
import icon_Support from '../css/img/Position_Gold-Support.png'
import icon_AP from '../css/img/icon_ap.jpg'
import icon_crit from '../css/img/icon_crit.jpg'
import icon_attkspeed from '../css/img/icon_as.jpg'
import icon_letal from '../css/img/icon_letal.jpg'
import icon_tank from '../css/img/icon_tank.jpg'
import icon_ms from '../css/img/icon_ms.jpg'
import icon_support from '../css/img/icon_support.jpg'
import icon_burn from '../css/img/icon_burn.jpg'
import icon_vamp from '../css/img/icon_vamp.jpg'
import icon_haste from '../css/img/icon_haste.jpg'

import '../css/Roulette.css'

const Roulette = () =>{
    const [champions, setChampions] = React.useState<string[]>([]);
    const [picks, setPicks] = React.useState<string[]>([]);
    const [build, setBuild] = React.useState<string[]>([]);

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
        setBuild(builds.sort(() =>Math.random()-0.5).slice(0,5))
    }
    const displayBuild = (role:string) =>{
        if(role === "CRIT"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_crit} alt="Icon_CRIT" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "AP"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_AP} alt="Icon_AP" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "ATK SPD"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_attkspeed} alt="Icon_AttkSpeed" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "LETALIDAD"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_letal} alt="Icon_Letalidad" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "TANK"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_tank} alt="Icon_Tank" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "MOV.SPD"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_ms} alt="Icon_MovementSpeed" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "SUPPORT"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_support} alt="Icon_Support" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "QUEMADURA"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_burn} alt="Icon_Burn" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "OMNIVAMP/LIFESTEAL"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_vamp} alt="Icon_Omnivamp" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        if(role === "ABILTY HASTE"){
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_haste} alt="Icon_AbilityHaste" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
        else{
            return(
                <div className='gamemode-lane-container'>
                <img src={icon_AP} alt="Icon_AP" className='stat-icon' />
                <p className='lane'>
                    {RandomEffect(role)}
                </p>
            </div>
            )
        }
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
        <div className='gamemode-container'>
            <div className='gamemode-description-container'>

                <div className='gamemode-picker-container'>
                    {picks.length === 0 ? (
                        <>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Top} alt="Icon_Top" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    TOP:
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Jungle} alt="Icon_Top" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    JUNGLE:
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Mid} alt="Icon_Top" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    MID:
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Bot} alt="Icon_Bot" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    ADC:
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Support} alt="Icon_Support" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    SUPPORT:
                                </p>
                            </div>
                        </>
                    ):(
                        <>
                             <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Top} alt="Icon_Top" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    TOP:
                                </p>
                                <p className='lane'>
                                    {RandomEffect(picks[0])}
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Jungle} alt="Icon_Top" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    JUNGLE:
                                </p>
                                <p className='lane'>
                                    {RandomEffect(picks[1])}
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Mid} alt="Icon_Top" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    MID:
                                </p>
                                <p className='lane'>
                                    {RandomEffect(picks[2])}
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Bot} alt="Icon_Bot" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    ADC:
                                </p>
                                <p className='lane'>
                                    {RandomEffect(picks[3])}
                                </p>
                            </div>
                            <div className='gamemode-lane-container'>
                                <div className='lane-icon-container'>
                                    <img src={icon_Support} alt="Icon_Support" className='lane-icon'/>
                                </div>
                                <p className='lane'>
                                    SUPPORT:
                                </p>
                                <p className='lane'>
                                    {RandomEffect(picks[4])}
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <div className='gamemode-build-container'>
                    {picks.length === 0 ? (
                        <>
                        </>
                    ):(
                        <>
                        {displayBuild(build[0])}
                        {displayBuild(build[1])}
                        {displayBuild(build[2])}
                        {displayBuild(build[3])}
                        {displayBuild(build[4])}
                        </>
                    )}
                </div>
            </div>
            <div className='gamemode-btn-start'>
                <Button onClick={() =>{PickRandomRole()}}>Generate!</Button>
            </div>

        </div>
    )
}

export default Roulette;