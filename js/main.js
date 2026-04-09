/**
 * DH__COUTURE — showcase videos
 * Files: assets/Showcase-01.mp4 … Showcase-10.mp4 (match name + casing for GitHub Pages).
 */
window.DHCOUTURE_VIDEOS = [
  { src: "assets/Showcase-01.mp4", poster: "" },
  { src: "assets/Showcase-02.mp4", poster: "" },
  { src: "assets/Showcase-03.mp4", poster: "" },
  { src: "assets/Showcase-04.mp4", poster: "" },
  { src: "assets/Showcase-05.mp4", poster: "" },
  { src: "assets/Showcase-06.mp4", poster: "" },
  { src: "assets/Showcase-07.mp4", poster: "" },
  { src: "assets/Showcase-08.mp4", poster: "" },
  { src: "assets/Showcase-09.mp4", poster: "" },
  { src: "assets/Showcase-10.mp4", poster: "" },
];

(function () {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const videos = window.DHCOUTURE_VIDEOS || [];
  const grid = document.getElementById("video-grid");
  if (grid && videos.length) {
    const frag = document.createDocumentFragment();
    videos.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = "video-card";
      const v = document.createElement("video");
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.setAttribute("loop", "");
      v.setAttribute("preload", "metadata");
      v.setAttribute("aria-label", "Fashion showcase clip " + (i + 1));
      if (item.poster) v.poster = item.poster;
      const source = document.createElement("source");
      source.src = item.src;
      source.type = "video/mp4";
      v.appendChild(source);
      card.appendChild(v);
      frag.appendChild(card);
    });
    grid.appendChild(frag);

    const prefersHover = window.matchMedia("(hover: hover) and (pointer: fine)");

    grid.querySelectorAll(".video-card").forEach((card) => {
      const video = card.querySelector("video");
      if (!video || !(video instanceof HTMLVideoElement)) return;

      let thumbTime = 0;

      function reset() {
        video.pause();
        try {
          video.currentTime = thumbTime;
        } catch (_) {}
        card.classList.remove("is-active");
      }

      function activate() {
        if (!prefersHover.matches) card.classList.add("is-active");
        video.play().catch(() => {});
      }

      if (prefersHover.matches) {
        card.addEventListener("mouseenter", activate);
        card.addEventListener("mouseleave", reset);
      } else {
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute(
          "aria-label",
          (video.getAttribute("aria-label") || "Showcase video") + ". Tap to play or pause."
        );
        card.addEventListener("click", (e) => {
          e.preventDefault();
          if (card.classList.contains("is-active")) {
            reset();
          } else {
            grid.querySelectorAll(".video-card.is-active").forEach((c) => {
              if (c !== card) {
                const v = c.querySelector("video");
                if (v) {
                  v.pause();
                  const back = Number(v.dataset.thumbTime || 0);
                  try {
                    v.currentTime = back;
                  } catch (_) {}
                  c.classList.remove("is-active");
                }
              }
            });
            activate();
          }
        });
      }

      video.addEventListener(
        "loadedmetadata",
        () => {
          const freeze = () => {
            video.pause();
          };
          video.addEventListener("seeked", freeze, { once: true });
          try {
            const t = video.duration && !Number.isNaN(video.duration) ? Math.min(0.1, video.duration * 0.02) : 0.08;
            thumbTime = t;
            video.dataset.thumbTime = String(t);
            video.currentTime = t;
          } catch (_) {
            freeze();
          }
        },
        { once: true }
      );
    });
  }

  document.querySelectorAll(".reveal").forEach((el) => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
  });
})();
