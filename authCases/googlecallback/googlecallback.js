import supabase from "../../database/supabase.js";

const googlecallback = async (req, res) =>{

const {error, session} = await supabase.auth.getSession(req.query.access_token);

if(error){
    return res.status(500).json({error: error.message});
}

console.log(req.query)
console.log(session);

res.json(session);

}

export default googlecallback;