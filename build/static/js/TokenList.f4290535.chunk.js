(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1430:function(e,t,a){"use strict";a.d(t,"a",function(){return w});var n=a(1434),r=a.n(n),l=a(2),o=a.n(l),c=a(29),s=a(5),i=a(14),u=a(13),m=a(20),p=a(19),d=a(21),f=a(0),g=a.n(f),b=(a(3),a(16));function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(c.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}a(92);var w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).loadDatas=Object(s.a)(o.a.mark(function e(){var t,n,r,l,c=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<c.length&&void 0!==c[0]?c[0]:1,n=1<c.length&&void 0!==c[1]?c[1]:40,r=a.state.filter,e.next=5,b.b.getTokens(E({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return l=e.sent,e.abrupt("return",l);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=E({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(E({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange&&a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?E({},e,{name:g.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?g.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,l=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var i=c.value;if(i.sorter&&!i.filterDropdown){var u={sorter:t(i.key)};n.push(E({},i,{},u))}else if(!i.sorter&&i.filterDropdown){var m=E({},a);n.push(E({},i,{},m))}else if(i.sorter&&i.filterDropdown){var p=E({sorter:t(i.key)},a);n.push(E({},i,{},p))}else n.push(i)}}catch(e){l=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(l)throw o}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:E({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,l=e.column,o=e.bordered,c=e.pagination,s=void 0===c||c,i=e.scroll,u=e.Footer,m=e.locale,p=e.addr,d=e.transfers,f=e.nopadding,b=(e.contractAddress,e.isPaddingTop,this.setColumn(l)),h=s?E({total:t},this.state.pagination):s;return g.a.createElement("div",null," ",p?g.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")+(f?" transfer-mp-0":"")},g.a.createElement(r.a,{bordered:o,columns:b,rowKey:function(e,t){return t},dataSource:n,locale:m,scroll:i,footer:u,pagination:h,loading:a,onChange:this.handleTableChange})," "):g.a.createElement("div",{className:"card table_pos"},g.a.createElement(r.a,{bordered:o,columns:b,footer:u,rowKey:function(e,t){return t},dataSource:n,locale:m,scroll:i,pagination:h,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(f.Component)},1432:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},2024:function(e,t,a){"use strict";var n=a(270),r=(a.n(n),a(1444)),l=(a.n(r),a(14),a(13),a(20),a(19),a(21),a(0)),o=a.n(l),c=(a(3),a(99));a.n(c);o.a.Component},3460:function(e,t,a){"use strict";a.r(t);var n,r=a(1371),l=a.n(r),o=a(266),c=a.n(o),s=a(39),i=a.n(s),u=a(2),m=a.n(u),p=a(5),d=a(14),f=a(13),g=a(20),b=a(19),h=a(21),E=a(0),w=a.n(E),v=a(28),y=a(381),x=a(11),k=a(50),O=a.n(k),A=a(3),C=a(16),j=a(23),N=a(267),S=a(386),_=(a(2024),a(86)),T=a(1430),D=a(4),M=a(18),P=a(51),R=a(91),B=a(67),I=a(12),L=a.n(I),U=a(8),K=a.n(U),W=a(141),X=a(63),H=Object(W.a)(n=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).loadPage=Object(p.a)(m.a.mark(function e(){var t,a,r,l,o,c,s,i,u=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0<u.length&&void 0!==u[0]?u[0]:1,a=1<u.length&&void 0!==u[1]?u[1]:20,r=n.state.filter,l=n.props.intl,n.setState({loading:!0}),r.name)return e.next=8,L.a.get(D.f+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&name="+r.name);e.next=13;break;case 8:o=e.sent,c=o.data.data.length,s=o.data.totalAll,e.next=18;break;case 13:return e.next=15,L.a.get(D.f+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&totalAll=1&showAll=2");case 15:o=e.sent,c=o.data.total,s=o.data.totalAll;case 18:return 0===(i=o.data.data).length&&_.toastr.warning(l.formatMessage({id:"warning"}),l.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:i,total:c,totalAll:s}),e.abrupt("return",c);case 22:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=i()(Object(S.a)(n.props.location,"search"));0<e.length?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){0<e.length?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/list"!==window.location.hash?window.location.hash="#/tokens/list":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;a<e&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e});var l=(n.buyAmount.value=e)*t;n.priceTRX.innerHTML=r.formatNumber(l,{maximumFractionDigits:6})},n.preBuyTokens=function(e){n.state.buyAmount;var t=n.props;t.currentWallet,t.wallet.isOpen?n.setState({alert:w.a.createElement(O.a,{showConfirm:!1},w.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},w.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times"})),w.a.createElement("h5",{style:{color:"black"}},Object(A.c)("buy_token_info")),0===e.remaining&&w.a.createElement("span",null," ",Object(A.c)("no_token_to_buy")),w.a.createElement("div",{className:"input-group mt-5"},w.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/D.K,e.remaining)}})),w.a.createElement("div",{className:"text-center mt-3 text-muted"},w.a.createElement("b",null,"= ",w.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0")," TRX")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(A.c)("participate"))))}):n.setState({alert:w.a.createElement(O.a,{info:!0,showConfirm:!1},w.a.createElement("div",{className:"token-sweet-alert"},w.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times"})),w.a.createElement("span",null,Object(A.c)("login_first")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(A.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,l=r.currentWallet,o=(r.wallet,a*(t/D.K));l.balance/D.K<o?n.setState({alert:w.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},w.a.createElement("div",{className:"mt-5 token-sweet-alert"},w.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),w.a.createElement("span",null,Object(A.c)("not_enough_trx_message")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(A.c)("confirm"))))}):n.setState({alert:w.a.createElement(O.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},w.a.createElement("div",{className:"mt-5 token-sweet-alert"},w.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),w.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(A.c)("buy_confirm_message_1")),w.a.createElement("span",null,a," ",e.name," ",Object(A.b)("for")," ",parseFloat((a*(t/D.K)).toFixed(6))," TRX?"),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(A.c)("confirm"))))})}},n.submit=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r,l,o,c,s,i,u,p,d,f,g,b,h,E;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,l=r.account,o=r.currentWallet,c=n.state.buyAmount,!K.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(i=n.props.tronWeb(),u=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"===n.props.walletType.type)return e.next=10,i.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)),n.props.walletType.address).catch(function(e){return!1});e.next=16;break;case 10:return p=e.sent,e.next=13,Object(B.c)(p,i);case 13:d=e.sent,f=d.result,s=f;case 16:if("ACCOUNT_TRONLINK"===n.props.walletType.type)return e.next=19,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)),u.defaultAddress.hex).catch(function(e){return!1});e.next=25;break;case 19:return g=e.sent,e.next=22,Object(B.c)(g,u);case 22:b=e.sent,h=b.result,s=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,C.b.participateAsset(o.address,t.ownerAddress,t.id+"",parseInt((c*a).toFixed(0)))(l.key);case 34:E=e.sent,s=E.success;case 36:if(s)return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:s,buyAmount:0}),e.abrupt("return",!0);e.next=41;break;case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(p.a)(m.a.mark(function e(t){var a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=n.props).account,r=a.intl,n.state.buyAmount,n.setState({alert:w.a.createElement(O.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:r.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),e.next=5,n.submit(t);case 5:if(!e.sent){e.next=9;break}n.setState({alert:w.a.createElement(O.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},w.a.createElement("div",{className:"mt-5 token-sweet-alert"},w.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},w.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),w.a.createElement("h5",{style:{color:"black"}},Object(A.c)("transaction")," ",Object(A.c)("confirm")),w.a.createElement("span",null,Object(A.c)("success_receive")," ",t.name," ",Object(A.c)("tokens")),w.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(A.c)("OK"))))}),e.next=10;break;case 9:n.setState({alert:w.a.createElement(O.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(A.c)("fail_transaction"))});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl,t=a(1432);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:c()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,n){return w.a.createElement("div",{className:"table-imgtext"},n.imgUrl?w.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==n.id?w.a.createElement("div",{className:"token-img-top"},w.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),w.a.createElement("i",null)):w.a.createElement("img",{style:{width:"42px",height:"42px"},src:n.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):w.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},w.a.createElement("img",{style:{width:"42px",height:"42px"},src:a(1432)})),w.a.createElement("div",null,w.a.createElement("h5",null,w.a.createElement(j.f,{name:n.name,id:n.id,namePlus:n.name+" ("+n.abbr+")",address:n.ownerAddress})),w.a.createElement("p",{style:{wordBreak:"break-all"}},n.description)))}},{title:"ID",render:function(e,t){return w.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t){return w.a.createElement("div",null,w.a.createElement(x.c,{value:t.participated/D.K,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"reputation"}),dataIndex:"reputation",key:"reputation",align:"center",className:"ant_table",render:function(t){var a=l()(t);return w.a.createElement("div",null,a&&e.formatMessage({id:a}))}},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e){return null===e&&(e=0),w.a.createElement("div",null,w.a.createElement(x.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"created_token_time"}),dataIndex:"dateCreated",key:"dateCreated",render:function(e){return w.a.createElement(x.a,{value:e})},align:"center",className:"ant_table d-none d-sm-table-cell"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t){return t.isBlack?w.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:!0},Object(A.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?w.a.createElement("span",{style:{fontWeight:"normal"}},Object(A.c)("finish")):t.startTime>new Date?w.a.createElement("span",{style:{fontWeight:"normal"}},Object(A.c)("not_started")):w.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(A.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,totalAll:0,filter:{}};var r=i()(Object(S.a)(e.location,"search"));return 0<r.length&&(n.state.filter.name="".concat(r)),n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,l=t.total,o=t.totalAll,c=this.props,s=(c.match,c.intl),i=this.customizedColumn(),u=s.formatMessage({id:"part_total"})+" "+l+"/"+o+" "+s.formatMessage({id:"part_pass"});return w.a.createElement("main",{className:"container header-overlap token_black"},n,r&&w.a.createElement("div",{className:"loading-style"},w.a.createElement(R.b,null)),w.a.createElement("div",{className:"row"},w.a.createElement("div",{className:"col-md-12 table_pos"},l?w.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},u," ",w.a.createElement("span",null,w.a.createElement(N.a,{placement:"top",text:"newly_issued_token_by_tronscan",className:"token-list-info"}))," ","\xa0\xa0"," ",w.a.createElement(X.a,{to:"/exchange/trc10"},Object(A.b)("Trade_on_Poloni DEX"),">")):"",w.a.createElement(T.a,{bordered:!0,loading:r,column:i,data:a,total:l,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(E.Component))||n,Q={loadTokens:y.b,login:M.v,reloadWallet:P.c};t.default=Object(v.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},Q)(Object(x.h)(H))}}]);