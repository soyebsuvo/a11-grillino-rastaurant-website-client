import axios from "axios"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const axiosSecure = axios.create();
export default function useAxiosSecure() {
    const { logOut } = useContext(AuthContext)
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            if (err.response.status === 401 || err.response.status === 403) {
                logOut()
                    .then(() => { })
                    .catch(err => {
                        console.log(err)
                    })
            }
            console.log(err)
        })
    }, [logOut])
    return axiosSecure
}
