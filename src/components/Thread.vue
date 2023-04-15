<template>  <!--div @click="view.clickEntity()"-->
    <Entity02 :view="view" :active="active" />  <!--/div-->
</template>
  
  <script>
  import { computed } from '@vue/reactivity';
  import { time0 } from '../shared/helpers' 
  import Entity02 from './Entity02.vue';

  export default {
    name: 'Thread',
    props: { thread: Object, active: Boolean },
    components: { Entity02 },
    setup: (props, { emit })=>({ 
      view: computed(()=>(
      { 
        c_view: "thread-list-item",
        title: props.thread.nm,            c_title: "thread-name",
        text:  props.thread.lmg.text,       c_text:  "thread-last-message",
        time:  time0(props.thread.lmg.tsp), c_time:  "thread-time",
        clickEntity: () => emit('switch-thread', props.thread.id)
      })
    )})
  }
  </script>
