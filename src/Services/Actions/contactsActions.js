import axios from "axios";
import generateUniqueId from "generate-unique-id";
import { storage } from "../../FirebaseConfring";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const GetData = (Singledata) => {
    return {
        type: 'GETDATA',
        payload: Singledata
    };
};

const EditContacts = (editdata) => {
    return {
        type: 'EDITCONTACTS',
        payload: editdata
    };
};

const updateData = () =>{
        return {
            type: 'UPDATCONTACT',
        }
}

export const AddContactAsync = (data) => {
    return (dispatch) => {
        data.id = generateUniqueId({
            length: 3,
            useLetters: false
        });
        axios.post('http://localhost:3300/Contact', data)
            .then(() => {
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.log("Error adding Contact:", err);
            });
    };
};

export const GetDataAsync = () => {
    return (dispatch) => {
        axios.get('http://localhost:3300/Contact')
            .then((res) => {
                console.log("Get data success:", res);
                dispatch(GetData(res.data));
            })
            .catch((err) => {
                console.log("Error getting data:", err);
            });
    };
};

export const EditDataAsync = (editId) => {
    return (dispatch) => {
        axios.get(`http://localhost:3300/Contact/${editId}`)
            .then((res) => {
                console.log("Edit data success:", res.data);
                dispatch(EditContacts(res.data));

            })
            .catch((err) => {
                console.log("Error editing data:", err);
            });
    };
};

export const updateDataAsync = (updatedata) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3300/Contact/${updatedata.id}`, updatedata)
            .then((res) => {
                console.log("Update data success:", res);
                dispatch(GetDataAsync());
                dispatch(updateData())
            })
            .catch((err) => {
                console.log("Error updating data:", err);
                // dispatch(updateErr(err));
            });
    };
};

export const DeleteAsync = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3300/Contact/${id}`)
            .then(() => {
                console.log("Delete data success:");
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.log("Error deleting data:", err);
            });
    };
};



/*fire base storage */


export const uploadImages = (file) => {
    return (dispatch) => {
        const storageRef = ref(storage, `img/${file.name}`);

        return uploadBytes(storageRef, file)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    };
};

export const updateImg = (update) =>{
    return (dispatch) => {
        const storageRef = ref(storage, `img/${update.img}`);

        return uploadBytes(storageRef, update)
            .then((snapshot) => {
                return getDownloadURL(snapshot.ref);
            })
            .then((url) => {
                console.log('Uploaded file and got URL!', url);
                return url;
            })
            .catch(err => {
                console.error("Error uploading file: ", err);
                throw err;
            });
    }
}
