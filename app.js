const express= require('express')
const  {sequelize,Book,Owner}  =require ('./models');
const dotenv = require('dotenv');


dotenv.config();
const app=express()
app.use(express.json())

// create one book
app.post('/books',async(req,res)=>{
    const {ownerUuid,author,title,genre}=req.body
    try{
        const owner= await Owner.findOne({where:{uuid:ownerUuid}})
        const book=await Book.create({author,title,genre, ownerId:owner.id})
        return res.json(book)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
})

// // Get all the books
// app.get('/books',async(req,res)=>{

//     try{
//         const books=await Book.findAll()
//         return res.json(books)
//     }catch(error){
//         console.log(error)
//         return res.status(500).json({
//             error:'Server error'
//         })
//     }
// })

// Get one  book
app.get('/books/:uuid',async(req,res)=>{
    const uuid = req.params.uuid

    try{
        const books=await Book.findOne({
            where:{uuid}
        })
        return res.json(books)
    }catch(error){
        console.log(error)
        return res.status(500).json({
            error:'Server error'
        })
    }
})


// create one owner
app.post('/users',async(req,res)=>{
    const {fullname,email}=req.body
    try{
        const owner = await Owner.create({fullname,email})
        return res.json(owner)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
})


// Get all the owners
app.get('/users',async(req,res)=>{

    try{
        const owners=await Owner.findAll()
        return res.json(owners)
    }catch(error){
        console.log(error)
        return res.status(500).json({
            error:'Server error'
        })
    }
})

// Get books based on its owner
app.get('/book/:uuid',async(req,res)=>{
    const uuid = req.params.uuid

    try{
        const owner=await Owner.findOne({
            where:{uuid},
            include:'books'
        })
        return res.json(owner)
    }catch(error){
        console.log(error)
        return res.status(500).json({
            error:'Server error'
        })
    }
})

// Delete an owner
app.delete('/users/:uuid',async(req,res)=>{
    const uuid = req.params.uuid

    try{
        const owner=await Owner.findOne({ where:{uuid} })
        await owner.destroy()
        return res.json({message:"Owner deleted!"})
    }catch(error){
        console.log(error)
        return res.status(500).json({
            error:'Server error'
        })
    }
})
// Update an owner
app.put('/users/:uuid',async(req,res)=>{
    const uuid = req.params.uuid
    const {fullname,email}=req.body

    try{
        const owner=await Owner.findOne({where:{uuid}})
        owner.fullname=fullname
        owner.email=email

        await owner.save()
        return res.json(owner)
    }catch(error){
        console.log(error)
        return res.status(500).json({
            error:'Server error'
        })
    }
})

// get all the books based and their the Owners
app.get('/books',async(req,res)=>{
    try{
        const books=await Book.findAll({include:['owner']})
        return res.json(books)
    }catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
})








PORT= process.env.PORT;
HOST= process.env.HOST;


app.listen(PORT,async()=>{
    console.log(`server started on: http://${HOST}:${PORT}`)
    await sequelize.authenticate()
    console.log(`Database is connected successfully...`)

})