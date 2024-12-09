import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Grid2";
import { motion } from "motion/react";
import CountUp from "react-countup";
import "./card-counter.scss"

interface ICardCounterProps {
    animOffset: number;
    setAnimOffset: React.Dispatch<React.SetStateAction<number>>;
    text: string;
    value: number;
    counterDuration: number;
}

function CardCounter({ animOffset, setAnimOffset, text, value, counterDuration }: ICardCounterProps) {
    const cardMotionInital = { opacity: 0, scale: 0 };
    const cardMotionAnimate = { opacity: 1, scale: 1 };

    let grid =
        <Grid2 size={3} className='stat'>
            <motion.div initial={cardMotionInital} animate={cardMotionAnimate} transition={{ delay: animOffset }}>
                <Card className="counter-card">
                    <h2>{text}:</h2>
                    <div className="count-up-container">
                        <CountUp end={value} duration={5} delay={animOffset} />
                    </div>

                </Card>
            </motion.div>
        </Grid2>

    setAnimOffset(animOffset++);

    return grid;
}

export default CardCounter;