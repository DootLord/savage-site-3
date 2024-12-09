import Grid2 from '@mui/material/Grid2'
import './stats.scss'
import CountUp from 'react-countup'
import Card from '@mui/material/Card'
import { motion } from 'motion/react'
import CardCounter from '../card-counter/card-counter'
import { useState } from 'react'

function Stats() {
    let [animOffset, setAnimOffset] = useState(0);

    return (
        <Grid2 className='stats-container'>
            <h3>Numbers Don't Lie</h3>
            <Grid2 size={12} className='stats-grid' spacing={2} container>
                <CardCounter counterDuration={5} animOffset={animOffset} setAnimOffset={setAnimOffset} text={"Projects Completed"} value={127} />
                <CardCounter counterDuration={6} animOffset={animOffset} setAnimOffset={setAnimOffset} text={"Happy Clients"} value={25} />
                <CardCounter counterDuration={7} animOffset={animOffset} setAnimOffset={setAnimOffset} text={"Satisfaction Rate"} value={100} />
                <CardCounter counterDuration={10} animOffset={animOffset} setAnimOffset={setAnimOffset} text={"Views Generated"} value={5000000} />
            </Grid2>
        </Grid2>
    )

}

export default Stats
