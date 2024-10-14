let counted = false;
$(window).scroll(function () {
  if (
    !counted &&
    $(window).scrollTop() >
      $("#amzon-counter").offset().top - window.innerHeight
  ) {
    
    $(".amzon-count").each(function () {
      const $this = $(this);
      // Initialize the counter
      $this.prop("amzon-counter", 0).animate(
        { Counter: parseInt($this.data("amzon-count").replace(/,/g, ""), 10) },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $this.text(Math.floor(now).toLocaleString()); 
          },
          complete: function () {
            $this.text(Math.floor(this.Counter).toLocaleString()); 
          },
        }
      );
    });
    counted = true;
  }
});
