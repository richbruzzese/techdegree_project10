import { Link } from "react-router-dom"

const NotFound = () =>{
return(
    <div className='validation--errors'>
        <h2>Page Not found</h2>
            <p>The page you requested does not exist</p>
        <Link className='button' to='/'> Back to Courses</Link>
    </div>
)
}

export default NotFound