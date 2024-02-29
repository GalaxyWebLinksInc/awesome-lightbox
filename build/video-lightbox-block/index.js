!function(){"use strict";var e,t={215:function(e,t,r){var n=window.wp.blocks;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=window.React,i=window.wp.i18n,c=window.wp.blockEditor,u=r.p+"images/posterimage-placeholder.d7185d30.png",s=window.wp.components;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=wp.element,g=(m.useState,m.Component,m.Fragment);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}wp.compose.compose,wp.data.withSelect;var f=wp.element,b=(f.useState,f.Component,f.Fragment);f.useEffect;var h=JSON.parse('{"u2":"awesome-lightbox/video-lightbox-block"}');(0,n.registerBlockType)(h.u2,{attributes:{mediaSrc:{type:"string",default:""},altText:{type:"string",default:"Video Lightbox"},width:{type:"number",default:300},height:{type:"number",default:200},autoplay:{type:"boolean",default:!1},loop:{type:"boolean",default:!1},manualUrl:{type:"string",default:""},posterSrc:{type:"string",default:""},posterImage:{type:"string",default:""}},edit:function(e){var t=e.attributes,r=e.setAttributes,n=t.bgImageId,o=(t.altText,t.autoplay,t.height,t.loop,t.manualUrl,t.mediaSrc),m=(t.posterImage,t.posterSrc),d=(t.width,m.length>0),f=o.length>0,b=(0,l.createElement)("p",null,(0,i.__)("To edit the background image, you need permission to upload media.","image-selector-example")),h=function(e){r({bgImageId:e.id,posterSrc:e.url,posterImage:e})},v=["image"];return(0,l.createElement)(g,null,(0,l.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,c.useBlockProps)()),(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(s.ToolbarGroup,null,(0,l.createElement)(c.MediaReplaceFlow,{mediaURL:o,onSelect:function(e){return r({mediaId:e.id,mediaSrc:e.url})},onSelectURL:function(e){return r({mediaSrc:e})}}))),(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(s.PanelBody,{title:(0,i.__)("Background settings","image-selector-example"),initialOpen:!0},(0,l.createElement)("div",{className:"wp-block-image-selector-example-image"},!m&&(0,l.createElement)(c.MediaUploadCheck,{fallback:b},(0,l.createElement)(c.MediaUpload,{title:(0,i.__)("Background image","image-selector-example"),onSelect:h,allowedTypes:v,value:m,render:function(e){var t=e.open;return(0,l.createElement)(s.Button,{className:n?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:t},!n&&(0,i.__)("Set background image","image-selector-example"),!!n&&!m&&(0,l.createElement)(s.Spinner,null),n&&m&&(0,l.createElement)(s.ResponsiveWrapper,null,(0,l.createElement)("img",{src:m,alt:(0,i.__)("Background image","image-selector-example")})))}})),!!m&&(0,l.createElement)(c.MediaUploadCheck,null,(0,l.createElement)(c.MediaUpload,{title:(0,i.__)("Background image","image-selector-example"),onSelect:h,allowedTypes:v,value:n,mediaPreview:(0,l.createElement)(c.Disabled,null,(0,l.createElement)("img",{src:m,alt:"Image"})),render:function(e){var t=e.open;return(0,l.createElement)(g,null,m&&(0,l.createElement)(s.ResponsiveWrapper,{naturalWidth:200,naturalHeight:100},(0,l.createElement)("img",{src:m,alt:(0,i.__)("Background image","image-selector-example")})),(0,l.createElement)(s.Button,{onClick:t,isSecondary:!0,isLarge:!0},(0,i.__)("Replace background image","image-selector-example")))}}))))),f&&(0,l.createElement)(g,null,(0,l.createElement)("a",{className:"glightbox",href:o,"data-glightbox":"video"},(d||u)&&(0,l.createElement)("figure",{className:"videolightbox-inner-container"},(0,l.createElement)("img",{className:"poster-image",src:m||u,alt:t.altText,style:{maxWidth:"100%",height:"100%",display:"block",width:"100%",objectFit:"cover"}})),(0,l.createElement)("svg",{version:"1.1",viewBox:"0 0 68 48",width:"68px",className:"video-svg-btn"},(0,l.createElement)("path",{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"transparent"}),(0,l.createElement)("path",{d:"M 45,24 27,14 27,34",fill:"red"})))),!d&&!f&&(0,l.createElement)(c.MediaPlaceholder,{gallery:!0,icon:(0,l.createElement)(c.BlockIcon,{icon:"format-gallery"}),labels:{title:"Video Source",instructions:"Video source upload video, video source URL"},onSelect:function(e){return r({mediaSrc:e.url,altText:e.alt,mediaId:e.id})},onSelectURL:function(e){return r({mediaSrc:e})},onWidthChange:function(e){return r({width:e})},onHeightChange:function(e){return r({height:e})}})))},save:function(e){var t=e.attributes,r=(t.altText,t.autoplay,t.height,t.loop,t.manualUrl,t.mediaSrc),n=(t.posterImage,t.posterSrc);t.width,console.log(t);var o=n.length>0,i=r.length>0,s=c.useBlockProps.save();return(0,l.createElement)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s),i&&(0,l.createElement)(b,null,(0,l.createElement)("a",{className:"glightbox",href:r,"data-glightbox":"video"},(o||u)&&(0,l.createElement)("figure",{className:"videolightbox-inner-container"},(0,l.createElement)("img",{className:"poster-image",src:n||u,alt:t.altText,style:{maxWidth:"100%",height:"100%",display:"block",width:"100%",objectFit:"cover"}})),(0,l.createElement)("svg",{version:"1.1",viewBox:"0 0 68 48",width:"68px",className:"video-svg-btn"},(0,l.createElement)("path",{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"transparent"}),(0,l.createElement)("path",{d:"M 45,24 27,14 27,34",fill:"red"})))))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){var e={249:0,949:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],i=r[1],c=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var s=c(n)}for(t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self.webpackChunkawesome_lightbox=self.webpackChunkawesome_lightbox||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[949],(function(){return n(215)}));o=n.O(o)}();