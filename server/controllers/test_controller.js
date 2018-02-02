module.exports={
    testGet:(req, res, next)=>{
        let myResponse = 'testGet endpoint hit'
        res.status(200).send(myResponse)
    }
}