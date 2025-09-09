import './Skills.scss'
import data from '../assets/data/skills.json'
function Skills(){
    return(
        <div className="skills">
            <h1 className="skills__title">Compétences</h1>
            <div className="skills__content ">
            {data.map((item) => (
                <div key={item.id} className="skills__content__logo">
                    <img src={item.image} alt={item.title} className="skills__content__logo__img"/>
                    <h2 className="skills__content__logo__title">{item.title}</h2>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;