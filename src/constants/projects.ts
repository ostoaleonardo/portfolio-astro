import tailtools1 from '@/assets/projects/tailtools1.webp';
import tailtools2 from '@/assets/projects/tailtools2.webp';
import tailtools3 from '@/assets/projects/tailtools3.webp';
import tailtools4 from '@/assets/projects/tailtools4.webp';
import notes1 from '@/assets/projects/notes1.webp';
import notes2 from '@/assets/projects/notes2.webp';
import notes3 from '@/assets/projects/notes3.webp';

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
        github: 'https://github.com/ostoaleonardo/tailtools'
    },
    {
        title: 'Notes',
        type: 'Mobile app',
        description: 'An app to create notes with text, images and lists. Available on Google Play.',
        images: [
            notes1,
            notes2,
            notes3
        ],
        technologies: ['Expo', 'React Native', 'JavaScript'],
        demo: 'https://play.google.com/store/apps/details?id=com.monospace.notes',
        github: 'https://github.com/ostoaleonardo/notes'
    }
]