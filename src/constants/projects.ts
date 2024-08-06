import tailtools1 from '@/assets/projects/tailtools1.webp';
import tailtools2 from '@/assets/projects/tailtools2.webp';
import tailtools3 from '@/assets/projects/tailtools3.webp';
import tailtools4 from '@/assets/projects/tailtools4.webp';
import wavestify1 from '@/assets/projects/wavestify1.webp';
import wavestify2 from '@/assets/projects/wavestify2.webp';

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
    }
]