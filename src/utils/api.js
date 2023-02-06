import request from "./Request.js";
// 获取音乐 url
const getSongUrl = async (id) => {
    let result = await request.get(`/song/url?id=${id}`);
    if (result.code === 200) {
        return result.data;
    }
    return null;
}
// 刷新登录状态
const refreshLogin = async () => {
    let result = await request(`/login/refresh`);
    console.log(result)
}
const api = {
    getSongUrl,
    refreshLogin
}
export default api;