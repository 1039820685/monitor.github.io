webpackJsonp([1],{"/icX":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o=n("zL8q"),c=n.n(o),a=(n("tvR6"),n("yh13"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var r=n("VU/8")({name:"App"},a,!1,function(e){n("o8nZ")},null,null).exports,s=n("NYxO"),l=n("//Fk"),d=n.n(l),u=n("mtWM"),m=n.n(u),v={state:{accessToken:"",deviceList:[]},mutations:{SET_AccessToken:function(e,t){e.accessToken=t},SET_DeviceList:function(e,t){setDeviceList(t),e.deviceList=t}},actions:{AccessToken:function(e){var t=e.dispatch,n=e.commit;return new d.a(function(e,i){m()({url:"https://open.ys7.com/api/lapp/token/get",params:{appKey:"22ec17f6452a48b7a6a992c027d7da59",appSecret:"4c4e2fd767513bfef9ca96e9d8ec38c0"},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then(function(i){n("SET_AccessToken",i.data.data.accessToken),t("DeviceList",i.data.data.accessToken),e(i)}).catch(function(e){i(e)})})},DeviceList:function(e,t){e.dispatch;var n=e.commit;return new d.a(function(e,i){m()({url:"https://open.ys7.com/api/lapp/device/list",params:{accessToken:t},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then(function(t){n("SET_DeviceList",t.data.data),e()}).catch(function(e){i(e)})})},ControlCamera:function(e,t){e.dispatch,e.commit;return new d.a(function(e,n){m()({url:"https://open.ys7.com/api/lapp/device/ptz/start",params:{accessToken:t.accessToken,deviceSerial:t.deviceSerial,direction:t.direction,channelNo:t.channelNo,speed:t.speed},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then(function(t){e(t)}).catch(function(e){n(e)})})},StopCamera:function(e,t){var n=e.dispatch;e.commit;return new d.a(function(e,i){m()({url:"https://open.ys7.com/api/lapp/device/ptz/stop",params:{accessToken:t.accessToken,deviceSerial:t.deviceSerial,channelNo:t.channelNo},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"}).then(function(i){12!=t.direction&&n("ControlCamera",t),e(i)}).catch(function(e){i(e)})})}}};i.default.use(s.a);var h=new s.a.Store({modules:{monitor:v}}),p=n("/ocq"),f=n("lulH"),w=n.n(f),y={name:"top-bar",data:function(){return{deviceList:[{id:"c81e36f3c1a84659be1910585baeacb3J03807958",deviceSerial:"J03807958",deviceName:"DS-2DE4223IW-D/GLT/XM(J03807958)",deviceType:"DS-2DE4223IW-D/GLT/XM",status:1,defence:0,deviceVersion:"V5.7.1 build 211015",addTime:1636438446370,updateTime:1659183152e3,parentCategory:"COMMON",riskLevel:0,netAddress:"203.168.21.105"}],deviceSerial:"J03807958",deviceArrayNo:0}},mounted:function(){window.setDeviceList=this.setDeviceList},methods:{setDeviceList:function(e){this.deviceList=e},chooseCamera:function(e){for(var t=0;t<this.deviceList.length;t++)(this.deviceList[t].deviceSerial=e)&&(this.deviceArrayNo=t);this.deviceSerial=e,this.$emit("chooseCamera",e)}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"top-bar"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"设备"}},[n("el-select",{attrs:{placeholder:"选择监控设备设备"},on:{change:function(t){return e.chooseCamera(e.deviceSerial)}},model:{value:e.deviceSerial,callback:function(t){e.deviceSerial=t},expression:"deviceSerial"}},e._l(e.deviceList,function(e,t){return n("el-option",{key:t,attrs:{value:e.deviceSerial}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"在线状态"}},[n("el-tag",{attrs:{type:1===this.deviceList[e.deviceArrayNo].status?"":"danger"}},[e._v("\n        "+e._s(1===this.deviceList[e.deviceArrayNo].status?"在线":"离线")+"\n      ")])],1),e._v(" "),n("el-form-item",{attrs:{label:"设备版本号"}},[n("el-tag",[e._v(e._s(this.deviceList[this.deviceArrayNo].deviceVersion))])],1),e._v(" "),n("el-form-item",{attrs:{label:"风险等级"}},[n("el-tag",{attrs:{type:0===this.deviceList[e.deviceArrayNo].riskLevel?"":"danger"}},[e._v("\n        "+e._s(0===this.deviceList[e.deviceArrayNo].riskLevel?"安全":"危险")+"\n      ")])],1),e._v(" "),n("el-form-item",{attrs:{label:"IP地址"}},[n("el-tag",[e._v(e._s(this.deviceList[e.deviceArrayNo].netAddress))])],1)],1)],1)},staticRenderFns:[]};var T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bottom-button"}},[n("el-row",{attrs:{id:"el-row"}},[n("el-col",[n("el-button",{attrs:{icon:"my-icon-amplification",circle:""},on:{click:function(t){return e.controlCamera(8)}}},[e._v("放大")])],1)],1),e._v(" "),n("el-row",{attrs:{id:"el-row"}},[n("el-col",[n("el-button",{attrs:{icon:"my-icon-left-up",circle:""},on:{click:function(t){return e.controlCamera(4)}}},[e._v("左上")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-up",circle:""},on:{click:function(t){return e.controlCamera(0)}}},[e._v("上")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-right-up",circle:""},on:{click:function(t){return e.controlCamera(6)}}},[e._v("右上")])],1)],1),e._v(" "),n("el-row",{attrs:{id:"el-row"}},[n("el-button",{attrs:{icon:"my-icon-close-focus",circle:""},on:{click:function(t){return e.controlCamera(10)}}},[e._v("近焦")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-left",circle:""},on:{click:function(t){return e.controlCamera(2)}}},[e._v("左")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-stop",circle:""},on:{click:function(t){return e.controlCamera(12)}}},[e._v("停")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-right",circle:""},on:{click:function(t){return e.controlCamera(3)}}},[e._v("右")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-distant-focus",circle:""},on:{click:function(t){return e.controlCamera(11)}}},[e._v("远焦")])],1),e._v(" "),n("el-row",{attrs:{id:"el-row"}},[n("el-col",[n("el-button",{attrs:{icon:"my-icon-left-down",circle:""},on:{click:function(t){return e.controlCamera(5)}}},[e._v("左下")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-down",circle:""},on:{click:function(t){return e.controlCamera(1)}}},[e._v("下")]),e._v(" "),n("el-button",{attrs:{icon:"my-icon-right-down",circle:""},on:{click:function(t){return e.controlCamera(7)}}},[e._v("右下")])],1)],1),e._v(" "),n("el-row",{attrs:{id:"el-row"}},[n("el-col",[n("el-button",{attrs:{icon:"my-icon-scales",circle:""},on:{click:function(t){return e.controlCamera(9)}}},[e._v("缩小")])],1)],1)],1)},staticRenderFns:[]};var k={name:"orchard-monitor",components:{TopBar:n("VU/8")(y,_,!1,function(e){n("wgEH")},"data-v-6c1902fa",null).exports,Bottom:n("VU/8")({name:"bottom",data:function(){return{}},methods:{controlCamera:function(e){this.$emit("controlCamera",e)}}},T,!1,function(e){n("OzMB")},"data-v-e8e42596",null).exports},data:function(){return{player:null,accessToken:"",deviceSerial:"J03807958",play:!1,windowWidth:document.documentElement.clientWidth,windowHeight:document.documentElement.clientHeight}},mounted:function(){this.getAccessToken();var e=this;window.onresize=function(){return window.fullHeight=document.documentElement.clientHeight,window.fullWidth=document.documentElement.clientWidth,e.windowHeight=window.fullHeight,void(e.windowWidth=window.fullWidth)}},beforeDestroy:function(){document.getElementById("video-container").innerHTML=""},watch:{windowHeight:function(e){console.log("实时屏幕高度：",e,this.windowHeight)},windowWidth:function(e){console.log("实时屏幕宽度：",e,this.windowHeight)}},methods:{initPlayer:function(){null===this.player&&(this.player=new w.a.EZUIKitPlayer({id:"video-container",autoplay:!0,accessToken:this.accessToken,url:"ezopen://open.ys7.com/J03807958/1.hd.live",template:"security",splitBasis:4,plugin:["talk"],width:this.windowWidth,height:.5625*this.windowWidth}))},getAccessToken:function(){var e=this;this.$store.dispatch("AccessToken").then(function(t){e.accessToken=t.data.data.accessToken}).then(function(){e.initPlayer()})},chooseCamera:function(e){var t=this;this.deviceSerial=e,this.player.stop().then(function(){t.player.play("ezopen://open.ys7.com/"+e+"/1.hd.live")})},controlCamera:function(e){var t={accessToken:this.accessToken,deviceSerial:this.deviceSerial,channelNo:1,speed:1,direction:e};this.$store.dispatch("StopCamera",t)}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",[t("top-bar",{ref:"topBar",on:{chooseCamera:this.chooseCamera}})],1),this._v(" "),t("div",{attrs:{id:"video-container"}}),this._v(" "),t("div",{staticStyle:{"margin-top":"10px"},attrs:{id:"bottom"}},[t("bottom",{on:{controlCamera:this.controlCamera}})],1)])},staticRenderFns:[]};var C=n("VU/8")(k,b,!1,function(e){n("/icX")},"data-v-1b89ddbd",null).exports;i.default.use(p.a);var g=new p.a({routes:[{path:"/",name:"monitor",component:C}]});i.default.use(c.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:g,store:h,components:{App:r},template:"<App/>"})},OzMB:function(e,t){},o8nZ:function(e,t){},tvR6:function(e,t){},wgEH:function(e,t){},yh13:function(e,t){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"180px"}}},["NHnr"]);
//# sourceMappingURL=app.1da6acd439b456bf200e.js.map