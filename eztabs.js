;(function($) {
  $.fn.eztabs = function(options) {
    var settings = $.extend({}, $.fn.eztabs.defaults, options),
        eztabs = $('[data-eztabs]'),
        switches = eztabs.find('[data-toggle]');

    switches.first().addClass(settings.activeClass);
    switches.click(function(e) {
      e.preventDefault();

      if ($(this).hasClass(settings.activeClass) && !settings.collapseAll) {
        return;
      }

      settings.beforeSwitch();

      switches.removeClass(settings.activeClass);
      $(this).toggleClass(settings.activeClass);

      var contentPane = $('[data-tab=' + this.getAttribute('data-toggle') + ']');
      contentPane.siblings('[data-tab]').hide();
      contentPane.toggle();

      settings.afterSwitch();

      return this;
    });
  }

  $.fn.eztabs.defaults = {
    activeClass: 'active',
    collapseAll: false,
    beforeSwitch: function() {},
    afterSwitch: function() {}
  }
})(jQuery);

