const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    _id : {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: Array,
        required: true
    },
    dateTime: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    onlineLocation: {
        type: Boolean,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    registrationLink: {
        type: String,
        required: false
    },
    upcoming: {
        type: Boolean,
        required: true
    }    
});

const Event = mongoose.model('event', EventSchema);
module.exports = Event;