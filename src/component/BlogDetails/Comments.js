import React from 'react'
import {Link} from 'react-router-dom';


const Comments = (props) => {
    return (
        <>
            <li className="media">
                <div className="media-img">
                    <img alt="" src={props.data.img} />
                </div>
                <div className="media-body">
                    <div className="media-header">
                        <div className="media-name">
                            <h4>{props.data.name}</h4>
                            <p>{props.data.time}</p>
                        </div>
                        <div className="post-share"><Link to="/#" className="replay">{props.data.replay}</Link>
                            <Link to="/#" className="">{props.data.report}</Link>
                        </div>
                    </div>
                    <div className="media-paragraph">
                        <p>{props.data.para}</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Comments
