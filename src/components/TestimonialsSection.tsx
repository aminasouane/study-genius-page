import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمد",
    role: "طالب طب - السنة الرابعة",
    content: "التطبيق وفر عليا ساعات من الكتابة والتلخيص. بدل ما أقعد 3 ساعات ألخص محاضرة، بقيت أخلصها في 10 دقائق والتلخيص أحسن من اللي كنت أكتبه بنفسي!",
    rating: 5,
    avatar: "👨‍⚕️"
  },
  {
    name: "فاطمة الزهراء",
    role: "طالبة هندسة - السنة الثالثة", 
    content: "كنت متشككة في البداية، بس لما جربت التطبيق، لقيت التلخيصات دقيقة وشاملة. ساعدني كتير في فترة الامتحانات وحسنت درجاتي.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "يوسف بن علي",
    role: "طالب اقتصاد - الماجستير",
    content: "أفضل استثمار عملته في مسيرتي الدراسية. التطبيق مش بس بيلخص، بيفهم السياق ويطلع النقاط المهمة. نصحت كل زملائي يجربوه.",
    rating: 5,
    avatar: "👨‍🎓"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول طلابنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آراء حقيقية من طلاب يستخدمون التطبيق في دراستهم اليومية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative p-8 bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After example */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            شاهد الفرق: قبل وبعد استخدام التطبيق
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
              <h4 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                😫 قبل استخدام التطبيق
              </h4>
              <ul className="space-y-2 text-red-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  3-4 ساعات لتلخيص محاضرة واحدة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  تفويت نقاط مهمة أثناء الكتابة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  إرهاق وضغط نفسي قبل الامتحانات
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  ملخصات غير منظمة وصعبة المراجعة
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="p-6 bg-primary-light/20 border border-primary-light rounded-2xl">
              <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                🎉 بعد استخدام التطبيق
              </h4>
              <ul className="space-y-2 text-primary-dark">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  10 دقائق فقط لتلخيص محاضرة كاملة
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  تلخيص شامل ودقيق بدون تفويت
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  وقت أكثر للفهم والاستعداد للامتحانات
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  ملخصات منظمة وجاهزة للمراجعة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;