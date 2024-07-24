import React, { useState } from 'react'
import './addContact.css'
/*react icons */
import { IoPersonSharp } from "react-icons/io5";
import { MdAutoFixHigh, MdDelete, MdOutlineGroups2 } from 'react-icons/md';
import { GiBackwardTime } from 'react-icons/gi';
import { RiFileDownloadFill } from 'react-icons/ri';
import { FaCloudArrowDown, FaCloudArrowUp } from 'react-icons/fa6';
import { IoMdPrint } from 'react-icons/io';
import ViewData from '../ViewContacts/ViewData';
import { Link } from 'react-router-dom';



function AddContact() {



    return (
        <>

            <div className="admin-panel">

                <div className="sidebar">
                    <h2>Contacts</h2>
                    <ul>
                        <Link to={'/Form'}  className='text-decoration-none'>
                            <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><IoPersonSharp /></span>contacts</a></li>
                        </Link>
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><MdOutlineGroups2 /></span>Groups</a></li>
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><GiBackwardTime /></span>Frequentily Contacted</a></li>
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><MdAutoFixHigh /></span>Marge and Fix</a></li>
                        <hr />
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><RiFileDownloadFill /></span>Other Contact</a></li>
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><MdDelete /></span>Other Contact</a></li>
                        <hr />
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><FaCloudArrowUp /></span>Import</a></li>
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><FaCloudArrowDown /></span>Export</a></li>
                        <li><a href="#" className='m-0 px-0'><span className='pe-2 fs-5'><IoMdPrint /></span>Print</a></li>
                    </ul>
                </div>


                <div className="content">
                    <ViewData />
                </div>
            </div>
        </>
    )
}

export default AddContact;