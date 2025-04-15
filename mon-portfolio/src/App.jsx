import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Projectcard } from './components/components'
import { Aboutme } from './components/components'
import { Divider } from './components/divider/divider'
import { LinkButton } from './components/link-button/link-button'
import { cn } from './utils/style'

function App() {

  return (
    <main className ="min-h-screen bg-background scroll-smooth py-12 sm:py-16 px-8 sm:px-20 md:px-32 lg:px-60 xl:px-80 2xl:px-[30rem] text-primary">
            <Aboutme/>
            <Divider className="my-7"/>
          <section className="flex gap-10 flex-col">
            <Projectcard 
              title={"Profile Checker LeagueOfLegends"}
              role={"Développeur Fullstack"}
              tasks={["test"]}
              techs={["test"]}
              type={"ood"}
              link={"https://github.com/AntoineSiry/UGGLike"}
            />

            <Projectcard 
              title={"Yabuba"}
              role={"Développeur Fullstack"}
              tasks={["test"]}
              techs={["test"]}
              type={"ended"}
              link={"https://github.com/AntoineSiry/UGGLike"}
            />

            <Projectcard 
              title={"Discord bot roulette"}
              role={"Développeur Fullstack"}
              tasks={["test"]}
              techs={["test"]}
              type={"wip"}
              link={"https://github.com/AntoineSiry/UGGLike"}
            />
            </section>
            <Divider className="my-7"/>

            <section className="flex flex-wrap gap-2">
              <LinkButton href="https://github.com/AntoineSiry" target="_blank">Github</LinkButton>
              <LinkButton href="https://www.linkedin.com/in/antoine-siry" target="_blank">Linkedin</LinkButton>
              <LinkButton href="mailto:antoine.siry@gmail.com" target="_blank">Email</LinkButton>
            </section>
    </main>
  )
}

export default App
