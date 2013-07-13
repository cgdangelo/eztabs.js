;(function($) {
  $.fn.tabs = function() {
    $('.tabs > a').click(function() {
      $(this).siblings('a').removeClass('active');
      $(this).toggleClass('active');

      var contentPane = $('#' + this.getAttribute('data-toggle'));
      contentPane.siblings('section').hide();
      contentPane.toggle();

      return this;
    });
  }
})(jQuery);

