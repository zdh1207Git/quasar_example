<template>
  <q-page>
    <div class="q-mt-xs">
    <q-spinner v-if = 'loading' color = 'primary' size = '3em'/>
      <q-list v-else bordered>
      <q-item clickable 
        v-ripple 
        v-for = "post in posts" 
        :key = post.data.id
        @click = showImage(post.data.preview.images[0].source.url)
       >
        <q-item-section avatar>
          <q-avatar>
            <img :src = "post.data.thumbnail"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>{{post.data.title}}</q-item-section>
      </q-item>
     </q-list>
     <q-dialog full-width v-model="showImageDialog">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Image</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
          <q-img
            :src="imageUrl"
            spinner-color="blue"
          />
        <q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      loading: true, 
      showImageDialog: false,
      imageUrl: ''
    }
  },
  computed: {
    posts() {
      return this.$store.posts
    }
  },

  methods: {
    fetchData() {
      this.$axios.get('https://www.reddit.com/r/aww.json?raw_json=1')
      .then(res=> {
        this.loading = false;
        this.$store.posts = res.data.data.children
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      })
    },
    showImage(image) {
      this.showImageDialog = true;
      this.imageUrl = image
    }
  },
  created () {
    this.fetchData();
  }
}
</script>
