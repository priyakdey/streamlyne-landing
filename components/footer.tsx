import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">
          <div>
            <h3 className="mb-4 text-md font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-md text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-md text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-md font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://priyakdey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-muted-foreground hover:text-foreground"
                >
                  About Creator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-md font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-md text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-md text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-md font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/DeyPriyak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/priyakdey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@streamlyne.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 border-t pt-8 text-center text-md text-muted-foreground">
          © 2025{" "}
          <a
            href="https://priyakdey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-foreground/30 decoration-1 underline-offset-4 transition-all hover:decoration-foreground/80 hover:underline-offset-2"
          >
            Priyak Dey
          </a>
          . All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
