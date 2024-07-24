import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataAsync, updateImg } from '../../Services/Actions/contactsActions';
import { useNavigate } from 'react-router';

function EditContacts() {
    const { Contact } = useSelector(state => state.ContactsReducer);
    const [EditContacts, setEditContacts] = useState(Contact || {});
    // const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!Contact) {
            navigate('/');
        }
    }, [Contact, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditContacts({ ...EditContacts, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("update data", e);
        dispatch(updateDataAsync(EditContacts));
  
     
    };

    const handleUpdatimag = async (img) =>{
        const file = img.target.files[0];
       
        try {
            const url = await dispatch(updateImg(file));
            setEditContacts(prevContact => ({ ...prevContact, avatar: url }));
        } catch (error) {
            console.error('Error uploading image:', error);
        }
       
    }

   
    
    if (!Contact) return null; // or a loading spinner

    return (
        <Container fluid className='editForm'>
            <Row  className='justify-content-center '>
                <div className="col-3">
                    <form className="form" onSubmit={handleUpdate}>
                        <p className="title">Edit Contact </p>
                        <p className="message">Update Contact Details:</p>

                        <label>
                            <input
                                className="input"
                                type="file"
                                placeholder="Enter Avatar"
                                name="title"
                                onChange={handleUpdatimag}
                            />
                            <span>Photo</span>
                            <p className='text-success'>*Loding images wait 10sec</p>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Name"
                                name="Name"
                                value={EditContacts.Name || ''}
                                onChange={handleChange}
                            />
                            <span>Name</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter Email"
                                name="Email"
                                value={EditContacts.Email || ''}
                                onChange={handleChange}
                            />
                            <span>Email</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="tel"
                                placeholder="Enter Mobile number"
                                name="Phone"
                                value={EditContacts.Phone || ''}
                                onChange={handleChange}
                            />
                            <span>Mobile Number</span>
                        </label>

                        <label>
                            <input
                                className="input"
                                type="tel"
                                placeholder="Enter your discription"
                                name="Nots"
                                value={EditContacts.Nots || ''}
                                onChange={handleChange}
                            />
                            <span>Notes</span>
                        </label>



                        <button type="submit" className="submit">Update</button>
                    </form>
                </div>
            </Row>
        </Container>
    );
}

export default EditContacts;
