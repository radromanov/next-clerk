import { Subheading } from "@/components/Typography";

export const DashboardSales = () => {
  return (
    <section className="flex flex-grow flex-col gap-5 border border-neutral-300 shadow rounded-md px-6 py-4">
      <div>
        <Subheading>Recent Sales</Subheading>
        <p className="text-sm text-muted-foreground">
          <span>You made 265 sales this month.</span>
        </p>
      </div>
    </section>
  );
};
