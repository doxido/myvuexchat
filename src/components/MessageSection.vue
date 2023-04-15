<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.nm }}</h3>
    <ul class="message-list" ref="list">
      
      <message 
        v-for="message in messages" :key="message.id" :message="message">
      </message>

    </ul>
    <textarea class="message-composer" v-model="text" @keyup.enter="sendMessage"></textarea>
  </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
import Message from './Message.vue'

export default {
  name: 'MessageSection',
  components: { Message },

  setup () {
    //
    const store     = useStore()

    //
    const list      = ref(null); 
    const text = ref('')
    const thread    = computed(() => store.getters.cthd)
    const messages  = computed(() => store.getters.smgs)

    //
    function sendMessage () {
      const trimedText = text.value.trim()
      if (trimedText) {
        console.log(thread.value.id)
        store.dispatch('sendMessage', { text: trimedText, thread: thread.value })
        this.text = ''
      }
    }

    //??????
    watch(() => thread.value.lmg, () => { nextTick(() => { const ul = list.value; ul.scrollTop = ul.scrollHeight })})

    //
    return { list, text,  thread,  messages, sendMessage }
  }
}
</script>