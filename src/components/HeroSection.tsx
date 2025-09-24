import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";
import heroPhoneImage from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-light to-background flex items-center py-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                تجربة مجانية لمدة 5 دقائق
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                ادرس بذكاء،{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-primary-dark bg-clip-text">
                  مش بجهد
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                جرّب 5 دقائق تلخيص مجانية واكتشف كيف يمكن للذكاء الاصطناعي أن يوفر وقتك ويحسن درجاتك
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="px-8 py-4">
                <Play className="w-5 h-5 ml-2" />
                ابدأ تجربتك المجانية الآن
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-4">
                شاهد كيف يعمل
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">+10,000</div>
                <div className="text-sm text-muted-foreground">طالب نشط</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">نسبة رضا</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8/5</div>
                <div className="text-sm text-muted-foreground">تقييم التطبيق</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-full blur-3xl transform scale-150"></div>
              
              {/* Phone image */}
              <img 
                src={heroPhoneImage} 
                alt="واجهة تطبيق التلخيص الذكي"
                className="relative z-10 max-w-sm md:max-w-md lg:max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating elements */}
              <div className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-3 text-xs animate-pulse">
                <div className="text-primary font-semibold">✨ تم التلخيص!</div>
                <div className="text-muted-foreground">وفرت 45 دقيقة</div>
              </div>
              
              <div className="absolute bottom-20 left-10 bg-white rounded-lg shadow-lg p-3 text-xs animate-pulse delay-1000">
                <div className="text-primary font-semibold">📚 محاضرة جديدة</div>
                <div className="text-muted-foreground">جاهزة للتلخيص</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;