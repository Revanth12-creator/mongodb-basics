let mongodb=require("mongodb");//this the mongodb driver which is used to connect mongodb server
let url="mongodb://localhost:27017";//mongodb url

mongodb.connect(url,{ useUnifiedTopology: true },(err,databse)=>{
            if(err) throw err;
            console.log("connected to databse ",url);
            // result.close();

            //now create list og documets to store in database
            let employeeDetails=[
                {
                    name:"Revanth",
                    age:22,
                    company:"MNC",
                    location:"banglure",
                },
                {
                    name:"Kuamr",
                    age:21,
                    company:"MNC",
                    location:"banglure",
                },
                {
                    name:"sathis",
                    age:32,
                    company:"MNC",
                    location:"banglure",
                },
                {
                    name:"garu",
                    age:24,
                    company:"MNC",
                    location:"banglure",
                },
                
                {
                    name:"shambha",
                    age:30,
                    company:"MNC",
                    location:"banglure",
                },
                {
                    name:"hari",
                    age:30,
                    company:"MNC",
                    location:"banglure",
                },
            ];

            //now create DATABASE name
            let dbname=databse.db("TCS");

            //create collection name 
           let collectionName= dbname.collection("Users"); 
           collectionName.deleteOne({"name" : "hari"},1).then(result =>{
               console.log(result)
           }).catch(err => console.log(err))
          
        }
)