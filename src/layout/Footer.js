import React from 'react'
import shap from '../assets/img/svg/footer.svg'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { ImLocation } from 'react-icons/im';
import { FiPhoneOutgoing } from 'react-icons/fi';
import { SiMinutemailer } from 'react-icons/si';
 
const FooterItems=[
    {
        title:"Useful Links",
        links: [
          { linkTitle: "Home",  },
          { linkTitle: "Faqs",  },
        //   { linkTitle: "Shop", link: "/#11" },
          { linkTitle: "News", link: "/#" },
        ],
    },
    {
        title:"Services",
        links: [
          { linkTitle: "About", link: "/" },
          { linkTitle: "Service", link: "/" },
          { linkTitle: "Contact Us", link: "/" },
          { linkTitle: "Projects", link: "/" },
        ],
    }
]

const Footer=()=> {
 return (
  <>
    <footer id="footer" className="py100">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-about-area">
                        <Link to="/"><img alt="" src={logo}  /></Link>
                        <p className="pt30">
                        Ethics play a fundamental role in guiding the practices of our UX design company, ensuring integrity and accountability in all aspects of our work. We adhere to principles of transparency, respect for user privacy, and inclusivity, prioritizing the ethical treatment of user data and fostering trust with our clients and their audiences

                        </p>
                       
                    </div>
                </div>
                {FooterItems.map((item, key)=>(
                     <div className="col-lg-2 col-md-6 col-sm-6 col-6" key={key}>
                           <div className="footer-list-widget pl20 single-item-mt-3 responsive-mt-60">
                               <div className="footer-heading">
                                   <h5>{item.title}</h5>
                               </div>
                               <div className="footer-list pt40">
                                   <ul>
                                       {item.links.map((flinks, key)=>(
                                           <li key={key}><p >{flinks.linkTitle}</p></li>
                                       ))}
                                   </ul>
                               </div>
                           </div>
                        </div>
                ))}
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="footer-list-widget pl20 responsive-mt-60">
                        <div className="footer-heading">
                            <h5>Contact Info</h5>
                        </div>
                        <div className="footer-contact-area footer-list pt40">
                           <ul>
                               <li>
                                   <i><ImLocation/></i> Raycast Systems
First Floor , Thapasya Building 
Infopark, kakkand
Cochin- Kerala
India 

                               </li>
                               <li>
                                   <i><FiPhoneOutgoing/></i><Link to="/">+91 9074659932</Link>
                               </li>
                               <li>
                                   <i><SiMinutemailer/></i><Link to="/">info@raycasts.com</Link>
                               </li>
                           </ul>
                       </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom-img">
            <img alt="" src={shap}  />
        </div>
    </footer>
  </>
 )
}

export default Footer
