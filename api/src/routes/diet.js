const {Router} = require('express');
const {Diet} = require('../db.js');

const router = Router();

  
router.get('/types', async  (req, res)=> {
        try{
            let diet = await Diet.findAll()
            // console.log("Diet: "+ diet);
            return res.json(diet)
        }catch(error){
            console.log(error)
        }
    
})





module.exports = router;