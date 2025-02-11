import type { Schema, Struct } from '@strapi/strapi';

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
      'faq.faq': FaqFaq;
      'social-links.social-links': SocialLinksSocialLinks;
    }
  }
}
