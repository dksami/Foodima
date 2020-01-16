import React from 'react';
export function Card({}) {
	return	<div>
		<img
			src="static/assets/img/48-3-large.jpg?h=507da45040ada573d70acc8c8091f6eb"
			style={{
				width: '100%',
				height: '150px',

				/*paddingTop: '10px', */

				/*paddingLeft: '10px', */
				borderRadius: '30px'
			}}
		/>
		<h5
			className="sf"
			style={{
				marginTop: '10px'
			}}
		>
			Resbery pan cake
		</h5>
		<div className="row sf">
			<div className="col col-md-6">
				<span
					style={{
						fontSize: '14px'
					}}
				>
					<i className="far fa-star" />&nbsp;4.7 (24)
				</span>
			</div>
			<div className="col d-xl-flex justify-content-xl-end col-md-6">
				<span
					className="float-right d-xl-flex justify-content-xl-center align-items-xl-center"
					style={{
						fontSize: '11px'
					}}
				>
					by raja osama
				</span>
			</div>
		</div>
	</div>;
}
