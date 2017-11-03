import {db} from "../../index";

export default (req , res) => {

    var peopleRef = db.database().ref("people/"+req.params.id);

    let person = {};

    if ( typeof  req.body.firstName === 'string'  ) {
        person.first_name = req.body.firstName;
    }

    if ( typeof  req.body.lastName === 'string'  ) {
        person.last_name = req.body.lastName;
    }

    if ( typeof  req.body.age === 'number'  ) {
        person.age = req.body.age;
    }

    peopleRef.update( person ).then(
                                        (snap) => {
                                            if (req.body.contact.length) {
                                                for ( let v of req.body.contact ) {
                                                    if ( typeof v.key === 'string'  ) {
                                                        db.database().ref("people/"+req.params.id+"/contact/"+v.key).update({
                                                            "type":v.type,
                                                            "value":v.value
                                                        });
                                                    } else {
                                                        db.database().ref("people/"+req.params.id+"/contact").push({
                                                            "type":v.type,
                                                            "value":v.value
                                                        });
                                                    }

                                                }
                                                res.json({ message: "Success: Person and Contact update."})
                                            }else{
                                                res.json({ message: "Success: Person update."})
                                            }
                                        }
                                    )
                                    .catch(function(error) {
                                        console.log(error);
                                        res.json({ message: "Synchronization failed."});
                                    });
}