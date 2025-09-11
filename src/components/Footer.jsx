import './Footer.scss'
import github from '../assets/images/github.webp'
import linkedin from '../assets/images/linkedin.webp'

function Footer(){
    return(
    <div className="footer">
        <p className='footer__texte'>Robbiano Bastien</p>
        <p className='footer__texte'>bastien.robbiano@live.fr</p>
        <a 
            href="https://github.com/RobbianoBastien" 
            target="_blank" 
            aria-label="Visitez mon profil GitHub"
        >
            <img src={github} alt="logo github" className="footer__img"/>
        </a>
        <a 
            href="www.linkedin.com/in/bastien-robbiano" 
            target="_blank" 
            aria-label="Visitez mon profil LinkedIn"
        >
            <img src={linkedin} alt="logo linkedin" className="footer__img"/>
        </a>
    </div>
    )
}

export default Footer