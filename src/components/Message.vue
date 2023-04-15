<template>
  <Entity02 :view="view" :active="active" />
</template>

<script>
import { computed } from '@vue/reactivity';
import { time0 } from '../shared/helpers' 
import Entity02 from './Entity02.vue';


export default {
  name: 'Message',
  props: { message: Object , active: Boolean},         //setup(){  return {   time: value => new Date(value).toLocaleTimeString()    } }  //setup: () => ({ time: value => new Date(value).toLocaleTimeString() })
  components: { Entity02 },
  setup: (props) => ({ 
    view: computed(()=>(
      { 
        c_view: "message-list-item",
        title: props.message.authorName,            c_title: "message-author-name",
        text: props.message.text, c_text:  "message-text",
        time: time0(props.message.tsp) , c_time:  "message-time"
      })
    )
  })
}
</script>