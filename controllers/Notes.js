const { StatusCodes } = require("http-status-codes")
const Notes = require("../Models/Notes")

const GetNotes = async (req,res) => {
    const note = await Notes.find({}).sort('-createdAt');
    res.status(StatusCodes.OK).json({success : true, JobLength: note.length, data : note})

}

const CreateNote = async (req,res) => {
    const note = await Notes.create(req.body);
    res.status(StatusCodes.CREATED).json({success : true, msg : "The Note Has Been Created Successfully" , data : note})
}

const UpdateNote = async (req,res) => {
    const {id: NoteID} = req.params;
    const note = await Notes.findByIdAndUpdate({_id:NoteID},req.body ,
        { new : true, runValidators : true })
    res.status(StatusCodes.OK).json({success : true, msg : "The Note Has Been Updated Successfully" ,data : note})

    
}

const DeleteNote = async (req,res) => {
    const {id: NoteID} = req.params;
    const note = await Notes.findByIdAndDelete({_id : NoteID})
    res.status(StatusCodes.OK).json({success : true, msg : "The Note Has Been Deleted Successfully" ,data : note})
}




module.exports = {
    GetNotes,
    CreateNote,
    UpdateNote,
    DeleteNote   
}
