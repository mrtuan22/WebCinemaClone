import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userLoginActionFunc } from '../../redux/actions/UserAction';
import * as Yup from 'yup';

const Login = (props) => {
    const dispatch = useDispatch();
    //Validate đang lỗi, để sửa sau
    // const validationSchema = Yup.object().shape({
    //     taiKhoan: Yup.string("Tài khoản chỉ được chứa ký tự chuỗi!").required("Không được để trống!").min(5, "Tài khoản phải lớn hơn 5 ký tự!"),
    //     matKhau: Yup.required("Mật khẩu không được trống!").min(5, "Phải lớn hơn 5 ký tự!")
    // });
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: ""
        },
        onSubmit: values => {
            console.log("Values Formik: ", values)
            dispatch(userLoginActionFunc(values));
        },

    })
    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm" >
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" />
                    </div>
                    <div className="text-2xl text-red-500 tracking-wide ml-2 font-semibold"></div>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-red-600 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Log in</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tên đăng nhập: </div>
                            <input name="taiKhoan" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500" placeholder="Nhập tài khoản" onChange={formik.handleChange} />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu:
                                </div>
                                <div>
                                    <a className="text-xs font-display font-semibold text-red-600 hover:text-red-800
                                  cursor-pointer">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <input name="matKhau" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500" type="password" placeholder="Nhập mật khẩu" onChange={formik.handleChange} />
                        </div>
                        <div className="mt-10">
                            <button className="bg-red-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600
                          shadow-lg">
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Bạn chưa có tài khoản? <a className="cursor-pointer text-red-600 hover:text-red-800">Đăng ký</a>
                    </div>
                </div>
            </div>
        </form >
    );
}

export default Login;