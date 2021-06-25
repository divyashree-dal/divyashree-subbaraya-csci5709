const express = require('express')

const router = express.Router();

const users= require('../data/users')

router.get('/user/:id', async (req, res, next) => {
    try {
        var id = req.params.id

        var dataUsers = users.users.filter( obj => obj.id === id);

        if (!dataUsers || !dataUsers.length) {

            return res.status(404).json({
                success: false,
                message: "user not found",
            })
            
        }
        else {
            return res.status(200).json({
            success: true,
            message: "user found",
            data: dataUsers
        })
        }
    }

    catch (error) {
        return res.send(500).json({
            success: false,
            message: "Internal Server error"
        })
    }

});

module.exports = router;
