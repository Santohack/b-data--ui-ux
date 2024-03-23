import React from "react";

const ReplayForm = () => {
  return (
    <>
      <div className="comment-area-post box-shadow">
        <div className="comment-area-heading">
          <h3>Leave a Reply</h3>
        </div>
        <div className="leave-form">
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email here....."
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Messages here..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="submit-btn">
                  <input
                    type="submit"
                    className="btn btn-theme"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReplayForm;
