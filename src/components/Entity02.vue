<template>
  <div @click="clickEntity3()">
    <li :class="[ view.c_view, {active}]">
    <h5 :class="view.c_title">{{ view.title }}</h5>
    <div :class="view.c_time">{{ view.time }}</div>
    <div :class="view.c_text">{{ view.text }}</div>      
  </li>  
  </div>
</template>
  
  <script>

  export default {
    name: 'Entity02',
    props: { thread: Object, active: Boolean, view: Object },
    setup: (props) =>({ view: props.view, clickEntity3: props.view.clickEntity? props.view.clickEntity : ()=>null })
  }
  </script>
