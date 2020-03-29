export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e80ee7df56a482ed069b643',
                  title: 'Sanity Studio',
                  name: 'bibic-sanity-studio',
                  apiId: 'bdb99c60-6130-461b-8d85-e486fb76736e'
                },
                {
                  buildHookId: '5e80ee7d0971c1f36aa887d2',
                  title: 'Landing pages Website',
                  name: 'bibic-sanity',
                  apiId: '818b4c94-7ecc-419c-b596-e26fb993ad78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/balazsorban44/bibic-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bibic-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
