import { Link } from "react-router-dom";


const Forbidden = () =>{
    return(
        <main>
            <div className='wrap'>
                <h2>Forbidden</h2>
                <p>Sorry, you do not have access to this page.</p>
                <Link className='button'> Back to Courses</Link>
            </div>
        </main>
    )
}

export default Forbidden