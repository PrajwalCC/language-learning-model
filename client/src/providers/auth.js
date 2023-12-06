// export const auth = () => {
//     const who = localStorage.getItem("who");  // fetching the jwt auth token
//     if (!who)
//         return false;
//     const token = JSON.parse(who);
//     let data = {};
//     data.token = token;
//     const headers = {
//         'Authorization': `Bearer ${data.token}`,
//         'Content-Type': 'application/json'
//     };
//     return { headers, data }
// }
export const auth = async () => {
    const who = await localStorage.getItem("who");  // fetching the jwt auth token
    if (!who) {
        return null;
    }

    try {
        const token =await JSON.parse(who);
        if (!token) {
            return null; // Handle invalid or missing token
        }
        
        let data = {};
        data.token = token;
        const headers = {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json'
        };
        return { headers, data };
    } catch (error) {
        console.error('Error parsing token:', error);
        return null; // Handle parsing error
    }
}
