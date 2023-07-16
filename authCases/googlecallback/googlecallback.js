import supabase from "../../database/supabase.js";

const googlecallback = async (req, res) =>{

    const fragment = window.location.hash.substr(1); // Obtén el fragmento de la URL después del símbolo '#'
    const queryParams = new URLSearchParams(fragment);
    
    const accessTokenValue = queryParams.get("access_token");
    const expiresIn = queryParams.get("expires_in");
    const refreshToken = queryParams.get("refresh_token");
    const providerToken = queryParams.get("provider_token");

res.json({
    queryParams,
    accessTokenValue,
    expiresIn,
    refreshToken,
    providerToken
});

}

export default googlecallback;