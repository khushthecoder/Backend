//👉 Yeh line Express framework ko import kar rahi hai (jo Node.js me web server banane ke liye use hota hai).
const express = require('express');
//👉 Express ka ek application object banaya ja raha hai, jiske through hum routes (GET, POST, etc.) aur server handle karenge.
const app = express();

app.use(express.json());
//ye line middleware ki he jo kaam aati me request ki body me data pass kar raha ho ta he 
// const bodyParser=require('body-parser')
// app.use(bodyParser.json())
// const bodyParser = require('body-parser')
// → Ye line body-parser module ko import karti hai.
// → Body-parser ek middleware hai jo incoming request ka body data 
//   (jo JSON ya form-data me aata hai) ko readable JavaScript object me convert karta hai.
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())
// → Ye express app ko bolta hai ki jo bhi request JSON body ke sath aaye, 
//   use automatically parse karke req.body me daal do.
// → Matlab: agar client ye bheje:
//   {
//     "name": "Swift",
//     "brand": "Maruti"
//   }
//   To server ke andar aap directly likh sakte ho:
//     req.body.name   // "Swift"
//     req.body.brand  // "Maruti"
//
// ⚡ Simple bolun toh:
// → bodyParser.json() ka use request body me bheje gaye JSON ko 
//   JavaScript object me badalne ke liye hota hai.
// app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('server started at port no. 3000');
});
//👉 Yeh line server ko start karti hai port 3000 par.
//👉 Jab server successfully chal jata hai, to callback function run hota hai aur console me "server started at port no. 3000" print hota hai.



//aab mujhe browser me jaake dekhna hai ki server chal raha hai ya nahi
//so me browerser me check karne ke liye ek get request banauga
app.get('/', (req, res) => {
  console.log('Request aayi is URL se:', req.url);
  res.send('Hello babu from wildcard route');
});



//EXPLANATION IN HINDI

// app.get('/')
// → Ye ek route banata hai jo server ke root URL (http://localhost:3000/) par chalega.
// → 'get' ka matlab hai ki ye route sirf GET request ko handle karega.

// app.get('/', (req, res) => {

    // (req, res) => { ... }
    // → Ye ek callback function hai jo tab chalega jab koi user is URL ko visit karega.
    // → req (request): client ka data rakhta hai (jaise query params, headers, etc.).
    // → res (response): server ka jawab bhejne ke liye use hota hai.

    // res.send('hello babu')
    // → Jab koi user http://localhost:3000/ par request karega,
    //   server usse "hello babu" text ke form me response dega.
    // res.send('hello babu')
// })


//Post request
app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body
    console.log(name,brand)
    res.send("car submitted successfully")
})

//post rew code explanation in hindi
// app.post('/api/cars', ...)
// → Ye ek POST route banata hai jo URL http://localhost:3000/api/cars par chalega.
// → POST request ka use server me naya data bhejne ya save karne ke liye hota hai.

// app.post('/api/cars', (req, res) => {

    // (req, res) => { ... }
    // → Ye callback tab chalega jab koi client /api/cars par POST request karega.
    // → req = client ka data (body, params, headers).
    // → res = server ka response.

    // const { name, brand } = req.body
    // → Yahan hum destructuring kar rahe hai → client ne jo data body me bheja (JSON form me),
    //    usme se name aur brand nikal liye.
    // Example: agar client ye bheje:
    // {
    //   "name": "Swift",
    //   "brand": "Maruti"
    // }
    // To name = "Swift" aur brand = "Maruti" hoga.
    // const { name, brand } = req.body

    // console.log(name, brand)
    // → Server ke terminal me ye values print ho jayengi, debugging ke liye useful hai.
    // console.log(name, brand)

    // res.send("car submitted successfully")
    // → Server client ko response bhej raha hai → "car submitted successfully".
    // res.send("car submitted successfully")
// })


// const mongoose=require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/myDatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log(" Connected to MongoDB"))
// .catch((err) => console.error(" Error connecting to MongoDB:", err));


//explanation in hindi
// const mongoose = require('mongoose')
// → Ye line mongoose library ko import karti hai.
// → Mongoose ek ODM (Object Data Modeling) library hai jo MongoDB ke sath kaam karne ke liye use hoti hai.
// → Isse hum MongoDB me data ko easily create, read, update, delete kar sakte hain.

// mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
// → Ye line MongoDB database se connection banati hai.
// → 'mongodb://localhost:27017/myDatabase' me:
//    - 'localhost' matlab aapka local machine jahan MongoDB chal raha hai.
//    - '27017' MongoDB ka default port hai.
//    - 'myDatabase' wo database hai jisme aapka data store hoga. Agar ye database exist nahi karta, to MongoDB automatically ise create kar dega.
// → { useNewUrlParser: true, useUnifiedTopology: true } ye options hain jo connection ko stable aur future-proof banate hain.

// .then(() => { console.log('connected to mongoDB') })
// → Agar connection successful hota hai, to ye callback function run hoga aur console me "connected to mongoDB" print karega.

// .catch((err) => { console.log('error connecting to mongoDB', err) })
// → Agar connection me koi error aata hai, to ye callback function run hoga aur error message console me print karega.