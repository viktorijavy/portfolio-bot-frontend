import './HomePage.css'
import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'
import portfoliopuzzle from '../images/portfolio-puzzle-video.mp4'

const HomePage = () => {
    return (
        <>
            {/* <Navbar /> */}
             <div className='flex-container'>

                <div className='text-container'>
                    <h1 className='home-page-title'> Build your professional portfolio</h1>
                    <h2 className='home-page-title-small'>in just few minutes</h2>
                   
                    <Link to="/customizer"> <button className='main-btn'>Get started</button></Link>
                    
                </div>

                <div className="image">

                <video className="main-image-1" autoPlay="autoplay" loop="loop" muted>
                <source
                            src={portfoliopuzzle}
                            type="video/mp4"
                        />
                 </video>
                    
                </div>


            </div>

           
   
            
        </>
    )
}

export default HomePage;