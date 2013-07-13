;(function($) {
  $.fn.eztabs = function() {
    var eztabs = $('[data-eztabs]');
    eztabs.find('[data-toggle]').click(function() {
      $(this).siblings('[data-toggle]').removeClass('active');
      $(this).toggleClass('active');

      var contentPane = $('[data-tab=' + this.getAttribute('data-toggle') + ']');
      contentPane.siblings('[data-tab]').hide();
      contentPane.toggle();

      return this;
    });
  }
})(jQuery);

