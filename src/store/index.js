import { createStore, createLogger } from 'vuex'   //import * as getters from './getters' //import * as actions from './actions'  //import mutations from './mutations'
import * as api from '../api'             
import * as ptr from '../shared/patterns'             //Patterns
import * as hlp from '../shared/helpers'              //Helpers

//ctid: currentThreadID, thds: threads; msgs: messages, cthd: currentThread, cmgs: currentMessages, urct: unreadCount, smgs: sortedMessages
export default createStore({
  //STATE
  state: { ctid: null, thds: {}, msgs: {} },

  //GETTERS
  getters: {
    thds: st            => st.thds,
    cthd: st            => ptr.pg_getById({ D:st.thds, id:st.ctid }),                                //st.ctid? st.thds[st.ctid] : {},
    cmgs: (st, getters) => ptr.pg_getByIds({ D:st.msgs, ids:getters.cthd.msgs }),                    //getters.cthd.msgs? getters.cthd.msgs.map(id => st.msgs[id]) : [],
    smgs: (st, getters) => ptr.pu_slicesort({ D:getters.cmgs, P:(a, b) => a.tsp - b.tsp }),          //getters.cmgs.slice().sort((a, b) => a.tsp - b.tsp),

    urct: ({ thds })    => ptr.pr_counter_01({ L: Object.keys(thds), P: id => thds[id].lmg.isRd } )  //Object.keys(thds).reduce((c, id) => c + thds[id].lmg.isRd ? 0 : 1, 0)
  },

  //MUTATIONS
  mutations: {
    receiveAll: (st, msgs) => {
      const { lmg, cthds, cmsgs } = hlp.hlp_extract_infos_from_msgs(msgs, st.ctid)
      
      st.thds = { ...st.thds, ...cthds }
      st.msgs = { ...st.msgs, ...cmsgs }
      st.ctid = lmg.thid; if (!st.thds[lmg.thid]) { debugger }
      st.thds[lmg.thid].lmg.isRd = true                                                              //hlp_mu_switchThread_commit(st, lmg.thid)
    },

    //
    receiveMessage: (st, msg) => {
      console.log(msg)
      st.msgs = hlp.hlp_receiveMessage(st.thds, st.ctid, msg, st.msgs)                              //st.msgs = pc_clone({ D: st.msgs, k: msg.id, v: msg })  //{ ...st.msgs, [msg.id]: msg }
    },

    //
    switchThread: (st, id) => { 
      st.ctid = id; if (!st.thds[id]) { debugger }
      st.thds[id].lmg.isRd = true
    }     //hlp_mu_switchThread_commit(st, id),
  },

  //ACTIONS
  actions: {
    getAllMessages: ({ commit })        => { api.getAllMessages(msgs => { commit('receiveAll', msgs) }) },
    sendMessage   : ({ commit }, pyld)  => { api.createMessage(pyld, msg => { commit('receiveMessage', msg) }) },
    switchThread  : ({ commit }, pyld)  => { commit('switchThread', pyld) },
    initialize    : ({ dispatch})       => dispatch('getAllMessages')
  },

  //PLUGINS
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
//===============================================
