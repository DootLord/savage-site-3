import './App.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import Grid2 from '@mui/material/Grid2';
import Header from './components/header/header';
import Showcase from './components/showcase/showcase';

function App() {
  const showcaseURL = "https://www.youtube.com/embed/zjRJw034Nqs?controls=0";

  return (
    <Grid2 container spacing={2} className="container" component="div">
      <Grid2 size={12}>
        <Header />
      </Grid2>

      <Grid2 size={12}>
        <Showcase url={showcaseURL} />
      </Grid2>

    </Grid2>
  )

}

export default App
