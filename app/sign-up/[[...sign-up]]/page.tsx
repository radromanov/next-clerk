import { SignUp } from "@clerk/nextjs";
import { CenterItems } from "@/collections";

const SignUpPage = () => {
  return (
    <CenterItems>
      <SignUp />
    </CenterItems>
  );
};

export default SignUpPage;
