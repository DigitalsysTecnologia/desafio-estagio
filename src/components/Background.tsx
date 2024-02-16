import '../styles/Background.css';
import BackgroundImage from '../assets/background.png';

function Background() {
    return <div className='Background'>
        <img src={BackgroundImage} alt='Background' draggable={false} />
    </div>
}

export default Background;