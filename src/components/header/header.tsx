import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import './header.scss'

function Header() {


    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography className="title" variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    Danny Savage
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header
