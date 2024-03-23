import React from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';

// All Page Component
import Home from '../src/page/Home'
import HomeTwo from '../src/page/HomeTwo'
import HomeThree from '../src/page/HomeThree'
import HomeFour from '../src/page//HomeFour'
import HomeFive from '../src/page//HomeFive'
import Services from '../src/page/Services'
import About from '../src/page/About'
import ServiceDetails from '../src/page/ServiceDetails'
import Projects from '../src/page/Projects'
import ProjectDetails from '../src/page/ProjectDetails'
import Blog from '../src/page/Blog'
import BlogDetails from '../src/page/BlogDetails'
import Shop from '../src/page/Shop'
import ProductDetails from '../src/page/ProductDetails'
import Cart from '../src/page/Cart'
import CheckOut from '../src/page/CheckOut'
import Login from '../src/page/Login'
import Register from '../src/page/Register'
import ResetPassword from '../src/page/ResetPassword'
import Contact from '../src/page/Contact'
import Faqs from '../src/page/Faqs'
import Error from '../src/page/Error'

// Scroll Top 
import ScrollToTop from "./helpers/ScrollToTop";

// Layout Component
import Header from '../src/layout/Header'
import Footer from '../src/layout/Footer'
import Cta from '../src/layout/Cta'
import CopyRight from '../src/layout/CopyRight'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Router>
                    <ScrollToTop>
                        <Header/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/home_two' exact component={HomeTwo}/>
                            <Route path='/home_three' exact component={HomeThree}/>
                            <Route path='/home_four' exact component={HomeFour}/>
                            <Route path='/home_five' exact component={HomeFive}/>
                            <Route path='/services' exact component={Services}/>
                            <Route path='/service_details' exact component={ServiceDetails}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/projects' exact component={Projects}/>
                            <Route path='/project_details' exact component={ProjectDetails}/>
                            <Route path='/blog' exact component={Blog}/>
                            <Route path='/blog_details' exact component={BlogDetails}/>
                            <Route path='/shop' exact component={Shop}/>
                            <Route path='/product_details' exact component={ProductDetails}/>
                            <Route path='/cart' exact component={Cart}/>
                            <Route path='/checkout' exact component={CheckOut}/>
                            <Route path='/login' exact component={Login}/>
                            <Route path='/register' exact component={Register}/>
                            <Route path='/reset_password' exact component={ResetPassword}/>
                            <Route path='/contact' exact component={Contact}/>
                            <Route path='/faqs' exact component={Faqs}/>
                            <Route exact component={Error}/>
                        </Switch>
                        <Cta/>
                        <Footer/>
                        <CopyRight/>
                    </ScrollToTop>
                </Router>
            </BrowserRouter>
        </>
    );
}

export default App;
