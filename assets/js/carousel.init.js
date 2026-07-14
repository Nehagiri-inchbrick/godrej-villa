
// owl carousel
var owl_amenities_slider = $('#owl_amenities_slider');
owl_amenities_slider.owlCarousel({
  loop: true,
  nav: true,
  lazyLoad: true,
  autoplay: false,
  margin: 10,
  navText: [
    '<div id="serene_amenties_slider_prev_btn" class="owl-prev-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="prev_btn">Prev</p></div>',
    '<div id="serene_amenties_slider_next_btn" class="owl-next-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="next_btn">Next</p></div>'
  ],
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});
var owl_unit_plan_slider = $('#owl_unit_plan_slider, #owl_unit_plan_slider2');
owl_unit_plan_slider.owlCarousel({
  loop: false,
  lazyLoad: true,
  nav: true,
  autoplay: false,
  margin: 10,
  navText: [
    '<div id="serene_unitplan_slider_prev_btn" class="owl-prev-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="prev_btn">Prev</p></div>',
    '<div id="serene_unitplan_slider_next_btn" class="owl-next-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="next_btn">Next</p></div>'
  ],
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});
var owl_gallery_slider = $('#owl_gallery_slider');
owl_gallery_slider.owlCarousel({
  loop: true,
  nav: true,
  lazyLoad: true,
  autoplay: false,
  margin: 10,
  navText: [
    '<div id="serene_gallery_slider_prev_btn" class="owl-prev-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="prev_btn">Prev</p></div>',
    '<div id="serene_gallery_slider_next_btn" class="owl-next-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="next_btn">Next</p></div>'
  ],
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});
$("#owl_clubhouse_slider").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  lazyLoad: true,
  autoplay: false,
  center: true,
  margin: 10,
  smartSpeed: 1500,
  navText: [
    '<div id="serene_clubhouse_slider_prev_btn" class="owl-prev-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="prev_btn">Prev</p></div>',
    '<div id="serene_clubhouse_slider_next_btn" class="owl-next-btn"><img src="./assets/icons/left_arrow_btn.svg"></div><div><p class="next_btn">Next</p></div>'
  ],
  responsive: {
    0: {
      items: 1,
      stagePadding: 70,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3
    }
  }
})

