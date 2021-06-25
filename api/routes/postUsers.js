const express = require('express')

var user = require('../data/users');

const router = express.Router();

const details = {
    id: "iiii0909",
    lastName: "Jobs",
    firstName: "Steve",
    email: "steveJobs@example.com",
    title: "mr",
    picture: "https://randomuser.me/api/portraits/men/92.jpg"
}

router.post('/add',async (req, res, next) => {
    try {
        user.addUserData(req.body);

        return res.status(200).json({
            success: true,
            message: "User added",
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
});

module.exports = router;
