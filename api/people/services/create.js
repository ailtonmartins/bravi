import {db} from "../../index";

export default (req , res) => {

    let peopleRef = db.database().ref("people");
    peopleRef.push({
                    "first_name": req.body.firstName,
                    "last_name": req.body.lastName,
                    "age": req.body.age,
               }).then(
                    (snap) => {
                        if (req.body.contact.length) {
                            let contactRef = db.database().ref("people/"+snap.getKey()+"/contact");
                            for ( let v of req.body.contact ) {
                                contactRef.push({
                                                   "type":v.type,
                                                   "value":v.value
                                                });
                            }
                            res.json({ message: "Success: Person and Contact created."})
                        }else{
                            res.json({ message: "Success: Person created."})
                        }
                    }
                )
               .catch(function(error) {
                   console.log(error);
                   res.json({ message: "Synchronization failed."});
               });

}