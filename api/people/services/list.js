import {db} from "../../index";


export default (req , res) => {

    var peopleRef = db.database().ref("people");
    peopleRef.orderByValue().limitToLast(3).on("value", function(snapshot) {
        return res.json(snapshot);
    });
}