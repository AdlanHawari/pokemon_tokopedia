import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { Label, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'

const StyledRC = styled(RadarChart)`
/* font-family:'Arial'; */
font-size: small;
font-weight: bold;
color: 0D2538;
text-shadow: 2px 2px 4px #03C9EE;
text-transform: uppercase;
z-index: -1;
/* background-color: gold; */
`

export default function Stats({pokemonStats}) {
    // const [stats, setStats] = useState(
    //     pokemonStats.stat.map(stat=>(stat.stat))
    //     )
    const [stats, setStats] = useState()


  

    function stat_name(obj){
        if(obj==='speed'){
            return 'spd'
        }else if(obj==='attack'){
            return 'atk'
        }else if(obj==='defense'){
            return 'def'
        }else if(obj==='special-attack'){
            return 'spAtk'
        }else if(obj==='special-defense'){
            return 'spDef'
        }else{
            return obj
        }
        // switch (obj) {
        //     case 'attack':
        //         return 'atk'
        //     case 'defense':
        //         return 'spatk'
        //     case 'special-attack':
        //         return 'spatk'
        //     case 'special-defense':
        //         return 'spdef'
        //     case 'speed':
        //         return 'spd'
        //     default:
        //         return obj

        // }
    }

    let statsUpdate = pokemonStats.map(stat =>({
        
        // subject: stat.stat.name,
        baseStat: stat.base_stat,
        subject: stat_name(stat.stat.name),
        
        // effort: stat.effort
        }))
    
    // setStats(
    //     pokemonStats.map(stat =>({
        
    //         subject: stat.stat.name,
    //         // subject: stat_name(stat.stat.name),
    //         baseStat: stat.base_stat,
    //         // effort: stat.effort
    //         }))
    // )
    
    
    useEffect(() => {
        // setStats(statsUpdate)
        // console.log('statsupdate:',statsUpdate);
        // console.log('stats:',stats);
        setStats(statsUpdate)
    },[pokemonStats])

    useEffect(() => {
        // console.log("stats neh:",stats)
        
        // console.log("typeshorten:",stat_name)

    }, [stats])
    
    return (
        <div>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            {stats &&

                <ResponsiveContainer width="100%" height={200}>
                 {/* <ResponsiveContainer width="100%" height='100%'> */}
                            
                    <StyledRC
                        // cx={300}
                        // cy={250}
                        
                        // outerRadius={80}
                        // width={300}
                        // height={300}
                        // data={stats}
                        data={statsUpdate}
                        // data={sta}
                        >
                        <PolarGrid/>

                        <PolarAngleAxis dataKey="subject"/>
                            {/* <Label position='inside'/> */}
                        
                        <PolarRadiusAxis 
                        domain={[0, 180]}
                        // axisLine={false}
                        axisLine={{}}
                        // angle={55}
                        tick={false}
                        tickCount={2}
                        />
                        <Radar
                            name="Base Stats"
                            dataKey="baseStat"
                            stroke="#8884d8"
                            // stroke="#DCF3C4"
                            
                            strokeWidth={2}
                            
                            fill="#8884d8"
                            // fill= '#B4EF93'
                            fillOpacity={0.8}
                            
                            // label={{
                            //     position: 'inside'
                            // }}
                        />
                    </StyledRC>
                </ResponsiveContainer>

            }
                        
                        {/* </Suspense> */}
        </div>
    )
}
