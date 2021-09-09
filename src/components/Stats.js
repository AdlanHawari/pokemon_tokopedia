import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Label, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts'

const StyledRC = styled(RadarChart)`
font-family:'Arial';
font-size: small;
font-weight: bold;
color: greenyellow;
text-shadow: 2px 2px 4px green;
text-transform: uppercase;
`

export default function Stats({pokemonStats}) {
    const [stats, setStats] = useState(
        pokemonStats.stat.map(stat=>(stat.stat))
        )


  

    function stat_name(obj){
        switch (obj) {
            case 'attack':
                return 'atk'
            case 'defense':
                return 'spatk'
            case 'special-attack':
                return 'spatk'
            case 'special-defense':
                return 'spdef'
            case 'speed':
                return 'spd'
            default:
                return obj

        }}

    const statsUpdate = pokemonStats.map(stat =>({
        // subject: stat.stat.name,
        subject: stat_name(stat.stat.name),
        baseStat: stat.base_stat,
        // effort: stat.effort
        }))

    
    
    useEffect(() => {
        // setStats(statsUpdate)
        // console.log('statsupdate:',statsUpdate);
        console.log('stats:',stats);
    })

    // useEffect(() => {
    //     console.log("stats neh:",stats)
        
    //     // console.log("typeshorten:",stat_name)

    // }, [stats])
    
    return (
        <div>
            <ResponsiveContainer width="80%" height={150}>
            
            <StyledRC
                // cx={300}
                // cy={250}
                
                // outerRadius={80}
                // width={300}
                // height={300}
                // data={stats}
                data={statsUpdate}
                >
                <PolarGrid/>
                {/* <Tooltip wrapperStyle={{zIndex: -4}}/> */}
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
                    strokeWidth={2}
                    a
                    fill="#8884d8"
                    fillOpacity={0.6}
                    
                    // label={{
                    //     position: 'inside'
                    // }}
                />
            </StyledRC>
            </ResponsiveContainer>
            
        </div>
    )
}
