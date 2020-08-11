const router=require('express').Router();
const User=require('../model/User');


router.post('/register',(req,res)=>{
 const {username, email, password, cPassword}=req.body;
 let error=[];

 //check require feilds
 if(!username || !email || !password || cPassword){
   console.log("please fill all feilds");
 }

 //check pasword
 if(password!= cPassword){
  console.log("password not match");
   error.push({msg:"password not match"});
   res.send("password not match");
 }

 if(error.length<=0){
     //validation
     User.findOne({email:email})
     .then(user=>{
       if(user){
        res.json('This email already exit! Try another one');
       }
       else
       {
        const newUser=new User({
          username,
          email,
          password,
      });
  console.log("hey",newUser);

       newUser.save()
       .then(()=>res.json('Registered sucessfully! login now'))
     }
     });
 }
error=[];
});

router.post('/login',(req,res)=>{
  const {email, password}=req.body;

User.findOne({email:email})
.then(user=>{
  if(user){
   
   if(user.password== password){
    res.json('successfully login');
   }
   else{
   res.json('password is incorrect');
   console.log(user);
   }
  }
  else
  {
    res.json("This email does'nt exit ! Register now");
    console.log("hey1 user does'nt exit");
}
});
});
module.exports=router;