import { Link } from "react-router-dom";


const Error = () =>{
    return(
        <main>
            <div className='wrap'>
                <h2>Forbidden</h2>
                <p>Sorry, looks like an error occurred.</p>
                <Link className='button'> Back to Courses</Link>
            </div>
        </main>
    )
}

export default Error