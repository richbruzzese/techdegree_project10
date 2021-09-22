import { Link } from "react-router-dom";


const Forbidden = () =>{
    return(
        <main>
            <div className='validation--errors'>
                <h2>Forbidden</h2>
                <p>Sorry, you do not have access to this page.</p>
                <Link className='button' to="/"> Back to Courses</Link>
            </div>
        </main>
    )
}

export default Forbidden