import React from 'react'
// import About Img
import img1 from '../../assets/img/about-page.png'
// import Icon
import {FiCheck} from 'react-icons/fi';

const History = () => {
    return (
        <>
            {/* About Top Area Start */}
            <section id="about-top" className="py100 bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-img">
                                <h2>History begins in 2010 with the foundation</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                    rerum nam tenetur illum voluptatem vel non expedita, eligendi
                                    dolorum culpa laborum nemo dicta inventore assumenda cumque
                                    incidunt ullam quis velit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Doloremque rem corporis veritatis itaque voluptas sint animi
                                    obcaecati maiores.
                                </p>
                                <ul>
                                    <li><i><FiCheck/></i>Licensed OCR tool</li>
                                    <li>
                                        <i><FiCheck/></i>Hadoop and other Big data
                                        platforms
                                    </li>
                                    <li><i><FiCheck/></i>Luigi workflow manager</li>
                                    <li>
                                        <i><FiCheck/></i>Distributed setup on Cloud for speed
                                    </li>
                                    <li><i><FiCheck/></i>Django framework</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-top-img animation-img-two">
                                <img alt="" src={img1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Top Area Start */}
        </>
    )
}

export default History
