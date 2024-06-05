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
    <DashboardArticle className="w-full px-4">
      <div className="h-14">
        <Subheading className="desktop-md:text-xl desktop-lg:text-2xl">
          Recent Sales
        </Subheading>
        <Typography className="w-[222px] text-sm text-muted-foreground desktop-md:text-lg desktop-md:w-full desktop-lg:text-xl">
          You made 265 sales this month.
        </Typography>
      </div>

      <ul className="h-full flex flex-col gap-4">
        {recentSales.map((user, i) => (
          <li key={i} className="flex items-center gap-2 w-full">
            <Image
              src={user.image}
              alt="User image"
              className="border border-muted-foreground rounded-full w-8 h-8 laptop-sm:w-9 laptop-sm:h-9 desktop-md:w-11 desktop-md:h-11"
            />

            <div className="flex items-center justify-between w-full h-full">
              <div className="flex-col w-full">
                <Typography className="w-28 tablet-sm:w-full tablet-md:w-48 desktop-md:text-lg desktop-md:w-full desktop-lg:text-xl">
                  {user.name}
                </Typography>
                <Typography className="w-28 text-sm text-muted-foreground tablet-sm:w-full tablet-md:w-48 desktop-md:text-lg desktop-md:w-full desktop-lg:text-xl">
                  {user.email}
                </Typography>
              </div>

              <Typography className="text-clip text-xs text-end tablet-sm:text-sm desktop-md:text-lg desktop-lg:text-xl">
                {user.amount}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </DashboardArticle>
  );
};
