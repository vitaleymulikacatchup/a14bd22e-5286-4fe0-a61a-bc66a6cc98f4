"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  const navbarProps = {
    brand: "NovaLens",
    brandHref: "#hero",
    leftActionLabel: "Menu",
    rightActionLabel: "Contact",
    onLeftAction: () => console.log('Menu clicked'),
    onRightAction: () => console.log('Contact clicked'),
  };

  const heroProps = {
    title: "Explore The Future of Photography",
    subtitle: "Capturing stunning visuals with a modern twist.",
  };

  const aboutProps = {
    description: "At NovaLens Studio, we embrace the art of photography, focusing on innovative techniques to bring visuals to life while maintaining a connection with nature.",
  };

  const howToBuyProps = {
    title: "How to Book a Session",
    steps: [
      { title: "Choose a Package", description: "Select the photography package that suits your needs.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
      { title: "Set Your Date", description: "Contact us to set your preferred shooting date.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
      { title: "Capture Memories", description: "Enjoy a memorable photography experience!", image: "/images/placeholder3.avif", position: "right", isCenter: false },
    ],
  };

  const tokenProps = {
    title: "Key Features",
    description: "Here are some key highlights of our services:",
    tokenData: [
      { value: "High Quality", description: "We ensure top-notch photography utilizing advanced techniques." },
      { value: "Personalized Experience", description: "Each session is customized to fit your vision." },
      { value: "Timely Delivery", description: "Your beautiful photos will be delivered promptly!" },
    ],
  };

  const galleryProps = {
    items: [
      { title: "Forest Adventure", image: "/images/forest.jpg" },
      { title: "Urban Nights", image: "/images/placeholder1.avif" },
      { title: "Serene Landscapes", image: "/images/placeholder2.avif" },
      { title: "Captivating Portraits", image: "/images/placeholder3.avif" },
    ],
  };

  const footerProps = {
    logoSrc: "/images/logo.svg",
    logoWidth: 120,
    logoHeight: 60,
    columns: [
      { title: "Services", items: [{ label: "Photography Inquiry", onClick: () => console.log('Inquiry') }] },
      { title: "Follow Us", items: [{ label: "Instagram", onClick: () => console.log('Instagram') }] },
      { title: "Contact", items: [{ label: "Support", onClick: () => console.log('Support') }] },
    ],
    copyrightText: "© 2025 NovaLens Studio",
    onPrivacyClick: () => console.log('Privacy Policy Clicked'),
  };

  return (
    <>
      <NavbarBase {...navbarProps} />
      <BillboardHero {...heroProps} />
      <SplitAbout {...aboutProps} />
      <HowToBuy3D {...howToBuyProps} />
      <TextGridTokenomics {...tokenProps} />
      <BentoMediaGallery {...galleryProps} />
      <FooterBase {...footerProps} />
    </>
  );
}