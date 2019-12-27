//error
import AsyncComponent from '@/utils/asyncComponent'

const ErrorMessageT =AsyncComponent(() => import('@/views/error/ErrorMessageT'))
const ErrorMessageF =AsyncComponent(() => import('@/views/error/ErrorMessageF'))
const ErrorMessage502 =AsyncComponent(() => import('@/views/error/ErrorMessage502'))

const Login =AsyncComponent(() => import('@/views/login'))

const routes = [
    {
        path: '/Login',
        component: Login,
        requiresAuth: false
    },
    {
        path: '/ErrorMessage502',
        name: 'ErrorMessage502',
        component: ErrorMessage502
    },
    {
        path: '/ErrorMessageT',
        name: 'ErrorMessageT',
        component: ErrorMessageT
    },
    {
        path: '/ErrorMessageF',
        name: 'ErrorMessageF',
        component: ErrorMessageF
    }
]

export default routes;
