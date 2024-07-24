import React, { useEffect, useState } from 'react'
import './form.css'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AddContactAsync, uploadImages } from '../../Services/Actions/contactsActions'
function Form() {
    const navigate = useNavigate()
    const dispacth = useDispatch()

 
    const [isSubmit , setIsSubmit] =  useState (false)
    const [userContact, setUerContact] = useState({
        avatar: '',
        Name: '',
        Email: '',
        Phone: '',
        Nots: '',
    })

    const HandleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUerContact({ ...userContact, [name]: value })
    }



    const HandleImages = async (e) => {
        const file = e.target.files[0];
        // setIsSubmit(true)
        try {
            const url = await dispacth(uploadImages(file));
            setUerContact(prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setIsSubmit(false)
        };

    const HandleSubmit = (e) => {
        e.preventDefault(),
            dispacth(AddContactAsync(userContact))
        navigate('/')
    }

    useEffect(()=>{
        if(isSubmit){
            navigate('/')
        }
    },[isSubmit])
    return (
        <>
            <Container className='py-5'>
                <Row className='justify-content-center pt-5'>
                    <div className="col-4">
                        <form class="form " onSubmit={HandleSubmit}>
                            <p class="title">Add New Contacts </p>

                            <label>
                                <input class="input" type="file" placeholder="" name='avatar'onChange={HandleImages} required="" />
                                <span>Profile Piccture</span>
                            </label>

                            <label>
                                <input class="input" type="text" placeholder="" name='Name' value={userContact.Name} onChange={HandleInput} required="" />
                                <span>Name</span>
                            </label>


                            <label>
                                <input class="input" type="email" placeholder="" name='Email' value={userContact.Email} onChange={HandleInput} required="" />
                                <span>Email</span>
                            </label>

                            <label>
                                <input class="input" type="tel" placeholder="" name='Phone' value={userContact.Phone} onChange={HandleInput} required="" />
                                <span>Phone Number</span>
                            </label>
                            <label>
                                <textarea class="input" type="password" placeholder="" name='Nots' value={userContact.Nots} onChange={HandleInput} required="" />
                                <span>Notes</span>
                            </label>
                            <button class="submit">Submit</button>

                        </form>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Form;
