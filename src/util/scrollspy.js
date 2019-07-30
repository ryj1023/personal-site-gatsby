import $ from "jquery"
$(document).ready(() => {
  $(function() {
    $(".navbar a").on("click", function() {
      if ($(".navbar-toggler").css("display") !== "none") {
        $(".navbar-toggler").trigger("click")
      }
    })
  })
  ;(function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState)

    var anchorScrolls = {
      ANCHOR_REGEX: /^#[^ ]+$/,
      // OFFSET_HEIGHT_PX: window.innerWidth > 992 ? 46 : 80,
      OFFSET_HEIGHT_PX: 46,

      /**
       * Establish events, and fix initial scroll position if a hash is provided.
       */
      init: function() {
        this.scrollToCurrent()
        window.addEventListener("hashchange", this.scrollToCurrent.bind(this))
        document.body.addEventListener("click", this.delegateAnchors.bind(this))
      },

      /**
       * Return the offset amount to deduct from the normal scroll position.
       * Modify as appropriate to allow for dynamic calculations
       */
      getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX
      },

      /**
       * If the provided href is an anchor which resolves to an element on the
       * page, scroll to it.
       * @param  {String} href
       * @return {Boolean} - Was the href an anchor.
       */
      scrollIfAnchor: function(href, pushToHistory) {
        var match, rect, anchorOffset
        if (href === "#home") {
          $("html, body").animate({ scrollTop: 0 }, 500)
        }

        if (!this.ANCHOR_REGEX.test(href)) {
          return false
        }

        match = document.getElementById(href.slice(1))

        if (match) {
          rect = match.getBoundingClientRect()
          // 88 pixels is used as an offset to show the label of the section by subtacting it's height
          anchorOffset =
            window.pageYOffset + rect.top - this.getFixedOffset() - 88
          $("html, body").animate({ scrollTop: anchorOffset }, 500)
          // window.scrollTo(window.pageXOffset, anchorOffset);
          // Add the state to history as-per normal anchor links
          if (HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href)
          }
        }

        return !!match
      },

      /**
       * Attempt to scroll to the current location's hash.
       */
      scrollToCurrent: function() {
        this.scrollIfAnchor(window.location.hash)
      },

      /**
       * If the click event's target was an anchor, fix the scroll position.
       */
      delegateAnchors: function(e) {
        var elem = e.target
        if (
          elem.nodeName === "A" &&
          this.scrollIfAnchor(elem.getAttribute("href"), true)
        ) {
          e.preventDefault()
        }
      },
    }
    setTimeout(() => anchorScrolls.init(), 1000)
  })(window.document, window.history, window.location)
})
