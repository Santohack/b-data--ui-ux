import React from 'react'


const BlogDetailsArea = props => {
    return (
        <>
            {/* Blog Details Area Start */}
            <section id="blog-details-main-area" className="py100">
                <div className="container">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </section>
            {/* Blog Details Area End */}
        </>
    )
}

export default BlogDetailsArea
