(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(e,t,o){"use strict";o(70),o(306)},304:function(e,t){},305:function(e,t){},306:function(e,t){},35:function(e,t,o){"use strict";var n=o(20),a=o.n(n),r=o(4),l=o.n(r),i=o(13),s=o.n(i),h=o(23),c=o.n(h),p=o(9),u=o.n(p),d=o(12),C=o.n(d),m=o(0),g=o(1),v=o.n(g),f=o(278),b=o(14),y=o.n(b),k=o(43),x=o.n(k),P=function(e){function t(){s()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveCheckbox=function(t){e.rcCheckbox=t},e}return C()(t,e),c()(t,[{key:"shouldComponentUpdate",value:function(e,t,o){return!x()(this.props,e)||!x()(this.state,t)||!x()(this.context.radioGroup,o.radioGroup)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){var e,t=this.props,o=this.context,n=t.prefixCls,r=t.className,i=t.children,s=t.style,h=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(o[n[a]]=e[n[a]])}return o}(t,["prefixCls","className","children","style"]),c=o.radioGroup,p=l()({},h);c&&(p.name=c.name,p.onChange=c.onChange,p.checked=t.value===c.value,p.disabled=t.disabled||c.disabled);var u=y()(r,(e={},a()(e,n+"-wrapper",!0),a()(e,n+"-wrapper-checked",p.checked),a()(e,n+"-wrapper-disabled",p.disabled),e));return m.createElement("label",{className:u,style:s,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave},m.createElement(f.a,l()({},p,{prefixCls:n,ref:this.saveCheckbox})),void 0!==i?m.createElement("span",null,i):null)}}]),t}(m.Component),E=P;function w(e){var t=null,o=!1;return m.Children.forEach(e,function(e){e&&e.props&&e.props.checked&&(t=e.props.value,o=!0)}),o?{value:t}:void 0}P.defaultProps={prefixCls:"ant-radio",type:"radio"},P.contextTypes={radioGroup:v.a.any};var S=function(e){function t(e){s()(this,t);var o=u()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));o.onRadioChange=function(e){var t=o.state.value,n=e.target.value;"value"in o.props||o.setState({value:n});var a=o.props.onChange;a&&n!==t&&a(e)};var n=void 0;if("value"in e)n=e.value;else if("defaultValue"in e)n=e.defaultValue;else{var a=w(e.children);n=a&&a.value}return o.state={value:n},o}return C()(t,e),c()(t,[{key:"getChildContext",value:function(){return{radioGroup:{onChange:this.onRadioChange,value:this.state.value,disabled:this.props.disabled,name:this.props.name}}}},{key:"componentWillReceiveProps",value:function(e){if("value"in e)this.setState({value:e.value});else{var t=w(e.children);t&&this.setState({value:t.value})}}},{key:"shouldComponentUpdate",value:function(e,t){return!x()(this.props,e)||!x()(this.state,t)}},{key:"render",value:function(){var e=this,t=this.props,o=t.prefixCls,n=void 0===o?"ant-radio-group":o,r=t.className,l=void 0===r?"":r,i=t.options,s=y()(n,a()({},n+"-"+t.size,t.size),l),h=t.children;return i&&i.length>0&&(h=i.map(function(t,o){return"string"==typeof t?m.createElement(E,{key:o,disabled:e.props.disabled,value:t,onChange:e.onRadioChange,checked:e.state.value===t},t):m.createElement(E,{key:o,disabled:t.disabled||e.props.disabled,value:t.value,onChange:e.onRadioChange,checked:e.state.value===t.value},t.label)})),m.createElement("div",{className:s,style:t.style,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,id:t.id},h)}}]),t}(m.Component),_=S;S.defaultProps={disabled:!1},S.childContextTypes={radioGroup:v.a.any};var O=function(e){function t(){return s()(this,t),u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return C()(t,e),c()(t,[{key:"render",value:function(){var e=l()({},this.props);return this.context.radioGroup&&(e.onChange=this.context.radioGroup.onChange,e.checked=this.props.value===this.context.radioGroup.value,e.disabled=this.props.disabled||this.context.radioGroup.disabled),m.createElement(E,e)}}]),t}(m.Component),N=O;O.defaultProps={prefixCls:"ant-radio-button"},O.contextTypes={radioGroup:v.a.any},o.d(t,!1,function(){return N}),o.d(t,!1,function(){return _}),E.Button=N,E.Group=_,t.a=E},40:function(e,t,o){"use strict";var n=o(0),a=o(172);o(305);class r extends n.Component{constructor(e){super(e),this.handleColorPickerChange=this.handleColorPickerChange.bind(this),this.handleInputChange=this.handleInputChange.bind(this)}handleInputChange(e){this.props.onColorChange(e.target.value)}handleColorPickerChange(e){let t=e.hex;if(1!==e.rgb.a){const{r:o,g:n,b:a,a:r}=e.rgb;t=`rgba(${o},${n},${a},${r})`}this.props.onColorChange(t)}render(){const{color:e}=this.props,{onColorPreviewClick:t,isShowColorPicker:o,onColorPickerChangeComplete:r,onInputKeyDown:l,disabled:i,colorPickerStyle:s}=this.props;return n.createElement("div",{className:`color_input_wrapper ${i&&"color_input_wrapper_disable"}`},n.createElement("div",{className:"color_preview_wrapper",onClick:t},n.createElement("span",{style:{background:e},className:"color_preview"})),n.createElement("input",{disabled:i,type:"text",className:"color_input",value:e,onKeyDown:l,onChange:this.handleInputChange}),n.createElement("div",{className:"color_colorpicker",style:Object.assign({},s)},o&&!i&&n.createElement(a.ChromePicker,{color:e,onChangeComplete:r,onChange:this.handleColorPickerChange})))}}r.defaultProps={isShowColorPicker:!1,disabled:!1,autoPosition:!1,colorPickerStyle:{position:"relative",top:"10px",zIndex:1}},o(304),o.d(t,"a",function(){return i});const l={position:"fixed",left:0,top:0,zIndex:1,width:"100%",height:"100%"};class i extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.showColorPicker=this.showColorPicker.bind(this),this.hideColorPicker=this.hideColorPicker.bind(this),this.handleInputKeyDown=this.handleInputKeyDown.bind(this),this.handleColorPickerChangeComplete=this.handleColorPickerChangeComplete.bind(this),this.state={isShowColorPicker:!1,colorPickStyle:{}}}handleColorPickerChangeComplete(e){const{r:t,g:o,b:n,a:a}=e.rgb,r=`rgba(${t},${o},${n},${a})`;this.props.onColorComplete(r)}handleInputKeyDown(e){"enter"===e.key.toLocaleLowerCase()&&this.props.onColorComplete(e.currentTarget.value)}showColorPicker(){if(this.props.disabled)return;let e=this.inputRef.current.getBoundingClientRect();this.setState({isShowColorPicker:!0,colorPickStyle:{zIndex:1,position:"fixed",top:e.top+25,left:e.left-200}})}hideColorPicker(){this.setState({isShowColorPicker:!1})}shouldComponentUpdate(e,t){return this.props.disabled!==e.disabled||this.props.color!==e.color||this.state.isShowColorPicker!==t.isShowColorPicker}render(){const{color:e,onColorChange:t,disabled:o}=this.props,{isShowColorPicker:a,colorPickStyle:i}=this.state;return n.createElement("div",{ref:this.inputRef,style:{display:"inline-block"}},n.createElement("div",{className:"color_mask",onClick:this.hideColorPicker,hidden:!a,style:Object.assign({},l)}),n.createElement(r,{colorPickerStyle:i,disabled:o,onColorChange:t,onInputKeyDown:this.handleInputKeyDown,onColorPickerChangeComplete:this.handleColorPickerChangeComplete,style:{position:"relative"},isShowColorPicker:a,onColorPreviewClick:this.showColorPicker,color:e}))}}i.defaultProps={disabled:!1}},775:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var n=o(0),a=o(6),r=o.n(a),l=o(34),i=(o(71),o(35)),s=(o(171),o(11)),h=(o(79),o(44)),c=(o(123),o(40)),p=o(8);const u=i.a.Group;class d extends n.Component{constructor(e){super(e),this.handleSwitchChange=this.handleSwitchChange.bind(this),this.handleText=this.handleText.bind(this),this.handleColorChange=this.handleColorChange.bind(this),this.handleInputNumberChange=this.handleInputNumberChange.bind(this),this.handleRadioChange=this.handleRadioChange.bind(this),this.handleSelectChange=this.handleSelectChange.bind(this),this.state={color:"",subColor:""}}handleSwitchChange(e){const{chart:t,updateChart:o}=this.props;o(r()(t,{option:{title:{show:{$set:e}}}}))}handleText(e,t){const o=e.target.value,{chart:n,updateChart:a}=this.props;a(r()(n,{option:{title:{[t]:{$set:o}}}}))}handleColorChange(e,t){"color"===t?this.setState({color:e}):this.setState({subColor:e})}handleColorCompleteChange(e,t){const{chart:o,updateChart:n}=this.props;n(r()(o,{option:{title:{[t]:{color:{$set:e}}}}}))}handleInputNumberChange(e,t){const{chart:o,updateChart:n}=this.props;n(r()(o,{option:{title:{[t]:{fontSize:{$set:e}}}}}))}handleRadioChange(e){const t=e.target.value,{chart:o,updateChart:n}=this.props;n(r()(o,{option:{title:{x:{$set:t}}}}))}handleSelectChange(e,t){const{chart:o,updateChart:n}=this.props;n(r()(o,{option:{title:{[t]:{fontWeight:{$set:e}}}}}))}static getDerivedStateFromProps(e){const{textStyle:t,subtextStyle:o}=e.chart.option.title;return{color:t.color,subColor:o.color}}shouldComponentUpdate(e,t){return e.chart.option.title!==this.props.chart.option.title||t.color!==this.state.color||t.subColor!==this.state.subColor}render(){const{show:e,text:t,subtext:o,textStyle:a,subtextStyle:r,x:d}=this.props.chart.option.title,{color:C,subColor:m}=this.state;return n.createElement("div",{className:"title_control_wrapper"},n.createElement(p.a,{style:{margin:"-5px 8px 0px 8px"},name:"显示"},n.createElement(l.a,{checked:e,onChange:this.handleSwitchChange})),n.createElement(p.a,{name:"对齐"},n.createElement(u,{value:d,onChange:this.handleRadioChange},n.createElement(i.a,{value:"left",style:{color:"#fff"}},"左"),n.createElement(i.a,{value:"center",style:{color:"#fff"}},"中"),n.createElement(i.a,{value:"right",style:{color:"#fff"}},"右"))),n.createElement(p.a,{name:"标题"},n.createElement("input",{className:"input",value:t,onChange:e=>this.handleText(e,"text")})),n.createElement(p.a,{name:"标题颜色"},n.createElement(c.a,{color:C,onColorChange:e=>this.handleColorChange(e,"color"),onColorComplete:e=>this.handleColorCompleteChange(e,"textStyle")})),n.createElement(p.a,{className:"fontsize",name:"标题大小"},n.createElement(h.a,{min:1,value:a.fontSize,size:"small",onChange:e=>this.handleInputNumberChange(e,"textStyle")}),n.createElement(s.a,{size:"small",defaultValue:a.fontWeight,onChange:e=>this.handleSelectChange(e,"textStyle")},n.createElement(s.a.Option,{value:"normal"},"normal"),n.createElement(s.a.Option,{value:"lighter"},"lighter"),n.createElement(s.a.Option,{value:"bold"},"bold"))),n.createElement(p.a,{name:"副标题"},n.createElement("input",{className:"input",value:o,onChange:e=>this.handleText(e,"subtext")})),n.createElement(p.a,{name:"副标颜色"},n.createElement(c.a,{color:m,onColorChange:e=>this.handleColorChange(e,"subColor"),onColorComplete:e=>this.handleColorCompleteChange(e,"subtextStyle")})),n.createElement(p.a,{className:"fontsize",name:"副题大小"},n.createElement(h.a,{min:1,size:"small",value:r.fontSize,onChange:e=>this.handleInputNumberChange(e,"subtextStyle")}),n.createElement(s.a,{size:"small",defaultValue:r.fontWeight,onChange:e=>this.handleSelectChange(e,"subtextStyle")},n.createElement(s.a.Option,{value:"normal"},"normal"),n.createElement(s.a.Option,{value:"lighter"},"lighter"),n.createElement(s.a.Option,{value:"bold"},"bold"))))}}}}]);
//# sourceMappingURL=12.f8efb1bbb7ef32cd9aa3.js.map