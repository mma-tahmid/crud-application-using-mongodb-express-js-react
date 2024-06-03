const usersModel = require("../models/UserModel")

// Create User

exports.CreateUser = async (req, res) => {
    try {

        const { firstName, lastName, email, password } = req.body

        // validation

        if (!firstName) {
            return res.send({ error: "Enter your First Name" })
        }

        else if (!lastName) {
            return res.send({ error: "Enter your Last Name" })
        }

        else if (!email) {
            return res.send({ error: "Enter your Email" })
        }

        else if (!password) {
            return res.send({ error: "Enter your Password" })
        }

        // upor ar stage sob thik thake pore stage a jbe na hole jbe na
        else {

            let newUser = new usersModel({
                firstName,
                lastName,
                email,
                password

            })

            let result = await newUser.save();

            res.status(200).json({ msg: "Success", output: result })
            //res.send({ Success: "User Created Successfully" })

        }

    }

    catch (error) {
        res.status(200).json({ msg: "Fail", output: error })

    }
}



// Update User

exports.UpdateUser = async (req, res) => {

    try {
        const id = req.params.useruniqueid

        let UpdateUser = await usersModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({ msg: "Success", output: UpdateUser })
    }

    catch (error) {
        res.status(200).json({ msg: "Fail", output: error })
    }

}



// Get individual User By ID

exports.GetUserById = async (req, res) => {

    try {

        const id = req.params.useruniqueid

        let result = await usersModel.findById(id)

        res.status(200).json({ msg: "Success", output: result })
    }

    catch (error) {
        res.status(200).json({ msg: "Fail", output: error })
    }

}




// Get All Users

exports.ShowAlluser = async (req, res) => {

    try {

        let result = await usersModel.find()

        res.status(200).json({ msg: "Success", output: result }) // data: result, this result show data in postman
        // res.status(200).json(result)

    }

    catch (error) {
        res.status(200).json({ msg: "Fail", output: error })
    }

}


// Delete User

exports.DeleteUser = async (req, res) => {

    try {


        const id = req.params.useruniqueid

        //Don't Return anything only delete User (that why deleteuser is not use)

        let deleteUser = await usersModel.findByIdAndDelete(id)
        res.status(200).json({msg:"User Deleted successfully"})
        

    }

    catch (error) {
        res.status(200).json({ msg: "Fail", output: error })
    }
}

