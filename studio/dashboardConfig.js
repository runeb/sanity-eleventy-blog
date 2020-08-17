export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f3ab4f31c84897cc7face4e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-svnd31pi',
                  apiId: '5e2662c6-6597-409f-a00d-42fac2e9b67f'
                },
                {
                  buildHookId: '5f3ab4f31c8489762dface84',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-puro86vb',
                  apiId: '77c60c58-a760-442d-9260-d00e7d95c598'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-puro86vb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
