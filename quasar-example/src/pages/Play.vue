<template name="component-name">
  <q-page padding>
    <div class="row q-gutter-lg">
      <div class="col">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore neque quibusdam, esse vitae fugiat, repellendus odio veniam omnis reiciendis, accusamus cupiditate itaque iure dolore quaerat reprehenderit quas eos quasi. Optio.
        <div>
          <q-btn color="teal" @click="showLoading" label="Show Loading" />
          <q-btn color = 'primary' label = 'Primary' @click = 'handleClick'/>
          <q-input outlined v-model="text" label="姓名:" />
          <q-input outlined v-model="email" label="邮箱：" />
        </div>
        <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
        </p>
      </div>
      <div class="col">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore neque quibusdam, esse vitae fugiat, repellendus odio veniam omnis reiciendis, accusamus cupiditate itaque iure dolore quaerat reprehenderit quas eos quasi. Optio.
      </div>
   </div>

   <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
     <q-btn fab icon="keyboard_arrow_up" color="accent" />
   </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      email: ''
    }
  },
  methods: {
    handleClick () {
      this.text = 'Jordan';
      this.email = 'jordan@qq.com'
    },
    showLoading () {
      this.$q.loading.show({
        message: 'Some important <b>process</b> is in progress.<br/><span class="text-primary">Hang on...</span>'
      })
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 3000)
    }
  }
}
</script>