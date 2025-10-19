import Image from "next/image";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ScreenshotFrame({ src, alt, caption }: ScreenshotFrameProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border bg-muted/50 shadow-xl">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {caption && (
        <p className="text-center text-sm text-muted-foreground">{caption}</p>
      )}
    </div>
  );
}