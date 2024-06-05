import { Typography } from "@/components/Typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  footer: string;
}

export const DashboardCard = ({
  title,
  icon,
  content,
  footer,
}: DashboardCardProps) => {
  return (
    <article>
      <Card className="flex flex-col gap-1 py-5">
        <CardHeader className="flex flex-row space-y-0 justify-between items-center py-1">
          <CardTitle className="font-medium text-sm desktop-md:text-lg desktop-lg:text-xl">
            {title}
          </CardTitle>
          {icon}
        </CardHeader>

        <div>
          <CardContent className="py-0 font-semibold text-2xl desktop-md:text-3xl desktop-lg:text-4xl">
            <Typography>{content}</Typography>
          </CardContent>
          <CardFooter className="py-0 text-muted-foreground text-xs desktop-md:text-lg desktop-lg:text-xl">
            <Typography>{footer}</Typography>
          </CardFooter>
        </div>
      </Card>
    </article>
  );
};
