import React from "react";
export function Sidebar({}) {
  return <div className="col col-md-3">
              <div>
                <h3 className="font-weight-bold">Recipes 👨‍🍳</h3>
              </div>
              <div role="tablist" id="accordion-1">
                <div className="card themecard">
                  <div className="card-header MenuH" role="tab">
                    <h5 className="d-xl-flex align-items-xl-end mb-0"><a data-toggle="collapse" aria-expanded="true" aria-controls="accordion-1 .item-1" href="div#accordion-1 .item-1" className="anchor fs-20">Filter by :</a><span className="float-right d-xl-flex justify-content-xl-center smcf">clear filter</span></h5>
                  </div>
                  <div className="collapse show item-1 p-0 m-0 sf" role="tabpanel" data-parent="#accordion-1">
                    <div className="card-body p-0 m-0">
                      <div className="mt-2 mb-2"><span>Contest winner</span><span><i className="fas fa-check-square float-right d-none" /></span></div>
                      <div className="mt-2 mb-2"><span>featured</span><span><i className="fas fa-check-square float-right d-none" /></span></div>
                      <div className="mt-2 mb-2"><span>Test kitchen approve</span><span><i className="fas fa-check-square float-right" /></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>;
}
  