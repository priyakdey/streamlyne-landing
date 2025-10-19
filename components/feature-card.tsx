import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
                              icon: Icon,
                              title,
                              description
                            }: FeatureCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}