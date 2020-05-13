export default {
  widgets: [
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
                  buildHookId: '5ebbfc17ebdb89edd2f6c3e1',
                  title: 'Sanity Studio',
                  name: 'nld-studio',
                  apiId: 'b2811549-3c0e-47c4-aa9f-8a656070ade4'
                },
                {
                  buildHookId: '5ebbfc17938b7b102837655a',
                  title: 'Blog Website',
                  name: 'nld-web',
                  apiId: '4735b4b1-8c27-46b5-9519-53397b396c37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/nld',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nld-web.netlify.app', category: 'apps'}
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
