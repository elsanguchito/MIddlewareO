import supabase from "../../database/supabase.js";

const googlecallback = async (req, res) =>{
 
    const { params } = req;


    res.json({
        params
    })
}

export default googlecallback;