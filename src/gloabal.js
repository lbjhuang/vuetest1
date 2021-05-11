//全局的公共方法和常量
export const API_BASE_URL = 'http://testErp.com'

function commonFun() {
    console.log("公共方法")

}

//导出
export default {
    API_BASE_URL,
    commonFun
}
