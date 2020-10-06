(this.webpackJsonpkryptonian=this.webpackJsonpkryptonian||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=a(2),s=a(3),o=a(5),u=a(4),m=a(8),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(m.b,{to:"/",className:"item"},"Kryptonian"),r.a.createElement("div",{className:"ui attached stackable menu"},r.a.createElement("div",{className:"ui simple dropdown right item"},"More",r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("div",{className:"menu"},r.a.createElement("a",{className:"item"},r.a.createElement("i",{className:"info circle icon"})," About Kryptonian"),r.a.createElement("a",{className:"item"},r.a.createElement("i",{className:"user secret icon"})," About the author")))),r.a.createElement("hr",null))}}]),a}(r.a.Component),d=a(6),E=a.n(d),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(i.a)(this,a),(r=t.call(this,e,n)).onInputChange=function(e){r.setState({text:e.target.value}),r.props.onChange(e.target.value)},r.state={text:""},r}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:this.props.id},this.props.label),r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",placeholder:this.props.placeholder,defaultValue:this.state.text,onChange:this.onInputChange}),r.a.createElement("i",{className:"inverted circular sync link icon"})))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(i.a)(this,a),(r=t.call(this,e,n)).onInputChange=function(e){r.setState({text:e.target.value}),r.props.onChange(e.target.value)},r.state={text:""},r}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{className:"ui field"},r.a.createElement("label",{htmlFor:this.props.id,className:"ui secondary pointing"},this.props.label),r.a.createElement("textarea",{placeholder:this.props.placeholder,onChange:this.onInputChange}))}}]),a}(r.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(i.a)(this,a),(r=t.call(this,e,n)).onFormSubmit=function(e){e.preventDefault()},r.onSecretKeyChange=function(e){r.setState({secretKey:e})},r.onPlainTextChange=function(e){r.setState({plainText:e})},r.onEncryptClick=function(){var e=E.a.utils.utf8.toBytes(r.getPaddedString(r.state.plainText));console.log(E.a.utils.utf8.toBytes(r.state.secretKey).length);var t=new E.a.ModeOfOperation.ecb(E.a.utils.utf8.toBytes(r.state.secretKey)),a=t.encrypt(e),n=E.a.utils.utf8.fromBytes(a);r.setState({cipherText:n,encrypt:!1}),console.log("encrypted "+r.state.plainText+" to "+n),console.log("decrypted is "+E.a.utils.utf8.fromBytes(t.decrypt(a)))},r.state={secretKey:"",plainText:"Text to encrypt",cipherText:"",encrypt:!0},r}return Object(s.a)(a,[{key:"getPaddedString",value:function(e){var t=e.length;if(0==t%16)return e;var a=16*(Math.floor(t/16)+1);return e.padEnd(a)}},{key:"renderTextFields",value:function(){var e=this;return this.state.encrypt?r.a.createElement(y,{label:"Plain Text",id:"plain-text",placeholder:"Enter text to Encrypt",onChange:function(t){return e.onPlainTextChange(t.valueOf())}}):r.a.createElement(y,{label:"Secret Text",id:"secret-text",placeholder:"Enter text to Decrypt",onChange:function(t){return e.onPlainTextChange(t.valueOf())}})}},{key:"renderButtons",value:function(){return this.state.encrypt?r.a.createElement("button",{className:"ui positive toggle button",onClick:this.onEncryptClick},"Encrypt"):r.a.createElement("button",{className:"ui positive toggle button",onClick:this.onEncryptClick},"Decrypt")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"ui form error",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"ui field"},r.a.createElement("label",null,"Encryption Type"),r.a.createElement("div",{className:"ui fluid selection dropdown"},r.a.createElement("input",{type:"hidden",name:"encryptionType"}),r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("div",{className:"default text"},"Select Encryption Type"),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"item key"}),r.a.createElement("div",{className:"item","data-value":"jenny"},r.a.createElement("img",{className:"ui mini avatar image",src:"/images/avatar/small/jenny.jpg",title:"AES (Advanced Encryption Standard)\nDES (Data Encryption Standard)\nIDEA (International Data Encryption Algorithm)\nBlowfish (Drop-in replacement for DES or IDEA)\nRC4 (Rivest Cipher 4)\nRC5 (Rivest Cipher 5)\nRC6 (Rivest Cipher 6)"}))))),r.a.createElement("div",{className:"ui field"},r.a.createElement(h,{label:"Secret key",id:"key",placeholder:"Enter/Generate secret key",onChange:function(t){return e.onSecretKeyChange(t.valueOf())}})),r.a.createElement("div",{className:"ui field"},r.a.createElement("div",{className:"ui toggle right floated primary checkbox"},r.a.createElement("input",{type:"checkbox",name:"public",checked:this.state.encrypt,onChange:function(t){return e.setState({encrypt:t.target.checked})}}),r.a.createElement("label",null,"Encrypt"))),this.renderTextFields(),r.a.createElement("div",{className:"ui field",style:{marginTop:"10px"}},r.a.createElement("div",{className:"ui buttons"},r.a.createElement("button",{className:"ui button"},"Reset"),r.a.createElement("div",{className:"or"}),this.renderButtons())),r.a.createElement("div",{className:"ui field"},r.a.createElement("div",{className:"ui buttons"},r.a.createElement("button",{className:"ui positive toggle button"},"Create Keypair")))))}}]),a}(r.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui top attached tabular menu"},r.a.createElement("div",{className:"active item"},r.a.createElement("i",{className:"key icon"}),"Symmetric Encryption"),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"key icon"}),"Asymmetric Encryption"),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"pencil alternate icon"})," Signature"),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"hashtag icon"})," Hashing")),r.a.createElement("div",{className:"ui bottom attached active tab segment"},r.a.createElement(v,null)))}}]),a}(r.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"ui container"},r.a.createElement(p,null),r.a.createElement(f,null)))}}]),a}(r.a.Component);l.a.render(r.a.createElement(b,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cbc371d6.chunk.js.map