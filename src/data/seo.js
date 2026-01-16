export const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Formation Coach EMS Certifiante - Body Training Studio",
    "description": "Formation intensive de 5 jours pour devenir expert en électrostimulation et ouvrir votre studio EMS. Dirigée par Daniel Camus.",
    "provider": {
        "@type": "Organization",
        "name": "Body Training Studio",
        "sameAs": "https://www.bodytrainingstudio.be"
    },
    "coursePrerequisites": "Aucun prérequis technique, motivation entrepreneuriale requise.",
    "educationalCredentialAwarded": "Certification Coach EMS Body Training",
    "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Onsite",
        "duration": "P5D", // 5 Jours
        "instructor": {
            "@type": "Person",
            "name": "Daniel Camus",
            "description": "Ancien footballeur professionnel et expert EMS"
        }
    },
    "offers": {
        "@type": "Offer",
        "category": "Paid",
        "priceCurrency": "EUR",
        "price": "2800",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01"
    }
};
