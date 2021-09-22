import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { useParams, Redirect, useLocation } from "react-router-dom";

/**
 * If user is authenticated will remove course from db.
 * @returns a redirect to main page
 */
const DeleteCourse = () =>{
    const {id} =useParams()
    const {data , authenticatedUser} = useContext(Context)
    const [course, setCourse] = useState()
    const location = useLocation()
    const {courseUserId} = location.state || 0
    
    useEffect(() =>{
        data.getCourse(id)
        .then(course => setCourse(course))
    }, [data, id])

    if(course === null){
        return <Redirect to='/notfound' />
    }else if(authenticatedUser.id !== courseUserId){
        return <Redirect to='/forbidden' />
    }else {
        data.deleteCourse(id, authenticatedUser.emailAddress, authenticatedUser.password)
        return(
            <Redirect to='/' />
        )
    }
}

export default DeleteCourse