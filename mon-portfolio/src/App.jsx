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
          title="Profile Checker League Of Legends - Projet personnel"
          role="Développeur Fullstack"
          tasks={["Création d’un projet Javascript permettant de voir son profil du jeu League Of Legends.",
            "Mise en place d’un serveur proxy (Express.js)",
            "Prise en main de l'Api RiotGames. Récupération et traitement des données fournies via celle-ci.",
            "Création du CSS et HTML nécessaire pour l’affichage et la mise en forme du profil de l’utilisateur recherché."]}
          techs={["Javascript, HTML, CSS, APi RiotGames"]}
          type="ended"
          link="https://github.com/AntoineSiry/UGGLike"
        />

        <Projectcard 
          title="Yabuba - Projet de fin d'année Bachelor"
          role="Développeur Gameplay"
          tasks={["Responsable de toute la logique de gestion des inventaires, consommables,items. Mise en place de cette logique en C++ pour une utilisation en jeu.", 
            "Mise en relation des systèmes listés au préalable ainsi que du système de dialogues créé par l’équipe",
            "Création d’un système d’occlusion permettant au joueur de voir à travers les éléments de décors si nécessaire", 
            "Constante recherche d’optimisation des performances ainsi que de la fluidité du gameplay."]}
          techs={["C++, UnrealEngine, Blueprint"]}
          type="ended"
          link=""
        />

        {/* <Projectcard 
          title="Discord bot roulette"
          role="Developpeur fullstack"
          tasks={["test"]}
          techs={["test"]}
          type="wip"
          link="https://github.com/AntoineSiry/discord-bot-roulette"
        /> */}

        <Projectcard 
          title="Platform Mini-game - Projet Auto-Entrepreneur"
          role="Developpeur Gameplay C++"
          tasks={["Concevoir, itérer et ajuster les mécaniques d’un jeu de plateforme." , "Participation active au sein d’une équipe agile et pluridisciplinaire pour assurer la qualité et la cohérence du projet principal. Responsable de l’intégration fluide du jeu de platforme dans l’environnement global.", "Réactivité face aux retours utilisateurs et aux indicateurs de performance, avec une approche itérative pour optimiser en continu le gameplay et les performances."]}
          techs={["C++, Blueprint, UnrealEngine"]}
          type="ended"
          link="https://github.com/AntoineSiry/HexaFall.git"
        />

        <Projectcard 
          title="Megalopolis Video Game - Projet d'étude"
          role="Developpeur Gameplay C++"
          tasks={["Conception du jeu Megalopolis en C++ sur UnrealEngine." , "Creation du jeu de base et implémentation de certaines règles du jeu.", "Utilisations de certains design pattern comme Strategy pour implémenter les différentes règles des cartes."]}
          techs={["C++, Blueprint, UnrealEngine"]}
          type="ended"
          link="https://github.com/AntoineSiry/MegaloFuturae.git"
        />

        <Projectcard 
          title="Stage BTS - LMB (Association sportive Le Mans Badminton)"
          role="Developpeur JAVA/Android"
          tasks={["Chargé de l’aspect sécurité d’un programme permettant aux adhérents du club de l’année en cours, d’ouvrir un portail de parking à distance.",
            "Appréhender et comprendre un programme déjà existant", 
            "Traiter depuis une base de données les informations nécessaires à la vérification de la bonne adhésion de la personne qui demande l’ouverture du portail."]}
          techs={["Java, Api GooleContacts, QtCreator, SQL"]}
          type="ended"
          link=""
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
