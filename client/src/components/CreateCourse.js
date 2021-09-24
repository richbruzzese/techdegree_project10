import { useState , useContext } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import Form from './Form'
import { Context } from '../Context'

/**
 * If user is authenticated, will render form to allow course creation
 * Submitting the form will call the createCourse method from Data.js
 * and route users back to main courses page
 * If creation is cancelled users are directed back to main page
 * @returns redirect to '/'
 */
const CreateCourse = () => {
   let history = useHistory()
   let { data, authenticatedUser } = useContext(Context)
   const [ course, setCourse ] = useState({})
   const [errors, setErrors] = useState({})
   const { emailAddress, password } = authenticatedUser

   
   const change = (e) => {
    setCourse(prevValues => ({
        ...prevValues,
        [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
     course.userId = authenticatedUser.id
     data.createCourse(course, emailAddress, password)
     .then(errs => {
         if(errs.length){
             console.log(errs)
             setErrors({errs})
         } else {
             history.push('/')
         }
     })
     .catch(err =>{
         console.log(err)
         return <Redirect to='/error'/>
     })
    }

    const handleCancel = () =>{
        history.push('/')
    }

    return(
        <main>
            <div className='wrap'>
                <h2> Create Course </h2>
                <Form 
                    cancel={handleCancel}
                    errors={errors.errs}
                    submit={handleSubmit}
                    submitButtonText='Create Course'
                    elements={ () =>(
                        <div className='main--flex'>
                            <div>
                                <label htmlFor='title'> Course Title </label>
                                <input
                                    id='title'
                                    name='title'
                                    type='text'
                                    onChange={change}
                                />

                                <label htmlFor='descirption'> Course Description </label>
                                <textarea
                                    id='description'
                                    name='description'
                                    onChange={change}
                                />
                            </div>
                            <div>
                                <label htmlFor='estimatedTime'> Estimate Time </label>
                                <input
                                    id='estimatedTime'
                                    name='estimatedTime'
                                    type='text'
                                    onChange={change}
                                />

                                <label htmlFor='materialsNeeded'> Materials Needed </label>
                                <textarea
                                    id='materialsNeeded'
                                    name='materialsNeeded'
                                    onChange={change}
                                />
                            </div>
                        </div>                        
                    )}
                />
            </div>
        </main>
    )
}
export default CreateCourse