import './BackgroundComponent.css';
import backgroundImage from '../../assets/images/background-01.jpg';

function BackgroundComponent() {
    return (
        <div className='background-container'>
            <img src={backgroundImage} alt="Background" />
        </div>
    );
}

export { BackgroundComponent };