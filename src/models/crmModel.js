import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export  const ContactSchema = new Schema({
  firstName:{
    type: String,
    required:"Entre um prénom"
  },
  lastName:{
    type: String,
    required:"Entre um nom de Famille"
  },
  email:{
    type: String,
  },
  company:{
    type: String,
  },
  phone:{
    type: Number,
  },
  created_date:{
    type: Date,
    default: Date.now()
  },
})