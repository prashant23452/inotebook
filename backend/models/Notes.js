const mongoose= require('mongoose')

const NotesSchema= new Schema({
    title:{
        type:String,
        requires:true
    },
     description:{
        type:String,
        requires:true
    },
    tag:{
        type:String,
        default: "General"
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.export = mongoose.model('notes', NotesSchema);