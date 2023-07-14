import encodeToken from "../encodeToken.js";

const signin = async (req, res) =>{
    const supabase = req.supabase;
    const secret = process.env.SECRET_PASSWORD;

    const {email, password } = req.body;
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });    
        if (error) {throw error;}
        const token = encodeToken({
            "id": data.user.id,
            "email": data.user.email
        }, secret);
        res.json({token});

    } catch (error) {
        console.error('Credenciales inválidas: ', error.message);
        res.status(500).json({ error: 'Credenciales inválidas', message: error.message});
    }

}
export default signin;