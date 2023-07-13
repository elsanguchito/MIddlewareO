const postUser = async (req, res) =>{
    const supabase = req.supabase;
    const { email } = req.body;
    const userData = { email: email};
    try {
    const { data, error } = await supabase.from('user').insert([userData]);

    if (error) {
        throw error;
    }

    res.json(data);
    } catch (error) {
    console.error('Error saving user: ', error.message);
    res.status(500).json({ error: 'Error saving user' });
    }
}
export default postUser;