import React ,{useState,useEffect}from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"

const NavOption = ({miPhones}) => {

     const [miPhonesToggle, setMiPhonesToggle] = useState(false) ;

     useEffect(() => {
         if(window.location.pathname === "/miPhones")
         return setMiPhonesToggle(true)
        
     }, [])

     
    return (
        <div className='navOptions'>
            { miPhonesToggle? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )): null}
            
        </div>
    )
}

export default NavOption
