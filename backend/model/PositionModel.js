const {model}= require('mongoose');
const { PositionSchema } = require("../schemas/PostionSchema");

const PositionModel = model("Position", PositionSchema);

module.exports = { PositionModel };