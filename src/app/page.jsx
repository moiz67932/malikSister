import CraftingSpaces from "@/components/card";
import ContactForm from "@/components/contactForm";
import ConsultUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AlternatingProjects from "@/components/projects";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <CraftingSpaces />
      <AlternatingProjects />
      <ConsultUs />
      <ContactForm />
      <Footer />
    </div>
  );
}
