import { useState } from "react";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PhotoUploader } from "@/components/PhotoUploader";
import { FrameEditor } from "@/components/FrameEditor";

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [showUploader, setShowUploader] = useState(false);

  const handleGetStarted = () => {
    setShowUploader(true);
    // Scroll to uploader section
    setTimeout(() => {
      document.getElementById("uploader")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handlePhotoSelect = (file: File) => {
    setSelectedPhoto(file);
  };

  const handleBack = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      
      {!selectedPhoto && <HowItWorks />}
      
      <section id="uploader" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          {selectedPhoto ? (
            <FrameEditor photoFile={selectedPhoto} onBack={handleBack} />
          ) : (
            showUploader && <PhotoUploader onPhotoSelect={handlePhotoSelect} />
          )}
        </div>
      </section>
      
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Campaign. Together we make a difference.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
