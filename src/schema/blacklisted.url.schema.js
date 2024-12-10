const mongoose = require("mongoose")
const BlacklistedLinksSchema = new mongoose.Schema({

    url:{
        type: String,
        required: true,
    },

    isblackListed:{
        type: Boolean,
        required:true,
    },

})

var links =  new mongoose.model("BlackListedurls",BlacklistedLinksSchema)

module.exports = links;
