(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{NmCX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"renderToDom",(function(){return m}));var a=n("q1tI"),l=n("i8i4"),i=n("+qjn");function r(){return a.createElement("div",{className:"control-panel"},a.createElement("h3",null,"Highlight Features Containing Similar Data"),a.createElement("p",null,"Hover over counties to highlight counties that share the same name."),a.createElement("div",{className:"source-link"},a.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/6.1-release/examples/filter",target:"_new"},"View Code ↗")))}var o=a.memo(r),c={id:"counties",type:"fill","source-layer":"original",paint:{"fill-outline-color":"rgba(0,0,0,0.1)","fill-color":"rgba(0,0,0,0.1)"}},u={id:"counties-highlighted",type:"fill",source:"counties","source-layer":"original",paint:{"fill-outline-color":"#484896","fill-color":"#6e599f","fill-opacity":.75}};function s(){var e=Object(a.useState)({latitude:38.88,longitude:-98,zoom:3,minZoom:2,bearing:0,pitch:0}),t=e[0],n=e[1],l=Object(a.useState)(null),r=l[0],s=l[1],m=Object(a.useCallback)((function(e){var t=e.features&&e.features[0];s({longitude:e.lngLat[0],latitude:e.lngLat[1],countyName:t&&t.properties.COUNTY})}),[]),p=r&&r.countyName||"",g=Object(a.useMemo)((function(){return["in","COUNTY",p]}),[p]);return a.createElement(a.Fragment,null,a.createElement(i.default,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/light-v9",mapboxApiAccessToken:"",onViewportChange:n,onHover:m,interactiveLayerIds:["counties"]}),a.createElement(i.Source,{type:"vector",url:"mapbox://mapbox.82pkq93d"},a.createElement(i.Layer,Object.assign({beforeId:"waterway-label"},c)),a.createElement(i.Layer,Object.assign({beforeId:"waterway-label"},u,{filter:g}))),p&&a.createElement(i.Popup,{longitude:r.longitude,latitude:r.latitude,closeButton:!1,className:"county-info"},p)),a.createElement(o,null))}function m(e){Object(l.render)(a.createElement(s,null),e)}}}]);