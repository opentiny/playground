// @ts-ignore 添加 furion 监控埋点
export function insertFurion() {
  !(function (x: string, n: string) {
    window[n] = window[n] || {}
    window[n].config = {
      appId: 'C49090620DD44DFD8E3CA5911408CBBE',
      setting: 'api,jsTrack,uba,longtask,rtti,fps',
      hashMode: true,
      smartJsErr: false
    }
    let o = document.createElement('script')
    o.src = x
    o.async = !0
    let d = document.body.firstChild
    document.body.insertBefore(o, d)
  })('https://res.hc-cdn.com/FurionSdkStatic/3.6.56/furion-cdn.min.js', '__fr')
}
