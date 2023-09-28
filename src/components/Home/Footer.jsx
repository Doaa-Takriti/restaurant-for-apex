import React from 'react'
import data from "../../Data.json"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container '>
            <div className='row'>
            <div className='col-md-4'>
<div className='img-logo'>
    <img src="../img/Group1.png" alt="" />
    <span>Apex Software Solutions.</span>
</div>
<p>New Generation Order Solutions!
</p>
<ul className='ul-left'>
    <li>
        <img src="../img/Email.png" alt="" />
        <span>apex@mail.com</span>
    </li>
    <li>
    <img src="../img/Phone.png" alt="" />
        <span>07504444444</span>    </li>
</ul>
            </div>
            {data.footerlink.map((item) => (
                    <div className="col-md-2" key={item.id}>
                    <p>{item.title}</p>
                    <ul>
                        <li>{item.link1}</li>
                        <li>{item.link2}</li>
                        <li>{item.link3}</li>
                        <li>{item.link4}</li>
                        <li>{item.link5}</li>
    
                    </ul>
                </div>

            ))}
        
           
            </div>
        </div>
        <p className='p-footer'>Designed And Developed with love © Apex Software Solutions 2023. All right reserved</p>

      
    </div>
  )
}

export default Footer
