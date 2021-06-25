const express = require('express')

const router = express.Router();

var user = require('../data/users');

router.put('/update/:id', async (req, res, next) => {
    try {
        
        var id = req.params.id
        var dataUsers = user.users.filter( obj => obj.id == id);
        if (!dataUsers || !dataUsers.length) {

            return res.status(404).json({
                success: false,
                message: "user not found",
            })
            
        }
        else {
            var replacedUser = user.replaceUserData(req.body,id)   
            return res.status(200).json({
            success: true,
            message: "user updated",
            data: replacedUser
        })
        }
    }

    catch (error) {
        return res.sendStatus(500).json({
            success: false,
            message: "Internal Server error"
        })
    }

});

module.exports = router;
