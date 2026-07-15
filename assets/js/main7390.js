$(document).ready(function () {
  // WOW animation
  new WOW().init({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  // video popup
  $(".video-link").magnificPopup({
    type: "iframe",
    // other options
  });

  // content popup
  $(".popup-link").magnificPopup({
    type: "inline",
    fixedBgPos: true,
    fixedContentPos: true,
    // other options
  });

  const brochure = $(".brochure_btn");
  const title = $("#enquire_price h3");
  const enquire = $(".enquire_now_btn");
  $(".brochure_btn").on("click", function () {
    if ($(".brochure_btn").hasClass(".download-brochure")) {
      title.text("Download Brochure");
    } else {
      title.text("Enquire Now");
    }

    console.log("testing");
  });

  function isMobileDevice() {
    return (
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    );
  }

  // $(".banner_wrapper").owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   nav: false,
  //   lazyLoad: true,
  //   center: false,
  //   smartSpeed: 2000,
  //   autoplay: true,

  //   navText: [
  //     '<i id="tvs_vv_lp_video_gallery_prev_btn" class="fa-solid fa-angle-left"></i>',
  //     '<i id="tvs_vv_lp_video_gallery_next_btn" class="fa-solid fa-angle-right"></i>',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //   },
  // });

  // zoomEnable();
  // function zoomEnable() {
  $(".image-popup").magnificPopup({
    type: "image",
    fixedContentPos: true,
    callbacks: {
      open: function () {
        var $image = $(".mfp-img");
        // $image.CloudZoom({
        //   zoomPosition: "inside",
        //   zoomOffsetX: 0,
        // });
      },
      close: function () {
        var $image = $(".mfp-img");
        if ($image.data("CloudZoom")) $image.data("CloudZoom").destroy();
      },
    },
  });
  // }

  $(".img-popup").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });

  $(".img-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });

  const $banner = $("#banner");

  $(window).on("scroll", function () {
    const $header = $(".header");
    const $banner = $("#banner");

    if ($banner.length === 0 || $header.length === 0) return;

    const bannerBottom = $banner.offset().top - 650 + $banner.outerHeight();
    const scrollTop = $(window).scrollTop();

    if (scrollTop === 0) {
      $header.removeClass("background active");
    } else if (scrollTop >= bannerBottom) {
      $header.addClass("background active");
    }
  });

  const $form = $(".banner_form.mobile");
  const $button = $(".enquire_now");

  if ($form.length && $button.length) {
    $(window).on("scroll", function () {
      let bannerBottom = $form.offset().top + $form.outerHeight() - 200;
      const scrollTop = $(window).scrollTop();

      if (scrollTop >= bannerBottom) {
        $button.fadeIn();
      } else {
        $button.fadeOut();
      }
    });
  }

   // Amenities Arc Slider (skip when static grid is present)
  if ($(".amenities_grid").length) {
    $(".amenities_grid").magnificPopup({
      delegate: "a.image-popup",
      type: "image",
      gallery: { enabled: true },
      mainClass: "mfp-fade",
      removalDelay: 300,
    });
  } else {

  const slides = [
      {
      title: "swiming pool",
      img: "assets/images/amenities/swiming pool.jpg",
      fullImg: "assets/images/amenities/swiming pool.jpg",
    },
    {
      title: "cafe",
      img: "assets/images/amenities/cafe.jpg",
      fullImg: "assets/images/amenities/cafe.jpg",
    },
    {
      title: "clubhouse",
      img: "assets/images/amenities/clubhouse.jpg",
      fullImg: "assets/images/amenities/clubhouse.jpg",
    },
    {
      title: "gym",
      img: "assets/images/amenities/gym.jpg",
      fullImg: "assets/images/amenities/gym.jpg",
    },
    {
      title: "Kids Park",
      img: "assets/images/amenities/Kids Park.jpg",
      fullImg: "assets/images/amenities/Kids Park.jpg",
    },
    {
      title: "social circle",
      img: "assets/images/amenities/social circle.jpg",
      fullImg: "assets/images/amenities/social circle.jpg",
    },
     ];
    // {
    //   title: "Mini Theatre",
    //   img: "assets/images/amenities/av-room.webp",
    //   fullImg: "assets/images/amenities/av-room.webp",
    // },
    // {
    //   title: "Basket Ball Court",
    //   img: "assets/images/amenities/balcony-cam-opt.webp",
    //   fullImg: "assets/images/amenities/balcony-cam-opt.webp",
    // },
    // {
    //   title: "Banquet Hall",
    //   img: "assets/images/amenities/banquet-hall.webp",
    //   fullImg: "assets/images/amenities/banquet-hall.webp",
    // },
    // {
    //   title: "Cards Room",
    //   img: "assets/images/amenities/card-room.webp",
    //   fullImg: "assets/images/amenities/card-room.webp",
    // },
    // {
    //   title: "Clubhouse",
    //   img: "assets/images/amenities/club-facade-cam.webp",
    //   fullImg: "assets/images/amenities/club-facade-cam.webp",
    // },
    // {
    //   title: "Clubhouse Front",
    //   img: "assets/images/amenities/club-facade-front-cam.webp",
    //   fullImg: "assets/images/amenities/club-facade-front-cam.webp",
    // },
    // {
    //   title: "Co-working Space",
    //   img: "assets/images/amenities/co-working-space.webp",
    //   fullImg: "assets/images/amenities/co-working-space.webp",
    // },
    // {
    //   title: "Games Room",
    //   img: "assets/images/amenities/games-room.webp",
    //   fullImg: "assets/images/amenities/games-room.webp",
    // },
    // {
    //   title: "GYM",
    //   img: "assets/images/amenities/gym.webp",
    //   fullImg: "assets/images/amenities/gym.webp",
    // },
    // {
    //   title: "Lobby Room",
    //   img: "assets/images/amenities/lobby.webp",
    //   fullImg: "assets/images/amenities/lobby.webp",
    // },
    // {
    //   title: "Swimming Pool",
    //   img: "assets/images/amenities/pool.webp",
    //   fullImg: "assets/images/amenities/pool.webp",
    // },
    // {
    //   title: "Squash Court",
    //   img: "assets/images/amenities/squash-court.webp",
    //   fullImg: "assets/images/amenities/squash-court.webp",
    // },
    // {
    //   title: "Mini Theatre",
    //   img: "assets/images/amenities/av-room.webp",
    //   fullImg: "assets/images/amenities/av-room.webp",
    // },
    // {
    //   title: "Basket Ball Court",
    //   img: "assets/images/amenities/balcony-cam-opt.webp",
    //   fullImg: "assets/images/amenities/balcony-cam-opt.webp",
    // },
    // {
    //   title: "Banquet Hall",
    //   img: "assets/images/amenities/banquet-hall.webp",
    //   fullImg: "assets/images/amenities/banquet-hall.webp",
    // },
    // {
    //   title: "Cards Room",
    //   img: "assets/images/amenities/card-room.webp",
    //   fullImg: "assets/images/amenities/card-room.webp",
    // },
    // {
    //   title: "Clubhouse",
    //   img: "assets/images/amenities/club-facade-cam.webp",
    //   fullImg: "assets/images/amenities/club-facade-cam.webp",
    // },
    // {
    //   title: "Clubhouse Front",
    //   img: "assets/images/amenities/club-facade-front-cam.webp",
    //   fullImg: "assets/images/amenities/club-facade-front-cam.webp",
    // },
    
 

 
  let active = Math.floor(slides.length / 2);
  const degrees = 12;
  const originY = window.innerWidth < 768 ? 2000 : 1800;
  let startX = 0;
  let dragX = 0;
  let isDragging = false;
  let mouseDown = false;

  function renderSlides() {
    const container = $(".slide-container");
    const half = Math.floor(slides.length / 2);
    container.children().each(function () {
      const el = this;
      const $el = $(el);
      const slideIndex = parseInt($el.attr("data-index"));
      let relativeIndex = (slideIndex - active + slides.length) % slides.length;
      if (relativeIndex > half) relativeIndex -= slides.length;

      const rotateDeg = relativeIndex * degrees;

      let opacity = 1;
      // hide both farthest slides on either side
      if (relativeIndex === half || relativeIndex === -half) {
        opacity = 0;
      }

      // When a slide wraps from one end of the arc to the other, its target
      // angle jumps by a large amount. Letting the CSS transition animate that
      // jump makes the slide sweep across the whole fan (and overlap the others
      // on rapid clicks). Detect the wrap and teleport that slide instead, so
      // normal step moves still animate smoothly but wraps don't sweep across.
      const prev = $el.data("relIndex");
      const wrapped = prev !== undefined && Math.abs(relativeIndex - prev) > 1;

      if (wrapped) {
        $el.css("transition", "none");
        $el.css({
          transform: `rotate(${rotateDeg}deg)`,
          opacity: opacity,
          "pointer-events": opacity > 0.1 ? "auto" : "none",
        });
        // force reflow so the teleport applies before the transition is restored
        void el.offsetHeight;
        $el.css("transition", "");
      } else {
        $el.css({
          transform: `rotate(${rotateDeg}deg)`,
          opacity: opacity,
          "pointer-events": opacity > 0.1 ? "auto" : "none",
        });
      }

      $el.data("relIndex", relativeIndex);
    });
  }

  function initialRender() {
    const container = $(".slide-container");
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      const rotateDeg =
        (((i - active + slides.length) % slides.length) -
          Math.floor(slides.length / 2)) *
        degrees;
      const slideEl = $(`
          <div class="slide" data-index="${i}" style="transform: rotate(${rotateDeg}deg); transform-origin: 50% ${originY}px;">
            <a href="${slide.fullImg}" class="image-popup" title="*Artistic rendition of TVS Emerald Auralis. Not an actual site image"><img src="${slide.img}"/></a>
            <div class="title">${slide.title}</div>
          </div>
        `);
      container.append(slideEl);
    }
    renderSlides();
  }
  function navigateSlide(direction) {
    const total = slides.length;
    active =
      direction === "left"
        ? (active - 1 + total) % total
        : (active + 1) % total;
    renderSlides();
  }

  $(".arrow.left").on("click", function () {
    navigateSlide("left");
  });
  $(".arrow.right").on("click", function () {
    navigateSlide("right");
  });

  $(document).ready(() => {
    initialRender();
    const container = document.querySelector(".slide-container");

    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });
    container.addEventListener("touchend", (e) => {
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX > 50) navigateSlide("left");
      else if (deltaX < -50) navigateSlide("right");
    });
    container.addEventListener("mousedown", (e) => {
      startX = e.clientX;
      mouseDown = true;
    });
    container.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;
      dragX = e.clientX - startX;
    });
    container.addEventListener("mouseup", (e) => {
      if (!mouseDown) return;
      mouseDown = false;
      if (dragX > 50) navigateSlide("left");
      else if (dragX < -50) navigateSlide("right");
      dragX = 0;
    });
    container.addEventListener("mouseleave", (e) => {
      if (mouseDown) {
        mouseDown = false;
        if (dragX > 50) navigateSlide("left");
        else if (dragX < -50) navigateSlide("right");
        dragX = 0;
      }
    });
    $(".slide-container").magnificPopup({
      delegate: "a.image-popup", // child item selector
      type: "image",
      gallery: {
        enabled: true, // Enable gallery mode
      },
      mainClass: "mfp-fade",
      removalDelay: 300,
    });
  });

  } // end amenities arc slider else

  // Amenities Arc Slider

  // Plan Slider

  const towerImages = {
    A: [
      "assets/images/plan/3bhk-2t/3bhk-2t-15.jpg",
      "assets/images/plan/3bhk-2t/3bhk-2t-16.jpg",
      // "assets/images/plan/3bhk-2t/3bhk-2t-17.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-18.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-19.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-20.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-21.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-22.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-23.webp",
      // "assets/images/plan/3bhk-2t/3bhk-2t-24.webp",
    ],
    // B: [
    //   "assets/images/plan/3bhk-2t/3bhk-2t-2.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-25.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-26.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-27.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-28.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-29.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-30.webp",
    //   "assets/images/plan/3bhk-3t/3bhk-3t-31.webp",
    // ],
  };

  function createTowerContent(towerKey) {
    const container = document.createElement("div");
    container.classList.add("tower-content");
    container.setAttribute("data-tower", towerKey);

    const carousel = document.createElement("div");
    carousel.classList.add("unit-slider", "owl-carousel", "owl-theme");

    towerImages[towerKey].forEach((imgSrc) => {
      const item = document.createElement("div");
      item.classList.add("item", "plan_img");

      const anchor = document.createElement("a");
      anchor.href = imgSrc;
      anchor.classList.add("image-popup");

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `Tower ${towerKey} Plan`;

      anchor.appendChild(img);
      item.appendChild(anchor);
      carousel.appendChild(item);
    });

    container.appendChild(carousel);
    return container;
  }

  function renderAllTowers() {
    const wrapper = document.getElementById("towerWrapper");
    wrapper.innerHTML = "";

    Object.keys(towerImages).forEach((tower) => {
      const el = createTowerContent(tower);
      if (tower === "A") el.classList.add("active"); // Default active
      wrapper.appendChild(el);
    });

    $(".unit-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 2,
      navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        900: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    $(".unit-slider").each(function () {
      $(this).magnificPopup({
        delegate: "a.image-popup",
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    });
  }

  // Init render
  renderAllTowers();

  // Tab Switching
  document.querySelectorAll(".tower_tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tower_tab")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const tower = btn.getAttribute("data-tower");
      document.querySelectorAll(".tower-content").forEach((div) => {
        div.classList.remove("active");
        if (div.getAttribute("data-tower") === tower) {
          div.classList.add("active");
        }
      });
    });
  });

  const $logo = $("#auralis_logo");
  const defaultLogo = "assets/images/TVS-Auralis.png";
  const scrolledLogo = "assets/images/TVS-Auralis.png";

  let isScrolled = false;

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const bannerBottom = $banner.offset().top + $banner.outerHeight();

    if (scrollTop > 50 && scrollTop < bannerBottom && !isScrolled) {
      $logo.attr("src", scrolledLogo);
      isScrolled = true;
    } else if ((scrollTop <= 50 || scrollTop >= bannerBottom) && isScrolled) {
      $logo.attr("src", defaultLogo);
      isScrolled = false;
    }
  });

  // Plan Slider

  function toggleActive(element, targetClass, contentClass) {
    $(element).on("click", function () {
      $(element).removeClass(targetClass);
      $(this).addClass(targetClass).css("transition", "all 0.5s ease-in-out");
      var tab = $(this).attr("data-target");
      $(contentClass).removeClass(targetClass).hide();
      $(tab).addClass(targetClass).fadeIn(1000);
    });
  }

  toggleActive(".plan_tab", "active", ".plan_wrapper");

  if ($(window).width() >= 767) {
  // Manual click functionality
  $(".prj_btn").on("click", function () {
    var targetSelector = $(this).data("target");
    var $newItem = $(targetSelector);
    var $currentItem = $(".highlights_wrapper .item.active");

    if ($newItem[0] === $currentItem[0]) return;

    $(".prj_btn").removeClass("active");
    $(this).addClass("active");

    $newItem
      .css({
        left: "100%",
        zIndex: 2,
        display: "block",
        opacity: 1,
      })
      .animate(
        {
          left: "0%",
        },
        600,
        function () {
          $currentItem
            .removeClass("active")
            .css({ opacity: 0, zIndex: 1, display: "none" });
          $newItem.addClass("active").css({ zIndex: 1 });
        }
      );
  });

  // 🔄 Auto-slide functionality
  let autoIndex = 0;
  const $buttons = $(".prj_btn");
  const delay = 5000; // 5 seconds interval

  setInterval(function () {
    autoIndex = (autoIndex + 1) % $buttons.length;
    $buttons.eq(autoIndex).trigger("click");
  }, delay);
}


  if ($(window).width() <= 767) {
    var $carousel = $(".highlights_wrapper");
    if ($carousel.length && !$carousel.hasClass("owl-loaded")) {
      $carousel.find(".highlights_img").css({
        position: "relative",
        opacity: 1,
        left: "auto",
        display: "block",
      });
      $carousel.addClass("owl-carousel owl-theme").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        center: false,
        items: 1,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        touchDrag: true,
        mouseDrag: true,
      });
    }
  }

  $(".video_wrapper").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    smartSpeed: 2000,
    autoplay: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  var plan_owl = $(".plan_slider");
  plan_owl.owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    center: false,
    smartSpeed: 2000,
    autoplay: true,

    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  plan_owl.on("translated.owl.carousel", function (event) {
    var itemsCount = event.item.count; // Total items
    var currentIndex = event.item.index; // Current index
    var pageSize = event.page.size; // Number of visible items at a time

    if (currentIndex === itemsCount - pageSize) {
      // Last slide reached, override Next button to go back to first slide
      $(".owl-next")
        .removeClass("disabled")
        .off("click")
        .on("click", function () {
          plan_owl.trigger("to.owl.carousel", [0, 500]); // Jump to first slide
        });
    } else {
      // Restore default next button behavior when not on the last slide
      $(".owl-next")
        .off("click")
        .on("click", function () {
          plan_owl.trigger("next.owl.carousel");
        });
    }
  });

  $("#more").on("click", function () {
    $(".verde_vista_about_content").toggleClass("active");
    $(".verde_vista_about_content").css("transition", "all 0.5s ease-in-out");
  });

  $(".menu").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("active");
    $(".navbar").toggleClass("active");
  });

  $(".navbar ul li a").on("click", function () {
    $(".menu").removeClass("active");
    $(".navbar").removeClass("active");
  });

  $(document).on("click", ".close", function () {
    $("#sticky-form").removeClass("active");
  });

  $(".enquire_now").on("click", function () {
    $("#sticky-form").toggleClass("active");
  });

  if ($("#leads_table").length) {
    var table = $("#leads_table").DataTable({
      dom: "Bfrtip",
      buttons: [
        { extend: "copy", text: "COPY TABLE" },
        { extend: "csv", text: "EXPORT TABLE TO CSV" },
        { extend: "excel", text: "EXPORT TABLE TO EXCEL" },
      ],
      initComplete: function () {
        this.api()
          .columns("5")
          .every(function () {
            var column = this;
            var select = $('<select><option value="">All</option></select>')
              .appendTo($(column.header()))
              .on("change", function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());

                column.search(val ? "^" + val + "$" : "", true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + d + '">' + d + "</option>");
              });
          });
      },
    });
  }

  var $btn = $("#sticky-form #tv_vv_lp_sticky_btn");
  var $bannerForm = $(".banner-form.mobile");

  // Guard clause – exit quietly if elements not present
  if (!$btn.length || !$bannerForm.length) return;

  function isInViewport($el) {
      var elementTop = $el.offset().top;
      var elementBottom = elementTop + $el.outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  function toggleStickyBtn() {

      // Mobile-only governance
      if ($(window).width() > 768) {
          $btn.css("visibility", "visible");
          return;
      }

      if (isInViewport($bannerForm)) {
          // Banner form in view → silence the CTA
          $btn.css("visibility", "hidden");
      } else {
          // Banner form out of view → CTA speaks
          $btn.css("visibility", "visible");
      }
  }

    // Initial check (important on refresh)
  toggleStickyBtn();

    // Bind to scroll & resize
  $(window).on("scroll resize", toggleStickyBtn);

  //anchor scroll smooth
  $('a[href*="#"]:not([href="#"])')
    .not(".tabs a, ._tabs a")
    .click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 56,
            },
            100
          );
          return false;
        }
      }
    });

  if ($(window).innerWidth() > 768) {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $("header").addClass("fixed-header animated slideInDown");
      } else {
        $("header").removeClass("fixed-header animated slideInDown");
      }
    });
  } else {
    $("header").addClass("fixed-header animated slideInDown");
  }

