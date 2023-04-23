import { createStore } from 'vuex'
//remeber to replace localhost with render api link
export default createStore({
  state: {
    wsj: null,
    techCrunch: null,
    USBusiness: null,
  },
  getters: {
    wsj(state){
      return state.wsj
    },
    techCrunch(state){
      return state.techCrunch
    },
    USBusiness(state){
      return state.USBusiness
    },
  },
  mutations: {
 setWSJ(state, wsj){
  state.wsj = wsj;
 },
 setTechCrunch(state, techCrunch){
  state.techCrunch = techCrunch
 },
 setUSBusiness(state, USBusiness){
  state.USBusiness = USBusiness
 },
  },
  actions: {
     fetchWSJ(content){
      return fetch('http://localhost:3500/wsj').then((response) => response.json()).then((wsj) => {
        content.commit("setWSJ", wsj.articles)
      }).catch((err) => {
        console.warn(err);
      })
    },
 fetchUSBusiness(content){
  return fetch('http://localhost:3500/usbusiness').then((response)=> response.json()).then((usBusiness) => {
    content.commit("setUSBusiness", usBusiness.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
 fetchTechCrunch(content){
  return fetch('http://localhost:3500/tech-crunch').then((response) => response.json()).then((techCrunch) => {
    content.commit("setTechCrunch", techCrunch.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
  },
  modules: {
  }
})
