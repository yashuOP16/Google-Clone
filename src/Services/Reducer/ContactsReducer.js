const initialState = {
    userContacts: [],
    Contact: null,
    isEdit: false,

};

function ContactsReducer(state = initialState, action) {
    switch (action.type) { 
        case "GETDATA": 
            return {
                ...state,
                userContacts: action.payload,
            };

        case "EDITCONTACTS":
            return {
                ...state,
                Contact: action.payload,
                isEdit: true,
            
            };

        case "UPDATCONTACT":
           
            return {
                ...state,
                Contact: null,
                isEdit: false,
            };

       

        default:
            return state; 
    }
}

export default ContactsReducer;
