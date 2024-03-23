import React from 'react'
import { ImQuotesRight } from 'react-icons/im';

const ClientsCard = (props) => {
    return (
        <>
              <div className="test5-wrappers">
                    <div className="home5-test-items">
                        <div className="test-item-tops">
                            <div className="tops-box-icon">
                                <i><ImQuotesRight/></i>
                            </div>
                            <p>{props.para}</p>
                        </div>
                        <div className="test-item-bottoms">
                            <div className="test5-img">
                                <img src={props.img} alt="img" />
                            </div>
                            <div className="test5-author-info">
                                <h3>{props.name}</h3>
                                <p>{props.des}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ClientsCard
