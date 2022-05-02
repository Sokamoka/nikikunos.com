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
    hero: {
      title: $md.render('Welcome to the **CAKE CLUB NFT 🎂** '),
      subtitle: $md.render(`Can you imagine any celebration without a cake?
        If not, you're in the right place.`),
      description: Content.HeroDescription,
      buttonText: 'Taste your Cake',
    },
    features: {
      value: {
        title: 'Value',
        subtitle: 'Treat yourself with a cake',
        description:
          $md.render(`We all have many fond memories of birthday cakes. Your grandmother baked you a sweet treat, your parents and
        friends sent you a customized masterpiece, your partner surprised you with your all time fav cake or playing
        in the kitchen and eating fondue with your family and children! These cakes always bring joy to a family's
        table. We would like to bring this **“everyday is a birthday spirit”** vibe to web3.`),
      },
      mission: {
        title: 'MY MISSION',
        subtitle: '“Lets celebrate with cake!“',
        description:
          $md.render(`Make each moment feel *special* with cake. Celebrate your little and big wins and remember how beautiful it
        is to love and be loved. Enjoy your life and smile!`),
      },
      utility: {
        title: 'Utility',
        subtitle: '"Sharing is caring" so, sharing a cake is double caring, right?',
        description: $md.render(
          `At **Cake Club NFT** we support women-led projects and amazing charity organizations . Check out the deets of the women-led projects we support: *“I carried a cake”* and which charity organizations we hold dearly in our hearts in *“Make a wish”*. Owning an *“Lets celebrate with cake”* means like icing the cake with all the basic and surprise utilities with extra sprinkles.`
        ),
      },
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
