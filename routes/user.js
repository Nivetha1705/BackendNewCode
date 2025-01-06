const express = require('express');
let router=express.Router();



router.get("/",(req,res)=>{
    res.send("user information");
})
router.get("/newuser",(req,res)=>{
    res.send("new user added");
})
router.get("/newuser/deleteuser",(req,res)=>{
    res.send("user deleted");
})

router.route('/:id')      
      .get((req,res)=>{
        console.log(req.usery);
       res.send("retrive id value " + req.params.id);

})
      .put((req,res)=>{
       res.send("update this id value " + req.params.id);

})
      .delete((req,res)=>{
       res.send("delete this id value " + req.params.id);

})

const users=[{name:"hmm"},{name:"hmm hmm"},{name:"hmm hmm hmm"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];
    next();
})


// router.get('/:id',(req,res)=>{
//      res.send("retrive id value " + req.params.id);

// })
// router.put('/:id',(req,res)=>{
//     res.send("update this id value " + req.params.id);

// })
// router.delete('/:id',(req,res)=>{
//     res.send("delete this id value " + req.params.id);

// })

module.exports = router;
     