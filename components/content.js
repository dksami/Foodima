import { Card } from './sub/card';
import React from 'react';
export function Content({}) {
	return (
		<div className="col-md-9">
			<div className="container">
				<div className="row">
					<div className="col col-md-8">
						<input className="form-control-lg float-right inp" type="text" placeholder="🔎 Search" />
					</div>
					<div className="col d-xl-flex justify-content-xl-end align-items-xl-center col-md-4">
						<div className="dropdown">
							<button
								className="btn btn-primary dropdown-toggle float-right invertedBtn"
								data-toggle="dropdown"
								aria-expanded="false"
								type="button"
							>
								sort by &nbsp;<span
									style={{
										fontWeight: 'bold'
									}}
								>
									Nearest
								</span>&nbsp;
							</button>
							<div className="dropdown-menu" role="menu">
								<a className="dropdown-item" role="presentation" href="#">
									First Item
								</a>
								<a className="dropdown-item" role="presentation" href="#">
									Second Item
								</a>
								<a className="dropdown-item" role="presentation" href="#">
									Third Item
								</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="row mt-5">
                    <div className="col col-md-4 mt-2 mb-3">
					<Card     />
                    </div>
                    <div className="col col-md-4 mt-2 mb-3">
					<Card     />
                    </div>
                    <div className="col col-md-4 mt-2 mb-3">
					<Card     />
                    </div>
					</div>
				</div>
			</div>
		</div>
	);
}
