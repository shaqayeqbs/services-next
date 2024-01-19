import LanguageSelector from "../../src/components/auth/language-selector";
import { useRouter } from "next/router";

const LanguageSelectorPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    // Redirect to the next page after language selection
    // router.push("/auth/next-page");
  };

  return (
    <div className="">
      <LanguageSelector onGetStarted={handleGetStarted} />
    </div>
  );
};

export default LanguageSelectorPage;
