(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

/*	portfolio of images */
$(".filter-button").on("click", (e) => {
  const filter = $(e.target).attr("data-filter");
  console.log(filter);
  const items = $(".item-content").parent();
  for (item of items) {
    if (filter == "") {
      $(item).addClass("animated zoomIn faster");
      $(item).parent().addClass("animated zoomIn faster");
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");

      console.log("x");
    } else if ($(item).attr("data-category") == filter) {
      $(item).addClass("animated zoomIn faster");
      $(item).parent().addClass("animated zoomIn faster");
      $(item).removeClass("d-none");
      $(item).parent().removeClass("d-none");
    } else {
      $(item).addClass("d-none");
      $(item).parent().addClass("d-none");
      $(item).removeClass("animated zoomIn faster");
      $(item).parent().removeClass("animated zoomIn faster");
    }
  }
});

/* Instagram feed layout from Curator.io */
   (function () {
    var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1;
    i.src = "https://cdn.curator.io/published/afbd33ff-1985-47ea-a20b-c04d8f4eb1a6.js";
    e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
})();