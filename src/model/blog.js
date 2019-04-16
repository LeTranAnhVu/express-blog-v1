import mongoose from 'mongoose'

const schema = mongoose.Schema

const Blog = new schema({
  id: mongoose.Schema.ObjectId,
  title: {type: String, default: 'What is Lorem Ipsum?'},
  content: {
    type: String,
    default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  author: {type: String, default: 'unknown'},
  dateCreated: {type: Date, default: Date.now()},
  dateUpdated: {type: Date, default: Date.now()},
})

export default mongoose.model('blog', Blog)
