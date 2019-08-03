import React from 'react';
import {Link} from 'react-router-dom'

const Page404 = (props) => {
    return ( 
        <section className="page404">
            <div className="page404__container">
                <div className="page404__404"></div>
                <div className="page404__text"><p>Sorry! We can't find the page<br />you were looking for</p></div>
                <Link to="/"><div className="page404__tuyi"></div></Link>
            </div>  
        </section>
     );
}
 
export default Page404;