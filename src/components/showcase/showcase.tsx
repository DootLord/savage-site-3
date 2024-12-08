import { AppBar, Box, Grid2, Toolbar, Typography } from '@mui/material'
import './showcase.scss'

interface ShowcaseProps {
    url: string;
}

function Showcase({ url }: ShowcaseProps) {


    return (
        <div className='iframe-container'>
            <iframe id="showreel"
                src={url} title="Danny Savage Effect Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>


    )

}

export default Showcase
