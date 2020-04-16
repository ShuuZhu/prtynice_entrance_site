(() => {

  let agent = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';


  const init = () => {
    bindingEventListener()
    initialGA()
  }

  const goto = url => {
    window.location = url
  }

  const sendGA = target => {
    if (typeof (ga) !== "undefined") {
      ga('pnga.send', 'event', agent, 'click', target);
    }
  }

  const bindingEventListener = () => {
    document.querySelector('#official').addEventListener('click', e => {
      goto('https://shop.prettyniceltd.com/')
      sendGA('official_web_site')
    })

    document.querySelector('#fb').addEventListener('click', e => {
      goto('https://www.facebook.com/Prettyniceltd/')
      sendGA('fb')
    })

    document.querySelector('#shopee').addEventListener('click', e => {
      goto('https://shopee.tw/cribbyprettynice')
      sendGA('shopee')
    })

    document.querySelector('#youtube').addEventListener('click', e => {
      goto('https://www.youtube.com/channel/UCGm3oZonZB43YsBkp7UgskQ')
      sendGA('youtube')
    })

    document.querySelector('#logo').addEventListener('click', e => {
      goto('https://shop.prettyniceltd.com/')
      sendGA('logo')
    })
  }

  const initialGA = () => {
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    if (typeof (ga) !== "undefined") {
      ga('create', 'UA-146644485-2', 'auto', 'pnga');
      ga('pnga.send', 'pageview');
    }
  }

  init()

})()  