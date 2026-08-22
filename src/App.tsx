import React, { useState } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { MegaMenuHeader } from './components/MegaMenuHeader';
import { HeroSection } from './components/HeroSection';
import { PartnersLogoStrip } from './components/PartnersLogoStrip';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhatMakesUsDifferent } from './components/WhatMakesUsDifferent';
import { RegisterConfidenceCTA } from './components/RegisterConfidenceCTA';
import { WorkingProcessSection } from './components/WorkingProcessSection';
import { SpecialOffersUpdatesDueDates } from './components/SpecialOffersUpdatesDueDates';
import { WhyLPIAlternatingRows } from './components/WhyLPIAlternatingRows';
import { AIComplianceDetailedSection } from './components/AIComplianceDetailedSection';
import { GlobalBrandsLogoStrip } from './components/GlobalBrandsLogoStrip';
import { WhyChooseUsGrid } from './components/WhyChooseUsGrid';
import { StatsCounterSection } from './components/StatsCounterSection';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { ContactAndMultiStepLeadForm } from './components/ContactAndMultiStepLeadForm';
import { MobileAppPromotionBanner } from './components/MobileAppPromotionBanner';
import { BlogSection } from './components/BlogSection';
import { FooterSection } from './components/FooterSection';
import { FloatingElements } from './components/FloatingElements';

import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BrochureDownloadModal } from './components/BrochureDownloadModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { QuickSearchModal } from './components/QuickSearchModal';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState<boolean>(false);
  const [isQuickSearchOpen, setIsQuickSearchOpen] = useState<boolean>(false);

  // Scroll to lead form on consultation trigger
  const handleOpenConsultation = () => {
    const el = document.getElementById('contact-and-lead-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForModal(serviceName);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#0B3D91] selection:text-white flex flex-col w-full max-w-full overflow-x-hidden relative">
      
      {/* 1. Top Utility Bar */}
      <TopUtilityBar 
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenLogin={() => setIsClientPortalOpen(true)}
      />

      {/* 2. Mega Menu Header */}
      <MegaMenuHeader 
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenLogin={() => setIsClientPortalOpen(true)}
        onOpenConsultation={handleOpenConsultation}
        onSelectService={handleSelectService}
        onOpenSearch={() => setIsQuickSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 3. Hero Section with Carousel & Quick Form */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. Partners & Government Integrations Logo Strip */}
        <PartnersLogoStrip />

        {/* 5. Tabbed Services Showcase with Search and Image Swaps */}
        <ServicesShowcase 
          onSelectService={handleSelectService}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 6. What Makes Us Different (4 sub-blocks + visual composite) */}
        <WhatMakesUsDifferent />

        {/* 7. Register With Confidence CTA Banner */}
        <RegisterConfidenceCTA onOpenConsultation={handleOpenConsultation} />

        {/* 8. Our Working Progress (4-step horizontal process) */}
        <WorkingProcessSection />

        {/* 9. Special Offers, Live Updates & Due Dates (3 columns) */}
        <SpecialOffersUpdatesDueDates 
          onOpenConsultation={handleOpenConsultation}
          onSelectService={handleSelectService}
        />

        {/* 10. Why LPI Feature Highlights (4 alternating rows) */}
        <WhyLPIAlternatingRows onOpenConsultation={handleOpenConsultation} />

        {/* 11. Simplifying Compliance Through AI (Detailed Section) */}
        <AIComplianceDetailedSection />

        {/* 12. Global Brands Logo Strip */}
        <GlobalBrandsLogoStrip />

        {/* 13. Why Choose Us (6-card icon grid) */}
        <WhyChooseUsGrid />

        {/* 14. Stats Counter Section (Animated count-up) */}
        <StatsCounterSection />

        {/* 15. Verified Customer Reviews & Badges */}
        <CustomerReviewsSection />

        {/* 16. Contact Info + 4-Step Lead Onboarding Wizard */}
        <ContactAndMultiStepLeadForm />

        {/* 17. Mobile App Promotion Banner */}
        <MobileAppPromotionBanner />

        {/* 18. Blog Section with 12+ Articles & Modal Reader */}
        <BlogSection onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 19. Full Footer */}
      <FooterSection 
        onSelectService={handleSelectService}
        onOpenConsultation={handleOpenConsultation}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* 20. Floating Action Widgets (WhatsApp, Call, Scroll Top, AI Bot) */}
      <FloatingElements onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Popover Modals */}
      {/* Service Detail Modal */}
      <ServiceDetailModal 
        serviceName={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Corporate Brochure Download Modal */}
      <BrochureDownloadModal 
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Client Portal & Order Tracker Modal */}
      <ClientPortalModal 
        isOpen={isClientPortalOpen}
        onClose={() => setIsClientPortalOpen(false)}
      />

      {/* Global Quick Search Modal */}
      <QuickSearchModal 
        isOpen={isQuickSearchOpen}
        onClose={() => setIsQuickSearchOpen(false)}
        onSelectService={handleSelectService}
      />

    </div>
  );
}
