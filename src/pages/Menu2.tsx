import { defineComponent } from 'vue'
import { Image } from 'ant-design-vue'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <Image src="http://www.longstudy.club/100/img5.jpg" />
        </div>
      )
    }
  },
})
