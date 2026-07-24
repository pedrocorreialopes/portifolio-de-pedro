import React, { useState } from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketplaceSection } from './components/MarketplaceSection';
import { AboutSection } from './components/AboutSection';
import { StackSection } from './components/StackSection';
import { StatsSection } from './components/StatsSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { BudgetEstimatorModal } from './components/BudgetEstimatorModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [budgetProjectTitle, setBudgetProjectTitle] = useState<string>('');
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleOpenBudgetModalWithProject = (projectTitle: string) => {
    setBudgetProjectTitle(projectTitle);
    setIsBudgetModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-sky-500 selection:text-black relative overflow-x-hidden">
      {/* Background canvas particles & ambient lighting */}
      <ParticlesBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenBudgetModal={() => {
          setBudgetProjectTitle('');
          setIsBudgetModalOpen(true);
        }}
        onOpenAiDrawer={() => setIsAiDrawerOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero
          onOpenBudgetModal={() => {
            setBudgetProjectTitle('');
            setIsBudgetModalOpen(true);
          }}
          onOpenAiDrawer={() => setIsAiDrawerOpen(true)}
        />

        <MarketplaceSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenBudgetModalWithProject={handleOpenBudgetModalWithProject}
        />

        <AboutSection />

        <StackSection />

        <StatsSection />

        <GallerySection
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <TestimonialsSection />

        <BlogSection />

        <FAQSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBudgetModalWithProject={handleOpenBudgetModalWithProject}
      />

      <BudgetEstimatorModal
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
        preselectedProjectTitle={budgetProjectTitle}
      />

      <AiAssistantDrawer
        isOpen={isAiDrawerOpen}
        onClose={() => setIsAiDrawerOpen(false)}
      />
    </div>
  );
}