//   $(".phone").each(function () {
//   var input = this;

//   var iti = window.intlTelInput(input, {
//     initialCountry: "auto",
//     separateDialCode: true,
//     allowDropdown: true,
//     dropdownContainer: document.body, // 🔑 KEY FIX FOR MOBILE
//     hiddenInput: function () {
//       return {
//         phone: "phone_full",
//         country: "country_code",
//       };
//     },
//     geoIpLookup: function (callback) {
//       $.get("https://ipinfo.io", function () {}, "jsonp")
//         .always(function (resp) {
//           var countryCode = resp && resp.country ? resp.country : "IN";
//           callback(countryCode);
//         });
//     },
//     utilsScript:
//       "https://cdn.jsdelivr.net/npm/intl-tel-input@24.3.6/build/js/utils.js",
//   });

//   $(input).data("iti", iti);
// });


  // $.validator.addMethod(
  //   "validPhoneNumber",
  //   function (value, element) {
  //     var $input = $(element);
  //     var currentIti = $input.data("iti");
  //     return (
  //       this.optional(element) || (currentIti && currentIti.isValidNumber())
  //     ); // Validate number
  //   },
  //   "Please enter a valid phone number."
  // );

  /* Form Validation */
  // $("form").each(function () {
  //   console.log();
  //   var form = $(this);
  //   if (form.length) {
  //     form.validate({
  //       rules: {
  //         phone: {
  //           required: true,
  //           validPhoneNumber: true,
  //         },
  //         email: {
  //           required: true,
  //           // email: true,
  //         },
  //       },
  //       submitHandler: function (form) {
  //         console.log(form.id);
  //         var btn = $("#" + form.id + ' [type="submit"]'),
  //           _form = $(form),
  //           loading = _form.find(".loading");
  //         loading.fadeIn(),
  //           btn.attr("disabled", ""),
  //           _form.addClass("disabled");
  //         $.ajax({
  //           url: form.action,
  //           type: form.method,
  //           data: $(form).serialize(),
  //           success: function (data) {
  //             loading.fadeOut(),
  //               btn.removeAttr("disabled"),
  //               _form.removeClass("disabled");
  //             if (data) {
  //               try {
  //                 if (typeof data === "string") {
  //                   data = jQuery.parseJSON(data);
  //                 }
  //                 // Now data is guaranteed to be a JS object
  //               } catch (e) {
  //                 console.log(e);
  //               }
  //             }
  //             response = data.response;
  //             console.log(data);
  //             if (response.code == 0)
  //               ohSnap("Failed sending your informations, please try again!", {
  //                 color: "red",
  //               });
  //             else if (response.code == 1) {
  //               form.reset();
  //               ohSnap("Your information successfully reached us.", {
  //                 color: "green",
  //                 duration: "3000",
  //               }); //
  //               setTimeout(function () {
  //                 window.location = "./thankyou.php";
  //               }, 3000);
  //             } else if (response.code == 10) {
  //               form.reset();
  //               ohSnap("Your information successfully reached us.", {
  //                 color: "green",
  //                 duration: "3000",
  //               });
  //               setTimeout(function () {
  //                 window.location = "./thankyou.php?brochure=true";
  //               }, 3000);
  //             } else if (response.code == 11) {
  //               form.reset();
  //               ohSnap("Your information successfully reached us.", {
  //                 color: "green",
  //                 duration: "500",
  //               });
  //               setTimeout(function () {
  //                 // debugger;
  //                 window.location.href = "tel:+918065138714";
  //               }, 500);
  //             } else if (response.code == 2) {
  //               ohSnap("User already exists!", {
  //                 color: "red",
  //               });
  //               form.reset();
  //             } else
  //               ohSnap("Technical Error: Please contact administrator!", {
  //                 color: "green",
  //               });
  //           },
  //         });
  //         return false;
  //       },
  //     });
  //   }
  // });

  window.addEventListener("load", function () {
    document.getElementById("tv_vv_lp_sticky_btn").style.visibility = "visible";
  });

});
