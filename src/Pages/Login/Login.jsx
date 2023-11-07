/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import LoginButton from "../../components/Navbar/LoginButton";
import MyTextField from "./MyTextField";
import loginImage from '../../assets/loginImage.jpg'

export default function Login() {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <h1 className="text-5xl font-bold text-center my-4">Login now!</h1>
                        <form className="">
                            <div className="form-control">

                                <MyTextField
                                    type="email"
                                    label="email"
                                    name="email"
                                >
                                </MyTextField>
                            </div>
                            <div className="form-control my-4">

                                <MyTextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                >
                                </MyTextField>
                                <label className="label">
                                    <a className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <LoginButton className="btn bg-orange-400">Login</LoginButton>
                            </div>
                        </form>
                        <p className="text-center font-semibold">Don't Have Any Account? Please <Link className="text-blue-700 font-bold" to='/register'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
