import { DashboardArticle } from "@/components/Articles";
import { Subheading, Typography } from "@/components/Typography";
import userImage from "@/resources/defaultuserimage.png";
import Image, { StaticImageData } from "next/image";

const recentSales: {
  name: string;
  email: string;
  image: string | StaticImageData;
  amount: string;
}[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    image: userImage,
    amount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    image: userImage,
    amount: "+$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    image: userImage,
    amount: "+$299.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    image: userImage,
    amount: "+$99.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    image: userImage,
    amount: "+$39.00",
  },
];

export const DashboardSales = () => {
  return (
    <DashboardArticle className="w-full">
      <div className="h-14">
        <Subheading>Recent Sales</Subheading>
        <Typography className="text-sm text-muted-foreground">
          You made 265 sales this month.
        </Typography>
      </div>

      <ul className="h-full flex flex-col gap-4">
        {recentSales.map((user, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9">
                <Image
                  src={user.image}
                  alt="User image"
                  width={36}
                  height={36}
                  className="border border-muted-foreground rounded-full"
                />
              </div>

              <div>
                <Typography>{user.name}</Typography>
                <Typography className="text-sm text-muted-foreground">
                  {user.email}
                </Typography>
              </div>
            </div>

            <div>
              <Typography>{user.amount}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </DashboardArticle>
  );
};
