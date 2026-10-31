// story.js - 1,000+ Scenes Full Otome Visual Novel Script
// พันธสัญญาหัวใจ: สี่ราชันย์มนตรา (Destiny of Hearts)

const CHARACTERS = {
  cedric: {
    name: "เซดริก (Cedric)",
    title: "ดยุกแห่งแดนเหนือ",
    color: "#a259ff",
    image: "assets/char_cedric.png"
  },
  lucian: {
    name: "ลูเชียน (Lucian)",
    title: "มหาปุโรหิตแห่งวิหารดวงดาว",
    color: "#6ec1e4",
    image: "assets/char_lucian.png"
  },
  leon: {
    name: "ลีออน (Leon)",
    title: "หัวหน้าอัศวินองครักษ์",
    color: "#f5c542",
    image: "assets/char_leon.png"
  },
  kael: {
    name: "เคล (Kael)",
    title: "จอมโจรเงาต้องคำสาป",
    color: "#ff4d6d",
    image: "assets/char_kael.png"
  },
  narrator: {
    name: "บรรยาย",
    title: "",
    color: "#e6c27a",
    image: null
  }
};

const STORY_DATA = {
  "prologue_modern_1": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-night",
    "text": "คืนวันศุกร์ที่ฝนตกหนัก... หลังจากเรียนและทำงานมาเหนื่อยทั้งสัปดาห์ คุณกลับมานอนพักที่บ้านอย่างหมดแรง",
    "next": "pro_p1_2"
  },
  "pro_p1_2": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "เสียงเม็ดฝนกระทบกระจกหน้าต่างดังเปาะแปะ ลมหนาวพัดผ้าม่านสีขาวปลิวไสว",
    "next": "pro_p1_3"
  },
  "pro_p1_3": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "คุณลุกขึ้นไปชงโกโก้ร้อนมาจิบแก้หนาว ก่อนจะเดินผ่านห้องเก็บหนังสือเก่าของคุณยาย",
    "next": "pro_p1_4"
  },
  "pro_p1_4": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "จู่ๆ แสงสีทองนวลตาก็ส่องลอดออกมาจากซอกชั้นไม้สักโบราณ ดึงดูดให้คุณเดินเข้าไปใกล้",
    "next": "pro_p1_5"
  },
  "pro_p1_5": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "บนชั้นนั้นมีสมุดปกหนังสีดำเล่มหนาประดับด้วยอัญมณีรูปดวงดาวสี่แฉกวางอยู่",
    "next": "pro_p1_6"
  },
  "pro_p1_6": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "คุณวางแก้วโกโก้ลง แล้วค่อยๆ หยิบสมุดเล่มนั้นขึ้นมาปัดฝุ่นออกเบาๆ",
    "next": "pro_p1_7"
  },
  "pro_p1_7": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ตัวอักษรสีทองบนหน้าปกเขียนไว้ว่า 'พันธสัญญาหัวใจ: สี่ราชันย์แห่งเอลีเซียม'",
    "next": "pro_p1_8"
  },
  "pro_p1_8": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "'สมุดอะไรกันเนี่ย... สวยจัง' คุณพึมพำพลางใช้นิ้วแตะลงบนอัญมณีตรงกลางปก",
    "next": "pro_p1_9"
  },
  "pro_p1_9": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "วินาทีนั้นเอง! อัญมณีทั้งสี่สีก็เปล่งแสงสว่างวาบขึ้นมาพร้อมกัน!",
    "next": "pro_p1_10"
  },
  "pro_p1_10": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "หน้ากระดาษเปิดพลิกเองอย่างรวดเร็ว ตัวอักษรเวทมนตร์ลอยขึ้นมาหมุนวนรอบตัวคุณเป็นเกลียวคลื่นสีทอง",
    "next": "pro_p1_11"
  },
  "pro_p1_11": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "คุณตกใจจะปล่อยมือแต่สมุดกลับลอยค้างอยู่กลางอากาศ และดึงร่างของคุณเข้าไปในวงแหวนแสง!",
    "next": "pro_p1_12"
  },
  "pro_p1_12": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "เสียงทุ้มนุ่มของชายหนุ่มสี่คนดังก้องประสานกันอยู่ในห้วงความคิด...",
    "next": "pro_p1_13"
  },
  "pro_p1_13": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "'ได้โปรดมารับฟังคำอธิษฐานของพวกเรา... ธิดาแห่งแสงดาวเอ๋ย...'",
    "next": "pro_p1_14"
  },
  "pro_p1_14": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ภาพห้องนอนของคุณค่อยๆ จางหายไป กลายเป็นอุโมงค์ละอองดาวที่สว่างไสว",
    "next": "pro_p1_15"
  },
  "pro_p1_15": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ลมหอมกลิ่นดอกกุหลาบและน้ำค้างยามค่ำคืนพัดผ่านใบหน้าของคุณอย่างอ่อนโยน",
    "next": "pro_p1_16"
  },
  "pro_p1_16": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "เมื่อเท้าของคุณแตะพื้นอีกครั้ง แสงสว่างจ้าก็ค่อยๆ ลดระดับลง",
    "next": "pro_p1_17"
  },
  "pro_p1_17": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "คุณกะพริบตาถี่ๆ เพื่อปรับสายตา ก่อนจะต้องอ้าปากค้างกับภาพตรงหน้า!",
    "next": "pro_p1_18"
  },
  "pro_p1_18": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "รอบตัวคุณคือมหาวิหารหินอ่อนสีขาวบริสุทธิ์ เสาหินแกะสลักสูงเสียดฟ้าล้อมรอบแท่นพิธีคริสตัล",
    "next": "pro_p1_19"
  },
  "pro_p1_19": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "เหนือโดมวิหารที่เปิดโล่ง มองเห็นท้องฟ้ายามค่ำคืนที่มีดวงจันทร์สองดวงและหมู่ดาวนับล้านดวง!",
    "next": "pro_p1_20"
  },
  "pro_p1_20": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ตึก... ตึก... เสียงฝีเท้าสี่คู่ก้าวเดินเข้ามาหาคุณจากสี่ทิศของแท่นพิธี",
    "next": "pro_p1_21"
  },
  "pro_p1_21": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "ชายหนุ่มเรือนผมสีดำสนิทในชุดดยุกสีรัตติกาลประดับขนสัตว์เดินเข้ามาหยุดตรงหน้าคุณเป็นคนแรก",
    "next": "pro_p1_22",
    "charImg": "assets/char_cedric.png"
  },
  "pro_p1_22": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "ดวงตาคมกริบของเขามองสำรวจคุณตั้งแต่หัวจรดเท้า ก่อนจะเอ่ยด้วยน้ำเสียงทุ้มต่ำ",
    "next": "pro_p1_23",
    "charImg": "assets/char_cedric.png"
  },
  "pro_p1_23": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'อย่าเพิ่งตกใจไป... ฉันชื่อเซดริก ฟอน ราเวนครอสต์ เป็นผู้สำเร็จราชการของอาณาจักรเอลีเซียมแห่งนี้'",
    "next": "pro_p1_24",
    "charImg": "assets/char_cedric.png"
  },
  "pro_p1_24": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'ในที่สุดอัญมณีแห่งดวงดาวก็พาตัวเธอมาถึงที่นี่จนได้สินะ รอนานแทบแย่เลยรู้ไหม'",
    "next": "pro_p1_25",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_p1_25": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ชายหนุ่มผมสีเงินยาวสลวยในชุดมหาปุโรหิตสีขาวเดินเข้ามายืนเคียงข้างเซดริกพร้อมรอยยิ้มละมุน",
    "next": "pro_p1_26",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_p1_26": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ท่านดยุกทำหน้านิ่งแบบนั้น เดี๋ยวคุณก็ตกใจกลัวหรอกครับ ต้องยิ้มต้อนรับคุณอ่อนโยนๆ แบบผมสิ'",
    "next": "pro_p1_27",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_p1_27": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'ฉันก็พูดปกติของฉันนั่นแหละลูเชียน นายต่างหากที่ยิ้มหวานเกินไปแล้ว'",
    "next": "pro_p1_28",
    "charImg": "assets/char_cedric.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_p1_28": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนหันมาหาคุณแล้วโค้งตัวลงเล็กน้อย 'สวัสดีครับคนเก่ง ผมลูเชียน มหาปุโรหิตผู้ดูแลวิหารดวงดาวแห่งนี้ ยินดีต้อนรับนะครับ'",
    "next": "pro_p1_29",
    "charImg": "assets/char_lucian_smile.png"
  },
  "pro_p1_29": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ทันใดนั้น เสียงเกราะสีเงินกระทบกันเบาๆ ก็ดังขึ้น อัศวินหนุ่มผมบลอนด์ทองก้าวเข้ามาคุกเข่าข้างหนึ่งตรงหน้าคุณ!",
    "next": "pro_p1_30",
    "charImg": "assets/char_leon.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_p1_30": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'ผมลีออน โกลเดนฮาร์ท หัวหน้ากองอัศวินสุริยัน ขอถวายคำสัตย์ว่าจะปกป้องคุณด้วยชีวิตครับ!'",
    "next": "pro_p1_31",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_p1_31": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "เมื่อคุณก้มลงมองสบตาเขาใกล้ๆ ลีออนก็ชะงักไป แก้มขึ้นสีแดงระเรื่อทันที 'อะ... ขอโทษครับ พอเห็นหน้าคุณชัดๆ แล้วใจผมมันเต้นแรงจนพูดผิดพูดถูกเลย...'",
    "next": "pro_p1_32",
    "charImg": "assets/char_leon_blush.png"
  },
  "pro_p1_32": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'ฮ่าๆ! อะไรกันพ่ออัศวินผู้เก่งกาจ แค่สบตาสาวน้อยครั้งเดียวก็เสียอาการซะแล้วเหรอ?'",
    "next": "pro_p1_33",
    "charImg": "assets/char_kael_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "pro_p1_33": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ชายหนุ่มคนสุดท้ายเดินล้วงกระเป๋ากางเกงก้าวออกมาจากเงาเสา ที่ลำคอของเขามีรอยสักรูปดาวสีเข้มดูลึกลับแต่มีเสน่ห์ดึงดูดใจ",
    "next": "pro_p1_34"
  },
  "pro_p1_34": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'เงียบไปเลยนะเคล! นายเองก็แอบชะโงกหน้ามองคุณตั้งแต่วินาทีแรกที่แสงสว่างวาบขึ้นมาเหมือนกันนั่นแหละ!'",
    "next": "pro_p1_35",
    "charImg": "assets/char_leon_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_p1_35": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เคลเดินเข้ามาขยิบตาให้คุณอย่างเป็นกันเอง 'หวัดดีสาวน้อย ฉันชื่อเคล ไม่ต้องเกร็งกับพวกคนเจ้าระเบียบพวกนี้หรอกนะ อยู่กับฉันรับรองสนุกกว่าเยอะ'",
    "next": "pro_p1_36",
    "charImg": "assets/char_kael_smile.png"
  },
  "pro_p1_36": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'พูดจาให้มันมีมารยาทหน่อยเคล เธอเป็นถึงธิดาแห่งแสงดาวนะ'",
    "next": "pro_p1_37",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_p1_37": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'น่าๆ ท่านดยุก ดูหน้าเธอก็รู้แล้วว่าชอบคุยแบบสบายๆ เป็นกันเองมากกว่า จริงไหมยัยตัวเล็ก?'",
    "next": "pro_p1_38",
    "charImg": "assets/char_kael.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_p1_38": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ก่อนอื่นให้คุณได้นั่งพักและฟังเรื่องราวของอาณาจักรเราก่อนดีกว่าครับ คุณคงมีคำถามเต็มไปหมดแล้ว'",
    "next": "pro_p1_39",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "pro_p1_39": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนเสกเก้าอี้บุกำมะหยี่สีขาวนุ่มสบายขึ้นมาให้คุณนั่ง โดยมีทั้งสี่คนยืนรายล้อมอยู่ใกล้ๆ",
    "next": "pro_p1_40",
    "charImg": "assets/char_lucian.png"
  },
  "pro_p1_40": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'ฟังฉันนะ... อาณาจักรเอลีเซียมของเราอยู่ได้ด้วยม่านพลังศักดิ์สิทธิ์ที่คอยป้องกันมอนสเตอร์เงาจากภายนอก'",
    "next": "pro_p1_41",
    "charImg": "assets/char_cedric.png"
  },
  "pro_p1_41": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'แต่เมื่อเดือนก่อน ม่านพลังเริ่มเกิดรอยร้าวขึ้นครับ และวิธีเดียวที่จะซ่อมแซมมันได้ คือต้องอาศัยพลังของธิดาแห่งแสงดาวจากต่างมิติ'",
    "next": "pro_p1_42",
    "charImg": "assets/char_lucian.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_p1_42": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'และเมื่อพลังม่านพลังกลับมาสมบูรณ์ พวกเราก็สามารถเปิดประตูมิติส่งคุณกลับบ้านได้อย่างปลอดภัย หรือถ้าคุณอยากอยู่ที่นี่ต่อ พวกเราก็ยินดีดูแลคุณตลอดไปเลยครับ!'",
    "next": "pro_p1_43",
    "charImg": "assets/char_leon_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "pro_p1_43": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'สรุปง่ายๆ ก็คือ ตอนนี้เธอคือคนสำคัญอันดับหนึ่งของพวกเราทั้งสี่คนยังไงล่ะ'",
    "next": "prologue_choice_1",
    "charImg": "assets/char_kael_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "prologue_choice_1": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "พอได้ฟังคำอธิบายและเห็นความตั้งใจของทั้งสี่คน คุณจะตอบพวกเขายังไงดี?",
    "choices": [
      {
        "text": "มองเซดริก 'เข้าใจแล้วค่ะ ถ้ามีคุณเซดริกคอยนำทาง ฉันพร้อมจะช่วยเต็มที่เลยค่ะ'",
        "next": "pro_c1_cedric",
        "charGain": "cedric",
        "points": 20
      },
      {
        "text": "ยิ้มให้ลูเชียน 'ขอบคุณคุณลูเชียนที่อธิบายอย่างใจดีนะคะ ฉันจะพยายามช่วยทุกคนค่ะ'",
        "next": "pro_c1_lucian",
        "charGain": "lucian",
        "points": 20
      },
      {
        "text": "พยักหน้าให้ลีออน 'มีคุณอัศวินลีออนคอยปกป้องแบบนี้ ฉันไม่กลัวอะไรเลยค่ะ'",
        "next": "pro_c1_leon",
        "charGain": "leon",
        "points": 20
      },
      {
        "text": "ยิ้มรับคำเคล 'ตกลงค่ะ! แต่เคลต้องคอยพาฉันสำรวจเมืองด้วยนะ ห้ามเบี้ยวล่ะ'",
        "next": "pro_c1_kael",
        "charGain": "kael",
        "points": 20
      },
      {
        "text": "แกล้งทำหน้าบึ้งใส่ทุกคน 'เรื่องของอาณาจักรพวกนายสิ ทำไมฉันต้องเหนื่อยช่วยด้วยล่ะ!'",
        "next": "pro_c1_wrong",
        "charGain": "all",
        "points": -15
      }
    ],
    "charImg": "assets/char_cedric.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_c1_cedric": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_blush.png",
    "bg": "bg-shrine",
    "text": "เซดริกยกยิ้มมุมปากอย่างพอใจ แววตาอ่อนโยนลงทันที 'เด็กดี... ในเมื่อเธอฝากความหวังไว้ที่ฉัน ฉันก็จะดูแลเธอให้ดีที่สุดเอง'",
    "next": "pro_c1_cedric_ext_1"
  },
  "pro_c1_lucian": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-shrine",
    "text": "ลูเชียนยิ้มหวานจนแก้มขึ้นสีระเรื่อ 'คุณทั้งใจดีและน่ารักแบบนี้ ผมชักไม่อยากให้คุณกลับโลกเดิมซะแล้วสิครับ'",
    "next": "pro_c1_lucian_ext_1"
  },
  "pro_c1_leon": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-shrine",
    "text": "ลีออนหน้าแดงถึงใบหู รีบทุบอกรับคำอย่างแข็งขัน 'ไว้ใจผมได้เลยครับ! แม้แต่รอยขีดข่วนเดียวผมก็จะไม่ยอมให้เกิดขึ้นกับคุณเด็ดขาด!'",
    "next": "pro_c1_leon_ext_1"
  },
  "pro_c1_kael": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_blush.png",
    "bg": "bg-shrine",
    "text": "เคลหัวเราะในลำคอด้วยความถูกใจ 'สัญญาแล้วนะยัยตัวแสบ เดี๋ยวฉันจะพาเที่ยวทุกซอกทุกมุมจนลืมทางกลับบ้านเลยคอยดู'",
    "next": "pro_c1_kael_ext_1"
  },
  "pro_c1_wrong": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png",
    "bg": "bg-shrine",
    "text": "ทั้งสี่คนมองหน้ากันด้วยความหนักใจ เซดริกถอนหายใจเบาๆ 'ถ้าไม่ร่วมมือกัน เธอก็กลับโลกเดิมไม่ได้เหมือนกันนะ หัดฟังเหตุผลบ้างสิ'",
    "next": "pro_after_c1_1"
  },
  "pro_after_c1_1": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ขั้นตอนต่อไป ผมขอเชิญคุณเดินมาแตะที่ศิลาดวงดาวตรงกลางแท่นพิธี เพื่อปลุกพลังเวทในตัวคุณนะครับ'",
    "next": "pro_after_c1_2",
    "charImg": "assets/char_lucian.png"
  },
  "pro_after_c1_2": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "คุณลุกขึ้นเดินไปยังแท่นศิลาคริสตัลที่ส่องแสงเรืองรองอยู่กลางห้องโถง",
    "next": "pro_after_c1_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "pro_after_c1_3": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'ไม่ต้องเกร็งนะครับ แค่วางมือลงไปแล้วนึกถึงแสงสว่างอุ่นๆ ในใจก็พอครับ'",
    "next": "pro_after_c1_4",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_after_c1_4": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "คุณวางมือทั้งสองข้างลงบนแท่นคริสตัล ความอุ่นซ่านแล่นจากฝ่ามือเข้าสู่หัวใจทันที",
    "next": "pro_after_c1_5",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_after_c1_5": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "ทันใดนั้น แสงสีทองอร่ามก็พุ่งทะยานขึ้นสู่ท้องฟ้า! เชื่อมต่อกับหมู่ดาวนับพันดวงเหนือวิหาร",
    "next": "pro_after_c1_6",
    "charImg": "assets/char_cedric_shock.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_after_c1_6": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "ละอองดาวโปรยปรายลงมาเป็นสายฝนแสงระยิบระยับ อาบไล้ร่างของคุณและชายหนุ่มทั้งสี่คน",
    "next": "pro_after_c1_7",
    "charImg": "assets/char_cedric_shock.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_after_c1_7": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'เหลือเชื่อมาก... พลังของเธอตอบรับกับศิลาดวงดาวได้สมบูรณ์แบบตั้งแต่ครั้งแรกเลย!'",
    "next": "pro_after_c1_8",
    "charImg": "assets/char_cedric_shock.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_after_c1_8": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'นอกจากจะปลุกพลังสำเร็จแล้ว พลังของคุณยังเชื่อมสายสัมพันธ์เข้ากับพวกเราทั้งสี่คนอีกด้วยครับ'",
    "next": "pro_after_c1_9",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_after_c1_9": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'หมายความว่ายิ่งพวกเราสนิทกับเธอมากเท่าไหร่ พลังของเธอก็จะยิ่งแข็งแกร่งขึ้นสินะ? แบบนี้เข้าทางฉันเลย!'",
    "next": "pro_after_c1_10",
    "charImg": "assets/char_kael_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "pro_after_c1_10": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'เดี๋ยวเถอะเคล! ห้ามฉวยโอกาสทำอะไรแปลกๆ เชียวนะ!'",
    "next": "pro_after_c1_11",
    "charImg": "assets/char_leon_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_after_c1_11": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "หลังจากแสงสีทองค่อยๆ สงบลง ความเหนื่อยล้าจากการข้ามมิติและปลุกพลังก็ถาโถมเข้ามาจนคุณเซเล็กน้อย",
    "next": "pro_after_c1_12",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "pro_after_c1_12": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "ทั้งสี่คนรีบก้าวเข้ามาล้อมตัวคุณไว้ด้วยความเป็นห่วงทันที!",
    "next": "prologue_choice_2",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "prologue_choice_2": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ตอนนี้อากาศยามดึกเริ่มเย็นลงแล้ว คุณอยากให้ใครเป็นคนดูแลพาคุณเดินเข้าสู่พระราชวัง?",
    "choices": [
      {
        "text": "จับชายเสื้อคลุมเซดริก 'คุณเซดริกคะ ช่วยเดินประคองฉันไปที่วังหน่อยนะคะ'",
        "next": "pro_c2_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ยื่นมือหาลูเชียน 'คุณลูเชียนช่วยจูงมือพาฉันเดินไปส่งหน่อยได้ไหมคะ?'",
        "next": "pro_c2_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "พิงแขนลีออน 'คุณลีออนคะ ฉันขอยืมแขนเกาะเดินไปที่ห้องพักหน่อยนะคะ'",
        "next": "pro_c2_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "กอดแขนเคล 'เคล พาฉันเดินไปส่งที่วังหน่อยสิ เริ่มง่วงแล้วล่ะ'",
        "next": "pro_c2_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ผลักทุกคนออก 'ถอยไปให้หมดเลย! อย่ามาโดนตัวฉันนะ!'",
        "next": "pro_c2_wrong",
        "charGain": "all",
        "points": -15
      }
    ],
    "charImg": "assets/char_leon.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_c2_cedric": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_smile.png",
    "bg": "bg-shrine",
    "text": "เซดริกถอดเสื้อคลุมขนสัตว์ของเขามาคลุมไหล่ให้คุณจนมิด แล้วโอบประคองเอวคุณเดินไปอย่างมั่นคง 'อุ่นขึ้นไหม? พิงตัวฉันมาได้เลย ไม่ต้องเกรงใจ'",
    "next": "pro_c2_cedric_ext_1"
  },
  "pro_c2_lucian": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-shrine",
    "text": "ลูเชียนสอดนิ้วประสานกับมือคุณแน่น ความอบอุ่นจากเวทแห่งแสงของเขาทำให้คุณหายเหนื่อยเป็นปลิดทิ้ง 'มือเล็กนิดเดียวเองนะครับ เดี๋ยวผมจูงมือไปส่งให้ถึงห้องเลยนะ'",
    "next": "pro_c2_lucian_ext_1"
  },
  "pro_c2_leon": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-shrine",
    "text": "ลีออนเกร็งแขนให้คุณเกาะอย่างมั่นคงพร้อมก้าวเดินช้าๆ ให้ทันจังหวะก้าวของคุณ 'ค่อยๆ เดินนะครับ ถ้าเมื่อยขาเมื่อไหร่บอกผมได้เลย ผมพร้อมอุ้มคุณเสมอครับ!'",
    "next": "pro_c2_leon_ext_1"
  },
  "pro_c2_kael": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_blush.png",
    "bg": "bg-shrine",
    "text": "เคลชะงักไปนิดที่จู่ๆ คุณก็มากอดแขนเขา ก่อนจะแอบยิ้มเขินแล้วโอบไหล่คุณเดินไป 'อ้อนกันแบบนี้ระวังฉันไม่ยอมปล่อยให้ไปหาคนอื่นนะยัยตัวเล็ก'",
    "next": "pro_c2_kael_ext_1"
  },
  "pro_c2_wrong": {
    "chapter": "บทนำ: กำแพงในใจ",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png",
    "bg": "bg-shrine",
    "text": "ทุกคนชะงักถอยหลังออกไปตามคำพูดของคุณ บรรยากาศระหว่างทางเดินเข้าวังจึงเงียบเหงาและอึดอัด",
    "next": "pro_palace_walk_1"
  },
  "pro_palace_walk_1": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ทางเดินหินอ่อนทอดยาวจากมหาวิหารเข้าสู่ตัวพระราชวังหลวงเอลีเซียม",
    "next": "pro_palace_walk_2",
    "charImg": "assets/char_cedric.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_palace_walk_2": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ตลอดสองข้างทางประดับด้วยโคมไฟคริสตัลสีเหลืองนวลและม่านน้ำพุที่ส่งเสียงไหลรินผ่อนคลาย",
    "next": "pro_palace_walk_3",
    "charImg": "assets/char_leon_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_palace_walk_3": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "สาวใช้ในวังต่างออกมายืนโค้งคำนับต้อนรับคุณอย่างนอบน้อม ก่อนจะเปิดประตูห้องนอนใหญ่ชั้นบนสุดให้",
    "next": "pro_palace_walk_4",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "pro_palace_walk_4": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ภายในห้องนอนตกแต่งอย่างหรูหรา มีเตียงสี่เสาขนาดใหญ่ ผ้าม่านลูกไม้โปร่ง และระเบียงที่มองเห็นสวนกุหลาบได้ทั้งสวน",
    "next": "pro_palace_walk_5",
    "charImg": "assets/char_leon_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_palace_walk_5": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'คืนนี้พักผ่อนให้สบายนะ พรุ่งนี้เช้าพวกเราจะมารับเธอไปทานมื้อเช้าด้วยกัน'",
    "next": "pro_palace_walk_6",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "pro_palace_walk_6": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ราตรีสวัสดิ์นะครับ! ถ้าต้องการอะไรเรียกพวกเราได้ตลอดเวลาเลยนะครับ'",
    "next": "pro_palace_walk_7",
    "charImg": "assets/char_leon_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_palace_walk_7": {
    "chapter": "บทนำ: คืนแรกในพระราชวัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เมื่อประตูปิดลง คุณทิ้งตัวลงนอนบนเตียงนุ่มฟู ความทรงจำของการได้พบกับชายหนุ่มทั้งสี่คนวนเวียนอยู่ในใจจนกระทั่งคุณหลับสนิท...",
    "next": "ch1_start",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_start": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "เช้าวันใหม่ในอาณาจักรเอลีเซียม แสงแดดสีทองส่องลอดหน้าต่างเข้ามาพร้อมเสียงนกร้องสดใส",
    "next": "ch1_p1_2"
  },
  "ch1_p1_2": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "คุณตื่นขึ้นมาล้างหน้าและเปลี่ยนเป็นชุดเดรสสีขาวครีมประดับลูกไม้สีทองที่สาวใช้เตรียมไว้ให้",
    "next": "ch1_p1_3"
  },
  "ch1_p1_3": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "เมื่อเปิดประตูห้องออกมา คุณก็พบว่าชายหนุ่มทั้งสี่คนมายืนรอรับคุณอยู่หน้าห้องพร้อมกันแล้ว!",
    "next": "ch1_p1_4"
  },
  "ch1_p1_4": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'อรุณสวัสดิ์ครับ! เมื่อคืนหลับสบายดีไหมครับ?' ลีออนทักทายด้วยรอยยิ้มสดใสเหมือนแสงตะวันยามเช้า",
    "next": "ch1_p1_5",
    "charImg": "assets/char_leon_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "ch1_p1_5": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ดูจากสีหน้าสดใสของคุณแล้ว เครื่องหอมดอกจันทราของผมคงช่วยให้หลับฝันดีสินะครับ'",
    "next": "ch1_p1_6",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "ch1_p1_6": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไปที่ห้องอาหารกันเถอะ ฉันให้พ่อครัวเตรียมอาหารเช้าไว้ให้เธอเพียบเลย ก่อนที่เราจะต้องเข้าประชุมสภาขุนนางกัน'",
    "next": "ch1_p1_7",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_p1_7": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'โดยเฉพาะทาร์ตเบอร์รี่อบใหม่ที่ฉันแอบไปจิ๊กมาจากเชฟหลวง รับรองอร่อยเหาะเลยล่ะ!'",
    "next": "ch1_p1_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch1_p1_8": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "มื้อเช้าผ่านไปอย่างคึกคัก ทั้งสี่คนต่างคอยตักอาหารและรินชาให้คุณไม่ขาดสายจนจานแทบล้น",
    "next": "ch1_p1_9"
  },
  "ch1_p1_9": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "หลังมื้อเช้า คุณเดินเคียงข้างพวกเขาเข้าสู่โถงสภาขุนนางหลวง ซึ่งมีขุนนางนับร้อยชีวิตกำลังรออยู่",
    "next": "ch1_p1_10"
  },
  "ch1_p1_10": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "แม้ขุนนางส่วนใหญ่จะยินดีกับการมาของคุณ แต่ขุนนางฝ่ายอนุรักษนิยมกลุ่มหนึ่งกลับลุกขึ้นคัดค้านเสียงแข็ง",
    "next": "ch1_p1_11"
  },
  "ch1_p1_11": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ท่านดยุกเซดริก! เราจะมั่นใจได้อย่างไรว่าเด็กสาวต่างมิติคนนี้จะควบคุมพลังแสงดาวได้จริงๆ ไม่ใช่แค่เรื่องบังเอิญ!'",
    "next": "ch1_p1_12",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_p1_12": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกปรายตามองขุนนางคนนั้นด้วยแววตาคมกริบ 'คำพูดของฉันกับมหาปุโรหิตลูเชียนยังไม่พอให้นายเชื่ออีกงั้นเหรอ?'",
    "next": "ch1_p1_13",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_p1_13": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'หากท่านลอร์ดต้องการเห็นกับตา คุณก็พร้อมจะแสดงพลังศักดิ์สิทธิ์ให้ทุกคนประจักษ์ตรงนี้เลยครับ'",
    "next": "ch1_p1_14",
    "charImg": "assets/char_lucian.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch1_p1_14": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ไม่ต้องกลัวนะครับ พวกเราทั้งสี่คนอยู่ข้างคุณตรงนี้แล้ว!'",
    "next": "ch1_choice_council",
    "charImg": "assets/char_leon.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "ch1_choice_council": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เพื่อสยบคำครหาของขุนนางในสภา คุณจะเลือกแสดงความเชื่อมั่นร่วมกับใคร?",
    "choices": [
      {
        "text": "จับมือเซดริก 'ฉันขอใช้อำนาจพันธสัญญาร่วมกับท่านดยุกเซดริกแสดงพลังให้ทุกคนดูค่ะ!'",
        "next": "ch1_c1_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "พยักหน้าให้ลูเชียน 'คุณลูเชียนคะ มาร่ายเวทอวยพรแห่งดวงดาวให้สภาเห็นกันเถอะค่ะ!'",
        "next": "ch1_c1_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "เรียกชื่อลีออน 'คุณลีออนคะ ชักดาบของคุณออกมาแล้วรับพลังแสงดาวจากฉันเลยค่ะ!'",
        "next": "ch1_c1_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "หันไปหาเคล 'เคล ช่วยเอาหลักฐานที่ขุนนางคนนั้นแอบยักยอกงบซ่อมม่านพลังออกมาแฉเลย!'",
        "next": "ch1_c1_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ต่อว่าทุกคนด้วยอารมณ์โมโห 'น่ารำคาญกันจริงๆ! ฉันไม่ทำอะไรทั้งนั้นแหละ!'",
        "next": "ch1_c1_wrong",
        "charGain": "all",
        "points": -20
      }
    ],
    "charImg": "assets/char_cedric.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch1_c1_cedric": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_smile.png",
    "bg": "bg-palace",
    "text": "เมื่อมือของคุณแตะมือเซดริก ออร่าสีทองและสีรัตติกาลก็ผสานกันอย่างทรงพลังจนขุนนางทั้งสภาต้องก้มศีรษะยอมรับ เซดริกกระซิบเบาๆ 'เก่งมาก... สมกับเป็นคนที่ฉันเลือกจริงๆ'",
    "next": "ch1_c1_cedric_ext_1"
  },
  "ch1_c1_lucian": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-palace",
    "text": "ละอองแสงดาวโปรยปรายลงมากลางห้องโถงตามจังหวะที่ลูเชียนกุมมือคุณร่ายเวท ขุนนางทุกคนต่างทึ่งและซาบซึ้ง ลูเชียนยิ้มหวานให้คุณ 'อยู่กับคุณแล้ว พลังของผมอบอุ่นขึ้นตั้งเยอะเลยครับ'",
    "next": "ch1_c1_lucian_ext_1"
  },
  "ch1_c1_leon": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-palace",
    "text": "ลีออนชูดาบที่อาบด้วยพลังแสงดาวของคุณขึ้นสูง แสงเจิดจ้าทำให้ไม่มีใครกล้าคัดค้านอีก ลีออนหันมายิ้มหน้าแดง 'ขอบคุณที่เชื่อใจดาบของผมนะครับ!'",
    "next": "ch1_c1_leon_ext_1"
  },
  "ch1_c1_kael": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_smile.png",
    "bg": "bg-palace",
    "text": "เคลโยนหลักฐานมัดตัวขุนนางเจ้าเล่ห์ลงกลางสภาพร้อมรอยยิ้มสะใจ ขุนนางคนอื่นต่างปรบมือชื่นชมไหวพริบของคุณกับเคล 'เข้าขากันได้ดีแบบนี้ มาเป็นคู่หูฉันเลยไหมยัยตัวแสบ?'",
    "next": "ch1_c1_kael_ext_1"
  },
  "ch1_c1_wrong": {
    "chapter": "บทที่ 1: ความตึงเครียด",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png",
    "bg": "bg-palace",
    "text": "การประชุมจบลงด้วยความตึงเครียด หนุ่มๆ ทั้งสี่ต้องช่วยกันแก้ต่างให้คุณอย่างเหนื่อยอ่อน",
    "next": "ch1_afternoon_1"
  },
  "ch1_afternoon_1": {
    "chapter": "บทที่ 1: กิจกรรมยามบ่าย",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-garden",
    "text": "หลังจากเสร็จสิ้นการประชุมสภาในช่วงเช้า ช่วงบ่ายคุณได้เดินเล่นพักผ่อนในสวนหลวงของพระราชวัง",
    "next": "ch1_afternoon_2"
  },
  "ch1_afternoon_2": {
    "chapter": "บทที่ 1: กิจกรรมยามบ่าย",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-garden",
    "text": "สวนหลวงเต็มไปด้วยดอกไม้นานาพรรณ มีทั้งศาลาจิบชา ลานฝึกซ้อม และทางเดินริมสระน้ำใสสะอาด",
    "next": "ch1_afternoon_3"
  },
  "ch1_afternoon_3": {
    "chapter": "บทที่ 1: กิจกรรมยามบ่าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ช่วงบ่ายนี้เธอว่างแล้ว อยากไปนั่งพักหรืออยากไปดูส่วนไหนของวังเป็นพิเศษไหม?'",
    "next": "ch1_afternoon_4",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "ch1_afternoon_4": {
    "chapter": "บทที่ 1: กิจกรรมยามบ่าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'พวกเราทั้งสี่คนเคลียร์งานช่วงบ่ายไว้เพื่อพาคุณเดินเที่ยวโดยเฉพาะเลยนะครับ!'",
    "next": "ch1_choice_afternoon",
    "charImg": "assets/char_leon_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_choice_afternoon": {
    "chapter": "บทที่ 1: กิจกรรมยามบ่าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บรรยากาศยามบ่ายแสนร่มรื่น คุณจะเลือกใช้เวลาพิเศษช่วงบ่ายนี้กับใคร?",
    "choices": [
      {
        "text": "ไปจิบชาและอ่านหนังสือในห้องสมุดส่วนตัวกับเซดริก",
        "next": "ch1_c2_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ไปชมเรือนกระจกสมุนไพรเวทและปรุงน้ำหอมกับลูเชียน",
        "next": "ch1_c2_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "ไปช่วยลีออนจัดช่อดอกกุหลาบและชมเขาซ้อมดาบ",
        "next": "ch1_c2_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "แอบหนีออกไปเดินเล่นชิมขนมในย่านการค้าหน้าวังกับเคล",
        "next": "ch1_c2_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "เดินหนีกลับห้องโดยไม่บอกใคร ปล่อยให้พวกเขายืนรอเก้อ",
        "next": "ch1_c2_wrong",
        "charGain": "all",
        "points": -15
      }
    ],
    "charImg": "assets/char_leon_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_c2_cedric": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_blush.png",
    "bg": "bg-palace",
    "text": "ในห้องสมุดเงียบสงบ เซดริกนั่งอ่านหนังสือเคียงข้างคุณ พอคุณเผลอพิงไหล่เขา เขาก็ขยับตัวให้คุณพิงได้ถนัดขึ้นพร้อมลูบผมคุณเบาๆ ด้วยความเอ็นดู",
    "next": "ch1_c2_cedric_ext_1"
  },
  "ch1_c2_lucian": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-garden",
    "text": "ลูเชียนแตะน้ำหอมกลิ่นดอกไม้ที่ข้อมือของคุณแล้วก้มลงดมใกล้ๆ ด้วยสายตาหวานซึ้ง 'หอมมากเลยครับ... เป็นกลิ่นที่มีแค่ผมคนเดียวที่ได้อยู่ใกล้ๆ'",
    "next": "ch1_c2_lucian_ext_1"
  },
  "ch1_c2_leon": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-garden",
    "text": "ลีออนโชว์เพลงดาบสุดเท่ให้คุณดู พอคุณปรบมือชม เขาก็เขินจนแก้มแดงแล้วยื่นมงกุฎดอกไม้ที่เขาถักเองมาสวมให้คุณอย่างทะนุถนอม",
    "next": "ch1_c2_leon_ext_1"
  },
  "ch1_c2_kael": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_blush.png",
    "bg": "bg-night",
    "text": "เคลพาคุณใส่เสื้อคลุมมีฮู้ดเดินกินสายไหมในตลาดอย่างสนุกสนาน พอครีมเปื้อนมุมปากคุณ เคลก็ใช้นิ้วโป้งเช็ดออกให้เบาๆ จนหน้าแดงทั้งคู่",
    "next": "ch1_c2_kael_ext_1"
  },
  "ch1_c2_wrong": {
    "chapter": "บทที่ 1: ความว่างเปล่า",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png",
    "bg": "bg-garden",
    "text": "ทั้งสี่คนยืนรอคุณอยู่ในสวนจนพระอาทิตย์ตกดินด้วยความเศร้าสร้อย",
    "next": "ch2_start"
  },
  "ch2_start": {
    "chapter": "บทที่ 2: งานเต้นรำหน้ากาก",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "ค่ำคืนแห่งงานเต้นรำหน้ากากใต้แสงจันทร์มาถึง! ห้องโถงพระราชวังสว่างไสวไปด้วยแสงเทียนและเสียงดนตรี",
    "next": "ch2_p1_2"
  },
  "ch2_p1_2": {
    "chapter": "บทที่ 2: งานเต้นรำหน้ากาก",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "คุณสวมชุดราตรีสุดหรูและหน้ากากคริสตัล ก้าวเข้าสู่งานท่ามกลางสายตาชื่นชมของทุกคน",
    "next": "ch2_p1_3"
  },
  "ch2_p1_3": {
    "chapter": "บทที่ 2: งานเต้นรำหน้ากาก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'วันนี้เธอสวยสะกดสายตาทุกคนในงานเลยนะ... อย่าไปอยู่ห่างจากสายตาพวกเราเชียวล่ะ'",
    "next": "ch2_p1_4",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_blush.png"
  },
  "ch2_p1_4": {
    "chapter": "บทที่ 2: งานเต้นรำหน้ากาก",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เพลงวอลทซ์เปิดฟลอร์เริ่มบรรเลงแล้วครับ! ให้เกียรติเต้นรำเพลงแรกกับพวกเราสักคนนะครับ'",
    "next": "ch2_choice_dance",
    "charImg": "assets/char_leon_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_blush.png"
  },
  "ch2_choice_dance": {
    "chapter": "บทที่ 2: งานเต้นรำหน้ากาก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "หนุ่มหล่อทั้งสี่คนโค้งตัวยื่นมือมาตรงหน้าคุณ คุณจะเลือกเต้นรำเพลงแรกกับใคร?",
    "choices": [
      {
        "text": "เต้นรำกับดยุกเซดริก",
        "next": "ch2_c1_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "เต้นรำกับปุโรหิตลูเชียน",
        "next": "ch2_c1_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "เต้นรำกับอัศวินลีออน",
        "next": "ch2_c1_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "เต้นรำกับจอมโจรเคล",
        "next": "ch2_c1_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ปฏิเสธทุกคนอย่างไร้เยื่อใยกลางฟลอร์เต้นรำ",
        "next": "ch2_c1_wrong",
        "charGain": "all",
        "points": -20
      }
    ],
    "charImg": "assets/char_cedric_blush.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "ch2_c1_cedric": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_blush.png",
    "bg": "bg-palace",
    "text": "เซดริกโอบเอวคุณแนบชิดและพาคุณหมุนตัวกลางฟลอร์อย่างสง่างาม 'สายตาของเธอคืนนี้ มองแค่ฉันคนเดียวก็พอนะ'",
    "next": "ch2_c1_cedric_ext_1"
  },
  "ch2_c1_lucian": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-palace",
    "text": "ลูเชียนพาคุณเต้นรำอย่างนุ่มนวลพลางกระซิบข้างหู 'หัวใจผมเต้นเป็นจังหวะเดียวกับคุณเลยครับ รู้ตัวไหม?'",
    "next": "ch2_c1_lucian_ext_1"
  },
  "ch2_c1_leon": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-palace",
    "text": "ลีออนประคองมือคุณอย่างทะนุถนอม แก้มแดงก่ำด้วยความตื่นเต้น 'คืนนี้เป็นคืนที่ผมมีความสุขที่สุดในชีวิตเลยครับ!'",
    "next": "ch2_c1_leon_ext_1"
  },
  "ch2_c1_kael": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_blush.png",
    "bg": "bg-palace",
    "text": "เคลพาคุณเต้นรำด้วยจังหวะสุดพริ้วไหว ก่อนจะโน้มตัวลงมาใกล้หน้าคุณในตอนจบเพลง 'ขโมยหัวใจฉันไปแล้วยังจะมาขโมยซีนทั้งงานอีกนะยัยตัวแสบ'",
    "next": "ch2_c1_kael_ext_1"
  },
  "ch2_c1_wrong": {
    "chapter": "บทที่ 2: ความอึดอัดกลางงาน",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png",
    "bg": "bg-palace",
    "text": "คุณสะบัดหน้าเดินหนีออกจากฟลอร์เต้นรำ ทิ้งให้ทั้งสี่คนยืนหน้าเสียต่อหน้าแขกเหรื่อทั้งงาน",
    "next": "ch2_garden_1"
  },
  "ch2_garden_1": {
    "chapter": "บทที่ 2: สวนกุหลาบใต้แสงจันทร์",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-night",
    "text": "ช่วงดึกของงานเลี้ยง คุณเดินออกมารับลมที่สวนกุหลาบจันทราซึ่งอาบไล้ด้วยแสงจันทร์สีเงิน",
    "next": "ch2_choice_garden"
  },
  "ch2_choice_garden": {
    "chapter": "บทที่ 2: สวนกุหลาบใต้แสงจันทร์",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ในสวนกุหลาบอันเงียบสงบ คุณอยากใช้เวลาพูดคุยเปิดใจสองต่อสองใต้แสงจันทร์กับใคร?",
    "choices": [
      {
        "text": "เดินชมสวนกุหลาบดำกับเซดริก",
        "next": "ch2_c2_cedric",
        "charGain": "cedric",
        "points": 30
      },
      {
        "text": "นั่งดูดาวริมสระน้ำกับลูเชียน",
        "next": "ch2_c2_lucian",
        "charGain": "lucian",
        "points": 30
      },
      {
        "text": "เดินเล่นรับลมที่ระเบียงสวนกับลีออน",
        "next": "ch2_c2_leon",
        "charGain": "leon",
        "points": 30
      },
      {
        "text": "ปีนขึ้นไปชมวิวบนศาลาหลังคาสูงกับเคล",
        "next": "ch2_c2_kael",
        "charGain": "kael",
        "points": 30
      },
      {
        "text": "ออกปากไล่ทุกคนให้ไปไกลๆ",
        "next": "ch2_c2_wrong",
        "charGain": "all",
        "points": -20
      }
    ],
    "charImg": "assets/char_lucian_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_blush.png"
  },
  "ch2_c2_cedric": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_blush.png",
    "bg": "bg-garden",
    "text": "เซดริกถอดหน้ากากออกแล้วดึงคุณเข้ามากอดเบาๆ ใต้ซุ้มกุหลาบ 'อยู่กับเธอแล้ว กำแพงในใจฉันพังทลายลงหมดเลย...'",
    "next": "ch2_c2_cedric_ext_1"
  },
  "ch2_c2_lucian": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-garden",
    "text": "ลูเชียนให้คุณพิงไหล่ดูดาวตกด้วยกัน 'ผมอธิษฐานขอให้ได้ดูแลคุณแบบนี้ตลอดไปเลยครับ'",
    "next": "ch2_c2_lucian_ext_1"
  },
  "ch2_c2_leon": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-garden",
    "text": "ลีออนกุมมือคุณแนบอกของเขา 'ได้ยินเสียงหัวใจผมไหมครับ มันเต้นแรงขนาดนี้เพราะคุณคนเดียวเลยนะ'",
    "next": "ch2_c2_leon_ext_1"
  },
  "ch2_c2_kael": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_blush.png",
    "bg": "bg-night",
    "text": "เคลจุดพลุเวทมนตร์สีทองให้คุณดูใกล้ๆ ก่อนจะแอบจุ๊บที่หลังมือคุณเบาๆ 'ของขวัญพิเศษสำหรับคืนนี้ ห้ามลืมฉันเด็ดขาดล่ะ'",
    "next": "ch2_c2_kael_ext_1"
  },
  "ch2_c2_wrong": {
    "chapter": "บทที่ 2: ลมหนาวที่พัดผ่าน",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png",
    "bg": "bg-garden",
    "text": "ทุกคนยอมถอยกลับเข้าไปในงานด้วยแววตาเศร้าหมอง",
    "next": "ch3_start"
  },
  "ch3_start": {
    "chapter": "บทที่ 3: วิกฤตคืนจันทร์สีเลือด",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-night",
    "text": "คืนต่อมา ดวงจันทร์บนฟ้ากลายเป็นสีเลือด! กองทัพมอนสเตอร์เงาบุกโจมตีพระราชวังเอลีเซียมครั้งใหญ่!",
    "next": "ch3_p1_2"
  },
  "ch3_p1_2": {
    "chapter": "บทที่ 3: วิกฤตคืนจันทร์สีเลือด",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'ทุกคนเตรียมพร้อมรับมือ! เราต้องคุ้มกันเธอไปที่แท่นพิธีวิหารดวงดาวเพื่อเปิดม่านพลังขั้นสูงสุด!'",
    "next": "ch3_p1_3",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch3_p1_3": {
    "chapter": "บทที่ 3: วิกฤตคืนจันทร์สีเลือด",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'พวกมอนสเตอร์กำลังล้อมเข้ามาแล้ว! คุณต้องเลือกส่งพลังแสงดาวให้หนึ่งในพวกเราเพื่อทะลวงฝูงบอสมอนสเตอร์ครับ!'",
    "next": "ch3_choice_battle",
    "charImg": "assets/char_lucian.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "ch3_choice_battle": {
    "chapter": "บทที่ 3: วิกฤตคืนจันทร์สีเลือด",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ศึกตัดสินชะตาของเอลีเซียมมาถึงแล้ว! คุณจะวิ่งเข้าไปประสานมือส่งพลังแสงดาวทั้งหมดให้กับใคร?",
    "choices": [
      {
        "text": "ส่งพลังให้ ดยุกเซดริก",
        "next": "ch3_c1_cedric",
        "charGain": "cedric",
        "points": 40
      },
      {
        "text": "ส่งพลังให้ มหาปุโรหิตลูเชียน",
        "next": "ch3_c1_lucian",
        "charGain": "lucian",
        "points": 40
      },
      {
        "text": "ส่งพลังให้ อัศวินลีออน",
        "next": "ch3_c1_leon",
        "charGain": "leon",
        "points": 40
      },
      {
        "text": "ส่งพลังให้ จอมโจรเคล",
        "next": "ch3_c1_kael",
        "charGain": "kael",
        "points": 40
      },
      {
        "text": "วิ่งหนีเอาตัวรอดคนเดียว ทิ้งให้พวกเขาบาดเจ็บ",
        "next": "ch3_c1_wrong",
        "charGain": "all",
        "points": -25
      }
    ],
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch3_c1_cedric": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric_smile.png",
    "bg": "bg-palace",
    "text": "เซดริกผสานพลังกับคุณโค่นบอสมอนสเตอร์ลงในดาบเดียว ก่อนจะรีบดึงคุณเข้ามากอดแน่นด้วยความโล่งอก 'ขอบคุณพระเจ้าที่เธอปลอดภัย... ฉันรักและเป็นห่วงเธอแทบขาดใจเลยรู้ไหม'",
    "next": "ch3_c1_cedric_ext_1"
  },
  "ch3_c1_lucian": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "charImg": "assets/char_lucian_blush.png",
    "bg": "bg-shrine",
    "text": "ลูเชียนร่ายเวทดาราพร้อมกับคุณจนความมืดสลายหายไปหมดสิ้น เขาประคองใบหน้าคุณด้วยความรักใคร่ 'ขอบคุณที่เลือกเชื่อใจผมนะครับ คุณคือแสงสว่างเดียวในชีวิตผมเลย'",
    "next": "ch3_c1_lucian_ext_1"
  },
  "ch3_c1_leon": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "leon",
    "char": "leon",
    "charImg": "assets/char_leon_blush.png",
    "bg": "bg-palace",
    "text": "ลีออนพุ่งเข้าฟันศัตรูจนพ่ายแพ้แล้วรีบวิ่งมากอดคุณไว้แน่น 'คุณไม่บาดเจ็บตรงไหนใช่ไหมครับ! ผมดีใจที่สุดเลยที่ปกป้องคุณไว้ได้!'",
    "next": "ch3_c1_leon_ext_1"
  },
  "ch3_c1_kael": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "kael",
    "char": "kael",
    "charImg": "assets/char_kael_blush.png",
    "bg": "bg-night",
    "text": "เคลใช้พลังของคุณจัดการบอสอย่างรวดเร็ว แม้จะได้แผลถลอกแต่เขากลับยิ้มกว้างพลางลูบหัวคุณ 'อย่าร้องไห้สิยัยบ๊อง แค่เธอปลอดภัย ฉันก็ไม่เป็นไรสักนิด!'",
    "next": "ch3_c1_kael_ext_1"
  },
  "ch3_c1_wrong": {
    "chapter": "บทที่ 3: บาดแผลในใจ",
    "speaker": "cedric",
    "char": "cedric",
    "charImg": "assets/char_cedric.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png",
    "bg": "bg-night",
    "text": "ทั้งสี่คนต้องฝืนสู้จนบาดเจ็บสาหัสกว่าจะเอาชนะได้ พวกเขามองคุณด้วยความเสียใจ",
    "next": "route_branch_evaluation"
  },
  "route_branch_evaluation": {
    "chapter": "จุดเปลี่ยนโชคชะตา: เสียงเรียกร้องของหัวใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "หลังผ่านพ้นวิกฤตการณ์ทั้งหมดมาด้วยกัน ตอนนี้ได้เวลาตัดสินแล้วว่า... ชายหนุ่มที่คุณผูกพันด้วยมากที่สุดและจะได้ก้าวเข้าสู่รูทความรักด้วยคือใคร!",
    "next": "eval_trigger",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "eval_trigger": {
    "chapter": "จุดเปลี่ยนโชคชะตา: เสียงเรียกร้องของหัวใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "หัวใจของคุณกำลังเต้นแรง... ใครกันนะที่จะเดินเข้ามาจับมือคุณ?",
    "isBranchEvaluation": true,
    "charImg": "assets/char_leon_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_blush.png"
  },
  "cedric_branch_start": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกเดินเข้ามากุมมือคุณอย่างอ่อนโยนต่อหน้าทุกคน 'ไปกันเถอะ... ต่อจากนี้มาอยู่ที่ปราสาทราเวนครอสต์กับฉัน ฉันจะดูแลเธอเอง'",
    "charImg": "assets/char_cedric_smile.png",
    "next": "cedric_ep1_2"
  },
  "cedric_ep1_2": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ท่ามกลางสายตาของอีกสามคนที่มองตามด้วยความเสียดาย คุณเดินเคียงข้างเซดริกมุ่งหน้าไปยังปราสาทดยุกราเวนครอสต์",
    "next": "cedric_ep1_sub_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_3": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ถึงแล้วล่ะ นี่คือปราสาทดยุกราเวนครอสต์ ต่อจากนี้ไปให้คิดซะว่าที่นี่คือบ้านของเธอเลยนะ'",
    "next": "cedric_ep1_4",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_4": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "บรรยากาศภายในปราสาทดยุกราเวนครอสต์ถูกจัดเตรียมไว้อย่างสวยงามและอบอุ่น มีมุมพักผ่อนที่มีแสงแดดส่องถึง",
    "next": "cedric_ep1_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_5": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ฉันให้คนจัดห้องพักของเธอไว้ติดกับห้องของฉันเลย ถ้ามีอะไรตอนกลางคืนจะได้เรียกหากันได้ทันที'",
    "next": "cedric_ep1_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_6": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณเดินสำรวจรอบๆ ห้องพัก พบว่ามีทั้งดอกไม้สด หมอนอิงนุ่มๆ และหนังสืออ่านเล่นที่คุณชอบวางเตรียมไว้ครบถ้วน",
    "next": "cedric_ep1_7",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_7": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'กะ... ก็ฉันแอบสังเกตมาตลอดนี่นาว่าเธอชอบอะไรบ้าง เลยเตรียมไว้ให้ถูกใจเธอยังไงล่ะ'",
    "next": "cedric_ep1_8",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_8": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณยิ้มให้กับความใส่ใจของเขา ก่อนที่เขาจะพาคุณมานั่งพักที่โซฟาริมหน้าต่าง",
    "next": "cedric_ep1_9",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_9": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เดี๋ยวฉันไปเตรียมของว่างมาให้นะ วันนี้จะโชว์ฝีมือชงชาเอิร์ลเกรย์และดูแลกุหลาบดำให้เธอลองชิมดู'",
    "next": "cedric_ep1_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_10": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ไม่นานนัก เซดริกก็เดินถือถาดชาร้อนหอมกรุ่นและขนมหน้าตาน่าทานมาวางตรงหน้าคุณ",
    "next": "cedric_ep1_11",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_11": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ลองชิมดูสิ หวานกำลังดีหรือเปล่า?'",
    "next": "cedric_ep1_12",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_12": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณตักขนมเข้าปากคำแรก รสชาติหวานละมุนละลายในปากจนคุณเผลอยิ้มกว้างออกมา",
    "next": "cedric_ep1_13",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_13": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "พอเห็นรอยยิ้มของคุณ เขาก็มองเพลินจนแก้มแดง 'เห็นเธอกินอย่างมีความสุขแบบนี้ คนทำก็หายเหนื่อยเป็นปลิดทิ้งเลยแฮะ'",
    "next": "cedric_ep1_14",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_14": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "จู่ๆ เขาก็ยื่นมือมาแตะที่มุมปากของคุณเบาๆ 'มีครีมติดแก้มแน่ะ... อยู่กับฉันสองคนแล้วระวังตัวหน่อยสิ น่ารักเกินไปเดี๋ยวฉันก็อดใจไม่ไหวหรอก'",
    "next": "cedric_ep1_15",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_15": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "สัมผัสอุ่นๆ จากปลายนิ้วของเขาทำให้หัวใจของคุณเต้นรัวเร็วขึ้นทันที",
    "next": "cedric_ep1_16",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_16": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'หลังจากผ่านเรื่องวุ่นวายมาหลายวัน ในที่สุดฉันก็ได้ใช้เวลาเงียบๆ กับเธอสองคนสักทีนะ'",
    "next": "cedric_ep1_17",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_17": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ตอนอยู่ในวิหาร ตอนที่ยังไม่รู้ว่าเธอจะเลือกใคร... สารภาพตามตรงเลยว่าฉันลุ้นแทบแย่'",
    "next": "cedric_ep1_18",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_18": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาขยับมานั่งชิดคุณบนโซฟาตัวเดียวกัน จนไหล่ของคุณทั้งคู่แตะกันเบาๆ",
    "next": "cedric_ep1_19",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_19": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ถามจริงๆ เถอะ... อะไรทำให้เธอตัดสินใจเลือกเดินมาหาฉันแทนที่จะเป็นอีกสามคนนั้นเหรอ?'",
    "next": "cedric_ep1_20",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_20": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ดวงตาของเขามองลึกเข้ามาในดวงตาของคุณอย่างรอคอยคำตอบ",
    "next": "cedric_ep1_21",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_21": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'คนอื่นมักจะมองฉันจากภาพลักษณ์ภายนอกเสมอ มีแค่เธอคนเดียวที่มองเข้ามาถึงตัวตนจริงๆ ของฉัน'",
    "next": "cedric_ep1_22",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_22": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ลมยามบ่ายพัดผ้าม่านปลิวเบาๆ กลิ่นหอมประจำตัวของเขาลอยมาแตะจมูก",
    "next": "cedric_ep1_23",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_23": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'บอกให้ฉันชื่นใจหน่อยสิ... ว่าเธอคิดยังไงกับฉันกันแน่?'",
    "next": "cedric_ep1_choice",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_choice": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกจ้องตาคุณด้วยความคาดหวังและเขินอาย คุณจะตอบเขาว่าอย่างไร?",
    "charImg": "assets/char_cedric_blush.png",
    "choices": [
      {
        "text": "กุมมือเขาไว้ 'เพราะเวลาอยู่กับเซดริก ฉันรู้สึกอบอุ่นและเป็นตัวเองได้มากที่สุดเลยค่ะ'",
        "next": "cedric_ep1_good_1",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ดึงมือกลับ 'ฉันก็แค่เลือกไปงั้นแหละค่ะ ไม่ได้คิดอะไรพิเศษสักหน่อย'",
        "next": "cedric_ep1_bad_1",
        "charGain": "cedric",
        "points": -15
      }
    ]
  },
  "cedric_ep1_good_1": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกหน้าแดงจัด รอยยิ้มกว้างปรากฏขึ้นบนใบหน้าหล่อเหลา 'พูดจาน่ารักแบบนี้... ระวังฉันจะกอดไม่ปล่อยนะ!'",
    "next": "cedric_ep1_good_1_ext_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_good_2": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาดึงคุณเข้าไปกอดแนบอกอย่างทะนุถนอม เสียงหัวใจของเขาเต้นดังตึกตักอยู่ข้างหูคุณ",
    "next": "cedric_ep1_good_3",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_good_3": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะ... ฉันจะทำให้ทุกวันที่เธออยู่กับฉันมีแต่รอยยิ้มเลย คอยดูสิ'",
    "next": "cedric_ep1_good_4",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_good_4": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณสองคนนั่งพูดคุยและหัวเราะด้วยกันจนกระทั่งแสงอาทิตย์ยามเย็นค่อยๆ ลับขอบฟ้าไป",
    "next": "cedric_ep2_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_bad_1": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกชะงักไป แววตาที่เคยเป็นประกายหม่นแสงลงทันที 'งั้นเหรอ... นั่นสินะ ฉันคงคิดเข้าข้างตัวเองมากเกินไป'",
    "next": "cedric_ep1_bad_1_ext_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_bad_2": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาฝืนยิ้มบางๆ แล้วลุกขึ้นเก็บถ้วยชาด้วยท่าทางเงียบขรึม",
    "next": "cedric_ep1_bad_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_bad_3": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่เป็นไรหรอก เธอพักผ่อนตามสบายเถอะนะ เดี๋ยวฉันออกไปเดินรับลมข้างนอกสักหน่อย'",
    "next": "cedric_ep1_bad_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_bad_4": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "บรรยากาศในห้องดูเหงาหงอยลงถนัดตา ก่อนจะผ่านพ้นวันแรกไป",
    "next": "cedric_ep2_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_1": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา อากาศแจ่มใสเป็นพิเศษ เซดริกมารอรับคุณที่หน้าห้องด้วยชุดลำลองที่ดูหล่อเหลาไปอีกแบบ",
    "next": "cedric_ep2_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_2": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'อรุณสวัสดิ์! วันนี้ฉันเคลียร์งานทั้งหมดไว้แล้ว เราออกไปเดทกันที่เรือนกระจกกุหลาบดำและสวนน้ำพุกันเถอะ'",
    "next": "cedric_ep2_sub_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_3": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "พอได้ยินคำว่า 'เดท' จากปากเขาตรงๆ คุณก็แอบแก้มร้อนผ่าวขึ้นมาทันที",
    "next": "cedric_ep2_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_4": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไม่ต้องทำหน้าเขินแบบนั้นเลย... ก็เราสองคนกำลังศึกษาดูใจกันอยู่ไม่ใช่เหรอ เรียกว่าเดทน่ะถูกแล้ว'",
    "next": "cedric_ep2_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_5": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขายื่นมือมาให้คุณจับ แล้วพาคุณเดินออกไปยังเรือนกระจกกุหลาบดำและสวนน้ำพุท่ามกลางสายลมอ่อนๆ",
    "next": "cedric_ep2_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_6": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ที่เรือนกระจกกุหลาบดำและสวนน้ำพุบรรยากาศสดชื่นมาก มีดอกไม้หลากสีสันบานสะพรั่งและผีเสื้อบินวนอยู่รอบๆ",
    "next": "cedric_ep2_7",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_7": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ที่นี่เป็นสถานที่โปรดของฉันเลยล่ะ เวลาเครียดๆ ฉันชอบแวะมาเดินเล่นที่นี่คนเดียว'",
    "next": "cedric_ep2_8",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_8": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'แต่วันนี้พอมีเธอเดินจับมืออยู่ข้างๆ แบบนี้... ที่นี่ดูสวยขึ้นกว่าเดิมตั้งเยอะเลยนะ'",
    "next": "cedric_ep2_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_9": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ระหว่างเดินชมวิว มีซุ้มขายเครื่องประดับคริสตัลและของที่ระลึกตั้งอยู่ริมทางเดิน",
    "next": "cedric_ep2_10",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_10": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณหยุดมองสร้อยข้อมือประดับจี้รูปดาวชิ้นหนึ่งที่ส่องประกายวิบวับ",
    "next": "cedric_ep2_11",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_11": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกสังเกตเห็นสายตาของคุณ จึงแอบซื้อสร้อยข้อมือเส้นนั้นมาแล้วยื่นมาสวมให้ที่ข้อมือของคุณทันที!",
    "next": "cedric_ep2_12",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_12": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ฉันซื้อให้เป็นของขวัญเดทแรกของเรานะ... ใส่ติดตัวไว้ตลอดล่ะ คนอื่นจะได้รู้ว่าเธอมีเจ้าของแล้ว'",
    "next": "cedric_ep2_13",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_13": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณก้มมองสร้อยข้อมือที่เข้ากับข้อมือของคุณพอดีเป๊ะด้วยความประทับใจ",
    "next": "cedric_ep2_14",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_14": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไปนั่งพักตรงม้านั่งใต้ต้นไม้ใหญ่กันเถอะ ฉันเตรียมตะกร้าปิกนิกมาเผื่อเธอด้วยนะ'",
    "next": "cedric_ep2_15",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_15": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าและหยิบแซนด์วิชผลไม้กับน้ำผลไม้เย็นชื่นใจออกมาจัดวาง",
    "next": "cedric_ep2_16",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_16": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'อ้าปากสิ เดี๋ยวฉันป้อนคำแรกให้เอง'",
    "next": "cedric_ep2_17",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_17": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขายื่นชิ้นขนมมาจ่อที่ริมฝีปากของคุณด้วยแววตาพราวระยับ",
    "next": "cedric_ep2_18",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_18": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ถ้าไม่ยอมให้ป้อน ฉันจะถือว่าเธออยากให้ฉันป้อนด้วยวิธีอื่นนะ...'",
    "next": "cedric_ep2_19",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_19": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "หลังจากอิ่มอร่อยกับมื้อเที่ยง ลมพัดกลีบดอกไม้ปลิวลงมาติดบนเส้นผมของคุณ",
    "next": "cedric_ep2_20",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_20": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกขยับตัวเข้ามาใกล้มากจนลมหายใจอุ่นๆ รินรดหน้าผากของคุณ เขาค่อยๆ หยิบกลีบดอกไม้ออกจากผมให้คุณ",
    "next": "cedric_ep2_21",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_21": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'อยู่ใกล้กันแค่นี้... ได้ยินเสียงหัวใจฉันเต้นแรงไหม?'",
    "next": "cedric_ep2_choice",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_choice": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ใบหน้าของเซดริกอยู่ห่างจากคุณเพียงแค่คืบเดียว คุณจะทำอย่างไรในวินาทีสุดโรแมนติกนี้?",
    "charImg": "assets/char_cedric_blush.png",
    "choices": [
      {
        "text": "ยิ้มหวานแล้วขยับเข้าไปหอมแก้มเขาเบาๆ 'ขอบคุณสำหรับเดทวันนี้และสร้อยข้อมือสวยๆ นะคะ'",
        "next": "cedric_ep2_good_1",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "รีบผลักอกเขาออกห่าง 'ถอยออกไปหน่อยค่ะ คนมองเยอะแยะ น่าอายจะตาย!'",
        "next": "cedric_ep2_bad_1",
        "charGain": "cedric",
        "points": -15
      }
    ]
  },
  "cedric_ep2_good_1": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกเบิกตากว้างด้วยความตกใจ ก่อนที่ใบหน้าจะแดงก่ำไปถึงใบหู!",
    "next": "cedric_ep2_good_1_ext_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_good_2": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ธะ... เธอหอมแก้มฉันก่อนแบบนี้ ขี้โกงชะมัดเลย! รู้ไหมว่าฉันเกือบห้ามใจไม่อยู่แล้วนะ!'",
    "next": "cedric_ep2_good_3",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_good_3": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขาคว้ามือคุณมากุมไว้แน่นแล้วจุ๊บลงที่หลังมือคุณเป็นการเอาคืนอย่างแสนรัก",
    "next": "cedric_ep2_good_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_good_4": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'วันนี้เป็นวันที่ฉันมีความสุขที่สุดเลย ไว้เรามาเดทกันแบบนี้อีกบ่อยๆ นะ'",
    "next": "cedric_ep3_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_bad_1": {
    "chapter": "รูทเซดริก บทที่ 2: ระยะห่าง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกชะงักถอยออกมาตามแรงผลักของคุณ แววตาฉายแววเสียดายและเศร้าหมอง",
    "next": "cedric_ep2_bad_1_ext_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_bad_2": {
    "chapter": "รูทเซดริก บทที่ 2: ระยะห่าง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ขอโทษที... ฉันคงเผลอเข้าใกล้เธอมากเกินไปจนทำให้เธออึดอัดสินะ'",
    "next": "cedric_ep2_bad_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_bad_3": {
    "chapter": "รูทเซดริก บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างเดินกลับจึงเงียบเชียบลงเล็กน้อย",
    "next": "cedric_ep3_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_1": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บ่ายวันถัดมา ขณะที่คุณกับเซดริกกำลังเดินเล่นพูดคุยกันอยู่ในสวนหลวงอย่างอารมณ์ดี",
    "next": "cedric_ep3_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_2": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "จู่ๆ เคลก็เดินตรงเข้ามาโบกมือทักทายคุณด้วยรอยยิ้มสดใส!",
    "next": "cedric_ep3_3",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_3": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'บังเอิญจังเลยนะที่ได้เจอเธอที่นี่! ไม่ได้คุยกันตั้งหลายวัน คิดถึงเธอชะมัดเลย'",
    "next": "cedric_ep3_4",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_4": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ทันทีที่เห็นเคลเดินเข้ามาใกล้คุณ เซดริกก็รีบขยับตัวมายืนบังหน้าคุณไว้ครึ่งหนึ่งทันที!",
    "next": "cedric_ep3_5",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_5": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'มีธุระอะไรไม่ทราบ เคล? ตอนนี้เธอกำลังใช้เวลาอยู่กับฉันนะ'",
    "next": "cedric_ep3_6",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_6": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เคลเลิกคิ้วขึ้นพลางส่งยิ้มกวนๆ ให้เซดริก 'แหมๆ หวงจังเลยนะ ฉันแค่เอาขนมร้านดังมาฝากเธอเฉยๆ เอง'",
    "next": "cedric_ep3_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_7": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "แล้วเคลก็ชะโงกหน้ามาคุยกับคุณ 'นี่ อยู่แต่กับหมอนี่ทั้งวันไม่เบื่อแย่เหรอ? ไปเดินเล่นชมวิวกับฉันสักชั่วโมงไหมล่ะ?'",
    "next": "cedric_ep3_8",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_8": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บรรยากาศรอบตัวเซดริกทะมึนลงทันที! เขาคว้าเอวคุณดึงเข้ามาชิดตัวเขาต่อหน้าต่อตาเคล!",
    "next": "cedric_ep3_9",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_9": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เธอไม่ว่างไปไหนกับนายทั้งนั้นแหละ เพราะตารางเวลาของเธอเป็นของฉันคนเดียว!'",
    "next": "cedric_ep3_10",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_10": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เจ้าตัวเขายังไม่ได้ตอบสักหน่อย นายอย่าเพิ่งคิดเองเออเองสิ ลองถามเธอดูก่อนไหมล่ะ?'",
    "next": "cedric_ep3_11",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_11": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกหันมามองคุณด้วยสายตาที่ทั้งดุและเว้าวอนปนหึงหวงสุดขีด 'บอกหมอนี่ไปสิว่าเธอจะอยู่กับใคร...'",
    "next": "cedric_ep3_choice",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_choice": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ทั้งเซดริกและเคลต่างมองมาที่คุณเพื่อรอคำตอบ คุณจะทำอย่างไรกับสถานการณ์ชวนหึงนี้?",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png",
    "choices": [
      {
        "text": "กอดแขนเซดริกแน่น 'ขอบคุณนะคะคุณเคล แต่ฉันอยากอยู่กับเซดริกแค่สองคนค่ะ'",
        "next": "cedric_ep3_good_1",
        "charGain": "cedric",
        "points": 30
      },
      {
        "text": "ทำท่าจะเดินไปหาเคล 'จริงด้วยค่ะ อยู่กับเซดริกชักเริ่มเบื่อแล้ว ไปเที่ยวกันเถอะ!'",
        "next": "cedric_ep3_bad_1",
        "charGain": "cedric",
        "points": -20
      }
    ]
  },
  "cedric_ep3_good_1": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "พอได้ยินคำตอบของคุณ เซดริกก็ยิ้มกว้างอย่างผู้ชนะทันที! เขาโอบไหล่คุณแน่นขึ้นกว่าเดิม",
    "next": "cedric_ep3_good_1_ext_1",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_good_2": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ได้ยินชัดเต็มสองหูแล้วนะเคล เธอบอกว่าอยากอยู่กับฉันแค่สองคน เชิญนายกลับไปได้แล้ว'",
    "next": "cedric_ep3_good_3",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_good_3": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เคลยกมือยอมแพ้พร้อมหัวเราะเบาๆ 'ก็ได้ๆ ยอมแพ้แล้วจ้า ดูแลเธอดีๆ ล่ะ ถ้าทำเธอร้องไห้เมื่อไหร่ฉันมาแย่งคืนแน่!'",
    "next": "cedric_ep3_good_4",
    "charImg": "assets/char_cedric_smile.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_good_4": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เมื่อเคลเดินจากไปแล้ว เซดริกก็หันมามองคุณด้วยแก้มแดงระเรื่อ",
    "next": "cedric_ep3_after_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_bad_1": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกรีบคว้าข้อมือคุณไว้แน่น แววตาของเขาฉายแววเจ็บปวดและน้อยใจอย่างปิดไม่มิด",
    "next": "cedric_ep3_bad_1_ext_1",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "cedric_ep3_bad_2": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'อย่าพูดว่าจะไปกับผู้ชายคนอื่นต่อหน้าฉันแบบนั้นสิ... เธอไม่รู้เลยเหรอว่าฉันหวงเธอแค่ไหน'",
    "next": "cedric_ep3_bad_3",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_bad_3": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เห็นสีหน้าจริงจังของเซดริกแล้ว เคลจึงยอมถอยหลังให้ 'เอาล่ะๆ ฉันแค่แซวเล่นเฉยๆ พวกเธอคุยกันดีๆ เถอะนะ'",
    "next": "cedric_ep3_bad_4",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael.png"
  },
  "cedric_ep3_bad_4": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เมื่อเหลือกันแค่สองคน คุณจึงต้องรีบง้อเซดริกที่กำลังงอนตุ๊บป่องอยู่",
    "next": "cedric_ep3_after_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_1": {
    "chapter": "รูทเซดริก บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ห้ามไปยิ้มหวานให้คนอื่นแบบเมื่อกี้อีกนะ... เวลาเห็นผู้ชายคนอื่นมายุ่งกับเธอ ใจฉันมันร้อนรุ่มไปหมดเลย'",
    "next": "cedric_ep3_after_2",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_2": {
    "chapter": "รูทเซดริก บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาซบหน้าลงกับไหล่ของคุณเหมือนลูกแมวตัวโตๆ ที่กำลังอ้อนเจ้าของ",
    "next": "cedric_ep3_after_sub_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_3": {
    "chapter": "รูทเซดริก บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ฉันไม่เคยขี้หึงหรือขี้หวงใครขนาดนี้มาก่อนเลยนะ... ทั้งหมดเป็นเพราะเธอคนเดียวเลยรู้ตัวไหม'",
    "next": "cedric_ep3_after_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_4": {
    "chapter": "รูทเซดริก บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณลูบผมนุ่มๆ ของเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มออกมาได้อีกครั้ง",
    "next": "cedric_ep4_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_1": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "คืนหนึ่งในสัปดาห์ต่อมา พายุฝนกระหน่ำลงมาอย่างหนัก เสียงฟ้าร้องคำรามก้องไปทั่วทั้งปราสาท",
    "next": "cedric_ep4_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_2": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงถือตะเกียงเดินไปดูที่ห้องของเซดริก และพบว่าเขากำลังยืนมองสายฝนอยู่ที่หน้าต่างเพียงลำพัง",
    "next": "cedric_ep4_sub_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_3": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เมื่อได้ยินเสียงคุณเดินเข้ามา เขาก็หันมามองด้วยแววตาที่ดูเปราะบางผิดไปจากเวลาปกติ",
    "next": "cedric_ep4_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_4": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ยังไม่นอนอีกเหรอ? หรือว่าเสียงฟ้าร้องทำให้เธอนอนไม่หลับกันล่ะ'",
    "next": "cedric_ep4_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_5": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "คุณเดินเข้าไปหาเขาแล้วแตะที่มือของเขา พบว่ามือของเขาเย็นเฉียบ",
    "next": "cedric_ep4_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_6": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เขาหลุบตามองมือของคุณที่กุมมือเขาไว้ ก่อนจะถอนหายใจออกมาเบาๆ",
    "next": "cedric_ep4_7",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_7": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ความจริงแล้ว... ทุกครั้งที่ฝนตกหนักแบบนี้ ฉันมักจะนึกถึงเรื่องในอดีตที่ไม่อยากจำอยู่เสมอน่ะ'",
    "next": "cedric_ep4_8",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_8": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "คุณพาเขามานั่งลงที่หน้าเตาผิงไฟอุ่นๆ และรับฟังเขาอย่างตั้งใจ",
    "next": "cedric_ep4_9",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_9": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ตอนเด็กฉันเคยถูกคนในตระกูลหักหลังและลอบทำร้ายเพราะแย่งชิงตำแหน่งดยุก ตั้งแต่นั้นมาฉันก็เลยสร้างกำแพงเย็นชาขึ้นมาเพื่อปกป้องตัวเอง ไม่กล้าไว้ใจหรือรักใครอีกเลย... จนกระทั่งได้มาเจอเธอ'",
    "next": "cedric_ep4_10",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_10": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "น้ำเสียงของเขาสั่นเครือเล็กน้อยเมื่อเล่าถึงบาดแผลในใจที่ไม่เคยเปิดเผยให้ใครฟังมาก่อน",
    "next": "cedric_ep4_11",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_11": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'บางครั้งฉันก็แอบกลัวนะ... ว่าถ้าเธอรู้อดีตและด้านที่อ่อนแอของฉันแล้ว เธอจะมองฉันเปลี่ยนไปหรือเปล่า'",
    "next": "cedric_ep4_choice",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_choice": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เซดริกเปิดเปลือยความลับและบาดแผลในใจให้คุณฟังทั้งหมด คุณจะปลอบโยนเขาอย่างไร?",
    "charImg": "assets/char_cedric.png",
    "choices": [
      {
        "text": "ดึงเขามากอดแน่น 'ไม่เปลี่ยนไปแน่นอนค่ะ ต่อไปนี้ฉันจะอยู่เคียงข้างไม่ให้เซดริกต้องเจ็บปวดอีกแล้วนะ'",
        "next": "cedric_ep4_good_1",
        "charGain": "cedric",
        "points": 30
      },
      {
        "text": "ขยับถอยห่าง 'ไม่นึกเลยว่าคุณจะมีปมปัญหาเยอะขนาดนี้ ฟังแล้วอึดอัดจังค่ะ'",
        "next": "cedric_ep4_bad_1",
        "charGain": "cedric",
        "points": -20
      }
    ]
  },
  "cedric_ep4_good_1": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกกอดตอบคุณแน่นราวกับคุณคือสิ่งล้ำค่าที่สุดในชีวิต ความอบอุ่นจากอ้อมกอดของคุณช่วยละลายความหนาวเหน็บในใจของเขาจนหมดสิ้น",
    "next": "cedric_ep4_good_1_ext_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep4_good_2": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะ... แค่มีเธอกอดฉันไว้แบบนี้ เรื่องเลวร้ายในอดีตก็ไม่สำคัญสำหรับฉันอีกต่อไปแล้ว'",
    "next": "cedric_ep4_good_3",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep4_good_3": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'คืนนี้อยู่เป็นเพื่อนฉันจนกว่าพายุจะสงบได้ไหม... แค่นอนจับมือกันเฉยๆ ก็พอ สัญญาว่าจะไม่ทำอะไรเกินเลยจริงๆ'",
    "next": "cedric_ep4_good_4",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_good_4": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คืนนั้นคุณและเขานอนกุมมือกันอยู่ข้างเตาผิงอุ่นๆ จนหลับใหลไปด้วยกันอย่างมีความสุข",
    "next": "cedric_ep5_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_bad_1": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกหลับตาลงซ่อนความเจ็บปวดในแววตา 'นั่นสินะ... ฉันไม่น่าเล่าเรื่องน่าเบื่อให้เธอฟังเลย ขอโทษด้วยนะ'",
    "next": "cedric_ep4_bad_1_ext_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_bad_2": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ทิ้งให้เขานั่งมองเปลวไฟในเตาผิงเพียงลำพัง",
    "next": "cedric_ep5_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_1": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา เกิดเรื่องใหญ่ขึ้นในอาณาจักร! สภาตระกูลขุนนางเก่าแก่พยายามยื่นคำขาดให้เซดริกแต่งงานการเมืองกับตระกูลอื่น โดยอ้างว่าคุณเป็นคนต่างมิติที่ไม่มีฐานะทางสังคม",
    "next": "cedric_ep5_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_2": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ข่าวลือแพร่สะพัดไปทั่วพระราชวัง จนผู้คนต่างจับตามองว่าความสัมพันธ์ของคุณสองคนจะผ่านวิกฤตนี้ไปได้หรือไม่",
    "next": "cedric_ep5_sub_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_3": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกเดินเข้ามาหาคุณและจับมือทั้งสองข้างของคุณไว้แน่น แววตาของเขาแน่วแน่และมั่นคงไร้ความลังเล",
    "next": "cedric_ep5_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_4": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไม่ต้องกังวลกับคำพูดของคนอื่นนะ ไม่ว่าจะเกิดอะไรขึ้น ฉันจะไม่มีวันยอมปล่อยมือเธอเด็ดขาด'",
    "next": "cedric_ep5_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_5": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ขอแค่เธอยืนยันคำเดียวว่าพร้อมจะสู้ไปกับฉัน... ต่อให้ต้องงัดข้อกับคนทั้งอาณาจักร ฉันก็พร้อมลุย!'",
    "next": "cedric_ep5_choice",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep5_choice": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ตรงหน้าคือบททดสอบครั้งใหญ่ของความรัก คุณจะจับมือสู้ไปกับเซดริกหรือไม่?",
    "charImg": "assets/char_cedric.png",
    "choices": [
      {
        "text": "บีบมือเขาแน่น 'ไปลุยด้วยกันเลยค่ะเซดริก! ไม่ว่าจะมีอุปสรรคอะไร ฉันก็จะอยู่เคียงข้างคุณเสมอ!'",
        "next": "cedric_ep5_good_1",
        "charGain": "cedric",
        "points": 35
      },
      {
        "text": "ปล่อยมือด้วยความกลัว 'มันยากเกินไปค่ะ เราสองคนยอมแพ้แยกทางกันแค่นี้เถอะ'",
        "next": "cedric_ep5_bad_1",
        "charGain": "cedric",
        "points": -20
      }
    ]
  },
  "cedric_ep5_good_1": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกประกาศกลางสภาด้วยน้ำเสียงเด็ดขาดว่า เขาพร้อมสละอำนาจทุกอย่างหากไม่ได้เคียงข้างคุณ จนเหล่าขุนนางต้องยอมจำนนต่อความรักที่มั่นคงของเขา",
    "next": "cedric_ep5_good_1_ext_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep5_good_2": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ท่ามกลางเสียงปรบมือชื่นชมของผู้คนทั่วทั้งโถงพระราชวัง เขาหันมายิ้มกว้างให้คุณด้วยความภาคภูมิใจ",
    "next": "cedric_ep5_good_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep5_good_3": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เห็นไหมล่ะ พอมีเธออยู่ข้างๆ ไม่มีอะไรในโลกนี้ที่เราสองคนผ่านไปไม่ได้เลย!'",
    "next": "cedric_ep5_good_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep5_good_4": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ตอนนี้ไม่มีอุปสรรคใดๆ มาขวางกั้นความรักของคุณกับเขาได้อีกต่อไปแล้ว!",
    "next": "cedric_ep6_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep5_bad_1": {
    "chapter": "รูทเซดริก บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "แม้คุณจะลังเลและหวาดกลัว แต่เซดริกก็ยังฝืนออกหน้ารับมือกับปัญหาทั้งหมดด้วยตัวคนเดียวจนผ่านพ้นมาได้",
    "next": "cedric_ep5_bad_1_ext_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_bad_2": {
    "chapter": "รูทเซดริก บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ทุกอย่างเรียบร้อยแล้วล่ะ... เธอปลอดภัยแล้วนะ ไม่ต้องกลัวอีกต่อไปแล้ว'",
    "next": "cedric_ep6_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep6_1": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ค่ำคืนหลังผ่านพ้นเรื่องราวทั้งหมด เซดริกพาคุณมาที่ระเบียงชมจันทร์ซึ่งประดับด้วยดอกไม้และแสงเทียนโรแมนติก",
    "next": "cedric_ep6_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep6_2": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ลมยามค่ำคืนพัดเอื่อยๆ ดวงดาวนับพันส่องแสงระยิบระยับอยู่เต็มท้องฟ้า",
    "next": "cedric_ep6_sub_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep6_3": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาหยุดตรงหน้าคุณ แล้วค่อยๆ ประคองมือทั้งสองข้างของคุณขึ้นมากุมไว้แนบอก",
    "next": "cedric_ep6_4",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep6_4": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ตั้งแต่วินาทีแรกที่เธอปรากฏตัวขึ้นในวิหาร... ชีวิตของฉันก็เปลี่ยนไปตลอดกาล'",
    "next": "cedric_ep6_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep6_5": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'รอยยิ้มของเธอ เสียงหัวเราะของเธอ และความอ่อนโยนของเธอ... ทำให้ฉันตกหลุมรักเธอซ้ำแล้วซ้ำเล่าทุกวัน'",
    "next": "cedric_ep6_6",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep6_6": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ฉันไม่อยากให้เธอกลับไปยังโลกเดิมอีกแล้ว... ฉันรักเธอนะ อยู่เคียงข้างฉันตลอดไปในฐานะคู่ชีวิตของฉันได้ไหม?'",
    "next": "cedric_final_decision",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_final_decision": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เซดริกสารภาพรักหมดหัวใจและขอคุณเป็นคู่ชีวิตชั่วนิรันดร์ คุณจะตอบรับความรักของเขาอย่างไร?",
    "charImg": "assets/char_cedric_blush.png",
    "choices": [
      {
        "text": "โผเข้ากอดเขาแน่น 'ตกลงค่ะเซดริก! ฉันก็รักคุณสุดหัวใจ และจะอยู่กับคุณตลอดไปเลยค่ะ!'",
        "next": "cedric_true_ep_1",
        "charGain": "cedric",
        "points": 50
      },
      {
        "text": "ก้าวถอยหลังเบาๆ 'ขอโทษนะคะ ขอบคุณสำหรับทุกอย่างแต่ฉันคิดกับคุณแค่คนสำคัญที่แสนดีค่ะ'",
        "next": "cedric_norm_ep_1",
        "charGain": "cedric",
        "points": -25
      }
    ]
  },
  "cedric_true_ep_1": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ทันทีที่ได้ยินคำตอบตกลง เซดริกก็ยิ้มกว้างด้วยความดีใจที่สุดในชีวิต เขารวบตัวคุณเข้ามากอดแน่นจนตัวลอย!",
    "next": "cedric_true_ep_1_ext_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_2": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เธอรับรักฉันแล้วนะ! ห้ามเปลี่ยนใจคืนคำเด็ดขาดเลยนะรู้ไหม!'",
    "next": "cedric_true_ep_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_true_ep_3": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาค่อยๆ ประคองใบหน้าของคุณให้เงยขึ้นสบตา ก่อนจะโน้มใบหน้าลงมามอบจูบที่แสนหวานและอ่อนโยนใต้แสงจันทร์",
    "next": "cedric_true_ep_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ละอองแสงดาวสีทองลอยหมุนวนโอบล้อมร่างของคุณทั้งสองคน เพื่อร่วมเฉลิมฉลองพันธสัญญาแห่งรักนิรันดร์",
    "next": "cedric_true_ep_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_5": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เมื่อถอนจูบออก เขาก็แนบหน้าผากเข้ากับหน้าผากของคุณ ลมหายใจอุ่นๆ เต็มไปด้วยความรักล้นหัวใจ",
    "next": "cedric_true_ep_6",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_6": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ต่อจากนี้ไป ไม่ว่าเช้าสายบ่ายเย็น ฉันจะคอยดูแลตามใจและบอกรักเธอทุกวันเลย... รักเธอที่สุดในโลกเลยนะ'",
    "next": "cedric_ending_good",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ending_good": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณและเซดริกเข้าพิธีวิวาห์สุดยิ่งใหญ่ จากดยุกผู้เย็นชากลายเป็นสามีที่คลั่งรักและตามใจคุณที่สุดในโลก!",
    "charImg": "assets/char_cedric_smile.png",
    "ending": {
      "type": "True Romance Ending",
      "char": "cedric",
      "title": "ราชินีแห่งราเวนครอสต์",
      "desc": "คุณและเซดริกเข้าพิธีวิวาห์สุดยิ่งใหญ่ จากดยุกผู้เย็นชากลายเป็นสามีที่คลั่งรักและตามใจคุณที่สุดในโลก!"
    }
  },
  "cedric_norm_ep_1": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ในเงามืด",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกนิ่งไปครู่หนึ่ง ก่อนจะระบายยิ้มบางๆ อย่างเข้าใจแม้แววตาจะแฝงความเศร้าอยู่ลึกๆ",
    "next": "cedric_norm_ep_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_norm_ep_2": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ในเงามืด",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เข้าใจแล้วล่ะ... ความรู้สึกของหัวใจมันบังคับกันไม่ได้นี่นา ขอบคุณที่พูดกับฉันตรงๆ นะ'",
    "next": "cedric_norm_ep_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_norm_ep_3": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ในเงามืด",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'แต่ถึงจะไม่ได้เป็นคนรักกัน ฉันก็ยังดีใจที่ได้พบและได้ดูแลเธอนะ ถ้ามีเรื่องเดือดร้อนเมื่อไหร่ เรียกหาฉันได้เสมอ'",
    "next": "cedric_ending_normal",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ending_normal": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ในเงามืด",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "แม้จะยังไม่ได้ลงเอยแบบคนรัก แต่เซดริกก็ยังคอยดูแลและปกป้องคุณอยู่ห่างๆ ด้วยความห่วงใยเสมอ",
    "charImg": "assets/char_cedric.png",
    "ending": {
      "type": "Normal Ending",
      "char": "cedric",
      "title": "ผู้พิทักษ์ในเงามืด",
      "desc": "แม้จะยังไม่ได้ลงเอยแบบคนรัก แต่เซดริกก็ยังคอยดูแลและปกป้องคุณอยู่ห่างๆ ด้วยความห่วงใยเสมอ"
    }
  },
  "lucian_branch_start": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนยื่นมือมารับคุณด้วยรอยยิ้มอบอุ่นที่สุด 'ดีใจจังเลยครับที่คุณเลือกผม ไปอยู่ด้วยกันที่หอคอยชมดาวของวิหารนะครับ'",
    "charImg": "assets/char_lucian_smile.png",
    "next": "lucian_ep1_2"
  },
  "lucian_ep1_2": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ท่ามกลางสายตาของอีกสามคนที่มองตามด้วยความเสียดาย คุณเดินเคียงข้างลูเชียนมุ่งหน้าไปยังหอคอยชมดาวแห่งมหาวิหาร",
    "next": "lucian_ep1_sub_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_3": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ถึงแล้วล่ะ นี่คือหอคอยชมดาวแห่งมหาวิหาร ต่อจากนี้ไปให้คิดซะว่าที่นี่คือบ้านของคุณเลยนะ'",
    "next": "lucian_ep1_4",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_4": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "บรรยากาศภายในหอคอยชมดาวแห่งมหาวิหารถูกจัดเตรียมไว้อย่างสวยงามและอบอุ่น มีมุมพักผ่อนที่มีแสงแดดส่องถึง",
    "next": "lucian_ep1_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_5": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ผมให้คนจัดห้องพักของคุณไว้ติดกับห้องของผมเลย ถ้ามีอะไรตอนกลางคืนจะได้เรียกหากันได้ทันที'",
    "next": "lucian_ep1_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_6": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "คุณเดินสำรวจรอบๆ ห้องพัก พบว่ามีทั้งดอกไม้สด หมอนอิงนุ่มๆ และหนังสืออ่านเล่นที่คุณชอบวางเตรียมไว้ครบถ้วน",
    "next": "lucian_ep1_7",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_7": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'กะ... ก็ผมแอบสังเกตมาตลอดนี่นาว่าคุณชอบอะไรบ้าง เลยเตรียมไว้ให้ถูกใจคุณยังไงล่ะ'",
    "next": "lucian_ep1_8",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_8": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณยิ้มให้กับความใส่ใจของเขา ก่อนที่เขาจะพาคุณมานั่งพักที่โซฟาริมหน้าต่าง",
    "next": "lucian_ep1_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_9": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'เดี๋ยวผมไปเตรียมของว่างมาให้นะ วันนี้จะโชว์ฝีมือปรุงชาน้ำผึ้งดอกไม้และดูดาวตกให้คุณลองชิมดู'",
    "next": "lucian_ep1_10",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_10": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ไม่นานนัก ลูเชียนก็เดินถือถาดชาร้อนหอมกรุ่นและขนมหน้าตาน่าทานมาวางตรงหน้าคุณ",
    "next": "lucian_ep1_11",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_11": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ลองชิมดูสิ หวานกำลังดีหรือเปล่า?'",
    "next": "lucian_ep1_12",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_12": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณตักขนมเข้าปากคำแรก รสชาติหวานละมุนละลายในปากจนคุณเผลอยิ้มกว้างออกมา",
    "next": "lucian_ep1_13",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_13": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "พอเห็นรอยยิ้มของคุณ เขาก็มองเพลินจนแก้มแดง 'เห็นคุณกินอย่างมีความสุขแบบนี้ คนทำก็หายเหนื่อยเป็นปลิดทิ้งเลยแฮะ'",
    "next": "lucian_ep1_14",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_14": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "จู่ๆ เขาก็ยื่นมือมาแตะที่มุมปากของคุณเบาๆ 'มีครีมติดแก้มแน่ะ... อยู่กับผมสองคนแล้วระวังตัวหน่อยสิ น่ารักเกินไปเดี๋ยวผมก็อดใจไม่ไหวหรอก'",
    "next": "lucian_ep1_15",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_15": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "สัมผัสอุ่นๆ จากปลายนิ้วของเขาทำให้หัวใจของคุณเต้นรัวเร็วขึ้นทันที",
    "next": "lucian_ep1_16",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_16": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'หลังจากผ่านเรื่องวุ่นวายมาหลายวัน ในที่สุดผมก็ได้ใช้เวลาเงียบๆ กับคุณสองคนสักทีนะ'",
    "next": "lucian_ep1_17",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_17": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ตอนอยู่ในวิหาร ตอนที่ยังไม่รู้ว่าคุณจะเลือกใคร... สารภาพตามตรงเลยว่าผมลุ้นแทบแย่'",
    "next": "lucian_ep1_18",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_18": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาขยับมานั่งชิดคุณบนโซฟาตัวเดียวกัน จนไหล่ของคุณทั้งคู่แตะกันเบาๆ",
    "next": "lucian_ep1_19",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_19": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ถามจริงๆ เถอะ... อะไรทำให้คุณตัดสินใจเลือกเดินมาหาผมแทนที่จะเป็นอีกสามคนนั้นเหรอ?'",
    "next": "lucian_ep1_20",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_20": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ดวงตาของเขามองลึกเข้ามาในดวงตาของคุณอย่างรอคอยคำตอบ",
    "next": "lucian_ep1_21",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_21": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'คนอื่นมักจะมองผมจากภาพลักษณ์ภายนอกเสมอ มีแค่คุณคนเดียวที่มองเข้ามาถึงตัวตนจริงๆ ของผม'",
    "next": "lucian_ep1_22",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_22": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลมยามบ่ายพัดผ้าม่านปลิวเบาๆ กลิ่นหอมประจำตัวของเขาลอยมาแตะจมูก",
    "next": "lucian_ep1_23",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_23": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'บอกให้ผมชื่นใจหน่อยสิ... ว่าคุณคิดยังไงกับผมกันแน่?'",
    "next": "lucian_ep1_choice",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_choice": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนจ้องตาคุณด้วยความคาดหวังและเขินอาย คุณจะตอบเขาว่าอย่างไร?",
    "charImg": "assets/char_lucian_blush.png",
    "choices": [
      {
        "text": "กุมมือเขาไว้ 'เพราะเวลาอยู่กับลูเชียน ฉันรู้สึกอบอุ่นและเป็นตัวเองได้มากที่สุดเลยค่ะ'",
        "next": "lucian_ep1_good_1",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "ดึงมือกลับ 'ฉันก็แค่เลือกไปงั้นแหละค่ะ ไม่ได้คิดอะไรพิเศษสักหน่อย'",
        "next": "lucian_ep1_bad_1",
        "charGain": "lucian",
        "points": -15
      }
    ]
  },
  "lucian_ep1_good_1": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนหน้าแดงจัด รอยยิ้มกว้างปรากฏขึ้นบนใบหน้าหล่อเหลา 'พูดจาน่ารักแบบนี้... ระวังผมจะกอดไม่ปล่อยนะ!'",
    "next": "lucian_ep1_good_1_ext_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_good_2": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาดึงคุณเข้าไปกอดแนบอกอย่างทะนุถนอม เสียงหัวใจของเขาเต้นดังตึกตักอยู่ข้างหูคุณ",
    "next": "lucian_ep1_good_3",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_good_3": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ขอบคุณนะ... ผมจะทำให้ทุกวันที่คุณอยู่กับผมมีแต่รอยยิ้มเลย คอยดูสิ'",
    "next": "lucian_ep1_good_4",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_good_4": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณสองคนนั่งพูดคุยและหัวเราะด้วยกันจนกระทั่งแสงอาทิตย์ยามเย็นค่อยๆ ลับขอบฟ้าไป",
    "next": "lucian_ep2_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนชะงักไป แววตาที่เคยเป็นประกายหม่นแสงลงทันที 'งั้นเหรอ... นั่นสินะ ผมคงคิดเข้าข้างตัวเองมากเกินไป'",
    "next": "lucian_ep1_bad_1_ext_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาฝืนยิ้มบางๆ แล้วลุกขึ้นเก็บถ้วยชาด้วยท่าทางเงียบขรึม",
    "next": "lucian_ep1_bad_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_bad_3": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ไม่เป็นไรหรอก คุณพักผ่อนตามสบายเถอะนะ เดี๋ยวผมออกไปเดินรับลมข้างนอกสักหน่อย'",
    "next": "lucian_ep1_bad_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_bad_4": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "บรรยากาศในห้องดูเหงาหงอยลงถนัดตา ก่อนจะผ่านพ้นวันแรกไป",
    "next": "lucian_ep2_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_1": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา อากาศแจ่มใสเป็นพิเศษ ลูเชียนมารอรับคุณที่หน้าห้องด้วยชุดลำลองที่ดูหล่อเหลาไปอีกแบบ",
    "next": "lucian_ep2_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_2": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'อรุณสวัสดิ์! วันนี้ผมเคลียร์งานทั้งหมดไว้แล้ว เราออกไปเดทกันที่ทะเลสาบกระจกเงาและสวนดอกจันทรากันเถอะ'",
    "next": "lucian_ep2_sub_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_3": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "พอได้ยินคำว่า 'เดท' จากปากเขาตรงๆ คุณก็แอบแก้มร้อนผ่าวขึ้นมาทันที",
    "next": "lucian_ep2_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_4": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไม่ต้องทำหน้าเขินแบบนั้นเลย... ก็เราสองคนกำลังศึกษาดูใจกันอยู่ไม่ใช่เหรอ เรียกว่าเดทน่ะถูกแล้ว'",
    "next": "lucian_ep2_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_5": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขายื่นมือมาให้คุณจับ แล้วพาคุณเดินออกไปยังทะเลสาบกระจกเงาและสวนดอกจันทราท่ามกลางสายลมอ่อนๆ",
    "next": "lucian_ep2_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_6": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ที่ทะเลสาบกระจกเงาและสวนดอกจันทราบรรยากาศสดชื่นมาก มีดอกไม้หลากสีสันบานสะพรั่งและผีเสื้อบินวนอยู่รอบๆ",
    "next": "lucian_ep2_7",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_7": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ที่นี่เป็นสถานที่โปรดของผมเลยล่ะ เวลาเครียดๆ ผมชอบแวะมาเดินเล่นที่นี่คนเดียว'",
    "next": "lucian_ep2_8",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_8": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'แต่วันนี้พอมีคุณเดินจับมืออยู่ข้างๆ แบบนี้... ที่นี่ดูสวยขึ้นกว่าเดิมตั้งเยอะเลยนะ'",
    "next": "lucian_ep2_9",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_9": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ระหว่างเดินชมวิว มีซุ้มขายเครื่องประดับคริสตัลและของที่ระลึกตั้งอยู่ริมทางเดิน",
    "next": "lucian_ep2_10",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_10": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณหยุดมองสร้อยข้อมือประดับจี้รูปดาวชิ้นหนึ่งที่ส่องประกายวิบวับ",
    "next": "lucian_ep2_11",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_11": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนสังเกตเห็นสายตาของคุณ จึงแอบซื้อสร้อยข้อมือเส้นนั้นมาแล้วยื่นมาสวมให้ที่ข้อมือของคุณทันที!",
    "next": "lucian_ep2_12",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_12": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ผมซื้อให้เป็นของขวัญเดทแรกของเรานะ... ใส่ติดตัวไว้ตลอดล่ะ คนอื่นจะได้รู้ว่าคุณมีเจ้าของแล้ว'",
    "next": "lucian_ep2_13",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_13": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณก้มมองสร้อยข้อมือที่เข้ากับข้อมือของคุณพอดีเป๊ะด้วยความประทับใจ",
    "next": "lucian_ep2_14",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_14": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไปนั่งพักตรงม้านั่งใต้ต้นไม้ใหญ่กันเถอะ ผมเตรียมตะกร้าปิกนิกมาเผื่อคุณด้วยนะ'",
    "next": "lucian_ep2_15",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_15": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าและหยิบแซนด์วิชผลไม้กับน้ำผลไม้เย็นชื่นใจออกมาจัดวาง",
    "next": "lucian_ep2_16",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_16": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'อ้าปากสิ เดี๋ยวผมป้อนคำแรกให้เอง'",
    "next": "lucian_ep2_17",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_17": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขายื่นชิ้นขนมมาจ่อที่ริมฝีปากของคุณด้วยแววตาพราวระยับ",
    "next": "lucian_ep2_18",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_18": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ถ้าไม่ยอมให้ป้อน ผมจะถือว่าคุณอยากให้ผมป้อนด้วยวิธีอื่นนะ...'",
    "next": "lucian_ep2_19",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_19": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "หลังจากอิ่มอร่อยกับมื้อเที่ยง ลมพัดกลีบดอกไม้ปลิวลงมาติดบนเส้นผมของคุณ",
    "next": "lucian_ep2_20",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_20": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนขยับตัวเข้ามาใกล้มากจนลมหายใจอุ่นๆ รินรดหน้าผากของคุณ เขาค่อยๆ หยิบกลีบดอกไม้ออกจากผมให้คุณ",
    "next": "lucian_ep2_21",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_21": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'อยู่ใกล้กันแค่นี้... ได้ยินเสียงหัวใจผมเต้นแรงไหม?'",
    "next": "lucian_ep2_choice",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_choice": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ใบหน้าของลูเชียนอยู่ห่างจากคุณเพียงแค่คืบเดียว คุณจะทำอย่างไรในวินาทีสุดโรแมนติกนี้?",
    "charImg": "assets/char_lucian_blush.png",
    "choices": [
      {
        "text": "ยิ้มหวานแล้วขยับเข้าไปหอมแก้มเขาเบาๆ 'ขอบคุณสำหรับเดทวันนี้และสร้อยข้อมือสวยๆ นะคะ'",
        "next": "lucian_ep2_good_1",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "รีบผลักอกเขาออกห่าง 'ถอยออกไปหน่อยค่ะ คนมองเยอะแยะ น่าอายจะตาย!'",
        "next": "lucian_ep2_bad_1",
        "charGain": "lucian",
        "points": -15
      }
    ]
  },
  "lucian_ep2_good_1": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนเบิกตากว้างด้วยความตกใจ ก่อนที่ใบหน้าจะแดงก่ำไปถึงใบหู!",
    "next": "lucian_ep2_good_1_ext_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_good_2": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ธะ... คุณหอมแก้มผมก่อนแบบนี้ ขี้โกงชะมัดเลย! รู้ไหมว่าผมเกือบห้ามใจไม่อยู่แล้วนะ!'",
    "next": "lucian_ep2_good_3",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_good_3": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขาคว้ามือคุณมากุมไว้แน่นแล้วจุ๊บลงที่หลังมือคุณเป็นการเอาคืนอย่างแสนรัก",
    "next": "lucian_ep2_good_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_good_4": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'วันนี้เป็นวันที่ผมมีความสุขที่สุดเลย ไว้เรามาเดทกันแบบนี้อีกบ่อยๆ นะ'",
    "next": "lucian_ep3_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 2: ระยะห่าง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนชะงักถอยออกมาตามแรงผลักของคุณ แววตาฉายแววเสียดายและเศร้าหมอง",
    "next": "lucian_ep2_bad_1_ext_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 2: ระยะห่าง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ขอโทษที... ผมคงเผลอเข้าใกล้คุณมากเกินไปจนทำให้คุณอึดอัดสินะ'",
    "next": "lucian_ep2_bad_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_bad_3": {
    "chapter": "รูทลูเชียน บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างเดินกลับจึงเงียบเชียบลงเล็กน้อย",
    "next": "lucian_ep3_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_1": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บ่ายวันถัดมา ขณะที่คุณกับลูเชียนกำลังเดินเล่นพูดคุยกันอยู่ในสวนหลวงอย่างอารมณ์ดี",
    "next": "lucian_ep3_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_2": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "จู่ๆ ลีออนก็เดินตรงเข้ามาโบกมือทักทายคุณด้วยรอยยิ้มสดใส!",
    "next": "lucian_ep3_3",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_3": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'บังเอิญจังเลยนะที่ได้เจอคุณที่นี่! ไม่ได้คุยกันตั้งหลายวัน คิดถึงคุณชะมัดเลย'",
    "next": "lucian_ep3_4",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_4": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ทันทีที่เห็นลีออนเดินเข้ามาใกล้คุณ ลูเชียนก็รีบขยับตัวมายืนบังหน้าคุณไว้ครึ่งหนึ่งทันที!",
    "next": "lucian_ep3_5",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_5": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'มีธุระอะไรไม่ทราบ ลีออน? ตอนนี้คุณกำลังใช้เวลาอยู่กับผมนะ'",
    "next": "lucian_ep3_6",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_6": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลีออนเลิกคิ้วขึ้นพลางส่งยิ้มกวนๆ ให้ลูเชียน 'แหมๆ หวงจังเลยนะ ผมแค่เอาขนมร้านดังมาฝากคุณเฉยๆ เอง'",
    "next": "lucian_ep3_7",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_7": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "แล้วลีออนก็ชะโงกหน้ามาคุยกับคุณ 'นี่ อยู่แต่กับหมอนี่ทั้งวันไม่เบื่อแย่เหรอ? ไปเดินเล่นชมวิวกับผมสักชั่วโมงไหมล่ะ?'",
    "next": "lucian_ep3_8",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_8": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บรรยากาศรอบตัวลูเชียนทะมึนลงทันที! เขาคว้าเอวคุณดึงเข้ามาชิดตัวเขาต่อหน้าต่อตาลีออน!",
    "next": "lucian_ep3_9",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_9": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'คุณไม่ว่างไปไหนกับนายทั้งนั้นแหละ เพราะตารางเวลาของคุณเป็นของผมคนเดียว!'",
    "next": "lucian_ep3_10",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_10": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'เจ้าตัวเขายังไม่ได้ตอบสักหน่อย นายอย่าเพิ่งคิดเองเออเองสิ ลองถามคุณดูก่อนไหมล่ะ?'",
    "next": "lucian_ep3_11",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_11": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนหันมามองคุณด้วยสายตาที่ทั้งดุและเว้าวอนปนหึงหวงสุดขีด 'บอกหมอนี่ไปสิว่าคุณจะอยู่กับใคร...'",
    "next": "lucian_ep3_choice",
    "charImg": "assets/char_lucian_blush.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_choice": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ทั้งลูเชียนและลีออนต่างมองมาที่คุณเพื่อรอคำตอบ คุณจะทำอย่างไรกับสถานการณ์ชวนหึงนี้?",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png",
    "choices": [
      {
        "text": "กอดแขนลูเชียนแน่น 'ขอบคุณนะคะคุณลีออน แต่ฉันอยากอยู่กับลูเชียนแค่สองคนค่ะ'",
        "next": "lucian_ep3_good_1",
        "charGain": "lucian",
        "points": 30
      },
      {
        "text": "ทำท่าจะเดินไปหาลีออน 'จริงด้วยค่ะ อยู่กับลูเชียนชักเริ่มเบื่อแล้ว ไปเที่ยวกันเถอะ!'",
        "next": "lucian_ep3_bad_1",
        "charGain": "lucian",
        "points": -20
      }
    ]
  },
  "lucian_ep3_good_1": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "พอได้ยินคำตอบของคุณ ลูเชียนก็ยิ้มกว้างอย่างผู้ชนะทันที! เขาโอบไหล่คุณแน่นขึ้นกว่าเดิม",
    "next": "lucian_ep3_good_1_ext_1",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_good_2": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ได้ยินชัดเต็มสองหูแล้วนะลีออน คุณบอกว่าอยากอยู่กับผมแค่สองคน เชิญนายกลับไปได้แล้ว'",
    "next": "lucian_ep3_good_3",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_good_3": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลีออนยกมือยอมแพ้พร้อมหัวเราะเบาๆ 'ก็ได้ๆ ยอมแพ้แล้วจ้า ดูแลคุณดีๆ ล่ะ ถ้าทำคุณร้องไห้เมื่อไหร่ผมมาแย่งคืนแน่!'",
    "next": "lucian_ep3_good_4",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_good_4": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เมื่อลีออนเดินจากไปแล้ว ลูเชียนก็หันมามองคุณด้วยแก้มแดงระเรื่อ",
    "next": "lucian_ep3_after_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนรีบคว้าข้อมือคุณไว้แน่น แววตาของเขาฉายแววเจ็บปวดและน้อยใจอย่างปิดไม่มิด",
    "next": "lucian_ep3_bad_1_ext_1",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png"
  },
  "lucian_ep3_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'อย่าพูดว่าจะไปกับผู้ชายคนอื่นต่อหน้าผมแบบนั้นสิ... คุณไม่รู้เลยเหรอว่าผมหวงคุณแค่ไหน'",
    "next": "lucian_ep3_bad_3",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_bad_3": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เห็นสีหน้าจริงจังของลูเชียนแล้ว ลีออนจึงยอมถอยหลังให้ 'เอาล่ะๆ ผมแค่แซวเล่นเฉยๆ พวกคุณคุยกันดีๆ เถอะนะ'",
    "next": "lucian_ep3_bad_4",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "lucian_ep3_bad_4": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เมื่อเหลือกันแค่สองคน คุณจึงต้องรีบง้อลูเชียนที่กำลังงอนตุ๊บป่องอยู่",
    "next": "lucian_ep3_after_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_after_1": {
    "chapter": "รูทลูเชียน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ห้ามไปยิ้มหวานให้คนอื่นแบบเมื่อกี้อีกนะ... เวลาเห็นผู้ชายคนอื่นมายุ่งกับคุณ ใจผมมันร้อนรุ่มไปหมดเลย'",
    "next": "lucian_ep3_after_2",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_2": {
    "chapter": "รูทลูเชียน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาซบหน้าลงกับไหล่ของคุณเหมือนลูกแมวตัวโตๆ ที่กำลังอ้อนเจ้าของ",
    "next": "lucian_ep3_after_sub_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_3": {
    "chapter": "รูทลูเชียน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ผมไม่เคยขี้หึงหรือขี้หวงใครขนาดนี้มาก่อนเลยนะ... ทั้งหมดเป็นเพราะคุณคนเดียวเลยรู้ตัวไหม'",
    "next": "lucian_ep3_after_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_4": {
    "chapter": "รูทลูเชียน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณลูบผมนุ่มๆ ของเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มออกมาได้อีกครั้ง",
    "next": "lucian_ep4_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_1": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "คืนหนึ่งในสัปดาห์ต่อมา พายุฝนกระหน่ำลงมาอย่างหนัก เสียงฟ้าร้องคำรามก้องไปทั่วทั้งปราสาท",
    "next": "lucian_ep4_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_2": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงถือตะเกียงเดินไปดูที่ห้องของลูเชียน และพบว่าเขากำลังยืนมองสายฝนอยู่ที่หน้าต่างเพียงลำพัง",
    "next": "lucian_ep4_sub_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_3": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "เมื่อได้ยินเสียงคุณเดินเข้ามา เขาก็หันมามองด้วยแววตาที่ดูเปราะบางผิดไปจากเวลาปกติ",
    "next": "lucian_ep4_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_4": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'ยังไม่นอนอีกเหรอ? หรือว่าเสียงฟ้าร้องทำให้คุณนอนไม่หลับกันล่ะ'",
    "next": "lucian_ep4_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_5": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "คุณเดินเข้าไปหาเขาแล้วแตะที่มือของเขา พบว่ามือของเขาเย็นเฉียบ",
    "next": "lucian_ep4_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_6": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "เขาหลุบตามองมือของคุณที่กุมมือเขาไว้ ก่อนจะถอนหายใจออกมาเบาๆ",
    "next": "lucian_ep4_7",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_7": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'ความจริงแล้ว... ทุกครั้งที่ฝนตกหนักแบบนี้ ผมมักจะนึกถึงเรื่องในอดีตที่ไม่อยากจำอยู่เสมอน่ะ'",
    "next": "lucian_ep4_8",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_8": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "คุณพาเขามานั่งลงที่หน้าเตาผิงไฟอุ่นๆ และรับฟังเขาอย่างตั้งใจ",
    "next": "lucian_ep4_9",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_9": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'เพราะผมเกิดมามีพลังเวทแห่งดวงดาวที่สูงเกินไป ตั้งแต่วัยเด็กผมจึงถูกกักบริเวณให้อยู่แต่บนหอคอยสูงสุดของวิหารเพียงลำพัง ใครๆ ก็มองผมเหมือนสิ่งศักดิ์สิทธิ์ที่ห้ามแตะต้อง ไม่มีใครกอดหรือคุยกับผมเหมือนคนธรรมดาเลย... จนคุณก้าวเข้ามา'",
    "next": "lucian_ep4_10",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_10": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "น้ำเสียงของเขาสั่นเครือเล็กน้อยเมื่อเล่าถึงบาดแผลในใจที่ไม่เคยเปิดเผยให้ใครฟังมาก่อน",
    "next": "lucian_ep4_11",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_11": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'บางครั้งผมก็แอบกลัวนะ... ว่าถ้าคุณรู้อดีตและด้านที่อ่อนแอของผมแล้ว คุณจะมองผมเปลี่ยนไปหรือเปล่า'",
    "next": "lucian_ep4_choice",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_choice": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ลูเชียนเปิดเปลือยความลับและบาดแผลในใจให้คุณฟังทั้งหมด คุณจะปลอบโยนเขาอย่างไร?",
    "charImg": "assets/char_lucian.png",
    "choices": [
      {
        "text": "ดึงเขามากอดแน่น 'ไม่เปลี่ยนไปแน่นอนค่ะ ต่อไปนี้ฉันจะอยู่เคียงข้างไม่ให้ลูเชียนต้องเจ็บปวดอีกแล้วนะ'",
        "next": "lucian_ep4_good_1",
        "charGain": "lucian",
        "points": 30
      },
      {
        "text": "ขยับถอยห่าง 'ไม่นึกเลยว่าคุณจะมีปมปัญหาเยอะขนาดนี้ ฟังแล้วอึดอัดจังค่ะ'",
        "next": "lucian_ep4_bad_1",
        "charGain": "lucian",
        "points": -20
      }
    ]
  },
  "lucian_ep4_good_1": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนกอดตอบคุณแน่นราวกับคุณคือสิ่งล้ำค่าที่สุดในชีวิต ความอบอุ่นจากอ้อมกอดของคุณช่วยละลายความหนาวเหน็บในใจของเขาจนหมดสิ้น",
    "next": "lucian_ep4_good_1_ext_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_good_2": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ขอบคุณนะ... แค่มีคุณกอดผมไว้แบบนี้ เรื่องเลวร้ายในอดีตก็ไม่สำคัญสำหรับผมอีกต่อไปแล้ว'",
    "next": "lucian_ep4_good_3",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_good_3": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'คืนนี้อยู่เป็นเพื่อนผมจนกว่าพายุจะสงบได้ไหม... แค่นอนจับมือกันเฉยๆ ก็พอ สัญญาว่าจะไม่ทำอะไรเกินเลยจริงๆ'",
    "next": "lucian_ep4_good_4",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_good_4": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คืนนั้นคุณและเขานอนกุมมือกันอยู่ข้างเตาผิงอุ่นๆ จนหลับใหลไปด้วยกันอย่างมีความสุข",
    "next": "lucian_ep5_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนหลับตาลงซ่อนความเจ็บปวดในแววตา 'นั่นสินะ... ผมไม่น่าเล่าเรื่องน่าเบื่อให้คุณฟังเลย ขอโทษด้วยนะ'",
    "next": "lucian_ep4_bad_1_ext_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ทิ้งให้เขานั่งมองเปลวไฟในเตาผิงเพียงลำพัง",
    "next": "lucian_ep5_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_1": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา เกิดเรื่องใหญ่ขึ้นในอาณาจักร! คณะผู้เฒ่าแห่งมหาวิหารอ้างกฎโบราณว่า มหาปุโรหิตห้ามมีความรักกับสตรีใด มิฉะนั้นจะต้องถูกปลดและรับบททดสอบค่ายกลสายฟ้า",
    "next": "lucian_ep5_2",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_2": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ข่าวลือแพร่สะพัดไปทั่วพระราชวัง จนผู้คนต่างจับตามองว่าความสัมพันธ์ของคุณสองคนจะผ่านวิกฤตนี้ไปได้หรือไม่",
    "next": "lucian_ep5_sub_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_3": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนเดินเข้ามาหาคุณและจับมือทั้งสองข้างของคุณไว้แน่น แววตาของเขาแน่วแน่และมั่นคงไร้ความลังเล",
    "next": "lucian_ep5_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_4": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไม่ต้องกังวลกับคำพูดของคนอื่นนะ ไม่ว่าจะเกิดอะไรขึ้น ผมจะไม่มีวันยอมปล่อยมือคุณเด็ดขาด'",
    "next": "lucian_ep5_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_5": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ขอแค่คุณยืนยันคำเดียวว่าพร้อมจะสู้ไปกับผม... ต่อให้ต้องงัดข้อกับคนทั้งอาณาจักร ผมก็พร้อมลุย!'",
    "next": "lucian_ep5_choice",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_choice": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ตรงหน้าคือบททดสอบครั้งใหญ่ของความรัก คุณจะจับมือสู้ไปกับลูเชียนหรือไม่?",
    "charImg": "assets/char_lucian.png",
    "choices": [
      {
        "text": "บีบมือเขาแน่น 'ไปลุยด้วยกันเลยค่ะลูเชียน! ไม่ว่าจะมีอุปสรรคอะไร ฉันก็จะอยู่เคียงข้างคุณเสมอ!'",
        "next": "lucian_ep5_good_1",
        "charGain": "lucian",
        "points": 35
      },
      {
        "text": "ปล่อยมือด้วยความกลัว 'มันยากเกินไปค่ะ เราสองคนยอมแพ้แยกทางกันแค่นี้เถอะ'",
        "next": "lucian_ep5_bad_1",
        "charGain": "lucian",
        "points": -20
      }
    ]
  },
  "lucian_ep5_good_1": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนกุมมือคุณเดินฝ่าค่ายกลศักดิ์สิทธิ์และพิสูจน์ว่าความรักของคุณสองคนทำให้พลังแห่งดวงดาวสว่างไสวยิ่งกว่ากฎโบราณ จนผู้เฒ่าทุกคนต้องก้มหัวรับรอง",
    "next": "lucian_ep5_good_1_ext_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_good_2": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ท่ามกลางเสียงปรบมือชื่นชมของผู้คนทั่วทั้งโถงพระราชวัง เขาหันมายิ้มกว้างให้คุณด้วยความภาคภูมิใจ",
    "next": "lucian_ep5_good_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_good_3": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'เห็นไหมล่ะ พอมีคุณอยู่ข้างๆ ไม่มีอะไรในโลกนี้ที่เราสองคนผ่านไปไม่ได้เลย!'",
    "next": "lucian_ep5_good_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_good_4": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ตอนนี้ไม่มีอุปสรรคใดๆ มาขวางกั้นความรักของคุณกับเขาได้อีกต่อไปแล้ว!",
    "next": "lucian_ep6_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "แม้คุณจะลังเลและหวาดกลัว แต่ลูเชียนก็ยังฝืนออกหน้ารับมือกับปัญหาทั้งหมดด้วยตัวคนเดียวจนผ่านพ้นมาได้",
    "next": "lucian_ep5_bad_1_ext_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ทุกอย่างเรียบร้อยแล้วล่ะ... คุณปลอดภัยแล้วนะ ไม่ต้องกลัวอีกต่อไปแล้ว'",
    "next": "lucian_ep6_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep6_1": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ค่ำคืนหลังผ่านพ้นเรื่องราวทั้งหมด ลูเชียนพาคุณมาที่ระเบียงชมจันทร์ซึ่งประดับด้วยดอกไม้และแสงเทียนโรแมนติก",
    "next": "lucian_ep6_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep6_2": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ลมยามค่ำคืนพัดเอื่อยๆ ดวงดาวนับพันส่องแสงระยิบระยับอยู่เต็มท้องฟ้า",
    "next": "lucian_ep6_sub_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep6_3": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาหยุดตรงหน้าคุณ แล้วค่อยๆ ประคองมือทั้งสองข้างของคุณขึ้นมากุมไว้แนบอก",
    "next": "lucian_ep6_4",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep6_4": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'ตั้งแต่วินาทีแรกที่คุณปรากฏตัวขึ้นในวิหาร... ชีวิตของผมก็เปลี่ยนไปตลอดกาล'",
    "next": "lucian_ep6_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep6_5": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'รอยยิ้มของคุณ เสียงหัวเราะของคุณ และความอ่อนโยนของคุณ... ทำให้ผมตกหลุมรักคุณซ้ำแล้วซ้ำเล่าทุกวัน'",
    "next": "lucian_ep6_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep6_6": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'ผมไม่อยากให้คุณกลับไปยังโลกเดิมอีกแล้ว... ผมรักคุณนะ อยู่เคียงข้างผมตลอดไปในฐานะคู่ชีวิตของผมได้ไหม?'",
    "next": "lucian_final_decision",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_final_decision": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ลูเชียนสารภาพรักหมดหัวใจและขอคุณเป็นคู่ชีวิตชั่วนิรันดร์ คุณจะตอบรับความรักของเขาอย่างไร?",
    "charImg": "assets/char_lucian_blush.png",
    "choices": [
      {
        "text": "โผเข้ากอดเขาแน่น 'ตกลงค่ะลูเชียน! ฉันก็รักคุณสุดหัวใจ และจะอยู่กับคุณตลอดไปเลยค่ะ!'",
        "next": "lucian_true_ep_1",
        "charGain": "lucian",
        "points": 50
      },
      {
        "text": "ก้าวถอยหลังเบาๆ 'ขอโทษนะคะ ขอบคุณสำหรับทุกอย่างแต่ฉันคิดกับคุณแค่คนสำคัญที่แสนดีค่ะ'",
        "next": "lucian_norm_ep_1",
        "charGain": "lucian",
        "points": -25
      }
    ]
  },
  "lucian_true_ep_1": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ทันทีที่ได้ยินคำตอบตกลง ลูเชียนก็ยิ้มกว้างด้วยความดีใจที่สุดในชีวิต เขารวบตัวคุณเข้ามากอดแน่นจนตัวลอย!",
    "next": "lucian_true_ep_1_ext_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_2": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'คุณรับรักผมแล้วนะ! ห้ามเปลี่ยนใจคืนคำเด็ดขาดเลยนะรู้ไหม!'",
    "next": "lucian_true_ep_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_true_ep_3": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาค่อยๆ ประคองใบหน้าของคุณให้เงยขึ้นสบตา ก่อนจะโน้มใบหน้าลงมามอบจูบที่แสนหวานและอ่อนโยนใต้แสงจันทร์",
    "next": "lucian_true_ep_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ละอองแสงดาวสีทองลอยหมุนวนโอบล้อมร่างของคุณทั้งสองคน เพื่อร่วมเฉลิมฉลองพันธสัญญาแห่งรักนิรันดร์",
    "next": "lucian_true_ep_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_5": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เมื่อถอนจูบออก เขาก็แนบหน้าผากเข้ากับหน้าผากของคุณ ลมหายใจอุ่นๆ เต็มไปด้วยความรักล้นหัวใจ",
    "next": "lucian_true_ep_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_6": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ต่อจากนี้ไป ไม่ว่าเช้าสายบ่ายเย็น ผมจะคอยดูแลตามใจและบอกรักคุณทุกวันเลย... รักคุณที่สุดในโลกเลยนะ'",
    "next": "lucian_ending_good",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ending_good": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณและลูเชียนครองรักกันอย่างหวานชื่น เขาคอยอ้อนและดูแลเอาใจใส่คุณไม่ห่างแม้แต่วินาทีเดียว!",
    "charImg": "assets/char_lucian_smile.png",
    "ending": {
      "type": "True Romance Ending",
      "char": "lucian",
      "title": "ปุโรหิตคู่บัลลังก์ดวงดาว",
      "desc": "คุณและลูเชียนครองรักกันอย่างหวานชื่น เขาคอยอ้อนและดูแลเอาใจใส่คุณไม่ห่างแม้แต่วินาทีเดียว!"
    }
  },
  "lucian_norm_ep_1": {
    "chapter": "ตอนจบปกติ: แสงดาวนำทาง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนนิ่งไปครู่หนึ่ง ก่อนจะระบายยิ้มบางๆ อย่างเข้าใจแม้แววตาจะแฝงความเศร้าอยู่ลึกๆ",
    "next": "lucian_norm_ep_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_norm_ep_2": {
    "chapter": "ตอนจบปกติ: แสงดาวนำทาง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'เข้าใจแล้วล่ะ... ความรู้สึกของหัวใจมันบังคับกันไม่ได้นี่นา ขอบคุณที่พูดกับผมตรงๆ นะ'",
    "next": "lucian_norm_ep_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_norm_ep_3": {
    "chapter": "ตอนจบปกติ: แสงดาวนำทาง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'แต่ถึงจะไม่ได้เป็นคนรักกัน ผมก็ยังดีใจที่ได้พบและได้ดูแลคุณนะ ถ้ามีเรื่องเดือดร้อนเมื่อไหร่ เรียกหาผมได้เสมอ'",
    "next": "lucian_ending_normal",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ending_normal": {
    "chapter": "ตอนจบปกติ: แสงดาวนำทาง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนยังคงเป็นกัลยาณมิตรที่แสนดี คอยให้คำปรึกษาและมอบรอยยิ้มอบอุ่นให้คุณเสมอ",
    "charImg": "assets/char_lucian.png",
    "ending": {
      "type": "Normal Ending",
      "char": "lucian",
      "title": "แสงดาวนำทาง",
      "desc": "ลูเชียนยังคงเป็นกัลยาณมิตรที่แสนดี คอยให้คำปรึกษาและมอบรอยยิ้มอบอุ่นให้คุณเสมอ"
    }
  },
  "leon_branch_start": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยิ้มกว้างด้วยความตื่นเต้นดีใจจนแก้มแดง 'ขอบคุณที่เลือกผมนะครับ! ผมสัญญาว่าจะดูแลและทำให้คุณมีความสุขทุกวันเลยครับ!'",
    "charImg": "assets/char_leon_smile.png",
    "next": "leon_ep1_2"
  },
  "leon_ep1_2": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ท่ามกลางสายตาของอีกสามคนที่มองตามด้วยความเสียดาย คุณเดินเคียงข้างลีออนมุ่งหน้าไปยังคฤหาสน์กองอัศวินสุริยัน",
    "next": "leon_ep1_sub_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_3": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ถึงแล้วล่ะ นี่คือคฤหาสน์กองอัศวินสุริยัน ต่อจากนี้ไปให้คิดซะว่าที่นี่คือบ้านของคุณเลยนะ'",
    "next": "leon_ep1_4",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_4": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "บรรยากาศภายในคฤหาสน์กองอัศวินสุริยันถูกจัดเตรียมไว้อย่างสวยงามและอบอุ่น มีมุมพักผ่อนที่มีแสงแดดส่องถึง",
    "next": "leon_ep1_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_5": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมให้คนจัดห้องพักของคุณไว้ติดกับห้องของผมเลย ถ้ามีอะไรตอนกลางคืนจะได้เรียกหากันได้ทันที'",
    "next": "leon_ep1_6",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_6": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณเดินสำรวจรอบๆ ห้องพัก พบว่ามีทั้งดอกไม้สด หมอนอิงนุ่มๆ และหนังสืออ่านเล่นที่คุณชอบวางเตรียมไว้ครบถ้วน",
    "next": "leon_ep1_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_7": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'กะ... ก็ผมแอบสังเกตมาตลอดนี่นาว่าคุณชอบอะไรบ้าง เลยเตรียมไว้ให้ถูกใจคุณยังไงล่ะ'",
    "next": "leon_ep1_8",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_8": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณยิ้มให้กับความใส่ใจของเขา ก่อนที่เขาจะพาคุณมานั่งพักที่โซฟาริมหน้าต่าง",
    "next": "leon_ep1_9",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_9": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เดี๋ยวผมไปเตรียมของว่างมาให้นะ วันนี้จะโชว์ฝีมือปลูกดอกกุหลาบและอบขนมปังโฮมเมดให้คุณลองชิมดู'",
    "next": "leon_ep1_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_10": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ไม่นานนัก ลีออนก็เดินถือถาดชาร้อนหอมกรุ่นและขนมหน้าตาน่าทานมาวางตรงหน้าคุณ",
    "next": "leon_ep1_11",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_11": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ลองชิมดูสิ หวานกำลังดีหรือเปล่า?'",
    "next": "leon_ep1_12",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_12": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณตักขนมเข้าปากคำแรก รสชาติหวานละมุนละลายในปากจนคุณเผลอยิ้มกว้างออกมา",
    "next": "leon_ep1_13",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_13": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "พอเห็นรอยยิ้มของคุณ เขาก็มองเพลินจนแก้มแดง 'เห็นคุณกินอย่างมีความสุขแบบนี้ คนทำก็หายเหนื่อยเป็นปลิดทิ้งเลยแฮะ'",
    "next": "leon_ep1_14",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_14": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "จู่ๆ เขาก็ยื่นมือมาแตะที่มุมปากของคุณเบาๆ 'มีครีมติดแก้มแน่ะ... อยู่กับผมสองคนแล้วระวังตัวหน่อยสิ น่ารักเกินไปเดี๋ยวผมก็อดใจไม่ไหวหรอก'",
    "next": "leon_ep1_15",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_15": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "สัมผัสอุ่นๆ จากปลายนิ้วของเขาทำให้หัวใจของคุณเต้นรัวเร็วขึ้นทันที",
    "next": "leon_ep1_16",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_16": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'หลังจากผ่านเรื่องวุ่นวายมาหลายวัน ในที่สุดผมก็ได้ใช้เวลาเงียบๆ กับคุณสองคนสักทีนะ'",
    "next": "leon_ep1_17",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_17": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ตอนอยู่ในวิหาร ตอนที่ยังไม่รู้ว่าคุณจะเลือกใคร... สารภาพตามตรงเลยว่าผมลุ้นแทบแย่'",
    "next": "leon_ep1_18",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_18": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาขยับมานั่งชิดคุณบนโซฟาตัวเดียวกัน จนไหล่ของคุณทั้งคู่แตะกันเบาๆ",
    "next": "leon_ep1_19",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_19": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ถามจริงๆ เถอะ... อะไรทำให้คุณตัดสินใจเลือกเดินมาหาผมแทนที่จะเป็นอีกสามคนนั้นเหรอ?'",
    "next": "leon_ep1_20",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_20": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ดวงตาของเขามองลึกเข้ามาในดวงตาของคุณอย่างรอคอยคำตอบ",
    "next": "leon_ep1_21",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_21": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'คนอื่นมักจะมองผมจากภาพลักษณ์ภายนอกเสมอ มีแค่คุณคนเดียวที่มองเข้ามาถึงตัวตนจริงๆ ของผม'",
    "next": "leon_ep1_22",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_22": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลมยามบ่ายพัดผ้าม่านปลิวเบาๆ กลิ่นหอมประจำตัวของเขาลอยมาแตะจมูก",
    "next": "leon_ep1_23",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_23": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'บอกให้ผมชื่นใจหน่อยสิ... ว่าคุณคิดยังไงกับผมกันแน่?'",
    "next": "leon_ep1_choice",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_choice": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนจ้องตาคุณด้วยความคาดหวังและเขินอาย คุณจะตอบเขาว่าอย่างไร?",
    "charImg": "assets/char_leon_blush.png",
    "choices": [
      {
        "text": "กุมมือเขาไว้ 'เพราะเวลาอยู่กับลีออน ฉันรู้สึกอบอุ่นและเป็นตัวเองได้มากที่สุดเลยค่ะ'",
        "next": "leon_ep1_good_1",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "ดึงมือกลับ 'ฉันก็แค่เลือกไปงั้นแหละค่ะ ไม่ได้คิดอะไรพิเศษสักหน่อย'",
        "next": "leon_ep1_bad_1",
        "charGain": "leon",
        "points": -15
      }
    ]
  },
  "leon_ep1_good_1": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนหน้าแดงจัด รอยยิ้มกว้างปรากฏขึ้นบนใบหน้าหล่อเหลา 'พูดจาน่ารักแบบนี้... ระวังผมจะกอดไม่ปล่อยนะ!'",
    "next": "leon_ep1_good_1_ext_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_good_2": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาดึงคุณเข้าไปกอดแนบอกอย่างทะนุถนอม เสียงหัวใจของเขาเต้นดังตึกตักอยู่ข้างหูคุณ",
    "next": "leon_ep1_good_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_good_3": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะ... ผมจะทำให้ทุกวันที่คุณอยู่กับผมมีแต่รอยยิ้มเลย คอยดูสิ'",
    "next": "leon_ep1_good_4",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_good_4": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณสองคนนั่งพูดคุยและหัวเราะด้วยกันจนกระทั่งแสงอาทิตย์ยามเย็นค่อยๆ ลับขอบฟ้าไป",
    "next": "leon_ep2_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_bad_1": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนชะงักไป แววตาที่เคยเป็นประกายหม่นแสงลงทันที 'งั้นเหรอ... นั่นสินะ ผมคงคิดเข้าข้างตัวเองมากเกินไป'",
    "next": "leon_ep1_bad_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_bad_2": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาฝืนยิ้มบางๆ แล้วลุกขึ้นเก็บถ้วยชาด้วยท่าทางเงียบขรึม",
    "next": "leon_ep1_bad_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_bad_3": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ไม่เป็นไรหรอก คุณพักผ่อนตามสบายเถอะนะ เดี๋ยวผมออกไปเดินรับลมข้างนอกสักหน่อย'",
    "next": "leon_ep1_bad_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_bad_4": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "บรรยากาศในห้องดูเหงาหงอยลงถนัดตา ก่อนจะผ่านพ้นวันแรกไป",
    "next": "leon_ep2_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_1": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา อากาศแจ่มใสเป็นพิเศษ ลีออนมารอรับคุณที่หน้าห้องด้วยชุดลำลองที่ดูหล่อเหลาไปอีกแบบ",
    "next": "leon_ep2_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_2": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'อรุณสวัสดิ์! วันนี้ผมเคลียร์งานทั้งหมดไว้แล้ว เราออกไปเดทกันที่สวนกุหลาบหลวงและงานเทศกาลในเมืองกันเถอะ'",
    "next": "leon_ep2_sub_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_3": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "พอได้ยินคำว่า 'เดท' จากปากเขาตรงๆ คุณก็แอบแก้มร้อนผ่าวขึ้นมาทันที",
    "next": "leon_ep2_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_4": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไม่ต้องทำหน้าเขินแบบนั้นเลย... ก็เราสองคนกำลังศึกษาดูใจกันอยู่ไม่ใช่เหรอ เรียกว่าเดทน่ะถูกแล้ว'",
    "next": "leon_ep2_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_5": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขายื่นมือมาให้คุณจับ แล้วพาคุณเดินออกไปยังสวนกุหลาบหลวงและงานเทศกาลในเมืองท่ามกลางสายลมอ่อนๆ",
    "next": "leon_ep2_6",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_6": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ที่สวนกุหลาบหลวงและงานเทศกาลในเมืองบรรยากาศสดชื่นมาก มีดอกไม้หลากสีสันบานสะพรั่งและผีเสื้อบินวนอยู่รอบๆ",
    "next": "leon_ep2_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_7": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ที่นี่เป็นสถานที่โปรดของผมเลยล่ะ เวลาเครียดๆ ผมชอบแวะมาเดินเล่นที่นี่คนเดียว'",
    "next": "leon_ep2_8",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_8": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'แต่วันนี้พอมีคุณเดินจับมืออยู่ข้างๆ แบบนี้... ที่นี่ดูสวยขึ้นกว่าเดิมตั้งเยอะเลยนะ'",
    "next": "leon_ep2_9",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_9": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ระหว่างเดินชมวิว มีซุ้มขายเครื่องประดับคริสตัลและของที่ระลึกตั้งอยู่ริมทางเดิน",
    "next": "leon_ep2_10",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_10": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณหยุดมองสร้อยข้อมือประดับจี้รูปดาวชิ้นหนึ่งที่ส่องประกายวิบวับ",
    "next": "leon_ep2_11",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_11": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนสังเกตเห็นสายตาของคุณ จึงแอบซื้อสร้อยข้อมือเส้นนั้นมาแล้วยื่นมาสวมให้ที่ข้อมือของคุณทันที!",
    "next": "leon_ep2_12",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_12": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมซื้อให้เป็นของขวัญเดทแรกของเรานะ... ใส่ติดตัวไว้ตลอดล่ะ คนอื่นจะได้รู้ว่าคุณมีเจ้าของแล้ว'",
    "next": "leon_ep2_13",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_13": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณก้มมองสร้อยข้อมือที่เข้ากับข้อมือของคุณพอดีเป๊ะด้วยความประทับใจ",
    "next": "leon_ep2_14",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_14": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไปนั่งพักตรงม้านั่งใต้ต้นไม้ใหญ่กันเถอะ ผมเตรียมตะกร้าปิกนิกมาเผื่อคุณด้วยนะ'",
    "next": "leon_ep2_15",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_15": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าและหยิบแซนด์วิชผลไม้กับน้ำผลไม้เย็นชื่นใจออกมาจัดวาง",
    "next": "leon_ep2_16",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_16": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'อ้าปากสิ เดี๋ยวผมป้อนคำแรกให้เอง'",
    "next": "leon_ep2_17",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_17": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขายื่นชิ้นขนมมาจ่อที่ริมฝีปากของคุณด้วยแววตาพราวระยับ",
    "next": "leon_ep2_18",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_18": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ถ้าไม่ยอมให้ป้อน ผมจะถือว่าคุณอยากให้ผมป้อนด้วยวิธีอื่นนะ...'",
    "next": "leon_ep2_19",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_19": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "หลังจากอิ่มอร่อยกับมื้อเที่ยง ลมพัดกลีบดอกไม้ปลิวลงมาติดบนเส้นผมของคุณ",
    "next": "leon_ep2_20",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_20": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนขยับตัวเข้ามาใกล้มากจนลมหายใจอุ่นๆ รินรดหน้าผากของคุณ เขาค่อยๆ หยิบกลีบดอกไม้ออกจากผมให้คุณ",
    "next": "leon_ep2_21",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_21": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'อยู่ใกล้กันแค่นี้... ได้ยินเสียงหัวใจผมเต้นแรงไหม?'",
    "next": "leon_ep2_choice",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_choice": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ใบหน้าของลีออนอยู่ห่างจากคุณเพียงแค่คืบเดียว คุณจะทำอย่างไรในวินาทีสุดโรแมนติกนี้?",
    "charImg": "assets/char_leon_blush.png",
    "choices": [
      {
        "text": "ยิ้มหวานแล้วขยับเข้าไปหอมแก้มเขาเบาๆ 'ขอบคุณสำหรับเดทวันนี้และสร้อยข้อมือสวยๆ นะคะ'",
        "next": "leon_ep2_good_1",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "รีบผลักอกเขาออกห่าง 'ถอยออกไปหน่อยค่ะ คนมองเยอะแยะ น่าอายจะตาย!'",
        "next": "leon_ep2_bad_1",
        "charGain": "leon",
        "points": -15
      }
    ]
  },
  "leon_ep2_good_1": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนเบิกตากว้างด้วยความตกใจ ก่อนที่ใบหน้าจะแดงก่ำไปถึงใบหู!",
    "next": "leon_ep2_good_1_ext_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_good_2": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ธะ... คุณหอมแก้มผมก่อนแบบนี้ ขี้โกงชะมัดเลย! รู้ไหมว่าผมเกือบห้ามใจไม่อยู่แล้วนะ!'",
    "next": "leon_ep2_good_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_good_3": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขาคว้ามือคุณมากุมไว้แน่นแล้วจุ๊บลงที่หลังมือคุณเป็นการเอาคืนอย่างแสนรัก",
    "next": "leon_ep2_good_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_good_4": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'วันนี้เป็นวันที่ผมมีความสุขที่สุดเลย ไว้เรามาเดทกันแบบนี้อีกบ่อยๆ นะ'",
    "next": "leon_ep3_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_bad_1": {
    "chapter": "รูทลีออน บทที่ 2: ระยะห่าง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนชะงักถอยออกมาตามแรงผลักของคุณ แววตาฉายแววเสียดายและเศร้าหมอง",
    "next": "leon_ep2_bad_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_bad_2": {
    "chapter": "รูทลีออน บทที่ 2: ระยะห่าง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ขอโทษที... ผมคงเผลอเข้าใกล้คุณมากเกินไปจนทำให้คุณอึดอัดสินะ'",
    "next": "leon_ep2_bad_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_bad_3": {
    "chapter": "รูทลีออน บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างเดินกลับจึงเงียบเชียบลงเล็กน้อย",
    "next": "leon_ep3_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_1": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บ่ายวันถัดมา ขณะที่คุณกับลีออนกำลังเดินเล่นพูดคุยกันอยู่ในสวนหลวงอย่างอารมณ์ดี",
    "next": "leon_ep3_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_2": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "จู่ๆ เซดริกก็เดินตรงเข้ามาโบกมือทักทายคุณด้วยรอยยิ้มสดใส!",
    "next": "leon_ep3_3",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_3": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'บังเอิญจังเลยนะที่ได้เจอเธอที่นี่! ไม่ได้คุยกันตั้งหลายวัน คิดถึงเธอชะมัดเลย'",
    "next": "leon_ep3_4",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_4": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ทันทีที่เห็นเซดริกเดินเข้ามาใกล้คุณ ลีออนก็รีบขยับตัวมายืนบังหน้าคุณไว้ครึ่งหนึ่งทันที!",
    "next": "leon_ep3_5",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_5": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'มีธุระอะไรไม่ทราบ เซดริก? ตอนนี้คุณกำลังใช้เวลาอยู่กับผมนะ'",
    "next": "leon_ep3_6",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_6": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เซดริกเลิกคิ้วขึ้นพลางส่งยิ้มกวนๆ ให้ลีออน 'แหมๆ หวงจังเลยนะ ฉันแค่เอาขนมร้านดังมาฝากเธอเฉยๆ เอง'",
    "next": "leon_ep3_7",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_7": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "แล้วเซดริกก็ชะโงกหน้ามาคุยกับคุณ 'นี่ อยู่แต่กับหมอนี่ทั้งวันไม่เบื่อแย่เหรอ? ไปเดินเล่นชมวิวกับฉันสักชั่วโมงไหมล่ะ?'",
    "next": "leon_ep3_8",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_8": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บรรยากาศรอบตัวลีออนทะมึนลงทันที! เขาคว้าเอวคุณดึงเข้ามาชิดตัวเขาต่อหน้าต่อตาเซดริก!",
    "next": "leon_ep3_9",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_9": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'คุณไม่ว่างไปไหนกับนายทั้งนั้นแหละ เพราะตารางเวลาของคุณเป็นของผมคนเดียว!'",
    "next": "leon_ep3_10",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_10": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'เจ้าตัวเขายังไม่ได้ตอบสักหน่อย นายอย่าเพิ่งคิดเองเออเองสิ ลองถามเธอดูก่อนไหมล่ะ?'",
    "next": "leon_ep3_11",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_11": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนหันมามองคุณด้วยสายตาที่ทั้งดุและเว้าวอนปนหึงหวงสุดขีด 'บอกหมอนี่ไปสิว่าคุณจะอยู่กับใคร...'",
    "next": "leon_ep3_choice",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_choice": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ทั้งลีออนและเซดริกต่างมองมาที่คุณเพื่อรอคำตอบ คุณจะทำอย่างไรกับสถานการณ์ชวนหึงนี้?",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png",
    "choices": [
      {
        "text": "กอดแขนลีออนแน่น 'ขอบคุณนะคะคุณเซดริก แต่ฉันอยากอยู่กับลีออนแค่สองคนค่ะ'",
        "next": "leon_ep3_good_1",
        "charGain": "leon",
        "points": 30
      },
      {
        "text": "ทำท่าจะเดินไปหาเซดริก 'จริงด้วยค่ะ อยู่กับลีออนชักเริ่มเบื่อแล้ว ไปเที่ยวกันเถอะ!'",
        "next": "leon_ep3_bad_1",
        "charGain": "leon",
        "points": -20
      }
    ]
  },
  "leon_ep3_good_1": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "พอได้ยินคำตอบของคุณ ลีออนก็ยิ้มกว้างอย่างผู้ชนะทันที! เขาโอบไหล่คุณแน่นขึ้นกว่าเดิม",
    "next": "leon_ep3_good_1_ext_1",
    "charImg": "assets/char_leon_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_good_2": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ได้ยินชัดเต็มสองหูแล้วนะเซดริก คุณบอกว่าอยากอยู่กับผมแค่สองคน เชิญนายกลับไปได้แล้ว'",
    "next": "leon_ep3_good_3",
    "charImg": "assets/char_leon_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_good_3": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เซดริกยกมือยอมแพ้พร้อมหัวเราะเบาๆ 'ก็ได้ๆ ยอมแพ้แล้วจ้า ดูแลเธอดีๆ ล่ะ ถ้าทำเธอร้องไห้เมื่อไหร่ฉันมาแย่งคืนแน่!'",
    "next": "leon_ep3_good_4",
    "charImg": "assets/char_leon_smile.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_good_4": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เมื่อเซดริกเดินจากไปแล้ว ลีออนก็หันมามองคุณด้วยแก้มแดงระเรื่อ",
    "next": "leon_ep3_after_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_bad_1": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนรีบคว้าข้อมือคุณไว้แน่น แววตาของเขาฉายแววเจ็บปวดและน้อยใจอย่างปิดไม่มิด",
    "next": "leon_ep3_bad_1_ext_1",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png"
  },
  "leon_ep3_bad_2": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'อย่าพูดว่าจะไปกับผู้ชายคนอื่นต่อหน้าผมแบบนั้นสิ... คุณไม่รู้เลยเหรอว่าผมหวงคุณแค่ไหน'",
    "next": "leon_ep3_bad_3",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_bad_3": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เห็นสีหน้าจริงจังของลีออนแล้ว เซดริกจึงยอมถอยหลังให้ 'เอาล่ะๆ ฉันแค่แซวเล่นเฉยๆ พวกเธอคุยกันดีๆ เถอะนะ'",
    "next": "leon_ep3_bad_4",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "leon_ep3_bad_4": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เมื่อเหลือกันแค่สองคน คุณจึงต้องรีบง้อลีออนที่กำลังงอนตุ๊บป่องอยู่",
    "next": "leon_ep3_after_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_after_1": {
    "chapter": "รูทลีออน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ห้ามไปยิ้มหวานให้คนอื่นแบบเมื่อกี้อีกนะ... เวลาเห็นผู้ชายคนอื่นมายุ่งกับคุณ ใจผมมันร้อนรุ่มไปหมดเลย'",
    "next": "leon_ep3_after_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_2": {
    "chapter": "รูทลีออน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาซบหน้าลงกับไหล่ของคุณเหมือนลูกแมวตัวโตๆ ที่กำลังอ้อนเจ้าของ",
    "next": "leon_ep3_after_sub_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_3": {
    "chapter": "รูทลีออน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมไม่เคยขี้หึงหรือขี้หวงใครขนาดนี้มาก่อนเลยนะ... ทั้งหมดเป็นเพราะคุณคนเดียวเลยรู้ตัวไหม'",
    "next": "leon_ep3_after_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_4": {
    "chapter": "รูทลีออน บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณลูบผมนุ่มๆ ของเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มออกมาได้อีกครั้ง",
    "next": "leon_ep4_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_1": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "คืนหนึ่งในสัปดาห์ต่อมา พายุฝนกระหน่ำลงมาอย่างหนัก เสียงฟ้าร้องคำรามก้องไปทั่วทั้งปราสาท",
    "next": "leon_ep4_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_2": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงถือตะเกียงเดินไปดูที่ห้องของลีออน และพบว่าเขากำลังยืนมองสายฝนอยู่ที่หน้าต่างเพียงลำพัง",
    "next": "leon_ep4_sub_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_3": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "เมื่อได้ยินเสียงคุณเดินเข้ามา เขาก็หันมามองด้วยแววตาที่ดูเปราะบางผิดไปจากเวลาปกติ",
    "next": "leon_ep4_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_4": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'ยังไม่นอนอีกเหรอ? หรือว่าเสียงฟ้าร้องทำให้คุณนอนไม่หลับกันล่ะ'",
    "next": "leon_ep4_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_5": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "คุณเดินเข้าไปหาเขาแล้วแตะที่มือของเขา พบว่ามือของเขาเย็นเฉียบ",
    "next": "leon_ep4_6",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_6": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "เขาหลุบตามองมือของคุณที่กุมมือเขาไว้ ก่อนจะถอนหายใจออกมาเบาๆ",
    "next": "leon_ep4_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_7": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'ความจริงแล้ว... ทุกครั้งที่ฝนตกหนักแบบนี้ ผมมักจะนึกถึงเรื่องในอดีตที่ไม่อยากจำอยู่เสมอน่ะ'",
    "next": "leon_ep4_8",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_8": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "คุณพาเขามานั่งลงที่หน้าเตาผิงไฟอุ่นๆ และรับฟังเขาอย่างตั้งใจ",
    "next": "leon_ep4_9",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_9": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'ความจริงแล้วผมไม่ได้เกิดในตระกูลขุนนางหรอกครับ ผมเป็นเด็กกำพร้าที่ท่านแม่ทัพเก็บมาเลี้ยง ผมเลยต้องฝึกดาบหนักกว่าคนอื่นสิบเท่าเพื่อให้ได้รับการยอมรับ และลึกๆ ผมก็กลัวมาตลอดว่าตัวเองจะไม่คู่ควรกับคนพิเศษอย่างคุณ'",
    "next": "leon_ep4_10",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_10": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "น้ำเสียงของเขาสั่นเครือเล็กน้อยเมื่อเล่าถึงบาดแผลในใจที่ไม่เคยเปิดเผยให้ใครฟังมาก่อน",
    "next": "leon_ep4_11",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_11": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'บางครั้งผมก็แอบกลัวนะ... ว่าถ้าคุณรู้อดีตและด้านที่อ่อนแอของผมแล้ว คุณจะมองผมเปลี่ยนไปหรือเปล่า'",
    "next": "leon_ep4_choice",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_choice": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "ลีออนเปิดเปลือยความลับและบาดแผลในใจให้คุณฟังทั้งหมด คุณจะปลอบโยนเขาอย่างไร?",
    "charImg": "assets/char_leon.png",
    "choices": [
      {
        "text": "ดึงเขามากอดแน่น 'ไม่เปลี่ยนไปแน่นอนค่ะ ต่อไปนี้ฉันจะอยู่เคียงข้างไม่ให้ลีออนต้องเจ็บปวดอีกแล้วนะ'",
        "next": "leon_ep4_good_1",
        "charGain": "leon",
        "points": 30
      },
      {
        "text": "ขยับถอยห่าง 'ไม่นึกเลยว่าคุณจะมีปมปัญหาเยอะขนาดนี้ ฟังแล้วอึดอัดจังค่ะ'",
        "next": "leon_ep4_bad_1",
        "charGain": "leon",
        "points": -20
      }
    ]
  },
  "leon_ep4_good_1": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนกอดตอบคุณแน่นราวกับคุณคือสิ่งล้ำค่าที่สุดในชีวิต ความอบอุ่นจากอ้อมกอดของคุณช่วยละลายความหนาวเหน็บในใจของเขาจนหมดสิ้น",
    "next": "leon_ep4_good_1_ext_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep4_good_2": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะ... แค่มีคุณกอดผมไว้แบบนี้ เรื่องเลวร้ายในอดีตก็ไม่สำคัญสำหรับผมอีกต่อไปแล้ว'",
    "next": "leon_ep4_good_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep4_good_3": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'คืนนี้อยู่เป็นเพื่อนผมจนกว่าพายุจะสงบได้ไหม... แค่นอนจับมือกันเฉยๆ ก็พอ สัญญาว่าจะไม่ทำอะไรเกินเลยจริงๆ'",
    "next": "leon_ep4_good_4",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_good_4": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คืนนั้นคุณและเขานอนกุมมือกันอยู่ข้างเตาผิงอุ่นๆ จนหลับใหลไปด้วยกันอย่างมีความสุข",
    "next": "leon_ep5_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_bad_1": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนหลับตาลงซ่อนความเจ็บปวดในแววตา 'นั่นสินะ... ผมไม่น่าเล่าเรื่องน่าเบื่อให้คุณฟังเลย ขอโทษด้วยนะ'",
    "next": "leon_ep4_bad_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_bad_2": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ทิ้งให้เขานั่งมองเปลวไฟในเตาผิงเพียงลำพัง",
    "next": "leon_ep5_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_1": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา เกิดเรื่องใหญ่ขึ้นในอาณาจักร! อดีตแม่ทัพฝ่ายตรงข้ามท้าประลองดาบชิงตำแหน่งผู้บัญชาการสูงสุด โดยดูถูกชาติกำเนิดของลีออนว่าไม่คู่ควรจะยืนเคียงข้างธิดาแห่งแสงดาว",
    "next": "leon_ep5_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_2": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ข่าวลือแพร่สะพัดไปทั่วพระราชวัง จนผู้คนต่างจับตามองว่าความสัมพันธ์ของคุณสองคนจะผ่านวิกฤตนี้ไปได้หรือไม่",
    "next": "leon_ep5_sub_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_3": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนเดินเข้ามาหาคุณและจับมือทั้งสองข้างของคุณไว้แน่น แววตาของเขาแน่วแน่และมั่นคงไร้ความลังเล",
    "next": "leon_ep5_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_4": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไม่ต้องกังวลกับคำพูดของคนอื่นนะ ไม่ว่าจะเกิดอะไรขึ้น ผมจะไม่มีวันยอมปล่อยมือคุณเด็ดขาด'",
    "next": "leon_ep5_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_5": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ขอแค่คุณยืนยันคำเดียวว่าพร้อมจะสู้ไปกับผม... ต่อให้ต้องงัดข้อกับคนทั้งอาณาจักร ผมก็พร้อมลุย!'",
    "next": "leon_ep5_choice",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_choice": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ตรงหน้าคือบททดสอบครั้งใหญ่ของความรัก คุณจะจับมือสู้ไปกับลีออนหรือไม่?",
    "charImg": "assets/char_leon.png",
    "choices": [
      {
        "text": "บีบมือเขาแน่น 'ไปลุยด้วยกันเลยค่ะลีออน! ไม่ว่าจะมีอุปสรรคอะไร ฉันก็จะอยู่เคียงข้างคุณเสมอ!'",
        "next": "leon_ep5_good_1",
        "charGain": "leon",
        "points": 35
      },
      {
        "text": "ปล่อยมือด้วยความกลัว 'มันยากเกินไปค่ะ เราสองคนยอมแพ้แยกทางกันแค่นี้เถอะ'",
        "next": "leon_ep5_bad_1",
        "charGain": "leon",
        "points": -20
      }
    ]
  },
  "leon_ep5_good_1": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ด้วยกำลังใจจากคุณ ลีออนสามารถเอาชนะการประลองได้อย่างขาวสะอาดและสง่างาม พิสูจน์ให้ทั้งอาณาจักรเห็นว่าเขาคืออัศวินที่แข็งแกร่งและคู่ควรกับคุณที่สุด",
    "next": "leon_ep5_good_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_good_2": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ท่ามกลางเสียงปรบมือชื่นชมของผู้คนทั่วทั้งโถงพระราชวัง เขาหันมายิ้มกว้างให้คุณด้วยความภาคภูมิใจ",
    "next": "leon_ep5_good_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_good_3": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'เห็นไหมล่ะ พอมีคุณอยู่ข้างๆ ไม่มีอะไรในโลกนี้ที่เราสองคนผ่านไปไม่ได้เลย!'",
    "next": "leon_ep5_good_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_good_4": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ตอนนี้ไม่มีอุปสรรคใดๆ มาขวางกั้นความรักของคุณกับเขาได้อีกต่อไปแล้ว!",
    "next": "leon_ep6_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_bad_1": {
    "chapter": "รูทลีออน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "แม้คุณจะลังเลและหวาดกลัว แต่ลีออนก็ยังฝืนออกหน้ารับมือกับปัญหาทั้งหมดด้วยตัวคนเดียวจนผ่านพ้นมาได้",
    "next": "leon_ep5_bad_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_bad_2": {
    "chapter": "รูทลีออน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ทุกอย่างเรียบร้อยแล้วล่ะ... คุณปลอดภัยแล้วนะ ไม่ต้องกลัวอีกต่อไปแล้ว'",
    "next": "leon_ep6_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep6_1": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ค่ำคืนหลังผ่านพ้นเรื่องราวทั้งหมด ลีออนพาคุณมาที่ระเบียงชมจันทร์ซึ่งประดับด้วยดอกไม้และแสงเทียนโรแมนติก",
    "next": "leon_ep6_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep6_2": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ลมยามค่ำคืนพัดเอื่อยๆ ดวงดาวนับพันส่องแสงระยิบระยับอยู่เต็มท้องฟ้า",
    "next": "leon_ep6_sub_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep6_3": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาหยุดตรงหน้าคุณ แล้วค่อยๆ ประคองมือทั้งสองข้างของคุณขึ้นมากุมไว้แนบอก",
    "next": "leon_ep6_4",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep6_4": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'ตั้งแต่วินาทีแรกที่คุณปรากฏตัวขึ้นในวิหาร... ชีวิตของผมก็เปลี่ยนไปตลอดกาล'",
    "next": "leon_ep6_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_5": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'รอยยิ้มของคุณ เสียงหัวเราะของคุณ และความอ่อนโยนของคุณ... ทำให้ผมตกหลุมรักคุณซ้ำแล้วซ้ำเล่าทุกวัน'",
    "next": "leon_ep6_6",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_6": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'ผมไม่อยากให้คุณกลับไปยังโลกเดิมอีกแล้ว... ผมรักคุณนะ อยู่เคียงข้างผมตลอดไปในฐานะคู่ชีวิตของผมได้ไหม?'",
    "next": "leon_final_decision",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_final_decision": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "ลีออนสารภาพรักหมดหัวใจและขอคุณเป็นคู่ชีวิตชั่วนิรันดร์ คุณจะตอบรับความรักของเขาอย่างไร?",
    "charImg": "assets/char_leon_blush.png",
    "choices": [
      {
        "text": "โผเข้ากอดเขาแน่น 'ตกลงค่ะลีออน! ฉันก็รักคุณสุดหัวใจ และจะอยู่กับคุณตลอดไปเลยค่ะ!'",
        "next": "leon_true_ep_1",
        "charGain": "leon",
        "points": 50
      },
      {
        "text": "ก้าวถอยหลังเบาๆ 'ขอโทษนะคะ ขอบคุณสำหรับทุกอย่างแต่ฉันคิดกับคุณแค่คนสำคัญที่แสนดีค่ะ'",
        "next": "leon_norm_ep_1",
        "charGain": "leon",
        "points": -25
      }
    ]
  },
  "leon_true_ep_1": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ทันทีที่ได้ยินคำตอบตกลง ลีออนก็ยิ้มกว้างด้วยความดีใจที่สุดในชีวิต เขารวบตัวคุณเข้ามากอดแน่นจนตัวลอย!",
    "next": "leon_true_ep_1_ext_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_2": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'คุณรับรักผมแล้วนะ! ห้ามเปลี่ยนใจคืนคำเด็ดขาดเลยนะรู้ไหม!'",
    "next": "leon_true_ep_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_true_ep_3": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาค่อยๆ ประคองใบหน้าของคุณให้เงยขึ้นสบตา ก่อนจะโน้มใบหน้าลงมามอบจูบที่แสนหวานและอ่อนโยนใต้แสงจันทร์",
    "next": "leon_true_ep_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ละอองแสงดาวสีทองลอยหมุนวนโอบล้อมร่างของคุณทั้งสองคน เพื่อร่วมเฉลิมฉลองพันธสัญญาแห่งรักนิรันดร์",
    "next": "leon_true_ep_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_5": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เมื่อถอนจูบออก เขาก็แนบหน้าผากเข้ากับหน้าผากของคุณ ลมหายใจอุ่นๆ เต็มไปด้วยความรักล้นหัวใจ",
    "next": "leon_true_ep_6",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_6": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ต่อจากนี้ไป ไม่ว่าเช้าสายบ่ายเย็น ผมจะคอยดูแลตามใจและบอกรักคุณทุกวันเลย... รักคุณที่สุดในโลกเลยนะ'",
    "next": "leon_ending_good",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ending_good": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนรักและทะนุถนอมคุณสุดหัวใจ เขาเป็นคนรักที่ซื่อสัตย์ อบอุ่น และคอยปกป้องรอยยิ้มของคุณตลอดไป!",
    "charImg": "assets/char_leon_smile.png",
    "ending": {
      "type": "True Romance Ending",
      "char": "leon",
      "title": "ยอดดวงใจแห่งอัศวินสุริยัน",
      "desc": "ลีออนรักและทะนุถนอมคุณสุดหัวใจ เขาเป็นคนรักที่ซื่อสัตย์ อบอุ่น และคอยปกป้องรอยยิ้มของคุณตลอดไป!"
    }
  },
  "leon_norm_ep_1": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ผู้ภักดี",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนนิ่งไปครู่หนึ่ง ก่อนจะระบายยิ้มบางๆ อย่างเข้าใจแม้แววตาจะแฝงความเศร้าอยู่ลึกๆ",
    "next": "leon_norm_ep_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_norm_ep_2": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ผู้ภักดี",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เข้าใจแล้วล่ะ... ความรู้สึกของหัวใจมันบังคับกันไม่ได้นี่นา ขอบคุณที่พูดกับผมตรงๆ นะ'",
    "next": "leon_norm_ep_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_norm_ep_3": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ผู้ภักดี",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'แต่ถึงจะไม่ได้เป็นคนรักกัน ผมก็ยังดีใจที่ได้พบและได้ดูแลคุณนะ ถ้ามีเรื่องเดือดร้อนเมื่อไหร่ เรียกหาผมได้เสมอ'",
    "next": "leon_ending_normal",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ending_normal": {
    "chapter": "ตอนจบปกติ: ผู้พิทักษ์ผู้ภักดี",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยังคงทำหน้าที่อัศวินองครักษ์ข้างกายคุณด้วยความซื่อสัตย์และจงรักภักดีเสมอ",
    "charImg": "assets/char_leon.png",
    "ending": {
      "type": "Normal Ending",
      "char": "leon",
      "title": "ผู้พิทักษ์ผู้ภักดี",
      "desc": "ลีออนยังคงทำหน้าที่อัศวินองครักษ์ข้างกายคุณด้วยความซื่อสัตย์และจงรักภักดีเสมอ"
    }
  },
  "kael_branch_start": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลคว้ามือคุณมากุมไว้พร้อมรอยยิ้มเจ้าเล่ห์แต่แววตาเป็นประกาย 'ในเมื่อเธอเลือกฉันแล้ว เตรียมตัวออกไปผจญภัยในโลกของฉันได้เลยยัยตัวแสบ!'",
    "charImg": "assets/char_kael_smile.png",
    "next": "kael_ep1_2"
  },
  "kael_ep1_2": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ท่ามกลางสายตาของอีกสามคนที่มองตามด้วยความเสียดาย คุณเดินเคียงข้างเคลมุ่งหน้าไปยังฐานลับบนหอนาฬิกาและคฤหาสน์เงาจันทร์",
    "next": "kael_ep1_sub_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_3": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ถึงแล้วล่ะ นี่คือฐานลับบนหอนาฬิกาและคฤหาสน์เงาจันทร์ ต่อจากนี้ไปให้คิดซะว่าที่นี่คือบ้านของเธอเลยนะ'",
    "next": "kael_ep1_4",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_4": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "บรรยากาศภายในฐานลับบนหอนาฬิกาและคฤหาสน์เงาจันทร์ถูกจัดเตรียมไว้อย่างสวยงามและอบอุ่น มีมุมพักผ่อนที่มีแสงแดดส่องถึง",
    "next": "kael_ep1_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_5": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'ฉันให้คนจัดห้องพักของเธอไว้ติดกับห้องของฉันเลย ถ้ามีอะไรตอนกลางคืนจะได้เรียกหากันได้ทันที'",
    "next": "kael_ep1_6",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_6": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "คุณเดินสำรวจรอบๆ ห้องพัก พบว่ามีทั้งดอกไม้สด หมอนอิงนุ่มๆ และหนังสืออ่านเล่นที่คุณชอบวางเตรียมไว้ครบถ้วน",
    "next": "kael_ep1_7",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_7": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'กะ... ก็ฉันแอบสังเกตมาตลอดนี่นาว่าเธอชอบอะไรบ้าง เลยเตรียมไว้ให้ถูกใจเธอยังไงล่ะ'",
    "next": "kael_ep1_8",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_8": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณยิ้มให้กับความใส่ใจของเขา ก่อนที่เขาจะพาคุณมานั่งพักที่โซฟาริมหน้าต่าง",
    "next": "kael_ep1_9",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_9": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เดี๋ยวฉันไปเตรียมของว่างมาให้นะ วันนี้จะโชว์ฝีมือทำขนมทาร์ตผลไม้และสะสมอัญมณีแปลกตาให้เธอลองชิมดู'",
    "next": "kael_ep1_10",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_10": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ไม่นานนัก เคลก็เดินถือถาดชาร้อนหอมกรุ่นและขนมหน้าตาน่าทานมาวางตรงหน้าคุณ",
    "next": "kael_ep1_11",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_11": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ลองชิมดูสิ หวานกำลังดีหรือเปล่า?'",
    "next": "kael_ep1_12",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_12": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณตักขนมเข้าปากคำแรก รสชาติหวานละมุนละลายในปากจนคุณเผลอยิ้มกว้างออกมา",
    "next": "kael_ep1_13",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_13": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "พอเห็นรอยยิ้มของคุณ เขาก็มองเพลินจนแก้มแดง 'เห็นเธอกินอย่างมีความสุขแบบนี้ คนทำก็หายเหนื่อยเป็นปลิดทิ้งเลยแฮะ'",
    "next": "kael_ep1_14",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_14": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "จู่ๆ เขาก็ยื่นมือมาแตะที่มุมปากของคุณเบาๆ 'มีครีมติดแก้มแน่ะ... อยู่กับฉันสองคนแล้วระวังตัวหน่อยสิ น่ารักเกินไปเดี๋ยวฉันก็อดใจไม่ไหวหรอก'",
    "next": "kael_ep1_15",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_15": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "สัมผัสอุ่นๆ จากปลายนิ้วของเขาทำให้หัวใจของคุณเต้นรัวเร็วขึ้นทันที",
    "next": "kael_ep1_16",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_16": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'หลังจากผ่านเรื่องวุ่นวายมาหลายวัน ในที่สุดฉันก็ได้ใช้เวลาเงียบๆ กับเธอสองคนสักทีนะ'",
    "next": "kael_ep1_17",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_17": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ตอนอยู่ในวิหาร ตอนที่ยังไม่รู้ว่าเธอจะเลือกใคร... สารภาพตามตรงเลยว่าฉันลุ้นแทบแย่'",
    "next": "kael_ep1_18",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_18": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาขยับมานั่งชิดคุณบนโซฟาตัวเดียวกัน จนไหล่ของคุณทั้งคู่แตะกันเบาๆ",
    "next": "kael_ep1_19",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_19": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ถามจริงๆ เถอะ... อะไรทำให้เธอตัดสินใจเลือกเดินมาหาฉันแทนที่จะเป็นอีกสามคนนั้นเหรอ?'",
    "next": "kael_ep1_20",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_20": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ดวงตาของเขามองลึกเข้ามาในดวงตาของคุณอย่างรอคอยคำตอบ",
    "next": "kael_ep1_21",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_21": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'คนอื่นมักจะมองฉันจากภาพลักษณ์ภายนอกเสมอ มีแค่เธอคนเดียวที่มองเข้ามาถึงตัวตนจริงๆ ของฉัน'",
    "next": "kael_ep1_22",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_22": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ลมยามบ่ายพัดผ้าม่านปลิวเบาๆ กลิ่นหอมประจำตัวของเขาลอยมาแตะจมูก",
    "next": "kael_ep1_23",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_23": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'บอกให้ฉันชื่นใจหน่อยสิ... ว่าเธอคิดยังไงกับฉันกันแน่?'",
    "next": "kael_ep1_choice",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_choice": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลจ้องตาคุณด้วยความคาดหวังและเขินอาย คุณจะตอบเขาว่าอย่างไร?",
    "charImg": "assets/char_kael_blush.png",
    "choices": [
      {
        "text": "กุมมือเขาไว้ 'เพราะเวลาอยู่กับเคล ฉันรู้สึกอบอุ่นและเป็นตัวเองได้มากที่สุดเลยค่ะ'",
        "next": "kael_ep1_good_1",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ดึงมือกลับ 'ฉันก็แค่เลือกไปงั้นแหละค่ะ ไม่ได้คิดอะไรพิเศษสักหน่อย'",
        "next": "kael_ep1_bad_1",
        "charGain": "kael",
        "points": -15
      }
    ]
  },
  "kael_ep1_good_1": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลหน้าแดงจัด รอยยิ้มกว้างปรากฏขึ้นบนใบหน้าหล่อเหลา 'พูดจาน่ารักแบบนี้... ระวังฉันจะกอดไม่ปล่อยนะ!'",
    "next": "kael_ep1_good_1_ext_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_good_2": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาดึงคุณเข้าไปกอดแนบอกอย่างทะนุถนอม เสียงหัวใจของเขาเต้นดังตึกตักอยู่ข้างหูคุณ",
    "next": "kael_ep1_good_3",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_good_3": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ขอบคุณนะ... ฉันจะทำให้ทุกวันที่เธออยู่กับฉันมีแต่รอยยิ้มเลย คอยดูสิ'",
    "next": "kael_ep1_good_4",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_good_4": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณสองคนนั่งพูดคุยและหัวเราะด้วยกันจนกระทั่งแสงอาทิตย์ยามเย็นค่อยๆ ลับขอบฟ้าไป",
    "next": "kael_ep2_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_bad_1": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลชะงักไป แววตาที่เคยเป็นประกายหม่นแสงลงทันที 'งั้นเหรอ... นั่นสินะ ฉันคงคิดเข้าข้างตัวเองมากเกินไป'",
    "next": "kael_ep1_bad_1_ext_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_bad_2": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาฝืนยิ้มบางๆ แล้วลุกขึ้นเก็บถ้วยชาด้วยท่าทางเงียบขรึม",
    "next": "kael_ep1_bad_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_bad_3": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ไม่เป็นไรหรอก เธอพักผ่อนตามสบายเถอะนะ เดี๋ยวฉันออกไปเดินรับลมข้างนอกสักหน่อย'",
    "next": "kael_ep1_bad_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_bad_4": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "บรรยากาศในห้องดูเหงาหงอยลงถนัดตา ก่อนจะผ่านพ้นวันแรกไป",
    "next": "kael_ep2_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_1": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา อากาศแจ่มใสเป็นพิเศษ เคลมารอรับคุณที่หน้าห้องด้วยชุดลำลองที่ดูหล่อเหลาไปอีกแบบ",
    "next": "kael_ep2_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_2": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'อรุณสวัสดิ์! วันนี้ฉันเคลียร์งานทั้งหมดไว้แล้ว เราออกไปเดทกันที่ตลาดนัดกลางคืนและจุดชมวิวบนยอดเขากันเถอะ'",
    "next": "kael_ep2_sub_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_3": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "พอได้ยินคำว่า 'เดท' จากปากเขาตรงๆ คุณก็แอบแก้มร้อนผ่าวขึ้นมาทันที",
    "next": "kael_ep2_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_4": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ไม่ต้องทำหน้าเขินแบบนั้นเลย... ก็เราสองคนกำลังศึกษาดูใจกันอยู่ไม่ใช่เหรอ เรียกว่าเดทน่ะถูกแล้ว'",
    "next": "kael_ep2_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_5": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขายื่นมือมาให้คุณจับ แล้วพาคุณเดินออกไปยังตลาดนัดกลางคืนและจุดชมวิวบนยอดเขาท่ามกลางสายลมอ่อนๆ",
    "next": "kael_ep2_6",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_6": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ที่ตลาดนัดกลางคืนและจุดชมวิวบนยอดเขาบรรยากาศสดชื่นมาก มีดอกไม้หลากสีสันบานสะพรั่งและผีเสื้อบินวนอยู่รอบๆ",
    "next": "kael_ep2_7",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_7": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ที่นี่เป็นสถานที่โปรดของฉันเลยล่ะ เวลาเครียดๆ ฉันชอบแวะมาเดินเล่นที่นี่คนเดียว'",
    "next": "kael_ep2_8",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_8": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'แต่วันนี้พอมีเธอเดินจับมืออยู่ข้างๆ แบบนี้... ที่นี่ดูสวยขึ้นกว่าเดิมตั้งเยอะเลยนะ'",
    "next": "kael_ep2_9",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_9": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ระหว่างเดินชมวิว มีซุ้มขายเครื่องประดับคริสตัลและของที่ระลึกตั้งอยู่ริมทางเดิน",
    "next": "kael_ep2_10",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_10": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณหยุดมองสร้อยข้อมือประดับจี้รูปดาวชิ้นหนึ่งที่ส่องประกายวิบวับ",
    "next": "kael_ep2_11",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_11": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลสังเกตเห็นสายตาของคุณ จึงแอบซื้อสร้อยข้อมือเส้นนั้นมาแล้วยื่นมาสวมให้ที่ข้อมือของคุณทันที!",
    "next": "kael_ep2_12",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_12": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ฉันซื้อให้เป็นของขวัญเดทแรกของเรานะ... ใส่ติดตัวไว้ตลอดล่ะ คนอื่นจะได้รู้ว่าเธอมีเจ้าของแล้ว'",
    "next": "kael_ep2_13",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_13": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณก้มมองสร้อยข้อมือที่เข้ากับข้อมือของคุณพอดีเป๊ะด้วยความประทับใจ",
    "next": "kael_ep2_14",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_14": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ไปนั่งพักตรงม้านั่งใต้ต้นไม้ใหญ่กันเถอะ ฉันเตรียมตะกร้าปิกนิกมาเผื่อเธอด้วยนะ'",
    "next": "kael_ep2_15",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_15": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าและหยิบแซนด์วิชผลไม้กับน้ำผลไม้เย็นชื่นใจออกมาจัดวาง",
    "next": "kael_ep2_16",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_16": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'อ้าปากสิ เดี๋ยวฉันป้อนคำแรกให้เอง'",
    "next": "kael_ep2_17",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_17": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เขายื่นชิ้นขนมมาจ่อที่ริมฝีปากของคุณด้วยแววตาพราวระยับ",
    "next": "kael_ep2_18",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_18": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ถ้าไม่ยอมให้ป้อน ฉันจะถือว่าเธออยากให้ฉันป้อนด้วยวิธีอื่นนะ...'",
    "next": "kael_ep2_19",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_19": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "หลังจากอิ่มอร่อยกับมื้อเที่ยง ลมพัดกลีบดอกไม้ปลิวลงมาติดบนเส้นผมของคุณ",
    "next": "kael_ep2_20",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_20": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลขยับตัวเข้ามาใกล้มากจนลมหายใจอุ่นๆ รินรดหน้าผากของคุณ เขาค่อยๆ หยิบกลีบดอกไม้ออกจากผมให้คุณ",
    "next": "kael_ep2_21",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_21": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'อยู่ใกล้กันแค่นี้... ได้ยินเสียงหัวใจฉันเต้นแรงไหม?'",
    "next": "kael_ep2_choice",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_choice": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ใบหน้าของเคลอยู่ห่างจากคุณเพียงแค่คืบเดียว คุณจะทำอย่างไรในวินาทีสุดโรแมนติกนี้?",
    "charImg": "assets/char_kael_blush.png",
    "choices": [
      {
        "text": "ยิ้มหวานแล้วขยับเข้าไปหอมแก้มเขาเบาๆ 'ขอบคุณสำหรับเดทวันนี้และสร้อยข้อมือสวยๆ นะคะ'",
        "next": "kael_ep2_good_1",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "รีบผลักอกเขาออกห่าง 'ถอยออกไปหน่อยค่ะ คนมองเยอะแยะ น่าอายจะตาย!'",
        "next": "kael_ep2_bad_1",
        "charGain": "kael",
        "points": -15
      }
    ]
  },
  "kael_ep2_good_1": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลเบิกตากว้างด้วยความตกใจ ก่อนที่ใบหน้าจะแดงก่ำไปถึงใบหู!",
    "next": "kael_ep2_good_1_ext_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_good_2": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ธะ... เธอหอมแก้มฉันก่อนแบบนี้ ขี้โกงชะมัดเลย! รู้ไหมว่าฉันเกือบห้ามใจไม่อยู่แล้วนะ!'",
    "next": "kael_ep2_good_3",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_good_3": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เขาคว้ามือคุณมากุมไว้แน่นแล้วจุ๊บลงที่หลังมือคุณเป็นการเอาคืนอย่างแสนรัก",
    "next": "kael_ep2_good_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_good_4": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'วันนี้เป็นวันที่ฉันมีความสุขที่สุดเลย ไว้เรามาเดทกันแบบนี้อีกบ่อยๆ นะ'",
    "next": "kael_ep3_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_bad_1": {
    "chapter": "รูทเคล บทที่ 2: ระยะห่าง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลชะงักถอยออกมาตามแรงผลักของคุณ แววตาฉายแววเสียดายและเศร้าหมอง",
    "next": "kael_ep2_bad_1_ext_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_bad_2": {
    "chapter": "รูทเคล บทที่ 2: ระยะห่าง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ขอโทษที... ฉันคงเผลอเข้าใกล้เธอมากเกินไปจนทำให้เธออึดอัดสินะ'",
    "next": "kael_ep2_bad_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_bad_3": {
    "chapter": "รูทเคล บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างเดินกลับจึงเงียบเชียบลงเล็กน้อย",
    "next": "kael_ep3_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_1": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บ่ายวันถัดมา ขณะที่คุณกับเคลกำลังเดินเล่นพูดคุยกันอยู่ในสวนหลวงอย่างอารมณ์ดี",
    "next": "kael_ep3_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_2": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "จู่ๆ ลูเชียนก็เดินตรงเข้ามาโบกมือทักทายคุณด้วยรอยยิ้มสดใส!",
    "next": "kael_ep3_3",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_3": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'บังเอิญจังเลยนะที่ได้เจอคุณที่นี่! ไม่ได้คุยกันตั้งหลายวัน คิดถึงคุณชะมัดเลย'",
    "next": "kael_ep3_4",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_4": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ทันทีที่เห็นลูเชียนเดินเข้ามาใกล้คุณ เคลก็รีบขยับตัวมายืนบังหน้าคุณไว้ครึ่งหนึ่งทันที!",
    "next": "kael_ep3_5",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_5": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'มีธุระอะไรไม่ทราบ ลูเชียน? ตอนนี้เธอกำลังใช้เวลาอยู่กับฉันนะ'",
    "next": "kael_ep3_6",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_6": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ลูเชียนเลิกคิ้วขึ้นพลางส่งยิ้มกวนๆ ให้เคล 'แหมๆ หวงจังเลยนะ ผมแค่เอาขนมร้านดังมาฝากคุณเฉยๆ เอง'",
    "next": "kael_ep3_7",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_7": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "แล้วลูเชียนก็ชะโงกหน้ามาคุยกับคุณ 'นี่ อยู่แต่กับหมอนี่ทั้งวันไม่เบื่อแย่เหรอ? ไปเดินเล่นชมวิวกับผมสักชั่วโมงไหมล่ะ?'",
    "next": "kael_ep3_8",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_8": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บรรยากาศรอบตัวเคลทะมึนลงทันที! เขาคว้าเอวคุณดึงเข้ามาชิดตัวเขาต่อหน้าต่อตาลูเชียน!",
    "next": "kael_ep3_9",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_9": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'เธอไม่ว่างไปไหนกับนายทั้งนั้นแหละ เพราะตารางเวลาของเธอเป็นของฉันคนเดียว!'",
    "next": "kael_ep3_10",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_10": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'เจ้าตัวเขายังไม่ได้ตอบสักหน่อย นายอย่าเพิ่งคิดเองเออเองสิ ลองถามคุณดูก่อนไหมล่ะ?'",
    "next": "kael_ep3_11",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_11": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลหันมามองคุณด้วยสายตาที่ทั้งดุและเว้าวอนปนหึงหวงสุดขีด 'บอกหมอนี่ไปสิว่าเธอจะอยู่กับใคร...'",
    "next": "kael_ep3_choice",
    "charImg": "assets/char_kael_blush.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_choice": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ทั้งเคลและลูเชียนต่างมองมาที่คุณเพื่อรอคำตอบ คุณจะทำอย่างไรกับสถานการณ์ชวนหึงนี้?",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png",
    "choices": [
      {
        "text": "กอดแขนเคลแน่น 'ขอบคุณนะคะคุณลูเชียน แต่ฉันอยากอยู่กับเคลแค่สองคนค่ะ'",
        "next": "kael_ep3_good_1",
        "charGain": "kael",
        "points": 30
      },
      {
        "text": "ทำท่าจะเดินไปหาลูเชียน 'จริงด้วยค่ะ อยู่กับเคลชักเริ่มเบื่อแล้ว ไปเที่ยวกันเถอะ!'",
        "next": "kael_ep3_bad_1",
        "charGain": "kael",
        "points": -20
      }
    ]
  },
  "kael_ep3_good_1": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "พอได้ยินคำตอบของคุณ เคลก็ยิ้มกว้างอย่างผู้ชนะทันที! เขาโอบไหล่คุณแน่นขึ้นกว่าเดิม",
    "next": "kael_ep3_good_1_ext_1",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_good_2": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ได้ยินชัดเต็มสองหูแล้วนะลูเชียน เธอบอกว่าอยากอยู่กับฉันแค่สองคน เชิญนายกลับไปได้แล้ว'",
    "next": "kael_ep3_good_3",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_good_3": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ลูเชียนยกมือยอมแพ้พร้อมหัวเราะเบาๆ 'ก็ได้ๆ ยอมแพ้แล้วจ้า ดูแลคุณดีๆ ล่ะ ถ้าทำคุณร้องไห้เมื่อไหร่ผมมาแย่งคืนแน่!'",
    "next": "kael_ep3_good_4",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_good_4": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เมื่อลูเชียนเดินจากไปแล้ว เคลก็หันมามองคุณด้วยแก้มแดงระเรื่อ",
    "next": "kael_ep3_after_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_bad_1": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลรีบคว้าข้อมือคุณไว้แน่น แววตาของเขาฉายแววเจ็บปวดและน้อยใจอย่างปิดไม่มิด",
    "next": "kael_ep3_bad_1_ext_1",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png"
  },
  "kael_ep3_bad_2": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'อย่าพูดว่าจะไปกับผู้ชายคนอื่นต่อหน้าฉันแบบนั้นสิ... เธอไม่รู้เลยเหรอว่าฉันหวงเธอแค่ไหน'",
    "next": "kael_ep3_bad_3",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_bad_3": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เห็นสีหน้าจริงจังของเคลแล้ว ลูเชียนจึงยอมถอยหลังให้ 'เอาล่ะๆ ผมแค่แซวเล่นเฉยๆ พวกคุณคุยกันดีๆ เถอะนะ'",
    "next": "kael_ep3_bad_4",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "kael_ep3_bad_4": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เมื่อเหลือกันแค่สองคน คุณจึงต้องรีบง้อเคลที่กำลังงอนตุ๊บป่องอยู่",
    "next": "kael_ep3_after_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_after_1": {
    "chapter": "รูทเคล บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ห้ามไปยิ้มหวานให้คนอื่นแบบเมื่อกี้อีกนะ... เวลาเห็นผู้ชายคนอื่นมายุ่งกับเธอ ใจฉันมันร้อนรุ่มไปหมดเลย'",
    "next": "kael_ep3_after_2",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_2": {
    "chapter": "รูทเคล บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาซบหน้าลงกับไหล่ของคุณเหมือนลูกแมวตัวโตๆ ที่กำลังอ้อนเจ้าของ",
    "next": "kael_ep3_after_sub_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_3": {
    "chapter": "รูทเคล บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ฉันไม่เคยขี้หึงหรือขี้หวงใครขนาดนี้มาก่อนเลยนะ... ทั้งหมดเป็นเพราะเธอคนเดียวเลยรู้ตัวไหม'",
    "next": "kael_ep3_after_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_4": {
    "chapter": "รูทเคล บทที่ 3: คำอ้อนของคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณลูบผมนุ่มๆ ของเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มออกมาได้อีกครั้ง",
    "next": "kael_ep4_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_1": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คืนหนึ่งในสัปดาห์ต่อมา พายุฝนกระหน่ำลงมาอย่างหนัก เสียงฟ้าร้องคำรามก้องไปทั่วทั้งปราสาท",
    "next": "kael_ep4_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_2": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงถือตะเกียงเดินไปดูที่ห้องของเคล และพบว่าเขากำลังยืนมองสายฝนอยู่ที่หน้าต่างเพียงลำพัง",
    "next": "kael_ep4_sub_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_3": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เมื่อได้ยินเสียงคุณเดินเข้ามา เขาก็หันมามองด้วยแววตาที่ดูเปราะบางผิดไปจากเวลาปกติ",
    "next": "kael_ep4_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_4": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ยังไม่นอนอีกเหรอ? หรือว่าเสียงฟ้าร้องทำให้เธอนอนไม่หลับกันล่ะ'",
    "next": "kael_ep4_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_5": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณเดินเข้าไปหาเขาแล้วแตะที่มือของเขา พบว่ามือของเขาเย็นเฉียบ",
    "next": "kael_ep4_6",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_6": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาหลุบตามองมือของคุณที่กุมมือเขาไว้ ก่อนจะถอนหายใจออกมาเบาๆ",
    "next": "kael_ep4_7",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_7": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ความจริงแล้ว... ทุกครั้งที่ฝนตกหนักแบบนี้ ฉันมักจะนึกถึงเรื่องในอดีตที่ไม่อยากจำอยู่เสมอน่ะ'",
    "next": "kael_ep4_8",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_8": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณพาเขามานั่งลงที่หน้าเตาผิงไฟอุ่นๆ และรับฟังเขาอย่างตั้งใจ",
    "next": "kael_ep4_9",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_9": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'รอยสักคำสาปที่คอฉันน่ะ... คนอื่นเข้าใจว่าฉันไปขโมยของต้องห้ามมาใช่ไหมล่ะ? แต่ความจริงเมื่อห้าปีก่อน ฉันยอมรับคำสาปนี้แทนเด็กๆ ในสลัมที่เกือบถูกมอนสเตอร์เงากลืนกินต่างหาก ฉันไม่อยากแก้ตัวกับใคร แต่ฉันแค่อยากให้เธอรู้ความจริงไว้คนเดียวก็พอ'",
    "next": "kael_ep4_10",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_10": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "น้ำเสียงของเขาสั่นเครือเล็กน้อยเมื่อเล่าถึงบาดแผลในใจที่ไม่เคยเปิดเผยให้ใครฟังมาก่อน",
    "next": "kael_ep4_11",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_11": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'บางครั้งฉันก็แอบกลัวนะ... ว่าถ้าเธอรู้อดีตและด้านที่อ่อนแอของฉันแล้ว เธอจะมองฉันเปลี่ยนไปหรือเปล่า'",
    "next": "kael_ep4_choice",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_choice": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลเปิดเปลือยความลับและบาดแผลในใจให้คุณฟังทั้งหมด คุณจะปลอบโยนเขาอย่างไร?",
    "charImg": "assets/char_kael.png",
    "choices": [
      {
        "text": "ดึงเขามากอดแน่น 'ไม่เปลี่ยนไปแน่นอนค่ะ ต่อไปนี้ฉันจะอยู่เคียงข้างไม่ให้เคลต้องเจ็บปวดอีกแล้วนะ'",
        "next": "kael_ep4_good_1",
        "charGain": "kael",
        "points": 30
      },
      {
        "text": "ขยับถอยห่าง 'ไม่นึกเลยว่าคุณจะมีปมปัญหาเยอะขนาดนี้ ฟังแล้วอึดอัดจังค่ะ'",
        "next": "kael_ep4_bad_1",
        "charGain": "kael",
        "points": -20
      }
    ]
  },
  "kael_ep4_good_1": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลกอดตอบคุณแน่นราวกับคุณคือสิ่งล้ำค่าที่สุดในชีวิต ความอบอุ่นจากอ้อมกอดของคุณช่วยละลายความหนาวเหน็บในใจของเขาจนหมดสิ้น",
    "next": "kael_ep4_good_1_ext_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_good_2": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ขอบคุณนะ... แค่มีเธอกอดฉันไว้แบบนี้ เรื่องเลวร้ายในอดีตก็ไม่สำคัญสำหรับฉันอีกต่อไปแล้ว'",
    "next": "kael_ep4_good_3",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_good_3": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'คืนนี้อยู่เป็นเพื่อนฉันจนกว่าพายุจะสงบได้ไหม... แค่นอนจับมือกันเฉยๆ ก็พอ สัญญาว่าจะไม่ทำอะไรเกินเลยจริงๆ'",
    "next": "kael_ep4_good_4",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_good_4": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คืนนั้นคุณและเขานอนกุมมือกันอยู่ข้างเตาผิงอุ่นๆ จนหลับใหลไปด้วยกันอย่างมีความสุข",
    "next": "kael_ep5_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_bad_1": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลหลับตาลงซ่อนความเจ็บปวดในแววตา 'นั่นสินะ... ฉันไม่น่าเล่าเรื่องน่าเบื่อให้เธอฟังเลย ขอโทษด้วยนะ'",
    "next": "kael_ep4_bad_1_ext_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_bad_2": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ทิ้งให้เขานั่งมองเปลวไฟในเตาผิงเพียงลำพัง",
    "next": "kael_ep5_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_1": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา เกิดเรื่องใหญ่ขึ้นในอาณาจักร! พิษจากรอยสักคำสาปในตัวเคลกำเริบหนักในคืนเดือนมืด ขณะเดียวกันหน่วยองครักษ์ลับก็เข้าใจผิดจะเข้ามาจับกุมเขา",
    "next": "kael_ep5_2",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_2": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ข่าวลือแพร่สะพัดไปทั่วพระราชวัง จนผู้คนต่างจับตามองว่าความสัมพันธ์ของคุณสองคนจะผ่านวิกฤตนี้ไปได้หรือไม่",
    "next": "kael_ep5_sub_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_3": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลเดินเข้ามาหาคุณและจับมือทั้งสองข้างของคุณไว้แน่น แววตาของเขาแน่วแน่และมั่นคงไร้ความลังเล",
    "next": "kael_ep5_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_4": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ไม่ต้องกังวลกับคำพูดของคนอื่นนะ ไม่ว่าจะเกิดอะไรขึ้น ฉันจะไม่มีวันยอมปล่อยมือเธอเด็ดขาด'",
    "next": "kael_ep5_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_5": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ขอแค่เธอยืนยันคำเดียวว่าพร้อมจะสู้ไปกับฉัน... ต่อให้ต้องงัดข้อกับคนทั้งอาณาจักร ฉันก็พร้อมลุย!'",
    "next": "kael_ep5_choice",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_choice": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ตรงหน้าคือบททดสอบครั้งใหญ่ของความรัก คุณจะจับมือสู้ไปกับเคลหรือไม่?",
    "charImg": "assets/char_kael.png",
    "choices": [
      {
        "text": "บีบมือเขาแน่น 'ไปลุยด้วยกันเลยค่ะเคล! ไม่ว่าจะมีอุปสรรคอะไร ฉันก็จะอยู่เคียงข้างคุณเสมอ!'",
        "next": "kael_ep5_good_1",
        "charGain": "kael",
        "points": 35
      },
      {
        "text": "ปล่อยมือด้วยความกลัว 'มันยากเกินไปค่ะ เราสองคนยอมแพ้แยกทางกันแค่นี้เถอะ'",
        "next": "kael_ep5_bad_1",
        "charGain": "kael",
        "points": -20
      }
    ]
  },
  "kael_ep5_good_1": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณกอดเคลไว้และใช้พลังแสงดาวชำระล้างคำสาปที่คอของเขาพร้อมเปิดเผยความจริงเรื่องที่เขาเคยช่วยชีวิตชาวเมืองไว้ จนทุกคนยกย่องให้เขาเป็นผู้พิทักษ์แห่งเงา",
    "next": "kael_ep5_good_1_ext_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_good_2": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ท่ามกลางเสียงปรบมือชื่นชมของผู้คนทั่วทั้งโถงพระราชวัง เขาหันมายิ้มกว้างให้คุณด้วยความภาคภูมิใจ",
    "next": "kael_ep5_good_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_good_3": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'เห็นไหมล่ะ พอมีเธออยู่ข้างๆ ไม่มีอะไรในโลกนี้ที่เราสองคนผ่านไปไม่ได้เลย!'",
    "next": "kael_ep5_good_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_good_4": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ตอนนี้ไม่มีอุปสรรคใดๆ มาขวางกั้นความรักของคุณกับเขาได้อีกต่อไปแล้ว!",
    "next": "kael_ep6_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_bad_1": {
    "chapter": "รูทเคล บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "แม้คุณจะลังเลและหวาดกลัว แต่เคลก็ยังฝืนออกหน้ารับมือกับปัญหาทั้งหมดด้วยตัวคนเดียวจนผ่านพ้นมาได้",
    "next": "kael_ep5_bad_1_ext_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_bad_2": {
    "chapter": "รูทเคล บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ทุกอย่างเรียบร้อยแล้วล่ะ... เธอปลอดภัยแล้วนะ ไม่ต้องกลัวอีกต่อไปแล้ว'",
    "next": "kael_ep6_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep6_1": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ค่ำคืนหลังผ่านพ้นเรื่องราวทั้งหมด เคลพาคุณมาที่ระเบียงชมจันทร์ซึ่งประดับด้วยดอกไม้และแสงเทียนโรแมนติก",
    "next": "kael_ep6_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep6_2": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ลมยามค่ำคืนพัดเอื่อยๆ ดวงดาวนับพันส่องแสงระยิบระยับอยู่เต็มท้องฟ้า",
    "next": "kael_ep6_sub_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep6_3": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาหยุดตรงหน้าคุณ แล้วค่อยๆ ประคองมือทั้งสองข้างของคุณขึ้นมากุมไว้แนบอก",
    "next": "kael_ep6_4",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep6_4": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ตั้งแต่วินาทีแรกที่เธอปรากฏตัวขึ้นในวิหาร... ชีวิตของฉันก็เปลี่ยนไปตลอดกาล'",
    "next": "kael_ep6_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep6_5": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'รอยยิ้มของเธอ เสียงหัวเราะของเธอ และความอ่อนโยนของเธอ... ทำให้ฉันตกหลุมรักเธอซ้ำแล้วซ้ำเล่าทุกวัน'",
    "next": "kael_ep6_6",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep6_6": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ฉันไม่อยากให้เธอกลับไปยังโลกเดิมอีกแล้ว... ฉันรักเธอนะ อยู่เคียงข้างฉันตลอดไปในฐานะคู่ชีวิตของฉันได้ไหม?'",
    "next": "kael_final_decision",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_final_decision": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลสารภาพรักหมดหัวใจและขอคุณเป็นคู่ชีวิตชั่วนิรันดร์ คุณจะตอบรับความรักของเขาอย่างไร?",
    "charImg": "assets/char_kael_blush.png",
    "choices": [
      {
        "text": "โผเข้ากอดเขาแน่น 'ตกลงค่ะเคล! ฉันก็รักคุณสุดหัวใจ และจะอยู่กับคุณตลอดไปเลยค่ะ!'",
        "next": "kael_true_ep_1",
        "charGain": "kael",
        "points": 50
      },
      {
        "text": "ก้าวถอยหลังเบาๆ 'ขอโทษนะคะ ขอบคุณสำหรับทุกอย่างแต่ฉันคิดกับคุณแค่คนสำคัญที่แสนดีค่ะ'",
        "next": "kael_norm_ep_1",
        "charGain": "kael",
        "points": -25
      }
    ]
  },
  "kael_true_ep_1": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "ทันทีที่ได้ยินคำตอบตกลง เคลก็ยิ้มกว้างด้วยความดีใจที่สุดในชีวิต เขารวบตัวคุณเข้ามากอดแน่นจนตัวลอย!",
    "next": "kael_true_ep_1_ext_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_2": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เธอรับรักฉันแล้วนะ! ห้ามเปลี่ยนใจคืนคำเด็ดขาดเลยนะรู้ไหม!'",
    "next": "kael_true_ep_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_true_ep_3": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาค่อยๆ ประคองใบหน้าของคุณให้เงยขึ้นสบตา ก่อนจะโน้มใบหน้าลงมามอบจูบที่แสนหวานและอ่อนโยนใต้แสงจันทร์",
    "next": "kael_true_ep_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ละอองแสงดาวสีทองลอยหมุนวนโอบล้อมร่างของคุณทั้งสองคน เพื่อร่วมเฉลิมฉลองพันธสัญญาแห่งรักนิรันดร์",
    "next": "kael_true_ep_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_5": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เมื่อถอนจูบออก เขาก็แนบหน้าผากเข้ากับหน้าผากของคุณ ลมหายใจอุ่นๆ เต็มไปด้วยความรักล้นหัวใจ",
    "next": "kael_true_ep_6",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_6": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ต่อจากนี้ไป ไม่ว่าเช้าสายบ่ายเย็น ฉันจะคอยดูแลตามใจและบอกรักเธอทุกวันเลย... รักเธอที่สุดในโลกเลยนะ'",
    "next": "kael_ending_good",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ending_good": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณและเคลออกเดินทางท่องเที่ยวไปทั่วโลกด้วยกันอย่างอิสระ เขารักและหวงคุณยิ่งกว่าสมบัติชิ้นไหนๆ ในโลก!",
    "charImg": "assets/char_kael_smile.png",
    "ending": {
      "type": "True Romance Ending",
      "char": "kael",
      "title": "คู่หูจอมโจรใต้เงาจันทร์",
      "desc": "คุณและเคลออกเดินทางท่องเที่ยวไปทั่วโลกด้วยกันอย่างอิสระ เขารักและหวงคุณยิ่งกว่าสมบัติชิ้นไหนๆ ในโลก!"
    }
  },
  "kael_norm_ep_1": {
    "chapter": "ตอนจบปกติ: เงาที่ผ่านเลย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลนิ่งไปครู่หนึ่ง ก่อนจะระบายยิ้มบางๆ อย่างเข้าใจแม้แววตาจะแฝงความเศร้าอยู่ลึกๆ",
    "next": "kael_norm_ep_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_norm_ep_2": {
    "chapter": "ตอนจบปกติ: เงาที่ผ่านเลย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เข้าใจแล้วล่ะ... ความรู้สึกของหัวใจมันบังคับกันไม่ได้นี่นา ขอบคุณที่พูดกับฉันตรงๆ นะ'",
    "next": "kael_norm_ep_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_norm_ep_3": {
    "chapter": "ตอนจบปกติ: เงาที่ผ่านเลย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'แต่ถึงจะไม่ได้เป็นคนรักกัน ฉันก็ยังดีใจที่ได้พบและได้ดูแลเธอนะ ถ้ามีเรื่องเดือดร้อนเมื่อไหร่ เรียกหาฉันได้เสมอ'",
    "next": "kael_ending_normal",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ending_normal": {
    "chapter": "ตอนจบปกติ: เงาที่ผ่านเลย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลยังคงแอบแวะมาหาคุณที่ระเบียงหน้าต่างในทุกคืนวันเพ็ญ พร้อมขนมอร่อยๆ และรอยยิ้มที่คุ้นเคย",
    "charImg": "assets/char_kael.png",
    "ending": {
      "type": "Normal Ending",
      "char": "kael",
      "title": "เงาที่ผ่านเลย",
      "desc": "เคลยังคงแอบแวะมาหาคุณที่ระเบียงหน้าต่างในทุกคืนวันเพ็ญ พร้อมขนมอร่อยๆ และรอยยิ้มที่คุ้นเคย"
    }
  },
  "common_independent_ending": {
    "chapter": "ตอนจบ: เส้นทางของตัวเอง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "เพราะคุณยังไม่ได้มอบหัวใจให้ใครเป็นพิเศษ คุณจึงเลือกใช้ชีวิตอย่างอิสระในอาณาจักรเอลีเซียม โดยมีหนุ่มๆ ทั้ง 4 คอยเป็นเพื่อนที่ดีและคอยปกป้องคุณอยู่ข้างๆ เสมอ!",
    "ending": {
      "type": "Independent Maiden Ending",
      "char": null,
      "title": "สตรีผู้กุมโชคชะตาตนเอง",
      "desc": "คุณใช้ชีวิตอย่างมีความสุขและเป็นอิสระ โดยมีหนุ่มๆ ทั้งสี่คอยเป็นเพื่อนที่พึ่งพาได้เสมอ"
    }
  },
  "cedric_ep1_sub_1": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกพาคุณเดินชมห้องทำงานส่วนตัวที่มีชั้นหนังสือสูงจรดเพดาน",
    "next": "cedric_ep1_sub_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_sub_2": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ถ้าวันไหนฉันต้องเคลียร์งานดึก เธอมานั่งอ่านหนังสือตรงโซฟานี้ข้างๆ ฉันได้เลยนะ'",
    "next": "cedric_ep1_sub_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_3": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณลองหยิบหนังสือปกหนังเล่มหนึ่งขึ้นมาเปิดดู พบว่ามีที่คั่นหนังสือรูปดอกกุหลาบดำคั่นอยู่",
    "next": "cedric_ep1_sub_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_sub_4": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เล่มนั้นเป็นรวมบทกวีความรักน่ะ... มะ... ไม่ต้องเปิดอ่านตอนนี้เลยนะ เอาไว้อ่านวันหลังเถอะ!'",
    "next": "cedric_ep1_sub_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_sub_5": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแอบหัวเราะคิกคักที่ได้เห็นท่านดยุกผู้เคร่งขรึมเสียอาการเพราะหนังสือบทกวี",
    "next": "cedric_ep1_sub_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_6": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'หัวเราะอะไรของเธอ... ก็ฉันเพิ่งเคยมีความรู้สึกแบบนี้เป็นครั้งแรก เลยต้องศึกษาไว้บ้างสิ'",
    "next": "cedric_ep1_sub_7",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_sub_7": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาเดินเข้ามาใกล้แล้วยีหัวคุณเบาๆ ด้วยความหมั่นไส้ปนเอ็นดู",
    "next": "cedric_ep1_sub_8",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_sub_8": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'จำไว้เลยนะยัยตัวแสบ อยู่ปราสาทนี้ห้ามดื้อกับฉันเด็ดขาดเข้าใจไหม'",
    "next": "cedric_ep1_sub_9",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_9": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ถึงปากจะพูดเหมือนดุ แต่สายตาของเขากลับอ่อนโยนจนคุณเผลอยิ้มตาม",
    "next": "cedric_ep1_sub_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_10": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'แล้วก็... ถ้าอยากได้อะไรเพิ่ม บอกพ่อบ้านหรือบอกฉันได้โดยตรงเลย ไม่ต้องเกรงใจ'",
    "next": "cedric_ep1_sub_11",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_sub_11": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เพราะทุกอย่างในปราสาทราเวนครอสต์แห่งนี้ ก็เหมือนเป็นของเธอครึ่งหนึ่งแล้วล่ะ'",
    "next": "cedric_ep1_sub_12",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_12": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คำพูดเรียบง่ายแต่จริงใจของเซดริกทำให้คุณรู้สึกอบอุ่นไปทั้งหัวใจ",
    "next": "cedric_ep1_sub_13",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_sub_13": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'มองฉันตาแป๋วแบบนั้นอีกแล้ว... เดี๋ยวก็ไม่ปล่อยให้กลับห้องซะเลยนี่'",
    "next": "cedric_ep1_sub_14",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_sub_14": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขารินชาร้อนเติมให้คุณอีกถ้วย พร้อมเลื่อนจานมาการองสีพาสเทลมาให้ใกล้ๆ มือคุณ",
    "next": "cedric_ep1_sub_15",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_sub_15": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ทานให้อิ่มล่ะ เธอตัวเบาเกินไปแล้ว ฉันจะขุนให้แก้มป่องกว่านี้หน่อย'",
    "next": "cedric_ep1_sub_16",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_16": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแตะแก้มตัวเองพลางเถียงเบาๆ ว่าไม่ได้ผอมสักหน่อย ทำเอาเซดริกหัวเราะในลำคออย่างอารมณ์ดี",
    "next": "cedric_ep1_sub_17",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_17": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เวลาเธอเถียงคอเป็นเอ็นแบบนี้ น่ารักชะมัดเลยรู้ตัวไหม'",
    "next": "cedric_ep1_sub_18",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_sub_18": {
    "chapter": "รูทเซดริก บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณสองคนใช้เวลานั่งคุยสัพเพเหระกันอย่างเพลิดเพลิน",
    "next": "cedric_ep1_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_1": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ในเรือนกระจกกุหลาบดำ เซดริกพาคุณเดินชมแปลงกุหลาบหายากที่บานเฉพาะในเขตปราสาทของเขา",
    "next": "cedric_ep2_sub_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_2": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'กุหลาบดำพวกนี้ดูแลยากมาก ต้องควบคุมอุณหภูมิและแสงให้พอดีไม่งั้นจะไม่ยอมบานเลย'",
    "next": "cedric_ep2_sub_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_3": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณก้มลงดมกลิ่นหอมลึกลับของดอกกุหลาบดำที่ทั้งหอมหวานและชวนหลงใหล",
    "next": "cedric_ep2_sub_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_4": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ในภาษาดอกไม้ของอาณาจักรเรา กุหลาบดำหมายถึงความรักที่มั่นคงและเป็นนิรันดร์'",
    "next": "cedric_ep2_sub_5",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_5": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เหมือนกับความรู้สึกของฉันที่ไม่เคยมอบให้ใครง่ายๆ แต่ถ้ามอบให้ใครแล้ว... ก็จะไม่มีวันเปลี่ยนแปลง'",
    "next": "cedric_ep2_sub_6",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_sub_6": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขาตัดดอกกุหลาบดำที่สวยสมบูรณ์แบบที่สุดดอกหนึ่ง แล้วร่ายเวทลบหนามออกจนเกลี้ยงเกลา",
    "next": "cedric_ep2_sub_7",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_7": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ฉันลบหนามออกให้หมดแล้ว จะได้ไม่ตำมือเธอ... รับไปสิ ดอกนี้ฉันให้เธอ'",
    "next": "cedric_ep2_sub_8",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_sub_8": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณรับดอกกุหลาบดำมาถือไว้แนบอก กลิ่นหอมของมันเหมือนกลิ่นกายของเซดริกไม่มีผิด",
    "next": "cedric_ep2_sub_9",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_9": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เดินต่อไปตรงน้ำพุกลางสวนกันเถอะ ตรงนั้นมีลมเย็นๆ พัดผ่านตลอดทั้งวันเลย'",
    "next": "cedric_ep2_sub_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_10": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เมื่อเดินมาถึงลานน้ำพุหินอ่อน ละอองน้ำใสสะอาดสะท้อนแสงแดดเกิดเป็นรุ้งกินน้ำสายเล็กๆ",
    "next": "cedric_ep2_sub_11",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_11": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ดูสิ มีรุ้งกินน้ำขึ้นตรงน้ำพุด้วย เธอชอบอะไรสวยๆ แบบนี้ใช่ไหมล่ะ'",
    "next": "cedric_ep2_sub_12",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_12": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณตื่นเต้นชี้ให้เขาดูรุ้งกินน้ำ พลางยิ้มกว้างอย่างมีความสุข",
    "next": "cedric_ep2_sub_13",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_13": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'สำหรับฉัน... รอยยิ้มของเธอตรงหน้านี้สวยกว่ารุ้งกินน้ำตั้งเยอะ'",
    "next": "cedric_ep2_sub_14",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_sub_14": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณเดินเล่นรอบลานน้ำพุอย่างไม่รีบร้อน",
    "next": "cedric_ep2_sub_15",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_sub_15": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ถ้าเธอชอบสวนนี้ ฉันจะสั่งให้คนทำชิงช้าไม้ประดับดอกไม้ไว้ตรงมุมโน้นให้เธอมานั่งเล่นทุกวันดีไหม?'",
    "next": "cedric_ep2_sub_16",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_16": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณพยักหน้ารับด้วยความดีใจในความตามใจขั้นสุดของท่านดยุก",
    "next": "cedric_ep2_sub_17",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_sub_17": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'หึๆ ขอแค่เธอบอกว่าอยากได้อะไร ฉันหามาให้เธอได้ทุกอย่างนั่นแหละ'",
    "next": "cedric_ep2_sub_18",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_sub_18": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "สายลมอ่อนๆ พัดพาความหวานชื่นโอบล้อมคุณสองคนไว้ตลอดช่วงบ่าย",
    "next": "cedric_ep2_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_sub_1": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "หลังจากเคลเดินลับสายตาไปแล้ว เซดริกก็ยังจับมือคุณแน่นไม่ยอมปล่อย",
    "next": "cedric_ep3_after_sub_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_sub_2": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'หมอนั่นกล้าดียังไงมาชวนเธอไปเที่ยวต่อหน้าฉัน... นึกแล้วมันน่าโมโหจริงๆ'",
    "next": "cedric_ep3_after_sub_3",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_sub_3": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแอบอมยิ้มพลางบีบมือเซดริกเบาๆ เพื่อบอกให้เขาใจเย็นลง",
    "next": "cedric_ep3_after_sub_4",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep3_after_sub_4": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ยังจะมายิ้มอีกนะ... เธอไม่รู้หรอกว่าเวลาเห็นผู้ชายคนอื่นมองเธอด้วยสายตาแบบนั้น ฉันหึงแค่ไหน'",
    "next": "cedric_ep3_after_sub_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_sub_5": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาดึงคุณให้เดินเข้าไปในศาลาพักผ่อนริมสวน แล้วนั่งลงโดยรวบตัวคุณมานั่งชิดข้างๆ",
    "next": "cedric_ep3_after_sub_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_sub_6": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'สัญญากับฉันก่อน ว่าถ้าใครมาชวนเธอออกไปไหนสองต่อสองอีก เธอจะปฏิเสธทันที'",
    "next": "cedric_ep3_after_sub_7",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_sub_7": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "พอคุณรับปากอย่างว่าง่าย สีหน้าตึงๆ ของเซดริกก็ค่อยๆ คลายลง",
    "next": "cedric_ep3_after_sub_8",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_sub_8": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ดีมาก... ให้มันรู้ซะบ้างว่าใครเป็นคนสำคัญอันดับหนึ่งของเธอ'",
    "next": "cedric_ep3_after_sub_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_sub_9": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาเอนศีรษะมาพิงไหล่คุณเบาๆ อย่างออดอ้อน ซึ่งมีแค่คุณคนเดียวเท่านั้นที่ได้เห็นมุมนี้ของเขา",
    "next": "cedric_ep3_after_sub_10",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_sub_10": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ขอชาร์จพลังแบบนี้สักห้านาทีนะ... พอได้ยินเธอบอกว่าเลือกฉันคนเดียวแล้ว ใจฉันก็ฟูขึ้นมาเลย'",
    "next": "cedric_ep3_after_sub_11",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_after_sub_11": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณปล่อยให้เขาพิงไหล่เงียบๆ พลางมองใบหน้าคมคายยามผ่อนคลายของเขา",
    "next": "cedric_ep3_after_sub_12",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_after_sub_12": {
    "chapter": "รูทเซดริก บทที่ 3: ง้อคนขี้หวง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ขอบคุณที่ไม่ทำให้ฉันต้องกังวลนะยัยคนเก่งของฉัน'",
    "next": "cedric_ep3_after_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_sub_1": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เสียงฝนด้านนอกยังคงโปรยปราย แต่ภายในห้องกลับอบอุ่นด้วยแสงไฟจากเตาผิง",
    "next": "cedric_ep4_sub_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_sub_2": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ตอนแรกฉันคิดว่าชีวิตนี้คงต้องอยู่กับความมืดและความระแวงไปตลอดกาลซะแล้ว'",
    "next": "cedric_ep4_sub_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_sub_3": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เขายกมือขึ้นลูบแก้มของคุณอย่างแผ่วเบา แววตาเต็มไปด้วยความซาบซึ้งใจ",
    "next": "cedric_ep4_sub_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_sub_4": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'แต่พอมีเธอเข้ามา ปราสาทที่เคยเงียบเหงาหลังนี้ก็มีชีวิตชีวาขึ้นมาทันที'",
    "next": "cedric_ep4_sub_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep4_sub_5": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "คุณขยับเข้าไปซบกับอกอุ่นๆ ของเขา เพื่อแบ่งปันความอบอุ่นให้แก่กัน",
    "next": "cedric_ep4_sub_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_sub_6": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'เสียงหัวใจของเธอ... ฟังดูกี่ครั้งก็ทำให้ฉันสงบใจได้เสมอเลยนะ'",
    "next": "cedric_ep4_sub_7",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_sub_7": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'ไม่ว่าในอดีตฉันจะเคยเจอเรื่องร้ายแรงแค่ไหน แค่มีเธออยู่ในปัจจุบันและอนาคตของฉันก็พอแล้ว'",
    "next": "cedric_ep4_sub_8",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep4_sub_8": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "เขากระชับผ้าห่มคลุมไหล่ให้คุณทั้งสองคนอย่างอบอุ่น",
    "next": "cedric_ep4_sub_9",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_sub_9": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-night",
    "text": "'หลับตาพักผ่อนเถอะนะ ฉันจะคอยกอดปกป้องเธอจากฝันร้ายเอง'",
    "next": "cedric_ep4_sub_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_sub_10": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ท่ามกลางเสียงสายฝน คุณรู้สึกปลอดภัยที่สุดเมื่ออยู่ในอ้อมแขนของดยุกเซดริก",
    "next": "cedric_ep4_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_1": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เช้าวันประชุมใหญ่ของสภาตระกูลขุนนาง เซดริกแต่งกายด้วยชุดดยุกเต็มยศที่ดูน่าเกรงขามที่สุด",
    "next": "cedric_ep5_sub_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_2": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'วันนี้ไม่ต้องพูดอะไรเยอะ แค่ยืนจับมือฉันไว้ข้างๆ แล้วดูฉันจัดการพวกขุนนางหัวโบราณพวกนั้นก็พอ'",
    "next": "cedric_ep5_sub_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep5_sub_3": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เมื่อก้าวเข้าสู่โถงประชุม สายตานับร้อยคู่ก็จับจ้องมาที่คุณและเซดริกเป็นจุดเดียว",
    "next": "cedric_ep5_sub_4",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_4": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกวางเอกสารผลงานการฟื้นฟูม่านพลังของคุณลงกลางโต๊ะเสียงดังกังวาน",
    "next": "cedric_ep5_sub_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_5": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'คนที่ช่วยชีวิตทุกคนในอาณาจักรนี้ไว้ในคืนจันทร์สีเลือดคือเธอคนนี้! ใครยังกล้าถามเรื่องชาติกำเนิดของเธออีก ก้าวออกมาหาฉันได้เลย!'",
    "next": "cedric_ep5_sub_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_6": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ไม่มีขุนนางคนไหนกล้าสบตาอันทรงอำนาจของเซดริกเลยแม้แต่คนเดียว",
    "next": "cedric_ep5_sub_7",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_7": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'และฉันขอประกาศไว้ตรงนี้ว่า ตำแหน่งดัชเชสแห่งราเวนครอสต์ มีไว้สำหรับเธอคนนี้เพียงผู้เดียวเท่านั้น!'",
    "next": "cedric_ep5_sub_8",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep5_sub_8": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คำประกาศก้องของเซดริกทำให้คุณใจเต้นแรงด้วยความตื้นตันใจ",
    "next": "cedric_ep5_sub_9",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_sub_9": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขาหันมาบีบมือคุณเบาๆ พร้อมขยิบตาให้ทีหนึ่งอย่างเท่สุดๆ",
    "next": "cedric_ep5_sub_10",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep5_sub_10": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เหล่าขุนนางทั้งหมดต่างลุกขึ้นโค้งคำนับยอมรับคุณและเซดริกอย่างเป็นเอกฉันท์",
    "next": "cedric_ep5_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep6_sub_1": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "หลังงานสารภาพรัก เซดริกพาคุณเดินชมปราสาทที่กำลังประดับตกแต่งด้วยดอกไม้สีขาวและสีทองทั่วทั้งหลัง",
    "next": "cedric_ep6_sub_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep6_sub_2": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ฉันสั่งให้คนเตรียมงานวิวาห์ของเราไว้ล่วงหน้าแล้วล่ะ... ก็ฉันมั่นใจว่ายังไงก็จะไม่ยอมปล่อยเธอไปไหนนี่นา'",
    "next": "cedric_ep6_sub_3",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep6_sub_3": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณหัวเราะให้กับความเตรียมพร้อมของว่าที่เจ้าบ่าวผู้คลั่งรัก",
    "next": "cedric_ep6_sub_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep6_sub_4": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ชุดเจ้าสาวของเธอ ฉันให้ช่างตัดเย็บที่เก่งที่สุดในอาณาจักรออกแบบให้ รับรองว่าเธอจะเป็นเจ้าสาวที่สวยที่สุดในโลก'",
    "next": "cedric_ep6_sub_5",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep6_sub_5": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขาดึงคุณเข้ามากอดจากด้านหลังขณะยืนมองวิวเมืองจากระเบียงปราสาท",
    "next": "cedric_ep6_sub_6",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep6_sub_6": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ขอบคุณที่ข้ามมิติมาหาฉันนะ... ฉันสัญญาว่าจะรักและทะนุถนอมเธอไปตลอดชีวิตเลย'",
    "next": "cedric_ep6_sub_7",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep6_sub_7": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณเอนศีรษะพิงอกเขา พลางมองดูแสงดาวที่ส่องประกายอวยพรให้คุณทั้งสองคน",
    "next": "cedric_ep6_sub_8",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep6_sub_8": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรัก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไปกันเถอะ ราชินีแห่งหัวใจของฉัน... ความสุขชั่วนิรันดร์ของเรากำลังเริ่มต้นขึ้นแล้ว'",
    "next": "cedric_ep6_3",
    "charImg": "assets/char_cedric_smile.png"
  },
  "lucian_ep1_sub_1": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "บนหอคอยชมดาว ลูเชียนพาคุณเดินดูกล้องโทรทรรศน์เวทมนตร์และลูกแก้วจำลองดวงดาวที่ลอยอยู่กลางห้อง",
    "next": "lucian_ep1_sub_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_2": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ถ้าคุณแตะที่ลูกแก้วนี้ มันจะฉายภาพกลุ่มดาวที่คุณอยากดูขึ้นมาให้เห็นใกล้ๆ เลยครับ'",
    "next": "lucian_ep1_sub_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_3": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณลองแตะลูกแก้ว ทันใดนั้นกลุ่มดาวรูปหงส์สีเงินก็ลอยส่องแสงระยิบระยับอยู่รอบตัวคุณ",
    "next": "lucian_ep1_sub_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_sub_4": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'กลุ่มดาวหงส์คู่ครับ... เป็นสัญลักษณ์ของคู่รักที่จะไม่พรากจากกันไปตลอดกาล'",
    "next": "lucian_ep1_sub_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_sub_5": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนขยับมายืนซ้อนหลังคุณ แล้ววางมือทับลงบนมือของคุณที่แตะลูกแก้วอยู่",
    "next": "lucian_ep1_sub_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_sub_6": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'พอมีคุณมาอยู่บนหอคอยนี้ด้วยกัน ทุกมุมของห้องก็ดูสว่างไสวขึ้นทันตาเลยครับ'",
    "next": "lucian_ep1_sub_7",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_sub_7": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "กลิ่นหอมดอกจันทราอ่อนๆ จากเสื้อคลุมปุโรหิตของลูเชียนทำให้คุณรู้สึกผ่อนคลายอย่างน่าประหลาด",
    "next": "lucian_ep1_sub_8",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_sub_8": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ผมจัดโต๊ะอ่านหนังสือของคุณไว้ข้างโต๊ะทำงานของผมเลยนะ เวลาผมอ่านคัมภีร์จะได้เงยหน้ามามองคุณได้ตลอดไงครับ'",
    "next": "lucian_ep1_sub_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_9": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณแซวเขาว่าแบบนั้นจะทำงานมีสมาธิเหรอ ลูเชียนก็หัวเราะเบาๆ จนแก้มแดง",
    "next": "lucian_ep1_sub_10",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_10": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'นั่นสิครับ สงสัยผมคงเอาแต่มองหน้าคุณจนไม่ได้อ่านคัมภีร์แน่ๆ เลย'",
    "next": "lucian_ep1_sub_11",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_sub_11": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขารินชาน้ำผึ้งดอกไม้ร้อนๆ ส่งให้คุณพร้อมขนมเค้กดวงดาวเนื้อนุ่มฟู",
    "next": "lucian_ep1_sub_12",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_sub_12": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ทานเยอะๆ นะครับ ถ้าคุณอยากทานอะไรบอกผมได้เลย ผมเสกและทำอาหารให้คุณทานได้ทุกอย่างเลยนะ'",
    "next": "lucian_ep1_sub_13",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_13": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณชิมเค้กเนื้อนุ่มพลางพูดคุยกับลูเชียนอย่างสนิทสนม",
    "next": "lucian_ep1_sub_14",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_sub_14": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'อยู่กับผมที่นี่นานๆ นะครับ... อย่าเพิ่งเบื่อมหาปุโรหิตขี้อ้อนคนนี้เลยนะ'",
    "next": "lucian_ep1_sub_15",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_sub_15": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "สายตาออดอ้อนของลูเชียนทำเอาคุณใจละลายตั้งแต่เริ่มต้นวันแรก",
    "next": "lucian_ep1_sub_16",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_sub_16": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'คืนนี้เดี๋ยวผมจะร่ายเวทให้ดาวตกโปรยปรายตรงหน้าต่างห้องนอนคุณด้วย รอดูได้เลยนะครับ'",
    "next": "lucian_ep1_sub_17",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_17": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณยิ้มรับคำสัญญาของเขาด้วยความตื่นเต้น",
    "next": "lucian_ep1_sub_18",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_sub_18": {
    "chapter": "รูทลูเชียน บทที่ 1: โลกของเราสองคน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'แค่เห็นคุณยิ้มกว้างแบบนี้ ผมก็มีความสุขที่สุดแล้วครับ'",
    "next": "lucian_ep1_3",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_sub_1": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ที่ทะเลสาบกระจกเงา น้ำในทะเลสาบใสสะอาดจนสะท้อนภาพท้องฟ้าและหมู่เมฆราวกับกระจกบานยักษ์",
    "next": "lucian_ep2_sub_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_sub_2": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ขึ้นเรือเวทมนตร์กันเถอะครับ เรือลำนี้จะพาเราล่องไปกลางทะเลสาบโดยไม่ต้องพายเลย'",
    "next": "lucian_ep2_sub_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_sub_3": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนประคองมือคุณก้าวลงเรือไม้สีขาวประดับดอกไม้ ก่อนที่เรือจะค่อยๆ เคลื่อนออกไปกลางผืนน้ำ",
    "next": "lucian_ep2_sub_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_4": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ดูเงาสะท้อนในน้ำสิครับ เหมือนเราสองคนกำลังล่องลอยอยู่กลางท้องฟ้าคู่กันเลยเนอะ'",
    "next": "lucian_ep2_sub_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_sub_5": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "กลีบดอกไม้สีชมพูอ่อนลอยมาตามผิวน้ำ ลูเชียนก้มลงช้อนกลีบดอกไม้ขึ้นมาแล้วยื่นให้คุณ",
    "next": "lucian_ep2_sub_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_6": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'เขาว่ากันว่าถ้าคู่รักมาล่องเรือที่ทะเลสาบกระจกเงาด้วยกัน ความรักจะบริสุทธิ์และมั่นคงเหมือนผืนน้ำแห่งนี้ครับ'",
    "next": "lucian_ep2_sub_7",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_sub_7": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณมองสบตาสีม่วงอเมทิสต์ที่ทอประกายหวานซึ้งของลูเชียน",
    "next": "lucian_ep2_sub_8",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_8": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ตอนอยู่ใกล้วิหาร ผมต้องวางตัวเป็นมหาปุโรหิตที่สุขุม... แต่เวลาอยู่กับคุณสองคน ผมอยากเป็นแค่ผู้ชายธรรมดาที่รักคุณจะได้ไหมครับ?'",
    "next": "lucian_ep2_sub_9",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_sub_9": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขาขยับมานั่งข้างๆ คุณบนเรือลำเล็ก แล้วโอบประคองไหล่คุณไว้กันคุณโคลงเคลง",
    "next": "lucian_ep2_sub_10",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_10": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ลมกลางทะเลสาบเย็นสบายจังเลยนะครับ พิงไหล่ผมได้เลยนะคนดี'",
    "next": "lucian_ep2_sub_11",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_sub_11": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ฝูงปลาสีเงินแหวกว่ายวนไปมารอบเรือพร้อมส่องแสงระยิบระยับใต้ผิวน้ำ",
    "next": "lucian_ep2_sub_12",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_12": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'แม้แต่พวกปลาเวทมนตร์ก็ยังมาอวยพรให้เดทแรกของเราเลยนะครับเนี่ย'",
    "next": "lucian_ep2_sub_13",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_sub_13": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณหัวเราะเบาๆ กับคำพูดช่างจินตนาการของลูเชียน",
    "next": "lucian_ep2_sub_14",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_sub_14": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'เสียงหัวเราะของคุณไพเราะกว่าเสียงพิณในวิหารตั้งเยอะเลยครับ'",
    "next": "lucian_ep2_sub_15",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_sub_15": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เมื่อเรือล่องมาถึงเกาะกลางทะเลสาบที่มีทุ่งดอกจันทราสีขาว ลูเชียนก็จูงมือคุณลงไปเดินเล่น",
    "next": "lucian_ep2_sub_16",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_16": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ผมอยากหยุดเวลาของการเดทวันนี้ไว้ให้นานที่สุดเลยครับ'",
    "next": "lucian_ep2_sub_17",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_sub_17": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ทุกย่างก้าวที่มีลูเชียนคอยจับมือ เต็มไปด้วยความละมุนละไมและโรแมนติก",
    "next": "lucian_ep2_sub_18",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_sub_18": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ตรงนี้วิวสวยที่สุดเลย มาถ่ายทอดความทรงจำลงในคริสตัลบันทึกภาพคู่กันนะครับ'",
    "next": "lucian_ep2_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep3_after_sub_1": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เมื่อลีออนเดินกลับไปแล้ว รอยยิ้มสุภาพของลูเชียนก็เปลี่ยนเป็นแววตาอ้อนปนงอนทันที",
    "next": "lucian_ep3_after_sub_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_after_sub_2": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'คุณลีออนนี่ขยันแวะเอาขนมมาให้คุณจังเลยนะครับ... ผมชักจะอิจฉาขึ้นมาจริงๆ แล้วนะ'",
    "next": "lucian_ep3_after_sub_3",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_sub_3": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนรวบมือทั้งสองข้างของคุณมากุมไว้ แล้วซบหน้าผากลงกับไหล่ของคุณเบาๆ",
    "next": "lucian_ep3_after_sub_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_after_sub_4": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'อย่าไปยิ้มหวานให้คนอื่นแบบที่ยิ้มให้ผมนะครับ... รอยยิ้มพิเศษของคุณ ผมอยากเก็บไว้ดูคนเดียวเลย'",
    "next": "lucian_ep3_after_sub_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_sub_5": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณลูบเส้นผมสีเงินนุ่มลื่นของลูเชียนเบาๆ พลางบอกว่าคุณชอบอยู่กับเขามากที่สุดอยู่แล้ว",
    "next": "lucian_ep3_after_sub_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_after_sub_6": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนเงยหน้าขึ้นมายิ้มกว้าง ดวงตาเป็นประกายวิบวับทันที 'พูดจริงนะครับ! งั้นต้องให้รางวัลปลอบใจผมที่ต้องหึงเมื่อกี้ด้วยนะ'",
    "next": "lucian_ep3_after_sub_7",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep3_after_sub_7": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขายื่นแก้มเนียนๆ เข้ามาใกล้คุณอย่างรอคอยรางวัลด้วยท่าทางเจ้าเล่ห์นิดๆ",
    "next": "lucian_ep3_after_sub_8",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_after_sub_8": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ถ้าคุณจับแก้มผมเบาๆ ความขี้หวงของผมจะลดลงครึ่งหนึ่งเลยครับ'",
    "next": "lucian_ep3_after_sub_9",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_sub_9": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณหยิกแก้มลูเชียนเบาๆ ด้วยความหมั่นเขี้ยว ทำเอาเขาหัวเราะอย่างมีความสุข",
    "next": "lucian_ep3_after_sub_10",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep3_after_sub_10": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ยอมให้คุณแกล้งได้คนเดียวในโลกเลยนะครับเนี่ย'",
    "next": "lucian_ep3_after_sub_11",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_after_sub_11": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาโอบเอวคุณพาเดินกลับขึ้นหอคอยชมดาวอย่างอารมณ์ดี",
    "next": "lucian_ep3_after_sub_12",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_after_sub_12": {
    "chapter": "รูทลูเชียน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'เย็นนี้เดี๋ยวผมทำขนมสูตรพิเศษที่อร่อยกว่าของคุณลีออนสิบเท่าให้ทานเองครับ!'",
    "next": "lucian_ep3_after_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_sub_1": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "บนหอคอยที่ล้อมรอบด้วยสายฝน ลูเชียนกุมมือคุณไว้แน่นราวกับกลัวว่าคุณจะเลือนหายไป",
    "next": "lucian_ep4_sub_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_sub_2": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'ตลอดหลายปีที่ต้องอยู่บนหอคอยนี้คนเดียว ผมได้แต่มองผู้คนข้างล่างมีความสุขและมีครอบครัวที่อบอุ่น'",
    "next": "lucian_ep4_sub_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_sub_3": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "คุณรับฟังความเหงาที่ซ่อนอยู่ภายใต้รอยยิ้มอ่อนโยนของลูเชียนด้วยความเห็นใจ",
    "next": "lucian_ep4_sub_4",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_sub_4": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'จนกระทั่งคืนที่คุณตกลงมาจากฟากฟ้า... วินาทีที่คุณยิ้มให้ผมโลกที่เคยเป็นสีเทาของผมก็มีสีสันขึ้นมาทันที'",
    "next": "lucian_ep4_sub_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_sub_5": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "คุณกอดเอวของเขาไว้แน่น เพื่อย้ำเตือนว่าตอนนี้เขาไม่ได้อยู่ตัวคนเดียวอีกต่อไปแล้ว",
    "next": "lucian_ep4_sub_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_sub_6": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'อ้อมกอดของคุณอุ่นจังเลยครับ... อุ่นกว่าเวทมนตร์แห่งแสงบทไหนๆ ที่ผมเคยร่ายมาทั้งหมดเลย'",
    "next": "lucian_ep4_sub_7",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_sub_7": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'อยู่เป็นความอบอุ่นของผมแบบนี้ไปตลอดกาลเลยนะครับคนดี'",
    "next": "lucian_ep4_sub_8",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_sub_8": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ลูเชียนจูบลงบนเส้นผมของคุณอย่างทะนุถนอม",
    "next": "lucian_ep4_sub_9",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_sub_9": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-night",
    "text": "'คืนนี้ผมจะร่ายมนตร์กล่อมให้คุณหลับฝันดีในอ้อมแขนของผมเองครับ'",
    "next": "lucian_ep4_sub_10",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_sub_10": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "แสงดาวจำลองภายในห้องส่องแสงนวลตา โอบกล่อมคุณและลูเชียนตลอดค่ำคืน",
    "next": "lucian_ep4_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_sub_1": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "หน้าลานพิธีของมหาวิหาร คณะผู้เฒ่าได้เปิดค่ายกลสายฟ้าศักดิ์สิทธิ์เพื่อทดสอบความแน่วแน่ของลูเชียน",
    "next": "lucian_ep5_sub_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_sub_2": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไม่ต้องกลัวนะครับ ตราบใดที่มือของเรายังจับกันไว้ ค่ายกลนี้ทำอันตรายอะไรเราไม่ได้แน่นอน'",
    "next": "lucian_ep5_sub_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_sub_3": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณก้าวเดินเคียงข้างลูเชียนเข้าสู่วงแหวนเวท ทันใดนั้นพลังแสงดาวในตัวคุณและลูเชียนก็สอดประสานกัน!",
    "next": "lucian_ep5_sub_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_sub_4": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "แทนที่สายฟ้าจะผ่าลงมา ค่ายกลกลับเปลี่ยนเป็นเสาแสงสีทองอมม่วงที่งดงามตระการตา!",
    "next": "lucian_ep5_sub_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_sub_5": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เหล่าผู้เฒ่าแห่งวิหารต่างเบิกตากว้างและทรุดตัวลงคุกเข่าต่อหน้าปาฏิหาริย์แห่งดวงดาว",
    "next": "lucian_ep5_sub_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_sub_6": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'เห็นหรือยังครับท่านผู้เฒ่า ความรักไม่ได้ทำให้พลังศักดิ์สิทธิ์เสื่อมคลาย แต่กลับทำให้สมบูรณ์แบบต่างหาก!'",
    "next": "lucian_ep5_sub_7",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_sub_7": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "กฎโบราณที่เคยห้ามมหาปุโรหิตมีความรักถูกยกเลิกในวินาทีนั้นเอง!",
    "next": "lucian_ep5_sub_8",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_sub_8": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนหันมากอดคุณกลางลานวิหารท่ามกลางเสียงโห่ร้องยินดีของเหล่านักบวชฝึกหัด",
    "next": "lucian_ep5_sub_9",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_sub_9": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ต่อไปนี้ผมสามารถเดินจับมือและบอกรักคุณต่อหน้าทุกคนได้อย่างเปิดเผยแล้วนะครับ!'",
    "next": "lucian_ep5_sub_10",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_sub_10": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณยิ้มทั้งน้ำตาแห่งความดีใจไปพร้อมกับลูเชียน",
    "next": "lucian_ep5_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep6_sub_1": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "หลังคำสารภาพรัก ลูเชียนสวมแหวนอัญมณีแห่งดวงดาวสีม่วงน้ำเงินลงบนนิ้วนางข้างซ้ายของคุณ",
    "next": "lucian_ep6_sub_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep6_sub_2": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'แหวนวงนี้หลอมขึ้นจากเศษเสี้ยวของดาวตกและพลังชีวิตของผม... มันจะคอยปกป้องคุณเสมอครับ'",
    "next": "lucian_ep6_sub_3",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep6_sub_3": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ตัวเรือนแหวนส่องประกายระยิบระยับรับกับแสงจันทร์บนยอดหอคอย",
    "next": "lucian_ep6_sub_4",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep6_sub_4": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ตั้งแต่พรุ่งนี้เป็นต้นไป คุณคือสตรีผู้ถือครองหัวใจของมหาปุโรหิตลูเชียนแต่เพียงผู้เดียวแล้วนะ'",
    "next": "lucian_ep6_sub_5",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep6_sub_5": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขาโอบเอวคุณเข้ามาชิดแล้วซบแก้มลงกับแก้มของคุณอย่างออดอ้อน",
    "next": "lucian_ep6_sub_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep6_sub_6": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ห้ามหนีผมไปไหนอีกแล้วนะครับ เพราะผมรักและหลงคุณจนถอนตัวไม่ขึ้นแล้วจริงๆ'",
    "next": "lucian_ep6_sub_7",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep6_sub_7": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ค่ำคืนใต้หมู่ดาวเต็มไปด้วยคำมั่นสัญญาและความหวานชื่นที่ไม่มีวันจางหาย",
    "next": "lucian_ep6_sub_8",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep6_sub_8": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'มาร่วมกันเขียนตำนานบทใหม่ของวิหารดวงดาวไปด้วยกันนะครับ ที่รักของผม'",
    "next": "lucian_ep6_3",
    "charImg": "assets/char_lucian_smile.png"
  },
  "leon_ep1_sub_1": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนพาคุณเดินชมสวนหลังคฤหาสน์กองอัศวิน ที่มีแปลงดอกกุหลาบหลากสีและซุ้มไม้นั่งเล่นที่เขาต่อขึ้นเอง",
    "next": "leon_ep1_sub_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_sub_2": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ซุ้มไม้นี้ผมเพิ่งทาสีเสร็จเมื่อวานเองครับ เพราะอยากให้คุณมีที่นั่งรับลมสบายๆ เวลาออกมาเดินเล่น'",
    "next": "leon_ep1_sub_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_sub_3": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณลองนั่งลงบนม้านั่งไม้ในซุ้มที่มีเบาะรองนั่งนุ่มๆ วางเตรียมไว้ให้เรียบร้อย",
    "next": "leon_ep1_sub_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_sub_4": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'นั่งสบายไหมครับ? ถ้าแดดส่องบอกผมนะ เดี๋ยวผมไปขึงผ้าใบกันแดดเพิ่มให้ครับ!'",
    "next": "leon_ep1_sub_5",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_sub_5": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณดึงชายเสื้อลีออนให้นั่งลงข้างๆ กัน ไม่ต้องวิ่งวุ่นบริการตลอดเวลาก็ได้",
    "next": "leon_ep1_sub_6",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_sub_6": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "พอได้นั่งชิดกัน ลีออนก็เกร็งตัวตรงแน่ว หน้าแดงไปถึงคอ 'พะ... พอนั่งใกล้คุณแบบนี้แล้ว กลิ่นหอมจากตัวคุณทำผมใจสั่นไปหมดเลยครับ'",
    "next": "leon_ep1_sub_7",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_sub_7": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "บรรดาลูกน้องอัศวินที่แอบชะโงกหน้าดูอยู่หลังพุ่มไม้พากันส่งเสียงเชียร์หัวหน้าตัวเองเบาๆ",
    "next": "leon_ep1_sub_8",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_sub_8": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'พะ... พวกนายไปวิ่งรอบสนามฝึกเดี๋ยวนี้เลยนะ! มาแอบดูอะไรกันเล่า!' ลีออนหันไปตะโกนสั่งลูกน้องด้วยความเขินสุดขีด",
    "next": "leon_ep1_sub_9",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_sub_9": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณหัวเราะออกมาอย่างเอ็นดูในความซื่อและจริงใจของอัศวินหนุ่มผมทองคนนี้",
    "next": "leon_ep1_sub_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_sub_10": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ลูกน้องผมพวกนี้ซนจริงๆ เลยครับ แต่ทุกคนก็เคารพและพร้อมปกป้องคุณเหมือนผมทุกคนเลยนะ'",
    "next": "leon_ep1_sub_11",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_sub_11": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนหยิบคุกกี้รูปดาบและรูปหัวใจที่เขาอบเองออกมาจากตะกร้า",
    "next": "leon_ep1_sub_12",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_sub_12": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'อันรูปหัวใจนี่... ผมตั้งใจปั้นให้คุณโดยเฉพาะเลยครับ ถึงหน้าตาจะเบี้ยวไปนิดแต่ผมใส่ใจเต็มร้อยเลยนะ!'",
    "next": "leon_ep1_sub_13",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_sub_13": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณหยิบคุกกี้รูปหัวใจขึ้นมาชิม รสชาติหอมเนยและหวานกำลังดี",
    "next": "leon_ep1_sub_14",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_sub_14": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'อร่อยจริงเหรอครับ! ไชโย! งั้นเดี๋ยวผมอบให้คุณทานทุกวันเลยนะครับ!'",
    "next": "leon_ep1_sub_15",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_sub_15": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "รอยยิ้มกว้างเหมือนลูกหมาตัวโตใจดีของลีออนทำให้หัวใจของคุณพองโต",
    "next": "leon_ep1_sub_16",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_sub_16": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'อยู่กับคุณแล้วผมมีความสุขจังเลยครับ อยากให้เวลานี้ยาวนานไปตลอดเลย'",
    "next": "leon_ep1_sub_17",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_sub_17": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลมพัดกลีบกุหลาบปลิวผ่านซุ้มไม้ไปอย่างอ่อนโยน",
    "next": "leon_ep1_sub_18",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_sub_18": {
    "chapter": "รูทลีออน บทที่ 1: โลกของเราสองคน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ถ้าคืนนี้หนาวหรือนอนไม่หลับ เคาะเรียกผมที่ห้องข้างๆ ได้ตลอดเลยนะครับ!'",
    "next": "leon_ep1_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_sub_1": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ในงานเทศกาลประจำเมือง ลีออนในชุดลำลองพาคุณเดินชมซุ้มขายอาหารและซุ้มเกมปาเป้าอย่างสนุกสนาน",
    "next": "leon_ep2_sub_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_sub_2": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'คนเยอะหน่อยนะครับ จับมือผมไว้แน่นๆ นะ เดี๋ยวจะหลงกันครับ'",
    "next": "leon_ep2_sub_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_sub_3": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "มือใหญ่ที่อบอุ่นและหยาบกร้านนิดๆ จากการจับดาบของลีออนกุมมือคุณไว้อย่างทะนุถนอม",
    "next": "leon_ep2_sub_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_sub_4": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เมื่อเดินผ่านซุ้มเกมยิงธนูชิงตุ๊กตาหมีอัศวินตัวใหญ่ คุณก็หยุดมองด้วยความสนใจ",
    "next": "leon_ep2_sub_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_5": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'คุณอยากได้ตุ๊กตาตัวนั้นเหรอครับ? รอเดี๋ยวนะ เดี๋ยวผมยิงเอามาให้เองครับ!'",
    "next": "leon_ep2_sub_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_sub_6": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนหยิบคันธนูขึ้นมาเล็งด้วยท่วงท่าสุดเท่ ลูกธนูสามดอกพุ่งเข้ากลางเป้าสีแดงทั้งสามนัดรวด!",
    "next": "leon_ep2_sub_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_sub_7": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ชาวเมืองรอบซุ้มต่างปรบมือร้องว้าวให้กับความแม่นยำของหัวหน้าอัศวิน",
    "next": "leon_ep2_sub_8",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_sub_8": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนรับตุ๊กตาหมีตัวใหญ่มาแล้วยื่นให้คุณด้วยใบหน้าเปื้อนยิ้ม 'นี่ครับ! ให้เจ้าหมีอัศวินตัวนี้คอยกอดคุณตอนที่ผมออกไปลาดตระเวนนะ'",
    "next": "leon_ep2_sub_9",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_9": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณกอดตุ๊กตาหมีไว้แนบอกพลางชมว่าลีออนเก่งและเท่มากจริงๆ",
    "next": "leon_ep2_sub_10",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_10": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ทะ... เท่เหรอครับ! พอคุณชมว่าผมเท่แล้ว ผมเขินจนตัวจะลอยแล้วเนี่ย!'",
    "next": "leon_ep2_sub_11",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_11": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "จากนั้นลีออนก็พาคุณไปซื้อเครปผลไม้สดและน้ำเลมอนโซดาเย็นชื่นใจ",
    "next": "leon_ep2_sub_12",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_sub_12": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ระวังกระโปรงเลอะนะครับ เดี๋ยวผมช่วยถือแก้วน้ำให้เอง คุณทานเครปตามสบายเลย'",
    "next": "leon_ep2_sub_13",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_sub_13": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ความสุภาพบุรุษและช่างเอาอกเอาใจของลีออนทำให้เดทแรกเต็มไปด้วยรอยยิ้ม",
    "next": "leon_ep2_sub_14",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_sub_14": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'นี่เป็นครั้งแรกในชีวิตเลยครับที่ผมได้มาเดินเที่ยวงานเทศกาลกับผู้หญิงที่ผมชอบ...'",
    "next": "leon_ep2_sub_15",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_15": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "พอรู้ตัวว่าเผลอหลุดพูดคำว่า 'ผู้หญิงที่ชอบ' ออกมา ลีออนก็รีบเอามือปิดปากหน้าแดงก่ำ!",
    "next": "leon_ep2_sub_16",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_16": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผะ... ผมพูดออกไปแล้วสินะครับ! ก็ผมชอบคุณจริงๆ นี่นา!'",
    "next": "leon_ep2_sub_17",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_17": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณยิ้มกว้างให้กับความจริงใจสุดน่ารักของเขา",
    "next": "leon_ep2_sub_18",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_sub_18": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'เดินไปดูขบวนพาเหรดดอกไม้ตรงลานน้ำพุด้วยกันต่อนะครับ!'",
    "next": "leon_ep2_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep3_after_sub_1": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "หลังจากเซดริกเดินจากไปแล้ว ลีออนก็ยังกุมมือคุณไว้แน่นด้วยสีหน้าจริงจัง",
    "next": "leon_ep3_after_sub_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_after_sub_2": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เมื่อกี้ตอนที่ท่านดยุกพูดแบบนั้น... ผมกลัวแทบแย่เลยครับว่าคุณจะเปลี่ยนใจไปหาเขา'",
    "next": "leon_ep3_after_sub_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_sub_3": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาก้มลงมองสบตาคุณ แววตาสีฟ้าสดใสเต็มไปด้วยความรักและความซื่อสัตย์",
    "next": "leon_ep3_after_sub_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_sub_4": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ถึงผมจะไม่ได้มีบรรดาศักดิ์สูงส่งเหมือนท่านดยุก แต่เรื่องความรักและความทุ่มเทให้คุณ ผมมั่นใจว่าไม่แพ้ใครในโลกแน่นอนครับ!'",
    "next": "leon_ep3_after_sub_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_sub_5": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณแตะแก้มของลีออนเบาๆ เพื่อยืนยันว่าสำหรับคุณ ลีออนคือคนที่พึ่งพาได้และน่ารักที่สุดเสมอ",
    "next": "leon_ep3_after_sub_6",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_sub_6": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยิ้มกว้างจนตาเป็นประกาย เขารวบตัวคุณเข้ามากอดแน่นด้วยความดีใจ",
    "next": "leon_ep3_after_sub_7",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep3_after_sub_7": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะครับ! พอได้ยินคุณยืนยันแบบนี้แล้ว ผมมีพลังขึ้นร้อยเท่าพันเท่าเลย!'",
    "next": "leon_ep3_after_sub_8",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_sub_8": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาหมุนตัวคุณไปรอบๆ เบาๆ ด้วยความดีใจจนคุณอดหัวเราะไม่ได้",
    "next": "leon_ep3_after_sub_9",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep3_after_sub_9": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ต่อไปนี้ถ้าใครมาพูดจาจะแย่งคุณไปจากผมอีก ผมจะกอดคุณไว้แน่นๆ แบบนี้ไม่ให้ใครเข้าใกล้เลยครับ!'",
    "next": "leon_ep3_after_sub_10",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_after_sub_10": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "อาการหวงแบบซื่อๆ ของลีออนทำให้คุณยิ่งเอ็นดูเขามากขึ้นไปอีก",
    "next": "leon_ep3_after_sub_11",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_after_sub_11": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไปที่สวนกุหลาบกันเถอะครับ วันนี้กุหลาบสีชมพูแปลงใหม่บานแล้ว ผมอยากให้คุณได้เห็นเป็นคนแรกเลย'",
    "next": "leon_ep3_after_sub_12",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep3_after_sub_12": {
    "chapter": "รูทลีออน บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณสองคนเดินจูงมือกันไปยังสวนกุหลาบด้วยหัวใจที่ใกล้ชิดกันยิ่งกว่าเดิม",
    "next": "leon_ep3_after_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_sub_1": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "ท่ามกลางเสียงพายุฝนด้านนอก ลีออนนั่งกุมมือคุณอยู่ข้างเตาผิง แววตาของเขาดูผ่อนคลายขึ้นหลังจากได้เล่าเรื่องในอดีตให้คุณฟัง",
    "next": "leon_ep4_sub_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_sub_2": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'เมื่อก่อนผมคิดมาตลอดว่า ตัวเองเป็นแค่อัศวินที่ไม่มีชาติตระกูล ต้องคอยเจียมตัวอยู่เสมอ'",
    "next": "leon_ep4_sub_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_sub_3": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "คุณส่ายหน้าและบอกเขาว่า คุณค่าของคนไม่ได้อยู่ที่ชาติกำเนิด แต่อยู่ที่หัวใจที่กล้าหาญและอ่อนโยนของเขาต่างหาก",
    "next": "leon_ep4_sub_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_sub_4": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "ลีออนมองคุณด้วยความตื้นตันใจจนขอบตาอุ่นร้อน เขาซบหน้าผากลงกับฝ่ามือของคุณ",
    "next": "leon_ep4_sub_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep4_sub_5": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'คุณใจดีกับผมเหลือเกินครับ... คุณเป็นคนแรกที่ทำให้ผมภูมิใจในตัวเองจากใจจริง'",
    "next": "leon_ep4_sub_6",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep4_sub_6": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "คุณลูบเรือนผมสีทองของเขาเบาๆ อย่างปลอบโยน",
    "next": "leon_ep4_sub_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_sub_7": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'ต่อจากนี้ไป ผมจะไม่ลังเลหรือดูถูกตัวเองอีกแล้วครับ ผมจะเก่งขึ้นเพื่อเป็นผู้ชายที่คู่ควรเดินเคียงข้างคุณให้ได้!'",
    "next": "leon_ep4_sub_8",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_sub_8": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ลีออนดึงผ้าห่มผืนหนามาห่มคลุมไหล่ให้คุณ พร้อมคอยเติมฟืนในเตาผิงไม่ให้ไฟมอดดับ",
    "next": "leon_ep4_sub_9",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_sub_9": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-night",
    "text": "'คืนนี้ผมจะนั่งเฝ้าอยู่ข้างๆ คุณตรงนี้จนเช้าเลยครับ นอนหลับให้สบายนะคนสำคัญของผม'",
    "next": "leon_ep4_sub_10",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep4_sub_10": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ความอบอุ่นและซื่อสัตย์ของลีออนกล่อมให้คุณหลับฝันดีตลอดทั้งคืน",
    "next": "leon_ep4_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_sub_1": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ที่ลานประลองหลวง ธงประจำกองอัศวินโบกสะบัดท่ามกลางผู้ชมเต็มอัฒจันทร์ที่มาชมการประลองชิงตำแหน่งผู้บัญชาการสูงสุด",
    "next": "leon_ep5_sub_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_sub_2": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ก่อนก้าวลงสู่สนาม ลีออนเดินมาหาคุณที่ขอบอัฒจันทร์วีไอพีแล้วคุกเข่าลงข้างหนึ่ง",
    "next": "leon_ep5_sub_3",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_sub_3": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ช่วยผูกริบบิ้นนำโชคของคุณไว้ที่ข้อมือผมหน่อยได้ไหมครับ? มีสัญลักษณ์ของคุณอยู่ด้วย ผมชนะได้แน่นอนครับ!'",
    "next": "leon_ep5_sub_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_sub_4": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณผูกริบบิ้นสีทองของคุณเข้าที่ข้อมือของลีออน พร้อมอวยพรให้เขาปลอดภัยและคว้าชัยชนะกลับมา",
    "next": "leon_ep5_sub_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_sub_5": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เมื่อการประลองเริ่มขึ้น ลีออนกวัดแกว่งดาบด้วยความรวดเร็วและทรงพลัง ทุกท่วงท่าสง่างามไร้ที่ติ!",
    "next": "leon_ep5_sub_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_sub_6": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ในจังหวะสุดท้าย ลีออนใช้เพลงดาบสุริยันปัดดาบของคู่ต่อสู้จนหลุดมือ คว้าชัยชนะมาได้อย่างขาดลอย!",
    "next": "leon_ep5_sub_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_sub_7": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เสียงโห่ร้องยินดีดังกึกก้องไปทั่วสนามประลอง! ลีออนหันมาชูดาบให้คุณเป็นคนแรกด้วยรอยยิ้มเจิดจ้า",
    "next": "leon_ep5_sub_8",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_sub_8": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "หลังจบพิธีแต่งตั้งผู้บัญชาการสูงสุด ลีออนรีบวิ่งตรงมาหาคุณแล้วอุ้มคุณขึ้นกอดทันที",
    "next": "leon_ep5_sub_9",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_sub_9": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมทำสำเร็จแล้วครับ! ตอนนี้ไม่มีใครกล้าพูดว่าผมไม่คู่ควรกับคุณอีกต่อไปแล้วนะ!'",
    "next": "leon_ep5_sub_10",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_sub_10": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณกอดแสดงความยินดีกับผู้บัญชาการอัศวินคนเก่งของคุณด้วยความภูมิใจ",
    "next": "leon_ep5_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_sub_1": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "หลังคำสารภาพรักในสวนกุหลาบ ลีออนหยิบกล่องกำมะหยี่สีน้ำเงินออกมาจากอกเสื้อด้วยมือที่สั่นน้อยๆ",
    "next": "leon_ep6_sub_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep6_sub_2": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'นี่คือแหวนตราประจำตำแหน่งผู้บัญชาการสุริยันและแหวนหมั้นที่ผมสั่งทำพิเศษให้คุณครับ...'",
    "next": "leon_ep6_sub_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_sub_3": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขาสวมแหวนประดับเพชรสีทองสว่างไสวลงบนนิ้วนางข้างซ้ายของคุณอย่างทะนุถนอม",
    "next": "leon_ep6_sub_4",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep6_sub_4": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'พอดีเป๊ะเลยครับ! ตอนแอบวัดขนาดนิ้วคุณตอนคุณเผลอหลับ ผมลุ้นแทบแย่ว่าจะตื่นไหม'",
    "next": "leon_ep6_sub_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_sub_5": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณหัวเราะให้กับความพยายามสุดน่ารักของเขา ก่อนจะโอบรอบคอเขาไว้",
    "next": "leon_ep6_sub_6",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_sub_6": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ตั้งแต่วันนี้ไป ไม่ใช่ในฐานะอัศวินกับเจ้านายอีกแล้วนะครับ แต่ในฐานะสามีและคนรักที่จะดูแลคุณไปชั่วนิรันดร์!'",
    "next": "leon_ep6_sub_7",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep6_sub_7": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ท่ามกลางกลิ่นหอมของดอกกุหลาบนับพันดอก ลีออนจูบคุณอีกครั้งด้วยความรักที่บริสุทธิ์และมั่นคง",
    "next": "leon_ep6_sub_8",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep6_sub_8": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรัก",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมรักคุณที่สุดในจักรวาลเลยครับ ยอดดวงใจของผม!'",
    "next": "leon_ep6_3",
    "charImg": "assets/char_leon_blush.png"
  },
  "kael_ep1_sub_1": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "บนชั้นบนสุดของหอนาฬิกาที่ถูกดัดแปลงเป็นห้องพักสุดหรู เคลพาคุณเดินดูหน้าต่างกระจกทรงกลมบานใหญ่ที่เห็นวิวเมืองทั้งเมือง",
    "next": "kael_ep1_sub_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_sub_2": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เจ๋งใช่ไหมล่ะ? จากตรงนี้เรามองเห็นได้ตั้งแต่พระราชวังไปจนถึงท่าเรือริมทะเลเลยนะ'",
    "next": "kael_ep1_sub_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_sub_3": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ภายในห้องตกแต่งด้วยพรมเปอร์เซียเนื้อนุ่ม โคมไฟคริสตัลหลากสี และมุมครัวเล็กๆ ที่มีกลิ่นขนมหอมกรุ่น",
    "next": "kael_ep1_sub_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_sub_4": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เห็นฉันเป็นจอมโจรแบบนี้ แต่เรื่องทำขนมกับจัดบ้าน ฉันไม่แพ้พ่อบ้านในวังหรอกนะจะบอกให้'",
    "next": "kael_ep1_sub_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_sub_5": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณเดินไปดูชั้นวางของที่เต็มไปด้วยกล่องดนตรีโบราณและอัญมณีรูปทรงแปลกตา",
    "next": "kael_ep1_sub_6",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_sub_6": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ชอบกล่องดนตรีอันนั้นเหรอ? ลองไขลานดูสิ เสียงเพลงเพราะมากเลยนะ'",
    "next": "kael_ep1_sub_7",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_sub_7": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เมื่อคุณไขลาน เสียงดนตรีใสกังวานก็บรรเลงขึ้น เคลขยับมายืนข้างหลังคุณแล้ววางคางเกยไหล่คุณเบาๆ",
    "next": "kael_ep1_sub_8",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_sub_8": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เมื่อก่อนอยู่คนเดียวมันก็เงียบๆ ดีอยู่หรอก... แต่พอมีเธอมายืนอยู่ตรงนี้ด้วยแล้ว ไม่อยากกลับไปอยู่คนเดียวอีกเลยแฮะ'",
    "next": "kael_ep1_sub_9",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_sub_9": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณหันไปสบตาเขาในระยะประชิด ทำเอาเคลชะงักแล้วแอบหน้าแดง",
    "next": "kael_ep1_sub_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_sub_10": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ยะ... อย่าหันมาเร็วแบบนี้สิยัยบ๊อง เกือบจมูกชนกันแล้วเห็นไหมเล่า!'",
    "next": "kael_ep1_sub_11",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_sub_11": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณหัวเราะชอบใจที่ได้เห็นจอมโจรจอมกวนเขินจนเสียอาการ",
    "next": "kael_ep1_sub_12",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_sub_12": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'หัวเราะเยาะฉันเหรอ เดี๋ยวเถอะ มานั่งกินทาร์ตเบอร์รี่ที่ฉันเพิ่งอบเสร็จเดี๋ยวนี้เลย'",
    "next": "kael_ep1_sub_13",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_sub_13": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาจูงมือคุณมานั่งที่โซฟาตัวใหญ่แล้วตัดทาร์ตผลไม้ชิ้นโตใส่จานให้คุณ",
    "next": "kael_ep1_sub_14",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_sub_14": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'กินเยอะๆ ล่ะ อยู่ที่นี่ไม่ต้องรักษามารยาทชาววังให้เมื่อย อยากนอนกลิ้งหรืออยากอ้อนฉันยังไงก็ตามสบายเลย'",
    "next": "kael_ep1_sub_15",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_sub_15": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ความอิสระและเป็นกันเองของเคลทำให้คุณรู้สึกสบายใจและยิ้มได้กว้างที่สุด",
    "next": "kael_ep1_sub_16",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_sub_16": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'นั่นแหละ ยิ้มแบบนั้นแหละที่ฉันชอบดูที่สุดเลย'",
    "next": "kael_ep1_sub_17",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_sub_17": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขานั่งเท้าคางมองคุณทานขนมด้วยสายตาที่เต็มไปด้วยความเอ็นดู",
    "next": "kael_ep1_sub_18",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_sub_18": {
    "chapter": "รูทเคล บทที่ 1: โลกของเราสองคน",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'พรุ่งนี้ฉันจะพาเธอไปที่เด็ดๆ ของเมืองหลวง เตรียมตัวไว้ได้เลย!'",
    "next": "kael_ep1_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_1": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เมื่อถึงตลาดนัดกลางคืนที่ประดับด้วยโคมไฟนับพันดวง เคลก็จับมือคุณสอดประสานนิ้วมือแน่น",
    "next": "kael_ep2_sub_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_2": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ตลาดมืดยามค่ำคืนมีของสนุกๆ เพียบเลย แต่ต้องจับมือฉันไว้ตลอดเวลา ห้ามปล่อยเด็ดขาดนะ'",
    "next": "kael_ep2_sub_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_3": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "สองข้างทางเต็มไปด้วยร้านขายหน้ากากแฟนตาซี ร้านขนมหวานเรืองแสง และนักแสดงมายากลข้างถนน",
    "next": "kael_ep2_sub_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_sub_4": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลหยิบที่คาดผมหูแมวประดับกระดิ่งอันหนึ่งจากร้านขายของกิ๊ฟช็อปมาสวมให้บนหัวคุณ",
    "next": "kael_ep2_sub_5",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_5": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ฮะๆ! เข้ากับเธอเป็นบ้าเลยยัยลูกแมว! น่ารักขนาดนี้ซื้อเก็บไว้ให้ใส่ให้ฉันดูคนเดียวดีกว่า'",
    "next": "kael_ep2_sub_6",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_sub_6": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณคว้าที่คาดผมหูหมาป่าสีดำอีกอันมาสวมให้เคลบ้างเพื่อให้เข้าคู่กัน",
    "next": "kael_ep2_sub_7",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_sub_7": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'หือ? จะให้ฉันใส่เดินเป็นเพื่อนเธอเหรอ... กะ... ก็ได้ เห็นว่าเป็นเธอหรอกนะถึงยอมใส่ให้น่ะ!'",
    "next": "kael_ep2_sub_8",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_sub_8": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ทั้งคู่เดินใส่ที่คาดผมคู่กันชิมอาหารริมทางท่ามกลางสายตาเอ็นดูของแม่ค้าในตลาด",
    "next": "kael_ep2_sub_9",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_sub_9": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "จากนั้นเคลก็พาคุณขึ้นไปยังเนินเขาจุดชมวิวที่มองเห็นโคมลอยนับพันดวงกำลังลอยขึ้นสู่ท้องฟ้า",
    "next": "kael_ep2_sub_10",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_10": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "แสงสีส้มทองของโคมลอยนับพันสว่างไสวเต็มท้องฟ้ายามค่ำคืนราวกับทะเลดวงดาว",
    "next": "kael_ep2_sub_11",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_sub_11": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'มาปล่อยโคมลอยอธิษฐานด้วยกันสิ ฉันเตรียมโคมอันใหญ่ไว้ให้เราสองคนแล้ว'",
    "next": "kael_ep2_sub_12",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_12": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณและเคลช่วยกันจุดไฟโคมลอยและจับขอบโคมไว้ด้วยกันก่อนจะปล่อยให้ลอยขึ้นสู่ท้องฟ้า",
    "next": "kael_ep2_sub_13",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_sub_13": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'อยากรู้ไหมว่าเมื่อกี้ฉันอธิษฐานว่าอะไร?'",
    "next": "kael_ep2_sub_14",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_sub_14": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณหันไปมองเขาด้วยความอยากรู้ เคลจึงยิ้มมุมปากแล้วขยับเข้ามาใกล้",
    "next": "kael_ep2_sub_15",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_15": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ฉันอธิษฐานว่า... ขอให้ยัยตัวแสบข้างๆ ฉันคนนี้ ตกหลุมรักฉันจนไปไหนไม่รอดยังไงล่ะ'",
    "next": "kael_ep2_sub_16",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_sub_16": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คำพูดตรงไปตรงมาของเคลทำเอาหน้าของคุณร้อนผ่าวแข่งกับแสงโคมไฟ",
    "next": "kael_ep2_sub_17",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_sub_17": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ดูท่าคำอธิษฐานของฉันจะเริ่มเป็นจริงแล้วแฮะ ดูแก้มแดงๆ ของเธอสิ'",
    "next": "kael_ep2_sub_18",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_sub_18": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "สายลมยามค่ำคืนพัดผ่านเนินเขาอย่างโรแมนติก",
    "next": "kael_ep2_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_after_sub_1": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "พอลูเชียนเดินกลับวิหารไปแล้ว เคลก็ยังไม่ยอมคลายอ้อมแขนที่กอดเอวคุณออกเลย",
    "next": "kael_ep3_after_sub_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_after_sub_2": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'หน็อยแน่... พ่อปุโรหิตหน้ายิ้มนั่น ทีเวลาอยู่ต่อหน้าคนอื่นทำเป็นสุภาพ ลับหลังนี่จ้องจะมาชวนเธอไปท่าเดียวเลยนะ!'",
    "next": "kael_ep3_after_sub_3",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_3": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณตีแขนเคลเบาๆ พลางขำที่เห็นจอมโจรผู้รักอิสระกลายเป็นคนขี้หวงสุดๆ",
    "next": "kael_ep3_after_sub_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_4": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ขำอะไรเล่า! ก็ฉันหวงของฉันนี่นา สมบัติชิ้นอื่นในโลกนี้ใครอยากได้ฉันยกให้หมด แต่สำหรับเธอ... ฉันไม่แบ่งให้ใครแม้แต่ปลายเล็บ!'",
    "next": "kael_ep3_after_sub_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_5": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาซบคางลงบนไหล่ของคุณแล้วกอดกระชับแน่นขึ้น",
    "next": "kael_ep3_after_sub_6",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_6": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เมื่อกี้ตอนที่เธอบอกลูเชียนว่าอยากอยู่กับฉันต่อ... รู้ไหมว่าฉันดีใจจนแทบจะตะโกนลั่นเมืองเลยนะ'",
    "next": "kael_ep3_after_sub_7",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_7": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณลูบแก้มเคลเบาๆ พลางบอกว่าคุณเลือกเขาแล้วก็จะอยู่ข้างเขาเสมอ",
    "next": "kael_ep3_after_sub_8",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_after_sub_8": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลยิ้มกว้างจนตาหยี ก่อนจะจุ๊บลงที่ปลายจมูกของคุณเบาๆ ทีหนึ่ง",
    "next": "kael_ep3_after_sub_9",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep3_after_sub_9": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'น่ารักแบบนี้ เดี๋ยวคืนนี้ฉันทำพายสตรอว์เบอร์รีของโปรดให้กินเป็นรางวัลชุดใหญ่เลย!'",
    "next": "kael_ep3_after_sub_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_10": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ความขี้หึงปนขี้อ้อนของเคลทำให้ความสัมพันธ์ของคุณสองคนยิ่งแน่นแฟ้นขึ้น",
    "next": "kael_ep3_after_sub_11",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_after_sub_11": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ปะ กลับฐานลับของเรากันเถอะ คืนนี้ฉันจะดีดกีตาร์ร้องเพลงให้เธอฟังเอง'",
    "next": "kael_ep3_after_sub_12",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep3_after_sub_12": {
    "chapter": "รูทเคล บทที่ 3: ง้อคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลจูงมือคุณกระโดดข้ามหลังคาเมืองยามค่ำคืนกลับสู่หอนาฬิกาอย่างคล่องแคล่ว",
    "next": "kael_ep3_after_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_sub_1": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "ในห้องพักที่จุดเทียนหอมอุ่นๆ เคลนั่งพิงพนักโซฟาโดยมีคุณคอยกุมมือเขาอยู่ไม่ห่าง",
    "next": "kael_ep4_sub_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_sub_2": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ฉันไม่เคยเล่าเรื่องที่มาของรอยสักคำสาปนี้ให้ใครฟังเลย... เพราะฉันไม่อยากได้ความสงสารจากใคร'",
    "next": "kael_ep4_sub_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_sub_3": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณเอื้อมมือไปแตะที่รอยสักรูปดาวที่ลำคอของเขาอย่างแผ่วเบาและอ่อนโยนที่สุด",
    "next": "kael_ep4_sub_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_sub_4": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'แต่พอเป็นมือของเธอที่แตะตรงนี้... ความเจ็บปวดที่เคยมีมันกลับหายไปหมดเลย กลายเป็นความอบอุ่นเข้ามาแทนที่'",
    "next": "kael_ep4_sub_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_sub_5": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณบอกเขาว่าสำหรับคุณ รอยสักนี้คือเครื่องพิสูจน์ว่าเคลเป็นคนจิตใจดีและกล้าหาญที่สุด",
    "next": "kael_ep4_sub_6",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_sub_6": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลชะงักไป ดวงตาสีอำพันสั่นไหวด้วยความตื้นตันใจก่อนจะดึงคุณเข้ามากอดแนบอกแน่น",
    "next": "kael_ep4_sub_7",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_sub_7": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ยัยบ๊องเอ๊ย... พูดจาแบบนี้อยากเห็นฉันร้องไห้หรือไงกันนะ'",
    "next": "kael_ep4_sub_8",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_sub_8": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณกอดตอบและลูบแผ่นหลังกว้างของเขาอย่างปลอบโยน",
    "next": "kael_ep4_sub_9",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_sub_9": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'แค่มีเธอเข้าใจฉันคนเดียว ต่อให้คนทั้งโลกจะเข้าใจฉันผิดยังไง ฉันก็ไม่แคร์อีกแล้วล่ะ'",
    "next": "kael_ep4_sub_10",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_sub_10": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คืนพายุฝนผ่านพ้นไปพร้อมกับหัวใจสองดวงที่หลอมรวมเป็นหนึ่งเดียวกัน",
    "next": "kael_ep4_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_sub_1": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เมื่อคำสาปในตัวเคลกำเริบขึ้นพร้อมกับที่หน่วยองครักษ์ลับล้อมหอนาฬิกาไว้ คุณก็ก้าวออกมายืนปกป้องเคลทันที",
    "next": "kael_ep5_sub_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_sub_2": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณปลดปล่อยพลังแสงดาวขั้นสูงสุดโอบล้อมร่างของเคลไว้ ลำแสงสีทองค่อยๆ ชำระล้างไอความมืดออกจากรอยสักที่คอของเขา!",
    "next": "kael_ep5_sub_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_sub_3": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'พลังของเธอ... กำลังสลายคำสาปที่ติดตัวฉันมาห้าปีไปจริงๆ ด้วย!'",
    "next": "kael_ep5_sub_4",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_sub_4": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "พร้อมกันนั้น ลูกแก้วบันทึกความทรงจำในอดีตก็ฉายภาพเหตุการณ์เมื่อห้าปีก่อนที่เคลช่วยชีวิตเด็กๆ ไว้ขึ้นกลางท้องฟ้าให้ทุกคนเห็น!",
    "next": "kael_ep5_sub_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_sub_5": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "หัวหน้าหน่วยองครักษ์และชาวเมืองที่ได้เห็นความจริงต่างพากันก้มศีรษะขอโทษและยกย่องเคลเป็นวีรบุรุษ",
    "next": "kael_ep5_sub_6",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_sub_6": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เมื่อแสงสว่างจางลง คำสาปร้ายในตัวเคลก็สลายหายไปจนหมด เหลือเพียงรอยสักรูปดาวสีทองที่เป็นพันธสัญญาคู่กับคุณ!",
    "next": "kael_ep5_sub_7",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_sub_7": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ดูสิ! ตอนนี้ฉันเป็นอิสระจากคำสาปอย่างสมบูรณ์แล้ว เพราะเธอช่วยชีวิตฉันไว้แท้ๆ เลยนะ!'",
    "next": "kael_ep5_sub_8",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_sub_8": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลอุ้มคุณขึ้นหมุนกลางอากาศท่ามกลางเสียงปรบมือยินดีของชาวเมือง",
    "next": "kael_ep5_sub_9",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_sub_9": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'บุญคุณครั้งนี้ใหญ่หลวงนัก สงสัยฉันต้องชดใช้ด้วยการดูแลเธอไปตลอดชีวิตซะแล้วล่ะ!'",
    "next": "kael_ep5_sub_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_sub_10": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณยิ้มกว้างด้วยความโล่งใจและดีใจที่เคลปลอดภัยแล้ว",
    "next": "kael_ep5_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep6_sub_1": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "หลังคำสารภาพรักใต้แสงจันทร์ เคลหยิบแหวนเงินสลักลายดาวคู่ที่ประดับด้วยอัญมณีสีทับทิมออกมาสวมให้คุณ",
    "next": "kael_ep6_sub_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep6_sub_2": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'แหวนวงนี้ฉันไม่ได้ไปขโมยใครมานะ! ฉันลงมือตีเงินและเจียระไนอัญมณีเองกับมือทุกขั้นตอนเพื่อเธอคนเดียวเลยนะ'",
    "next": "kael_ep6_sub_3",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep6_sub_3": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณมองนิ้วมือของเคลที่มีรอยพลาสเตอร์แปะอยู่เล็กน้อยจากการตั้งใจทำแหวนให้คุณด้วยความซาบซึ้งใจ",
    "next": "kael_ep6_sub_4",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep6_sub_4": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ตอนนี้เธอเป็นคู่หูและภรรยาของจอมโจรเคลอย่างเป็นทางการแล้วนะยัยตัวแสบ'",
    "next": "kael_ep6_sub_5",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep6_sub_5": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เขาโอบเอวคุณเข้ามาชิดแล้วจูบลงที่หน้าผาก แก้ม และริมฝีปากของคุณอย่างแสนรัก",
    "next": "kael_ep6_sub_6",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep6_sub_6": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ฉันจะพาเธอไปดูทะเลทรายสีเงิน ป่าหิ่งห้อย แล้วก็เกาะลอยฟ้า... เราจะไปเที่ยวด้วยกันทุกที่บนโลกใบนี้เลย!'",
    "next": "kael_ep6_sub_7",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep6_sub_7": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ใต้แสงจันทร์สีเงิน คุณและเคลจับมือกันเริ่มต้นการผจญภัยครั้งใหม่ที่เต็มไปด้วยความรักและอิสรภาพ",
    "next": "kael_ep6_sub_8",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep6_sub_8": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรัก",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'รักเธอนะยัยหัวขโมย... ขโมยหัวใจฉันไปแล้วยึดไว้ตลอดกาลเลยนะ!'",
    "next": "kael_ep6_3",
    "charImg": "assets/char_kael_smile.png"
  },
  "pro_c1_cedric_ext_1": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "pro_c1_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_c1_cedric_ext_2": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "pro_c1_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "pro_c1_cedric_ext_3": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "pro_c1_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "pro_c1_cedric_ext_4": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "pro_c1_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "pro_c1_cedric_ext_5": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "pro_c1_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_c1_cedric_ext_6": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "pro_c1_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_c1_cedric_ext_7": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "pro_c1_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_c1_cedric_ext_8": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "pro_c1_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "pro_c1_cedric_ext_9": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "pro_c1_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_c1_cedric_ext_10": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "pro_after_c1_1",
    "charImg": "assets/char_cedric.png"
  },
  "pro_c1_lucian_ext_1": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "pro_c1_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "pro_c1_lucian_ext_2": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "pro_c1_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "pro_c1_lucian_ext_3": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "pro_c1_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c1_lucian_ext_4": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "pro_c1_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c1_lucian_ext_5": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "pro_c1_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c1_lucian_ext_6": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "pro_c1_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "pro_c1_lucian_ext_7": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "pro_c1_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "pro_c1_lucian_ext_8": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "pro_c1_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "pro_c1_lucian_ext_9": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "pro_c1_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c1_lucian_ext_10": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "pro_after_c1_1",
    "charImg": "assets/char_lucian.png"
  },
  "pro_c1_leon_ext_1": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "pro_c1_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "pro_c1_leon_ext_2": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "pro_c1_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "pro_c1_leon_ext_3": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "pro_c1_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "pro_c1_leon_ext_4": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "pro_c1_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "pro_c1_leon_ext_5": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "pro_c1_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_c1_leon_ext_6": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "pro_c1_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_c1_leon_ext_7": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "pro_c1_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_c1_leon_ext_8": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "pro_c1_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "pro_c1_leon_ext_9": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "pro_c1_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_c1_leon_ext_10": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "pro_after_c1_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_c1_kael_ext_1": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "pro_c1_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "pro_c1_kael_ext_2": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "pro_c1_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "pro_c1_kael_ext_3": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "pro_c1_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "pro_c1_kael_ext_4": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "pro_c1_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "pro_c1_kael_ext_5": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "pro_c1_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "pro_c1_kael_ext_6": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "pro_c1_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "pro_c1_kael_ext_7": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "pro_c1_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "pro_c1_kael_ext_8": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "pro_c1_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "pro_c1_kael_ext_9": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "pro_c1_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "pro_c1_kael_ext_10": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "pro_after_c1_1",
    "charImg": "assets/char_kael.png"
  },
  "pro_c2_cedric_ext_1": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "pro_c2_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_c2_cedric_ext_2": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "pro_c2_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "pro_c2_cedric_ext_3": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "pro_c2_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "pro_c2_cedric_ext_4": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "pro_c2_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "pro_c2_cedric_ext_5": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "pro_c2_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_c2_cedric_ext_6": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "pro_c2_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_c2_cedric_ext_7": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "pro_c2_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "pro_c2_cedric_ext_8": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "pro_c2_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "pro_c2_cedric_ext_9": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "pro_c2_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "pro_c2_cedric_ext_10": {
    "chapter": "บทนำ: อ้อมแขนของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "pro_palace_walk_1",
    "charImg": "assets/char_cedric.png"
  },
  "pro_c2_lucian_ext_1": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "pro_c2_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "pro_c2_lucian_ext_2": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "pro_c2_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "pro_c2_lucian_ext_3": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "pro_c2_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c2_lucian_ext_4": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "pro_c2_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c2_lucian_ext_5": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "pro_c2_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c2_lucian_ext_6": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "pro_c2_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "pro_c2_lucian_ext_7": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "pro_c2_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "pro_c2_lucian_ext_8": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "pro_c2_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "pro_c2_lucian_ext_9": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "pro_c2_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "pro_c2_lucian_ext_10": {
    "chapter": "บทนำ: มือที่อบอุ่นของปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "pro_palace_walk_1",
    "charImg": "assets/char_lucian.png"
  },
  "pro_c2_leon_ext_1": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "pro_c2_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "pro_c2_leon_ext_2": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "pro_c2_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "pro_c2_leon_ext_3": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "pro_c2_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "pro_c2_leon_ext_4": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "pro_c2_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "pro_c2_leon_ext_5": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "pro_c2_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_c2_leon_ext_6": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "pro_c2_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_c2_leon_ext_7": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "pro_c2_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "pro_c2_leon_ext_8": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "pro_c2_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "pro_c2_leon_ext_9": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "pro_c2_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_c2_leon_ext_10": {
    "chapter": "บทนำ: อัศวินคู่ใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-shrine",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "pro_palace_walk_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_c2_kael_ext_1": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "pro_c2_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "pro_c2_kael_ext_2": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "pro_c2_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "pro_c2_kael_ext_3": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "pro_c2_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "pro_c2_kael_ext_4": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "pro_c2_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "pro_c2_kael_ext_5": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "pro_c2_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "pro_c2_kael_ext_6": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "pro_c2_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "pro_c2_kael_ext_7": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "pro_c2_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "pro_c2_kael_ext_8": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "pro_c2_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "pro_c2_kael_ext_9": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "pro_c2_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "pro_c2_kael_ext_10": {
    "chapter": "บทนำ: จอมโจรผู้แสนดี",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-shrine",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "pro_palace_walk_1",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c1_cedric_ext_1": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "ch1_c1_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch1_c1_cedric_ext_2": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "ch1_c1_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_c1_cedric_ext_3": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "ch1_c1_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch1_c1_cedric_ext_4": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "ch1_c1_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_c1_cedric_ext_5": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "ch1_c1_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch1_c1_cedric_ext_6": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "ch1_c1_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_c1_cedric_ext_7": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "ch1_c1_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_c1_cedric_ext_8": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "ch1_c1_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch1_c1_cedric_ext_9": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "ch1_c1_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch1_c1_cedric_ext_10": {
    "chapter": "บทที่ 1: อำนาจของดยุก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "ch1_afternoon_1",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_c1_lucian_ext_1": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "ch1_c1_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch1_c1_lucian_ext_2": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "ch1_c1_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "ch1_c1_lucian_ext_3": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "ch1_c1_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c1_lucian_ext_4": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "ch1_c1_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c1_lucian_ext_5": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "ch1_c1_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c1_lucian_ext_6": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "ch1_c1_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "ch1_c1_lucian_ext_7": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "ch1_c1_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch1_c1_lucian_ext_8": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "ch1_c1_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch1_c1_lucian_ext_9": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "ch1_c1_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c1_lucian_ext_10": {
    "chapter": "บทที่ 1: พรแห่งปุโรหิต",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "ch1_afternoon_1",
    "charImg": "assets/char_lucian.png"
  },
  "ch1_c1_leon_ext_1": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "ch1_c1_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch1_c1_leon_ext_2": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "ch1_c1_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "ch1_c1_leon_ext_3": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "ch1_c1_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch1_c1_leon_ext_4": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "ch1_c1_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "ch1_c1_leon_ext_5": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "ch1_c1_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch1_c1_leon_ext_6": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "ch1_c1_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch1_c1_leon_ext_7": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "ch1_c1_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch1_c1_leon_ext_8": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "ch1_c1_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "ch1_c1_leon_ext_9": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "ch1_c1_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch1_c1_leon_ext_10": {
    "chapter": "บทที่ 1: คมดาบแห่งเกียรติยศ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "ch1_afternoon_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch1_c1_kael_ext_1": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "ch1_c1_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch1_c1_kael_ext_2": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "ch1_c1_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c1_kael_ext_3": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "ch1_c1_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch1_c1_kael_ext_4": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "ch1_c1_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c1_kael_ext_5": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "ch1_c1_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch1_c1_kael_ext_6": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-palace",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "ch1_c1_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch1_c1_kael_ext_7": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "ch1_c1_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch1_c1_kael_ext_8": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "ch1_c1_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c1_kael_ext_9": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "ch1_c1_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch1_c1_kael_ext_10": {
    "chapter": "บทที่ 1: แผนเด็ดของจอมโจร",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "ch1_afternoon_1",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c2_cedric_ext_1": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "ch1_c2_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch1_c2_cedric_ext_2": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "ch1_c2_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_c2_cedric_ext_3": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "ch1_c2_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch1_c2_cedric_ext_4": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "ch1_c2_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_c2_cedric_ext_5": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "ch1_c2_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch1_c2_cedric_ext_6": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "ch1_c2_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_c2_cedric_ext_7": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "ch1_c2_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch1_c2_cedric_ext_8": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "ch1_c2_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch1_c2_cedric_ext_9": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "ch1_c2_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch1_c2_cedric_ext_10": {
    "chapter": "บทที่ 1: ห้องสมุดกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "ch2_start",
    "charImg": "assets/char_cedric.png"
  },
  "ch1_c2_lucian_ext_1": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "ch1_c2_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch1_c2_lucian_ext_2": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "ch1_c2_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "ch1_c2_lucian_ext_3": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "ch1_c2_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c2_lucian_ext_4": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "ch1_c2_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c2_lucian_ext_5": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "ch1_c2_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c2_lucian_ext_6": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "ch1_c2_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "ch1_c2_lucian_ext_7": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "ch1_c2_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch1_c2_lucian_ext_8": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "ch1_c2_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch1_c2_lucian_ext_9": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "ch1_c2_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch1_c2_lucian_ext_10": {
    "chapter": "บทที่ 1: เรือนกระจกกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "ch2_start",
    "charImg": "assets/char_lucian.png"
  },
  "ch1_c2_leon_ext_1": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "ch1_c2_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch1_c2_leon_ext_2": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "ch1_c2_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "ch1_c2_leon_ext_3": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "ch1_c2_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch1_c2_leon_ext_4": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "ch1_c2_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "ch1_c2_leon_ext_5": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "ch1_c2_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch1_c2_leon_ext_6": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "ch1_c2_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch1_c2_leon_ext_7": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "ch1_c2_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch1_c2_leon_ext_8": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "ch1_c2_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "ch1_c2_leon_ext_9": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "ch1_c2_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch1_c2_leon_ext_10": {
    "chapter": "บทที่ 1: สวนกุหลาบกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "ch2_start",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch1_c2_kael_ext_1": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "ch1_c2_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch1_c2_kael_ext_2": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "ch1_c2_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c2_kael_ext_3": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "ch1_c2_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch1_c2_kael_ext_4": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "ch1_c2_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c2_kael_ext_5": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "ch1_c2_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch1_c2_kael_ext_6": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-night",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "ch1_c2_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch1_c2_kael_ext_7": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "ch1_c2_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch1_c2_kael_ext_8": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "ch1_c2_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "ch1_c2_kael_ext_9": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "ch1_c2_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch1_c2_kael_ext_10": {
    "chapter": "บทที่ 1: หนีเที่ยวกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "ch2_start",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c1_cedric_ext_1": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "ch2_c1_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch2_c1_cedric_ext_2": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "ch2_c1_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "ch2_c1_cedric_ext_3": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "ch2_c1_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch2_c1_cedric_ext_4": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "ch2_c1_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "ch2_c1_cedric_ext_5": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "ch2_c1_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch2_c1_cedric_ext_6": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "ch2_c1_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch2_c1_cedric_ext_7": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "ch2_c1_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch2_c1_cedric_ext_8": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "ch2_c1_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch2_c1_cedric_ext_9": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "ch2_c1_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch2_c1_cedric_ext_10": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "ch2_garden_1",
    "charImg": "assets/char_cedric.png"
  },
  "ch2_c1_lucian_ext_1": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "ch2_c1_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch2_c1_lucian_ext_2": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "ch2_c1_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "ch2_c1_lucian_ext_3": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "ch2_c1_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c1_lucian_ext_4": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "ch2_c1_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c1_lucian_ext_5": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "ch2_c1_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c1_lucian_ext_6": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "ch2_c1_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "ch2_c1_lucian_ext_7": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "ch2_c1_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch2_c1_lucian_ext_8": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "ch2_c1_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch2_c1_lucian_ext_9": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "ch2_c1_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c1_lucian_ext_10": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "ch2_garden_1",
    "charImg": "assets/char_lucian.png"
  },
  "ch2_c1_leon_ext_1": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "ch2_c1_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch2_c1_leon_ext_2": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "ch2_c1_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "ch2_c1_leon_ext_3": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "ch2_c1_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch2_c1_leon_ext_4": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "ch2_c1_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "ch2_c1_leon_ext_5": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "ch2_c1_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch2_c1_leon_ext_6": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "ch2_c1_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch2_c1_leon_ext_7": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "ch2_c1_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch2_c1_leon_ext_8": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "ch2_c1_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "ch2_c1_leon_ext_9": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "ch2_c1_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch2_c1_leon_ext_10": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "ch2_garden_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch2_c1_kael_ext_1": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "ch2_c1_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch2_c1_kael_ext_2": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "ch2_c1_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c1_kael_ext_3": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "ch2_c1_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch2_c1_kael_ext_4": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "ch2_c1_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c1_kael_ext_5": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "ch2_c1_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch2_c1_kael_ext_6": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-palace",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "ch2_c1_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch2_c1_kael_ext_7": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "ch2_c1_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch2_c1_kael_ext_8": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "ch2_c1_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c1_kael_ext_9": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-palace",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "ch2_c1_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch2_c1_kael_ext_10": {
    "chapter": "บทที่ 2: ฟลอร์เต้นรำกับเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "ch2_garden_1",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c2_cedric_ext_1": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "ch2_c2_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch2_c2_cedric_ext_2": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "ch2_c2_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "ch2_c2_cedric_ext_3": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "ch2_c2_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch2_c2_cedric_ext_4": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "ch2_c2_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "ch2_c2_cedric_ext_5": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "ch2_c2_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch2_c2_cedric_ext_6": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "ch2_c2_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch2_c2_cedric_ext_7": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "ch2_c2_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch2_c2_cedric_ext_8": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "ch2_c2_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch2_c2_cedric_ext_9": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "ch2_c2_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch2_c2_cedric_ext_10": {
    "chapter": "บทที่ 2: ความลับในสวนกับเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "ch3_start",
    "charImg": "assets/char_cedric.png"
  },
  "ch2_c2_lucian_ext_1": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "ch2_c2_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch2_c2_lucian_ext_2": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "ch2_c2_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "ch2_c2_lucian_ext_3": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "ch2_c2_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c2_lucian_ext_4": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "ch2_c2_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c2_lucian_ext_5": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "ch2_c2_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c2_lucian_ext_6": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "ch2_c2_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "ch2_c2_lucian_ext_7": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "ch2_c2_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch2_c2_lucian_ext_8": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "ch2_c2_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch2_c2_lucian_ext_9": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "ch2_c2_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch2_c2_lucian_ext_10": {
    "chapter": "บทที่ 2: คำอธิษฐานกับลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "ch3_start",
    "charImg": "assets/char_lucian.png"
  },
  "ch2_c2_leon_ext_1": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "ch2_c2_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch2_c2_leon_ext_2": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "ch2_c2_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "ch2_c2_leon_ext_3": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "ch2_c2_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch2_c2_leon_ext_4": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "ch2_c2_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "ch2_c2_leon_ext_5": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "ch2_c2_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch2_c2_leon_ext_6": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "ch2_c2_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch2_c2_leon_ext_7": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "ch2_c2_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch2_c2_leon_ext_8": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "ch2_c2_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "ch2_c2_leon_ext_9": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "ch2_c2_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch2_c2_leon_ext_10": {
    "chapter": "บทที่ 2: คำมั่นสัญญากับลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "ch3_start",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch2_c2_kael_ext_1": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "ch2_c2_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch2_c2_kael_ext_2": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "ch2_c2_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c2_kael_ext_3": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "ch2_c2_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch2_c2_kael_ext_4": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "ch2_c2_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c2_kael_ext_5": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "ch2_c2_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch2_c2_kael_ext_6": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-night",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "ch2_c2_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch2_c2_kael_ext_7": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "ch2_c2_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch2_c2_kael_ext_8": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "ch2_c2_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "ch2_c2_kael_ext_9": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "ch2_c2_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch2_c2_kael_ext_10": {
    "chapter": "บทที่ 2: ดอกไม้ไฟของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "ch3_start",
    "charImg": "assets/char_kael.png"
  },
  "ch3_c1_cedric_ext_1": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกมองคุณด้วยแววตาที่อบอุ่นขึ้นกว่าเดิมอย่างเห็นได้ชัด",
    "next": "ch3_c1_cedric_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch3_c1_cedric_ext_2": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณสังเกตเห็นว่าเวลาอยู่กับคุณสองคน ท่าทางดุๆ ของเขาจะหายไปจนหมด",
    "next": "ch3_c1_cedric_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "ch3_c1_cedric_ext_3": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'รู้ไหมว่าปกติฉันไม่ค่อยพูดยาวๆ กับใครแบบนี้หรอกนะ มีแค่เธอนี่แหละที่เป็นข้อยกเว้น'",
    "next": "ch3_c1_cedric_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch3_c1_cedric_ext_4": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาเอื้อมมือมาจัดปอยผมที่ปรกหน้าผากของคุณให้ทัดหูอย่างเบามือ",
    "next": "ch3_c1_cedric_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "ch3_c1_cedric_ext_5": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เวลาเธอเลือกเดินมาหาฉันก่อนคนอื่น... มันทำให้ฉันอารมณ์ดีไปทั้งวันเลยล่ะ'",
    "next": "ch3_c1_cedric_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch3_c1_cedric_ext_6": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "kael",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เคลที่แอบมองอยู่ไกลๆ ตะโกนแซวขึ้นมา 'แหม ท่านดยุก ยิ้มน้อยยิ้มใหญ่เชียวครับ!'",
    "next": "ch3_c1_cedric_ext_7",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch3_c1_cedric_ext_7": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'เงียบไปเลยเคล! ฉันแค่คุยธุระสำคัญกับเธอต่างหาก'",
    "next": "ch3_c1_cedric_ext_8",
    "charImg": "assets/char_cedric_blush.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png"
  },
  "ch3_c1_cedric_ext_8": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณแอบอมยิ้มกับท่าทางเก๊กขรึมแก้เขินของเซดริก",
    "next": "ch3_c1_cedric_ext_9",
    "charImg": "assets/char_cedric_blush.png"
  },
  "ch3_c1_cedric_ext_9": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่ต้องไปฟังหมอนั่นเลยนะ... เอาเป็นว่ามีอะไรให้เรียกหาฉันเป็นคนแรกเสมอ เข้าใจไหม?'",
    "next": "ch3_c1_cedric_ext_10",
    "charImg": "assets/char_cedric_smile.png"
  },
  "ch3_c1_cedric_ext_10": {
    "chapter": "บทที่ 3: อ้อมกอดของเซดริก",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณพยักหน้ารับคำด้วยความรู้สึกอุ่นใจอย่างบอกไม่ถูก",
    "next": "route_branch_evaluation",
    "charImg": "assets/char_cedric.png"
  },
  "ch3_c1_lucian_ext_1": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองคุณด้วยรอยยิ้มละมุนที่ทำให้บรรยากาศรอบตัวสว่างไสว",
    "next": "ch3_c1_lucian_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch3_c1_lucian_ext_2": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ละอองแสงเวทสีทองเล็กๆ ลอยวนรอบปลายนิ้วของเขาอย่างสวยงาม",
    "next": "ch3_c1_lucian_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "ch3_c1_lucian_ext_3": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ทุกครั้งที่คุณเลือกเดินมาหาผม หัวใจของผมมันพองโตจนแทบจะเก็บอาการไม่อยู่เลยครับ'",
    "next": "ch3_c1_lucian_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch3_c1_lucian_ext_4": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนโน้มตัวลงมากระซิบใกล้ๆ ให้ได้ยินกันแค่สองคน",
    "next": "ch3_c1_lucian_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch3_c1_lucian_ext_5": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ความจริงผมแอบร่ายเวทอวยพรให้ตัวเองสมหวังในความรักกับคุณทุกคืนเลยนะ... ความลับนะครับ'",
    "next": "ch3_c1_lucian_ext_6",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch3_c1_lucian_ext_6": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "leon",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลีออนที่ยืนมองอยู่รีบเดินเข้ามาทัก 'คุณลูเชียนครับ แอบกระซิบอะไรกับคุณสองคนครับเนี่ย ขี้โกงนี่นา!'",
    "next": "ch3_c1_lucian_ext_7",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_blush.png"
  },
  "ch3_c1_lucian_ext_7": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ความลับของคนรู้ใจกันครับคุณอัศวิน บอกไม่ได้หรอกนะ'",
    "next": "ch3_c1_lucian_ext_8",
    "charImg": "assets/char_lucian_smile.png",
    "char2": "leon",
    "char2Img": "assets/char_leon.png"
  },
  "ch3_c1_lucian_ext_8": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "คุณหัวเราะเบาๆ ให้กับความขี้เล่นของมหาปุโรหิตหนุ่ม",
    "next": "ch3_c1_lucian_ext_9",
    "charImg": "assets/char_lucian_smile.png"
  },
  "ch3_c1_lucian_ext_9": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ไว้มีโอกาสเมื่อไหร่ ไปนั่งดื่มชาชมดาวกับผมสองคนอีกนะครับ ผมจะรอคุณเสมอนะ'",
    "next": "ch3_c1_lucian_ext_10",
    "charImg": "assets/char_lucian_blush.png"
  },
  "ch3_c1_lucian_ext_10": {
    "chapter": "บทที่ 3: แสงสว่างของลูเชียน",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "สายตาหวานซึ้งของลูเชียนทำให้คุณแก้มร้อนผ่าวไปหมด",
    "next": "route_branch_evaluation",
    "charImg": "assets/char_lucian.png"
  },
  "ch3_c1_leon_ext_1": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยิ้มกว้างด้วยความดีใจจนดวงตาสีฟ้าเป็นประกายวิบวับ",
    "next": "ch3_c1_leon_ext_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch3_c1_leon_ext_2": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขารีบขยับมายืนข้างคุณอย่างทะมัดทะแมงแต่แก้มยังแดงระเรื่อไม่หาย",
    "next": "ch3_c1_leon_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "ch3_c1_leon_ext_3": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมดีใจจริงๆ นะครับที่คุณเลือกพึ่งพาผม! ผมจะตั้งใจดูแลคุณให้ดียิ่งกว่าเดิมอีกครับ!'",
    "next": "ch3_c1_leon_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "ch3_c1_leon_ext_4": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนหยิบพัดขนนกอันเล็กที่เขาพกติดตัวมาช่วยพัดลมเย็นๆ ให้คุณอย่างเอาใจใส่",
    "next": "ch3_c1_leon_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "ch3_c1_leon_ext_5": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ผมกลัวคุณจะร้อนหรือเหนื่อย เลยพกทั้งพัด ทั้งผ้าเช็ดหน้า แล้วก็ลูกอมรสองุ่นติดตัวไว้ให้คุณตลอดเลยครับ'",
    "next": "ch3_c1_leon_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch3_c1_leon_ext_6": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "cedric",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เซดริกเดินผ่านมามองพร้อมส่ายหัวนิดๆ 'เตรียมพร้อมยิ่งกว่าออกรบอีกนะลีออน'",
    "next": "ch3_c1_leon_ext_7",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch3_c1_leon_ext_7": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'แน่นอนครับท่านดยุก! เรื่องดูแลคุณสำคัญที่สุดสำหรับผมนี่ครับ!'",
    "next": "ch3_c1_leon_ext_8",
    "charImg": "assets/char_leon_blush.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric.png"
  },
  "ch3_c1_leon_ext_8": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณรับลูกอมรสองุ่นจากมือลีออนมาชิม รสชาติหวานหอมชื่นใจมาก",
    "next": "ch3_c1_leon_ext_9",
    "charImg": "assets/char_leon.png"
  },
  "ch3_c1_leon_ext_9": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'เห็นคุณยิ้มแล้วผมมีแรงฮึดขึ้นเต็มร้อยเลยครับ!'",
    "next": "ch3_c1_leon_ext_10",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch3_c1_leon_ext_10": {
    "chapter": "บทที่ 3: โล่กำบังของลีออน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ความซื่อตรงและอบอุ่นของลีออนทำให้คุณยิ้มตามได้เสมอ",
    "next": "route_branch_evaluation",
    "charImg": "assets/char_leon_smile.png"
  },
  "ch3_c1_kael_ext_1": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลยิ้มมุมปากอย่างอารมณ์ดีพลางควงมีดสั้นเวทมนตร์เก็บเข้าฝักอย่างคล่องแคล่ว",
    "next": "ch3_c1_kael_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch3_c1_kael_ext_2": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาเดินเข้ามาใกล้คุณแล้วก้มหน้าลงมามองสบตาคุณในระยะประชิด",
    "next": "ch3_c1_kael_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "ch3_c1_kael_ext_3": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'เลือกฉันแบบนี้ รู้ตัวหรือเปล่าว่ากำลังทำให้จอมโจรอย่างฉันใจแตกอยากเป็นคนดีเพื่อเธอคนเดียวน่ะ'",
    "next": "ch3_c1_kael_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch3_c1_kael_ext_4": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาดีดนิ้วเบาๆ เสกดอกกุหลาบสีแดงสดดอกหนึ่งขึ้นมาจากอากาศแล้วยื่นให้คุณ",
    "next": "ch3_c1_kael_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "ch3_c1_kael_ext_5": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'มายากลพิเศษสำหรับคนพิเศษของฉัน... ชอบไหมล่ะยัยตัวแสบ?'",
    "next": "ch3_c1_kael_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "ch3_c1_kael_ext_6": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "lucian",
    "char": "kael",
    "bg": "bg-night",
    "text": "ลูเชียนมองมาพร้อมรอยยิ้มรู้ทัน 'ใช้มายากลจีบสาวต่อหน้าทุกคนเลยนะครับคุณเคล'",
    "next": "ch3_c1_kael_ext_7",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch3_c1_kael_ext_7": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ช่วยไม่ได้นี่นา ก็เธอเลือกฉันเองนี่ครับท่านปุโรหิต'",
    "next": "ch3_c1_kael_ext_8",
    "charImg": "assets/char_kael_smile.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian.png"
  },
  "ch3_c1_kael_ext_8": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คุณรับดอกกุหลาบมาถือไว้พลางขำกับท่าทางภูมิอกภูมิใจของเคล",
    "next": "ch3_c1_kael_ext_9",
    "charImg": "assets/char_kael.png"
  },
  "ch3_c1_kael_ext_9": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'อยู่ใกล้ๆ ฉันไว้นะ รับรองว่าฉันจะไม่ยอมให้เรื่องน่าเบื่อหรืออันตรายไหนมาแตะต้องเธอได้เลย'",
    "next": "ch3_c1_kael_ext_10",
    "charImg": "assets/char_kael_blush.png"
  },
  "ch3_c1_kael_ext_10": {
    "chapter": "บทที่ 3: รอยยิ้มของเคล",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ถึงจะดูเป็นแบดบอยจอมกวน แต่เคลก็อ่อนโยนกับคุณเสมอ",
    "next": "route_branch_evaluation",
    "charImg": "assets/char_kael.png"
  },
  "cedric_ep1_good_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "cedric_ep1_good_1_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_good_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "cedric_ep1_good_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_good_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "cedric_ep1_good_1_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep1_good_1_ext_4": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "cedric_ep1_good_1_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_good_1_ext_5": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "cedric_ep1_good_1_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_good_1_ext_6": {
    "chapter": "รูทเซดริก บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "cedric_ep1_good_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_bad_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "cedric_ep1_bad_1_ext_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_bad_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "cedric_ep1_bad_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_bad_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "cedric_ep1_bad_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_good_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "cedric_ep2_good_1_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_good_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "cedric_ep2_good_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_good_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "cedric_ep2_good_1_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep2_good_1_ext_4": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "cedric_ep2_good_1_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_good_1_ext_5": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "cedric_ep2_good_1_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep2_good_1_ext_6": {
    "chapter": "รูทเซดริก บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "cedric_ep2_good_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_bad_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 2: ระยะห่าง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "cedric_ep2_bad_1_ext_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_bad_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "cedric_ep2_bad_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_bad_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 2: ระยะห่าง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "cedric_ep2_bad_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_good_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "cedric_ep3_good_1_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep3_good_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "cedric_ep3_good_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_good_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "cedric_ep3_good_1_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep3_good_1_ext_4": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "cedric_ep3_good_1_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_good_1_ext_5": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "cedric_ep3_good_1_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep3_good_1_ext_6": {
    "chapter": "รูทเซดริก บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "cedric_ep3_good_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_bad_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "cedric_ep3_bad_1_ext_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_bad_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "cedric_ep3_bad_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_bad_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "cedric_ep3_bad_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_good_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "cedric_ep4_good_1_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_good_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "cedric_ep4_good_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_good_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "cedric_ep4_good_1_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep4_good_1_ext_4": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "cedric_ep4_good_1_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_good_1_ext_5": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "cedric_ep4_good_1_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_good_1_ext_6": {
    "chapter": "รูทเซดริก บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "cedric_ep4_good_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_bad_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "cedric_ep4_bad_1_ext_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_bad_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "cedric_ep4_bad_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_bad_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "cedric_ep4_bad_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_good_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "cedric_ep5_good_1_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep5_good_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "cedric_ep5_good_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_good_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "cedric_ep5_good_1_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep5_good_1_ext_4": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "cedric_ep5_good_1_ext_5",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_good_1_ext_5": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "cedric_ep5_good_1_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep5_good_1_ext_6": {
    "chapter": "รูทเซดริก บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "cedric_ep5_good_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_bad_1_ext_1": {
    "chapter": "รูทเซดริก บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "cedric_ep5_bad_1_ext_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_bad_1_ext_2": {
    "chapter": "รูทเซดริก บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "cedric_ep5_bad_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_bad_1_ext_3": {
    "chapter": "รูทเซดริก บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "cedric_ep5_bad_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_true_ep_1_ext_1": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "หลายสัปดาห์ต่อมา พิธีอภิเษกสมรสของคุณและเซดริกถูกจัดขึ้นอย่างยิ่งใหญ่ท่ามกลางคำอวยพรของคนทั้งอาณาจักร",
    "next": "cedric_true_ep_1_ext_2",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_true_ep_1_ext_2": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ระฆังวิหารดังกังวาน กลีบดอกไม้นับหมื่นกลีบโปรยปรายลงมาตลอดทางเดินพรมขาว",
    "next": "cedric_true_ep_1_ext_3",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_true_ep_1_ext_3": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "ในชุดเจ้าบ่าวเต็มยศที่หล่อเหลาที่สุด เซดริกยื่นมือมารับคุณที่ปลายพรมด้วยรอยยิ้มที่เปี่ยมไปด้วยความสุข",
    "next": "cedric_true_ep_1_ext_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_1_ext_4": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'วันนี้เธอในชุดเจ้าสาวสวยจนฉันแทบหยุดหายใจเลย... สวยที่สุดในโลกเลยนะเจ้าสาวของฉัน'",
    "next": "cedric_true_ep_1_ext_5",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_1_ext_5": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เพื่อนๆ อีกสามราชันย์ต่างก็มาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคนด้วยรอยยิ้มอบอุ่น",
    "next": "cedric_true_ep_1_ext_6",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_true_ep_1_ext_6": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "หลังจบพิธีการทั้งหมด เขาอุ้มคุณในท่าเจ้าสาวเดินเข้าสู่ห้องหอที่ประดับด้วยแสงเทียนและดอกกุหลาบ",
    "next": "cedric_true_ep_1_ext_7",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_true_ep_1_ext_7": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "'ในที่สุดเราก็ได้เป็นสามีภรรยากันอย่างสมบูรณ์แล้วนะ... ฉันจะทำให้เธอมีความสุขทุกคืนวันเลย สัญญาด้วยชีวิต'",
    "next": "cedric_true_ep_1_ext_8",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_1_ext_8": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาโน้มใบหน้าลงมามอบจูบอันแสนหวานและลึกซึ้ง เริ่มต้นชีวิตคู่ที่โรแมนติกชั่วนิรันดร์",
    "next": "cedric_true_ep_2",
    "charImg": "assets/char_cedric_blush.png"
  },
  "lucian_ep1_good_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "lucian_ep1_good_1_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_good_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "lucian_ep1_good_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_good_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "lucian_ep1_good_1_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep1_good_1_ext_4": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "lucian_ep1_good_1_ext_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_good_1_ext_5": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "lucian_ep1_good_1_ext_6",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_good_1_ext_6": {
    "chapter": "รูทลูเชียน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "lucian_ep1_good_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_bad_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "lucian_ep1_bad_1_ext_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_bad_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "lucian_ep1_bad_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_bad_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "lucian_ep1_bad_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_good_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "lucian_ep2_good_1_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_good_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "lucian_ep2_good_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_good_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "lucian_ep2_good_1_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep2_good_1_ext_4": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "lucian_ep2_good_1_ext_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_good_1_ext_5": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "lucian_ep2_good_1_ext_6",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep2_good_1_ext_6": {
    "chapter": "รูทลูเชียน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "lucian_ep2_good_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_bad_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 2: ระยะห่าง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "lucian_ep2_bad_1_ext_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_bad_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "lucian_ep2_bad_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_bad_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 2: ระยะห่าง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "lucian_ep2_bad_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_good_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "lucian_ep3_good_1_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep3_good_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "lucian_ep3_good_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_good_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "lucian_ep3_good_1_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep3_good_1_ext_4": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "lucian_ep3_good_1_ext_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_good_1_ext_5": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "lucian_ep3_good_1_ext_6",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep3_good_1_ext_6": {
    "chapter": "รูทลูเชียน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "lucian_ep3_good_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_bad_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "lucian_ep3_bad_1_ext_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_bad_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "lucian_ep3_bad_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_bad_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "lucian_ep3_bad_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_good_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "lucian_ep4_good_1_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_good_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "lucian_ep4_good_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_good_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "lucian_ep4_good_1_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep4_good_1_ext_4": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "lucian_ep4_good_1_ext_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_good_1_ext_5": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "lucian_ep4_good_1_ext_6",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_good_1_ext_6": {
    "chapter": "รูทลูเชียน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "lucian_ep4_good_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_bad_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "lucian_ep4_bad_1_ext_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_bad_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "lucian_ep4_bad_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_bad_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "lucian_ep4_bad_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_good_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "lucian_ep5_good_1_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_good_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "lucian_ep5_good_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_good_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "lucian_ep5_good_1_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_good_1_ext_4": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "lucian_ep5_good_1_ext_5",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_good_1_ext_5": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "lucian_ep5_good_1_ext_6",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep5_good_1_ext_6": {
    "chapter": "รูทลูเชียน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "lucian_ep5_good_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_bad_1_ext_1": {
    "chapter": "รูทลูเชียน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "lucian_ep5_bad_1_ext_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_bad_1_ext_2": {
    "chapter": "รูทลูเชียน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "lucian_ep5_bad_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_bad_1_ext_3": {
    "chapter": "รูทลูเชียน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "lucian_ep5_bad_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_true_ep_1_ext_1": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "หลายสัปดาห์ต่อมา พิธีอภิเษกสมรสของคุณและลูเชียนถูกจัดขึ้นอย่างยิ่งใหญ่ท่ามกลางคำอวยพรของคนทั้งอาณาจักร",
    "next": "lucian_true_ep_1_ext_2",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_true_ep_1_ext_2": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ระฆังวิหารดังกังวาน กลีบดอกไม้นับหมื่นกลีบโปรยปรายลงมาตลอดทางเดินพรมขาว",
    "next": "lucian_true_ep_1_ext_3",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_true_ep_1_ext_3": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ในชุดเจ้าบ่าวเต็มยศที่หล่อเหลาที่สุด ลูเชียนยื่นมือมารับคุณที่ปลายพรมด้วยรอยยิ้มที่เปี่ยมไปด้วยความสุข",
    "next": "lucian_true_ep_1_ext_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_1_ext_4": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'วันนี้คุณในชุดเจ้าสาวสวยจนผมแทบหยุดหายใจเลย... สวยที่สุดในโลกเลยนะเจ้าสาวของผม'",
    "next": "lucian_true_ep_1_ext_5",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_1_ext_5": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เพื่อนๆ อีกสามราชันย์ต่างก็มาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคนด้วยรอยยิ้มอบอุ่น",
    "next": "lucian_true_ep_1_ext_6",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_true_ep_1_ext_6": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "หลังจบพิธีการทั้งหมด เขาอุ้มคุณในท่าเจ้าสาวเดินเข้าสู่ห้องหอที่ประดับด้วยแสงเทียนและดอกกุหลาบ",
    "next": "lucian_true_ep_1_ext_7",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_true_ep_1_ext_7": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "'ในที่สุดเราก็ได้เป็นสามีภรรยากันอย่างสมบูรณ์แล้วนะ... ผมจะทำให้คุณมีความสุขทุกคืนวันเลย สัญญาด้วยชีวิต'",
    "next": "lucian_true_ep_1_ext_8",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_1_ext_8": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาโน้มใบหน้าลงมามอบจูบอันแสนหวานและลึกซึ้ง เริ่มต้นชีวิตคู่ที่โรแมนติกชั่วนิรันดร์",
    "next": "lucian_true_ep_2",
    "charImg": "assets/char_lucian_blush.png"
  },
  "leon_ep1_good_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "leon_ep1_good_1_ext_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_good_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "leon_ep1_good_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_good_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "leon_ep1_good_1_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep1_good_1_ext_4": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "leon_ep1_good_1_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_good_1_ext_5": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "leon_ep1_good_1_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_good_1_ext_6": {
    "chapter": "รูทลีออน บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "leon_ep1_good_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_bad_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "leon_ep1_bad_1_ext_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_bad_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "leon_ep1_bad_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_bad_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "leon_ep1_bad_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_good_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "leon_ep2_good_1_ext_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_good_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "leon_ep2_good_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_good_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "leon_ep2_good_1_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep2_good_1_ext_4": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "leon_ep2_good_1_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_good_1_ext_5": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "leon_ep2_good_1_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep2_good_1_ext_6": {
    "chapter": "รูทลีออน บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "leon_ep2_good_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_bad_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 2: ระยะห่าง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "leon_ep2_bad_1_ext_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_bad_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "leon_ep2_bad_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_bad_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 2: ระยะห่าง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "leon_ep2_bad_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_good_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "leon_ep3_good_1_ext_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep3_good_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "leon_ep3_good_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_good_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "leon_ep3_good_1_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep3_good_1_ext_4": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "leon_ep3_good_1_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_good_1_ext_5": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "leon_ep3_good_1_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep3_good_1_ext_6": {
    "chapter": "รูทลีออน บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "leon_ep3_good_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_bad_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "leon_ep3_bad_1_ext_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_bad_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "leon_ep3_bad_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_bad_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "leon_ep3_bad_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_good_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "leon_ep4_good_1_ext_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_good_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "leon_ep4_good_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_good_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "leon_ep4_good_1_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep4_good_1_ext_4": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "leon_ep4_good_1_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_good_1_ext_5": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "leon_ep4_good_1_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_good_1_ext_6": {
    "chapter": "รูทลีออน บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "leon_ep4_good_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_bad_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "leon_ep4_bad_1_ext_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_bad_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "leon_ep4_bad_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_bad_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "leon_ep4_bad_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_good_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "leon_ep5_good_1_ext_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_good_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "leon_ep5_good_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_good_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ผมรู้สึกว่าตัวเองตกหลุมรักคุณมากขึ้นทุกวินาทีเลย'",
    "next": "leon_ep5_good_1_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_good_1_ext_4": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "leon_ep5_good_1_ext_5",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_good_1_ext_5": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของผมเสมอ คุณน่ารักที่สุดเลยรู้ไหม'",
    "next": "leon_ep5_good_1_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep5_good_1_ext_6": {
    "chapter": "รูทลีออน บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "leon_ep5_good_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_bad_1_ext_1": {
    "chapter": "รูทลีออน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "leon_ep5_bad_1_ext_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_bad_1_ext_2": {
    "chapter": "รูทลีออน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "leon_ep5_bad_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_bad_1_ext_3": {
    "chapter": "รูทลีออน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ผมจะพยายามทำความเข้าใจคุณให้มากกว่านี้นะ'",
    "next": "leon_ep5_bad_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_true_ep_1_ext_1": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "หลายสัปดาห์ต่อมา พิธีอภิเษกสมรสของคุณและลีออนถูกจัดขึ้นอย่างยิ่งใหญ่ท่ามกลางคำอวยพรของคนทั้งอาณาจักร",
    "next": "leon_true_ep_1_ext_2",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_true_ep_1_ext_2": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ระฆังวิหารดังกังวาน กลีบดอกไม้นับหมื่นกลีบโปรยปรายลงมาตลอดทางเดินพรมขาว",
    "next": "leon_true_ep_1_ext_3",
    "charImg": "assets/char_leon.png"
  },
  "leon_true_ep_1_ext_3": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ในชุดเจ้าบ่าวเต็มยศที่หล่อเหลาที่สุด ลีออนยื่นมือมารับคุณที่ปลายพรมด้วยรอยยิ้มที่เปี่ยมไปด้วยความสุข",
    "next": "leon_true_ep_1_ext_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_1_ext_4": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'วันนี้คุณในชุดเจ้าสาวสวยจนผมแทบหยุดหายใจเลย... สวยที่สุดในโลกเลยนะเจ้าสาวของผม'",
    "next": "leon_true_ep_1_ext_5",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_1_ext_5": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เพื่อนๆ อีกสามราชันย์ต่างก็มาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคนด้วยรอยยิ้มอบอุ่น",
    "next": "leon_true_ep_1_ext_6",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_true_ep_1_ext_6": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "หลังจบพิธีการทั้งหมด เขาอุ้มคุณในท่าเจ้าสาวเดินเข้าสู่ห้องหอที่ประดับด้วยแสงเทียนและดอกกุหลาบ",
    "next": "leon_true_ep_1_ext_7",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_true_ep_1_ext_7": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "'ในที่สุดเราก็ได้เป็นสามีภรรยากันอย่างสมบูรณ์แล้วนะ... ผมจะทำให้คุณมีความสุขทุกคืนวันเลย สัญญาด้วยชีวิต'",
    "next": "leon_true_ep_1_ext_8",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_1_ext_8": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาโน้มใบหน้าลงมามอบจูบอันแสนหวานและลึกซึ้ง เริ่มต้นชีวิตคู่ที่โรแมนติกชั่วนิรันดร์",
    "next": "leon_true_ep_2",
    "charImg": "assets/char_leon_blush.png"
  },
  "kael_ep1_good_1_ext_1": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "kael_ep1_good_1_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_good_1_ext_2": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "kael_ep1_good_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_good_1_ext_3": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "kael_ep1_good_1_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep1_good_1_ext_4": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "kael_ep1_good_1_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_good_1_ext_5": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "kael_ep1_good_1_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_good_1_ext_6": {
    "chapter": "รูทเคล บทที่ 1: ความอบอุ่นใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "kael_ep1_good_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_bad_1_ext_1": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "kael_ep1_bad_1_ext_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_bad_1_ext_2": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "kael_ep1_bad_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_bad_1_ext_3": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "kael_ep1_bad_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_good_1_ext_1": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "kael_ep2_good_1_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_good_1_ext_2": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "kael_ep2_good_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_good_1_ext_3": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "kael_ep2_good_1_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep2_good_1_ext_4": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "kael_ep2_good_1_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_good_1_ext_5": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "kael_ep2_good_1_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep2_good_1_ext_6": {
    "chapter": "รูทเคล บทที่ 2: รอยจูบที่ข้างแก้ม",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "kael_ep2_good_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_bad_1_ext_1": {
    "chapter": "รูทเคล บทที่ 2: ระยะห่าง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "kael_ep2_bad_1_ext_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_bad_1_ext_2": {
    "chapter": "รูทเคล บทที่ 2: ระยะห่าง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "kael_ep2_bad_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_bad_1_ext_3": {
    "chapter": "รูทเคล บทที่ 2: ระยะห่าง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "kael_ep2_bad_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_good_1_ext_1": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "kael_ep3_good_1_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep3_good_1_ext_2": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "kael_ep3_good_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_good_1_ext_3": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "kael_ep3_good_1_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep3_good_1_ext_4": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "kael_ep3_good_1_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_good_1_ext_5": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "kael_ep3_good_1_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep3_good_1_ext_6": {
    "chapter": "รูทเคล บทที่ 3: ชัยชนะของคนขี้หึง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "kael_ep3_good_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_bad_1_ext_1": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "kael_ep3_bad_1_ext_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_bad_1_ext_2": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "kael_ep3_bad_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_bad_1_ext_3": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "kael_ep3_bad_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_good_1_ext_1": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "kael_ep4_good_1_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_good_1_ext_2": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "kael_ep4_good_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_good_1_ext_3": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "kael_ep4_good_1_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep4_good_1_ext_4": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "kael_ep4_good_1_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_good_1_ext_5": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "kael_ep4_good_1_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_good_1_ext_6": {
    "chapter": "รูทเคล บทที่ 4: อ้อมกอดที่เยียวยา",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "kael_ep4_good_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_bad_1_ext_1": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "kael_ep4_bad_1_ext_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_bad_1_ext_2": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "kael_ep4_bad_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_bad_1_ext_3": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "kael_ep4_bad_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_good_1_ext_1": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลมองคุณด้วยแววตาที่เต็มไปด้วยความรักและความทะนุถนอม",
    "next": "kael_ep5_good_1_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_good_1_ext_2": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บรรยากาศระหว่างคุณสองคนอบอวลไปด้วยความหวานชื่นจนแทบไม่อยากแยกจากกัน",
    "next": "kael_ep5_good_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_good_1_ext_3": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ทุกครั้งที่เราคุยกันแบบนี้ ฉันรู้สึกว่าตัวเองตกหลุมรักเธอมากขึ้นทุกวินาทีเลย'",
    "next": "kael_ep5_good_1_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_good_1_ext_4": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เขากุมมือคุณไว้แน่นและเดินเคียงข้างคุณไปอย่างไม่รีบร้อน",
    "next": "kael_ep5_good_1_ext_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_good_1_ext_5": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ขอบคุณนะที่คอยใส่ใจความรู้สึกของฉันเสมอ เธอน่ารักที่สุดเลยรู้ไหม'",
    "next": "kael_ep5_good_1_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep5_good_1_ext_6": {
    "chapter": "รูทเคล บทที่ 5: ชัยชนะแห่งรักแท้",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ความสัมพันธ์ของคุณและเขาก้าวหน้าขึ้นไปอีกขั้นอย่างมั่นคง",
    "next": "kael_ep5_good_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_bad_1_ext_1": {
    "chapter": "รูทเคล บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลแอบถอนหายใจเบาๆ ด้วยความเสียใจกับคำพูดของคุณ",
    "next": "kael_ep5_bad_1_ext_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_bad_1_ext_2": {
    "chapter": "รูทเคล บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "แม้เขาจะเสียใจ แต่เขาก็ยังคงเป็นห่วงและคอยดูแลคุณอยู่ห่างๆ ไม่ไปไหน",
    "next": "kael_ep5_bad_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_bad_1_ext_3": {
    "chapter": "รูทเคล บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "'ไม่เป็นไรหรอก... ฉันจะพยายามทำความเข้าใจเธอให้มากกว่านี้นะ'",
    "next": "kael_ep5_bad_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_true_ep_1_ext_1": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "หลายสัปดาห์ต่อมา พิธีอภิเษกสมรสของคุณและเคลถูกจัดขึ้นอย่างยิ่งใหญ่ท่ามกลางคำอวยพรของคนทั้งอาณาจักร",
    "next": "kael_true_ep_1_ext_2",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_true_ep_1_ext_2": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ระฆังวิหารดังกังวาน กลีบดอกไม้นับหมื่นกลีบโปรยปรายลงมาตลอดทางเดินพรมขาว",
    "next": "kael_true_ep_1_ext_3",
    "charImg": "assets/char_kael.png"
  },
  "kael_true_ep_1_ext_3": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "ในชุดเจ้าบ่าวเต็มยศที่หล่อเหลาที่สุด เคลยื่นมือมารับคุณที่ปลายพรมด้วยรอยยิ้มที่เปี่ยมไปด้วยความสุข",
    "next": "kael_true_ep_1_ext_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_1_ext_4": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'วันนี้เธอในชุดเจ้าสาวสวยจนฉันแทบหยุดหายใจเลย... สวยที่สุดในโลกเลยนะเจ้าสาวของฉัน'",
    "next": "kael_true_ep_1_ext_5",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_1_ext_5": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เพื่อนๆ อีกสามราชันย์ต่างก็มาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคนด้วยรอยยิ้มอบอุ่น",
    "next": "kael_true_ep_1_ext_6",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_true_ep_1_ext_6": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "หลังจบพิธีการทั้งหมด เขาอุ้มคุณในท่าเจ้าสาวเดินเข้าสู่ห้องหอที่ประดับด้วยแสงเทียนและดอกกุหลาบ",
    "next": "kael_true_ep_1_ext_7",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_true_ep_1_ext_7": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "'ในที่สุดเราก็ได้เป็นสามีภรรยากันอย่างสมบูรณ์แล้วนะ... ฉันจะทำให้เธอมีความสุขทุกคืนวันเลย สัญญาด้วยชีวิต'",
    "next": "kael_true_ep_1_ext_8",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_1_ext_8": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาโน้มใบหน้าลงมามอบจูบอันแสนหวานและลึกซึ้ง เริ่มต้นชีวิตคู่ที่โรแมนติกชั่วนิรันดร์",
    "next": "kael_true_ep_2",
    "charImg": "assets/char_kael_blush.png"
  }
};
