import prisma from "../db/db.config.js";


export const getComments = async(req,res)=>{
    const comments = await prisma.comment.findMany({
       
    })
    return res.status(200).json(comments)
}
export const getComment = async(req,res)=>{
   const commentid= req.params.id
   const comment = await prisma.comment.findFirst({
    where:{
        id:Number(commentid)
    }
   })
    return res.status(200).json(comment)
}


export const createComment = async(req,res)=>{
    const {user_id,post_id,comment} = req.body
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                increment:1
            }
        }
    })

    const newComment = await prisma.comment.create({
        data:{
           comment:comment,
           user_id:Number(user_id),
              post_id:Number(post_id)
        }
    })

    return res.json({status:200,data:newComment,mssg:"comment created"})
}

export const updateComment = async(req,res)=>{
    const id=req.params.id
    const {comment} = req.body

    await prisma.comment.update({
        where:{
            id:Number(id)
        },
        data:{
            comment:comment,
        }
    })
    return res.status(200).json({mssg:"comment updated"})
}

export const deleteComment = async(req,res) => {
    const id=req.params.id
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                decrement:1
            }
        }
    })
    await prisma.comment.delete({
        where:{
            id:Number(id)
        }
    })
    return res.status(200).json({mssg:"comment deleted"})
}

