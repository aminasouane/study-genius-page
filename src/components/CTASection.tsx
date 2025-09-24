import { Button } from "@/components/ui/button";
import { Smartphone, Download, Sparkles, ArrowLeft } from "lucide-react";

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
            >
              <Sparkles className="w-6 h-6 ml-2" />
              جرّب مجانًا
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 transition-all duration-300"
            >
              اختر باقتك
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>

          {/* App Download Section */}
          <div className="pt-12 border-t border-white/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
              <Smartphone className="w-8 h-8" />
              حمّل التطبيق الآن
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-xl font-semibold"
              >
                <Download className="w-5 h-5 ml-2" />
                Google Play تحميل من
              </Button>
              
              <Button 
                variant="secondary" 
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-xl font-semibold"
              >
                <Download className="w-5 h-5 ml-2" />
                App Store تحميل من
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold">⚡</div>
                <div className="text-primary-light">تجربة فورية</div>
                <div className="text-sm text-primary-light/80">بدون تسجيل مطلوب</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold">🔒</div>
                <div className="text-primary-light">آمن ومضمون</div>
                <div className="text-sm text-primary-light/80">بياناتك محمية بالكامل</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold">💰</div>
                <div className="text-primary-light">ضمان الاسترداد</div>
                <div className="text-sm text-primary-light/80">خلال 7 أيام من الشراء</div>
              </div>
            </div>
          </div>

          {/* Final note */}
          <div className="pt-8 text-center">
            <p className="text-primary-light/80 text-lg">
              لا تضيع وقتك أكثر... ابدأ الآن وشوف الفرق من أول استخدام! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;