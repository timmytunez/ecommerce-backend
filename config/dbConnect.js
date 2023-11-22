const { default: mongoose} = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_url);
        console.log('Database Connected Sucessfully')
    } catch (error) {
        console.log('Database error')
    }
}
module.exports = dbConnect;
