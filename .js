function __ZAd(e,r,ca,x){function da(a){function b(l,m){a:{if("string"===typeof m){if(/^https?:\/\//.test(m)){var q=r.createElement("script");q.src=m;m=q;break a}}else if("object"===typeof m){q=r.createElement("div");m.class&&(q.className=m.class);m.zadType&&q.setAttribute("data-zadtype",m.zadType);m.suffix&&q.setAttribute("data-suffix",m.suffix);m.prebid&&q.setAttribute("data-prebid",m.prebid);m.prebidmobile&&q.setAttribute("data-prebidmobile",m.prebidmobile);m=q;break a}m=null}m&&l.parentNode.insertBefore(m,
l)}function c(l){for(let m of l.childNodes)if(m.nodeType===Node.TEXT_NODE&&0<m.nodeValue.trim().length)return!0;return!1}p("Starting injectAds function with adObject:",null,a);if(a&&"object"===typeof a){var d=r.getElementById("id_text");if(d){var f=d.getElementsByTagName("p");p(`Found ${f.length} paragraphs`);d=!1;var g=a.paragraphs||2;p(`Paragraph interval set to ${g}`);var h=[];for(let l=0;l<f.length;l++)c(f[l])&&h.push(f[l]);p(`Found ${h.length} eligible text paragraphs`);if(2>h.length)p("Not enough text paragraphs for ad injection. Exiting function.");
else for(f=1;f<h.length;f++)if(0===f%g)if(a.onlyOnce&&!d)b(h[f],a.onlyOnce),d=!0;else if(a.repeat)b(h[f],a.repeat);else if(a.onlyOnce&&d)break}else p('Text element with id "id_text" not found. Exiting function.')}else p("Invalid adObject. Exiting function.")}var K=e._ZDAKGEO&&e._ZDAKGEO.cc?e._ZDAKGEO.cc:null;e.ICMS&&e.ICMS.geoCC&&(K=e.ICMS.geoCC);var L=e&&e.zad&&e.zad.cmd?e.zad.cmd:[],n={},ea=[],D={},fa=480>=screen.width?!0:!1,z=null,M=!1;try{z=r.cookie.match(/geoCC=([^;&]+)/)?r.cookie.match(/geoCC=([^;&]+)/)[1].toUpperCase():
null}catch(a){}var N=!1,k={dfp:"",OOPs:["stitials"],OOPs1x1:[],OOPsAppendSuffix:!1,PogoAdkit:!1,autorefresh:30,prebid:false,amazon:false,navegg:false,tailtarget:false,pubstack:!1,lotame:false,pageTargeting:null,screensizeTargeting:!1,lazy:!1,dependencies:[],libs:[],gdprLibs:[],inject:{}},A={billboard:[[[990,250],[[970,250],[970,200],[970,180],[980,90],[970,90],[728,90],[120,30]]],[[750,200],[[728,90],[120,30]]],[[0,0],[[300,100],[320,100],[320,50],[120,30]]]],leaderboard:[[[750,200],[[728,90]]],[[0,0],[[300,
250],[300,100],[320,100],[320,50]]]],footer:[[[990,250],[[970,90],[728,90]]],[[750,200],[[728,90],[468,60]]],[[0,0],[[300,250],[300,100],[320,100],[320,50]]]],halfpage:null,mrec:null};x&&x.sizemappingTemplates&&(A=Object.assign(A,x.sizemappingTemplates));var t={billboard:{size:[[970,250],[970,200],[970,180],[980,90],[970,90],[728,90],[120,30]],sizemap:"billboard",adunit:""},leaderboard:{size:[728,90],sizemap:"leaderboard",adunit:""},mrec:{size:[300,250],sizemap:"mrec",adunit:""},halfpage:{size:[[300,
600],[300,250]],sizemap:"halfpage",adunit:""},skyscraper:{size:[160,600],sizemap:null,adunit:""},footer:{size:[[970,90],[728,90]],sizemap:"footer",adunit:""},"native":{size:"fluid",sizemap:null,adunit:""}};x&&x.adslotTemplates&&(t=Object.assign(t,x.adslotTemplates));var E=function(a){return a+"-"+Math.random().toString(16).slice(2)},p=function(a,b,c,d,f){if(M&&"undefined"!==typeof console&&console.log){var g=(new Date).toJSON();try{var h=b&&b.id?"["+b.id+"]":"string"===typeof b?"["+b+"]":"";f?console.log("[ZAD]["+
g+"]"+h+": "+a,b,c,d,f):d?console.log("[ZAD]["+g+"]"+h+": "+a,b,c,d):c?console.log("[ZAD]["+g+"]"+h+": "+a,b,c):b&&"string"!==typeof b?console.log("[ZAD]["+g+"]"+h+": "+a,b):console.log("[ZAD]["+g+"]"+h+": "+a)}catch(l){console.log(l)}}},ha=function(a){return(a=r.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?a.pop():""},y=function(a,b,c,d,f){d||(d=e);d=d.document;var g=d.getElementsByTagName("head")[0]||d.documentElement,h=!1,l=d.createElement("script");l.async=f?!1:!0;b&&(l.id=b);if(c){function q(){l.onload=
l.onreadystatechange=null;try{c&&c()}catch(v){}}l.onreadystatechange=function(){h||"loaded"!=this.readyState&&"complete"!=this.readyState||(h=!0,q())};l.onload=q}if("string"===typeof a)l.src=a;else for(var m in a)l.setAttribute(m,a[m]);g.insertBefore(l,g.firstChild)},ia=function(){z&&/be|bg|cz|dk|de|ee|ie|el|es|fr|hr|it|cy|lv|lt|lu|hu|mt|nl|at|pl|pt|ro|si|sk|fi|se|gb|uk/i.test(z)&&(N=!0);var a=N?{rubicon:{singleRequest:!0},consentManagement:{gdpr:{cmpApi:"iab",timeout:500}}}:{rubicon:{singleRequest:!0}};
e.pbjs.bidderSettings={standard:{alwaysUseBid:!1,adserverTargeting:[{key:"hb_bidder",val:function(b){return b.bidderCode}},{key:"hb_adid",val:function(b){return b.adId}},{key:"hb_pb",val:function(b){return 200<b.cpm?(10*Math.floor(Math.min(parseInt(b.cpm),500)/10)).toFixed(2):40<b.cpm?Math.floor(b.cpm).toFixed(2):30<b.cpm?(Math.floor(10*b.cpm)/10).toFixed(2):b.cpm.toFixed(2)}},{key:"hb_size",val:function(b){return b.size}},{key:"hb_cpm",val:function(b){return b.cpm}},{key:"hb_dealid",val:function(b){return"undefined"===
typeof b.dealId?"0":b.dealId}}]}};e._customPrebidSettings&&Object.assign(e.pbjs.bidderSettings,e._customPrebidSettings);pbjs.que.push(function(){pbjs.setConfig(a)})},Q=function(a){if(!k.prebid)return null;a||(a=F());for(var b=[],c=0;c<a.length;c++){var d=a[c];"string"===typeof d&&(d=r.getElementById(d));var f=fa?u(d,"prebidmobile")||u(d,"prebid")||null:u(d,"prebid")||null;if(f){!0===f&&(f=ops.prebid);if(!d.id){var g=w(d);e.ICMS&&e.ICMS.siteID&&0===e.ICMS.siteID.indexOf("ign")?"billboard"!==g||r.getElementById("adkit_billboard")?
"mrec1"!==g||r.getElementById("adkit_mrec1")?d.id=E("za-"+g):d.id="adkit_mrec1":d.id="adkit_billboard":d.id=E("za-"+g)}g=d.id;if(-1==g.indexOf("-oop")&&("undefined"===typeof n[g]&&(n[g]={}),"undefined"===typeof n[g].prebid)){var h=O(d),l=[],m;for(m in f)"customMediaTypes"!==m&&l.push({bidder:m,params:f[m]});l&&l.length?(n[g].prebid=f,b.push(Object.assign({},{code:g,mediaTypes:"customMediaTypes"in f?f.customMediaTypes.mediaTypes:{banner:{sizes:h}},bids:l},k.pubstack?{pubstack:{adUnitName:w(d)+"-"+
P(d)}}:{}))):n[g].prebid=!1}}}b.length&&pbjs.que.push(function(){pbjs.addAdUnits(b)});return b.length},S=function(a){if(k.prebid){Q(a);for(var b=[],c=0;c<a.length;c++){var d=a[c];n[d].prebid&&(b.push(d),n[d]._prebidInProgress=!0)}p("Starting Prebid Auction",a,b);pbjs.que.push(function(){pbjs.requestBids({timeout:800,adUnitCodes:b,bidsBackHandler:function(f,g){p("Prebid Auction Completed",b);for(f=0;f<b.length;f++)n[b[f]]._prebidInProgress=!1;googletag.cmd.push(function(){pbjs.setTargetingForGPTAsync(b);
R(b)&&G(b,"forceImmediateRefresh")})}})})}},T=function(a){if(!k.amazon)return null;a||(a=F());for(var b=[],c=0;c<a.length;c++){var d=a[c];"string"===typeof d&&(d=r.getElementById(d));if(d){var f=w(d);if(!d.id){if(!f)continue;d.id=E("za-"+f)}var g=d.id;if(-1==g.indexOf("-oop")&&-1==g.indexOf("affiliate")){"undefined"===typeof n[g]&&(n[g]={});var h=O(d);d=Object.assign({},{slotID:g,slotName:f},u(d,"aps")?u(d,"aps"):{sizes:1<h.length?h:[h]});b.push(d);n[g].amazon=!0}}}return b},U=function(a,b){if(!k.amazon||
!e.apstag)return!1;a||(a=getAdContainers());p("Starting Amazon Auction",a);var c=T(a);if(c&&c.length){for(b=0;b<c.length;b++){var d=c[b].slotID;n[d]._amazonInProgress=!0}try{e.apstag.fetchBids({slots:c,adServer:"googletag",timeout:800},function(f){p("Amazon Auction Complete",a,f);e.googletag.cmd.push(function(){e.apstag.setDisplayBids()});f=[];for(var g=0;g<c.length;g++){var h=c[g].slotID;n[h]._amazonInProgress=!1;f.push(h)}R(f)&&G(f,"forceImmediateRefresh")})}catch(f){for(p("APS bid failed",f),b=
0;b<c.length;b++)d=c[b].slotID,n[d]._amazonInProgress=!1}}else p("No APS-eligible slot found",a)},ja=function(){if(k.navegg)try{var a,b=JSON.parse(e.localStorage.getItem("nvgpersona"+k.navegg));for(a in b){var c="nvg_"+a;"object"==typeof googletag&&googletag.pubads().setTargeting(c,b[a]);"function"==typeof GA_googleAddAttr&&GA_googleAddAttr(c,b[a])}}catch(d){}if(k.tailtarget)try{c=function(d){if(!e._ttprofilescache){e._ttprofilescache={};try{var f=r.cookie.match("(^|;)\\s*_ttdmp\\s*=\\s*([^;]+)"),
g=f?f.pop().split("|"):[];for(f=0;f<g.length;f++){var h=g[f].split(":");h[1]&&0<h[1].indexOf(",")?e._ttprofilescache[h[0]]=h[1].split(","):e._ttprofilescache[h[0]]=h[1]}}catch(l){}}return e._ttprofilescache[d]?e._ttprofilescache[d]:"na"},e.googletag.pubads().setTargeting("ttLS",c("LS")),e.googletag.pubads().setTargeting("ttS",c("S")),e.googletag.pubads().setTargeting("ttT",c("T")),e.googletag.pubads().setTargeting("ttC",c("C")),e.googletag.pubads().setTargeting("ttU",c("U")),e.googletag.pubads().setTargeting("ttCA",
c("CA")),e.googletag.pubads().setTargeting("ttE",c("E")),e.googletag.pubads().setTargeting("ttA",c("A")),e.googletag.pubads().setTargeting("ttG",c("G"))}catch(d){console.log(d)}k.lotame&&!function(){var d=k.lotame.clientID,f="lotame_"+d+"_auds",g=k.pageTargeting.page||"",h=k.lotame.sitename,l=e.localStorage.getItem("_cb");try{var m=e.localStorage.getItem(f)||"";m&&googletag.cmd.push(function(){e.googletag.pubads().setTargeting("lotauds",m.split(","))});var q=e.localStorage.getItem("panoramaId")||
"";q&&googletag.cmd.
