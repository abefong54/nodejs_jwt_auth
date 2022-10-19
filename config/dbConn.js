const mongoose = require('mongoose');
const db_user = encodeURIComponent(process.env.DB_USER);
const db_pass = encodeURIComponent(process.env.DB_PASS);
let uri =  `mongodb+srv://${db_user}:${db_pass}@companydb.0lnixvv.mongodb.net/?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB