(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{3453:function(e,t,a){"use strict";a.r(t);var l=a(14),n=a(13),c=a(20),r=a(19),o=a(21),m=a(0),u=a.n(m),b=a(3),s=a(28),i=a(23),d=a(11),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).hideModal=function(){a.setState({modal:null})},a.state={modal:null},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state.modal,t=this.props.sync;return t?u.a.createElement("main",{className:"container header-overlap _system"},e,u.a.createElement("div",{className:"",style:{borderTop:"4px solid #C23631"}},u.a.createElement("table",{className:"table table-hover m-0 bg-white"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"2",className:"border-top-0"},"Tronscan")),u.a.createElement("tr",null,u.a.createElement("th",{style:{width:300}},Object(b.c)("Sync"),":"),u.a.createElement("td",null,u.a.createElement(d.c,{value:t.sync.progress,maximumFractionDigits:2}),"%")),u.a.createElement("tr",null,u.a.createElement("th",null,Object(b.c)("block"),":"),u.a.createElement("td",null,u.a.createElement(i.b,{number:t.database.block},t.database.block))),u.a.createElement("tr",null,u.a.createElement("th",null,Object(b.c)("confirmed_block"),":"),u.a.createElement("td",null,u.a.createElement(i.b,{number:t.database.confirmedBlock-1},t.database.confirmedBlock-1))))),u.a.createElement("table",{className:"table table-hover m-0 bg-white mt-2"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"2",className:""},"Full Node")),u.a.createElement("tr",null,u.a.createElement("th",{style:{width:300}},Object(b.c)("block"),":"),u.a.createElement("td",null,u.a.createElement(i.b,{number:t.full.block},t.full.block))))),u.a.createElement("table",{className:"table table-hover m-0 mt-2 bg-white"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"2",className:""},"Solidity Node")),u.a.createElement("tr",null,u.a.createElement("th",{style:{width:300}},Object(b.c)("block"),":"),u.a.createElement("td",null,u.a.createElement(i.b,{number:t.solidity.block},t.solidity.block))))))):null}}]),t}(m.Component);t.default=Object(s.connect)(function(e){return{sync:e.app.syncStatus}},{})(E)}}]);