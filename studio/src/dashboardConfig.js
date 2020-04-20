export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e9db8a65b6d1289dfaa4e26',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-22jogdos',
                  apiId: '4d4c9dfe-b51e-4898-ba8d-c4a80ac88a38'
                },
                {
                  buildHookId: '5e9db8a6b03fca69db9843aa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mxphqhtx',
                  apiId: '342bd7d9-ff39-4c9c-b2bf-ad0575ac45de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sidneijunior2004/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mxphqhtx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
