import React from 'react'
import {Link} from 'react-router-dom'
import {BsSearch} from "react-icons/bs"
// Import Sidebar Img
import side1 from '../../assets/img/blog/recent-post/1.png'
import side2 from '../../assets/img/blog/recent-post/2.png'
import side3 from '../../assets/img/blog/recent-post/3.png'


const RecentPost = [
    {
        img: (side1),
        title: "We offer professional Consultant services.",
        date: " 26 Jan / 2018"
    },
    {
        img: (side2),
        title: "Montril is an firm and general group.",
        date: " 26 Jan / 2018"
    },
    {
        img: (side1),
        title: "Business man always think positive.",
        date: " 26 Jan / 2018"
    },
    {
        img: (side3),
        title: "Man can change business policy all time.",
        date: " 26 Jan / 2018"
    }
]

const Category = [
    {
        list: "Business",
        link: "/#",
        count: "23"
    },
    {
        list: "Agency",
        link: "/#",
        count: "25"
    },
    {
        list: "Media",
        link: "/#",
        count: "28"
    },
    {
        list: "Social",
        link: "/#",
        count: "45"
    },
    {
        list: "Photoshop",
        link: "/#",
        count: "53"
    },
    {
        list: "Seo",
        link: "/#",
        count: "82"
    },
    {
        list: "Development",
        link: "/#",
        count: "53"
    },
    {
        list: "Design",
        link: "/#",
        count: "45"
    }
]

const PopularTags = [
    {
        list: "Business",
        link: "/#"
    },
    {
        list: "Agency",
        link: "/#"
    },
    {
        list: "Media",
        link: "/#"
    },
    {
        list: "Social",
        link: "/#"
    },
    {
        list: "Photoshop",
        link: "/#"
    },
    {
        list: "Seo",
        link: "/#"
    },
    {
        list: "Development",
        link: "/#"
    },
    {
        list: "Design",
        link: "/#"
    },
    {
        list: "Search",
        link: "/#"
    }
]


const Sidebar = () => {
    return (
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            {/* Sidebar Area Start */}
            <div className="left-head-blog right-side">
                <div className="left-blog-page box-shadow">
                    <form action="#">
                        <div className="blog-search-option">
                            <input type="text" placeholder="Search..."/>
                            <button className="button" type="submit"><i><BsSearch/></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="left-blog-page box-shadow">
                    <div className="left-blog">
                        <h4>categories</h4>
                        <ul>
                            {Category.map((data, index) => (
                                <li key={index}><Link to="/#">{data.list}</Link><span>{data.count}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="left-blog-page box-shadow">
                    <div className="left-blog">
                        <h4>recent post</h4>
                        <div className="recent-post">
                            {RecentPost.map((data, index) => (
                                <div className="recent-single-post" key={index}>
                                    <div className="post-img">
                                        <Link to="/#">
                                            <img alt="" src={data.img} />
                                        </Link>
                                    </div>
                                    <div className="pst-content">
                                        <p><Link to="/#">{data.title}</Link>
                                        </p>
                                        <span className="date-type">{data.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="left-blog-page box-shadow">
                    <div className="left-tags blog-tags">
                        <div className="popular-tag left-side-tags left-blog">
                            <h4>popular tags</h4>
                            <ul>
                                {PopularTags.map((data, index) => (
                                    <li key={index}><Link to={data.link}>{data.list}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar Area Start */}
        </div>
    )
}

export default Sidebar
