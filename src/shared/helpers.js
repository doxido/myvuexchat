import * as ptr from './patterns'

//
export const time0 = value => new Date(value).toLocaleTimeString()


//
export const hlp_receiveMessage = (thds, ctid, msg, msgs={}) => {    // add a `isRead` field before adding the message
  console.log(msg)
    const thrd = thds[msg.thid]   //console.log(thrd.msgs)
    if(!thrd.msgs.some(id => id === msg.id)) { thrd.msgs.push(msg.id); thrd.lmg = msg }      // add it to the messages map
    msg.isRd = msg.thid === ctid
  
    const msgs0 = ptr.pc_clone({ D: msgs, k: msg.id, v: msg })  //{ ...st.msgs, [msg.id]: msg }
    return msgs0
  }
  
//
export const hlp_extract_infos_from_msgs = (msgs, st_ctid) => 
    msgs.reduce((rd, cv) => {
      const msg = cv; 
      let  { lmg, cthds, cmsgs } = rd
      if (!cthds[msg.thid]) cthds = ptr.pc_clone({ D: cthds, k: msg.thid, v: { id: msg.thid, nm: msg.thnm, msgs: [], lmg: null }}) // { ...cthds, [msg.thid]: { id: msg.thid, nm: msg.thnm, msgs: [], lmg: null }}}
      if (!lmg || msg.tsp > lmg.tsp) lmg = msg
      cmsgs = hlp_receiveMessage(cthds, st_ctid, msg, cmsgs)        //cmsgs = pc_clone({ D: cmsgs, k: msg.id, v: msg }) // { ...cmsgs, [msg.id]: msg }
      return { lmg, cthds, cmsgs } 
      },  
      { lmg:null, cthds:{}, cmsgs:{} })
  
/*
  //
  const hlp_mu_switchThread_commit = (st, id) => {
    st.ctid = id; if (!st.thds[id]) { debugger }
    st.thds[id].lmg.isRd = true
  }
  */
  