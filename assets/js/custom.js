
(function () {
  if (window.__rocketLazyLoaded) return;
  var loaded = false;
  var events = ['keydown', 'mousedown', 'mousemove', 'touchstart', 'touchmove', 'wheel', 'scroll', 'click'];

  function activate() {
    if (loaded) return;
    loaded = true;
    window.__rocketLazyLoaded = true;
    events.forEach(function (e) {
      window.removeEventListener(e, activate, { passive: true });
    });

    var queue = Array.prototype.slice.call(
      document.querySelectorAll('script[type="rocketlazyloadscript"]')
      );

    function runNext() {
      var s = queue.shift();
      if (!s) return;
      var n = document.createElement('script');
      for (var i = 0; i < s.attributes.length; i++) {
        var a = s.attributes[i];
        var name = a.name;
            if (name === 'type') continue; // drop the rocketlazyloadscript type
            if (name === 'data-rocket-src') name = 'src';
            else if (name === 'data-rocket-type') name = 'type';
            else if (name === 'data-rocket-defer') continue;
            n.setAttribute(name, a.value);
          }
          var parent = s.parentNode;
          if (n.hasAttribute('src')) {
            // external — wait for load before processing the next, preserves order
            n.onload = n.onerror = runNext;
            parent.insertBefore(n, s);
            parent.removeChild(s);
          } else {
            // inline — copy textContent; executes synchronously on insert
            n.textContent = s.textContent;
            parent.insertBefore(n, s);
            parent.removeChild(s);
            runNext();
          }
        }
        runNext();
      }

      events.forEach(function (e) {
        window.addEventListener(e, activate, { passive: true });
      });
      // Fallback: still load even if the user never interacts.
      setTimeout(activate, 5000);
    })();
    const centerLatLng = { lat: 13.118441377132113, lng: 77.63403428615254 };
    const iconBase = "https://www.tvsemerald.com/wp-content/themes/tvs/images/map-icons/";

    let map;
    let centerMarker;
    let allMarkers = [];
    let markersByCategory = {};

    window.initMap = function () {
      map = new google.maps.Map(document.getElementById("map_wrapper"), {
        zoom: 15,
        center: centerLatLng,
        scrollwheel: true,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE],
          position: google.maps.ControlPosition.BOTTOM_LEFT,
        },
      });

        // Permanent default marker
      centerMarker = new google.maps.Marker({
        map: map,
        position: centerLatLng,
        title: "TVS Emerald Thanisandra",
        animation: google.maps.Animation.BOUNCE,
      });

      const centerInfo = new google.maps.InfoWindow({
        content: "<div><strong>TVS Emerald Thanisandra</strong></div>",
      });
      centerMarker.addListener("click", () => centerInfo.open(map, centerMarker));

      const features = [
        { position: { lat: 13.11711254966546, lng: 77.62527413934875}, type: "schools", location: "Kattigenahalli Government High School", distance: "1.8 km" },
        { position: { lat: 13.12149680219174, lng: 77.62692285899641}, type: "schools", location: "Yashasvi Vidyanikethan", distance: "1.2 km" },
        { position: { lat: 13.117995788066487, lng: 77.64169283212104}, type: "schools", location: "Delhi Public School Bangalore North", distance: "2.7 km" },
        { position: { lat: 13.104087270383333, lng: 77.62490680981513}, type: "schools", location: "EuroSchool North Campus", distance: "3.1 km" },
        { position: { lat: 13.11775515184523, lng: 77.66078730209743}, type: "schools", location: "Vidyashilp School: Bagalur", distance: "4.5 km" },
        { position: { lat: 13.148723296298526, lng: 77.64432496800107}, type: "schools", location: "KESAR - THE INTERNATIONAL SCHOOL", distance: "4.5 km" },
        { position: { lat: 13.1230, lng: 77.6095 }, type: "schools", location: "Canadian International School", distance: "5.5 km" },
        { position: { lat: 13.0975, lng: 77.5930 }, type: "schools", location: "Ryan International School, Yelahanka", distance: "6.9 km" },
        { position: { lat: 13.1058, lng: 77.5827 }, type: "schools", location: "B M English School ICSE", distance: "6.3 km" },
        { position: { lat: 13.1121, lng: 77.5850 }, type: "schools", location: "Mary Immaculate School", distance: "6.4 km" },
        { position: { lat: 13.1219, lng: 77.5902 }, type: "schools", location: "Oxford English School", distance: "9.2 km" },
        { position: { lat: 13.1420, lng: 77.6378 }, type: "universities", location: "Reva University", distance: "350 m" },
        { position: { lat: 13.050566, lng: 77.597994 }, type: "universities", location: "Presidency PU College", distance: "3.1 km" },
        { position: { lat: 13.107222461090846, lng: 77.66542215894536}, type: "universities", location: "Koshys Group of Institutions", distance: "6.5 km" },
        { position: { lat: 13.118421753743105, lng: 77.65556740537237 }, type: "universities", location: "CMR University", distance: "6.8 km" },
        { position: { lat: 13.0579, lng: 77.6429 }, type: "universities", location: "Kristu Jayanti College", distance: "7.1 km" },
        { position: { lat: 13.08305, lng: 77.63472 }, type: "hospitals", location: "Reva Regal Hospital", distance: "450 m" },
        { position: { lat: 13.10514, lng: 77.61435 }, type: "hospitals", location: "Apex Multispeciality Hospital", distance: "700 m" },
        { position: { lat: 13.11421, lng: 77.61205 }, type: "hospitals", location: "Valens Hospital", distance: "2.1 km" },
        { position: { lat: 12.9728, lng: 77.5419 }, type: "hospitals", location: "Sri Maruthi Hospitals", distance: "5 km" },
        { position: { lat: 13.11227, lng: 77.66091 }, type: "hospitals", location: "Richardsons Face Hospitals", distance: "5.2 km" },
        { position: { lat: 13.12793, lng: 77.59651 }, type: "hospitals", location: "Cytecare Hospitals", distance: "5.3 km" },
        { position: { lat: 12.9732, lng: 77.6033 }, type: "hospitals", location: "Sparsh Hospital", distance: "6.7 km" },
        { position: { lat: 13.0622, lng: 77.6503 }, type: "hospitals", location: "Cratis Hospital", distance: "9.6 km" },
        { position: { lat: 13.051, lng: 77.6287 }, type: "tech-park", location: "Bhartiya City IT Park", distance: "4.4 km"},
        { position: { lat: 12.9564, lng: 77.6974 }, type: "tech-park", location: "Puravankara Business Park", distance: "8.7 km"},
        { position: { lat: 13.045211, lng: 77.619442 }, type: "tech-park", location: "Manyata Tech Park", distance: "9.9 km"},
        { position: { lat: 13.0576, lng: 77.5913 }, type: "tech-park", location: "L&T Tech Cloud Park", distance: "9.7 km"},
        { position: { lat: 12.9279, lng: 77.6756 }, type: "tech-park", location: "Prestige Century Landmark", distance: "12.6 km"},
        ];

      const icons = {
        schools:      { icon: iconBase + "school-icon.png" },
        universities: { icon: iconBase + "education-icon.png" },
        hospitals:    { icon: iconBase + "healthcare-icon.png" },
        "tech-park":  { icon: iconBase + "office-icon.png" }
      };

      features.forEach(feature => {
        const marker = new google.maps.Marker({
          position: feature.position,
          title: feature.location,
          icon: icons[feature.type].icon,
          map: null
        });

        const iw = new google.maps.InfoWindow({
          content: `<div><strong>${feature.location}</strong><br/>${feature.distance}</div>`
        });
        marker.addListener("click", () => iw.open(map, marker));

        if (!markersByCategory[feature.type]) markersByCategory[feature.type] = [];
        markersByCategory[feature.type].push(marker);
        allMarkers.push(marker);
      });
    };

    function showMarkers(category) {
      if (!window.google || !window.google.maps) return;
      allMarkers.forEach(m => {
        if (m !== centerMarker) m.setMap(null);
      });

      const bounds = new google.maps.LatLngBounds();
      bounds.extend(centerMarker.getPosition());

      if (markersByCategory[category]) {
        markersByCategory[category].forEach(m => {
          m.setMap(map);
          bounds.extend(m.getPosition());
        });
      }
      map.fitBounds(bounds);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const lis = document.querySelectorAll("li[data-target]");

      lis.forEach(li => {
        li.addEventListener("click", () => {
          lis.forEach(item => item.classList.remove("active"));
          li.classList.add("active");
          showMarkers(li.getAttribute("data-target"));
        });
      });

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile && lis.length > 0) {
        lis[0].classList.add("active");
        window.addEventListener("load", () => {
          showMarkers(lis[0].getAttribute("data-target"));
        });
      }
    });

      // Lazy load Google Maps safely
    // window.loadGoogleMaps = function () {
    //   if (window.google && window.google.maps) return;
    //   if (document.getElementById("google-maps-script")) return;

    //   const script = document.createElement('script');
    //   script.id = "google-maps-script";
    //   script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDeHR4jN5x0GKPp2H_UtrDqcCmrAMt6MCY&amp;libraries=places&amp;v=weekly&amp;callback=initMap";
    //   script.async = true;
    //   script.defer = true;
    //   document.body.appendChild(script);
    // };

    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 200) loadGoogleMaps();
    // });


    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    function lazyload() {
      var lazyloadImages = document.querySelectorAll(".image_lazy");
      var lazyloadThrottleTimeout;
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }
      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            // if(img.offsetTop < (window.innerHeight + scrollTop)) {
          if (isInViewport(img)) {
            srcset = img.dataset.srcset;
            if (typeof srcset !== 'undefined')
              img.srcset = srcset;
            else
              img.src = img.dataset.src;
            img.onload = function() {
              img.classList.remove('image_lazy');
            }
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }
    document.addEventListener("DOMContentLoaded", function() {
      var imgs = document.querySelectorAll(".image_lazy");
      imgs.forEach(function(img) {
        img.src = 'https://www.tvsemerald.com/assets/images/loading.svg';
      })
      setTimeout(function() {
        lazyload();
      }, 750);
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    });


    $('iframe[data-src]').each(function() {
      var dataSrc = $(this).attr('data-src');
          if (dataSrc) { // Check if data-src exists
            $(this).attr('src', dataSrc);
            $(this).removeAttr('data-src');
          }
        });



    $(".club-popup").magnificPopup({
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
        titleSrc: function(item) {
          return item.el.attr("title");
        },
      },
    });

    $(document).ready(function() {
      $(this).scrollTop(0);

      var scroll_offset = 900;

      $(window).scroll(function() {
        var $this = $(window);
        if ($(".footer_btns").length) {
          if ($this.scrollTop() > scroll_offset) {
            $(".footer_btns").addClass("revealed");
          } else {
            $(".footer_btns").removeClass("revealed");
          }
        }
      });
    });

    $(".club_slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      center: false,
      smartSpeed: 2000,
      autoplay: true,

      navText: [
        '<i id="tvs_auralis_lp_clubhouse_prev_btn" class="fa-solid fa-angle-left"></i>',
        '<i id="tvs_auralis_lp_clubhouse_next_btn" class="fa-solid fa-angle-right"></i>',
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

    const lenis = new Lenis({
      duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-out curve
        smooth: true,
      });

    document.querySelectorAll('.accordion-body .table-responsive').forEach((el) => {
      el.addEventListener('wheel', (e) => {
        const canScroll =
        el.scrollHeight > el.clientHeight &&
        (
          (e.deltaY > 0 && el.scrollTop + el.clientHeight < el.scrollHeight - 1) ||
          (e.deltaY < 0 && el.scrollTop > 0)
          );

        if (canScroll) {
      e.stopPropagation(); // prevent Lenis from handling this wheel event
    }
  });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    $(window).on('load', function() {
      $(".banner_wrapper").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        lazyLoad: true,
        center: false,
        smartSpeed: 2000,
        autoplay: true,

        navText: [
          '<i id="tvs_vv_lp_video_gallery_prev_btn" class="fa-solid fa-angle-left"></i>',
          '<i id="tvs_vv_lp_video_gallery_next_btn" class="fa-solid fa-angle-right"></i>',
          ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        },
      });
    })



    document.querySelectorAll('input[type="text"], input[type="tel"]').forEach(input => {
      input.addEventListener('input', () => {
        const originalValue = input.value;
        let cleanedValue = originalValue;

            // If ID contains "name" → block numbers
        if (input.name.toLowerCase().includes('name')) {
          cleanedValue = originalValue.replace(/[0-9]/g, '');
        }

            // If ID contains "phone" or "number" → allow only digits
        else if (input.name.toLowerCase().includes('phone') || input.id.toLowerCase().includes('number')) {
          cleanedValue = originalValue.replace(/[^0-9]/g, '');
        }

        if (originalValue !== cleanedValue) {
          input.value = cleanedValue;
        }
      });
    });

    // YouTube click-to-play facade: defers the heavy player JS until a video is
    // actually clicked. Keeps "one video at a time" by restoring any currently
    // playing video back to its thumbnail facade before loading the new one.
    (function () {
      function buildIframe(id, title) {
        var iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + id +
        '?rel=0&showinfo=0&modestbranding=1&autoplay=1';
        iframe.title = title || '';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.setAttribute('data-yt', '1');
        iframe.setAttribute('data-video-id', id);
        iframe.setAttribute('data-title', title || '');
        iframe.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%;';
        return iframe;
      }

      function buildFacade(id, title) {
        var d = document.createElement('div');
        d.className = 'video_facade';
        d.setAttribute('data-video-id', id);
        d.setAttribute('data-title', title || '');
        d.setAttribute('role', 'button');
        d.setAttribute('tabindex', '0');
        d.setAttribute('aria-label', 'Play video: ' + (title || ''));
        d.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; cursor:pointer;';
        var img = document.createElement('img');
        img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
        img.alt = title || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        img.style.cssText = 'width:100%; height:100%; object-fit:cover;';
        var play = document.createElement('span');
        play.className = 'yt_play';
        play.setAttribute('aria-hidden', 'true');
        d.appendChild(img);
        d.appendChild(play);
        return d;
      }

      function activate(facade) {
        var id = facade.getAttribute('data-video-id');
        var title = facade.getAttribute('data-title');
        // restore any currently playing video back to its facade
        document.querySelectorAll('.video_img iframe[data-yt]').forEach(function (ifr) {
          ifr.parentNode.replaceChild(
            buildFacade(ifr.getAttribute('data-video-id'), ifr.getAttribute('data-title')),
            ifr
            );
        });
        facade.parentNode.replaceChild(buildIframe(id, title), facade);
      }

      document.addEventListener('click', function (e) {
        var f = e.target.closest('.video_facade');
        if (f) activate(f);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var f = e.target.closest('.video_facade');
        if (f) { e.preventDefault(); activate(f); }
      });
    })();