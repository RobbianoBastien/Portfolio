import './About.scss'
import profil from '../assets/images/PhotoProfil.webp'

function About(){
    return(
        <div className="about">
            <h1 className="about__title">A propos de moi </h1>
            <div className='about__content'>
            <img src={profil} alt="Photo de profil" className="about__content__img"/>
            <p className="about__content__txt">Bonjour, je m'appelle Bastien Robbiano. Je suis intégrateur web junior, curieux de tout ce qui touche au numérique et passionné par l’art de transformer des maquettes en expériences interactives.
                Basé en région parisienne, je fais mes premiers pas dans le monde du développement avec une envie constante d’apprendre, de créer et de donner vie aux idées.<br />
                 Ce portfolio est le reflet de mon parcours, de mes projets, et de ma volonté de construire un web plus beau, plus accessible, et plus performant.   </p>
            </div>
        </div>
    )
}

export default About;