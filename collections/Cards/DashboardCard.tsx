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
  content: string;
  footer: string;
}

export const DashboardCard = ({
  title,
  content,
  footer,
}: DashboardCardProps) => {
  return (
    <Card className="flex flex-col gap-2 py-5">
      <CardHeader className="py-0 font-normal text-sm">
        <CardTitle className="font-medium text-sm">{title}</CardTitle>
      </CardHeader>

      <div>
        <CardContent className="py-0 font-semibold text-2xl">
          <Typography width={200}>{content}</Typography>
        </CardContent>
        <CardFooter className="py-0 text-neutral-600 text-xs">
          <Typography width={200}>{footer}</Typography>
        </CardFooter>
      </div>
    </Card>
  );
};
