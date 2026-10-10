// =====================================================================
// MAHSULOTLAR RO'YXATI (uch tilli)
// Yangi mahsulot qo'shish: shu ro'yxatga yangi qator qo'shing (vergul bilan).
//   id     — noyob raqam (takrorlanmasin)
//   cat    — 'heaters' | 'boilers' | 'pumps'
//   price  — faqat raqam, probelsiz (masalan 4200000)
//   name   — T('ruscha nomi', 'o\'zbekcha nomi', 'inglizcha nomi')
//   img    — rasm fayli: 'images/fayl-nomi.jpg' (rasmni images papkasiga yuklang)
//   specs  — xususiyatlar: [[T(nomi ru, uz, en), T(qiymati ru, uz, en)], ...]
//            qiymat hamma tilda bir xil bo'lsa, oddiy matn yozish mumkin: '96515412'
// =====================================================================
const T = (ru, uz, en) => ({ ru, uz, en: en === undefined ? ru : en });

const PRODUCTS = [
  { id: 1, cat: 'heaters', brand: 'Ariston', price: 1450000, icon: 'heater',
    name: T('ABS VLS EVO 50L водонагреватель', "ABS VLS EVO 50L suv isitgich", 'ABS VLS EVO 50L water heater') },
  { id: 2, cat: 'heaters', brand: 'Ariston', price: 1890000, icon: 'heater',
    name: T('ABS VLS EVO 80L водонагреватель', "ABS VLS EVO 80L suv isitgich", 'ABS VLS EVO 80L water heater') },
  { id: 3, cat: 'heaters', brand: 'Ariston', price: 2650000, icon: 'heater',
    name: T('Velis Evo 100L водонагреватель', "Velis Evo 100L suv isitgich", 'Velis Evo 100L water heater') },
  { id: 4, cat: 'boilers', brand: 'Ariston', price: 7200000, icon: 'boiler',
    name: T('Clas Evo 24 настенный котёл', "Clas Evo 24 devorga o'rnatiladigan qozon", 'Clas Evo 24 wall-mounted boiler') },
  { id: 5, cat: 'boilers', brand: 'Navien', price: 8900000, icon: 'boiler',
    name: T('Deluxe 24K конденсационный котёл', 'Deluxe 24K kondensatsion qozon', 'Deluxe 24K condensing boiler') },
  { id: 6, cat: 'boilers', brand: 'Immergas', price: 9400000, icon: 'boiler',
    name: T('Victrix Tera 28 котёл', 'Victrix Tera 28 qozon', 'Victrix Tera 28 boiler') },
  { id: 7, cat: 'boilers', brand: 'Chaffoteaux', price: 6800000, icon: 'boiler',
    name: T('Alixia Evo 24 котёл', 'Alixia Evo 24 qozon', 'Alixia Evo 24 boiler') },
  { id: 8, cat: 'boilers', brand: 'Sime', price: 10200000, icon: 'boiler',
    name: T('Murelle HE 25 котёл', 'Murelle HE 25 qozon', 'Murelle HE 25 boiler') },
  { id: 9, cat: 'boilers', brand: 'Vessen', price: 5100000, icon: 'boiler',
    name: T('VS-24 настенный котёл', "VS-24 devorga o'rnatiladigan qozon", 'VS-24 wall-mounted boiler') },
  { id: 10, cat: 'pumps', brand: 'Grundfos', price: 650000, icon: 'pump',
    name: T('UPS 25-40 циркуляционный насос', 'UPS 25-40 sirkulyatsion nasos', 'UPS 25-40 circulation pump') },
  { id: 11, cat: 'pumps', brand: 'DAB', price: 540000, icon: 'pump',
    name: T('VA 35/130 циркуляционный насос', 'VA 35/130 sirkulyatsion nasos', 'VA 35/130 circulation pump') },
  { id: 12, cat: 'pumps', brand: 'Grundfos', price: 1850000, icon: 'pump',
    name: T('CM 5-4 поверхностный насос', 'CM 5-4 yuzaki nasos', 'CM 5-4 surface pump') },
  { id: 13, cat: 'pumps', brand: 'Grundfos', price: 4200000, icon: 'pump',
    name: T('MQ 3-35 насосная станция', 'MQ 3-35 nasos stansiyasi', 'MQ 3-35 pumping station'),
    img: 'images/grundfos-mq-3-35.jpg',
    specs: [
      [T('Артикул', 'Artikul', 'SKU'), '96515412'],
      [T('Температура перекачиваемой жидкости', 'Haydalayotgan suyuqlik harorati', 'Liquid temperature'),
       T('0 до 35 °C', '0 dan 35 °C gacha', '0 to 35 °C')],
      [T('Тип изделия', 'Mahsulot turi', 'Product type'),
       T('Насосная станция / самовсасывающий', "Nasos stansiyasi / o'zi so'ruvchi", 'Pumping station / self-priming')],
      [T('Вид насоса', 'Nasos turi', 'Pump type'), T('Поверхностный', 'Yuzaki', 'Surface')],
      [T('Номинальный расход', 'Nominal sarf', 'Rated flow'), T('3 м³/ч', '3 m³/soat', '3 m³/h')],
      [T('Максимальный расход', 'Maksimal sarf', 'Maximum flow'), T('3,5 м³/ч', '3,5 m³/soat', '3.5 m³/h')],
      [T('Материал корпуса', 'Korpus materiali', 'Housing material'),
       T('POM + стекловолокно (25%)', 'POM + shishatola (25%)', 'POM + fiberglass (25%)')],
      [T('Качество воды', 'Suv sifati', 'Water quality'), T('Чистая', 'Toza', 'Clean')],
      [T('Мощность на валу P2', 'Valdagi quvvat P2', 'Shaft power P2'), T('550 Вт', '550 Vt', '550 W')],
      [T('Максимальный напор', 'Maksimal bosim', 'Maximum head'), T('35 м', '35 m', '35 m')],
      [T('Номинальный напор', 'Nominal bosim', 'Rated head'), T('18 м', '18 m', '18 m')],
      [T('Страна производства', 'Ishlab chiqarilgan mamlakat', 'Country of origin'), T('Италия', 'Italiya', 'Italy')],
    ] },
];
