import {db} from "../../index";

export default (req , res) => {

    let peopleRef = db.database().ref('people/'+req.params.person+'/contact');
    peopleRef.push({
                    "type": req.body.type,
                    "value": req.body.value
               }).then(
                    (snap) => {
                       res.json({ message: "Success: Contact created."})
                    }
                )
               .catch(function(error) {
                   console.log(error);
                   res.json({ message: "Synchronization failed."});
               });

}