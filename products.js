// =====================================================================
// MAHSULOTLAR RO'YXATI
// Yangi mahsulot qo'shish: shu ro'yxatga yangi qator qo'shing (vergul bilan).
//   id     — noyob raqam (takrorlanmasin)
//   cat    — 'heaters' | 'boilers' | 'pumps'
//   price  — faqat raqam, probelsiz (masalan 4200000)
//   img    — rasm fayli: 'images/fayl-nomi.jpg' (rasmni images papkasiga yuklang)
//   specs  — xususiyatlar: [['Nomi', 'Qiymati'], ...]  (ixtiyoriy)
// =====================================================================
const PRODUCTS = [
  { id: 1, cat: 'heaters', brand: 'Ariston', name: 'ABS VLS EVO 50L водонагреватель', price: 1450000, icon: 'heater' },
  { id: 2, cat: 'heaters', brand: 'Ariston', name: 'ABS VLS EVO 80L водонагреватель', price: 1890000, icon: 'heater' },
  { id: 3, cat: 'heaters', brand: 'Ariston', name: 'Velis Evo 100L водонагреватель', price: 2650000, icon: 'heater' },
  { id: 4, cat: 'boilers', brand: 'Ariston', name: 'Clas Evo 24 настенный котёл', price: 7200000, icon: 'boiler' },
  { id: 5, cat: 'boilers', brand: 'Navien', name: 'Deluxe 24K конденсационный котёл', price: 8900000, icon: 'boiler' },
  { id: 6, cat: 'boilers', brand: 'Immergas', name: 'Victrix Tera 28 котёл', price: 9400000, icon: 'boiler' },
  { id: 7, cat: 'boilers', brand: 'Chaffoteaux', name: 'Alixia Evo 24 котёл', price: 6800000, icon: 'boiler' },
  { id: 8, cat: 'boilers', brand: 'Sime', name: 'Murelle HE 25 котёл', price: 10200000, icon: 'boiler' },
  { id: 9, cat: 'boilers', brand: 'Vessen', name: 'VS-24 настенный котёл', price: 5100000, icon: 'boiler' },
  { id: 10, cat: 'pumps', brand: 'Grundfos', name: 'UPS 25-40 циркуляционный насос', price: 650000, icon: 'pump' },
  { id: 11, cat: 'pumps', brand: 'DAB', name: 'VA 35/130 циркуляционный насос', price: 540000, icon: 'pump' },
  { id: 12, cat: 'pumps', brand: 'Grundfos', name: 'CM 5-4 поверхностный насос', price: 1850000, icon: 'pump' },
  { id: 13, cat: 'pumps', brand: 'Grundfos', name: 'MQ 3-35 насосная станция', price: 4200000, icon: 'pump',
    img: 'images/grundfos-mq-3-35.jpg',
    specs: [
      ['Артикул', '96515412'],
      ['Температура перекачиваемой жидкости', '0 до 35 °C'],
      ['Тип изделия', 'Насосная станция / самовсасывающий'],
      ['Вид насоса', 'Поверхностный'],
      ['Номинальный расход', '3 м³/ч'],
      ['Максимальный расход', '3,5 м³/ч'],
      ['Материал корпуса', 'POM + стекловолокно (25%)'],
      ['Качество воды', 'Чистая'],
      ['Мощность на валу P2', '550 Вт'],
      ['Максимальный напор', '35 м'],
      ['Номинальный напор', '18 м'],
      ['Страна производства', 'Италия'],
    ] },
];
