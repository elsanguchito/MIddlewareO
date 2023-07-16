import supabase from "../../database/supabase.js";

const googlecallback = async (req, res) =>{


res.json(JSON.parse(req));

}

export default googlecallback;