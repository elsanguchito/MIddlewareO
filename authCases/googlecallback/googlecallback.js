import supabase from "../../database/supabase.js";

const googlecallback = async (req, res) =>{
    const accessToken = req.originalUrl.split("#access_token=")[1];
    const queryParams = new URLSearchParams(accessToken);
    const accessTokenValue = queryParams.get("access_token");
    const expiresIn = queryParams.get("expires_in");
    const refreshToken = queryParams.get("refresh_token");
    const providerToken = queryParams.get("provider_token");

res.json({
    accessToken,
    queryParams,
    accessTokenValue,
    expiresIn,
    refreshToken,
    providerToken
});

}

export default googlecallback;