<template>
    <div class="thread-section">
      <div class="thread-count"><span v-show="unreadCount">Unread threads: {{ unreadCount }}</span></div>
      <ul class="thread-list">        <!--il v-for="thread in threads" :key="thread.id" >{{ thread.id  }}</il-->
        
        <thread 
          v-for="thread in threads" :key="thread.id" :thread="thread" 
          :active="thread.id === currentThread.id"  
          @switch-thread="switchThread">
        </thread>

      </ul>
    </div>
</template>
  
<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import Thread from './Thread.vue'
  
  export default {
    name: 'ThreadSection',
    components: { Thread },
    setup () {
      //
      const store = useStore()

      //
      const threads       = computed(() => store.getters.thds )
      const currentThread = computed(() => store.getters.cthd )
      const unreadCount   = computed(() => store.getters.urct)
      const switchThread  = (id) => store.dispatch('switchThread', id)

      //
      return { threads, currentThread, unreadCount, switchThread }
    }
  }
</script>