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
          { linkTitle: "Home", link: "/" },
          { linkTitle: "Faqs", link: "/faqs" },
          { linkTitle: "Shop", link: "/shop" },
          { linkTitle: "News", link: "/blog" },
        ],
    },
    {
        title:"Services",
        links: [
          { linkTitle: "About", link: "/about" },
          { linkTitle: "Service", link: "/services" },
          { linkTitle: "Contact Us", link: "/contact" },
          { linkTitle: "Projects", link: "/projects" },
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
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
                                           <li key={key}><Link to={flinks.link}>{flinks.linkTitle}</Link></li>
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
                                   <i><ImLocation/></i> 1101, Your street adress, New york, State, Country.
                               </li>
                               <li>
                                   <i><FiPhoneOutgoing/></i><Link to="/">+012 -3 456 789</Link>
                               </li>
                               <li>
                                   <i><SiMinutemailer/></i><Link to="/">Info@gmail.com</Link>
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
