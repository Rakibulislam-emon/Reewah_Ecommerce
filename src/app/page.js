import CategoriesSection from "@/components/category/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/Newslater";


export default function HomePage() {
  
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      {/* <NewsletterSignup/> */}
      <NewsletterSignup />
    </div>
  );
}
