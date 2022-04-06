import './HomePage.css'
import Navbar from '../components/Navbar'
import pic from '../programmer-1.png'
import pic2 from '../programmer-2.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <Navbar />
             <div className='flex-container'>

                <div className='text-container'>
                    <h1 className='home-page-title'> Build your professional portfolio</h1>
                    <h2 className='home-page-title-small'>in just few minutes</h2>
                    <button className='main-btn'>Learn more</button>
                    
                </div>

                <div className="image">
                    <img className="main-image-1" src={pic} alt='pic' />
                </div>
            </div>

            <div className="flex-container">

                <div className="image">
                    <img className="main-image-1" src={pic2} alt='pic' />
                </div>
            
                <div className='text-container-2'>
                    <h1 className='home-page-title-2'>Another Title Hereeeeee</h1>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, odio?  
                    accusamuio! tur adipisicing elit. Possimus, odio?  accusamuio</p>
                   <Link to="/customizer"> <button className='second-btn'>Get started</button></Link>
                  
                </div>

            </div> 
   
            
        </>
    )
}

export default HomePage