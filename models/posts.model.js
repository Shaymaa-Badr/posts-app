const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: String,
    desc: String,
    userID:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
    
},
{
    // timestamps: { createdAt: 'addedAt', updatedAt: 'modifiedAt' },
    // timestamps: { currentTime: ()=> Date.now() }
    timestamps:true
}
)

module.exports = mongoose.model('post', postSchema)