import { RouteObject } from "react-router-dom";
/*
import Login from '../pages/Login';
import Home from '../pages/Home';
import AppLayout from '../pages/AppLayout';
import User from '../pages/User';
import Detail from '../pages/Detail';
*/
//懒加载配置
import { lazy, ReactNode, Suspense } from "react";
// const AppLayout = lazy(() => import("../pages/AppLayout"))
import AppLayout from '../pages/AppLayout';//父组件不使用懒加载，防止闪屏
const Login = lazy(() => import("../pages/Login"))
const Home = lazy(() => import("../pages/Home"))
const User = lazy(() => import("../pages/User"))
const Detail = lazy(() => import("../pages/Detail"))

//启用懒加载配置
const lazyload = (Children: ReactNode) : ReactNode => {
    return <Suspense fallback={<>loading</>}>
        {Children}
    </Suspense>
}

//集中式路由管理
const router: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: lazyload(<Home />)
            },
            {
                path: "/user",
                element: lazyload(<User />)
            },
            {
                path: "/user/detail/:id",
                element: lazyload(<Detail />)
            }
        ]
    },
    {
        path: "/login",
        element: lazyload(<Login />)
    }
]

export default router;