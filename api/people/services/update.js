import {db} from "../../index";

export default (req , res) => {

    var peopleRef = db.database().ref("people/"+req.params.id);
    peopleRef.update( {
        "first_name": req.body.firstName,
        "last_name": req.body.lastName,
        "age": req.body.age,
        "contact": req.body.contact,
    } , function(err) {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: "Success: User created."})
        }
    });
}