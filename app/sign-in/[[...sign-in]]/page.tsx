import { SignIn } from "@clerk/nextjs";
import { CenterItems } from "@/collections/Wrappers";

const SignInPage = () => {
  return (
    <CenterItems>
      <SignIn />
    </CenterItems>
  );
};

export default SignInPage;
