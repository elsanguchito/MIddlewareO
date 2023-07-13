const getUsers = async (req, res) => {
    const supabase = req.supabase;
    try {
        const {data, error} = await supabase.from('user').select('*');
        if (error) {
            throw error;
        }
        res.json(data);
    } catch (error) {
        console.error('Error fetching users: ', error.message);
        res.status(500).json({error: 'Error fetching users'});
    }
}
export default getUsers;