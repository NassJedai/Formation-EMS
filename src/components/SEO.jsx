import React from 'react';
import { schemaData } from '../data/seo';

const SEO = () => {
    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};

export default SEO;
