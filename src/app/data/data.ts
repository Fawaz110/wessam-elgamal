import { Interfaces } from "./interfaces.export";

export const series = [
    "./assets/about-me-01.png",
    "./assets/about-me-02.png",
    "./assets/about-me-03.png",
    "./assets/about-me-04.png",
]

export const SkillsAr: Interfaces.Skill[] = [
    { percentage: '100%', title: 'المتابعة', description: 'المرور والمتابعة المستمرة لجميع المهام والعناصر' },
    { percentage: '100%', title: 'التخطيط', description: 'توقع المستقبل وتحقيق أفل السبل لإنجاز الأهداف التنظيمية' },
    { percentage: '100%', title: 'التنظيم', description: 'مزج الموارد البشرية والمادية من خلال تصميم هيكل أساسى لإنجاز المهام' },
    { percentage: '100%', title: 'التوجيه', description: 'إرشاد تحفيز الموظفين بإتجاه أهداف المنشأة' },
    { percentage: '100%', title: 'الرقابة', description: 'مراقبة أداء المنشأة وتحديد مدى تحقيق أهدافها' },
    { percentage: '100%', title: 'تقسيم العمل والعدالة', description: 'التخصص والإنصاف بين جميع العاملين' },
    { percentage: '100%', title: 'الفهم', description: 'تفهم المهام بوضوح أثناء إستلامها ومناقشتها قبل الإنتهاء من إستلامها' },
    { percentage: '100%', title: 'التوظيف', description: 'اختيار, تعيين, تدريب ووضع الشخص المناسب فى المكان المناسب' },
    { percentage: '100%', title: 'الأوامر', description: 'الهدف منها تفادى الهدر والخسائر وعدم إغفال مبدأ القيادة الإقناعية' },
    { percentage: '100%', title: 'حسن التشاور', description: 'التعامل مع كبار الشخصيات الهامة بالدولة المصرية' },
]

export const SkillsEn: Interfaces.Skill[] = [
    { percentage: '100%', title: 'Follow up', description: 'Continuous monitoring and follow-up of all tasks and elements.' },
    { percentage: '100%', title: 'Planning', description: 'Anticipate the future and achieve the best ways to achieve organizational goals.' },
    { percentage: '100%', title: 'Organization', description: 'Blending human and material resources by designing a basic structure to accomplish tasks.' },
    { percentage: '100%', title: 'Guidance', description: 'Guidance on motivating employees towards the organization\'s goals' },
    { percentage: '100%', title: 'Censorship', description: 'Monitoring the facility\'s performance and determining the extent to which its objectives are achieved' },
    { percentage: '100%', title: 'Division of labor and justice', description: 'Specialization and fairness among all employees' },
    { percentage: '100%', title: 'Understanding', description: 'Clearly understand tasks as they are received and discuss them before completing them.' },
    { percentage: '100%', title: 'Employment', description: 'Selecting, appointing, training and placing the right person in the right position' },
    { percentage: '100%', title: 'Commands', description: 'The aim is to avoid waste and losses and not to neglect the principle of persuasive leadership.' },
    { percentage: '100%', title: 'Good consultation', description: 'Dealing with important figures in the Egyptian state' },
]

export const TainingCyclesAr: Interfaces.TrainingCycle[] = [
    { title: 'برنامج النشر الدولى للبحوث العلمية وأخلاقيات البحث العلمى' },
    { title: 'TOEFL' },
    { title: 'ICDL' },
    { title: 'IC3' },
    { location: 'معهد لغات القوات المسلحة', title: 'دورة لغة إنجليزية' },
    { location: 'جامعة مدينة السادات', title: 'دورة التحول الرقمى' },
    { location: 'أعضاء هيئة التدريس والقيادات', title: 'دورة تنمية الموارد البشرية' },
    { location: 'الأكاديمية العسكرية', title: 'الدورة التثقيفية للدراسات الإستراتيجية والأمن القومى' },
    { location: 'الأكاديمية العسكرية', title: 'الدورة التثقيفية لإدارة الأزمات والتفاوض' },
    { location: 'الأكاديمية العسكرية', title: 'الدورة التثقيفية للتفكير المستقبلى وصناعة القرار' },
    { location: 'الأكاديمية العسكرية', title: 'الدورة التثقيفية للتطور التكنولوجى والحروب الحديثة' },
]

export const TainingCyclesEn: Interfaces.TrainingCycle[] = [
    { title: 'International Program for Publishing Scientific Research and Scientific Research Ethics.' },
    { title: 'TOEFL' },
    { title: 'ICDL' },
    { title: 'IC3' },
    { location: 'Armed Forces Languages ​​Institute', title: 'English language course.' },
    { location: 'Sadat City University', title: 'Digital transformation course.' },
    { location: 'Faculty members and leaders', title: 'Human resources development course.' },
    { location: 'Military Academy', title: 'Cultural Course on Strategic Studies and National Security.' },
    { location: 'Military Academy', title: 'Crisis Management and Negotiation Training Course.' },
    { location: 'Military Academy', title: 'Educational course on future thinking and decision making.' },
    { location: 'Military Academy', title: 'Educational course on technological development and modern warfare.' },
]

