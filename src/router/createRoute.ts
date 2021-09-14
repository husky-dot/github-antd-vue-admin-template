// import { RouteRecordMenu } from '@/components/AdminLayout'
import {
  AsyncComponentLoader,
  AsyncComponentOptions,
  defineAsyncComponent,
  h,
} from 'vue'
import { createRouter as vueCreateRouter, RouterOptions } from 'vue-router'
import PageLoading from '@/components/PageLoading'
import PageResult from '@/components/PageResult'

/**
 *
 * @param routerOptions vue createRouter 的参数
 * @param asyncComponentOptions 异步组件配置参数
 * @returns
 */

export default function createRouter(
  routerOptions: RouterOptions,
  {
    loadingComponent = PageLoading,
    errorComponent = PageResult,
    delay = 200,
    timeout = 10000,
    suspensible = false,
    onError,
  }: Omit<AsyncComponentOptions, 'loader'> = {}
) {
  const treedRoutes = (childrenRoutes: any[]) => {
    return childrenRoutes.map((childrenRoute: any) => {
      if (childrenRoute.children) {
        childrenRoute.children = treedRoutes(childrenRoute.children)
      } else {
        if (typeof childrenRoute.component === 'function') {
          childrenRoute.component = defineAsyncComponent({
            loader: childrenRoute.component as AsyncComponentLoader,
            loadingComponent,
            errorComponent,
            delay,
            timeout,
            suspensible,
            onError,
          })
        }
      }
      return childrenRoute
    })
  }
  treedRoutes(routerOptions.routes)
  return vueCreateRouter(routerOptions)
}

// 命名元组类型(Labeled tuple types)

interface Address {
  age: string
}

function setAddress(args: Address) {
  // some code here
  console.log(args)
}
