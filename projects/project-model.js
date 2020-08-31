const db = require("../data/config")

function find() {
    return db("projects")
}

function findByID(id) {
    return db()
}

