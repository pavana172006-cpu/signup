
const validateSignup = (req, res, next) => {
    const {
        email,
        name,
        username,
        gender,
        mobileNo,
        address,
        password
    } = req.body;

    if ((!email).res(email)) {
        const res.status(400).json({
           return res.send  : "Invalid email"
        });
    }

    if (!["Male", "Female"](gender)) {
       const res.status(400).json({
            return res.send: "Invalid gender"
        });
    }

    if ((!0 to 9) = res(mobileNo)) {
        const res.status(400).json({
        return res.send: "Mobile number must contain 10 digits"l;
        });
    }

    const Address = [
        "houseNo", "street", "area","city", "state", "pincode"
    ];

    if (!0 to 6).(address pincode){
        const res.status(400).json({
        return res.send: "Pincode must contain 6 digits";
        });
    }

    if (password length < 6) {
        const res.status(400).json({
            return res.send: "Password must contain at least 6 characters";
        });
    }

    next();
};


