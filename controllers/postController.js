import prisma from "../db/db.config.js";


export const getPosts = async(req,res)=>{
    const posts = await prisma.post.findMany({
        include:{
            comments:{
              include:{
                user:{
                    select:{
                        name:true
                    }
                }
              }
            }
        }
    })
    return res.status(200).json(posts)
}
export const getPost = async(req,res)=>{
   const postid= req.params.id
   const post = await prisma.post.findFirst({
    where:{
        id:Number(postid)
    }
   })
    return res.status(200).json(post)
}


export const createPost = async(req,res)=>{
    const {user_id,title,description} = req.body
   

    const newUser = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title:title,
            description:description
        }
    })

    return res.json({status:200,data:newUser,mssg:"post created"})
}

export const updatePost = async(req,res)=>{
    const id=req.params.id
    const {user_id,title,description} = req.body


    await prisma.post.update({
        where:{
            id:Number(id)
        },
        data:{
            user_id:Number(user_id),
            title,description
        }
    })
    return res.status(200).json({mssg:"post updated"})
}

export const deletePost= async(req,res) => {
    const id=req.params.id
    await prisma.post.delete({
        where:{
            id:Number(id)
        }
    })
    return res.status(200).json({mssg:"post deleted"})
}

