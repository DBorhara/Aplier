const db = require('../database')
const Sequelize = require('sequelize')

const Skill = db.define('skill', {
    type: {
        type: Sequelize.STRING,
    },
})

module.exports = Skill