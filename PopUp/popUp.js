const Selection = (function() {
  function takeNote(text) {
    let textArea = document.createElement('textarea');
    textArea.style.bottom = '10px';
    textArea.style.position = 'relative';
    textArea.style.left = '85%';
    textArea.style.top = '-750px';
    textArea.style.minWidth = '10em';
    textArea.style.minHeight = '8em';
    textArea.style.padding = '5px';
    textArea.style.border = '2px solid green';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.overflow = 'hidden';
    textArea.style.background = 'yellow';
    textArea.style.borderRadius= '5px';
    textArea.value = text ;
     
    document.body.appendChild(textArea);
    let lineBreak = document.createElement('br');
     document.body.appendChild(lineBreak);
    try {
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      console.log('Taking note was ' + msg);
    } catch (err) {
      console.log('Oops, unable to take note');
    }
  }

  function popUp(){
    try{
      let popUp = document.createElement('div');

          popUp.style.position = 'relative';
          popUp.style.top = '-500px';
          popUp.style.left = '40%';
          popUp.style.border = '3px solid black';
          popUp.style.background = 'rgba(219,254,184,0.6';
          popUp.style.height='300px';
          popUp.style.width = '300px';

      let video = document.createElement('video');

         video.style.width = '200px';
         video.style.height = '200px';
         video.src ='video.mkv';
         video.controls = 'true';

      let canvas = document.createElement('canvas');
          
          document.body.appendChild(popUp);
          popUp.appendChild(canvas) ;
          canvas.appendChild(video);

      let deleteButton = document.createElement('button');
          deleteButton.type = 'button';
          deleteButton.style.background= 'red';
          deleteButton.style.paddingRight= '15px';
          deleteButton.style.height = '20px';
          deleteButton.style.width = '20px';
          deleteButton.style.marginTop = '123px';
          deleteButton.style.float = 'right';
          deleteButton.innerHTML = 'X';
         popUp.appendChild(deleteButton);

        deleteButton.addEventListener('click', function() {
          popUp.remove(); 
      });  
    }
     catch(e){
       console.log(e);
     }
   }

  function popupwindow(url, title, w, h) {
    let left = screen.width / 2 - w / 2;
    let top = screen.height / 2 - h / 2;
    return window.open(
      url,
      title,
      'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
        w +
        ', height=' +
        h +
        ', top=' +
        top +
        ', left=' +
        left
    );
  }

  function _selection() {
    const menu = {
      takeNote: true,
      speak: true,
      disable: false,
      popUp: true
    };
   
    const takeNoteConfig = {
      icon:
        '<svg id="Layer_1" enable-background="new 0 0 256 256" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m238.24 194.406-57.594 57.594h-162.886v-220.48h220.48z" fill="#fcc24c"/><path d="m17.76 31.521h10v220.48h-10z" fill="#fce06a"/><path d="m228.24 31.521v172.885l10-10v-162.885z" fill="#dea42e"/><path d="m180.646 254h-162.886c-1.104 0-2-.896-2-2v-220.479c0-1.104.896-2 2-2h220.48c1.104 0 2 .896 2 2v162.886c0 .53-.211 1.039-.586 1.414l-57.594 57.594c-.375.374-.884.585-1.414.585zm-160.886-4h160.057l56.422-56.422v-160.057h-216.479zm218.48-55.594h.01z" fill="#690589"/><path d="m180.646 252v-57.594h57.594z" fill="#526faa"/><path d="m180.646 254c-.258 0-.518-.05-.765-.152-.748-.31-1.235-1.039-1.235-1.848v-57.594c0-1.104.896-2 2-2h57.594c.809 0 1.538.487 1.848 1.235.31.747.139 1.607-.434 2.179l-57.594 57.594c-.382.383-.894.586-1.414.586zm2-57.594v50.765l50.765-50.765z" fill="#690589"/><path d="m27.76 89.669c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2s2 .896 2 2v12c0 1.105-.895 2-2 2z" fill="#690589"/><path d="m115.23 4h25.54v55.041h-25.54z" fill="#f4efed"/><path d="m134.77 4h6v55.041h-6z" fill="#d6d1cf"/><path d="m115.23 4h6v55.041h-6z" fill="#fff"/><path d="m140.77 61.041h-25.54c-1.104 0-2-.896-2-2v-55.041c0-1.104.896-2 2-2h25.54c1.104 0 2 .896 2 2v55.041c0 1.105-.895 2-2 2zm-23.54-4h21.54v-51.041h-21.54z" fill="#690589"/></svg>' 
    }
    const popUpConfig = {
      icon:
       '<svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m503.464844 256c0 136.671875-110.792969 247.464844-247.464844 247.464844s-247.464844-110.792969-247.464844-247.464844 110.792969-247.464844 247.464844-247.464844 247.464844 110.792969 247.464844 247.464844zm0 0" fill="#ebba16"/><path d="m323.089844 219.65625-103.433594 103.433594c-8.492188 8.488281-22.253906 8.488281-30.746094 0-8.488281-8.492188-8.488281-22.253906 0-30.746094l103.433594-103.433594c8.492188-8.488281 22.253906-8.488281 30.746094 0 8.488281 8.492188 8.488281 22.253906 0 30.746094zm0 0" fill="#afb6bb"/><path d="m398.566406 125.296875-11.863281-11.863281c-26.09375-26.09375-68.785156-26.09375-94.878906 0l-33.367188 33.367187c-22.859375 22.859375-25.683593 58.460938-8.488281 84.476563l24.761719-24.761719c-1.492188-3.847656-2.304688-7.996094-2.304688-12.269531 0-9.011719 3.464844-17.445313 9.746094-23.722656l33.363281-33.375c6.28125-6.28125 14.714844-9.738282 23.722656-9.738282 9.011719 0 17.433594 3.464844 23.722657 9.738282l11.863281 11.859374c13.074219 13.074219 13.074219 34.355469 0 47.4375l-33.375 33.375c-6.28125 6.28125-14.710938 9.734376-23.722656 9.734376-4.28125 0-8.421875-.800782-12.269532-2.300782l-24.765624 24.761719c26.019531 17.195313 61.621093 14.371094 84.480468-8.492187l33.367188-33.363282c26.09375-26.078125 26.09375-68.769531.007812-94.863281zm0 0" fill="#e7eced"/><path d="m237.285156 305.46875c4.730469 12.046875 2.261719 26.289062-7.457031 36.007812l-33.375 33.375c-6.277344 6.28125-14.710937 9.738282-23.722656 9.738282s-17.433594-3.464844-23.722657-9.738282l-11.859374-11.859374c-6.28125-6.28125-9.746094-14.710938-9.746094-23.722657s3.464844-17.445312 9.746094-23.722656l33.363281-33.375c6.28125-6.28125 14.710937-9.738281 23.722656-9.738281 4.285156 0 8.421875.804687 12.273437 2.304687l24.761719-24.761719c-26.015625-17.195312-61.617187-14.371093-84.480469 8.488282l-33.363281 33.367187c-26.09375 26.09375-26.09375 68.785157 0 94.882813l11.859375 11.859375c26.097656 26.09375 68.789063 26.09375 94.882813 0l33.367187-33.363281c22.859375-22.863282 25.683594-58.464844 8.488282-84.480469zm0 0" fill="#e7eced"/><g fill="#4d007e"><path d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-494.933594c-131.746094 0-238.933594 107.1875-238.933594 238.933594s107.1875 238.933594 238.933594 238.933594 238.933594-107.1875 238.933594-238.933594-107.1875-238.933594-238.933594-238.933594zm0 0"/><path d="m204.289062 337.972656c-7.757812 0-15.507812-2.953125-21.410156-8.851562-11.8125-11.800782-11.8125-31.007813 0-42.820313l103.429688-103.429687c11.8125-11.804688 31.019531-11.804688 42.820312 0 11.8125 11.800781 11.8125 31.007812 0 42.820312l-103.4375 103.429688c-5.898437 5.90625-13.65625 8.851562-21.402344 8.851562zm103.421876-146.886718c-3.378907 0-6.765626 1.289062-9.34375 3.867187l-103.421876 103.421875c-5.15625 5.15625-5.15625 13.535156 0 18.679688 5.152344 5.148437 13.53125 5.148437 18.679688 0l103.429688-103.429688c5.15625-5.15625 5.15625-13.535156 0-18.679688-2.574219-2.578124-5.953126-3.859374-9.34375-3.859374zm0 0"/><path d="m317.6875 281.644531c-14.457031 0-28.980469-4.097656-41.675781-12.484375l-8.722657-5.769531 36.097657-36.089844 5.1875 2.015625c9.214843 3.582032 20 1.339844 26.871093-5.519531l33.367188-33.367187c4.707031-4.710938 7.3125-11 7.3125-17.6875 0-6.691407-2.59375-12.972657-7.304688-17.683594l-11.871093-11.871094c-9.335938-9.324219-26.019531-9.332031-35.378907 0l-33.367187 33.367188c-4.675781 4.667968-7.242187 10.957031-7.242187 17.691406 0 3.148437.578124 6.234375 1.722656 9.1875l2.015625 5.1875-36.089844 36.089844-5.757813-8.722657c-19.746093-29.875-15.71875-69.921875 9.574219-95.214843l33.363281-33.363282c14.234376-14.242187 33.222657-22.078125 53.480469-22.078125 20.257813 0 39.242188 7.835938 53.476563 22.070313l11.863281 11.859375c14.222656 14.234375 22.058594 33.21875 22.058594 53.480469 0 20.246093-7.835938 39.242187-22.070313 53.46875l-33.363281 33.375c-14.550781 14.546874-33.988281 22.058593-53.546875 22.058593zm-22.84375-21.675781c21.625 9.136719 47.28125 4.566406 64.316406-12.460938l33.375-33.363281c22.832032-22.835937 22.832032-59.980469 0-82.816406l-11.863281-11.863281c-11.007813-11.007813-25.710937-17.066406-41.402344-17.066406-15.695312 0-30.398437 6.058593-41.40625 17.066406l-33.371093 33.367187c-17.027344 17.03125-21.609376 42.691407-12.460938 64.316407l13.03125-13.03125c-.777344-3.226563-1.160156-6.527344-1.160156-9.871094 0-11.300782 4.351562-21.863282 12.246094-29.757813l33.363281-33.375c7.910156-7.890625 18.476562-12.234375 29.757812-12.234375 11.289063 0 21.851563 4.34375 29.746094 12.234375l11.871094 11.871094c7.933593 7.9375 12.304687 18.5 12.304687 29.746094 0 11.25-4.371094 21.820312-12.316406 29.757812l-33.371094 33.375c-10.242187 10.238281-25.542968 14.460938-39.628906 11.074219zm0 0"/><path d="m172.730469 426.667969c-20.25 0-39.242188-7.835938-53.476563-22.070313l-11.863281-11.859375c-14.222656-14.234375-22.058594-33.21875-22.058594-53.480469 0-20.246093 7.835938-39.242187 22.070313-53.46875l33.363281-33.363281c25.292969-25.300781 65.339844-29.320312 95.214844-9.585937l8.710937 5.761718-36.085937 36.097657-5.1875-2.015625c-9.214844-3.574219-20.003907-1.339844-26.878907 5.519531l-33.359374 33.367187c-4.675782 4.667969-7.242188 10.957032-7.242188 17.6875 0 6.734376 2.574219 13.015626 7.242188 17.691407l11.863281 11.863281c9.34375 9.34375 26.027343 9.34375 35.378906 0l33.363281-33.367188c7.015625-7.023437 9.191406-17.5625 5.546875-26.855468l-2.039062-5.195313 36.089843-36.085937 5.757813 8.71875c19.746094 29.875 15.71875 69.921875-9.574219 95.214844l-33.363281 33.367187c-14.226563 14.222656-33.222656 22.058594-53.472656 22.058594zm21.566406-179.253907c-15.15625 0-30.191406 5.8125-41.457031 17.078126l-33.375 33.363281c-22.832032 22.835937-22.832032 59.980469 0 82.816406l11.863281 11.863281c11.007813 11.007813 25.710937 17.066406 41.402344 17.066406 15.695312 0 30.398437-6.058593 41.40625-17.066406l33.363281-33.367187c17.023438-17.03125 21.605469-42.691407 12.460938-64.316407l-13.007813 13.003907c3.421875 14.140625-.65625 29.203125-11.101563 39.65625l-33.371093 33.375c-7.902344 7.890625-18.46875 12.242187-29.757813 12.242187-11.289062 0-21.851562-4.339844-29.753906-12.234375l-11.863281-11.863281c-7.894531-7.890625-12.246094-18.457031-12.246094-29.753906s4.351563-21.863282 12.246094-29.757813l33.367187-33.371093c10.257813-10.234376 25.539063-14.429688 39.628906-11.078126l13.027344-13.03125c-7.292968-3.105468-15.078125-4.625-22.832031-4.625zm0 0"/></g></svg>'
    }

    const speakConfig = {
      icon:
       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" width="24" height="24" class="selection__icon"><path d="M16 11c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13v-2h-2v2h-4v2h10v-2h-4z"/></svg>'
    };

    
    
    let selection = '';
    let text = '';
    let bgcolor = 'crimson';
    let iconcolor = '#fff';

    let _icons = {};
    let arrowsize = 5;
    let buttonmargin = 7 * 2;
    let iconsize = 24 + buttonmargin;
    let top = 0;
    let left = 0;

    function takeNoteButton() {
      const tnbtn = new Button(takeNoteConfig.icon, function() {
        // text = selection.toString();
        takeNote(text);
      });
      return tnbtn;
    }

    function popUpButton(){
      const hbtn = new Button(popUpConfig.icon, function(){
          popUp();
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
      const myitems=[{feature:'takeNote',call:takeNoteButton()},{feature:'popUp',call:popUpButton()},{feature:'speak',call:speakButton()}]
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
                moveTooltip();
                return;
              } else {
                document.querySelector('.selection').remove();
              }
            }
            if (hasSelection()) {
              selection = window.getSelection();
              text = selection.toString();
              // sel = selection.getRangeAt(0);
              drawTooltip();
            }
          }, 10);
        },
        false
      );
    }

    function config(options) {
      menu.takeNote = options.copy === undefined ? menu.tekeNote : options.takeNote;
      menu.speak = options.speak === undefined ? menu.speak : options.speak;
      menu.popUp = options.popUp === undefined ? menu.popUp : options.popUp;
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

