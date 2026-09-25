(() => {
  "use strict";

  /* =========================================================
     CONTENT DATA — edit the site's cards and images here
     ========================================================= */

  const FEATURED_PROJECTS = {

    fossil_chronograph: {
      title: "Fossil FS6015 Chronograph",
      cardTitle: "Fossil - FS6015 Chronograph",
      cardAlt: "fossil_chronograph",
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
      cardTitle: "Scandinavian bedroom",
      cardAlt: "Scandinavian bedroom",
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
      cardTitle: "La Rue Verte - Lotion Étoile",
      cardAlt: "La_Rue_Verte",
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
      cardTitle: "Estée Lauder - Peptide Serum",
      cardAlt: "estee_lauder_serum",
      category: "Product Visualization",
      description: "This portfolio piece was inspired by watching some youtube tutorials on soft-body physics simulation. At this stage I was already looking at some Estée Lauder products and when I saw their Peptide Serum products, a lightbulb has switched on in my mind. I tought it would be a great idea to incorporate some shots of soft-body objects coliding and bouncing, contrasting the effect of the serum on human the skin.",
      gallery: ["assets/img/Product_Viz/Estee_Lauder_Serum_1.jpg", "assets/img/Product_Viz/Estee_Lauder_Serum_2.jpg", "assets/img/Product_Viz/Estee_Lauder_Serum_3.jpg", "assets/img/Product_Viz/Estee Lauder_Test.mp4"],
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
      cardTitle: "Supplements by CLD-9",
      cardAlt: "CLD_9_Packaging",
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
      cardTitle: "Clinique - Moisture Surge",
      cardAlt: "clinique_surge",
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
      cardTitle: "Modern Bedroom",
      cardAlt: "modern_bedroom",
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

  // also sets the order of the cards in the Featured carousel
  const FEATURED_ORDER = ["fossil_chronograph", "scandi_bedroom", "la_rue_verte", "estee_lauder_serum", "cld_9", "clinique_surge", "modern_bedroom"];

  /* ---------- Work carousels ----------
     One array per section (#carousel-product, -arch, -art).
     "full" is optional: set it when "src" is a smaller thumbnail and the
     lightbox should open a different (full resolution) file.
  ----------------------------------------------------------------- */
  const WORK_CAROUSELS = {
    product: [
      { src: "assets/img/Product_Viz/Fossil_Chronograph_1.jpg", alt: "fossil_chronograph", title: "FS6015 Chronograph", by: "FOSSIL" },
      { src: "assets/img/Product_Viz/Evermere_Serum.jpg", alt: "Evermere_Serum", title: "Botanical Glow", by: "EVERMERE" },
      { src: "assets/img/Product_Viz/Clinical_Serum.jpg", alt: "Clinical_Repair_Serum", title: "Peptide Repair Serum", by: "CLINICAL" },
      { src: "assets/img/Product_Viz/UNIT1_Bottle.jpg", alt: "UNIT1_Bottle", title: "Water Bottle", by: "UNIT 1" },
      { src: "assets/img/Product_Viz/La_Rue_Verte_1.jpg", alt: "la_rue_verte", title: "Lotion Étoile", by: "LA RUE VERTE" },
      { src: "assets/img/Product_Viz/DCL_Cream.jpg", alt: "DCL_Night_Booster", title: "Night Booster", by: "DCL" },
      { src: "assets/img/Product_Viz/Dior_Backstage.jpg", alt: "Dior_Backstage", title: "Backstage", by: "DIOR" },
      { src: "assets/img/Product_Viz/Aura_Perfect.jpg", alt: "Aura_Perfect", title: "Aura Perfect", by: "L'ORÉAL" },
      { src: "assets/img/Product_Viz/Estee_Lauder_Serum_1.jpg", alt: "estee_lauder_serum", title: "Peptide Serum", by: "ESTÉE LAUDER" },
      { src: "assets/img/Product_Viz/Blissfull_Serum.jpg", alt: "Blissfull_Serum", title: "Anti-Age Serum", by: "BLISSFULL+" },
      { src: "assets/img/Product_Viz/Clinique_1.jpg", alt: "clinique_surge", title: "Moisture Surge", by: "CLINIQUE" },
      { src: "assets/img/Product_Viz/Bang_Olufsen.jpg", alt: "Bang_Olufsen_Speaker", title: "Beosound Balance", by: "BANG&OLUFSEN" },
      { src: "assets/img/Product_Viz/Dior_Sauvage.jpg", alt: "Dior_Sauvage", title: "Sauvage", by: "DIOR" },
      { src: "assets/img/Product_Viz/CLD_9_3.jpg", alt: "cld_9", title: "Supplements", by: "CLD-9" },
      { src: "assets/img/Product_Viz/Luxesmith_Watch.jpg", alt: "Luxesmith_Watch", title: "Wrist Watch", by: "LUXESMITH" },
      { src: "assets/img/Product_Viz/Evermere_Hydrating_Cream.jpg", alt: "Evermere_Hydrating_Cream", title: "Hydrating Barrier Cream", by: "EVERMERE" },
      { src: "assets/img/Product_Viz/Tom_Ford_Ombre.jpg", alt: "Tom_Ford_Ombre", title: "Ombré Leather", by: "TOM FORD" },
      { src: "assets/img/Product_Viz/Ponds_Flawless.jpg", alt: "Ponds_Flawless", title: "Flawless White", by: "POND'S" },
      { src: "assets/img/Product_Viz/Clay_Lotion.jpg", alt: "Clay_Lotion", title: "Balance Lotion", by: "CLAY" },
      { src: "assets/img/Product_Viz/Maybelline_Red.jpg", alt: "Maybelline_Red", title: "Creamy Matte Lipstick 640", by: "MAYBELLINE NEW YORK" },
      { src: "assets/img/Product_Viz/Valentino_Black.jpg", alt: "Maybelline_Red", title: "Black Uomo", by: "VALENTINO" },
    ],
    arch: [
      { src: "assets/img/Arch_Viz/Scandinavian_Bedroom_1.jpg", alt: "scandi_bedroom", title: "Scandinavian Bedroom", by: "" },
      { src: "assets/img/Arch_Viz/Chicago_Office.jpg", alt: "Chicago_Office", title: "Chicago Office", by: "" },
      { src: "assets/img/Arch_Viz/Reading_Corner.jpg", alt: "Reading_Corner", title: "Reading Corner", by: "" },
      { src: "assets/img/Arch_Viz/Modern_Bedroom_2.jpg", alt: "modern_bedroom", title: "Modern Bedroom", by: "" },
      { src: "assets/img/Arch_Viz/Modern_Kitchen.jpg", alt: "Modern_Kitchen", title: "Modern Kitchen", by: "" },
    ],
    art: [
      { src: "assets/img/Personal_Art/Solitude.jpg", alt: "A lone figure walking down a dystopian city", title: "Solitude", by: "" },
      { src: "assets/img/Personal_Art/Gargantua.jpg", alt: "Gargantua black hole", title: "Gargantua", by: "" },
      { src: "assets/img/Personal_Art/Obelisk.jpg", alt: "Giant stone obelisk standing in the desert", title: "Monolith", by: "" },
      { src: "assets/img/Personal_Art/Wanderer.jpg", alt: "A lone figure walking in an icy canyon", title: "Wanderer", by: "" },
      { src: "assets/img/Personal_Art/X_Planet.jpg", alt: "A sci-fi planet", title: "Planet X", by: "" },
      { src: "assets/img/Personal_Art/Combinator.jpg", alt: "Massive decrepit housing block", title: "Combinator", by: "" },
      { src: "assets/img/Personal_Art/Corridor.jpg", alt: "Figure walking through an underground corridor", title: "Corridor", by: "" },
      { src: "assets/img/Personal_Art/Forest.jpg", alt: "A moody lush forest", title: "Forest", by: "" },
      { src: "assets/img/Personal_Art/Acrophobia.jpg", alt: "A lone figure standing on top of a building looking down a dystopian city", title: "Acrophobia", by: "" },
      { src: "assets/img/Personal_Art/Tau_Ceti.jpg", alt: "An interpretation of the Tau Ceti planet from the film Hail Mary", title: "Tau Ceti", by: "" },
      { src: "assets/img/Personal_Art/Relic.jpg", alt: "A lone figure standing in front of an old alien relic", title: "Relic", by: "" },
      { src: "assets/img/Personal_Art/Gates.jpg", alt: "An old huge gate guarding a secret", title: "Gates", by: "" },
    ],
  };

  /* ---------- Gallery ----------
     cat must match a filter button's data-filter: "product", "arch" or "art".
     "full" is optional, same as above.
  ----------------------------------------------------------------- */
  const GALLERY_ITEMS = [
    { cat: "product", src: "assets/img/Product_Viz/Fossil_Chronograph_1.jpg", alt: "Fossil_Chronograph", title: "Chronograph" },
    { cat: "product", src: "assets/img/Product_Viz/Estee_Lauder_Serum_1.jpg", alt: "Estee_Lauder_Serum_1", title: "Peptide Serum" },
    { cat: "art", src: "assets/img/Personal_Art/Obelisk.jpg", alt: "Giant stone obelisk in the desert", title: "Monolith" },
    { cat: "art", src: "assets/img/Personal_Art/Forest.jpg", alt: "Forest", title: "Forest" },
    { cat: "product", src: "assets/img/Product_Viz/CLD_9_1.jpg", alt: "CLD_9_Packaging", title: "CLD-9" },
    { cat: "product", src: "assets/img/Product_Viz/UNIT1_Bottle.jpg", alt: "Teal smart water bottle, product render", title: "UNIT1 Bottle" },
    { cat: "arch", src: "assets/img/Arch_Viz/Chicago_Office.jpg", alt: "Open plan brick loft office", title: "Chicago Office" },
    { cat: "art", src: "assets/img/Personal_Art/Transcendence.jpg", alt: "Figure walking down a sunlit alley of monoliths", title: "Transcendence" },
    { cat: "product", src: "assets/img/Product_Viz/La_Rue_Verte_1.jpg", alt: "La Lue Verte lotion bottle", title: "Lotion Étoile" },
    { cat: "product", src: "assets/img/Product_Viz/Fossil_Chronograph_2.jpg", alt: "Fossil_Chronograph", title: "Chronograph" },
    { cat: "product", src: "assets/img/Product_Viz/Clinical_Serum.jpg", alt: "Clinical repair serum dropper", title: "Peptide Repair Serum" },
    { cat: "arch", src: "assets/img/Arch_Viz/Scandinavian_Bedroom_1.jpg", alt: "Scandinavian style bedroom", title: "Scandinavian Bedroom" },
    { cat: "art", src: "assets/img/Personal_Art/Corridor.jpg", alt: "Figure walking through a glowing corridor", title: "Corridor" },
    { cat: "product", src: "assets/img/Product_Viz/Clinique_2.jpg", alt: "Clinique Moisture Surge", title: "Moisture Surge" },
    { cat: "product", src: "assets/img/Product_Viz/Evermere_Serum.jpg", alt: "Evermere serum bottle on rope", title: "Botanical Glow" },
    { cat: "arch", src: "assets/img/Arch_Viz/Reading_Corner.jpg", alt: "Sunlit reading nook interior", title: "Reading Corner" },
    { cat: "art", src: "assets/img/Personal_Art/Wanderer.jpg", alt: "Lone figure in a snowy mountain valley", title: "Wanderer" },
    { cat: "product", src: "assets/img/Product_Viz/DCL_Cream.jpg", alt: "DCL night booster bottle reflected in water", title: "Night Booster" },
    { cat: "arch", src: "assets/img/Arch_Viz/Modern_Bedroom_1.jpg", alt: "Modern grey bedroom", title: "Modern Bedroom" },
    { cat: "product", src: "assets/img/Product_Viz/La_Rue_Verte_2.jpg", alt: "La Lue Verte lotion bottle", title: "Lotion Étoile" },
    { cat: "product", src: "assets/img/Product_Viz/Ponds_Flawless.jpg", alt: "La Lue Verte lotion bottle", title: "Flawless White" },
    { cat: "art", src: "assets/img/Personal_Art/Relic.jpg", alt: "Massive glowing cube structure in fog", title: "Relic" },
    { cat: "product", src: "assets/img/Product_Viz/CLD_9_3.jpg", alt: "CLD_9_Packaging", title: "CLD-9" },
    { cat: "product", src: "assets/img/Product_Viz/Fossil_Chronograph_3.jpg", alt: "Fossil_Chronograph", title: "Chronograph" },
    { cat: "art", src: "assets/img/Personal_Art/X_Planet.jpg", alt: "An alien planet", title: "Planet-X" },
    { cat: "arch", src: "assets/img/Arch_Viz/Modern_Kitchen.jpg", alt: "Modern wood and white kitchen", title: "Modern Kitchen" },
    { cat: "product", src: "assets/img/Product_Viz/La_Rue_Verte_3.jpg", alt: "La Lue Verte lotion bottle", title: "Lotion Étoile" },
    { cat: "product", src: "assets/img/Product_Viz/Clinique_1.jpg", alt: "Clinique Moisture Surge", title: "Moisture Surge" },
    { cat: "product", src: "assets/img/Product_Viz/Blissfull_Serum.jpg", alt: "Blissfull water bottle", title: "Anti-Age Serum" },
    { cat: "art", src: "assets/img/Personal_Art/Gates.jpg", alt: "Acient Gates", title: "Gates" },
    { cat: "product", src: "assets/img/Product_Viz/Dior_Backstage.jpg", alt: "Dior Backstage foundation bottle", title: "Backstage" },
    { cat: "product", src: "assets/img/Product_Viz/Dior_Sauvage.jpg", alt: "Sauvage", title: "Sauvage" },
    { cat: "product", src: "assets/img/Product_Viz/Luxesmith_Watch.jpg", alt: "Luxesmith_Watch", title: "Luxesmith Watch" },
    { cat: "art", src: "assets/img/Personal_Art/Combinator.jpg", alt: "Sunbeams through an old decrepit building", title: "Combinator" },
    { cat: "product", src: "assets/img/Product_Viz/Bang_Olufsen.jpg", alt: "Bang_Olufsen_Speaker", title: "Beosound Balance" },
    { cat: "arch", src: "assets/img/Arch_Viz/Modern_Bedroom_2.jpg", alt: "Modern grey bedroom", title: "Modern Bedroom" },
    { cat: "product", src: "assets/img/Product_Viz/Aura_Perfect.jpg", alt: "Aura_Perfect", title: "Aura Perfect" },
    { cat: "product", src: "assets/img/Product_Viz/Clay_Lotion.jpg", alt: "Clay_Lotion", title: "Lotion" },
    { cat: "product", src: "assets/img/Product_Viz/CLD_9_2.jpg", alt: "CLD_9_Packaging", title: "CLD-9" },
    { cat: "product", src: "assets/img/Product_Viz/Clinique_3.jpg", alt: "Clinique Moisture Surge", title: "Moisture Surge" },
    { cat: "art", src: "assets/img/Personal_Art/Gargantua.jpg", alt: "A massive black hole", title: "Gargantua" },
    { cat: "product", src: "assets/img/Product_Viz/Evermere_Hydrating_Cream.jpg", alt: "Evermere_Hydrating_Cream", title: "Hydrating Cream" },
    { cat: "arch", src: "assets/img/Arch_Viz/Scandinavian_Bedroom_2.jpg", alt: "Scandinavian bedroom", title: "Scandinavian Bedroom" },
    { cat: "product", src: "assets/img/Product_Viz/Maybelline_Red.jpg", alt: "Evermere_Hydrating_Cream", title: "Maybelline" },
    { cat: "product", src: "assets/img/Product_Viz/Valentino_Black.jpg", alt: "Valentino_Black", title: "Valentino" },
    { cat: "arch", src: "assets/img/Arch_Viz/Modern_Bedroom_3.jpg", alt: "Modern grey bedroom with a night desk", title: "Modern Bedroom" },
    { cat: "product", src: "assets/img/Product_Viz/Tom_Ford_Ombre.jpg", alt: "Tom_Ford_Ombre", title: "Ombré" },
  ];

  /* ---------- Contact form ----------
     Wire this up to Formspree (or any form backend) in 3 steps:
     1. Create a free form at https://formspree.io
     2. Replace YOUR_FORM_ID below with the ID they give you
     3. Done — submissions will arrive by email, no server needed
  --------------------------------------------------------------- */
  const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

  /* =========================================================
     RENDER — build the cards first, so everything below finds them
     ========================================================= */
  const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';

  // gallery entries are either a path string or { src, poster }
  const mediaSrc = (m) => (typeof m === "string" ? m : m.src);
  const isVideo = (m) => /\.(mp4|webm|mov)$/i.test(mediaSrc(m));
  const coverImage = (gallery) => {
    const first = gallery.find((m) => !isVideo(m) || m.poster) || gallery[0];
    return isVideo(first) ? first.poster : mediaSrc(first);
  };

  const ARROW_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function renderFeatured() {
    const track = document.getElementById("carousel-featured");
    if (!track) return;
    track.innerHTML = FEATURED_ORDER.map((id) => {
      const p = FEATURED_PROJECTS[id];
      return `<button class="feat-card" data-project="${esc(id)}">
          <figure><img src="${esc(coverImage(p.gallery))}" alt="${esc(p.cardAlt)}" loading="lazy"></figure>
          <span class="feat-info"><span class="feat-title">${esc(p.cardTitle)}</span><span class="feat-cta">View project ${ARROW_ICON}</span></span>
        </button>`;
    }).join("");
  }

  function renderWorkCarousels() {
    Object.entries(WORK_CAROUSELS).forEach(([key, list]) => {
      const track = document.getElementById(`carousel-${key}`);
      if (!track) return;
      track.innerHTML = list.map((it) => `<button class="car-card" data-lightbox data-group="${esc(key)}" data-full="${esc(it.full || it.src)}" data-title="${esc(it.title)}" data-by="${esc(it.by || "")}">
          <figure><img src="${esc(it.src)}" alt="${esc(it.alt)}" loading="lazy"></figure>
          <figcaption><div class="piece-title">${esc(it.title)}</div><div class="piece-by">${it.by ? `by ${esc(it.by)}` : ""}</div></figcaption>
        </button>`).join("");
    });
  } 

  function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    grid.innerHTML = GALLERY_ITEMS.map((it) => `<button class="g-item" data-cat="${esc(it.cat)}" data-lightbox data-group="all" data-full="${esc(it.full || it.src)}" data-title="${esc(it.title)}" data-by="">
          <img src="${esc(it.src)}" alt="${esc(it.alt)}" loading="lazy"><span class="g-overlay"><span>${esc(it.title)}</span></span>
        </button>`).join("");
  }

  renderFeatured();
  renderWorkCarousels();
  renderGallery();

  /* =========================================================
     BEHAVIOUR
     ========================================================= */

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

  /* ---------- Featured work: project modal ---------- */
  const projectModal = document.getElementById("projectModal");
  const projectScroll = document.getElementById("projectScroll");
  const projectClose = document.getElementById("projectClose");
  const projHeroImg = document.getElementById("projHeroImg");
  const projHeroVideo = document.getElementById("projHeroVideo");
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
    const item = activeGallery[activeImageIndex];
    const src = mediaSrc(item);
    const video = isVideo(item);

    projHeroVideo.pause();
    projHeroImg.classList.toggle("is-hidden", video);
    projHeroVideo.classList.toggle("is-hidden", !video);
    if (video) {
      projHeroVideo.poster = item.poster || "";
      projHeroVideo.src = src;
      projHeroImg.removeAttribute("src");
    } else {
      projHeroImg.src = src;
      projHeroVideo.removeAttribute("src");
      projHeroVideo.load(); // drop the buffered video
    }
    projViewFull.href = mediaSrc(activeGalleryFull[activeImageIndex] || item);
    projViewFull.setAttribute("aria-label", video ? "Open video in a new tab" : "Open full resolution image in a new tab");
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
    data.gallery.forEach((item, i) => {
      const btn = document.createElement("button");
      btn.className = i === 0 ? "active" : "";
      const label = `${esc(data.title)} — view ${i + 1}`;
      if (!isVideo(item)) {
        btn.innerHTML = `<img src="${esc(item)}" alt="${label}" loading="lazy">`;
      } else {
        // without a poster, show the video's first frame as the thumbnail
        const thumb = item.poster
          ? `<img src="${esc(item.poster)}" alt="${label} (video)" loading="lazy">`
          : `<video src="${esc(mediaSrc(item))}#t=0.1" muted playsinline preload="metadata" aria-label="${label} (video)"></video>`;
        btn.innerHTML = `${thumb}<span class="thumb-badge">${PLAY_ICON}</span>`;
      }
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
    projHeroVideo.pause();
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
    if (e.target === projHeroVideo) return; // arrows seek the video instead
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

  /* ---------- Contact form ---------- */
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
