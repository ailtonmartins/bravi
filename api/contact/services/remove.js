import {db} from "../../index";

export default (req , res) => {
    var contactRef = db.database().ref('people/'+req.params.person+'/contact/'+req.params.id);
    contactRef.remove().then(
                                (snap) => {
                                    res.json({ message: "Success: Contact remove."})
                                }
                            )
                            .catch(function(error) {
                                console.log(error);
                                res.json({ message: "Synchronization failed."});
                            });
}