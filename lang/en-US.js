import * as Content from './contents/index.en-US'

export default async ({ $md }) => {
  return await Promise.resolve({
    menu: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      roadmap: 'Road Map',
      upcomming: 'Upcomming',
      contact: 'Contact',
    },
    roadMap: {
      title: {
        title: 'Road Map',
        subtitle: 'Pre-mint: Founding Cake Lovers',
        description: Content.RoadmapTitleDescription,
      },
      letsCelebrate: {
        title: '"Lets celebrate with cake"',
        content: Content.LetsCelebrate,
      },
      sayItWithCake: {
        title: '"Say it with cake"',
        content: Content.SayItWithCake,
      },
      membersClub: Content.MembersClub,
    },
  })
}
