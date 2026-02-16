import Category from "../models/category.model.js";

export const createCategory = async(req, res) => {
    try{
        const {name, priority} = req.body;

    if((!name || !priority)){
        return res.status(400).json({
            "success": false,
            "message": "name and priority are required"
        })
    }

    await Category.create({
        name : name,
        priority: priority
    })

    res.status(201).json({
        "success" : true,
        "message": "category created"
    })
    }catch(err){
        res.status(500).json({success: false, "message": "Internal Server error"})
    }
}

export const listCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json({success: true, data: categories})
    } catch (err) {
        res.status(500).json({success: false, "message": "internal server error"})
    }
}


export const updateCategory = async (req, res) => {
    try {
        const id = req.params.id

        if(!id){return res.status(400).json({success: false, "message": "bad request"})}
        const data = req.body
        await Category.findByIdAndUpdate(id, req.body)

        res.status(200).json({success: true, "message" : "Category updated"})
    } catch (err) {
        res.status(500).json({success: false, "message": "internal server error"})
    }
}