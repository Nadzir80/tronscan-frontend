(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1138:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(15),r=a(16),c=a(25),l=a(24),s=a(26),o=a(0),i=a.n(o),d=a(156),u=a(14),m=a(3),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={open:!1,id:Object(d.a)(24)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,c=r.text,l=r.placement,s=r.testSecond,o=void 0===s?"":s,d=r.className,g=void 0===d?"":d,p=r.info,A=void 0===p?"":p;return i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},i.a.createElement("i",null,"?")),i.a.createElement(u.h,{placement:l,isOpen:a,target:n,className:g,innerClassName:"w-100"},c?Object(m.b)(c):"",o?i.a.createElement("span",null,i.a.createElement("br",null)," ",Object(m.b)(o)):"",A||""))}}]),t}(i.a.Component)},1148:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var n=a(1190),r=a.n(n),c=a(133),l=a.n(c),s=a(1144),o=a.n(s),i=a(1141),d=a.n(i),u=a(2),m=a.n(u),g=a(8),p=a(5),A=a(15),E=a(16),f=a(25),h=a(24),b=a(26),I=a(0),B=a.n(I),v=a(3),k=a(18),C=function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).loadDatas=Object(p.a)(m.a.mark(function e(){var t,n,r,c,l=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,n=l.length>1&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,k.a.getTokens(Object(g.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(g.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(g.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(g.a)({},e,{name:B.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?B.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:B.a.createElement("div",{className:"custom-filter-dropdown"},B.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),B.a.createElement(o.a,{type:"primary",onClick:a.onSearch},Object(v.c)("search")),B.a.createElement(o.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(v.c)("reset"))),filterIcon:B.a.createElement(l.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],c=!0,s=!1,i=void 0;try{for(var u,m=e[Symbol.iterator]();!(c=(u=m.next()).done);c=!0){var p=u.value;if(p.sorter&&!p.filterDropdown){var A={sorter:t(p.key)};r.push(Object(g.a)({},p,A))}else if(!p.sorter&&p.filterDropdown){var E=Object(g.a)({},n);r.push(Object(g.a)({},p,E))}else if(p.sorter&&p.filterDropdown){var f=Object(g.a)({sorter:t(p.key)},n);r.push(Object(g.a)({},p,f))}else r.push(p)}}catch(h){s=!0,i=h}finally{try{c||null==m.return||m.return()}finally{if(s)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:Object(g.a)({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,c=e.column,l=e.bordered,s=e.pagination,o=void 0===s||s,i=e.scroll,d=e.locale,u=e.addr,m=e.transfers,p=(e.contractAddress,this.setColumn(c)),A=o?Object(g.a)({total:t},this.state.pagination):o;return B.a.createElement("div",null,u?B.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},B.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:A,loading:a,onChange:this.handleTableChange})," "):B.a.createElement("div",{className:"card table_pos"},B.a.createElement(r.a,{bordered:l,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:d,scroll:i,pagination:A,loading:a,onChange:this.handleTableChange})))}}]),t}(I.Component)},1162:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAQAAABvygHQAAAClUlEQVR4AcWXRXLkMBSGJ7uhdV8gN8pR+gKhU6gxzMzMzMzMKAX2+cbVdqlJ7nTANf43gqq/nt7/yD/+w/eUq/yyUg2rXfkqX9WuGrZ2/qfcT9K9+lSRXJe4YF0Vvfo+RMhflW9Zxjt4Vfn8zZJS5akbSXZQNyrvfRtzVL56k2QP9abyyclE+UvVST4OVccvdys15cdpXay1xOHzUPlmeRxfttHCCCsc8/Ax3+alB5FWfAHhIEgtPcyww3VWkcBf16ffEUYQYZ4VRmmlFGGhjDZrt8IJj9m54NWXHOr9lNNJgAVnf8020/RQQxBBiDr6ODGmQ0KWqeLky0MEe0wgGEyx64Fj5gkhiHJosrVIk6bneB09SNYJ08xt0s0ldUTZoo0Ie4aaoCtR2hULhGJkx5RTmfDUA0qp4Txmcychi1ymwKlgyp96YYs16/izkQibSAsrhGjTlt/RSJC1VAf47cdXmpTsp0b7sQ/BNKMIRrhgkym6qSaAsNCOTEalbemwvTWIpXezMYogkRhRhUU1xjJlFvVtqqXDNumuvTWKpdFGOQPMs6dpuolylq7/boxUx6iLWDZqGU26nSTAjjFWbdIXM+mtI5aNKPNIjQ2E3qfgxfB8s1h3CDb1+TFhBtxSddcglFmsYwTHOmnLaXKtAGrYPaS0J22xNhHcOQHWSAU3SDdUGoLfLNY8Ueekj4i22QTlT0lTs1hzSEapteNV+9YNT7mGgmIWqzuWOdsEmEJmwnq89BVJMovVwBCnRGwPZ4AqMhZps1iljFNFvblrmYt05k5qF+UI5Vx9rKPqxuciliDE4Ucbn27RLmIJVj/eojO74JCxjw8THo49ngxoHo2SHg29no3n+kei+OM/Ep7+8njw/QOnF3WHklwUswAAAABJRU5ErkJggg=="},2094:function(e,t){e.exports="data:image/png;base64,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"},3311:function(e,t,a){"use strict";a.r(t);var n=a(108),r=a.n(n),c=a(1191),l=a.n(c),s=a(206),o=a.n(s),i=a(2),d=a.n(i),u=a(5),m=a(15),g=a(16),p=a(25),A=a(24),E=a(26),f=a(0),h=a.n(f),b=a(31),I=a(20),B=a(3),v=a(13),k=a(19),C=a(6),Q=a(155),y=a(1148),S=a(83),O=a(1138),x=(a(21),a(18)),w=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(A.a)(t).call(this))).loadAccounts=Object(u.a)(d.a.mark(function t(){var a,n,r,c,l,s,o=arguments;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:20,e.setState({loading:!0}),t.next=5,x.a.getAccounts({sort:"-balance",limit:n,start:(a-1)*n});case 5:r=t.sent,c=r.accounts,l=r.total,s=r.rangeTotal,e.setState({loading:!1,accounts:c,total:l,rangeTotal:s});case 10:case"end":return t.stop()}},t)})),e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchFieldChangeHandler=function(t){e.setState({searchString:t.target.value})},e.customizedColumn=function(){var t=e.props.intl;return[{title:o()(t.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(e,a,n){return 2==a.accountType?h.a.createElement("span",{className:"d-flex"},h.a.createElement(l.a,{placement:"top",title:t.formatMessage({id:"contracts"})},h.a.createElement("span",null,h.a.createElement("i",{className:"far fa-file mr-1"}))),h.a.createElement(k.a,{address:e,isContract:2==a.toAddressType})):h.a.createElement(k.a,{address:e})}},{title:"Name Tag",dataIndex:"addressTag",key:"addressTag",align:"left",render:function(e,t,a){return h.a.createElement("span",{style:{whiteSpace:"nowrap"}}," ",t.addressTag?t.addressTag:""," ")}},{title:o()(t.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return h.a.createElement("div",null,h.a.createElement(v.c,{value:parseInt(e)/C.B/C.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:o()(t.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return h.a.createElement(v.c,{value:parseInt(e)/C.B})}},{title:o()(t.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return h.a.createElement(Q.b,{amount:parseInt(e)/C.B})}}]},e.state={loading:!0,searchString:"",accounts:[],total:0,exchangeFlag:[{name:"binance",addressList:{Cold:["TMuA6YqfCeX8EhbfYEg5y7S4DqzSJireY9","TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb"],Hot:["TAUN6FwrnwwmaEqYcckffC7wYmbaS6cBiX"]}}]},e}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return(t=t.toUpperCase()).length>0&&(e=r()(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return h.a.createElement(f.Fragment,null,h.a.createElement("div",{className:"table-responsive"},h.a.createElement("table",{className:"table table-striped m-0"},h.a.createElement("thead",{className:"thead-dark"},h.a.createElement("tr",null,h.a.createElement("th",null,Object(B.c)("address")),h.a.createElement("th",{className:"d-md-table-cell"},Object(B.c)("supply")),h.a.createElement("th",{className:"d-md-table-cell"},Object(B.c)("power")),h.a.createElement("th",null,Object(B.c)("balance")))),h.a.createElement("tbody",null,e.map(function(e,t){return h.a.createElement("tr",{key:e.address},h.a.createElement("th",null,h.a.createElement(k.a,{address:e.address})),h.a.createElement("td",{className:"d-md-table-cell text-nowrap"},h.a.createElement(v.c,{value:e.balance/C.B/C.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),h.a.createElement("td",{className:"text-nowrap d-md-table-cell"},h.a.createElement(v.c,{value:e.power/C.B})),h.a.createElement("td",{className:"text-nowrap"},h.a.createElement(Q.b,{amount:e.balance/C.B})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,c=n.loading,l=n.rangeTotal,s=void 0===l?0:l,o=n.accounts,i=this.customizedColumn(),d=(a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"view_total"})+" "+s+" "+a.formatMessage({id:"table_info_account_tip2"}));return h.a.createElement("main",{className:"container header-overlap pb-3 token_black"},h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-12"},h.a.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},h.a.createElement("div",{className:"card-body"},h.a.createElement("h3",{className:"text-primary"},h.a.createElement(v.c,{value:s})),Object(B.c)("total_accounts"))))),c&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(S.b,null)),h.a.createElement("div",{className:"row mt-2"},h.a.createElement("div",{className:"col-md-12 table_pos"},r?h.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},h.a.createElement("div",null,Object(B.c)("view_total")," ",s," ",Object(B.c)("account_unit")," ",h.a.createElement(O.a,{placement:"top",info:d})," ",h.a.createElement("br",null),s>1e4?h.a.createElement("span",null,"(",Object(B.c)("table_info_big1"),"10000",Object(B.c)("table_info_big2"),")"):"")):"",h.a.createElement(y.a,{bordered:!0,loading:c,column:i,data:o,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(f.Component);var H={loadAccounts:I.r};t.default=Object(b.connect)(function(e){return{accounts:e.app.accounts}},H)(Object(v.h)(w))},3349:function(e,t,a){"use strict";a.r(t);var n,r=a(1190),c=a.n(r),l=a(206),s=a.n(l),o=a(34),i=a.n(o),d=a(2),u=a.n(d),m=a(8),g=a(5),p=a(15),A=a(16),E=a(25),f=a(24),h=a(26),b=a(1141),I=a.n(b),B=a(0),v=a.n(B),k=a(31),C=a(20),Q=a(3),y=a(13),S=a(19),O=a(6),x=a(155),w=a(1148),H=a(83),_=(a(1138),a(21),a(18)),j=a(14),N=a(45),D=a(157),M=Object(k.connect)(function(e){return{account:e.app.account,wallet:e.app.wallet,tokenBalances:e.account.tokens,trxBalance:e.account.trxBalance||e.account.balance}},{reloadWallet:N.c})(n=Object(y.h)(n=Object(D.a)(n=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(f.a)(t).call(this,e))).hideModal=function(){var e=a.props.onHide;e&&e()},a.customizedColumn=function(){var e=a.props.intl;return[{title:s()(e.formatMessage({id:"propose_number"})),dataIndex:"index",align:"left",render:function(e,t,a){return v.a.createElement("div",null,a+1)}},{title:s()(e.formatMessage({id:"developers_contribution_link"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"80%",render:function(e,t,a){return v.a.createElement(S.e,{href:t.url,target:"_blank",className:"text-muted"},v.a.createElement("span",{style:{wordBreak:"break-all"}},t.url))}},{title:s()(e.formatMessage({id:"developers_earn_points"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return v.a.createElement("div",null,v.a.createElement(y.c,{value:t.points}))}}]},a.state={loading:!1},a}return Object(h.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.loading,t=this.props,a=(t.intl,t.notes),n=a.length,r=this.customizedColumn();return v.a.createElement(j.d,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered _freezeContent developers_note"},v.a.createElement(j.g,{className:"text-center _freezeHeader",toggle:this.hideModal},Object(Q.c)("developers_points_details")),v.a.createElement(j.e,{className:"text-center _freezeBody token_black"},v.a.createElement(w.a,{bordered:!0,loading:e,column:r,data:a,total:n,position:"bottom"})))}}]),t}(v.a.PureComponent))||n)||n)||n,J=(a(208),I.a.Search),Y=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(E.a)(this,Object(f.a)(t).call(this))).loadAccounts=Object(g.a)(u.a.mark(function t(){var a,n,r,c,l,s,o,i,d=arguments;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.length>0&&void 0!==d[0]?d[0]:1,n=d.length>1&&void 0!==d[1]?d[1]:20,r=e.state,c=r.searchCriteria,l=r.filter,e.setState({loading:!0}),t.next=6,_.a.getUserList(Object(m.a)({search:c,pageSize:n,page:a},l));case 6:s=t.sent,o=s.data,i=s.total,o.map(function(e,t){e.index=t+1,e.extraData=new Function("return "+e.extra)()}),e.setState({loading:!1,developers:o,total:i,pagination:Object(m.a)({},e.state.pagination,{total:i})});case 11:case"end":return t.stop()}},t)})),e.handleTableChange=function(t,a,n){var r=Object(m.a)({},e.state.pagination);r.current=t.current,r.pageSize=t.pageSize;e.setState({pagination:r,filter:Object(m.a)({},e.state.filter,{sortField:{currentYear:"currentYear",currentQuarter:"currentQuarter",currentMonth:"currentMonth"}[n.columnKey]||"currentMonth",userSort:{descend:-1,ascend:1}[n.order]||"-1",order_current:n.order})},function(){return e.loadAccounts(r.current,r.pageSize)})},e.hideModal=function(){e.setState({modal:null})},e.showNote=function(t){var a=new Function("return "+e.state.developers[t].note)();e.setState({modal:v.a.createElement(M,{notes:a,onHide:e.hideModal})})},e.onChange=function(t,a){e.loadAccounts(t,a)},e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)},function(){e.loadAccounts()})},e.customizedColumn=function(){var t=e.props.intl,n=e.state.filter,r=a(1162);return[{title:s()(t.formatMessage({id:"developers_username"})),dataIndex:"name",key:"name",align:"left",className:"ant_table",width:"40%",render:function(e,t,n){return v.a.createElement("div",null,t.extraData&&"null"!==t.extraData.imgUrl?v.a.createElement("div",null,v.a.createElement("img",{src:t.extraData.imgUrl,width:"20",height:"20",alt:"@"+t.name,onError:function(e){e.target.onerror=null,e.target.src=r}}),v.a.createElement("span",{className:"ml-2"},t.name)):v.a.createElement("div",null,v.a.createElement("img",{src:a(2094),width:"20",height:"20",alt:"@"+t.name}),v.a.createElement("span",{className:"ml-2"},t.name)))}},{title:s()(t.formatMessage({id:"developers_current_year"})),dataIndex:"currentYear",key:"currentYear",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentYear"===n.sortField&&n.order_current,render:function(e,t,a){return v.a.createElement("div",null,v.a.createElement(y.c,{value:t.currentYear}))}},{title:s()(t.formatMessage({id:"developers_current_quarter"})),dataIndex:"currentQuarter",key:"currentQuarter",align:"center",sorter:!0,sortOrder:"currentQuarter"===n.sortField&&n.order_current,render:function(e,t,a){return v.a.createElement("div",null,v.a.createElement(y.c,{value:t.currentQuarter}))}},{title:s()(t.formatMessage({id:"developers_current_month"})),dataIndex:"currentMonth",key:"currentMonth",align:"center",className:"ant_table",sorter:!0,sortOrder:"currentMonth"===n.sortField&&n.order_current,render:function(e,t,a){return v.a.createElement("div",null,v.a.createElement(y.c,{value:t.currentMonth}))}},{title:s()(t.formatMessage({id:"trc20_cur_order_header_action"})),dataIndex:"action",key:"action",align:"right",className:"ant_table",render:function(t,a,n){return v.a.createElement("a",{href:"javascript:;",onClick:function(){e.showNote(n)}},Object(Q.c)("developers_view_points"))}}]},e.state={modal:null,loading:!0,searchString:"",developers:[],total:0,searchCriteria:"",pagination:{showQuickJumper:!0,position:"bottom",showSizeChanger:!0,defaultPageSize:20,total:0},filter:{sortField:"currentMonth",userSort:-1,order_current:"descend"}},e}return Object(h.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"renderAccounts",value:function(){var e=this.state.developers;if(0!==e.length)return v.a.createElement(B.Fragment,null,v.a.createElement("div",{className:"table-responsive"},v.a.createElement("table",{className:"table table-striped m-0"},v.a.createElement("thead",{className:"thead-dark"},v.a.createElement("tr",null,v.a.createElement("th",null,Object(Q.c)("address")),v.a.createElement("th",{className:"d-md-table-cell"},Object(Q.c)("supply")),v.a.createElement("th",{className:"d-md-table-cell"},Object(Q.c)("power")),v.a.createElement("th",null,Object(Q.c)("balance")))),v.a.createElement("tbody",null,e.map(function(e,t){return v.a.createElement("tr",{key:e.address},v.a.createElement("th",null,v.a.createElement(S.a,{address:e.address})),v.a.createElement("td",{className:"d-md-table-cell text-nowrap"},v.a.createElement(y.c,{value:e.balance/O.B/O.g*100,minimumFractionDigits:8,maximumFractionDigits:8})," ","%"),v.a.createElement("td",{className:"text-nowrap d-md-table-cell"},v.a.createElement(y.c,{value:e.power/O.B})),v.a.createElement("td",{className:"text-nowrap"},v.a.createElement(x.b,{amount:e.balance/O.B})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,s=n.rangeTotal,o=void 0===s?0:s,i=n.developers,d=n.modal,u=this.customizedColumn();a.formatMessage({id:"view_total"}),a.formatMessage({id:"account_unit"}),a.formatMessage({id:"table_info_big"}),a.formatMessage({id:"table_info_account_tip1"}),a.formatMessage({id:"table_info_account_tip2"});return v.a.createElement("main",{className:"container header-overlap pb-3 token_black"},d,l&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(H.b,null)),v.a.createElement("div",{className:"row mt-2"},r?v.a.createElement("p",{className:"developers_reward_tip"},Object(Q.c)("developers_reward_tip")):"",v.a.createElement("div",{className:"col-md-12 table_pos trc20-ad-bg"},r?v.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},v.a.createElement("div",null,Object(Q.c)("view_total")," ",r," ",Object(Q.c)("developers_account"))):"",v.a.createElement("div",{className:"table_pos_search",style:{right:"15px"}},v.a.createElement(J,{placeholder:a.formatMessage({id:"developers_search"}),enterButton:a.formatMessage({id:"search"}),size:"large",onSearch:function(t){return e.onSearchChange(t)}})),v.a.createElement("div",{className:"card table_pos table_pos_addr table_pos_addr_data"},v.a.createElement(c.a,{columns:u,rowKey:function(e,t){return t},dataSource:i,loading:l,onChange:this.handleTableChange,pagination:this.state.pagination,bordered:!0,rowClassName:function(e,t){if(e.index<6)return"trc20-star-ad"}})),r?v.a.createElement("p",{className:"developers_tip_bottom"},Object(Q.c)("developers_niTron")):"")))}}]),t}(B.Component);var L={loadAccounts:C.r};t.default=Object(k.connect)(function(e){return{accounts:e.app.accounts}},L)(Object(y.h)(Y))}}]);