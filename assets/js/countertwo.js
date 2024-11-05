$(document).ready(function () {
  // Function to start the counting animation
  function startCounting() {
    // Iterate over each .platform-count element
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
  }

  // Start the counting animation when the document is ready
  startCounting();
});
