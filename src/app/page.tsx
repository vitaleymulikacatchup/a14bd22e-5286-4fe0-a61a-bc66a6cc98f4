"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <>
      <NavbarBase 
        logoSrc="/images/logo.svg" 
        logoAlt="NovaLens Logo" 
        leftButtonText="Menu" 
        rightButtonText="Contact Us"
        onLeftButtonClick={() => {}} 
        onRightButtonClick={() => {}} 
        className="fixed top-0 left-0 right-0 z-50"
      />

      <BillboardHero 
        title="Discover Futuristic Photography" 
        subtitle="Capturing the essence of the unknown, one shot at a time." 
      />

      <TextboxStandard 
        title={<h1 className="text-3xl font-bold">About NovaLens Studio</h1>} 
        description={<p className="mt-4">We are dedicated to exploring and showcasing the beauty of futuristic photography. Join us on a journey through the lens.</p>} 
      />

      <HowToBuy3D 
        heading="How to Commission a Print" 
        items={[
          { title: "1. Select Your Photo", description: "Browse our collection and select your desired image.", image: "/images/placeholder1.avif" },
          { title: "2. Choose Your Format", description: "Decide how you’d like your print to be presented.", image: "/images/placeholder2.avif" },
          { title: "3. Place Your Order", description: "Fill out your details and enjoy the artwork!", image: "/images/placeholder3.avif" }
        ]} 
      />

      <TextGridTokenomics 
        title="Our Vision" 
        description="What drives us." 
        tokenData={[
          { value: "Innovation", description: "Constantly pushing the boundaries of creativity." },
          { value: "Quality", description: "Ensuring every piece meets our high standards." },
          { value: "Community", description: "Building a strong network of photography enthusiasts." }
        ]} 
      />

      <BentoMediaGallery 
        items={[
          { title: "Gallery Image 1", image: "/images/placeholder4.avif" },
          { title: "Gallery Image 2", image: "/images/placeholder5.avif" },
          { title: "Gallery Image 3", image: "/images/placeholder6.avif" },
          { title: "Gallery Image 4", image: "/images/placeholder7.avif" }
        ]} 
      />

      <FooterBase 
        logoSrc="/images/logo.svg" 
        logoAlt="NovaLens Logo" 
        columns={[{
          title: "Find Us",
          items: [
            { label: "Instagram", onClick: () => {} },
            { label: "Facebook", onClick: () => {} },
            { label: "Twitter", onClick: () => {} }
          ]
        }]} 
        copyrightText="© 2025 NovaLens. All rights reserved." 
        onPrivacyClick={() => {}} 
        className="bg-gray-800 text-white"
      />
    </>
  );
}