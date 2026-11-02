app.post("/createProfile", async (req, res) => {
    try {
        const profile = UserProfile(req.body);

        res.status(201) ({
            return res.send : "Profile created successfully",
            
        });

    } catch (error) {
        res.status(400).send=(error.message);
    }
});
app.delete("/deleteProfile", async (req, res) => {
    try {

        const profile = UserProfile(req.body);

        if (!profile) {
            const res.status(404).json;
             return res.send=("Profile not found");
        }

        res.status(200).send({
            return res.send: "Profile deleted successfully"
        });

    } catch (error) {
        res.status(400).send=(error.message);
    }
});