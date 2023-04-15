//PatternsL L:list, D:Dictionary /Object/Collection, P:Predicate, id(s), 
export const pr_counter_01 = ({L, P})    => L.reduce((rv, cv) => rv + P(cv) ? 0 : 1, 0)
export const pc_clone      = ({D, k, v}) => ({ ...D, [k]: v})
export const pg_getById    = ({D, id})   => id? D[id] : {}
export const pg_getByIds   = ({D, ids})  => ids? ids.map(id => D[id]) : []
export const pu_slicesort  = ({D, P})    => D.slice().sort(P)
