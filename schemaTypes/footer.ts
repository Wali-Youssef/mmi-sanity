import { defineType, defineField, defineArrayMember } from 'sanity';

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    // Section Nos Partenaires
    defineField({
      name: 'partners',
      title: 'Nos partenaires',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'partner',
          title: 'Partenaire',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nom du partenaire',
            },
            {
              name: 'logo',
              type: 'image',
              title: 'Logo du partenaire',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'link',
              type: 'url',
              title: 'Lien vers le site du partenaire',
            },
          ],
        }),
      ],
    }),

    // Section Réseaux Sociaux
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          title: 'Lien Réseau Social',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nom du réseau social',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL du réseau social',
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Icône du réseau social',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
    }),

    // Section Contact
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {
          name: 'email',
          type: 'string',
          title: 'Email de contact',
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Numéro de téléphone',
        },
        {
          name: 'address',
          type: 'string',
          title: 'Adresse',
        },
      ],
    }),

    // Section À propos
    defineField({
      name: 'about',
      title: 'À propos',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'text',
          title: 'Texte à propos',
        },
      ],
    }),
  ],
});
