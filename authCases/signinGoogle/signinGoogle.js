import supabase from "../../database/supabase.js";

const signinGoogle = async (req, res) =>{

    const redirectUrl = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'https://middlewareoveronce.vercel.app/'
        }
    });
    res.json({url: redirectUrl.data.url});
}
export default signinGoogle;