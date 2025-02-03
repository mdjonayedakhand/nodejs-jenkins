import prisma from "../db/db.config.js";


export const getUsers = async(req,res)=>{
    const users = await prisma.user.findMany({
        include: {
            _count: {
              select: { posts: true,comments:true },
            },
    }})
    return res.status(200).json(users)
}
export const getUser = async(req,res)=>{
   const userid= req.params.id
   const user = await prisma.user.findFirst({
    where:{
        id:Number(userid)
        }

    
   })
    return res.status(200).json(user)
}


export const createUser = async(req,res)=>{
    const {name,email,password} = req.body
    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if (findUser) {
        return res.json({status:400,mssg:"email already taken"})
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })

    return res.json({status:200,data:newUser,mssg:"user created"})
}

export const updateUser = async(req,res)=>{
    const id=req.params.id
    const {name,email,password} = req.body

    await prisma.user.update({
        where:{
            id:Number(id)
        },
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return res.status(200).json({mssg:"user updated"})
}

export const deleteUser = async(req,res) => {
    const id=req.params.id
    await prisma.user.delete({
        where:{
            id:Number(id)
        }
    })
    return res.status(200).json({mssg:"user deleted"})
}

