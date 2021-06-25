const express = require('express')

const router = express.Router();

const users= require('../data/users')

router.get('/all', async (req, res, next) => {
    try {
        if (!users || !users.users.length) {

            return res.status(404).json({
                success: false,
                message: "users not found",
            })
            
        }
        else {
            return res.status(200).json({
            success: true,
            message: "users found",
            data: users.users
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
