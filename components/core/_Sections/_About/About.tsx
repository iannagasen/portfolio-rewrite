import BodyContainer from '@/components/ui/containers/BodyContainer'
import { cn } from '@/lib/utils'
import React, { FC } from 'react'

const SKILLS = {
  1: ["Java", "React", "Spring", "Spring Boot",],
  2: ["JavaScript", "TypeScript", "CSS",],
  3: ["BootStrap", "Git", "GitHub", ],
  4: ["Amazon Web Services",],
  5: ["Microservices",],
  6: ["RestAPI", "SQL",],
  7: ["HTML", "Python", "C",],
  8: ["Restful Web Services",],
  9: ["jQuery", "Maven", "PL/SQL"],
}

const About:FC = () => {
  return (
    <BodyContainer className='flex'>
      <section className='flex-[3_1_0%]'>
        <header className='text-[3rem] font-black'>
          Get to know me
        </header>
        <p className='mt-4 text-[1.3rem]'>
          I'm a Full Stack Web Developer in the Philippines building the Back and
          Front-end of Websites and Web Applications that leads to the success of
          the overall product.
        </p>
        <p className='mt-4 text-[1.3rem]'>
          Problem-solver, analytical thinker and a well-organized developer who
          likes to play chess keme keme
        </p>
        <p className='mt-4 text-[1.3rem]'>
          I'm open to job and freelance opportunites where I can contribute, learn
          and grow. If you have a good opportunity that matches my skills and
          experience then don't hesitate to contact me.
        </p>
        <p className='mt-4 text-[1.3rem]'>
          Let's build something!
        </p>
      </section>

      {/* SKILLS */}
      <div className='flex-[4_1_0%] flex items-center'>
        {/* SKILL TAGS */}
        <div className=''>
          {Object.values(SKILLS).map((skillsLine, i) => (
            <div key={i} className='flex flex-row gap-1 mt-[0.4rem]'>
              {skillsLine.map((skill, i) => (
                <div key={i} className={cn(
                  'border-[0.1em] rounded-xl p-1',
                  randomColorStyleClass()
                )}>
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </BodyContainer>
  )
}

const randomColorStyleClass = () => {
  const randomNo = 1 + Math.floor(Math.random() * 3);
  switch (randomNo) {
    case 1: return 'bg-[#dd290dd7]';
    case 2: return 'bg-[#e38f1ad3]';
    case 3: return 'bg-[#d14b1fe7]';
  }
  return "";
}

export default About
