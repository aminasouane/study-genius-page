import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "باقة الطالب",
    icon: Zap,
    price: "2000",
    duration: "5 ساعات",
    bonus: "+30 دقيقة هدية",
    features: [
      "تلخيص 5 ساعات من المحاضرات",
      "مكافأة 30 دقيقة إضافية",
      "دعم فني أساسي",
      "حفظ الملخصات لمدة شهر"
    ],
    popular: false,
    gradient: "from-primary/10 to-primary-light/20"
  },
  {
    name: "باقة المراجعة",
    icon: Star,
    price: "3500",
    duration: "10 ساعات", 
    bonus: "+ساعة هدية",
    features: [
      "تلخيص 10 ساعات من المحاضرات",
      "مكافأة ساعة كاملة إضافية",
      "دعم فني متقدم",
      "حفظ الملخصات لمدة 3 أشهر",
      "أولوية في المعالجة",
      "تصدير PDF للملخصات"
    ],
    popular: true,
    gradient: "from-primary to-primary-dark"
  },
  {
    name: "باقة الامتياز",
    icon: Crown,
    price: "6000",
    duration: "20 ساعة",
    bonus: "+ساعتين هدية", 
    features: [
      "تلخيص 20 ساعة من المحاضرات",
      "مكافأة ساعتين إضافيتين",
      "دعم فني VIP على مدار الساعة",
      "حفظ الملخصات لمدة 6 أشهر",
      "أولوية قصوى في المعالجة",
      "تصدير متعدد الصيغ",
      "استشارة دراسية مجانية"
    ],
    popular: false,
    gradient: "from-primary-dark/10 to-primary/20"
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-secondary" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            اختر الباقة التي تناسبك
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            باقات مرنة ومناسبة لكل طالب – بدون التزامات طويلة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-card rounded-3xl shadow-soft hover:shadow-strong transition-all duration-300 border border-border ${
                plan.popular ? 'transform scale-105 border-primary shadow-strong' : 'hover:-translate-y-2'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    الأكثر طلباً ⭐
                  </div>
                </div>
              )}

              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl opacity-50`}></div>

              <div className="relative z-10 text-center space-y-6">
                {/* Icon and title */}
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                    <span className="text-lg text-muted-foreground font-normal mr-2">دج</span>
                  </div>
                  <div className="text-lg text-card-foreground font-semibold">
                    {plan.duration}
                  </div>
                  <div className="text-primary font-medium">
                    {plan.bonus}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 text-right">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? "cta" : "pricing"} 
                  size="lg" 
                  className="w-full"
                >
                  اشترك الآن
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex justify-center items-center gap-2 text-primary">
            <Check className="w-5 h-5" />
            <span className="font-semibold">الدفع آمن 100% - يمكنك الإلغاء في أي وقت</span>
          </div>
          <p className="text-muted-foreground">
            جميع الباقات تشمل ضمان استرداد المال خلال 7 أيام
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;