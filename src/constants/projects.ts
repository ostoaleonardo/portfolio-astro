import tailtools1 from '@/assets/projects/tailtools1.webp';
import tailtools2 from '@/assets/projects/tailtools2.webp';
import tailtools3 from '@/assets/projects/tailtools3.webp';
import tailtools4 from '@/assets/projects/tailtools4.webp';
import wavestify1 from '@/assets/projects/wavestify1.webp';
import wavestify2 from '@/assets/projects/wavestify2.webp';
import minecraft1 from '@/assets/projects/minecraft1.webp';
import minecraft2 from '@/assets/projects/minecraft2.webp';
import minecraft3 from '@/assets/projects/minecraft3.webp';

export const PROJECTS = [
    {
        title: 'Tailtools',
        type: 'Web app',
        description: 'A collection of tools to generate code for Tailwind CSS.',
        images: [
            tailtools1,
            tailtools2,
            tailtools3,
            tailtools4
        ],
        technologies: ['React', 'TypeScript', 'Tailwind', 'NextUI'],
        demo: 'https://tailtools.app/',
        github: 'https://github.com/ostoaleonardo/tailtools',
    },
    {
        title: 'Wavestify',
        type: 'Web app',
        description: 'A web app that shows your Spotify stats.',
        images: [
            wavestify1,
            wavestify2
        ],
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind'],
        demo: 'https://wavestify.vercel.app/',
        github: 'https://github.com/ostoaleonardo/spotify-stats',
    },
    {
        title: 'Minecraft Three.js',
        type: 'Web app',
        description: 'Based on the game Minecraft, this web app allows you to create a world with blocks and move around it.',
        technologies: ['React', 'JavaScript', 'Three.js', 'Tailwind'],
        images: [
            minecraft1,
            minecraft2,
            minecraft3
        ],
        demo: 'https://minecraft-three-js.vercel.app/',
        github: 'https://github.com/ostoaleonardo/minecraft-three-js',
    }
]