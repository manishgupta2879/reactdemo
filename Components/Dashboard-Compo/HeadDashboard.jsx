import React from "react";

const headdashboard = () => {
  return (
    <>
      <div className="p-3 mt-4 dashheadcolor">
        <section className="blogs">
          <div className="container">
            <div className="row gy-4">
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <div className="icon-block bg-icon-pink d-flex justify-content-between p-2">
                  <div className="icon">
                    <img
                      src="images/icons/icon/icon-2.png"
                      alt=""
                      className="img-fluid"
                    />
                    {/* public\\icons\icon\icon-1.png */}
                  </div>
                  <div className="text text-end">
                    <span>22</span>
                    <h4>Unassiend Task</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <div className="icon-block bg-icon-blue d-flex justify-content-between p-2">
                  <div className="icon">
                    <img
                      src="images/icons/icon/icon-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text text-end">
                    <span>11</span>
                    <h4>Completed Work</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <div className="icon-block bg-icon-gray d-flex justify-content-between p-2">
                  <div className="icon">
                    <img
                      src="images/icons/icon/icon-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text text-end">
                    <span>44</span>
                    <h4>WIP</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <div className="icon-block bg-icon-red d-flex justify-content-between p-2">
                  <div className="icon">
                    <img
                      src="images/icons/icon/icon-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text text-end">
                    <span>12</span>
                    <h4>On Hold</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <div className="icon-block bg-icon-blue-light d-flex justify-content-between p-2">
                  <div className="icon">
                    <img
                      src="images/icons/icon/icon-5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text text-end">
                    <span>21</span>
                    <h4>vendor</h4>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
                <div className="icon-block bg-icon-purple d-flex justify-content-between p-2">
                  <div className="icon">
                    <img
                      src="images/icons/icon/icon-6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="text text-end">
                    <span>21</span>
                    <h4> Employee</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default headdashboard;
