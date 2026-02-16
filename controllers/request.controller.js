import Request from "../models/request.model.js";

export const createRequest = async (req, res) => {
    try {
        const { category_id, title, description } = req.body;
        if (!category_id || !title || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        await Request.create({
            category_id: category_id,
            title: title,
            description: description,
        });

        // console.log("lsjfslkfjslkfjlksjfslkdfjlsdf");
        res.status(201).json({ success: true, message: "Request created" });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
