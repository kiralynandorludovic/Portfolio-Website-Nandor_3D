(() => {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll --------- */
  const revealEls = document.querySelectorAll(".reveal-on-scroll");
  if (revealEls.length && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    // { threshold: 0.05 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Nav overlay ---------- */
  const menuBtn = document.getElementById("menuBtn");
  const navOverlay = document.getElementById("navOverlay");
  const dotsIcon = menuBtn.querySelector(".dots");
  const xIcon = menuBtn.querySelector(".x-icon");

  function openNav() {
    navOverlay.classList.add("open");
    navOverlay.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
    dotsIcon.style.display = "none";
    xIcon.style.display = "block";
  }
  function closeNav() {
    navOverlay.classList.remove("open");
    navOverlay.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    dotsIcon.style.display = "grid";
    xIcon.style.display = "none";
  }
  menuBtn.addEventListener("click", () => {
    navOverlay.classList.contains("open") ? closeNav() : openNav();
  });
  navOverlay.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navOverlay.classList.contains("open")) closeNav();
  });

  /* ---------- Carousels ---------- */
  document.querySelectorAll(".carousel").forEach((track) => {
    const key = track.id.replace("carousel-", "");
    const prevBtn = document.querySelector(`[data-car-prev="${key}"]`);
    const nextBtn = document.querySelector(`[data-car-next="${key}"]`);
    const scrollAmount = () => track.firstElementChild?.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0) || 320;

    prevBtn?.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });
    nextBtn?.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });

    const updateButtons = () => {
      const max = track.scrollWidth - track.clientWidth - 4;
      const atStart = track.scrollLeft <= 4;
      const atEnd = track.scrollLeft >= max;
      if (prevBtn) prevBtn.disabled = atStart;
      if (nextBtn) nextBtn.disabled = atEnd;
      // right edge fade hints that there is more to scroll
      track.classList.toggle("fade-right", !atEnd);
    };
    updateButtons();
    track.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
  });

  /* ---------- Gallery filter ---------- */
  const filterBar = document.getElementById("filterBar");
  const galleryItems = document.querySelectorAll("#galleryGrid .g-item");

  filterBar?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    galleryItems.forEach((item) => {
      const show = filter === "all" || item.dataset.cat === filter;
      item.classList.toggle("hidden", !show);
    });
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCaption = document.getElementById("lbCaption");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");

  let currentGroup = [];
  let currentIndex = 0;
  let lastFocused = null;

  function buildGroup(groupName) {
    const selector = groupName
      ? `[data-lightbox][data-group="${groupName}"]`
      : "[data-lightbox]";
    return Array.from(document.querySelectorAll(selector));
  }

  function showLightbox(index) {
    const el = currentGroup[index];
    if (!el) return;
    currentIndex = index;
    lbImg.src = el.dataset.full;
    lbImg.alt = el.dataset.title || "";
    lbCaption.textContent = [el.dataset.title, el.dataset.by].filter(Boolean).join(" — ");
  }

  function openLightbox(el) {
    const group = el.dataset.group || "all";
    // Only consider currently visible items (respect active gallery filter)
    currentGroup = buildGroup(group).filter((n) => !n.classList.contains("hidden"));
    const index = currentGroup.indexOf(el);
    lastFocused = document.activeElement;
    showLightbox(index === -1 ? 0 : index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => openLightbox(el));
  });

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  lbPrev.addEventListener("click", () => {
    showLightbox((currentIndex - 1 + currentGroup.length) % currentGroup.length);
  });
  lbNext.addEventListener("click", () => {
    showLightbox((currentIndex + 1) % currentGroup.length);
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbPrev.click();
    if (e.key === "ArrowRight") lbNext.click();
  });

  /* ---------- Featured work: project data ----------
     Placeholder copy — swap in your real descriptions and process notes.
     "gallery" currently reuses cropped details of the same render as a
     stand-in for real alternate angles / WIP shots. Replace the paths
     with actual turntable renders, wireframes, clay passes etc. as you
     export them — just drop the files in assets/img/ and list them here.
  --------------------------------------------------------------------- */
  const FEATURED_PROJECTS = {

    fossil_chronograph: {
      title: "Fossil FS6015 Chronograph",
      category: "Product Visualization",
      description: "This piece was created as a portfolio piece, inspired by the complex design of the Fossil FS6015 Chronograph wrist watch. I knew that re-creating this product as a precise 3D model will be a huge challenge, but I'm very grateful that I've managed to finish this project.",
      gallery: ["assets/img/Product_Viz/Fossil_Chronograph_1.jpg", "assets/img/Product_Viz/Fossil_Chronograph_2.jpg", "assets/img/Product_Viz/Fossil_Chronograph_3.jpg"],
      process: [
        { title: "Reference", text: "Started from high-end luxury watch commercial photography and dark-mode product displays, focusing on dramatic rim lighting and metallic surface contrast." },
        { title: "Modeling", text: "In my modeling I aimed for extreme precision with complex hard-surface details. I spent significant time on the intricate knurled pattern around the bezel, individual link connections in the metallic wristband, and the detailed sub-dials on the watch face." },
        { title: "Materials", text: "In my interpretation I used brushed metal, clear glass, and polished metallic finishes. For the texturing I used Substance Painter, I avoided Blender for this project because a lot labels neede to be added to the watch face." },
        { title: "Lighting", text: "For lighting I wanted to create a dramatic feel. I placed strong overhead rim lights to catch specular highlights along the curved metallic edges, paired with a subtle fill lights too add detail and to avoid dark spots." },
        { title: "Compositing & Rendering", text: "For the final images I used the Blender compositor to add subtle lens glares, contrast and curve adjustments, and light blooming on the highlights. Photoshop was used for final tone mapping and sharpening details. Everything was rendered in Blender Cycles." }
      ]
    },

    scandi_bedroom: {
      title: "Scandinavian Bedroom",
      category: "Architectural Visualization",
      description: "A calm, materials-led bedroom concept with soft daylight, natural wood and linen textures doing most of the storytelling.",
      gallery: ["assets/img/Arch_Viz/Scandinavian_Bedroom_1.jpg", "assets/img/Arch_Viz/Scandinavian_Bedroom_2.jpg"],
      process: [
        { title: "Reference", text: "Reference pulled from Scandinavian interior photography, focused on soft window light and layered neutral tones." },
        { title: "Modeling", text: "Built the room shell and filled the room with 3D models from Imeshh, keeping proportions true to a realistic room footprint." },
        { title: "Materials", text: "Focused texturing effort on the linens and timber floor since they carry most of the room's warmth." },
        { title: "Lighting", text: "For the main light-source I used an overcast HDRI and I used two Sun lights to complement the scene with long shadows, a Sun light was used for sharp long shadows and a second one was used to add a more smooth edge to the shadows. This is a little trick that I've learned over the years." },
        { title: "Compositing & Rendering", text: "Gentle warm grade was added in post to match the cozy vibe and toned down the highlights a bit to avoid over-exposure." }
      ]
    },

    la_rue_verte: {
      title: "Lotion Étoile by La Rue Verte",
      category: "Product Visualization",
      description: "This product visualization was done as a portfolio piece, inspired by the product design of Too Gallus. In my interprertation I tried to use light, rocks and fabrics to keep the serenity feeling that is radiating from this product.",
      gallery: ["assets/img/Product_Viz/La_Rue_Verte_1.jpg", "assets/img/Product_Viz/La_Rue_Verte_2.jpg", "assets/img/Product_Viz/La_Rue_Verte_3.jpg"],
      process: [
        { title: "Reference", text: "Started from a mood board of nature inspired sceneries and the design posted by Too Gallus on Behance." },
        { title: "Modeling", text: "In my modeling I tried to be close as possible to the real product, the ridges found on the side of the bottle are the main design element and have been created with a lot of care." },
        { title: "Materials", text: "In my visual interpretation I used metal, glass, fabric, rock and concerete materials. I chose rock and concrete materials because the grey and beige color of the rock textures complement the glass and metal colors of the bottle well." },
        { title: "Lighting", text: "For lighting I wanted to create something clean and easy to interpret, this is the case for the first and third image. On the second image I wanted to create something more cinematic and ambient with a larger focus on the product." },
        { title: "Compositing & Rendering", text: "For the final images I used the Blender compositor to add some light glare and grain effects, and Photoshop for the final post-production and  color correction. Everything was rendered in Blender Cycles." }
      ]
    },

    estee_lauder_serum: {
      title: "Pepitde Serum by Estée Lauder",
      category: "Product Visualization",
      description: "This portfolio piece was inspired by watching some youtube tutorials on soft-body physics simulation. At this stage I was already looking at some Estée Lauder products and when I saw their Peptide Serum products, a lightbulb has switched on in my mind. I tought it would be a great idea to incorporate some shots of soft-body objects coliding and bouncing, contrasting the effect of the serum on human the skin.",
      gallery: ["assets/img/Product_Viz/Estee_Lauder_Serum_1.jpg", "assets/img/Product_Viz/Estee_Lauder_Serum_2.jpg", "assets/img/Product_Viz/Estee_Lauder_Serum_3.jpg"],
      process: [
        { title: "Reference", text: "Started from gathering photos about some high-end cosmetics advertising and luxury skincare campaigns, then focusing on some fluid simulation renders." },
        { title: "Simulation", text: "For the soft-body simulation I used Blender. For the first shot, a high poly sphere was used in combination with some wave displacment textures that were lated animated. For the second shot Blender's native soft body simulation modifiers were used in combination with some physics forces to create the pulling movement." },
        { title: "Materials", text: "The materials are nothing extra-ordinary, I used a gold metal material for the product and Blender's built in glass shader for the bubbles." },
        { title: "Lighting", text: "For lighting I wanted to create a radiant, warm feel. I placed a soft back-lit softbox to make the liquid bubbles glow from within, combined with gentle front fill lighting to highlight the metallic gold finish." },
        { title: "Compositing & Rendering", text: "For the final images I used the Blender compositor to add subtle chromatic aberration and soft optical glow around the highlights. Final color grading and curve adjustments were added in the compositor aswell. Everything was rendered in Blender Cycles." }
      ]
    },

    cld_9: {
      title: "Supplements by CLD-9",
      category: "Product Visualization",
      description: "This product visualization was done in colaboration with the supplement brand CLD-9.",
      gallery: ["assets/img/Product_Viz/CLD_9_1.jpg", "assets/img/Product_Viz/CLD_9_2.jpg", "assets/img/Product_Viz/CLD_9_3.jpg"],
      process: [
        { title: "Reference", text: "The packaging itself was designed by Hortváth Bálint. I wanted to keep the simplicity of the design in my renders, because of this I choose a simple hero shot and two geometric layouts to showcase other personalized designs." },
        { title: "Modeling", text: "In my modeling, I focused on precise product packaging proportions. Key details like the perforated tear here strip, subtle paper folds, and crisp edge bevels were crafted carefully to mimic real-world box construction." },
        { title: "Materials", text: "In my visual interpretation I used matte paper board, smooth printed labels, and plastic wrapping accents." },
        { title: "Lighting", text: "For the first and second image I wanted to create a warm, energetic studio environment. A key light highlights the front label text clearly, while strong side directional lighting creates deep, sharp shadows on the orange backdrop for extra depth. For the third image, I've created a more cinematic piece by using only one side fill light." },
        { title: "Compositing & Rendering", text: "For the final images I used the Blender compositor to refine contrast and add subtle lens effects, followed by Photoshop for fine-tuning the vibrant orange color grade. Everything was rendered in Blender Cycles." }
      ]
    },

    clinique_surge: {
      title: "Clinique Moisture Surge",
      category: "Product Visualization",
      description: "A portfolio piece inspired by the Clinique Moisture Surge cosmetic product. I wanted to implement more water and liquid elements in my works, this project was a learning curve in implementing water and liquid in my own renderings.",
      gallery: ["assets/img/Product_Viz/Clinique_1.jpg", "assets/img/Product_Viz/Clinique_2.jpg", "assets/img/Product_Viz/Clinique_3.jpg"],
      process: [
        { title: "Reference", text: "Worked from the client's label artwork and a short brief calling for 'clean but not clinical' — hence the rope styling detail." },
        { title: "Modeling", text: "Precise bottle and cap modeling from provided packaging dielines, checked against real-world dimensions." },
        { title: "Materials", text: "Dialed in the label print shader and frosted glass material — most of the realism here comes from correct roughness values, not the lighting." },
        { title: "Lighting", text: "Three-point studio lighting rendered in Cycles, with a bounce card to keep shadows soft on the packaging text." },
        { title: "Compositing & Rendering", text: "Light color grade and label sharpening pass in Photoshop for the final delivery file." }
      ]
    },

    modern_bedroom: {
      title: "Modern Bedroom",
      category: "Architectural Visualization",
      description: "A portfolio piece inspired by the Clinique Moisture Surge cosmetic product. I wanted to implement more water and liquid elements in my works, this project was a learning curve in implementing water and liquid in my own renderings.",
      gallery: ["assets/img/Arch_Viz/Modern_Bedroom_1.jpg", "assets/img/Arch_Viz/Modern_Bedroom_2.jpg", "assets/img/Arch_Viz/Modern_Bedroom_3.jpg"],
      process: [
        { title: "Reference", text: "Started from modern architectural interior design and high-end residential CGI mood boards, focusing on cozy neutral tones, tactile fabric textures, and subtle ambient cove lighting." },
        { title: "Modeling", text: "In my modeling I focused on soft-body cloth simulation and detailed architectural elements. I spent extra time simulating natural folds and wrinkles on the duvet, pillows, and draped throw blanket, paired with a precise fluted wall paneling system behind the headboard." },
        { title: "Materials", text: "In my visual interpretation I used coarse woven linen, plush wool carpeting, matte plaster wall finishes, and light natural oak floorboards. I tuned sub-surface scattering on the fabric fabrics to ensure realistic light absorption and soft shading." },
        { title: "Lighting", text: "For lighting I wanted to create a serene, relaxing evening mood. I balanced warm hidden LED strip lighting along the ceiling cove with soft dome pendant lamps and cool, diffused natural light filtering through the window blinds on the right." },
        { title: "Compositing & Rendering", text: "For the final images I used the Blender compositor to refine tone curves, add subtle camera depth of field, and enhance warm highlights. Photoshop was used for final exposure balancing and subtle grain structure. Everything was rendered in Blender Cycles." }
      ]
    },
    
  };

   const FEATURED_ORDER = ["fossil_chronograph", "scandi_bedroom", "la_rue_verte", "estee_lauder_serum", "cld_9", "clinique_surge", "modern_bedroom"];

  const projectModal = document.getElementById("projectModal");
  const projectScroll = document.getElementById("projectScroll");
  const projectClose = document.getElementById("projectClose");
  const projHeroImg = document.getElementById("projHeroImg");
  const projCategory = document.getElementById("projCategory");
  const projTitle = document.getElementById("projTitle");
  const projDesc = document.getElementById("projDesc");
  const projGallery = document.getElementById("projGallery");
  const projProcess = document.getElementById("projProcess");
  const projPrev = document.getElementById("projPrev");
  const projNext = document.getElementById("projNext");
  const projViewPrev = document.getElementById("projViewPrev");
  const projViewNext = document.getElementById("projViewNext");
  const projViewFull = document.getElementById("projViewFull");

  let activeProjectId = null;
  let lastFocusedFeatured = null;
  let activeGallery = [];
  let activeGalleryFull = [];
  let activeImageIndex = 0;

  function showGalleryImage(index) {
    if (!activeGallery.length) return;
    activeImageIndex = (index + activeGallery.length) % activeGallery.length;
    const src = activeGallery[activeImageIndex];
    projHeroImg.src = src;
    projViewFull.href = activeGalleryFull[activeImageIndex] || src;
    projGallery.querySelectorAll("button").forEach((b, i) => {
      b.classList.toggle("active", i === activeImageIndex);
    });
  }

  function renderProject(id) {
    const data = FEATURED_PROJECTS[id];
    if (!data) return;
    activeProjectId = id;
    activeGallery = data.gallery;
    activeGalleryFull = data.galleryFull || data.gallery;
    activeImageIndex = 0;

    projCategory.textContent = data.category;
    projTitle.textContent = data.title;
    projDesc.textContent = data.description;

    const showArrows = activeGallery.length > 1;
    projViewPrev.classList.toggle("is-hidden", !showArrows);
    projViewNext.classList.toggle("is-hidden", !showArrows);

    projGallery.innerHTML = "";
    data.gallery.forEach((src, i) => {
      const btn = document.createElement("button");
      btn.className = i === 0 ? "active" : "";
      btn.innerHTML = `<img src="${src}" alt="${data.title} — view ${i + 1}" loading="lazy">`;
      btn.addEventListener("click", () => showGalleryImage(i));
      projGallery.appendChild(btn);
    });
    showGalleryImage(0);

    projProcess.innerHTML = "";
    data.process.forEach((step, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="process-num">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <h5>${step.title}</h5>
          <p>${step.text}</p>
        </div>`;
      projProcess.appendChild(li);
    });

    projectScroll.scrollTop = 0;
  }

  function openProject(id) {
    lastFocusedFeatured = document.activeElement;
    renderProject(id);
    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
    projectClose.focus();
  }

  function closeProject() {
    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
    if (lastFocusedFeatured) lastFocusedFeatured.focus();
  }

  document.querySelectorAll("[data-project]").forEach((card) => {
    card.addEventListener("click", () => openProject(card.dataset.project));
  });

  projectClose.addEventListener("click", closeProject);
  projViewPrev.addEventListener("click", () => showGalleryImage(activeImageIndex - 1));
  projViewNext.addEventListener("click", () => showGalleryImage(activeImageIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (!projectModal.classList.contains("open")) return;
    if (e.key === "Escape") closeProject();
    if (e.key === "ArrowLeft") showGalleryImage(activeImageIndex - 1);
    if (e.key === "ArrowRight") showGalleryImage(activeImageIndex + 1);
  });

  function switchProject(direction) {
    const idx = FEATURED_ORDER.indexOf(activeProjectId);
    const nextIdx = (idx + direction + FEATURED_ORDER.length) % FEATURED_ORDER.length;
    renderProject(FEATURED_ORDER[nextIdx]);
  }
  projPrev.addEventListener("click", () => switchProject(-1));
  projNext.addEventListener("click", () => switchProject(1));

  /* ---------- Contact form ----------
     Wire this up to Formspree (or any form backend) in 3 steps:
     1. Create a free form at https://formspree.io
     2. Replace YOUR_FORM_ID below with the ID they give you
     3. Done — submissions will arrive by email, no server needed
  --------------------------------------------------------------- */
  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!form.checkValidity()) {
      status.textContent = "Please fill in every field before sending.";
      status.classList.add("err");
      return;
    }

    if (FORM_ENDPOINT.includes("YOUR_FORM_ID")) {
      status.textContent = "Contact form isn't connected yet — email me directly instead, thanks!";
      status.classList.add("err");
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    status.textContent = "Sending…";

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        status.textContent = "Message sent — thank you! I'll reply soon.";
        status.classList.add("ok");
        form.reset();
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      status.textContent = "Something went wrong — please email me directly.";
      status.classList.add("err");
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
