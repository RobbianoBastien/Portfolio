import './About.scss'
import profil from '../assets/images/PhotoProfil.webp'

function About(){
    return(
        <div className="about">
            <h1 className="about__title">A propos de moi </h1>
            <div className='about__content'>
            <img src={profil} alt="Photo de profil" className="about__content__img"/>
            <p className="about__content__txt">Bonjour, je m'appelle Bastien Robbiano. Je suis intégrateur web et je débute ma carrière dans le monde de la programmation. J'habite actuellement en région parisienne.</p>
            </div>
        </div>
    )
}

export default About;