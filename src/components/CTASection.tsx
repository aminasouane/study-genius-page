import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              وفّر وقتك للمذاكرة…{" "}
              <span className="text-primary-light">مش للكتابة</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-primary-light/90 max-w-2xl mx-auto">
              ابدأ رحلتك الآن مع أول تطبيق عربي للتلخيص الذكي، وجرب 5 دقائق مجانية يوميًا بدون أي التزام.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-primary-light hover:text-primary-dark font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              data-testid="button-try-free"
            >
              <Sparkles className="w-6 h-6 ml-2" />
              جرّب مجانًا
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 transition-all duration-300"
              data-testid="button-choose-plan"
            >
              <Rocket className="w-5 h-5 mr-2" />
              اختر باقتك
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;