export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61910735f11ca898fd03c1e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vovoyzo8',
                  apiId: '360acd36-0285-427a-87c5-a5916bef1ccd'
                },
                {
                  buildHookId: '61910734cd72daf8fe2c1f7c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yyzdqwyc',
                  apiId: '63d2ed5d-b722-4128-9a98-24b05b2d3032'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aniketicloud/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yyzdqwyc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