export const CertificatesAr: Interfaces.Certificate[] = [
    { title: 'بكالوريوس علوم عسكرية', location: 'الكلية الحربية', type: true },
    { title: 'ماجيستير علوم عسكرية', location: 'كلية القادة والأركان', type: true },
    { title: 'ليسانس حقوق', location: '', type: false },
    { title: 'ماجيستير إقتصاد وعلوم سياسية', location: '', type: false },
    { title: 'دكتوراه فى القانون المدنى', location: '', type: false },
    { title: 'باحث دكتوراه فى إدارة الأعمال', location: '', type: false },
]

export const CertificatesEn: Interfaces.Certificate[] = [
    { title: 'Bachelor of Military Sciences', location: 'Military College', type: true },
    { title: 'Master of Military Sciences', location: 'Command and Staff College', type: true },
    { title: 'Bachelor of Laws', type: false },
    { title: 'Master of Economics and Political Science', type: false },
    { title: 'PhD in Civil Law', type: false },
    { title: 'PhD candidate in Business Administration', type: false },
]

export const experienceAr: Interfaces.ExperienceData[] = [
    { location: 'انشاص', role: 'ثائد سرية \ قيادة وحدات المظلات' },
    { location: 'الكلية الفنية العسكرية', role: 'عضو هيئة تدريس' },
    { location: 'جمهورية افريقيا الوسطى', role: 'الإشراف على قوات حفظ السلام' },
    { location: 'جمهورية مالى', role: 'الإشراف على قوات حفظ السلام' },
    { location: 'جمهورية غينيا كوناكرى', role: 'تدريب القوات الغنية على تأمين الإنتخابات والشخصيات الهامة' },
    { location: 'الفرقة الثانية مشاة ميكانيكى', role: 'قائد كتيبة الفرقة الثانية مشاة ميكانيكى' },
    { location: 'الفرقة الثانية مشاة ميكانيكى', role: 'رئيس فرع الإشارة' },
    { location: 'الجيش الثالث الميدانى بالسويس', role: 'رئيس فرع التخطيط والعمليات \ فرع الإشارة' },
    { location: 'قوات شرق القناة لمكافحة الإرهاب بسيناء', role: 'رئيس فرع التخطيط والعمليات \ فرع الإشارة' },
    { location: 'محافظة الإسماعيلية', role: 'نائب مستشار عسكرى' },
    { location: 'محافظة أسوان', role: 'مستشار عسكرى' },
]

export const experienceEn: Interfaces.ExperienceData[] = [
    { location: 'Inshas', role: 'Secret Commander - Parachute Units Command' },
    { location: 'Military Technical College', role: 'Faculty member' },
    { location: 'Central African Republic', role: 'Supervision of peacekeeping forces' },
    { location: 'Republic of Mali', role: 'Supervision of peacekeeping forces' },
    { location: 'Republic of Guinea Conakry', role: 'Training wealthy forces to secure elections and important figures' },
    { location: '2nd Mechanized Infantry Division', role: 'Commander of the 2nd Mechanized Infantry Division' },
    { location: '2nd Mechanized Infantry Division', role: 'Head of the Signal Branch' },
    { location: 'Third Field Army in Suez', role: 'Head of Planning and Operations Branch \ Signal Branch' },
    { location: 'East Canal Forces to Combat Terrorism in Sinai', role: 'Head of Planning and Operations Branch \ Signal Branch' },
    { location: 'Ismailia Governorate', role: 'Deputy Military Advisor' },
    { location: 'Aswan Governorate', role: 'Military advisor' },
]

export const TotallyExperienceAr: string[] = [
    'الأعمال القيادية \\ الإدارية \\ التنظيمية \\ التدريب \\ التخطيط \\ الأمن',
    'الإشتراك ضمن عناصر القوات المسلحة فى تأمين الأهداف الحيوية أثناء ثورة 25 يناير و30 يونيو - تأمين المقار الإنتخابية (الدستور, مجلس النواب, الرئاسية)',
    'تأمين مقر لجنة إنتخاب رئيس الجمهورية بمصر الجديدة (الشهيد أبو عجيزة)'
]

export const TotallyExperienceEn: string[] = [
    'Leadership, Administrative, Organizational, Training, Planning, Security',
    'Participating within the armed forces in securing vital targets during the January 25 and June 30 revolutions - securing electoral headquarters (the Constitution, the House of Representatives, and the Presidential).',
    'Securing the headquarters of the Presidential Election Committee in Heliopolis (Martyr Abu Ajiza)'
]

export const MedalsAr: string[] = [
    'نوط الواجب العسكرى من الطبقة الأولى',
    'نوط الواجب العسكرى من الطبقة الثالثة',
    'ميدالية 25 يناير',
    'ميدالية 30 يونيو',
    'ميدالية الخدمة الطويلة والقدوة الحسنة',
    'ميدالية ذهبية لبطولة الجمهورية (الكاراتيه)',
]

export const MedalsEn: string[] = [
    'Military Duty Medal, First Class',
    'Military Duty Medal, Third Class',
    'January 25 Medal',
    'June 30 Medal',
    'Long Service and Good Conduct Medal',
    'Gold medal for the Republic Championship (karate)',
]

export function RandomIndex(): number {
    return Math.floor(Math.random() * 4);
}