// 根据后台数据筛选出路由表
export function recursionRouter (userRouter = [], allRouter = []) {
  const realRoutes = allRouter
    .filter(item => userRouter.includes(item.pathName))
    .map(item => ({
      ...item,
      children: item.children
        ? recursionRouter(userRouter, item.children)
        : null
    }))
  return realRoutes
}

// 重定向到children的第一个路由
export function recursionRouterTwo (userRouter = [], allRouter = []) {
  const realRoutes = allRouter
    .filter(item => userRouter.includes(item.path))
    .map(item => {
      return {
        ...item,
        redirect: item.children ? item.children[0].path : null,
        children: item.children
          ? recursionRouterTwo(userRouter, item.children)
          : null
      }
    })
  return realRoutes
}

export function recursionRouterThree (userRouter = [], allRouter = []) {
  const list = []
  allRouter.forEach((item, index) => {
    if (item.path === userRouter[0]) {
      list.push(item)
    }
  })
  return list
}
