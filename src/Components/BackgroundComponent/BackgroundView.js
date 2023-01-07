import './BackgroundView.css';
import backgroundImage from '../../assets/images/background-01.jpg';

function BackgroundView() {
    return (
        <div className='background-container'>
            <img src={backgroundImage} alt="Background" />
        </div>
    );
}

export { BackgroundView };