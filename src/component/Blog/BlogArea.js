import React from "react";

const BlogArea = props => {
    return (
        <section id="blog-main-area" className="py100">
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    )
}