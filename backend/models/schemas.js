const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema ({
	id: {type:Number},
	date: {type:String},
	author:{type:String}
})

// const nameToCallInProject = mongoose.model('NameToCallIn Project',
// newsSchemaVar, 'daName')
const News = mongoose.model('News', newsSchema, 'news');
const mySchemas = {'News': News}

module.exports = mySchemas;