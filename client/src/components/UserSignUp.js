import {useContext, useState} from 'react'
import {Context} from '../Context'
import { Link, useHistory, Redirect } from 'react-router-dom'
import Form from './Form'


const UserSignup = () => {
    let history = useHistory()
    const { actions, data } = useContext(Context)
    const [userCreds, setUserCreds] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        errors: []
    })

    const {errors} = userCreds

    const change = (e) => {
        setUserCreds(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

     /*
     When the submit button is hit - calls the createUser function from
    Data and applies the provided variables to the db
     */
    const handleSubmit = () =>{
        // destructured the user credentials for fluidity
        const {firstName, lastName, emailAddress, password} = userCreds

        const user = {firstName, lastName, emailAddress, password}

        data.createUser(user)
        .then(errors =>{
            if(errors.length){
                setUserCreds({errors:errors})
            }else{
                actions.signIn(emailAddress,password)
                .then(() => history.goBack())
            }
        })
        .catch(err =>{
            console.log(err)
            return <Redirect to='/error' />
        })
    }

    //When cancel is hit, redirects to the main route
    const handleCancel = () =>{
        history.push('/')
    }

    return(
        <main>
            <div className='form--centered'>
                <h2>Signup</h2>
                <Form 
                    submit={handleSubmit}
                    cancel={handleCancel}
                    errors={errors}
                    submitButtonText='Sign Up'
                    elements={() =>(
                    <>
                        <label htmlFor='firstName'> First Name</label>
                        <input 
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={change}
                        />
                        <label htmlFor='lastName'> Last Name</label>
                        <input 
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={change}
                        />
                        <label htmlFor='emailAddress'> Email Address</label>
                        <input 
                            id="emailAddress"
                            name="emailAddress"
                            type="email"
                            onChange={change}
                        />
                        <label htmlFor='password'>Password</label>
                        <input 
                            id='password'
                            name='password'
                            type='password'
                            onChange={change}
                        />
                    </>
                )}
                />
                <p>Already have an account? Click here to <Link to='/signin'>Sign Up</Link></p>
            </div>
        </main>
    )
    
}
export default UserSignup