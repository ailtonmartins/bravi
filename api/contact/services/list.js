import {db} from "../../index";

export default (req , res) => {
    let contact = 'people/'+req.params.person+'/contact'
    if ( typeof req.params.id === 'string' ) {
        contact += "/"+req.params.id;
    }
    let contactRef = db.database().ref(contact);
    contactRef.orderByValue().on("value", function(snapshot) {
        return res.json(snapshot);
    });
}