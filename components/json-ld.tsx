export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "CafeOrCoffeeShop"],
        "@id": "https://www.thebashacafe.com/#restaurant",
        "name": "The Basha Cafe",
        "alternateName": [
          "Basha Cafe",
          "The Basha Cafe Islamabad",
          "Basha Cafe Islamabad",
          "The Basha Cafe Rooftop Lounge",
          "Basha Sheesha Cafe",
          "Trending Cafe Islamabad",
          "Top Trending Cafe Islamabad",
          "Basha Cafe E-11",
          "Basha Hookah Lounge"
        ],
        "description": "The Basha Cafe is Islamabad's #1 trending rooftop cafe, restaurant, and luxury sheesha lounge in E-11. Featuring panoramic Margalla views, viral birthday celebration setups with rose arches, premium Russian hookah blends, gourmet multi-cuisine dining, and late-night hours until 4:00 AM.",
        "url": "https://www.thebashacafe.com",
        "telephone": "+923244684895",
        "email": "khanhaziq508@gmail.com",
        "priceRange": "$$",
        "currenciesAccepted": "PKR",
        "paymentAccepted": "Cash, Credit Card, Debit Card",
        "servesCuisine": [
          "Middle Eastern",
          "Continental",
          "Fast Food",
          "Cafe Food",
          "Coffee & Tea",
          "Shisha / Hookah",
          "Mocktails",
          "Desserts"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Roof Top Casa Bella Hotel, E-11/4",
          "addressLocality": "Islamabad",
          "addressRegion": "Islamabad Capital Territory",
          "postalCode": "44000",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 33.7042,
          "longitude": 72.9798
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "12:00",
            "closes": "04:00"
          }
        ],
        "acceptsReservations": "True",
        "hasMenu": "https://www.thebashacafe.com/#menu",
        "menu": "https://www.thebashacafe.com/#menu",
        "image": [
          "https://www.thebashacafe.com/images/hero-bg.jpg",
          "https://www.thebashacafe.com/images/events/rooftop-floral-arch.jpg",
          "https://www.thebashacafe.com/images/events/decorated-rooftop-swing.jpg",
          "https://www.thebashacafe.com/images/events/pergola-cabana-setup.jpg",
          "https://www.thebashacafe.com/images/events/vip-banquet-dining.jpg",
          "https://www.thebashacafe.com/images/events/neon-rose-ring-setup.jpg",
          "https://www.thebashacafe.com/menu-1.jpg",
          "https://www.thebashacafe.com/menu-2.jpg",
          "https://www.thebashacafe.com/menu-3.jpg",
          "https://www.thebashacafe.com/menu-4.jpg",
          "https://www.thebashacafe.com/images/memories/rooftop-night.jpg"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "194",
          "reviewCount": "194"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sarah M." },
            "datePublished": "2025-11-15",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "The atmosphere at Basha Cafe is unmatched. Every visit feels like a special occasion. The hookah flavors are exceptional!"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ahmed K." },
            "datePublished": "2025-12-02",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Best Middle Eastern food and sheesha in town, hands down. The mixed grill platter is a must-try. Perfect rooftop for date nights."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Michael R." },
            "datePublished": "2026-01-18",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "From the moment you walk in, you feel like royalty. The service is impeccable and the rooftop ambiance is simply stunning."
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Haziq Khan",
          "jobTitle": "Founder & Owner"
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Zaid Khan",
            "jobTitle": "General Manager"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/thebashacafe",
          "https://www.facebook.com/share/177v9Q2DKr/",
          "https://www.tiktok.com/@bashacafeww"
        ],
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Rooftop Terrace with Margalla Views",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Custom Birthday Party & VIP Event Setups",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Floral Rose Arches & Neon Sign Backdrops",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Private Indoor Velvet Banquet Hall",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Premium Sheesha & Hookah Lounge",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Late Night Dining (Until 4 AM)",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Free High-Speed Wi-Fi",
            "value": true
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.thebashacafe.com/#website",
        "url": "https://www.thebashacafe.com",
        "name": "The Basha Cafe",
        "alternateName": [
          "Basha Cafe",
          "The Basha Cafe Islamabad",
          "Basha Cafe Islamabad"
        ],
        "description": "Official website of The Basha Cafe: #1 Trending rooftop cafe, birthday celebration venue and luxury sheesha lounge in Islamabad.",
        "publisher": {
          "@id": "https://www.thebashacafe.com/#restaurant"
        },
        "inLanguage": "en-PK"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.thebashacafe.com/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.thebashacafe.com/#home"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://www.thebashacafe.com/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Menu",
            "item": "https://www.thebashacafe.com/#menu"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Celebrations",
            "item": "https://www.thebashacafe.com/#celebrations"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Gallery",
            "item": "https://www.thebashacafe.com/#gallery"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Reviews",
            "item": "https://www.thebashacafe.com/#reviews"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "FAQ",
            "item": "https://www.thebashacafe.com/#faq"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Reservations",
            "item": "https://www.thebashacafe.com/#reservations"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Contact",
            "item": "https://www.thebashacafe.com/#contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.thebashacafe.com/#faq-schema",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is The Basha Cafe known as the #1 trending cafe in Islamabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Basha Cafe has become Islamabad's top trending cafe and rooftop destination thanks to our cinematic Margalla mountain views, viral birthday celebration decor with crimson rose arches, authentic Russian craft hookah blends, and vibrant late-night lounge atmosphere open every single day until 4:00 AM."
            }
          },
          {
            "@type": "Question",
            "name": "What are the opening hours of The Basha Cafe in Islamabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Basha Cafe is open 7 days a week, Monday through Sunday, from 12:00 PM (noon) until 4:00 AM (late night), making it the premier spot for afternoon dining, sunset coffee, and late-night sheesha lounge sessions in Islamabad."
            }
          },
          {
            "@type": "Question",
            "name": "Where is The Basha Cafe located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Basha Cafe is located on the Rooftop of Casa Bella Hotel in E-11, Islamabad. It offers spectacular panoramic views of the city skyline and the Margalla hills in an open-air and indoor luxury lounge setting."
            }
          },
          {
            "@type": "Question",
            "name": "Why is The Basha Cafe rated among the best sheesha cafes in Islamabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Basha Cafe is celebrated for delivering Islamabad's finest hookah experience. We utilize authentic premium Russian pipes, top-grade natural coconut coals, and an extensive collection of 50+ world-class shisha flavors curated by master shisha artisans for clean, smooth, long-lasting sessions."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book The Basha Cafe for birthdays, anniversaries, and private events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The Basha Cafe is Islamabad's favorite venue for milestone celebrations. We offer exclusive VIP lounge areas, custom floral rose arches, neon sign backdrops, celebration cakes, fairy light ambiance, and personalized food platters."
            }
          },
          {
            "@type": "Question",
            "name": "What food and beverages does The Basha Cafe offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our gourmet menu features Middle Eastern specialties, continental platters, premium steaks, juicy burgers, crispy appetizers, artisanal coffees, signature mocktails, and decadent desserts like molten lava cake and Lotus cheesecake."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make a reservation at The Basha Cafe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can make an instant table reservation online using the reservation form on our website, or call/WhatsApp us directly at +92 324 4684895."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
