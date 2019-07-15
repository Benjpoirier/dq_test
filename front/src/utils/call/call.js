export default async (url, options) => {
    try {
        const response = await fetch(CONFIG.api + '/' + url, options);
        if (response.status === 200) {
            const result = await response.json();
            return result.data;
        }
    } catch (error) {
        console.log(error); // notif
    }
};
