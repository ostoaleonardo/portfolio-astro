import tailtools1 from '@/assets/projects/tailtools1.webp';
import tailtools2 from '@/assets/projects/tailtools2.webp';
import tailtools3 from '@/assets/projects/tailtools3.webp';
import tailtools4 from '@/assets/projects/tailtools4.webp';
import wavestify1 from '@/assets/projects/wavestify1.webp';
import wavestify2 from '@/assets/projects/wavestify2.webp';
import store1 from '@/assets/projects/store1.webp';
import store2 from '@/assets/projects/store2.webp';
import store3 from '@/assets/projects/store3.webp';
import movies1 from '@/assets/projects/movies1.webp';
import movies2 from '@/assets/projects/movies2.webp';
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
            tailtools4,
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
            wavestify2,
        ],
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind'],
        demo: 'https://wavestify.vercel.app/',
        github: 'https://github.com/ostoaleonardo/spotify-stats',
    },
    {
        title: 'E-commerce',
        type: 'Web app',
        description: 'A web app that simulates an e-commerce store, where you can add products to the cart and make a purchase.',
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind'],
        images: [
            store1,
            store2,
            store3,
        ],
        demo: 'https://storecommerce.vercel.app/',
        github: 'https://github.com/ostoaleonardo/store-e-commerce',
    },
    {
        title: 'Movies Stats',
        type: 'Web app',
        description: 'A web app that shows movies stats, like the most popular movies, the best rated, etc.',
        technologies: ['React', 'JavaScript', 'NextUI', 'Tailwind'],
        images: [
            movies1,
            movies2,
        ],
        demo: 'https://movies-stats.vercel.app/',
        github: 'https://github.com/ostoaleonardo/movies-stats',
    },
    {
        title: 'Minecraft Three.js',
        type: 'Web app',
        description: 'Based on the game Minecraft, this web app allows you to create a world with blocks and move around it.',
        technologies: ['React', 'JavaScript', 'Three.js', 'Tailwind'],
        images: [
            minecraft1,
            minecraft2,
            minecraft3,
        ],
        demo: 'https://minecraft-three-js.vercel.app/',
        github: 'https://github.com/ostoaleonardo/minecraft-three-js',
    },
]