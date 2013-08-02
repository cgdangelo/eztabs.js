$.fn.eztabs = (options) ->
  $.fn.eztabs.defaults =
    activeClass: 'active'
    collapseAll: false
    beforeSwitch: ->
    afterSwitch: ->

  settings = $.extend {}, $.fn.eztabs.defaults, options
  eztabs = $ '[data-eztabs]'
  switches = eztabs.find '[data-toggle]'

  switches.first().addClass settings.activeClass
  switches.click (e) ->
    e.preventDefault()

    if $(@).hasClass(settings.activeClass) and !settings.collapseAll
      return

    settings.beforeSwitch()

    switches.removeClass settings.activeClass
    $(@).toggleClass settings.activeClass

    contentPane = $ '[data-tab=' + this.getAttribute('data-toggle') + ']'
    contentPane.siblings('[data-tab]').hide()
    contentPane.toggle()

  settings.afterSwitch()
