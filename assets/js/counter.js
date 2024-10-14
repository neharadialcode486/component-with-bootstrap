let counted = false;
$(window).scroll(function () {
  if (
    !counted &&
    $(window).scrollTop() >
      $("#amzon-counter").offset().top - window.innerHeight
  ) {
    // Iterate over each .count element
    $(".amzon-count").each(function () {
      const $this = $(this);
      $this.prop("Counter", 0).animate(
        { Counter: $this.data("count") },
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

// counter-2
let countedTwo = false;
$(window).scroll(function () {
  if (
    !countedTwo &&
    $(window).scrollTop() >
      $("#platform-counter").offset().top - window.innerHeight
  ) {
    // Iterate over each .count element
    $(".platform-count").each(function () {
      const $this = $(this);
      $this.prop("Counter", 0).animate(
        { Counter: $this.data("count") },
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
    countedTwo = true;
  }
});
