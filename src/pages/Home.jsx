import './Home.scss'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact';

function Home(){
    return(
        <div className="home">
            <About />
            <div className='fadein1'>
                <Skills />
            </div>
            <div className='fadein2'>
                <Projects />
            </div>
            <div className='fadein3'>
                <Contact />
            </div>
            
        </div>
    )
}

export default Home;