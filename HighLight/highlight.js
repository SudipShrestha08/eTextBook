const Selection = (function() {
  function copyTextToClipboard(text) {
    let textArea = document.createElement('textarea');
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
  }

  function highlightText(text){
    console.log('hello');
      // sel.commonAncestorContainer.parentNode.style.background="yellow";

        // let element = document.createElement("mark")
        // sel.surroundContents(element)
  }

  // function highlightText(sel){
  //       console.log(sel);
  //       // const r = window.getSelection().getRangeAt(0);
  //       const range = document.createRange();
  //       range.selectNode(sel.startContainer);
  //       const idWrapper = document.createElement('mark');
  //       idWrapper.setAttribute('id', '1232323233');

  //       range.surroundContents(idWrapper);
    
  //     try{
  //       let element = document.createElement("mark");
  //       sel.surroundContents(element);
  //        sel.commonAncestorContainer.parentNode.style.background="yellow";
  //       if(!element){
  //           throw 'Highlighting failed';
  //       }
  //    }catch(err){
  //      console.log(err); 
  //    }


// function highlightText(sel){
//       console.log(sel);
//       var ranges = [];
//       for(var i=0; i<sel.rangeCount; i++) {
//           var range = this.getRangeAt(i);
//           while(range.startContainer.nodeType == 3
//                 || range.startContainer.childNodes.length == 1)
//               range.setStartBefore(range.startContainer);
//           while(range.endContainer.nodeType == 3
//                 || range.endContainer.childNodes.length == 1)
//               range.setEndAfter(range.endContainer);
//           ranges.push(range);
//           var wrapper = document.createElement("mark");
//           wrapper.setAttribute('id', 'fixed');
//           range.surroundContents(wrapper)
//       }
//       this.removeAllRanges();
//       for(var i=0; i<ranges.length; i++) {
//           this.addRange(ranges[i]);
//       }
//       return;
// }

  function _selection() {
    const menu = {
      twitter: true,
      facebook: true,
      search: true,
      copy: true,
      speak: true,
      translate: true,
      disable: false,
      highlight: true
    };
   
    const copyConfig = {
      icon:
       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="selection__icon"><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"/></svg>'
    };

    const highlightConfig = {
      icon:
       '<svg id="Layer_3" enable-background="new 0 0 64 64" height="24" viewBox="0 0 64 64" width="24" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m62 62h-52l4-4h48z" fill="#e5f385"/></g><g><path d="m43 4-35 34 17 17 35-34z" fill="#94c049"/></g><g><path d="m43 4-23.603 22.929c3.57 2.501 7.914 3.973 12.603 3.973 10.279 0 18.909-7.049 21.325-16.577z" fill="#b4e05d"/></g><g><path d="m43.293 16.707-21.586 21.586c-.453.453-.707 1.067-.707 1.707 0 .64.254 1.254.707 1.707l.586.586c.453.453 1.067.707 1.707.707.64 0 1.254-.254 1.707-.707l21.586-21.586c.453-.453.707-1.067.707-1.707 0-.64-.254-1.254-.707-1.707l-.586-.586c-.453-.453-1.067-.707-1.707-.707-.64 0-1.254.254-1.707.707z" fill="#c8ec6c"/></g><g><path d="m47.293 17.293-.586-.586c-.453-.453-1.067-.707-1.707-.707s-1.254.254-1.707.707l-14.02 14.02c.894.111 1.803.174 2.727.174 2.047 0 4.027-.286 5.907-.809l9.385-9.385c.454-.453.708-1.067.708-1.707s-.254-1.254-.707-1.707z" fill="#e5f385"/></g><g><path d="m58 20 4-4v-3.757c0-2.717-1.079-5.322-3-7.243-1.921-1.921-4.526-3-7.243-3h-3.757l-4 4z" fill="#536d26"/></g><g><path d="m48 2-4 4 9.107 9.107c.577-1.969.893-4.05.893-6.206 0-2.385-.384-4.679-1.086-6.83-.383-.043-.768-.071-1.157-.071z" fill="#739937"/></g><g><path d="m13 54-4 4-7-1 7-7z" fill="#e5f385"/></g><g><path d="m24 54h-11l-4-4v-11z" fill="#536d26"/></g><g><path d="m25 56c-.256 0-.512-.098-.707-.293l-17-17c-.189-.189-.295-.446-.293-.714.002-.269.111-.523.303-.71l35-34c.393-.38 1.018-.376 1.404.01l17 17c.189.189.295.447.293.714s-.111.523-.303.71l-35 34c-.194.189-.446.283-.697.283zm-15.575-17.989 15.585 15.585 33.565-32.606-15.585-15.586z"/></g><g><path d="m24 55h-11c-.266 0-.52-.105-.707-.293l-4-4c-.188-.187-.293-.441-.293-.707v-11h2v10.586l3.414 3.414h10.586z"/></g><g><path d="m9 59c-.047 0-.094-.003-.142-.01l-7-1c-.375-.054-.688-.314-.807-.674-.12-.359-.026-.756.241-1.023l7-7 1.414 1.414-5.586 5.586 4.525.646 3.646-3.646 1.414 1.414-4 4c-.186.189-.441.293-.705.293z"/></g><g><path d="m58.707 20.707-1.414-1.414 3.707-3.707v-3.343c0-2.469-.961-4.79-2.707-6.536s-4.066-2.707-6.535-2.707h-3.344l-3.707 3.707-1.414-1.414 4-4c.187-.188.441-.293.707-.293h3.758c3.003 0 5.826 1.169 7.949 3.293s3.293 4.947 3.293 7.95v3.757c0 .265-.105.52-.293.707z"/></g><g><path d="m62 63h-52c-.404 0-.77-.243-.924-.617-.155-.374-.069-.804.217-1.09l4-4c.187-.188.441-.293.707-.293h48c.553 0 1 .447 1 1v4c0 .553-.447 1-1 1zm-49.586-2h48.586v-2h-46.586z"/></g><g><path d="m24 44c-.912 0-1.77-.355-2.414-1l-.586-.586c-.645-.645-1-1.502-1-2.414s.355-1.77 1-2.414l21.586-21.586c1.291-1.289 3.537-1.289 4.828 0l.586.586c.645.644 1 1.501 1 2.414s-.355 1.77-1 2.415l-21.586 21.585c-.644.645-1.502 1-2.414 1zm20-26.586-21.586 21.586c-.267.268-.414.622-.414 1s.147.732.414 1l.586.586c.535.533 1.465.533 2 0l21.586-21.586c.268-.267.414-.622.414-1s-.146-.733-.414-1l-.586-.586c-.534-.533-1.464-.535-2 0z"/></g><g><path d="m53 .101h2v19.799h-2z" transform="matrix(.707 -.707 .707 .707 8.745 41.113)"/></g></g></svg>'
    }

    const speakConfig = {
      icon:
       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="selection__icon"><path d="M16 11c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z"/></svg>'
    };

    let selection = '';
    let text = '';
    let sel = '';
    let bgcolor = 'crimson';
    let iconcolor = '#fff';

    let _icons = {};
    let arrowsize = 5;
    let buttonmargin = 7 * 2;
    let iconsize = 24 + buttonmargin;
    let top = 0;
    let left = 0;

    function copyButton() {
      const cbtn = new Button(copyConfig.icon, function() {
        copyTextToClipboard(text);
      });
      return cbtn;
    }

    function highlightButton(){
      const hbtn = new Button(highlightConfig.icon, function(){
        highlightText(sel);
      });
      return hbtn
    }

    function speakButton() {
      const spbtn = new Button(speakConfig.icon, function() {
        let speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
      });
      return spbtn;
    }

    function IconStyle() {
      const style = document.createElement('style');
      style.innerHTML = `.selection__icon{fill:${iconcolor};}`;
      document.body.appendChild(style);
    }

    function appendIcons() {
      const myitems=[{feature:'copy',call:copyButton()},{feature:'highlight',call:highlightButton()},{feature:'speak',call:speakButton()}]
      const div = document.createElement('div');
      let count = 0;
      myitems.forEach((item)=>{
        if(menu[item.feature]){
          div.appendChild(item.call);
          count++;
        }
      })
      return {
        icons: div,
        length: count
      };
    }

    function setTooltipPosition() {
      const position = selection.getRangeAt(0).getBoundingClientRect();
      const DOCUMENT_SCROLL_TOP =
        window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
      top = position.top + DOCUMENT_SCROLL_TOP - iconsize - arrowsize;
      left = position.left + (position.width - iconsize * _icons.length) / 2;
    }

    function moveTooltip() {
      setTooltipPosition();
      let tooltip = document.querySelector('.selection');
      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }

    function drawTooltip() {
      _icons = appendIcons();
      setTooltipPosition();

      const div = document.createElement('div');
      div.className = 'selection';
      div.style =
        'line-height:0;' +
        'position:absolute;' +
        'background-color:' +
        bgcolor +
        ';' +
        'border-radius:20px;' +
        'top:' +
        top +
        'px;' +
        'left:' +
        left +
        'px;' +
        'transition:all .2s ease-in-out;' +
        'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);' +
        'z-index:99999;';

      div.appendChild(_icons.icons);

      const arrow = document.createElement('div');
      arrow.style =
        'position:absolute;' +
        'border-left:' +
        arrowsize +
        'px solid transparent;' +
        'border-right:' +
        arrowsize +
        'px solid transparent;' +
        'border-top:' +
        arrowsize +
        'px solid ' +
        bgcolor +
        ';' +
        'bottom:-' +
        (arrowsize - 1) +
        'px;' +
        'left:' +
        (iconsize * _icons.length / 2 - arrowsize) +
        'px;' +
        'width:0;' +
        'height:0;';

      if (!menu.disable) {
        div.appendChild(arrow);
      }

      document.body.appendChild(div);
    }

    function attachEvents() {
      function hasSelection() {
        return !!window.getSelection().toString();
      }

      function hasTooltipDrawn() {
        return !!document.querySelector('.selection');
      }

      window.addEventListener(
        'mouseup',
        function() {
          setTimeout(function mouseTimeout() {
            if (hasTooltipDrawn()) {
              if (hasSelection()) {
                selection = window.getSelection();
                sel = selection.getRangeAt(0);
                text = selection.toString();
                moveTooltip();
                return;
              } else {
                document.querySelector('.selection').remove();
              }
            }
            if (hasSelection()) {
              selection = window.getSelection();
              sel = selection.getRangeAt(0);
              text = selection.toString();
              drawTooltip();
            }
          }, 10);
        },
        false
      );
    }

    function config(options) {
      menu.copy = options.copy === undefined ? menu.copy : options.copy;
      menu.speak = options.speak === undefined ? menu.speak : options.speak;
      menu.highlight = options.highlight === undefined ? menu.highlight : options.highlight;
      bgcolor = options.backgroundColor || '#333';
      iconcolor = options.iconColor || '#fff';
      return this;
    }

    function init() {
      IconStyle();
      attachEvents();
      return this;
    }

    return {
      config: config,
      init: init
    };
  }

  function Button(icon, clickFn) {
    const btn = document.createElement('div');
    btn.style = 'display:inline-block;' + 'margin:7px;' + 'cursor:pointer;' + 'transition:all .2s ease-in-out;';
    btn.innerHTML = icon;
    btn.onclick = clickFn;
    btn.onmouseover = function() {
      this.style.transform = 'scale(1.2)';
    };
    btn.onmouseout = function() {
      this.style.transform = 'scale(1)';
    };
    return btn;
  }
  return _selection;
})();

