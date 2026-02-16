import "./style.css";

type FoodItem = {
  code: string;
  title: string;
  intro: string;
  tagline: string;
  highlights: string[];
  story: string[];
  contacts: string[];
  mapQuery?: string;
  mapEmbed?: string;
  mapLink?: string;
  images: [string, string, string, string, string, string];
};

const CAMPAIGN_TEXT = "“รสชาติ...ที่หายไป - The Lost Taste” ปีงบประมาณ 2568";

const FOOD_ITEMS: ReadonlyArray<FoodItem> = [
  {
    code: "A",
    title: "แกงคั่วหัวโหนดปลากระเบนย่าง",
    intro:
      "แกงหัวโหนดปลาเบนย่าง อาหารถิ่นกว่า 3 ชั่วอายุคน สูตรเด็ดอำเภอท่าฉาง ขอเชิญชวนร่วมโหวตเมนูอาหารถิ่นของจังหวัดสุราษฎร์ธานี",
    tagline: "กะทิแตกมัน หอมควันปลาย่าง รสชาติแห่งตำนาน",
    highlights: [
      "หัวโหนด ยอดตาลอ่อน วัตถุดิบล้ำค่าในท้องถิ่น",
      "เครื่องแกงตำมือ เข้มข้น ถึงพริกถึงแกง",
      "ปลากระเบนย่าง หอมฉุย เอกลักษณ์ชาวเล",
      "ยิ่งอุ่นยิ่งหรอย กินคู่ขนมจีนเข้ากันดีนัก",
    ],
    story: [
      'จากเสียงคลื่นลมและวิถีชีวิตชาวเลสู่ตำนานความอร่อยที่หาทานได้ยาก "แกงหัวโหนดปลากระเบนย่าง" คือมรดกทางรสชาติแห่งท่าฉางที่สืบทอดผ่านกาลเวลา',
      "เมนูนี้เคยเป็นศูนย์รวมใจในงานบุญและมื้ออาหารครอบครัว ยิ่งอุ่นยิ่งอร่อย กินคู่ข้าวสวยร้อน ๆ หรือขนมจีน จึงไม่ใช่เพียงความอิ่มท้อง แต่คือความทรงจำที่ชาวท่าฉางตั้งใจอนุรักษ์ไว้",
    ],
    contacts: [
      "บ้านเลขที่ 80/2 หมู่ที่ 2 ตำบลเวียง อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน แม่วรรณดี",
      "หมายเลขโทรศัพท์ 063-080-9425",
      "Facebook: วรรณดี คงแก้ว",
      "Line: 063-080-9425",
    ],
    mapEmbed: "https://www.google.com/maps?q=9.3202722,99.0588743&z=17&output=embed",
    mapLink: "https://www.google.com/maps/place/9%C2%B019'13.0%22N+99%C2%B003'32.0%22E",
    images: ["A1.png", "A2.png", "A3.png", "A4.png", "A5.png", "A6.png"],
  },
  {
    code: "B",
    title: "ขนมจั้ง",
    intro: "ของดีคู่ประเพณีชักพระและสงกรานต์ของชุมชนท่าฉาง",
    tagline: "สืบสานสูตรโบราณ มัดด้วยเชือกกล้วยมันลา อร่อยล้ำค่าภูมิปัญญาชุมชน",
    highlights: [
      "เนื้อข้าวเหนียวนุ่มเนียน",
      "วัตถุดิบธรรมชาติ ปราศจากสารปรุงแต่ง",
      "ทานเปล่าก็เพลิน ทานคู่กาแฟยิ่งฟิน",
      'ทำสดใหม่ "ออเดอร์ต่อออเดอร์"',
    ],
    story: [
      'จากตำนานความอร่อยที่สืบทอดจากรุ่นสู่รุ่น "ขนมจั้ง" คือภูมิปัญญาพื้นบ้านที่อยู่คู่กับวิถีชีวิตของคนในชุมชนมายาวนาน เอกลักษณ์อยู่ที่เนื้อข้าวเหนียวคุณภาพเยี่ยมและการมัดด้วยเชือกกล้วยมันลา',
      'ความพิเศษอยู่ที่รสสัมผัสหนึบละมุน ทานเปล่าก็อร่อย หรือจับคู่เครื่องดื่มอย่าง "กาแฟจั้ง" ก็ลงตัว กลายเป็นความอร่อยที่หลายคนบอกว่าแค่กิโลเดียวไม่เคยพอ',
    ],
    contacts: [
      "บ้านเลขที่ 12 หมู่ที่ 3 ตำบลเสวียด อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน ขนมจั้งแม่ละม้าย",
      "หมายเลขโทรศัพท์ 087-2781143",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.047939395954!2d99.11574999999999!3d9.32902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTknNDQuNSJOIDk5wrAwNic1Ni43IkU!5e0!3m2!1sth!2sth!4v1770913718881!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/hXQZ321T2ro2VQ3z7",
    images: ["B1.png", "B2.png", "B3.png", "B4.png", "B5.png", "B6.png"],
  },
  {
    code: "C",
    title: "แกงไตปลาเตาถ่าน",
    intro: "แกงไตปลาแห้งสูตรชุมชน รสปักษ์ใต้แท้ เข้มข้นถึงเครื่อง",
    tagline: "หอมกลิ่นควันไฟ รสจัดจ้าน เนื้อฉ่ำ ไม่เหมือนใคร",
    highlights: [
      "รสปักษ์ใต้แท้ การันตีความอร่อยกว่า 5 ปี",
      "เคี่ยวนานบนเตาถ่านจนเข้าเนื้อ",
      "เนื้อแกงฉ่ำ ไม่แห้งกระด้าง",
      "กินแห้งก็ได้ ทำน้ำแกงขนมจีนก็เลิศ",
    ],
    story: [
      'เริ่มต้นจากความตั้งใจส่งต่อรสมือปักษ์ใต้สู่ลูกหลาน จนเกิดเป็น "แกงไตปลาเตาถ่าน" สูตรเด็ดที่เติบโตผ่านเสียงบอกต่อในชุมชน',
      "ความพิเศษคือการเคี่ยวเตาถ่านนานจนถึงเครื่อง หอมควันไฟเป็นเอกลักษณ์ เก็บแช่แข็งได้นาน และนำไปต่อยอดเป็นเมนูได้หลากหลาย",
    ],
    contacts: [
      "บ้านเลขที่ 105/4 หมู่ที่ 6 ตำบลเสวียด อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน แกงไตปลาเตาถ่านยายแอ๋ม",
      "หมายเลขโทรศัพท์ 093-5923628",
    ],
     mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3936.9775909755463!2d99.14582971223902!3d9.335249990700186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjAnMDYuOSJOIDk5wrAwOCc1NC4zIkU!5e0!3m2!1sth!2sth!4v1770914759085!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/BEwG9WNbKgAc1BfZ6",
    images: ["C1.png", "C2.jpg", "C3.png", "C4.png", "C5.png", "C6.png"],
  },
  {
    code: "D",
    title: "ข้าวหมาก",
    intro: "ภูมิปัญญาท่าฉางกว่า 100 ปี ความหวานละมุนจากการหมักธรรมชาติ",
    tagline: "รสสัมผัสแห่งตำนาน หวานละมุนจากธรรมชาติ",
    highlights: [
      "สูตรตำนานกว่า 100 ปี",
      "หวานธรรมชาติ ไร้น้ำตาล",
      "ไร้สารกันเสีย",
      "หมักด้วยแป้งเชื้อสูตรโบราณ",
      "ช่วยกระจายรายได้กลับสู่ชุมชน",
    ],
    story: [
      'จากวิถีชุมชนตำบลเขาถ่าน "ข้าวหมาก" ถูกส่งต่อผ่านกาลเวลากว่าศตวรรษ เริ่มจากการคัดสรรข้าวเหนียวและหมักกับลูกแป้งสูตรดั้งเดิมจนได้ความหวานหอมเฉพาะตัว',
      "หลังหมักประมาณ 2 วัน จะได้เนื้อสัมผัสนุ่มละมุน ปราศจากน้ำตาลและสารกันเสีย เหมาะทั้งทานสดชื่นและนำไปต่อยอดเป็นเมนูอื่น ๆ",
      "ทุกคำจึงมีความหมายมากกว่าความอร่อย แต่คือพลังในการสืบสานวัฒนธรรมอาหารพื้นบ้านให้คงอยู่คู่ชุมชน",
    ],
    contacts: [
      "บ้านเลขที่ 4 หมู่ที่ 5 ตำบลเขาถ่าน อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน ร้านเครื่องแกงแม่เพ็ญบ้านหนองดูน",
      "หมายเลขโทรศัพท์ 061-2253809",
    ],
     mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.3876202356178!2d99.15678372586228!3d9.298879966911374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTcnNTYuMCJOIDk5wrAwOSc0Mi4wIkU!5e0!3m2!1sth!2sth!4v1770914865797!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/qj4mLcJbEKTg924u6",
    images: ["D1.png", "D2.png", "D3.png", "D4.png", "D5.png", "D6.png"],
  },
  {
    code: "E",
    title: "ปลากระเบนผัดหวาน",
    intro: "ภูมิปัญญาถนอมอาหารชาวเล รสหวานนำเค็มตามแบบปักษ์ใต้",
    tagline: "หวานนำ เค็มตาม เนื้อนุ่ม ไม่แข็งกระด้าง",
    highlights: [
      "ปลากระเบนสดใหม่จากเรือประมงพื้นบ้าน",
      "หวานหอมด้วยน้ำตาลโตนดท่าฉาง",
      "เนื้อนุ่มหนึบกำลังดี",
      "ไร้กลิ่นคาว",
    ],
    story: [
      'จากความอุดมสมบูรณ์ของอ่าวบ้านดอน สู่เมนูภูมิปัญญาชาวเล "ปลากระเบนผัดหวาน" ที่สะท้อนวิถีชีวิตชุมชนท่าฉางอย่างชัดเจน',
      "จุดเด่นคือการคัดปลาสด ตากแดดธรรมชาติ และผัดไฟอ่อนกับน้ำตาลโตนดจนได้รสกลมกล่อม หอมหวานตัดเค็มแบบลงตัว",
    ],
    contacts: [
      "ที่อยู่กำลังอัปเดต (อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี)",
      "ชื่อร้าน กำลังอัปเดต",
      "หมายเลขโทรศัพท์ กำลังอัปเดต",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.5608710932734!2d99.17470971223862!3d9.28346999074997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTcnMDAuNSJOIDk5wrAxMCczOC4yIkU!5e0!3m2!1sth!2sth!4v1770914984663!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/wcJ3ps4B4hV5X8rK8",
    images: ["E1.png", "E2.png", "E3.png", "E4.png", "E5.png", "E6.png"],
  },
  {
    code: "F",
    title: "คั่วกลิ้งเห็ดแครง",
    intro: "เมนูพื้นถิ่นท่าฉาง รสจัดจ้าน โปรตีนสูงจากเห็ดแครงธรรมชาติ",
    tagline: "อร่อยจัดจ้าน โปรตีนสูง ประโยชน์เน้น ๆ",
    highlights: [
      "เห็ดแครงธรรมชาติ สดใหม่",
      "เครื่องแกงตำมือ กะทิคั้นสด ปราศจากสารปรุงแต่ง",
      "รสมือกลุ่มแม่บ้านวิสาหกิจฯ ท่าฉาง",
    ],
    story: [
      'คั่วกลิ้งเห็ดแครงคือของดีประจำถิ่นที่หารับประทานยาก ด้วยขั้นตอนเตรียมวัตถุดิบที่พิถีพิถัน แต่ยังคงรสใต้แท้ดั้งเดิมไว้อย่างครบถ้วน',
      "ในราคาเข้าถึงง่าย เมนูนี้ช่วยกระจายรายได้สู่เกษตรกรและชุมชนโดยตรง จนกลายเป็นอีกหนึ่งรสชาติที่ไม่ควรพลาดเมื่อมาเยือนท่าฉาง",
    ],
    contacts: [
      "บ้านเลขที่ 3/2 หมู่ 6 ตำบลเขาถ่าน อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน กลุ่มวิสาหกิจชุมชนท่องเที่ยวเชิงนิเวศท่าฉาง",
      "หมายเลขโทรศัพท์ 061-2253809",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.48998826064!2d99.2032222!3d9.2897778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTcnMjMuMiJOIDk5wrAxMicxMS42IkU!5e0!3m2!1sth!2sth!4v1770915680422!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/AuHi5Lsr4wzE5V9v7",
    images: ["F1.png", "F2.png", "F3.png", "F4.png", "F5.png", "F6.jpg"],
  },
  {
    code: "G",
    title: "ขนมไข่บ้านคลองขุด",
    intro: "ของฝากท้องถิ่นที่ครองใจผู้คนมายาวนาน กรอบนอกนุ่มใน",
    tagline: "กรอบนอก นุ่มใน คู่ใจกาแฟแก้วโปรด",
    highlights: [
      "สัญลักษณ์แห่งความผูกพันของชุมชน",
      "สดใหม่ สะอาด",
      "หวานกำลังดี จิ้มนมก็ฟิน กินคู่กาแฟก็เลิศ",
      "รสชาติแห่งความทรงจำที่ใครได้ทานก็ติดใจ",
    ],
    story: [
      'จากกลิ่นหอมของเตาถ่านในงานบุญประเพณี สู่ขนมไข่บ้านคลองขุดที่สืบทอดมาอย่างยาวนาน โดยกลุ่มสัมมาชีพในชุมชนกว่า 14 ชีวิตร่วมกันพัฒนาและรักษาคุณภาพ',
      "ความลงตัวของวัตถุดิบคุณภาพ ทำให้ได้รสสัมผัสกรอบนอกนุ่มในอย่างเป็นเอกลักษณ์ จนกลายเป็นของฝากที่ผู้มาเยือนตามหา",
    ],
    contacts: [
      "หมู่ที่ 6 ตำบลเวียง อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน ขนมไข่บ้านคลองขุด",
      "หมายเลขโทรศัพท์ 089-0373269",
    ],
     mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.971827061627!2d99.18204971220169!3d9.246815285499839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTQnNDguNSJOIDk5wrAxMScwNC43IkU!5e0!3m2!1sth!2sth!4v1770915847792!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/3n3nevWmBC3cFbBA7",
    images: ["G1.png", "G2.png", "G3.png", "G4.png", "G5.png", "G6.png"],
  },
  {
    code: "H",
    title: "ถั่วกรอบแก้ว",
    intro: "สูตรลับชุมชน เคี่ยวด้วยใจ กรอบหอมเพลินจนหยุดไม่อยู่",
    tagline: "สูตรลับวัยเก๋า คัดเน้น ๆ เคี่ยวด้วยใจ กรอบมันหมดถุงไม่รู้ตัว",
    highlights: [
      "คัดถั่วเม็ดสวยไร้กลิ่นหืน",
      "ใส่ใจทุกขั้นตอน ปรุงด้วยใจวัยเกษียณ",
      "วัตถุดิบธรรมชาติ สดใหม่ทุกถุง",
      "หอมละมุนด้วยน้ำดอกมะลิ",
      "ทานเล่นก็เพลิน โรยส้มตำก็แซ่บ",
    ],
    story: [
      'ถั่วกรอบแก้วเริ่มจากการลองผิดลองถูกและปรับสูตรร่วมกับชุมชน จนได้รสชาติหวานกำลังดี กลิ่นหอมละมุน และความกรอบที่กินแล้วหยุดยาก',
      "น้ำตาลที่เคี่ยวจนรัดตัวเป็นประกาย ช่วยเคลือบเม็ดถั่วให้เงาสวย เก็บความกรอบได้ดีในถุงซิปล็อกพร้อมทาน",
    ],
    contacts: [
      "ที่อยู่ 125 หมู่ 5 ตำบลท่าฉาง อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน ทวีสุขถั่วกรอบแก้ว",
      "หมายเลขโทรศัพท์ 083-550-6602",
    ],
     mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.983522797123!2d99.18141507612008!3d9.245769990824492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTQnNDQuOCJOIDk5wrAxMScwMi40IkU!5e0!3m2!1sth!2sth!4v1770916044556!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/KqBv7ZsowSaYhG4m8",
    images: ["H1.png", "H2.png", "H3.png", "H4.png", "H5.png", "H6.png"],
  },
  {
    code: "I",
    title: "ขนมกรุบ",
    intro: "มรดกขนมพื้นบ้านปักษ์ใต้ ตำมือ ทอดฟืน หวานหอมจากน้ำตาลโตนด",
    tagline: "ตำด้วยมือ ทอดด้วยฟืน รสละมุนน้ำตาลโตนดแท้",
    highlights: [
      "แป้งตำมือแบบดั้งเดิม",
      "กรอบเบา ละลายในปาก ไม่แข็งกระด้าง",
      "ทอดเตาฟืน กลิ่นหอมเป็นเอกลักษณ์",
      "หวานละมุน เคลือบน้ำตาลโตนดแท้",
      "ทำสดใหม่ตามออเดอร์",
    ],
    story: [
      'ขนมกรุบเป็นขนมงานบุญที่สืบทอดมากว่า 100 ปี จากประเพณีสารทเดือนสิบสู่ของฝากล้ำค่าที่สะท้อนวิถีชุมชนท่าฉาง',
      "เคล็ดลับคือการตำแป้งด้วยแรงมือและทอดด้วยฟืน ทำให้ได้เนื้อสัมผัสเบากรอบ พร้อมรสหวานหอมจากน้ำตาลโตนดแท้",
    ],
    contacts: [
      "92 หมู่ 3 ตำบลท่าเคย อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน ขนมกรุบผู้ใหญ่แหวง",
      "หมายเลขโทรศัพท์ กำลังอัปเดต",
    ],
     mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3938.2677651964837!2d99.16686507611988!3d9.220329990848898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTMnMTMuMiJOIDk5wrAxMCcxMC4wIkU!5e0!3m2!1sth!2sth!4v1770916159670!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/RApgUBgXwZzcEdUn6",
    images: ["I1.png", "I2.png", "I3.png", "I4.png", "I5.png", "I6.png"],
  },
  {
    code: "J",
    title: "ลูกตาลลอยแก้ว ขนมตาล และปลาทูต้มหวาน",
    intro: "สามเมนูของดีท่าฉางจากวัตถุดิบท้องถิ่น ถ่ายทอดรสชาติบ้านเกิดในแบบร่วมสมัย",
    tagline: "จากยอดตาลแท้ท่าฉาง สู่ของหวานและอาหารพื้นถิ่นที่กินแล้วคิดถึงบ้าน",
    highlights: [
      "ลูกตาลอ่อนคัดพิเศษ เนื้อนุ่มเด้ง ไม่ฝาด",
      "ขนมตาลสูตรหมักโบราณ หอมตาลสุก ไร้สารกันบูด",
      "ปลาทูต้มหวานก้างนิ่ม เคี่ยวไฟอ่อนข้ามคืน",
      "ใช้วัตถุดิบเด่นของชุมชน เช่น ตาลโตนดท่าฉาง",
    ],
    story: [
      "ชุดเมนูนี้สะท้อนความอุดมสมบูรณ์ของท่าฉาง ตั้งแต่ลูกตาลลอยแก้วที่ให้ความสดชื่น ขนมตาลเนื้อนุ่มหนึบกลิ่นหอมธรรมชาติ ไปจนถึงปลาทูต้มหวานรสกลมกล่อม",
      "แต่ละเมนูผ่านขั้นตอนการคัดวัตถุดิบและปรุงอย่างพิถีพิถัน เน้นความสะอาดและรสชาติแท้จากภูมิปัญญาพื้นบ้าน",
      "จึงเป็นทั้งของกินประจำวัน ของฝาก และความทรงจำร่วมของชุมชนที่พร้อมส่งต่อถึงคนรุ่นใหม่",
    ],
    contacts: [
      "หมู่ 1 บ้านคลองหอ ตำบลคลองไทร อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน กลุ่มสบู่ลูกตาลใยไหม",
      "หมายเลขโทรศัพท์ 089-006-3462",
    ],
     mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7978.553653936707!2d99.16131523588267!3d9.208709265456546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTInMzIuNyJOIDk5wrAwOSc0NS4yIkU!5e0!3m2!1sth!2sth!4v1770916228784!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/Y4tjV3CSsmG1YS6w6",
    images: ["J1.png", "J2.jpg", "J3.png", "J4.png", "J5.png", "J6.png"],
  },
  {
    code: "K",
    title: "ผัดไทยท่าฉางแม่เพ็ญ และเครื่องแกงแม่เพ็ญ",
    intro: "เมนูผัดไทยรสมือชุมชนคู่กับเครื่องแกงใต้เข้มข้น จากร้านเดียวกันในตำบลเขาถ่าน",
    tagline: "ผัดไทยปรุงสด เครื่องแกงถึงพริกถึงขิง อร่อยจริงใจในราคาชุมชน",
    highlights: [
      "ผัดไทยปรุงใหม่จานต่อจาน สด สะอาด",
      "ซอสเข้มข้น กลมกล่อม ลงตัวแบบท่าฉาง",
      "เครื่องแกงใต้ 5 สูตรจากสมุนไพรสด",
      "สินค้าคุณภาพที่เติบโตจากเสียงบอกต่อ",
    ],
    story: [
      "ผัดไทยท่าฉางแม่เพ็ญต่อยอดเมนูเส้นยอดนิยมให้เข้ากับรสนิยมคนท้องถิ่น โดยเน้นวัตถุดิบสดใหม่และมาตรฐานความสะอาดในทุกจาน",
      "ส่วนเครื่องแกงแม่เพ็ญใช้สมุนไพรธรรมชาติคัดสรรอย่างพิถีพิถัน ให้รสจัดจ้านแบบครัวใต้แท้ เหมาะทั้งใช้ในครัวเรือนและร้านอาหาร",
      "ทั้งสองผลิตภัณฑ์จึงเป็นภาพสะท้อนของชุมชนที่รักษารากเดิมและพัฒนาสินค้าให้เข้าถึงคนรุ่นใหม่ได้พร้อมกัน",
    ],
    contacts: [
      "บ้านเลขที่ 4 หมู่ที่ 5 ตำบลเขาถ่าน อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
      "ชื่อร้าน ร้านเครื่องแกงแม่เพ็ญบ้านหนองดูน",
      "หมายเลขโทรศัพท์ 061-225-3809",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3937.047939395954!2d99.11574999999999!3d9.32902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTknNDQuNSJOIDk5wrAwNic1Ni43IkU!5e0!3m2!1sth!2sth!4v1770913718881!5m2!1sth!2sth",
    mapLink: "https://maps.app.goo.gl/hXQZ321T2ro2VQ3z7",
    images: ["K1.png", "K2.png", "K3.png", "K4.png", "K5.png", "K6.png"],
  },
];

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const buildMapEmbed = (item: FoodItem): string => {
  if (item.mapEmbed) {
    return item.mapEmbed;
  }

  const mapQuery = encodeURIComponent(
    item.mapQuery ?? "อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
  );
  return `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`;
};

const buildMapLink = (item: FoodItem): string => {
  if (item.mapLink) {
    return item.mapLink;
  }

  const mapQuery = encodeURIComponent(
    item.mapQuery ?? "อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี",
  );
  return `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
};

const renderFoodSection = (item: FoodItem, index: number): string => {
  const sectionId = `food-section-${index + 1}`;
  const storyHtml = item.story
    .map((paragraph) => escapeHtml(paragraph))
    .join("<br /><br />");
  const highlightHtml =
    item.highlights.length > 0
      ? item.highlights
          .map((point) => `<li>– ${escapeHtml(point)}</li>`)
          .join("")
      : "<li>– กำลังอัปเดตข้อมูล</li>";
  const contactHtml =
    item.contacts.length > 0
      ? item.contacts.map((contact) => `<li>- ${escapeHtml(contact)}</li>`).join("")
      : "<li>- กำลังอัปเดตข้อมูล</li>";

  return `
    <section id="${sectionId}" data-food-section data-food-index="${index}" class="bg-gradient-to-br from-slate-50 via-white to-slate-100 ${index > 0 ? "border-t border-slate-200/70" : ""}">
      <div class="mx-auto w-full max-w-[1800px] px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-[300px_1fr_300px] gap-8 items-start md:items-stretch">
          <div class="grid grid-rows-3 gap-3 md:h-full">
            <img src="/${item.images[0]}" class="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-xl" alt="${escapeHtml(item.title)} 1">
            <img src="/${item.images[1]}" class="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-xl" alt="${escapeHtml(item.title)} 2">
            <img src="/${item.images[2]}" class="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-xl" alt="${escapeHtml(item.title)} 3">
          </div>

          <div class="flex flex-col gap-6 w-full text-gray-200 leading-relaxed">
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              ${escapeHtml(item.title)}
            </h2>

            <p class="text-2xl mt-3 text-slate-700 leading-relaxed">
              ${escapeHtml(item.intro)}
              <span class="italic text-base text-slate-500 block mt-1">
                ${escapeHtml(CAMPAIGN_TEXT)}
              </span>
            </p>

            <div class="grid grid-cols-1 gap-5">
              <div class="border-l-4 border-orange-400 pl-4 space-y-5">
                <div class="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-5 shadow-sm">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="inline-block h-9 w-1 rounded-full bg-orange-500"></span>
                    <h3 class="text-2xl font-bold text-slate-900">คำโปรย</h3>
                  </div>
                  <p class="text-lg text-slate-700 italic">${escapeHtml(item.tagline)}</p>
                </div>

                <div class="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-5 shadow-sm">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="inline-block h-9 w-1 rounded-full bg-orange-500"></span>
                    <h3 class="text-2xl font-bold text-slate-900">จุดเด่น</h3>
                  </div>
                  <ul class="space-y-2 text-slate-700">
                    ${highlightHtml}
                  </ul>
                </div>

                <div class="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-5 shadow-sm">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="inline-block h-9 w-1 rounded-full bg-orange-500"></span>
                    <h3 class="text-2xl font-bold text-slate-900">เรื่องราวสินค้า</h3>
                  </div>
                  <p class="text-slate-700 leading-relaxed">${storyHtml}</p>
                </div>

                <div class="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-5 shadow-sm">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="inline-block h-9 w-1 rounded-full bg-orange-500"></span>
                    <h3 class="text-2xl font-bold text-slate-900">ปักหมุดร้านค้า</h3>
                  </div>

                  <label class="block text-sm text-slate-700 mb-2">ตำแหน่งที่ตั้งร้านค้าใน Google Maps</label>
                  <div class="w-full h-[300px] rounded-xl overflow-hidden border border-slate-300">
                    <iframe src="${buildMapEmbed(item)}" class="w-full h-full border-0" loading="lazy"></iframe>
                  </div>

                  <a href="${buildMapLink(item)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 mt-3 text-sm text-blue-600 hover:underline">
                    เปิดใน Google Maps
                  </a>
                </div>

                <div class="rounded-2xl bg-white/70 backdrop-blur border border-slate-200 p-5 shadow-sm">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="inline-block h-9 w-1 rounded-full bg-orange-500"></span>
                    <h3 class="text-2xl font-bold text-slate-900">ช่องทางการติดต่อ</h3>
                  </div>
                  <ul class="space-y-2 text-slate-700">
                    ${contactHtml}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-rows-3 gap-3 md:h-full">
            <img src="/${item.images[3]}" class="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-xl" alt="${escapeHtml(item.title)} 4">
            <img src="/${item.images[4]}" class="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-xl" alt="${escapeHtml(item.title)} 5">
            <img src="/${item.images[5]}" class="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover rounded-xl" alt="${escapeHtml(item.title)} 6">
          </div>
        </div>
      </div>
    </section>
  `;
};

const setActivePager = (index: number): void => {
  const pagerButtons = document.querySelectorAll<HTMLButtonElement>("[data-food-target]");
  pagerButtons.forEach((button) => {
    const isActive = Number(button.dataset.foodIndex) === index;
    button.classList.toggle("page-btn-active", isActive);
  });
};

const buildPagers = (): void => {
  const mobilePager = document.getElementById("pagerButtonsMobile");
  const desktopPager = document.getElementById("pagerButtonsDesktop");

  if (!mobilePager || !desktopPager) {
    return;
  }

  const pagerMarkup = FOOD_ITEMS.map(
    (item, index) => `
      <button class="page-btn" data-food-target="food-section-${index + 1}" data-food-index="${index}" aria-label="ไปยังเมนู ${escapeHtml(item.title)}">
        ${escapeHtml(item.code)}
      </button>
    `,
  ).join("");

  mobilePager.innerHTML = pagerMarkup;
  desktopPager.innerHTML = pagerMarkup;

  const pagerButtons = document.querySelectorAll<HTMLButtonElement>("[data-food-target]");
  pagerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.foodTarget;
      if (!target) {
        return;
      }

      const section = document.getElementById(target);
      if (!section) {
        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });
      const index = Number(button.dataset.foodIndex ?? 0);
      setActivePager(index);
    });
  });

  const sections = document.querySelectorAll<HTMLElement>("[data-food-section]");
  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const sectionElement = entry.target as HTMLElement;
          const sectionIndex = Number(sectionElement.dataset.foodIndex ?? 0);
          setActivePager(sectionIndex);
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));
  }

  setActivePager(0);
  window.dispatchEvent(new Event("resize"));
};

const renderFoodSections = (): void => {
  const foodContainer = document.getElementById("foodSections");
  if (!foodContainer) {
    return;
  }

  foodContainer.innerHTML = FOOD_ITEMS.map((item, index) =>
    renderFoodSection(item, index),
  ).join("");
};

renderFoodSections();
buildPagers();
