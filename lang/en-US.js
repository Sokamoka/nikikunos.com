import * as Content from './contents/index.en-US'

export default async ({ $md }) => {
  return await Promise.resolve({
    menu: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      roadmap: 'Road Map',
      upcomming: 'Upcoming',
      contact: 'Contact',
    },
    hero: {
      title: $md.render('Welcome to the **CAKE CLUB NFT 🎂**'),
      subtitle: $md.render(`Can you imagine any celebration without a cake?
        If not, you're in the right place.`),
      description: Content.HeroDescription,
      buttonText: 'Taste your Cake',
    },
    profile: {
      content2: $md.render(Content.Profile),
      content: $md.render(`## About me {data-st-class=animate-fade-in-left}
My name is **Niki S. Kunos** and I am a cake decorator in IRL. In the last 10 years my cakes proud to be featured on [Huffington Post Wedding](https://www.huffpost.com/entry/geode-wedding-cakes-totally-rock_n_5780054ae4b0c590f7e95d76), [Ruffled Blog](https://ruffledblog.com/hungarian-chapel-elopement-editorial/), [The Modern Wedding Magazine (20th-anniversary edition)](https://www.modernwedding.com.au/modern-wedding-cakes-styling-20th-anniversary-edition/), **Insyle Magazine**, [Glamour Mag](https://www.glamour.hu/g-eletstilus/meztelen-tortak-eheto-arannyal/k55n9nv) and I was finalist **“Decorator of the Year!”** on **Australian Cake Decorating Network** (2014) but most importantly, I have been able to feed over 10,000 happy people with my creations.{data-st-class="animate__animated animate__fadeInUp animate__delay-1s animate__faster"}

Here in WEB3, it is amazing that i could combine cake decorating with my other passion, illustration. {data-st-class="animate__animated animate__fadeInUp animate__delay-2s animate__faster"}

**Niki S. Kunos** {.mb-0 data-st-class="animate__animated animate__fadeInUp animate__delay-3s animate__faster" }

Artist/Founder {data-st-class="animate__animated animate__fadeInUp animate__delay-4s animate__faster"}
      `),
    },
    features: {
      value: {
        title: 'Value',
        subtitle: 'Treat yourself with a cake',
        description: $md.render(
          `We all have many fond memories of birthday cakes. Your grandmother baked you a sweet treat, your parents and friends sent you a customized masterpiece, your partner surprised you with your all time fav cake or playing in the kitchen and eating fondue with your family and children! These cakes always bring joy to a family's table. We would like to bring this **“everyday is a birthday spirit”** vibe to web3.`
        ),
      },
      mission: {
        title: 'MY MISSION',
        subtitle: '“Lets celebrate with cake!“',
        description: $md.render(
          `Make each moment feel *special* with cake. Celebrate your little and big wins and remember how beautiful it is to love and be loved. Enjoy your life and smile!`
        ),
      },
      utility: {
        title: 'Utility',
        subtitle: '"Sharing is caring" so, sharing a cake is double caring, right?',
        description: $md.render(
          `At **Cake Club NFT** we are planning to support women-led projects and amazing charity organizations .
          Owning a piece of the “Lets celebrate with cake” collection means like icing on the cake with all the basic and surprise utilities with extra sprinkles.
          `
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
