import Link from 'next/link'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Home, FileQuestion } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center py-20">
            <Container>
                <div className="mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                            <FileQuestion className="h-12 w-12 text-primary" />
                        </div>
                    </div>
                    <div className="mb-4 text-6xl font-bold text-primary">404</div>
                    <SectionHeading className="mb-6">Page Not Found</SectionHeading>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        The page you're looking for doesn't exist or has been moved.
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
