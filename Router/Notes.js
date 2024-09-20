

const express = require('express');
const { GetNotes, CreateNote, UpdateNote, DeleteNote } = require('../controllers/Notes');
const router = express.Router();


router.route('/').get(GetNotes).post(CreateNote)
router.route('/:id').patch(UpdateNote).delete(DeleteNote)



module.exports = router;