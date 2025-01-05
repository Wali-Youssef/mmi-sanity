import { defineArrayMember, defineField, defineType } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'Page d’accueil',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
    }),
    // Groupe de champs pour la partie hero banner
    defineField({
      type: 'object',
      name: 'hero',
      title: 'Bannière principale',
      fields: [
        { type: 'string', name: 'title', title: 'Titre' },
        { type: 'string', name: 'text', title: 'Texte' },
        {
          name: 'image',
          type: 'image',
          title: 'Image de la bannière',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'stats',
          type: 'array',
          title: 'Statistiques pour la bannière',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'stat',
              title: 'Statistique',
              fields: [
                { type: 'string', name: 'value', title: 'Valeur' },
                { type: 'string', name: 'text', title: 'Description' },
              ],
            }),
          ],
        },
      ],
    }),
    // Liste des fonctionnalités avec image
    defineField({
      name: 'features',
      title: 'Fonctionnalités',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          title: 'Fonctionnalité',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image de la fonctionnalité',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'text',
              type: 'string',
              title: 'Description de la fonctionnalité',
            },
          ],
        }),
      ],
    }),
    // Section Tarification
    defineField({
      name: 'pricing',
      title: 'Tarification',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'subscription',
          title: 'Abonnement',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: "Nom de l'abonnement",
            },
            {
              name: 'price',
              type: 'number',
              title: 'Prix (en USD)',
              validation: (Rule) => Rule.min(0),
            },
            {
              name: 'features',
              type: 'array',
              title: 'Fonctionnalités incluses',
              of: [
                defineArrayMember({
                  type: 'string',
                }),
              ],
            },
            {
              name: 'cta',
              type: 'string',
              title: 'Appel à l’action',
              description: 'Texte du bouton (par ex. "Souscrire maintenant").',
            },
          ],
        }),
      ],
    }),
    // Section Témoignages
    defineField({
      name: 'testimonials',
      title: 'Témoignages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonial',
          title: 'Témoignage',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Nom',
            },
            {
              name: 'role',
              type: 'string',
              title: 'Rôle ou position',
            },
            {
              name: 'text',
              type: 'text',
              title: 'Témoignage',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
    }),
  ],
});
