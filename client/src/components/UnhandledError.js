import { Link } from "react-router-dom";


const UnhandledError = () =>{
    return(
        <main>
            <div className='validation--errors'>
                <h2>Unhandled Error</h2>
                <p>Sorry, looks like an Unknown error occurred.</p>
                <Link className='button' to='/'> Back to Courses</Link>
            </div>
        </main>
    )
}

export default UnhandledError