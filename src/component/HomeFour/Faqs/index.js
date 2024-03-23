import React from 'react'
import img from '../../../assets/img/home-two-faq/faq.png'

const Faqs = () => {
    return (
        <>
            <section id="faqs-two" className="py100">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12 col-12">
					<div className="faqs-wrapper">
						<div className="faqs-title">
							<h2>Frequently Asked Questions</h2>
						</div>
						<div className="faqs-items">
							<div className="accordion-wrapper">
								<div id="accordion">
									<div className="card">
					 					<div className="card-header box-shadow" id="headingone">
											<h5 className="mb-0">
												<a className="collapsed " href="#!" role="button" data-toggle="collapse"
													data-target="#collapseone" aria-expanded="false"
													aria-controls="collapseone">What is the best features and services
													of Big
													Data?</a>
											</h5>
										</div>
										<div id="collapseone" className="collapse show" aria-labelledby="headingone"
											data-parent="#accordion">
											<div className="card-body active show">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
													omnis quaerat nostrum, pariatur ipsam sunt accusams enim
													necessitatibus est fugiat, assumenda dolorem, deleniti corrupti
													cupiditate ipsum, dolorum voluptatum esse error?</p>
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header box-shadow" id="headingtwo">
											<h5 className="mb-0">
												<a className="collapsed" href="#!" role="button" data-toggle="collapse"
													data-target="#collapsetwo" aria-expanded="false"
													aria-controls="collapsetwo">What is the benefit of Data Science?</a>
											</h5>
										</div>
										<div id="collapsetwo" className="collapse" aria-labelledby="headingtwo"
											data-parent="#accordion">
											<div className="card-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
													omnis quaerat nostrum, pariatur ipsam sunt accusams enim
													necessitatibus est fugiat, assumenda dolorem, deleniti corrupti
													cupiditate ipsum, dolorum voluptatum esse error?</p>
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header box-shadow" id="headingthree">
											<h5 className="mb-0">
												<a className="collapsed" href="#!" role="button" data-toggle="collapse"
													data-target="#collapsethree" aria-expanded="false"
													aria-controls="collapsethree">Can i have multiple activities in
													single
													feature?</a>
											</h5>
										</div>
										<div id="collapsethree" className="collapse" aria-labelledby="headingthree"
											data-parent="#accordion">
											<div className="card-body">
												<p>If you are using Ubuntu 18.04, instead of installing each component
													separately, use Tasksel to install a LAMP stack on your Linode. When
													Tasksel completes, skip the installation steps in each section below
													and continue.</p>
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header box-shadow" id="headingfour">
											<h5 className="mb-0">
												<a className="collapsed" href="#!" role="button" data-toggle="collapse"
													data-target="#collapsefour" aria-expanded="false"
													aria-controls="collapsefour">What is the benefit of Data
													Analytics?</a>
											</h5>
										</div>
										<div id="collapsefour" className="collapse" aria-labelledby="headingfour"
											data-parent="#accordion">
											<div className="card-body">
												<p>If you are using Ubuntu 18.04, instead of installing each component
													separately, use Tasksel to install a LAMP stack on your Linode. When
													Tasksel completes, skip the installation steps in each section below
													and continue.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12">
					<div className="faq-right-side animation-img-two">
						<img src={img} alt="faq" />
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}

export default Faqs
   