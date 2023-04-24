import { createStore } from 'vuex'
//remeber to replace localhost with render api link
export default createStore({
  state: {
    wsj: null,
    bitcoinNews: null,
    USBusiness: null,
    allNews: null,
  },
  getters: {
    wsj(state){
      return state.wsj
    },
    bitcoinNews(state){
      return state.bitcoinNews
    },
    USBusiness(state){
      return state.USBusiness
    },
    allNews(state){
      return state.allNews
    },
  },
  mutations: {
 setWSJ(state, wsj){
  state.wsj = wsj;
 },
 setBitcoinNews(state, bitcoinNews){
  state.bitcoinNews = bitcoinNews
 },
 setUSBusiness(state, USBusiness){
  state.USBusiness = USBusiness
 },
 setAllNews(state, allNews){
  state.allNews = allNews
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
 fetchBitcoinNews(content){
  return fetch('http://localhost:3500/bitcoin').then((response) => response.json()).then((bitcoinNews) => {
    content.commit("setBitcoinNews", bitcoinNews.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
 fetchAllNews(content){
  return fetch('http://localhost:3500/allnews').then((response) => response.json()).then((allNews) => {
    content.commit("setAllNews", allNews.articles)
  }).catch((err)=> {
    console.warn(err)
  })
 },
  },
  modules: {
  }
})
