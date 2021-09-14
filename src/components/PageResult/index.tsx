import { defineComponent, PropType } from 'vue'
import { Result, Button } from 'ant-design-vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageResult',
  props: {
    status: String as PropType<
      'error' | 'success' | 'info' | 'warning' | '404' | '403' | '500'
    >,
    title: String,
    subTitle: String,
  },
  setup(props) {
    return () => {
      const {
        status = 'error',
        title = '加载失败，请重新加载',
        subTitle,
      } = props
      const router = useRouter()
      return (
        <Result status={status} title={title} subTitle={subTitle}>
          {{
            extra: () => {
              return (
                <Button
                  type="primary"
                  onClick={() => {
                    router.go(0)
                  }}
                >
                  刷新
                </Button>
              )
            },
          }}
        </Result>
      )
    }
  },
})
