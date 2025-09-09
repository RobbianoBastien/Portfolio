import data from '../../assets/data/data.json'
import './Cards.scss'

function Cards(){
    const handleButtonClick = (action, url) => {
  if (action === "external" && url) {
    window.open(url, "_blank");
  }
};
    return(
        <div className="cards">
            {data.map((item) => (
                <div key={item.id} className="cards__card">
                    <h2 className="cards__card__title">{item.title}</h2>
                    <img src={item.image} alt={item.title} className="cards__card__img"/>
                    <p className="cards__card__description">{item.description}</p>
                    {item.points && item.points.length > 0 && (
                  <ul className="cards__card__points">
                    {item.points.map((point, index) => (
                      <li key={index}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )} 
                {item.buttons && item.buttons.length > 0 && (
                  <div className="cards__card__buttons">
                    {item.buttons.map((button, index) => (
                      <button 
                        key={index}
                        onClick={() => handleButtonClick(button.action, button.url)}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                )}
                </div>
                
            ))}
        </div>
    )


}


export default Cards;