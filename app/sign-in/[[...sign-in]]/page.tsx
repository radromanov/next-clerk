import { SignIn } from "@clerk/nextjs";
import { CenterItems } from "@/components/Wrappers";

const SignInPage = () => {
  return (
    <CenterItems>
      <SignIn />
    </CenterItems>
  );
};

export default SignInPage;
