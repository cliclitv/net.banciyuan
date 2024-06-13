import { useState } from 'fre'
import { A, push } from '../use-route'
import { post } from '../util/post'
import './login.css'

export default function Login() {
    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")

    function changeName(v) {
        setName(v)
    }

    function changePwd(v) {
        setPwd(v)
    }

    function login() {
        post("https://www.ichushou.com/user/login", { name, pwd }).then((res: any) => {
            if (res.code === 200) {
                window.localStorage.setItem('token', res.token)
                window.localStorage.setItem('user', JSON.stringify(res.user))
                window.location.href = '/'
            } else {
                alert(res.msg)
            }
        })
    }
    return <div className=" section">
        <div class="login">
            <div className="header">
                <li><h1>登录</h1></li>
            </div>
            <li><input type="text" placeholder="昵称" onInput={(e) => changeName(e.target.value)} /></li>
            <li><input type="password" placeholder="密码" onInput={(e) => changePwd(e.target.value)} /></li>
            <li><button onClick={login}>登录</button></li>
            <li><A href="/register">注册</A></li>
        </div>
    </div>
}
