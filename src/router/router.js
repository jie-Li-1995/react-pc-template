//error
import AsyncComponent from '@/utils/asyncComponent'
// login
const Login =AsyncComponent(() => import('@/views/login'))
const layout =AsyncComponent(() => import('@/components/layout'))
// admininstration
const admininstration =AsyncComponent(() => import('@/views/admininstration'))
const loginLog =AsyncComponent(() => import('@/views/admininstration/loginLog'))
const systemSetting =AsyncComponent(() => import('@/views/admininstration/systemSetting'))
// admininstration
const partsInfoManagment =AsyncComponent(() => import('@/views/partsInfoManagment'))
const partsList =AsyncComponent(() => import('@/views/partsInfoManagment/partsList'))
const vehicleList =AsyncComponent(() => import('@/views/partsInfoManagment/vehicleList'))
// error
const ErrorMessageT =AsyncComponent(() => import('@/views/error/ErrorMessageT'))
const ErrorMessageF =AsyncComponent(() => import('@/views/error/ErrorMessageF'))
const ErrorMessage502 =AsyncComponent(() => import('@/views/error/ErrorMessage502'))

const routes = [
    {
        path: 'login',
        exact: true,
        component: Login
    },
    {
        path: 'main',
        component: layout,
        children: [
            {
                path: 'admininstration',
                component: admininstration,
                children: [
                    {
                        path: 'loginLog',
                        component: loginLog
                    },
                    {
                        path: 'systemSetting',
                        component: systemSetting
                    },
                ]
            },
            {
                path: 'partsInfoManagment',
                component: partsInfoManagment,
                children: [
                    {
                        path: 'partsList',
                        component: partsList
                    },
                    {
                        path: 'vehicleList',
                        component: vehicleList
                    },
                ]
            }
        ]
    },
    {
        path: 'ErrorMessage502',
        component: ErrorMessage502
    },
    {
        path: 'ErrorMessageT',
        component: ErrorMessageT
    },
    {
        path: 'ErrorMessageF',
        componentName: ErrorMessageF
    }
]

export default routes;
