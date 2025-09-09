import './Header.scss'


function Header() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="header">
            <div className="header__name">
                <h1>Robbiano Bastien</h1>
            </div>
            <div className="header__nav">
                <ul className="header__nav__list">
                    <li onClick={() => scrollToSection('projects')}>Projets</li>
                    <li  onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>
        </div>    
        )
     }

     export default Header;