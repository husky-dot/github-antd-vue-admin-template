import { defineComponent } from 'vue'
import './index.css'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="body">
          <div class="container">
            <div class="box">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <h2>Loading...</h2>
          </div>
        </div>
      )
    }
  },
})
