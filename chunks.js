import{L as Y,a as s,b as T,c as ce,r as m,j as d,d as oe,E as ie,u as fe,e as de,$ as F,f as le,g as be,h as ge}from"./rich-editor-wc.js";var Z={},A={},me=Y,Q=s;let B=class ee extends Q.TextNode{static getType(){return"hashtag"}static clone(a){return new ee(a.__text,a.__key)}constructor(a,t){super(a,t)}createDOM(a){let t=super.createDOM(a);return me.addClassNamesToElement(t,a.theme.hashtag),t}static importJSON(a){let t=ue(a.text);return t.setFormat(a.format),t.setDetail(a.detail),t.setMode(a.mode),t.setStyle(a.style),t}exportJSON(){return{...super.exportJSON(),type:"hashtag"}}canInsertTextBefore(){return!1}isTextEntity(){return!0}};function ue(e=""){return Q.$applyNodeReplacement(new B(e))}A.$createHashtagNode=ue;A.$isHashtagNode=function(e){return e instanceof B};A.HashtagNode=B;const he=A;var pe=he,te={},xe=T,Ce=ce,Ee=Y,_e=m;te.useLexicalTextEntity=function(e,a,t){let[l]=xe.useLexicalComposerContext();_e.useEffect(()=>Ee.mergeRegister(...Ce.registerLexicalTextEntity(l,e,a,t)),[t,l,e,a])};const Ne=te;var we=Ne,H=pe,ve=T,Le=we,W=m,Me=RegExp;let S=String.fromCharCode,G="A-Za-zªµºÀ-ÖØ-öø-Ɂɐ-ˁˆ-ˑˠ-ˤˮͺΆΈ-ΊΌΎ-ΡΣ-ώϐ-ϵϷ-ҁҊ-ӎӐ-ӹԀ-ԏԱ-Ֆՙա-ևא-תװ-ײء-غـ-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ݭހ-ޥޱऄ-हऽॐक़-ॡॽঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹఅ-ఌఎ-ఐఒ-నప-ళవ-హౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹൠ-ൡඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཪྈ-ྋက-အဣ-ဧဩ-ဪၐ-ၕႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᴀ-ᶿḀ-ẛẠ-ỹἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℱℳ-ℹℼ-ℿⅅ-ⅉⰀ-Ⱞⰰ-ⱞⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄬㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-龻ꀀ-ꒌꠀ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ̀-ͯ҃-֑҆-ֹֻ-ֽֿׁ-ׂׄ-ׇׅؐ-ًؕ-ٰٞۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ްँ-ः़ा-्॑-॔ॢ-ॣঁ-ঃ়া-ৄে-ৈো-্ৗৢ-ৣਁ-ਃ਼ਾ-ੂੇ-ੈੋ-੍ੰ-ੱઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣଁ-ଃ଼ା-ୃେ-ୈୋ-୍ୖ-ୗஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕ-ౖಂ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕ-ೖം-ഃാ-ൃെ-ൈൊ-്ൗං-ඃ්ා-ුූෘ-ෟෲ-ෳัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-༹༙༵༷༾-༿ཱ-྄྆-྇ྐ-ྗྙ-ྼ࿆ာ-ဲံ-္ၖ-ၙ፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈ-ᧉᨗ-ᨛ᷀-᷃⃐-⃥⃜⃡-⃫〪-゙〯-゚ꠂ꠆ꠋꠣ-ꠧﬞ︀-️︠-︣À-ÖØ-öø-ÿĀ-ɏɓ-ɔɖ-ɗəɛɣɨɯɲʉʋʻ̀-ͯḀ-ỿЀ-ӿԀ-ԧⷠ-ⷿꙀ-֑ꚟ-ֿׁ-ׂׄ-ׇׅא-תװ-״﬒-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﭏؐ-ؚؠ-ٟٮ-ۓە-ۜ۞-۪ۨ-ۯۺ-ۼۿݐ-ݿࢠࢢ-ࢬࣤ-ࣾﭐ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼ‌-‌ก-ฺเ-๎ᄀ-ᇿ㄰-ㆅꥠ-꥿가-힯ힰ-퟿ﾡ-ￜァ-ヺー-ヾｦ-ﾟ０-９Ａ-Ｚａ-ｚぁ-ゖ゙-ゞ㐀-䶿一-鿿"+(S(173824)+"-"+S(177983)+S(177984)+"-"+S(178207)+S(194560)+"-"+S(195103)+"〃々〻"),{alpha:ye,alphanumeric:ae,hashChars:$e}={alpha:G,alphanumeric:G+"0-9٠-٩۰-۹०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉០-៩᠐-᠙᥆-᥏᧐-᧙０-９_",hashChars:"#\\uFF03"},X="["+ae+"]",Re=new Me("(^|$|[^&/"+(ae+"])([")+($e+"])(")+X+"*["+(ye+"]")+X+"*)","i");Z.HashtagPlugin=function(){let[e]=ve.useLexicalComposerContext();W.useEffect(()=>{if(!e.hasNodes([H.HashtagNode]))throw Error("HashtagPlugin: HashtagNode not registered on editor")},[e]);let a=W.useCallback(l=>H.$createHashtagNode(l.getTextContent()),[]),t=W.useCallback(l=>{if(l=Re.exec(l),l===null)return null;const v=l.index+l[1].length;return{end:v+(l[3].length+1),start:v}},[]);return Le.useLexicalTextEntity(t,H.HashtagNode,a),null};const De=Z;var Pe=De,re={},K={},ne=m;let U=[["Cat","rgb(125, 50, 0)"],["Dog","rgb(100, 0, 0)"],["Rabbit","rgb(150, 0, 0)"],["Frog","rgb(200, 0, 0)"],["Fox","rgb(200, 75, 0)"],["Hedgehog","rgb(0, 75, 0)"],["Pigeon","rgb(0, 125, 0)"],["Squirrel","rgb(75, 100, 0)"],["Bear","rgb(125, 100, 0)"],["Tiger","rgb(0, 0, 150)"],["Leopard","rgb(0, 0, 200)"],["Zebra","rgb(0, 0, 250)"],["Wolf","rgb(0, 100, 150)"],["Owl","rgb(0, 100, 100)"],["Gull","rgb(100, 0, 100)"],["Squid","rgb(150, 0, 150)"]],q=U[Math.floor(Math.random()*U.length)],se=ne.createContext({clientID:0,color:q[1],isCollabActive:!1,name:q[0],yjsDocMap:new Map});K.CollaborationContext=se;K.useCollaborationContext=function(e,a){let t=ne.useContext(se);return e!=null&&(t.name=e),a!=null&&(t.color=a),t};const Se=K;var Oe=Se,ze=Oe,j=T,O=m;function Ie(e){let a=new URLSearchParams;a.append("code",e);for(let t=1;t<arguments.length;t++)a.append("v",arguments[t]);throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${a} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)}re.LexicalNestedComposer=function({initialEditor:e,children:a,initialNodes:t,initialTheme:l,skipCollabChecks:v}){let M=O.useRef(!1),N=O.useContext(j.LexicalComposerContext);N==null&&Ie(9);let[h,{getTheme:p}]=N,R=O.useMemo(()=>{var c=l||p()||void 0;const C=j.createLexicalComposerContext(N,c);if(c!==void 0&&(e._config.theme=c),e._parentEditor=h,t)for(var _ of t){var w=c=null;typeof _!="function"&&(w=_,_=w.replace,c=w.with,w=w.withKlass||null);const u=e._nodes.get(_.getType());e._nodes.set(_.getType(),{exportDOM:u?u.exportDOM:void 0,klass:_,replace:c,replaceWithKlass:w,transforms:new Set})}else{_=e._nodes=new Map(h._nodes);for(const[u,f]of _)e._nodes.set(u,{exportDOM:f.exportDOM,klass:f.klass,replace:f.replace,replaceWithKlass:f.replaceWithKlass,transforms:new Set})}return e._config.namespace=h._config.namespace,e._editable=h._editable,[e,C]},[]),{isCollabActive:x,yjsDocMap:L}=ze.useCollaborationContext(),y=v||M.current||L.has(e.getKey());return O.useEffect(()=>{y&&(M.current=!0)},[y]),O.useEffect(()=>h.registerEditableListener(c=>{e.setEditable(c)}),[e,h]),O.createElement(j.LexicalComposerContext.Provider,{value:R},!x||y?a:null)};const Te=re;var Ae=Te;function He({className:e}){return d.jsx(oe.ContentEditable,{className:e||"ContentEditable__root"})}const We=!1;function k(e,a,t){return Math.min(Math.max(e,a),t)}const i={east:1,north:8,south:2,west:4};function je({imageRef:e,editor:a}){const t=m.useRef(null),l=m.useRef({priority:"",value:"default"}),v=m.useRef({currentHeight:100,currentWidth:100,direction:0,ratio:0,startHeight:0,startWidth:0,startX:0,startY:0}),[M,N]=m.useState(0),h=a.getRootElement(),p=h!==null?h.getBoundingClientRect().width-2*ie:100,R=h!==null?h.getBoundingClientRect().height:100,x=100,L=100,y=u=>{const f=u===i.east||u===i.west,b=u===i.north||u===i.south,o=u&i.north&&u&i.west||u&i.south&&u&i.east,E=f?"ew":b?"ns":o?"nwse":"nesw";h!==null&&h.style.setProperty("cursor",`${E}-resize`,"important"),document.body!==null&&(document.body.style.setProperty("cursor",`${E}-resize`,"important"),l.current.value=document.body.style.getPropertyValue("-webkit-user-select"),l.current.priority=document.body.style.getPropertyPriority("-webkit-user-select"),document.body.style.setProperty("-webkit-user-select","none","important"))},c=()=>{h!==null&&h.style.setProperty("cursor","text"),document.body!==null&&(document.body.style.setProperty("cursor","default"),document.body.style.setProperty("-webkit-user-select",l.current.value,l.current.priority))},C=(u,f)=>{var D,P,$;if(!a.isEditable()||!We)return;const b=(P=(D=e.current)==null?void 0:D.parentElement)==null?void 0:P.parentElement,o=($=b==null?void 0:b.parentElement)==null?void 0:$.parentElement,E=t.current;if(b!=null&&E!==null&&o!==void 0&&o!==null){u.preventDefault();const{width:r,height:n}=b.getBoundingClientRect(),g=v.current;g.startWidth=r,g.startHeight=n,g.ratio=r/n,g.currentWidth=r,g.currentHeight=n,g.startX=u.clientX,g.startY=u.clientY,g.direction=f,y(f),E.classList.add("image-control-wrapper--resizing"),o.style.width=`${100*r/p}%`,document.addEventListener("pointermove",_),document.addEventListener("pointerup",w)}},_=u=>{var P,$;const f=e.current,b=($=(P=e.current)==null?void 0:P.parentElement)==null?void 0:$.parentElement,o=v.current,E=o.direction&(i.east|i.west),D=o.direction&(i.south|i.north);if(f!==null&&b!==void 0&&b!==null)if(E&&D){let r=Math.floor(o.startX-u.clientX);r=o.direction&i.east?-r:r;const n=k(o.startWidth+r,x,p),g=n/o.ratio;b.style.width=`${100*n/p}%`,N(100*n/p),o.currentHeight=g,o.currentWidth=n}else if(D){let r=Math.floor(o.startY-u.clientY);r=o.direction&i.south?-r:r;const n=k(o.startHeight+r,L,R);o.currentHeight=n}else{let r=Math.floor(o.startX-u.clientX);r=o.direction&i.east?-r:r;const n=k(o.startWidth+r,x,p);f.style.width=`${100*n/p}%`,o.currentWidth=n}},w=()=>{var o,E;const u=(E=(o=e.current)==null?void 0:o.parentElement)==null?void 0:E.parentElement,f=v.current,b=t.current;u!==null&&b!==null&&(f.startWidth=0,f.startHeight=0,f.ratio=0,f.startX=0,f.startY=0,f.currentWidth=0,f.currentHeight=0,b.classList.remove("image-control-wrapper--resizing"),c(),document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",w))};return m.useEffect(()=>{const u=v.current,f=e.current;if(f!=null){const{width:b}=f.getBoundingClientRect();u.currentWidth=b,N(100*b/p)}},[p,e]),d.jsxs(ke,{ref:t,className:"ImageResizer",style:{width:`${M}%`},children:[d.jsx("div",{className:"image-resizer image-resizer-n",onPointerDown:u=>{C(u,i.north)}}),d.jsx("div",{className:"image-resizer image-resizer-ne",onPointerDown:u=>{C(u,i.north|i.east)}}),d.jsx("div",{className:"image-resizer image-resizer-e",onPointerDown:u=>{C(u,i.east)}}),d.jsx("div",{className:"image-resizer image-resizer-se",onPointerDown:u=>{C(u,i.south|i.east)}}),d.jsx("div",{className:"image-resizer image-resizer-s",onPointerDown:u=>{C(u,i.south)}}),d.jsx("div",{className:"image-resizer image-resizer-sw",onPointerDown:u=>{C(u,i.south|i.west)}}),d.jsx("div",{className:"image-resizer image-resizer-w",onPointerDown:u=>{C(u,i.west)}}),d.jsx("div",{className:"image-resizer image-resizer-nw",onPointerDown:u=>{C(u,i.north|i.west)}})]})}const ke=fe.div`
  cursor: default;

  .image-resizer {
    display: block;
    width: 7px;
    height: 7px;
    position: absolute;
    background-color: rgb(60, 132, 244);
    border: 1px solid #fff;
  }

  .image-resizer.image-resizer-n {
    top: -6px;
    left: 48%;
    cursor: ${"pointer"};
  }

  .image-resizer.image-resizer-ne {
    top: -6px;
    right: -6px;
    cursor: ${"arrow"};
  }

  .image-resizer.image-resizer-e {
    bottom: 48%;
    right: -6px;
    cursor: ${"arrow"};
  }

  .image-resizer.image-resizer-se {
    bottom: -2px;
    right: -6px;
    cursor: ${"arrow"};
  }

  .image-resizer.image-resizer-s {
    bottom: -2px;
    left: 48%;
    cursor: ${"arrow"};
  }

  .image-resizer.image-resizer-sw {
    bottom: -2px;
    left: -6px;
    cursor: ${"arrow"};
  }

  .image-resizer.image-resizer-w {
    bottom: 48%;
    left: -6px;
    cursor: ${"arrow"};
  }

  .image-resizer.image-resizer-nw {
    top: -6px;
    left: -6px;
    cursor: ${"arrow"};
  }
`;function Ye({children:e,className:a}){return d.jsx("div",{className:a||"Placeholder__root",children:e})}const J=new Set,V=s.createCommand("RIGHT_CLICK_IMAGE_COMMAND");function Be(e){if(!J.has(e))throw new Promise(a=>{const t=new Image;t.src=e,t.onload=()=>{J.add(e),a(null)}})}function Ke({altText:e,className:a,imageRef:t,src:l}){return Be(l),d.jsx("img",{className:a||void 0,src:l,alt:e,ref:t,draggable:"false"})}function Ge({src:e,altText:a,nodeKey:t,width:l,resizable:v,showCaption:M,caption:N,captionsEnabled:h}){const p=m.useRef(null),R=m.useRef(null),[x,L,y]=de.useLexicalNodeSelection(t),[c]=T.useLexicalComposerContext(),[C,_]=m.useState(null),w=m.useRef(null),u=m.useCallback(r=>{if(x&&s.$isNodeSelection(s.$getSelection())){r.preventDefault();const g=s.$getNodeByKey(t);F(g)&&g.remove()}return!1},[x,t]),f=m.useCallback(r=>{const n=s.$getSelection(),g=R.current;if(x&&s.$isNodeSelection(n)&&n.getNodes().length===1){if(M)return s.$setSelection(null),r.preventDefault(),N.focus(),!0;if(g!==null&&g!==document.activeElement)return r.preventDefault(),g.focus(),!0}return!1},[N,x,M]),b=m.useCallback(r=>w.current===N||R.current===r.target?(s.$setSelection(null),c.update(()=>{L(!0);const n=c.getRootElement();n!==null&&n.focus()}),!0):!1,[N,c,L]),o=m.useCallback(r=>{const n=r;return n.target===p.current?(n.shiftKey?L(!x):(y(),L(!0)),!0):!1},[x,L,y]),E=m.useCallback(r=>{c.getEditorState().read(()=>{const n=s.$getSelection();r.target.tagName==="IMG"&&s.$isRangeSelection(n)&&n.getNodes().length===1&&c.dispatchCommand(V,r)})},[c]);m.useEffect(()=>{let r=!0;const n=c.getRootElement(),g=Y.mergeRegister(c.registerUpdateListener(({editorState:z})=>{r&&z.read(()=>{const I=s.$getSelection();(s.$isNodeSelection(I)||s.$isRangeSelection(I))&&_(I)})}),c.registerCommand(s.SELECTION_CHANGE_COMMAND,(z,I)=>(w.current=I,!1),s.COMMAND_PRIORITY_LOW),c.registerCommand(s.CLICK_COMMAND,o,s.COMMAND_PRIORITY_LOW),c.registerCommand(V,o,s.COMMAND_PRIORITY_LOW),c.registerCommand(s.DRAGSTART_COMMAND,z=>z.target===p.current?(z.preventDefault(),!0):!1,s.COMMAND_PRIORITY_LOW),c.registerCommand(s.KEY_DELETE_COMMAND,u,s.COMMAND_PRIORITY_LOW),c.registerCommand(s.KEY_BACKSPACE_COMMAND,u,s.COMMAND_PRIORITY_LOW),c.registerCommand(s.KEY_ENTER_COMMAND,f,s.COMMAND_PRIORITY_LOW),c.registerCommand(s.KEY_ESCAPE_COMMAND,b,s.COMMAND_PRIORITY_LOW));return n==null||n.addEventListener("contextmenu",E),()=>{r=!1,g(),n==null||n.removeEventListener("contextmenu",E)}},[y,c,x,t,u,f,b,o,E,L]);const D=()=>{c.update(()=>{const r=s.$getNodeByKey(t);F(r)&&r.setShowCaption(!0)})},P=x&&s.$isNodeSelection(C),$=x;return d.jsx(m.Suspense,{fallback:null,children:d.jsxs(d.Fragment,{children:[d.jsx("div",{draggable:P,children:d.jsx(Ke,{className:$?`focused ${s.$isNodeSelection(C)?"draggable":""}`:null,src:e,altText:a,imageRef:p,width:l})}),M&&d.jsx("div",{className:"image-caption-container",children:d.jsxs(Ae.LexicalNestedComposer,{initialEditor:N,children:[d.jsx(le.AutoFocusPlugin,{}),d.jsx(Pe.HashtagPlugin,{}),d.jsx(be.RichTextPlugin,{contentEditable:d.jsx(He,{className:"ImageNode__contentEditable"}),placeholder:d.jsx(Ye,{className:"ImageNode__placeholder",children:"Enter a caption..."}),ErrorBoundary:ge})]})}),v&&s.$isNodeSelection(C)&&$&&d.jsx(je,{showCaption:M,setShowCaption:D,editor:c,buttonRef:R,imageRef:p,nodeKey:t,captionsEnabled:h})]})})}export{V as RIGHT_CLICK_IMAGE_COMMAND,Ge as default};
