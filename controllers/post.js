const Student = require("../model/user");
const dotenv = require("dotenv");
dotenv.config()

let responseObj = {
    "status" : "error",
    "msg": "input is miss",
    "body": {}
}

exports.getDetail = async(req,res) => {
    const { page=1, limit = 5} = req.query;
    const student = await Student.find()
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({class:-1})
    .select("_id name age class gmail")
    .then(student  => {
        res.json({student: student})
    })

    .catch(err => console.log(err));
};

exports.addStudent = async(req, res) => {
    let user = new Student ({ name: req.body.name, age: req.body.age, class: req.body.class, gmail: req.body.gmail})
    user.save().then(user => {
        res.json({
            message: "add",
        });
    }).catch(error => {
        res.json({
            message: "error"
        })
    })
    console.log("Creating Post ", req.body);
};

exports.searchStudent = (req, res, next) => {
    try {
        let regex = new RegExp(req.body.name,'i');
        Student.find({name:regex}).then((result ) =>
            res.status(200).json(result)
        )}
    catch(error) {
        console.log("Error::", error);
    }
}



