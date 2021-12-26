import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"


const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" /></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg>



const facebookIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z"/></svg>
const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-35.20005 -41.33325 305.0671 247.9995"><path d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85" /><path d="M93.333 117.558l61.334-34.89-61.334-34.893z" fill="#fff"/></svg>
const instagramIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"/></svg>
const twitterIcon = <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="16px" height="16px"><path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875"/></svg>
const Footer = ({footer}) => {
    return (
        <>
        <div className='preFooter'>
            <div>
                {repeatIcon}
                <p><b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
            </div>

            <div>
                {shieldIcon}
                <p><b>100% secure payments</b> <br/>We support cards, Wallets, COD</p>
            </div>

            <div>
                {mapIcon}
                <p><b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p>
            </div>

            </div>

            <div className='preFooter2'>
                <div>
                    <p>Lets stay in touch</p>
                    <span>Get updates on sales special and more</span>
                </div>

                <div>
                    <div>
                        <input type="email" name="email" placeholder='enter your email address' />
                        <button>></button>
                        </div>
                        <span>Thanks you are on the email list</span>
                    
                </div>

                <div>
                    <p>Follow MI</p>
                    <span>We want to hear from you</span>
                </div>

                <div>
                    {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon} 
                </div>

            </div>

            <div className='footer'>
                <div>
                    <p>SUPPORT</p>
                    {footer.support.map((item,index)=> (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>SHOP & LEARN</p>
                    {footer.shopAndLearn.map((item,index)=> (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=> (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>ABOUT US</p>
                    {footer.aboutUS.map((item,index)=> (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>

                <div>
                    <p>CONTACT US</p>
                    {footer.contactUs.map((item,index)=> (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>

            </div>

            


            <div className='footerBorder'>
                <div>
                    Copyright © 2010-2021 Xiaomi. All rights reserved
                    
                </div>

            </div>
           </>
        
    )
}


export default Footer
