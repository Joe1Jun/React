import profilePic from './assets/guitar.jpg'

function Card() {
    
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="Joe" />
            <h2 className='card-title'>Joe Junker</h2>
            <p className='card-text'>I play music and like fishing</p>

        </div>
    );



}

export default Card