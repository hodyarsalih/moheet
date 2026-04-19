/**
 * English / Arabic UI for index.html
 */
(function () {
  var STORAGE_KEY = "dhcouture_lang";

  var STR = {
    en: {
      pageTitle: "DH__COUTURE | Luxury Fashion & Lifestyle",
      metaDescription:
        "DH__COUTURE — luxury fashion and lifestyle. Proudly operated by Al Moheet Al Dahabi Goods Wholesaler L.L.C, Dubai. Serving customers across Iraq.",
      logoAria: "DH__COUTURE — Al Moheet Al Dahabi",
      navMenu: "Menu",
      navCollection: "Collection",
      navBrand: "Brand",
      navPayments: "Payments",
      navCategories: "Categories",
      navDelivery: "Delivery",
      navContact: "Contact",
      langEn: "English",
      langAr: "العربية",
      langGroup: "Language",

      heroEyebrow: "Al Moheet Al Dahabi · Dubai",
      heroTitleHtml:
        'Proudly Owns <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a>',
      heroSubHtml:
        'A leading name in contemporary luxury fashion, <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> serves customers across Iraq with a powerful social presence—millions of interactions and a community that engages daily. Operating continuously since <strong style="color: var(--text)">2019</strong>, the brand brings more than <strong style="color: var(--text)">seven years</strong> of refined retail and wholesale experience to every collection.',
      heroPill1: "Since 2019",
      heroPill2: "Millions of interactions",
      heroPill3: "Iraq & UAE",

      galleryLabel: "Runway & lifestyle",
      galleryTitleHtml:
        '<a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> Fashion Collection',
      galleryLead:
        "A social-first showcase of silhouettes, styling, and motion—curated to reflect the energy of a high-volume Instagram fashion house. Clips autoplay muted for an immersive, scroll-native experience.",

      aboutLabel: "Heritage",
      aboutTitle: "About the Brand",
      aboutLeadHtml:
        '<a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> operates across two strategic hubs: <strong style="color: var(--text)">Dubai</strong>, where sourcing, partnerships, and trade are anchored, and <strong style="color: var(--text)">Iraq</strong>, where the brand’s audience lives and shops. Products are procured through Dubai’s wholesale and luxury supply network and fulfilled via dedicated warehouse operations in <strong style="color: var(--text)">Sulaymaniyah, Iraq</strong>, ensuring consistent availability for a nationwide customer base.',
      aboutCardTitle: "Reach & recognition",
      aboutCardHtml:
        'With <strong style="color: var(--text)">millions of interactions each month</strong> across social platforms, <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> is widely recognised among fashion-forward customers in Iraq. The brand’s digital footprint reflects sustained trust, repeat engagement, and a style language tuned to modern luxury.',

      cashlessLabel: "Checkout",
      cashlessTitle: "Moving Toward Cashless Shopping",
      cashlessP1Html:
        'Al Moheet Al Dahabi Goods Wholesaler L.L.C now supports <strong style="color: var(--text)">secure online payments</strong> for a faster, safer, and more transparent purchase journey. Digital settlement reduces friction at handover, improves record-keeping for both retail and wholesale clients, and aligns with global best practices in e-commerce.',
      cashlessP2Html:
        'Customers who pay online can receive delivery within <strong style="color: var(--text)">24 hours</strong> through the Iraq distribution network—subject to order cut-off times and regional coverage—so you spend less time coordinating payment and more time enjoying your order.',

      catLabel: "Assortment",
      catTitle: "Product Categories",
      catLead:
        "From elevated fashion to premium electronics in partnership with Jabal Shabadin company LTD. (Based in Iraq), Al Moheet Al Dahabi Goods Wholesaler L.L.C curates categories that match how customers discover and shop today.",
      catFashion: "Fashion",
      catElectronics: "Electronics",
      catLiAbaya: "Women Abaya",
      catLiClothing: "Clothing Collections",
      catLiIphone: "iPhone",
      catLiIpad: "iPad",
      catLiSamsung: "Samsung Galaxy devices",
      catLiAccessories: "Mobile accessories",
      catNoteHtml:
        '<strong>Electronics partnership:</strong> Device and accessory assortments are offered in collaboration with <strong>Jabal Shabadin company LTD.</strong> (Based in Iraq), combining trusted sourcing with the brand’s retail standards.',

      deliveryLabel: "Logistics",
      deliveryTitle: "Delivery & Fulfilment",
      deliveryLeadHtml:
        'Orders are picked, packed, and dispatched from the <strong style="color: var(--text)">warehouse in Sulaymaniyah, Iraq</strong>. Express delivery is available <strong style="color: var(--text)">within 24 hours</strong> across most regions, helping customers receive fashion and electronics quickly after confirmation. Final timelines may vary by destination, weather, and carrier capacity—our team confirms windows at checkout when needed.',

      statsLabel: "Community",
      statsTitle: "Social Proof",
      statsLeadHtml:
        '<a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer"><strong style="color: var(--text)">@dh__couture</strong></a> is a verified Instagram presence in luxury fashion and couture—metrics below come from Meta’s own analytics (Professional dashboard and reel insights), not estimates.',
      statLbl1: "Views in the last 30 days",
      statLbl2: "Views on a single top reel",
      statLbl3: "Followers on Instagram",
      statLbl4: "Trusted brand & continuous operations",
      statsCaptionHtml:
        'Snapshot from Instagram Professional dashboard — <strong style="color: var(--text)">4.8M views</strong> in the last 30 days, alongside high-performing reels (e.g. <strong style="color: var(--text)">3.1M views</strong> on individual content).',
      statsImgAlt:
        "Instagram Professional dashboard for @dh__couture showing 4.8 million views in the last 30 days",

      contactLabel: "Reach us",
      contactTitle: "Contact",
      contactLead:
        "Trade, wholesale, and customer enquiries—Al Moheet Al Dahabi Goods Wholesaler L.L.C",
      contactCompany: "Company",
      contactDirect: "Direct lines",
      lblLegal: "Legal name",
      lblTrade: "Trade license",
      lblRegistered: "Registered location",
      lblDomain: "Official domain",
      lblSupport: "Support",
      lblTeam: "Team",
      lblUae: "UAE",
      lblIraq: "Iraq",
      companyName: "Al Moheet Al Dahabi Goods Wholesaler L.L.C",
      regLocation: "Dubai, United Arab Emirates",

      footerAbout: "About Us",
      footerShipping: "Shipping Policy",
      footerRefund: "Refund Policy",
      footerTerms: "Terms & Conditions",
      footerPrivacy: "Privacy Policy",
      footerContact: "Contact",
      footerCopyHtml:
        '<a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> serves customers across Iraq with fashion and lifestyle assortments sourced through Dubai. Operated by Al Moheet Al Dahabi Goods Wholesaler L.L.C, registered in Dubai, United Arab Emirates.',
      footerLogoAlt: "Al Moheet Al Dahabi — DH__COUTURE",
    },

    ar: {
      pageTitle: "DH__COUTURE | أزياء فاخرة ونمط حياة",
      metaDescription:
        "DH__COUTURE — أزياء فاخرة ونمط حياة. تديرها شركة المحيط الذهبي لتجارة الجملة ذ.م.م، دبي. نخدم العملاء في العراق والمنطقة.",
      logoAria: "DH__COUTURE — المحيط الذهبي",
      navMenu: "القائمة",
      navCollection: "المجموعة",
      navBrand: "العلامة",
      navPayments: "الدفع",
      navCategories: "التصنيفات",
      navDelivery: "التوصيل",
      navContact: "اتصل بنا",
      langEn: "English",
      langAr: "العربية",
      langGroup: "اللغة",

      heroEyebrow: "المحيط الذهبي · دبي",
      heroTitleHtml:
        'نفخر بامتلاك <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a>',
      heroSubHtml:
        'اسم رائد في عالم الأزياء الفاخرة المعاصرة؛ <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> يخدم العملاء في العراق بحضور اجتماعي قوي—ملايين التفاعلات ومجتمع يتفاعل يومياً. يعمل باستمرار منذ <strong style="color: var(--text)">2019</strong>، وتجاوزت الخبرة أكثر من <strong style="color: var(--text)">سبع سنوات</strong> في التجزئة والجملة الراقية في كل مجموعة.',
      heroPill1: "منذ 2019",
      heroPill2: "ملايين التفاعلات",
      heroPill3: "العراق والإمارات",

      galleryLabel: "العرض ونمط الحياة",
      galleryTitleHtml:
        'مجموعة أزياء <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a>',
      galleryLead:
        "عرض يعكس القصّ والحركة والأسلوب—بطاقة عرض اجتماعية عالية كدار أزياء على إنستغرام. المقاطع تعمل عند التمرير بصمت لتجربة غامرة.",

      aboutLabel: "الإرث",
      aboutTitle: "عن العلامة",
      aboutLeadHtml:
        'تعمل <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> عبر محورين: <strong style="color: var(--text)">دبي</strong> حيث التوريد والشراكات والتجارة، و<strong style="color: var(--text)">العراق</strong> حيث الجمهور والطلب. تُورد المنتجات عبر شبكة الجملة والتوريد في دبي وتُنفَّذ عبر مستودع مخصص في <strong style="color: var(--text)">السليمانية، العراق</strong> لضمان التوفر على مستوى البلاد.',
      aboutCardTitle: "الوصول والتميّز",
      aboutCardHtml:
        'مع <strong style="color: var(--text)">ملايين التفاعلات شهرياً</strong> على المنصات، <a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> معروفة لدى عشاق الموضة في العراق. الحضور الرقمي يعكس الثقة والتفاعل المتكرر ولغة أسلوب عصورية فاخرة.',

      cashlessLabel: "الدفع",
      cashlessTitle: "نحو تسوق أقل اعتماداً على النقد",
      cashlessP1Html:
        'تدعم شركة المحيط الذهبي لتجارة الجملة ذ.م.م الآن <strong style="color: var(--text)">مدفوعات إلكترونية آمنة</strong> لرحلة شراء أسرع وأوضح. يقلّ الاحتكاك عند التسليم وتحسّن السجلات للتجزئة والجملة وفق ممارسات التجارة الإلكترونية.',
      cashlessP2Html:
        'من يدفع إلكترونياً يمكنه استلام الطلب خلال <strong style="color: var(--text)">24 ساعة</strong> عبر شبكة التوزيع في العراق—حسب أوقات القطع والتغطية—لتوفير الوقت والاستمتاع بالطلب.',

      catLabel: "التشكيلة",
      catTitle: "تصنيفات المنتجات",
      catLead:
        "من الأزياء الراقية إلى الإلكترونيات بالشراكة مع شركة جبل شابادين للتجارة العامة (مقرها العراق)، تختار المحيط الذهبي فئات تناسب طريقة اكتشاف العملاء للتسوق اليوم.",
      catFashion: "الأزياء",
      catElectronics: "الإلكترونيات",
      catLiAbaya: "عباءات نسائية",
      catLiClothing: "مجموعات ملابس",
      catLiIphone: "آيفون",
      catLiIpad: "آيباد",
      catLiSamsung: "أجهزة سامسونج جالكسي",
      catLiAccessories: "إكسسوارات جوال",
      catNoteHtml:
        '<strong>شراكة الإلكترونيات:</strong> تُعرض الأجهزة والإكسسوارات بالتعاون مع <strong>شركة جبل شابادين للتجارة العامة</strong> (مقرها العراق) مع معايير توريد موثوقة للعلامة.',

      deliveryLabel: "اللوجستيات",
      deliveryTitle: "التوصيل والتنفيذ",
      deliveryLeadHtml:
        'تُجهّز الطلبات وتُعبّأ وتُرسل من <strong style="color: var(--text)">المستودع في السليمانية، العراق</strong>. التوصيل السريع خلال <strong style="color: var(--text)">24 ساعة</strong> في معظم المناطق؛ قد تختلف المدة حسب الوجهة والطقس والناقل—يؤكد الفريق النافذة عند الحاجة.',

      statsLabel: "المجتمع",
      statsTitle: "الحضور الرقمي",
      statsLeadHtml:
        '<a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer"><strong style="color: var(--text)">@dh__couture</strong></a> حساب موثّق في عالم الأزياء الفاخرة والكوتور—الأرقام أدناه من تحليلات ميتا (لوحة احترافية ورؤى الريلز) وليست تقديرات.',
      statLbl1: "مشاهدات خلال آخر 30 يوماً",
      statLbl2: "مشاهدات لريل واحد متميز",
      statLbl3: "متابعون على إنستغرام",
      statLbl4: "علامة موثوقة وعمل مستمر",
      statsCaptionHtml:
        'لقطة من لوحة إنستغرام الاحترافية — <strong style="color: var(--text)">4.8M مشاهدة</strong> خلال 30 يوماً، مع ريلز قوية (مثل <strong style="color: var(--text)">3.1M مشاهدة</strong> لمحتوى فردي).',
      statsImgAlt:
        "لوحة إنستغرام الاحترافية لـ @dh__couture تظهر 4.8 مليون مشاهدة خلال آخر 30 يوماً",

      contactLabel: "تواصل معنا",
      contactTitle: "الاتصال",
      contactLead: "تجارة الجملة واستفسارات العملاء—شركة المحيط الذهبي لتجارة الجملة ذ.م.م",
      contactCompany: "الشركة",
      contactDirect: "أرقام مباشرة",
      lblLegal: "الاسم القانوني",
      lblTrade: "رقم الرخصة",
      lblRegistered: "مكان التسجيل",
      lblDomain: "النطاق الرسمي",
      lblSupport: "الدعم",
      lblTeam: "الفريق",
      lblUae: "الإمارات",
      lblIraq: "العراق",
      companyName: "شركة المحيط الذهبي لتجارة الجملة ذ.م.م",
      regLocation: "دبي، الإمارات العربية المتحدة",

      footerAbout: "من نحن",
      footerShipping: "سياسة الشحن",
      footerRefund: "سياسة الاسترجاع",
      footerTerms: "الشروط والأحكام",
      footerPrivacy: "سياسة الخصوصية",
      footerContact: "اتصل بنا",
      footerCopyHtml:
        '<a class="brand-instagram" href="https://www.instagram.com/dh__couture/" target="_blank" rel="noopener noreferrer">DH__COUTURE</a> تخدم العملاء في العراق بأزياء ومنتجات نمط حياة مورّدة عبر دبي. تديرها شركة المحيط الذهبي لتجارة الجملة ذ.م.م، مسجلة في دبي، الإمارات العربية المتحدة.',
      footerLogoAlt: "المحيط الذهبي — DH__COUTURE",
    },
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (_) {
      return "en";
    }
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "ar") lang = "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    apply(lang);
  }

  function apply(lang) {
    var t = STR[lang] || STR.en;
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.title = t.pageTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);

    var logo = document.querySelector(".logo");
    if (logo) logo.setAttribute("aria-label", t.logoAria);

    var map = [
      ["#nav-toggle", "textContent", "navMenu"],
      ["#site-nav a[href='#collection']", "textContent", "navCollection"],
      ["#site-nav a[href='#about-brand']", "textContent", "navBrand"],
      ["#site-nav a[href='#cashless']", "textContent", "navPayments"],
      ["#site-nav a[href='#categories']", "textContent", "navCategories"],
      ["#site-nav a[href='#delivery']", "textContent", "navDelivery"],
      ["#site-nav a[href='#contact']", "textContent", "navContact"],
      [".hero-eyebrow", "textContent", "heroEyebrow"],
      ["#hero-title", "innerHTML", "heroTitleHtml"],
      [".hero-sub", "innerHTML", "heroSubHtml"],
      [".hero-meta .hero-pill:nth-child(1)", "textContent", "heroPill1"],
      [".hero-meta .hero-pill:nth-child(2)", "textContent", "heroPill2"],
      [".hero-meta .hero-pill:nth-child(3)", "textContent", "heroPill3"],
      [".gallery-head .section-label", "textContent", "galleryLabel"],
      ["#gallery-title", "innerHTML", "galleryTitleHtml"],
      [".gallery-head .section-lead", "textContent", "galleryLead"],
      ["#about-brand .section-label", "textContent", "aboutLabel"],
      ["#about-title", "textContent", "aboutTitle"],
      ["#about-brand .split > .reveal:first-child .section-lead", "innerHTML", "aboutLeadHtml"],
      ["#about-brand .card-block h3", "textContent", "aboutCardTitle"],
      ["#about-brand .card-block p", "innerHTML", "aboutCardHtml"],
      ["#cashless .section-label", "textContent", "cashlessLabel"],
      ["#cashless-title", "textContent", "cashlessTitle"],
      ["#cashless .cashless-inner > p:nth-child(3)", "innerHTML", "cashlessP1Html"],
      ["#cashless .cashless-inner > p:nth-child(4)", "innerHTML", "cashlessP2Html"],
      ["#categories .section-label", "textContent", "catLabel"],
      ["#cat-title", "textContent", "catTitle"],
      ["#categories header .section-lead", "textContent", "catLead"],
      ["#categories .cat-grid .cat-card:nth-child(1) h3", "textContent", "catFashion"],
      ["#categories .cat-grid .cat-card:nth-child(2) h3", "textContent", "catElectronics"],
      ["#categories .cat-grid .cat-card:nth-child(1) li:nth-child(1)", "textContent", "catLiAbaya"],
      ["#categories .cat-grid .cat-card:nth-child(1) li:nth-child(2)", "textContent", "catLiClothing"],
      ["#categories .cat-grid .cat-card:nth-child(2) li:nth-child(1)", "textContent", "catLiIphone"],
      ["#categories .cat-grid .cat-card:nth-child(2) li:nth-child(2)", "textContent", "catLiIpad"],
      ["#categories .cat-grid .cat-card:nth-child(2) li:nth-child(3)", "textContent", "catLiSamsung"],
      ["#categories .cat-grid .cat-card:nth-child(2) li:nth-child(4)", "textContent", "catLiAccessories"],
      [".cat-note", "innerHTML", "catNoteHtml"],
      ["#delivery .section-label", "textContent", "deliveryLabel"],
      ["#delivery-title", "textContent", "deliveryTitle"],
      ["#delivery .section-lead", "innerHTML", "deliveryLeadHtml"],
      ["#social-proof .section-label", "textContent", "statsLabel"],
      ["#stats-title", "textContent", "statsTitle"],
      ["#social-proof header .section-lead", "innerHTML", "statsLeadHtml"],
      [".stats-grid.stats-grid--four .stat-item:nth-child(1) .stat-label", "textContent", "statLbl1"],
      [".stats-grid.stats-grid--four .stat-item:nth-child(2) .stat-label", "textContent", "statLbl2"],
      [".stats-grid.stats-grid--four .stat-item:nth-child(3) .stat-label", "textContent", "statLbl3"],
      [".stats-grid.stats-grid--four .stat-item:nth-child(4) .stat-label", "textContent", "statLbl4"],
      [".stats-proof figcaption", "innerHTML", "statsCaptionHtml"],
      [".stats-proof img", "alt", "statsImgAlt"],
      ["#contact .section-label", "textContent", "contactLabel"],
      ["#contact-title", "textContent", "contactTitle"],
      ["#contact header .section-lead", "textContent", "contactLead"],
      [".contact-card:first-child h3", "textContent", "contactCompany"],
      [".contact-card:last-child h3", "textContent", "contactDirect"],
      [".footer-nav a[href='#about-brand']", "textContent", "footerAbout"],
      ['.footer-nav a[href="shipping-policy.html"]', "textContent", "footerShipping"],
      ['.footer-nav a[href="refund-policy.html"]', "textContent", "footerRefund"],
      ['.footer-nav a[href="terms-conditions.html"]', "textContent", "footerTerms"],
      ['.footer-nav a[href="privacy-policy.html"]', "textContent", "footerPrivacy"],
      [".footer-nav a[href='#contact']", "textContent", "footerContact"],
      [".footer-copy", "innerHTML", "footerCopyHtml"],
      [".footer-brand img", "alt", "footerLogoAlt"],
    ];

    function setText(sel, key) {
      var el = document.querySelector(sel);
      if (!el || t[key] === undefined) return;
      el.textContent = t[key];
    }

    function setHtml(sel, key) {
      var el = document.querySelector(sel);
      if (!el || t[key] === undefined) return;
      el.innerHTML = t[key];
    }

    function setAttr(sel, attr, key) {
      var el = document.querySelector(sel);
      if (!el || t[key] === undefined) return;
      el.setAttribute(attr, t[key]);
    }

    map.forEach(function (row) {
      var mode = row[1];
      var key = row[2];
      if (mode === "textContent") setText(row[0], key);
      else if (mode === "innerHTML") setHtml(row[0], key);
      else if (mode === "alt") setAttr(row[0], "alt", key);
    });

    var companyUl = document.querySelector(".contact-card:first-child .contact-list");
    if (companyUl && t.companyName) {
      companyUl.querySelector("li:nth-child(1)").innerHTML =
        '<span class="label">' + escapeHtml(t.lblLegal) + "</span> " +
        (lang === "en" ? goldAmadLettersEnHtml(t.companyName) : goldFirstHtml(t.companyName));
      companyUl.querySelector("li:nth-child(2)").innerHTML =
        '<span class="label">' + escapeHtml(t.lblTrade) + "</span> 1493267";
      companyUl.querySelector("li:nth-child(3)").innerHTML =
        '<span class="label">' + escapeHtml(t.lblRegistered) + "</span> " + escapeHtml(t.regLocation);
      var domainNoteSuffix =
        lang === "ar"
          ? " · ترمز <span class=\"text-gold\">AMAD</span> إلى اسم الشركة " + goldFirstHtml("المحيط الذهبي") + "."
          : " · <span class=\"text-gold\">AMAD</span> stands for " + goldAmadLettersEnHtml("Al Moheet Al Dahabi") + ".";
      companyUl.querySelector("li:nth-child(4)").innerHTML =
        '<span class="label">' +
        escapeHtml(t.lblDomain) +
        '</span> <a href="https://amad.ae" target="_blank" rel="noopener noreferrer">amad.ae</a>' +
        domainNoteSuffix;
    }

    var directUl = document.querySelector(".contact-card:last-child .contact-list");
    if (directUl) {
      directUl.querySelector("li:nth-child(1)").innerHTML =
        '<span class="label">' +
        escapeHtml(t.lblSupport) +
        '</span> <a href="mailto:support@amad.ae">support@amad.ae</a>';
      directUl.querySelector("li:nth-child(2)").innerHTML =
        '<span class="label">' +
        escapeHtml(t.lblTeam) +
        '</span> <a href="mailto:team@amad.ae">team@amad.ae</a>';
      directUl.querySelector("li:nth-child(3)").innerHTML =
        '<span class="label">' +
        escapeHtml(t.lblUae) +
        '</span><br /><a href="tel:+971542442404">+971 54 244 2404</a><br /><a href="tel:+971543446448">+971 54 344 6448</a>';
      directUl.querySelector("li:nth-child(4)").innerHTML =
        '<span class="label">' +
        escapeHtml(t.lblIraq) +
        '</span><br /><a href="tel:+9647707747773">+964 770 774 7773</a><br /><a href="tel:+9647700507001">+964 770 050 7001</a>';
    }

    var langSwitch = document.querySelector(".lang-switch");
    if (langSwitch && t.langGroup) {
      langSwitch.setAttribute("aria-label", t.langGroup);
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      var dl = btn.getAttribute("data-lang");
      if (dl === "en") btn.textContent = t.langEn;
      if (dl === "ar") btn.textContent = t.langAr;
    });
  }

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function goldFirstHtml(s) {
    if (!s || s.length === 0) return "";
    return (
      '<span class="text-gold">' +
      escapeHtml(s.charAt(0)) +
      "</span>" +
      escapeHtml(s.slice(1))
    );
  }

  /** Gold A (Al), M (Moheet), A (Al), D (Dahabi) in English legal-style names. */
  function goldAmadLettersEnHtml(name) {
    if (!name || name.length === 0) return "";
    var goldAt = {};
    goldAt[0] = true;
    var iM = name.indexOf("Moheet");
    if (iM >= 0) goldAt[iM] = true;
    var iSecondAl = name.indexOf(" Al ");
    if (iSecondAl >= 0) goldAt[iSecondAl + 1] = true;
    var iD = name.indexOf("Dahabi");
    if (iD >= 0) goldAt[iD] = true;
    var out = "";
    for (var i = 0; i < name.length; i++) {
      if (goldAt[i]) {
        out += '<span class="text-gold">' + escapeHtml(name.charAt(i)) + "</span>";
      } else {
        out += escapeHtml(name.charAt(i));
      }
    }
    return out;
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(getLang());
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });
  });
})();
