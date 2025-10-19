import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Construction, Home } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
    title: 'Privacy Policy',
    description: 'Privacy Policy for Streamlyne - Coming Soon',
    path: '/privacy',
})

export default function PrivacyPage() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center py-20">
            <Container>
                <div className="mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                            <Construction className="h-12 w-12 text-primary" />
                        </div>
                    </div>
                    <SectionHeading className="mb-6">Privacy Policy</SectionHeading>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        This page is currently under construction.
                    </p>
                    <p className="mt-4 text-base text-muted-foreground">
                        Our privacy policy will be available soon. We take your privacy seriously and are working on comprehensive documentation.
                    </p>
                    <div className="mt-8">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/" className="gap-2">
                                <Home className="h-5 w-5" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
