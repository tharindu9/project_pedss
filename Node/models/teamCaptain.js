
const mongoose = require('mongoose');

var TeamCaptain = mongoose.model('TeamCaptain', {

     
    userId : { type: String },
	faculty : { type: String },
	indexNo : { type: String },
	subEventId : { type : String },
    teamCardId :  { type : String},
    isSubmitted : { type : Boolean }
	
	 
     
});




});


module.exports = { TeamCaptain };  