import supabase from "../../database/supabase.js";

const googlecallback = async (req, res) =>{
 
    const { method, headers, query, body, params } = req;

    const callbackUrl = req.originalUrl;
    const fragment = callbackUrl.substring(callbackUrl.indexOf("#") + 1);
    const queryParams = new URLSearchParams(fragment);
  
    const access_token = queryParams.get("access_token");
    const expires_in = queryParams.get("expires_in");
    const refresh_token = queryParams.get("refresh_token");
    const provider_token = queryParams.get("provider_token");

    res.json({
        access_token,
        expires_in,
        refresh_token,
        provider_token,
        method,
        headers,
        query,
        body,
        params
    })
}

export default googlecallback;