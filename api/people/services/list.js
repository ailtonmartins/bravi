import {db} from "../../index";

export default (req , res) => {
    let people = "people"
    if ( typeof req.params.id === 'string' ) {
       people += "/"+req.params.id;
    }
    let peopleRef = db.database().ref(people);
    peopleRef.orderByValue().on("value", function(snapshot) {
        return res.json(snapshot);
    });
}