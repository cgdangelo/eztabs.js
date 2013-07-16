;(function($) {
  $.fn.eztabs = function(options) {
    var settings = $.extend({}, $.fn.eztabs.defaults, options),
        eztabs = $('[data-eztabs]');

    eztabs.find('[data-toggle]').click(function() {
      settings.beforeSwitch();

      $(this).siblings('[data-toggle]').removeClass(settings.activeClass);
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
    beforeSwitch: function() {},
    afterSwitch: function() {}
  }
})(jQuery);

