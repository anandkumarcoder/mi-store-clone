import React from 'react'
import "../styles/PreNavbar.css"

const PreNavbar = () => {
    return (
        <div className='preNav'>
            <div>
            <a href="https://www.mi.com/in/" >Xiaomi India</a> <span> | </span>
            <a href="https://in.event.mi.com/in/install-mi-store">Get Mi Store App</a> <span> | </span>
            <a href="https://www.mi.com/in/service/help/#category_id=1&amp;pagenum=1&amp;channel=1">Online Help</a><span> | </span>
            <a href="https://www.mi.com/in/service/authorized_stores/">Retail Store  </a>
            </div>
            <div>
            <a href="https://store.mi.com/in/site/login" >Sign in</a><span> | </span>
            <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&amp;sid=i18n_in_pc_pro&amp;_locale=en_IN">Sign up</a> <span> | </span>
            <a href="https://store.mi.com/in/site/login" >CART (0)</a>

            </div>
            
        </div>
    )
}

export default PreNavbar
