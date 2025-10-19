import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://streamlyne.in'

export const defaultMetadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Streamlyne - Your Creative Hub for Content Creation',
        template: '%s | Streamlyne',
    },
    description:
        'Stop juggling Google Drive, Notion, and Obsidian. Streamlyne is the all-in-one creative workspace for YouTubers, bloggers, and content creators. Store assets, write notes, manage ideas, and plan content - all in one place.',
    keywords: [
        'content creation tool',
        'youtube content planning',
        'blogger workspace',
        'content creator hub',
        'video content management',
        'creative asset storage',
        'content planning tool',
        'note taking for creators',
        'video ideas organizer',
        'blog post planner',
        'content calendar',
        'creative workflow',
        'google drive alternative',
        'notion alternative for creators',
        'obsidian for content creators',
        'thumbnail storage',
        'content research tool',
        'social media content planner',
        'youtube workflow tool',
        'blogger organization tool',
    ],
    authors: [{ name: 'Priyak Dey', url: 'https://priyakdey.com' }],
    creator: 'Priyak Dey',
    publisher: 'Priyak Dey',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: baseUrl,
        title: 'Streamlyne - Your Creative Hub for Content Creation',
        description:
            'All-in-one workspace for YouTubers, bloggers, and content creators. Store assets, write notes, manage ideas, and plan content without switching between tools.',
        siteName: 'Streamlyne',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Streamlyne - Creative Hub for Content Creators',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Streamlyne - Your Creative Hub for Content Creation',
        description:
            'All-in-one workspace for YouTubers, bloggers, and content creators. Store assets, manage ideas, and plan content in one place.',
        creator: '@DeyPriyak',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: baseUrl,
    },
}

export function generatePageMetadata({
    title,
    description,
    path = '',
}: {
    title: string
    description: string
    path?: string
}): Metadata {
    const url = `${baseUrl}${path}`
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            siteName: 'Streamlyne',
            images: ['/og-image.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            creator: '@DeyPriyak',
            images: ['/og-image.png'],
        },
        alternates: {
            canonical: url,
        },
    }
}
