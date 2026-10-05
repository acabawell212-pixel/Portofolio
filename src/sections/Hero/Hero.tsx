import { ArrowDown, Compass, Sparkles, Star, Wind } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import {
  AmbientGlow,
  DecorativeLine,
  Frame,
  Ornament,
} from '../../components/visual'
import { profile } from '../../data/profile'

export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-12 overflow-hidden px-5 py-12 md:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-16">
      <div className="relative z-10">
        <Badge className="mb-7 border-amber-200/50 bg-amber-100/[0.11] text-amber-100 shadow-[0_0_30px_rgba(245,190,95,0.12)]">
          <Sparkles className="mr-2 h-3.5 w-3.5" />
          {profile.title}
        </Badge>

        <p className="mb-4 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.34em] text-sky-100/75">
          <DecorativeLine length={32} />
          <Wind className="h-4 w-4 text-sky-200" />
          YOUR NEXT ADVENTURE STARTS HERE
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-2xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#fffaf0] drop-shadow-[0_4px_30px_rgba(9,30,48,0.65)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          BUILDING
          <span className="mt-2 block bg-gradient-to-r from-[#ffe9ae] via-[#f5d58e] to-[#c4efff] bg-clip-text pb-2 text-transparent">
            WORLDS.
          </span>
        </motion.h1>

        <p className="mt-6 max-w-lg text-base leading-8 text-[#e2edf4] drop-shadow-[0_2px_12px_rgba(8,26,42,0.75)] md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/#projects">
            <Button variant="primary" size="lg">
              Explore My Work
            </Button>
          </Link>
          <Link to="/#about">
            <Button variant="secondary" size="lg">
              About Me
            </Button>
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.65rem] uppercase tracking-[0.2em] text-sky-100/85">
          <span className="inline-flex items-center gap-2">
            <Star className="h-3.5 w-3.5 text-amber-200" />
            Systems-driven
          </span>
          <span className="inline-flex items-center gap-2">
            <ArrowDown className="h-3.5 w-3.5 text-sky-200" />
            Interface-focused
          </span>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <AmbientGlow variant="gold" intensity="medium" size={300} position="50% 44%" />
        <Frame
          variant="inset"
          texture="paper"
          className="relative min-h-[400px] w-full max-w-[510px] overflow-hidden border border-sky-100/25 bg-[linear-gradient(145deg,rgba(42,67,91,0.68),rgba(18,33,54,0.82))] shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:min-h-[490px]"
        >
          <div className="hero-profile-content relative z-10 flex min-h-[400px] flex-col justify-between p-7 sm:min-h-[490px] sm:p-9">
            <div className="flex items-center justify-between">
              <Badge>
                <Compass className="mr-2 h-3.5 w-3.5 text-amber-100" />
                ADVENTURER PROFILE
              </Badge>
              <span className="text-xs tracking-[0.3em] text-amber-100/80">NO. 001</span>
            </div>

            <div className="relative mx-auto flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
              <Ornament variant="seal" position="center" size={170} opacity={0.38} className="hero-seal-depth" />
              <span className="relative z-10 font-serif text-4xl text-[#fff1c8] drop-shadow-[0_2px_16px_rgba(255,224,161,0.65)]">
                AL
              </span>
            </div>

            <div className="relative space-y-3">
              <div className="flex items-center gap-2 text-amber-100">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-2 text-[0.58rem] uppercase tracking-[0.2em] text-sky-50/75">WORLD BUILDER</span>
              </div>
              <h2 className="font-serif text-3xl text-white sm:text-4xl">{profile.name}</h2>
              <p className="max-w-sm text-sm leading-6 text-sky-50/75">
                Crafting playful worlds, memorable quests, and interfaces that feel alive.
              </p>
              <DecorativeLine className="!w-full" />
              <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.22em] text-sky-50/65">
                <span>{profile.location}</span>
                <span>Roblox · UI · Creative Tech</span>
              </div>
            </div>
          </div>
        </Frame>
      </div>
    </section>
  )
}
