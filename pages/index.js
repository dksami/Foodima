import { Content } from '../components/content';
import { Sidebar } from '../components/sidebar';
import { TopCover } from '../components/topCover';
import { Navmenu } from '../components/navmenu';
import { HeaderImport } from '../components/headerImport';
import React from 'react';

class index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
                {/* all the imports from Header including all css 
                and js files as well as the name and the icon 
                 start */}
				<HeaderImport />
                {/* end */}


                {/* Page main area contain all the html for the page
                start: Mani */}
				<div>


                    {/* Start: Navigation menu */}
					<Navmenu />
					{/* End: Navigation with Button */}
					
                    {/* Start: Cover */}
                    <TopCover />
                    {/* end: Cover */}



					<div className="container mt-5">
						<div className="row">
							
                            
                            {/* Start: Side bar of the page */}
                            <Sidebar />
							{/* end: sidebar of the page */}
                            
                            
                            {/* start: content area of the page */}
                            <Content />
                            {/* end: content area of the page */}

						</div>
					</div>


				</div>
                {/* end: main */}

			</div>
		);
	}
}

export default index;
