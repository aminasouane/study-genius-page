import { Clock, Brain, FolderOpen, Gift } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "وفّر وقتك",
    description: "تلخيص محاضرات طويلة في دقائق معدودة بدلاً من ساعات من الكتابة",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "ركز على الفهم",
    description: "اترك التلخيص على الذكاء الاصطناعي وركز على فهم المحتوى والاستعداد للامتحانات",
    color: "text-primary-dark"
  },
  {
    icon: FolderOpen,
    title: "نظم دراستك",
    description: "ملخصات جاهزة ومنظمة يمكنك الوصول إليها في أي وقت ومن أي مكان",
    color: "text-primary"
  },
  {
    icon: Gift,
    title: "تجربة مجانية",
    description: "جرب التطبيق مجاناً لمدة 5 دقائق حتى تتأكد بنفسك من جودة التلخيص",
    color: "text-primary-dark"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا تختار تطبيقنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف كيف يمكن لتطبيقنا أن يحول طريقة دراستك ويوفر وقتك الثمين
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light rounded-full text-primary-dark text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            ابدأ الآن واحصل على 5 دقائق مجانية
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;