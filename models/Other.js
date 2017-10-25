const mongoose = require('mongoose');
const {Schema} = mongoose;

const otherSchema = new Schema ({
  organization: String,
  title: String,
  duration: String,
  roles: Array
});

mongoose.model('other', otherSchema);
