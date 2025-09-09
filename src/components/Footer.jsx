import './Footer.scss'
import github from '../assets/images/github.webp'
import linkedin from '../assets/images/linkedin.webp'

function Footer(){
    return(
    <div className="footer">
        <a 
            href="https://github.com/RobbianoBastien" 
            target="_blank" 
            aria-label="Visitez mon profil GitHub"
        >
            <img src={github} alt="logo github" className="footer__img"/>
        </a>
        <a 
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" 
            target="_blank" 
            aria-label="Visitez mon profil LinkedIn"
        >
            <img src={linkedin} alt="logo linkedin" className="footer__img"/>
        </a>
    </div>
    )
}

export default Footer