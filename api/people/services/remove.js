import {db} from "../../index";

export default (req , res) => {
    var peopleRef = db.database().ref("people/"+req.params.id);
    peopleRef.remove().then(
                                (snap) => {
                                    res.json({ message: "Success: Person remove."})
                                }
                            )
                            .catch(function(error) {
                                console.log(error);
                                res.json({ message: "Synchronization failed."});
                            });
}