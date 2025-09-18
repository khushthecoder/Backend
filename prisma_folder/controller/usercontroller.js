import prisma from '../DB/db.config.js';

// Create a new user
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const finduser=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(finduser){
        return res.status(400).json({message:"user already exists"})
    }
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
    return res.status(200).json({data:newUser,msg:"user created"})
}

//update user
export const updateUser=async(req,res)=>{
    const {id}=req.params.id
    const {name,email,password}=req.body
    const updateuser=await prisma.user.update({
        where:{
            id:id
        },
        data:{
            name,
            email,
            password
        }
    })
    return res.status(200).json({data:updateuser,msg:"user updated"})
}

//delete user
export const deleteUser=async(req,res)=>{
    const {id}=req.params.id
    const deleteuser=await prisma.user.delete({
        where:{
            id:id
        }
    })
    return res.status(200).json({data:deleteuser,msg:"user deleted"})
}

//get all users
export const fetchusers=async(req,res)=>{
    const user=await prisma.user.findMany()
    return res.status(200).json({data:user,msg:"all users fetched"})
}

//get single user
export const singleuser= async (req,res)=>{
    const {id}=req.params.id
    const user=await prisma.user.findUnique({
        where:{
            id:id
        }
    })
    return res.status(200).json({data:user,msg:"single user"})
}
