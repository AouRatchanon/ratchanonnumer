var express = require('express');
var router = express.Router();

let Bisectionmodel = require('../models/Bisectionmodel');
let Falsemodel = require('../models/Falsemodel');
let Onepointmodel = require('../models/Onepointmodel');
let Newstonmodel = require('../models/Newstonmodel');
let Secantmodel = require('../models/Secantmodel');
let Trapzoidalmodel = require('../models/Trapzoidalmodel');
let Simpsonmodel = require('../models/Simpsonmodel');
let ComTrapemodel = require('../models/ComTrapemodel');
let ComSimpsonmodel = require('../models/ComSimpsonmodel');
let forwardmodel = require('../models/forwardmodel');
let backwardmodel = require('../models/backwardmodel');
let centralmodel = require('../models/centralmodel');
let h2forwardmodel = require('../models/h2forwardmodel');
let h2backwardmodel = require('../models/h2backwardmodel');
let h2centralmodel = require('../models/h2centralmodel');

/* GET users listing. */

/////////////////////////////////////////////////////////////

router.get('/showBisectionmodel', function(req, res, next) {
 
  Bisectionmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addBisectionmodel',(req,res)=>{
  console.log(req.body);
  let doc = new Bisectionmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})
/////////////////////////////////////////////////////////////

router.get('/showFalsemodel', function(req, res, next) {
 
  Falsemodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addFalsemodel',(req,res)=>{
  console.log(req.body);
  let doc = new Falsemodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

///////////////////////////////////////////////////////////

router.get('/showOnepointmodel', function(req, res, next) {
 
  Onepointmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addOnepointmodel',(req,res)=>{
  console.log(req.body);
  let doc = new Onepointmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////////////////////////////////////////////////////

router.get('/showNewstonmodel', function(req, res, next) {
 
  Newstonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addNewtonsmodel',(req,res)=>{
  console.log(req.body);
  let doc = new Newstonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////////

router.get('/showSecantmodel', function(req, res, next) {
 
  Secantmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addSecantmodel',(req,res)=>{
  console.log(req.body);
  let doc = new Secantmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

///////////////////////////////////////////////////

router.get('/showTrapzoidalmodel', function(req, res, next) {
 
  Trapzoidalmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addTrapzoidalmodel',(req,res)=>{
  console.log(req.body);
  let doc = new Trapzoidalmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

//////////////////////////////////////////////////

router.get('/showSimpsonmodel', function(req, res, next) {
 
  Simpsonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addSimpsonmodel',(req,res)=>{
  console.log(req.body);
  let doc = new Simpsonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showComTrapemodel', function(req, res, next) {
 
  ComTrapemodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addComTrapemodel',(req,res)=>{
  console.log(req.body);
  let doc = new ComTrapemodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

/////////////////////////////////////////////////

router.get('/showComSimpsonmodel', function(req, res, next) {
 
  ComSimpsonmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addComSimpsonmodel',(req,res)=>{
  console.log(req.body);
  let doc = new ComSimpsonmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showforwardmodel', function(req, res, next) {
 
  forwardmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addforwardmodel',(req,res)=>{
  console.log(req.body);
  let doc = new forwardmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showbackwardmodel', function(req, res, next) {
 
  backwardmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addbackwardmodel',(req,res)=>{
  console.log(req.body);
  let doc = new backwardmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showcentralmodel', function(req, res, next) {
 
  centralmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addcentralmodel',(req,res)=>{
  console.log(req.body);
  let doc = new centralmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showh2forwardmodel', function(req, res, next) {
 
  h2forwardmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addh2forwardmodel',(req,res)=>{
  console.log(req.body);
  let doc = new h2forwardmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showh2backwardmodel', function(req, res, next) {
 
  h2backwardmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addh2backwardmodel',(req,res)=>{
  console.log(req.body);
  let doc = new h2backwardmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

////////////////////////////////////////////////

router.get('/showh2centralmodel', function(req, res, next) {
 
  h2centralmodel.find().sort({age:1}).exec((err,data)=>{
    console.log(data);
    return res.json({success:true,data:data});
  })

});


router.post('/addh2centralmodel',(req,res)=>{
  console.log(req.body);
  let doc = new h2centralmodel(req.body);
  doc.save((err,data)=>{
    if(err) throw err;
    res.send({success:true});
  })
})

module.exports = router;
