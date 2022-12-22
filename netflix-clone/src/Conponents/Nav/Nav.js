import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [show, setShow] = useState(false)
    const history = useHistory()

    const animateNav = () => {
        if(window.scrollY > 100){
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',animateNav)

        return () => window.removeEventListener('scroll',animateNav)
    },[])

    return (
        <div className={`nav ${show && "nav_animate"}`}>
            <img 
                className='logo'
                src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'

                alt='Logo'

                onClick={() => history.push('/')}
            />

            <img 
                className='profile_image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRaZHMq96U_lrLbWhprtoemzvl1a-liKzfj0Tqg6upNdAc9G2Nr3NlbncE2F2Dr_J5pv8&usqp=CAU'

                alt='profile'

                onClick={() => history.push('/ProfileScreen')}
            />
        </div>
    )
}

export default Nav
