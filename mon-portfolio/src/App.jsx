import './index.css'
import { Projectcard } from './components/project-card'
import { Aboutme } from './components/about-me'
import { Divider } from './components/divider/divider'
import { LinkButton } from './components/link-button/link-button'

function App() {

  return (
    <main className ="min-h-screen bg-background scroll-smooth py-12 sm:py-16 px-8 sm:px-20 md:px-32 lg:px-60 xl:px-80 2xl:px-[30rem] text-primary">
      <Aboutme/>
      <Divider className="my-7"/>

      <section className="flex gap-10 flex-col">
        <Projectcard 
          title="Profile Checker LeagueOfLegends"
          role="Développeur Fullstack"
          tasks={["Mettre en place les call API utilisant  "]}
          techs={["Javascript, HTML, CSS, APi RiotGames"]}
          type="ood"
          link="https://github.com/AntoineSiry/UGGLike"
        />

        <Projectcard 
          title="Yabuba"
          role="Développeur Gameplay"
          tasks={["test"]}
          techs={["C++, UnrealEngine, Blueprint"]}
          type="ended"
          link=""
        />

        <Projectcard 
          title="Discord bot roulette"
          role="Developpeur fullstack"
          tasks={["test"]}
          techs={["test"]}
          type="wip"
          link="https://github.com/AntoineSiry/discord-bot-roulette"
        />

        <Projectcard 
          title="Platform Mini-game"
          role="Developpeur Gameplay C++"
          tasks={["Concevoir, itérer et ajuster les mécaniques d’un jeu de plateforme." , "Participation active au sein d’une équipe agile et pluridisciplinaire pour assurer la qualité et la cohérence du projet principal. Responsable de l’intégration fluide du jeu de platforme dans l’environnement global.", "Réactivité face aux retours utilisateurs et aux indicateurs de performance, avec une approche itérative pour optimiser en continu le gameplay et les performances."]}
          techs={["C++, Blueprint, UnrealEngine"]}
          type="ood"
          link="https://github.com/AntoineSiry/HexaFall.git"
        />
      </section>
        <Divider className="my-7"/>

      <section className="flex flex-wrap gap-2">
        <LinkButton href="https://github.com/AntoineSiry" target="_blank">Github</LinkButton>
        <LinkButton href="https://www.linkedin.com/in/antoine-siry" target="_blank">Linkedin</LinkButton>
        <LinkButton href="mailto:antoine.siry@gmail.com">Email</LinkButton>
      </section>
    </main>
  )
}

export default App
