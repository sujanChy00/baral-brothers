import type { Schema, Struct } from '@strapi/strapi';

export interface EngineeringFacilitiesFacilities
  extends Struct.ComponentSchema {
  collectionName: 'components_engineering_facilities_facilities';
  info: {
    description: '';
    displayName: 'facilities';
    icon: 'code';
  };
  attributes: {
    our_facilities: Schema.Attribute.Component<
      'engineering-facilities.top-facilities',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface EngineeringFacilitiesSubBanner extends Struct.ComponentSchema {
  collectionName: 'components_engineering_facilities_sub_banners';
  info: {
    description: '';
    displayName: 'sub banner';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    url: Schema.Attribute.Text;
  };
}

export interface EngineeringFacilitiesTopFacilities
  extends Struct.ComponentSchema {
  collectionName: 'components_engineering_facilities_top_facilities';
  info: {
    displayName: 'Top Facilities';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface GlobalHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_global_header_links';
  info: {
    displayName: 'header links';
  };
  attributes: {
    label: Schema.Attribute.Text;
    url: Schema.Attribute.Enumeration<
      [
        '/nepali-dining',
        '/baral-engineering',
        '/sierra-japan-enterprises',
        '/sasto-sulav-express',
        '/about',
      ]
    >;
  };
}

export interface GroceryItemsFeaturedItems extends Struct.ComponentSchema {
  collectionName: 'components_grocery_items_featured_items';
  info: {
    displayName: 'featured items';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    items: Schema.Attribute.Component<'grocery-items.items', true>;
    title: Schema.Attribute.Text;
    url: Schema.Attribute.Text;
  };
}

export interface GroceryItemsItems extends Struct.ComponentSchema {
  collectionName: 'components_grocery_items_items';
  info: {
    displayName: 'items';
    icon: 'briefcase';
  };
  attributes: {
    desc: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
    url: Schema.Attribute.Text;
  };
}

export interface HomeContent extends Struct.ComponentSchema {
  collectionName: 'components_home_contents';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    desc: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
    url: Schema.Attribute.Enumeration<
      [
        '/nepali-dining',
        '/baral-engineering',
        '/sierra-japan-enterprises',
        '/sasto-sulav-express',
      ]
    >;
  };
}

export interface HomeHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_home_banners';
  info: {
    description: '';
    displayName: 'home-banner';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.Enumeration<
      [
        '/nepali-dining',
        '/baral-engineering',
        '/sierra-japan-enterprises',
        '/sasto-sulav-express',
      ]
    >;
  };
}

export interface HomeTopics extends Struct.ComponentSchema {
  collectionName: 'components_home_topics';
  info: {
    description: '';
    displayName: 'topics';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
    url: Schema.Attribute.Enumeration<
      [
        '/nepali-dining',
        '/baral-engineering',
        '/sierra-japan-enterprises',
        '/sasto-sulav-express',
      ]
    >;
  };
}

export interface HomeTrendingTopics extends Struct.ComponentSchema {
  collectionName: 'components_home_trending_topics';
  info: {
    description: '';
    displayName: 'trending topics';
  };
  attributes: {
    title: Schema.Attribute.Text;
    topics: Schema.Attribute.Component<'home.topics', true>;
  };
}

export interface PageSeoKeywords extends Struct.ComponentSchema {
  collectionName: 'components_page_seo_keywords';
  info: {
    displayName: 'keywords';
  };
  attributes: {
    page_keyword: Schema.Attribute.Text;
  };
}

export interface PageSeoOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_page_seo_open_graphs';
  info: {
    description: '';
    displayName: 'open_graph';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'page-seo.open-graph-images', false>;
    site_name: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PageSeoOpenGraphImages extends Struct.ComponentSchema {
  collectionName: 'components_page_seo_open_graph_images';
  info: {
    description: '';
    displayName: 'open_graph_images';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    fav_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Schema.Attribute.Component<'page-seo.keywords', true>;
    open_graphs: Schema.Attribute.Component<'page-seo.open-graph', false>;
    title: Schema.Attribute.String;
  };
}

export interface SocialLinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_social_links_social_links';
  info: {
    description: '';
    displayName: 'social links';
    icon: 'twitter';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        'facebook',
        'twitter',
        'instagram',
        'youtube',
        'linkedIn',
        'website',
        'tiktok',
      ]
    >;
    url: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'engineering-facilities.facilities': EngineeringFacilitiesFacilities;
      'engineering-facilities.sub-banner': EngineeringFacilitiesSubBanner;
      'engineering-facilities.top-facilities': EngineeringFacilitiesTopFacilities;
      'faq.faq': FaqFaq;
      'global.header-links': GlobalHeaderLinks;
      'grocery-items.featured-items': GroceryItemsFeaturedItems;
      'grocery-items.items': GroceryItemsItems;
      'home.content': HomeContent;
      'home.home-banner': HomeHomeBanner;
      'home.topics': HomeTopics;
      'home.trending-topics': HomeTrendingTopics;
      'page-seo.keywords': PageSeoKeywords;
      'page-seo.open-graph': PageSeoOpenGraph;
      'page-seo.open-graph-images': PageSeoOpenGraphImages;
      'page-seo.seo': PageSeoSeo;
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
