import {db} from "../../index";

export default (req , res) => {

    console.log(req.params);
    var contactRef = db.database().ref('people/'+req.params.person+'/contact/'+req.params.id);

    let contact = {};

    if ( typeof  req.body.type === 'string'  ) {
        contact.type = req.body.type;
    }

    if ( typeof  req.body.value === 'string'  ) {
        contact.value = req.body.value;
    }

    contactRef.update( contact ).then(
                                        (snap) => {
                                            res.json({ message: "Success: Contact update."})
                                        }
                                    )
                                    .catch(function(error) {
                                        console.log(error);
                                        res.json({ message: "Synchronization failed."});
                                    });
}