import Image404 from '../assets/404.jpg';
import Header from '../components/Header';
import '../styles/ErrorHandler.css';

function ErroHandler() {
    return <main className='ErroHandler'>
        <Header />
        <div className="ImageContainer">
            <img src={Image404} alt="Página não encontrada." />
        </div>
    </main>
}

export default ErroHandler;