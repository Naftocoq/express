
const verify =(req, res, next) => {
let today = new Date()
let day = today.getDay ()
let time = today.getHours()

if (time < 9 || time >12 || day ===0 || day ===6) {
    res.redirect('/error')
} else {
    next()
}
}
module.exports = verify