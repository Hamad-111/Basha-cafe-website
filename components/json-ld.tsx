export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "CafeOrCoffeeShop"],
        "@id": "https://www.thebashacafe.com/#restaurant",
        "name": "Basha Cafe",
        "alternateName": [
          "The Basha Cafe",
          "Basha Cafe Islamabad",
          "The Basha Cafe Islamabad",
          "Basha Sheesha Cafe",
          "Basha Rooftop Lounge",
          "Basha Hookah Cafe"
        ],
        "description": "Basha Cafe is the top-rated rooftop restaurant and luxury sheesha cafe in E-11 Islamabad. Offering premium hookah flavors, gourmet Middle Eastern and continental cuisine, specialty coffee, and scenic Margalla skyline views until 4:00 AM.",
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
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Private VIP Lounge & Birthday Celebrations",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Live Music & DJ Nights",
            "value": true
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.thebashacafe.com/#website",
        "url": "https://www.thebashacafe.com",
        "name": "The Basha Cafe Islamabad",
        "alternateName": "Basha Cafe Islamabad",
        "description": "Official website of Basha Cafe: Top restaurant and sheesha lounge in Islamabad.",
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
            "name": "Gallery",
            "item": "https://www.thebashacafe.com/#gallery"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Reviews",
            "item": "https://www.thebashacafe.com/#reviews"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "FAQ",
            "item": "https://www.thebashacafe.com/#faq"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Reservations",
            "item": "https://www.thebashacafe.com/#reservations"
          },
          {
            "@type": "ListItem",
            "position": 8,
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
            "name": "What are the opening hours of Basha Cafe in Islamabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basha Cafe is open 7 days a week, Monday through Sunday, from 12:00 PM (noon) until 4:00 AM (late night), making it the premier spot for both afternoon dining and late-night sheesha lounge sessions in Islamabad."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Basha Cafe located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basha Cafe is located on the Rooftop of Casa Bella Hotel in E-11, Islamabad. It offers spectacular panoramic views of the city skyline and the Margalla hills in an open-air and indoor luxury lounge setting."
            }
          },
          {
            "@type": "Question",
            "name": "Is Basha Cafe considered the best sheesha cafe in Islamabad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Basha Cafe is widely celebrated as one of Islamabad's top sheesha cafes, offering an extensive selection of premium imported hookah flavors, smooth Russian pipes, expert preparation, and a refined luxury lounge atmosphere."
            }
          },
          {
            "@type": "Question",
            "name": "Can I book Basha Cafe for birthdays, anniversaries, and private events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Basha Cafe offers VIP lounge bookings and customized event setups for birthdays, anniversaries, corporate dinners, and celebrations, complete with specialized decor, customized cakes, and tailored dining platters."
            }
          },
          {
            "@type": "Question",
            "name": "What food and beverages does Basha Cafe offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our gourmet menu features Middle Eastern specialties, continental platters, premium steaks, juicy burgers, crispy appetizers, artisanal coffees, signature mocktails, and decadent desserts like molten lava cake and Lotus cheesecake."
            }
          },
          {
            "@type": "Question",
            "name": "How do I make a reservation at Basha Cafe?",
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
