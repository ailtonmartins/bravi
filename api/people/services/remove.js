export default (req , res) => {
    return res.json({'people' : 'remove '+req.params.id})
}