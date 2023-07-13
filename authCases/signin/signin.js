const signin = async (req, res, next) =>{
    const supabase = req.supabase;
    const {email, password } = req.body;
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });    
        if (error) {throw error;}
        next();
    } catch (error) {
        console.error('Credenciales inválidas: ', error.message);
        res.status(500).json({ error: 'Credenciales inválidas'});
    }

}
export default signin;