import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Viewdata.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAsync, EditDataAsync, GetDataAsync } from '../../Services/Actions/contactsActions';
import { useNavigate } from 'react-router';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function ViewData() {
    const { isEdit, userContacts } = useSelector(state => state.ContactsReducer);
    console.log("get Data view", userContacts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        dispatch(EditDataAsync(id));
    };

    const handleDelete = (id) => {
        dispatch(DeleteAsync(id));
    };

    useEffect(() => {
        dispatch(GetDataAsync());
    }, [dispatch]);

    useEffect(() => {
        if (isEdit) {
            navigate('/edit');
        }
    }, [isEdit, navigate]);

    return (
        <Container fluid>
            <table class="table table-striped  fixed-header">
            <thead>
                    <tr>
                    {/* <th className='border border-dark text-center'>Id</th> */}
                        <th className='border border-dark text-center '>Photo</th>
                        <th className='border border-dark text-center'>Name</th>
                        <th className='border border-dark text-center w-25'>Email</th>
                        <th className='border border-dark text-center'>Phone number</th>    
                        <th className='border border-dark text-center w-25'>Notes</th>
                        <th className='border border-dark text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    userContacts.map((data) => (
                        
                        <tr key={data.id}>
                            
                            {/* <td className='border border-dark text-center col-2'>{data.id}</td> */}
                            <td className=' text-center '><div className='profile'><img src={data.avatar} alt="" /></div></td>
                            <td className=' text-center '>{data.Name}</td>
                            <td className=' text-center w-25'>{data.Email}</td>
                            <td className=' text-center '>{data.Phone}</td>
                            <td className=' text-center w-25'>{data.Nots}</td>
                            <td className='d-flex justify-content-end gap-3  py-3'>
                                <button type='button' className='btn btn-success' onClick={() => handleEdit(data.id)}><FaEdit /></button>
                                <button type='button' className='btn btn-danger' onClick={() => handleDelete(data.id)}><MdDelete /></button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

          
        </Container>
    );
}

export default ViewData;
