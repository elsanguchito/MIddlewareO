import encodeToken from "../encodeToken.js";

const signup = async (req, res) =>{
    const supabase = req.supabase;
    const secret = process.env.SECRET_PASSWORD;

    const {email, password} = req.body;
    try {
        const { data, error } = await supabase.auth.signUp({email, password});    
        if (error) {throw error;}
        const user = {
            id: data.user.id, 
            email: data.user.email
        };
        try {
            const { data, error } = await supabase.from('user').insert({
                id: user.id, 
                email: user.email
            }); 
            if (error) {throw error;}    
            const token = encodeToken({userId: user.id}, secret);
            res.json({token});    
        } catch (error) {
            console.error('Error saving user: ', error.message);
            res.status(500).json({ error: 'Error saving user' });
        }    
    } catch (error) {
        console.error('Error saving signUp: ', error.message);
        res.status(500).json({ error: 'Error saving signUp' });
    }
    
}

export default signup;