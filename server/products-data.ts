// 30 Professional Products: Salla, Zid, Shopify, Motion Graphics, Lawyer Websites
export const products = [
  // === متاجر سلة (1-6) ===
  {
    id: 1,
    name: "تصميم متجر سلة احترافي",
    nameEn: "Professional Salla Store Design",
    description: "تصميم متجر إلكتروني متكامل على منصة سلة مع هوية بصرية مميزة",
    fullDescription: "نقدم لك تصميم متجر إلكتروني احترافي على منصة سلة يتضمن تصميم واجهة مستخدم مميزة، تخصيص القالب بالكامل، إضافة المنتجات الأولية، ربط وسائل الدفع، وتدريب على إدارة المتجر.",
    features: ["تصميم واجهة احترافية", "تخصيص القالب كامل", "ربط بوابات الدفع", "إضافة 50 منتج", "تدريب على الإدارة"],
    price: 2499,
    originalPrice: 3299,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "متاجر سلة",
    purchaseCount: 89,
    isFeatured: true,
    packages: [
      { name: "باقة أساسية", price: 2499, description: "تصميم أساسي + 50 منتج" },
      { name: "باقة متقدمة", price: 4999, description: "تصميم متقدم + 150 منتج + ربط API" },
      { name: "باقة احترافية", price: 8999, description: "تصميم VIP + منتجات لا محدودة + دعم سنة" }
    ]
  },
  {
    id: 2,
    name: "قالب سلة مخصص",
    nameEn: "Custom Salla Template",
    description: "تصميم قالب حصري لمتجرك على سلة بتصميم فريد",
    fullDescription: "قالب مخصص 100% لمتجرك على منصة سلة، تصميم فريد لا يتكرر يعكس هوية علامتك التجارية مع أداء عالي وتوافق كامل مع الجوال.",
    features: ["تصميم حصري 100%", "توافق مع جميع الأجهزة", "سرعة تحميل عالية", "SEO محسّن", "كود نظيف"],
    price: 5999,
    originalPrice: 7999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "متاجر سلة",
    purchaseCount: 45,
    isFeatured: false,
    packages: [
      { name: "قالب أساسي", price: 5999, description: "قالب مخصص + صفحة واحدة" },
      { name: "قالب شامل", price: 9999, description: "قالب مخصص + جميع الصفحات" }
    ]
  },
  {
    id: 3,
    name: "إدارة متجر سلة شهرية",
    nameEn: "Monthly Salla Store Management",
    description: "إدارة كاملة لمتجرك على سلة مع تحديثات ودعم مستمر",
    fullDescription: "فريق متخصص لإدارة متجرك على سلة بشكل يومي، تحديث المنتجات، متابعة الطلبات، تحسين الأداء، وتقارير شهرية مفصلة.",
    features: ["إدارة يومية", "تحديث المنتجات", "متابعة الطلبات", "تقارير شهرية", "دعم فني 24/7"],
    price: 1999,
    originalPrice: 2499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
    category: "متاجر سلة",
    purchaseCount: 67,
    isFeatured: false,
    packages: [
      { name: "باقة شهرية", price: 1999, description: "إدارة شهر واحد" },
      { name: "باقة ربع سنوية", price: 5499, description: "إدارة 3 أشهر بخصم" },
      { name: "باقة سنوية", price: 19999, description: "إدارة سنة كاملة بخصم 20%" }
    ]
  },
  
  // === متاجر زد (4-9) ===
  {
    id: 4,
    name: "تصميم متجر زد احترافي",
    nameEn: "Professional Zid Store Design",
    description: "متجر إلكتروني متكامل على منصة زد مع تصميم عصري",
    fullDescription: "نصمم لك متجر احترافي على منصة زد مع واجهة جذابة، تخصيص كامل للقالب، ربط جميع بوابات الدفع السعودية، وتدريب شامل على الإدارة.",
    features: ["تصميم عصري وجذاب", "ربط مدى وApple Pay", "تخصيص القالب", "إضافة 100 منتج", "تدريب مجاني"],
    price: 2799,
    originalPrice: 3499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    category: "متاجر زد",
    purchaseCount: 78,
    isFeatured: true,
    packages: [
      { name: "باقة الأفراد", price: 2799, description: "للمتاجر الصغيرة" },
      { name: "باقة الشركات", price: 5999, description: "للمتاجر المتوسطة" },
      { name: "باقة المؤسسات", price: 11999, description: "للشركات الكبيرة" }
    ]
  },
  {
    id: 5,
    name: "ترقية متجر زد",
    nameEn: "Zid Store Upgrade",
    description: "ترقية وتحسين متجرك الحالي على زد لأداء أفضل",
    fullDescription: "نقوم بترقية متجرك الحالي على زد مع تحسين التصميم، سرعة التحميل، تجربة المستخدم، وتحسين محركات البحث لزيادة المبيعات.",
    features: ["تحسين التصميم", "زيادة السرعة", "تحسين UX", "SEO متقدم", "تقرير التحسينات"],
    price: 1499,
    originalPrice: 1999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "متاجر زد",
    purchaseCount: 56,
    isFeatured: false,
    packages: [
      { name: "ترقية أساسية", price: 1499, description: "تحسينات أساسية" },
      { name: "ترقية شاملة", price: 2999, description: "تحسينات شاملة + SEO" }
    ]
  },
  {
    id: 6,
    name: "تطبيق زد للمتجر",
    nameEn: "Zid Store Mobile App",
    description: "تطبيق موبايل احترافي لمتجرك على زد",
    fullDescription: "نطور لك تطبيق موبايل متكامل لمتجرك على زد يعمل على iOS و Android مع تصميم جذاب وإشعارات ذكية.",
    features: ["تطبيق iOS و Android", "إشعارات ذكية", "تصميم مخصص", "ربط كامل بالمتجر", "نشر على المتاجر"],
    price: 7999,
    originalPrice: 9999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "متاجر زد",
    purchaseCount: 34,
    isFeatured: false,
    packages: [
      { name: "تطبيق أساسي", price: 7999, description: "تطبيق بالمميزات الأساسية" },
      { name: "تطبيق متقدم", price: 14999, description: "تطبيق مع مميزات VIP" }
    ]
  },

  // === متاجر شوبيفاي (7-12) ===
  {
    id: 7,
    name: "متجر شوبيفاي احترافي",
    nameEn: "Professional Shopify Store",
    description: "تصميم متجر شوبيفاي عالمي مع إعدادات الدفع والشحن",
    fullDescription: "نبني لك متجر شوبيفاي احترافي للسوق العالمي مع ثيم مخصص، ربط بوابات الدفع الدولية، إعداد الشحن، وتحسين محركات البحث.",
    features: ["ثيم Shopify مخصص", "ربط Stripe و PayPal", "إعداد الشحن الدولي", "SEO عالمي", "تدريب شامل"],
    price: 4999,
    originalPrice: 6499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80",
    category: "متاجر شوبيفاي",
    purchaseCount: 45,
    isFeatured: true,
    packages: [
      { name: "باقة Starter", price: 4999, description: "للمبتدئين" },
      { name: "باقة Growth", price: 9999, description: "للنمو" },
      { name: "باقة Enterprise", price: 19999, description: "للشركات الكبيرة" }
    ]
  },
  {
    id: 8,
    name: "ترحيل إلى شوبيفاي",
    nameEn: "Shopify Migration",
    description: "نقل متجرك من أي منصة إلى شوبيفاي بأمان",
    fullDescription: "ننقل متجرك بالكامل من سلة، زد، ووكوميرس أو أي منصة أخرى إلى شوبيفاي مع الحفاظ على جميع البيانات والـ SEO.",
    features: ["نقل جميع المنتجات", "نقل بيانات العملاء", "الحفاظ على SEO", "إعادة توجيه الروابط", "دعم ما بعد الترحيل"],
    price: 3499,
    originalPrice: 4499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "متاجر شوبيفاي",
    purchaseCount: 28,
    isFeatured: false,
    packages: [
      { name: "ترحيل أساسي", price: 3499, description: "حتى 500 منتج" },
      { name: "ترحيل كبير", price: 6999, description: "حتى 5000 منتج" }
    ]
  },
  {
    id: 9,
    name: "تطوير Shopify Plus",
    nameEn: "Shopify Plus Development",
    description: "تطوير متقدم لمتاجر Shopify Plus للشركات الكبرى",
    fullDescription: "خدمات تطوير متقدمة لـ Shopify Plus تشمل تخصيص checkout، تكاملات API، أتمتة العمليات، وحلول مخصصة للمؤسسات.",
    features: ["تخصيص Checkout", "تكاملات API", "أتمتة العمليات", "تقارير متقدمة", "دعم مخصص"],
    price: 29999,
    originalPrice: 39999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    category: "متاجر شوبيفاي",
    purchaseCount: 12,
    isFeatured: false,
    packages: [
      { name: "تطوير Plus", price: 29999, description: "تطوير Shopify Plus" }
    ]
  },

  // === موشن جرافيك (10-17) ===
  {
    id: 10,
    name: "فيديو موشن إعلاني",
    nameEn: "Promotional Motion Video",
    description: "فيديو موشن جرافيك احترافي للإعلانات",
    fullDescription: "نصمم لك فيديو موشن جرافيك إعلاني جذاب لمنتجاتك أو خدماتك، مدته 30-60 ثانية، مع تعليق صوتي وموسيقى.",
    features: ["موشن 30-60 ثانية", "تعليق صوتي احترافي", "موسيقى خلفية", "3 مراجعات", "ملف قابل للتعديل"],
    price: 1499,
    originalPrice: 1999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 112,
    isFeatured: true,
    packages: [
      { name: "30 ثانية", price: 1499, description: "فيديو 30 ثانية" },
      { name: "60 ثانية", price: 2499, description: "فيديو 60 ثانية" },
      { name: "90 ثانية", price: 3499, description: "فيديو 90 ثانية" }
    ]
  },
  {
    id: 11,
    name: "إنترو وأوتترو",
    nameEn: "Intro & Outro",
    description: "تصميم مقدمة ونهاية احترافية لفيديوهاتك",
    fullDescription: "نصمم لك إنترو وأوتترو احترافي بتصميم عصري يعكس هوية علامتك التجارية، مناسب لليوتيوب والسوشيال ميديا.",
    features: ["إنترو 5-10 ثواني", "أوتترو 5-10 ثواني", "تصميم مخصص", "ملفات مصدرية", "تعديلات مجانية"],
    price: 499,
    originalPrice: 699,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 156,
    isFeatured: false,
    packages: [
      { name: "إنترو فقط", price: 299, description: "إنترو احترافي" },
      { name: "إنترو + أوتترو", price: 499, description: "الباقة الكاملة" }
    ]
  },
  {
    id: 12,
    name: "فيديو شرح المنتج",
    nameEn: "Product Explainer Video",
    description: "فيديو موشن يشرح منتجك بطريقة مبسطة وجذابة",
    fullDescription: "فيديو موشن جرافيك يشرح منتجك أو خدمتك بطريقة مبسطة وجذابة، مثالي لصفحات الهبوط والسوشيال ميديا.",
    features: ["شرح مبسط", "رسوم متحركة جذابة", "تعليق صوتي", "ترجمة متاحة", "جودة 4K"],
    price: 2999,
    originalPrice: 3999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 78,
    isFeatured: false,
    packages: [
      { name: "فيديو 60 ثانية", price: 2999, description: "شرح مختصر" },
      { name: "فيديو 2 دقيقة", price: 4999, description: "شرح تفصيلي" }
    ]
  },
  {
    id: 13,
    name: "موشن سوشيال ميديا",
    nameEn: "Social Media Motion",
    description: "5 فيديوهات موشن قصيرة للسوشيال ميديا",
    fullDescription: "نصمم لك 5 فيديوهات موشن قصيرة (15-30 ثانية) مناسبة لجميع منصات السوشيال ميديا مع أبعاد مختلفة.",
    features: ["5 فيديوهات", "مدة 15-30 ثانية", "أبعاد متعددة", "مناسب لجميع المنصات", "تسليم سريع"],
    price: 1999,
    originalPrice: 2499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 94,
    isFeatured: false,
    packages: [
      { name: "5 فيديوهات", price: 1999, description: "الباقة الأساسية" },
      { name: "10 فيديوهات", price: 3499, description: "الباقة المتقدمة" }
    ]
  },
  {
    id: 14,
    name: "لوجو أنيميشن",
    nameEn: "Logo Animation",
    description: "تحريك شعارك بطريقة احترافية وجذابة",
    fullDescription: "نحول شعارك الثابت إلى شعار متحرك بتأثيرات احترافية، مثالي للفيديوهات والعروض التقديمية.",
    features: ["تحريك الشعار", "مدة 3-5 ثواني", "تأثيرات صوتية", "جميع الصيغ", "3 أفكار للاختيار"],
    price: 399,
    originalPrice: 599,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 189,
    isFeatured: false,
    packages: [
      { name: "أنيميشن بسيط", price: 399, description: "تحريك أساسي" },
      { name: "أنيميشن متقدم", price: 799, description: "تحريك مع تأثيرات 3D" }
    ]
  },
  {
    id: 15,
    name: "فيديو قصة العلامة",
    nameEn: "Brand Story Video",
    description: "فيديو موشن يحكي قصة علامتك التجارية",
    fullDescription: "فيديو موشن احترافي يروي قصة علامتك التجارية بطريقة مؤثرة تجذب العملاء وتبني الثقة.",
    features: ["قصة مؤثرة", "تصميم سينمائي", "موسيقى درامية", "مدة 2-3 دقائق", "تعليق صوتي احترافي"],
    price: 4999,
    originalPrice: 6499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 42,
    isFeatured: false,
    packages: [
      { name: "2 دقائق", price: 4999, description: "فيديو قصير" },
      { name: "3-5 دقائق", price: 7999, description: "فيديو تفصيلي" }
    ]
  },
  {
    id: 16,
    name: "موشن إنفوجرافيك",
    nameEn: "Infographic Motion",
    description: "تحويل بياناتك إلى فيديو إنفوجرافيك متحرك",
    fullDescription: "نحول بياناتك وإحصائياتك إلى فيديو إنفوجرافيك متحرك سهل الفهم وجذاب للمشاهدة.",
    features: ["تصميم البيانات", "رسوم بيانية متحركة", "أرقام وإحصائيات", "تعليق صوتي", "مدة مرنة"],
    price: 2499,
    originalPrice: 3299,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 56,
    isFeatured: false,
    packages: [
      { name: "إنفوجرافيك قصير", price: 2499, description: "30-60 ثانية" },
      { name: "إنفوجرافيك طويل", price: 4999, description: "2-3 دقائق" }
    ]
  },
  {
    id: 17,
    name: "إعلانات فيديو متعددة",
    nameEn: "Multiple Video Ads",
    description: "باقة 10 إعلانات فيديو للمنصات المختلفة",
    fullDescription: "نصمم لك 10 إعلانات فيديو موشن بأحجام وأبعاد مختلفة لجميع المنصات: فيسبوك، انستجرام، تيك توك، سناب شات.",
    features: ["10 إعلانات فيديو", "أبعاد متعددة", "مناسب لجميع المنصات", "تعديلات غير محدودة", "تسليم سريع"],
    price: 3999,
    originalPrice: 5499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    category: "موشن جرافيك",
    purchaseCount: 67,
    isFeatured: false,
    packages: [
      { name: "10 إعلانات", price: 3999, description: "الباقة الأساسية" },
      { name: "20 إعلان", price: 6999, description: "الباقة الموسعة" }
    ]
  },

  // === مواقع المحامين (18-23) ===
  {
    id: 18,
    name: "موقع مكتب محاماة",
    nameEn: "Law Firm Website",
    description: "موقع احترافي لمكاتب المحاماة مع نظام حجز",
    fullDescription: "نصمم موقع احترافي لمكتب المحاماة يتضمن صفحات الخدمات، الفريق، نظام حجز استشارات، ونموذج تواصل متقدم.",
    features: ["تصميم راقي ومهني", "نظام حجز استشارات", "صفحة الفريق", "المقالات القانونية", "نموذج تواصل"],
    price: 6999,
    originalPrice: 8999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    category: "مواقع المحامين",
    purchaseCount: 34,
    isFeatured: true,
    packages: [
      { name: "موقع أساسي", price: 6999, description: "5 صفحات + حجز" },
      { name: "موقع متقدم", price: 12999, description: "10 صفحات + مدونة + CRM" },
      { name: "موقع شامل", price: 19999, description: "موقع كامل + تطبيق" }
    ]
  },
  {
    id: 19,
    name: "نظام إدارة القضايا",
    nameEn: "Case Management System",
    description: "نظام إلكتروني لإدارة قضايا المحاماة",
    fullDescription: "نظام متكامل لإدارة قضايا مكتب المحاماة، متابعة الجلسات، إدارة العملاء، الفواتير، والتقارير.",
    features: ["إدارة القضايا", "متابعة الجلسات", "إدارة العملاء", "نظام الفواتير", "تقارير مفصلة"],
    price: 14999,
    originalPrice: 19999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    category: "مواقع المحامين",
    purchaseCount: 18,
    isFeatured: false,
    packages: [
      { name: "نظام أساسي", price: 14999, description: "مميزات أساسية" },
      { name: "نظام متكامل", price: 29999, description: "مميزات متقدمة + API" }
    ]
  },
  {
    id: 20,
    name: "هوية مكتب محاماة",
    nameEn: "Law Firm Branding",
    description: "هوية بصرية كاملة لمكتب محاماة",
    fullDescription: "نصمم هوية بصرية متكاملة لمكتب المحاماة تشمل الشعار، الألوان، الخطوط، والتطبيقات المكتبية.",
    features: ["شعار احترافي", "دليل الهوية", "بطاقات العمل", "ورق رسمي", "ملفات مصدرية"],
    price: 3499,
    originalPrice: 4499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    category: "مواقع المحامين",
    purchaseCount: 45,
    isFeatured: false,
    packages: [
      { name: "هوية أساسية", price: 3499, description: "شعار + بطاقات" },
      { name: "هوية شاملة", price: 5999, description: "هوية كاملة + تطبيقات" }
    ]
  },
  {
    id: 21,
    name: "صفحة هبوط للمحامي",
    nameEn: "Lawyer Landing Page",
    description: "صفحة هبوط احترافية لجذب العملاء الجدد",
    fullDescription: "صفحة هبوط مصممة خصيصاً للمحامين لجذب العملاء الجدد، مع نموذج استشارة مجانية وتحسين للتحويل.",
    features: ["تصميم جذاب", "نموذج استشارة", "تحسين التحويل", "سريعة التحميل", "متوافقة مع الجوال"],
    price: 1499,
    originalPrice: 1999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80",
    category: "مواقع المحامين",
    purchaseCount: 67,
    isFeatured: false,
    packages: [
      { name: "صفحة واحدة", price: 1499, description: "صفحة هبوط" },
      { name: "صفحتين", price: 2499, description: "هبوط + شكراً" }
    ]
  },
  {
    id: 22,
    name: "تطبيق استشارات قانونية",
    nameEn: "Legal Consultation App",
    description: "تطبيق موبايل للاستشارات القانونية",
    fullDescription: "تطبيق موبايل متكامل للاستشارات القانونية، يتيح للعملاء حجز مواعيد، محادثة مباشرة، ودفع إلكتروني.",
    features: ["حجز مواعيد", "محادثة مباشرة", "دفع إلكتروني", "إشعارات ذكية", "تقارير العملاء"],
    price: 24999,
    originalPrice: 34999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    category: "مواقع المحامين",
    purchaseCount: 8,
    isFeatured: false,
    packages: [
      { name: "تطبيق أساسي", price: 24999, description: "iOS أو Android" },
      { name: "تطبيق كامل", price: 39999, description: "iOS + Android" }
    ]
  },
  {
    id: 23,
    name: "محتوى قانوني للموقع",
    nameEn: "Legal Website Content",
    description: "كتابة محتوى قانوني احترافي لموقعك",
    fullDescription: "فريق متخصص يكتب لك محتوى قانوني احترافي لموقعك يشمل صفحات الخدمات، المقالات، والصفحات القانونية.",
    features: ["10 صفحات خدمات", "5 مقالات قانونية", "صفحات قانونية", "SEO محسّن", "أسلوب احترافي"],
    price: 1999,
    originalPrice: 2499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    category: "مواقع المحامين",
    purchaseCount: 34,
    isFeatured: false,
    packages: [
      { name: "باقة أساسية", price: 1999, description: "10 صفحات + 5 مقالات" },
      { name: "باقة شاملة", price: 3999, description: "20 صفحة + 10 مقالات" }
    ]
  },

  // === خدمات إضافية (24-30) ===
  {
    id: 24,
    name: "هوية بصرية كاملة",
    nameEn: "Full Brand Identity",
    description: "تصميم هوية بصرية متكاملة تشمل الشعار والألوان",
    fullDescription: "نصمم لك هوية بصرية متكاملة تعكس قيم علامتك التجارية وتميزك عن المنافسين.",
    features: ["تصميم شعار احترافي", "دليل الهوية البصرية", "نظام الألوان والخطوط", "تطبيقات الهوية", "ملفات مصدرية"],
    price: 1999,
    originalPrice: 2499,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    category: "هوية بصرية",
    purchaseCount: 89,
    isFeatured: false,
    packages: [
      { name: "باقة أساسية", price: 1999, description: "شعار + هوية" },
      { name: "باقة شاملة", price: 3999, description: "هوية كاملة + تطبيقات" }
    ]
  },
  {
    id: 25,
    name: "إدارة سوشيال ميديا",
    nameEn: "Social Media Management",
    description: "إدارة احترافية لحساباتك مع محتوى إبداعي",
    fullDescription: "ندير حساباتك على منصات التواصل الاجتماعي بشكل احترافي مع محتوى إبداعي وتقارير شهرية.",
    features: ["30 منشور شهرياً", "تصميمات احترافية", "جدولة ونشر", "تقارير أداء", "إدارة التفاعلات"],
    price: 1499,
    originalPrice: 1999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    category: "سوشيال ميديا",
    purchaseCount: 112,
    isFeatured: false,
    packages: [
      { name: "حساب واحد", price: 1499, description: "إدارة حساب" },
      { name: "3 حسابات", price: 3999, description: "إدارة 3 حسابات" }
    ]
  },
  {
    id: 26,
    name: "حملة إعلانية متكاملة",
    nameEn: "Complete Ad Campaign",
    description: "إدارة حملات إعلانية على Google و Meta",
    fullDescription: "ندير حملاتك الإعلانية باحترافية على منصات Google و Meta مع تحسين مستمر.",
    features: ["إعداد الحملات", "استهداف الجمهور", "تحسين الأداء", "تقارير أسبوعية", "إدارة الميزانية"],
    price: 1299,
    originalPrice: 1699,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    category: "حملات إعلانية",
    purchaseCount: 78,
    isFeatured: false,
    packages: [
      { name: "حملة شهر", price: 1299, description: "حملة لمدة شهر" },
      { name: "حملة 3 أشهر", price: 3299, description: "حملة لمدة 3 أشهر" }
    ]
  },
  {
    id: 27,
    name: "تصوير منتجات احترافي",
    nameEn: "Professional Product Photography",
    description: "تصوير احترافي لمنتجاتك بجودة عالية",
    fullDescription: "تصوير منتجاتك بجودة عالية في استوديو احترافي مع إضاءة مثالية وتعديلات لونية.",
    features: ["تصوير 20 منتج", "خلفيات متعددة", "تعديل الصور", "صور 4K", "تسليم سريع"],
    price: 699,
    originalPrice: 899,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "تصوير منتجات",
    purchaseCount: 145,
    isFeatured: false,
    packages: [
      { name: "20 منتج", price: 699, description: "تصوير 20 منتج" },
      { name: "50 منتج", price: 1499, description: "تصوير 50 منتج" }
    ]
  },
  {
    id: 28,
    name: "تطوير موقع مخصص",
    nameEn: "Custom Website Development",
    description: "تطوير موقع ويب مخصص بالكامل",
    fullDescription: "نطور لك موقع ويب مخصص بالكامل يلبي احتياجات عملك مع واجهة مستخدم سلسة ولوحة تحكم.",
    features: ["تصميم UI/UX", "تطوير Frontend", "تطوير Backend", "لوحة تحكم", "استضافة سنة"],
    price: 7999,
    originalPrice: 9999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    category: "برمجة مواقع",
    purchaseCount: 56,
    isFeatured: false,
    packages: [
      { name: "موقع 5 صفحات", price: 7999, description: "موقع أساسي" },
      { name: "موقع 10 صفحات", price: 14999, description: "موقع متقدم" }
    ]
  },
  {
    id: 29,
    name: "تطوير تطبيق موبايل",
    nameEn: "Mobile App Development",
    description: "تطوير تطبيق احترافي لـ iOS و Android",
    fullDescription: "نطور لك تطبيق موبايل احترافي يعمل على نظامي iOS و Android مع واجهة مستخدم جميلة.",
    features: ["تصميم UI/UX", "تطوير iOS", "تطوير Android", "نشر على المتاجر", "دعم 6 أشهر"],
    price: 14999,
    originalPrice: 19999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "تطوير تطبيقات",
    purchaseCount: 34,
    isFeatured: true,
    packages: [
      { name: "تطبيق أساسي", price: 14999, description: "تطبيق بمميزات أساسية" },
      { name: "تطبيق متقدم", price: 29999, description: "تطبيق مع مميزات VIP" }
    ]
  },
  {
    id: 30,
    name: "باقة الانطلاق الشاملة",
    nameEn: "Complete Startup Package",
    description: "كل ما تحتاجه لإطلاق مشروعك الرقمي",
    fullDescription: "باقة شاملة تتضمن الهوية البصرية، الموقع الإلكتروني، المتجر، والسوشيال ميديا - كل ما تحتاجه في باقة واحدة.",
    features: ["هوية بصرية كاملة", "موقع احترافي", "متجر إلكتروني", "سوشيال ميديا 3 أشهر", "حملة إعلانية"],
    price: 19999,
    originalPrice: 29999,
    currency: "SAR",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "باقات شاملة",
    purchaseCount: 23,
    isFeatured: true,
    packages: [
      { name: "باقة الانطلاق", price: 19999, description: "للمشاريع الناشئة" },
      { name: "باقة النمو", price: 34999, description: "للمشاريع المتوسطة" },
      { name: "باقة المؤسسات", price: 59999, description: "للشركات الكبيرة" }
    ]
  }
];
