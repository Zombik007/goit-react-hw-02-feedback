(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(3),r=n.n(a),o=(n(14),n(4)),i=n(5),s=n(6),b=n(9),d=n(8),u=n(7),j=n.n(u),l=n(0),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)("button",{className:j.a.feedback__buttons,onClick:function(){return n(e)},children:e},e)}))})},v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})},f=function(e){var t=e.title,n=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})},g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}),(function(){e.setState({visible:!0})}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=t.bad,a=0;return 0===n&&0===c||(a=n/(c+n)*100),Math.round(a)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=e.visible;return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{title:"Please leave feedback",children:Object(l.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsxs)(f,{title:"Statistics",children:[!a&&Object(l.jsx)(O,{message:"No feedback given"}),a&&Object(l.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})]})}}]),n}(c.Component);r.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={feedback__buttons:"Feedback_feedback__buttons__3GFNw"}}},[[16,1,2]]]);
//# sourceMappingURL=main.5be66cd6.chunk.js.map