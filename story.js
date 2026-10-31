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
    "bg": "bg-bedroom",
    "text": "คืนวันศุกร์หลังจากเหนื่อยมาทั้งสัปดาห์ คุณกลับมานอนพักที่ห้อง",
    "next": "pro_p1_2"
  },
  "pro_p1_2": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "ข้างนอกฝนตกหนักและมีลมพัดแรง",
    "next": "pro_p1_3"
  },
  "pro_p1_3": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "คุณลุกไปชงโกโก้ร้อน แล้วเดินผ่านห้องหนังสือเก่าของคุณยาย",
    "next": "pro_p1_4"
  },
  "pro_p1_4": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "จู่ๆ ก็มีแสงสีทองส่องออกมาจากชั้นหนังสือเก่า",
    "next": "pro_p1_5"
  },
  "pro_p1_5": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "บนชั้นมีสมุดปกหนังสีดำประดับอัญมณีรูปดาววางอยู่",
    "next": "pro_p1_6"
  },
  "pro_p1_6": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "คุณวางแก้วโกโก้ลง แล้วหยิบสมุดเล่มนั้นขึ้นมาดู",
    "next": "pro_p1_7"
  },
  "pro_p1_7": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "หน้าปกเขียนไว้ว่า 'พันธสัญญาหัวใจ: สี่ราชันย์แห่งเอลีเซียม'",
    "next": "pro_p1_8"
  },
  "pro_p1_8": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "'สมุดอะไรกันเนี่ย...' คุณพึมพำพลางแตะลงบนอัญมณีตรงกลางปก",
    "next": "pro_p1_9"
  },
  "pro_p1_9": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "ทันใดนั้น อัญมณีทั้งสี่สีก็เปล่งแสงสว่างจ้าขึ้นมาทันที!",
    "next": "pro_p1_10"
  },
  "pro_p1_10": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "หน้ากระดาษเปิดพลิกเองอย่างรวดเร็ว พร้อมกับมีแสงหมุนวนรอบตัวคุณ",
    "next": "pro_p1_11"
  },
  "pro_p1_11": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "คุณพยายามจะปล่อยมือ แต่วงแหวนแสงกลับดึงตัวคุณเข้าไป!",
    "next": "pro_p1_12"
  },
  "pro_p1_12": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "มีเสียงพูดของชายหนุ่มดังก้องเข้ามาในหัวของคุณ...",
    "next": "pro_p1_13"
  },
  "pro_p1_13": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "'ได้โปรดช่วยพวกเราด้วยเถอะ... ธิดาแห่งแสงดาว...'",
    "next": "pro_p1_14"
  },
  "pro_p1_14": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-bedroom",
    "text": "ภาพห้องนอนค่อยๆ จางหายไป กลายเป็นอุโมงค์แสงสว่างจ้า",
    "next": "pro_p1_15"
  },
  "pro_p1_15": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "คุณรู้สึกเหมือนมีสายลมอ่อนๆ พัดผ่านตัว",
    "next": "pro_p1_16"
  },
  "pro_p1_16": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "พอเท้าแตะถึงพื้น แสงสว่างจ้าก็ค่อยๆ หายไป",
    "next": "pro_p1_17"
  },
  "pro_p1_17": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "คุณกะพริบตาปรับสายตา แล้วต้องตกใจกับภาพตรงหน้า!",
    "next": "pro_p1_18"
  },
  "pro_p1_18": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "รอบตัวคุณคือวิหารสีขาวขนาดใหญ่ มีแท่นคริสตัลตั้งอยู่ตรงกลาง",
    "next": "pro_p1_19"
  },
  "pro_p1_19": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ท้องฟ้าด้านบนมีดวงจันทร์สองดวงและดวงดาวเต็มท้องฟ้า",
    "next": "pro_p1_20"
  },
  "pro_p1_20": {
    "chapter": "บทนำ: พันธนาการต่างมิติ",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-shrine",
    "text": "ได้ยินเสียงฝีเท้าเดินตรงเข้ามาหาคุณจากรอบทิศ",
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
    "text": "ชายหนุ่มคนสุดท้ายเดินล้วงกระเป๋าออกมาจากมุมมืด ที่คอของเขามีรอยสักรูปดาว",
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
    "text": "ลูเชียนเสกเก้าอี้มาให้คุณนั่ง โดยมีทั้งสี่คนยืนล้อมอยู่ข้างๆ",
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
    "text": "หลังจากฟังเรื่องราวทั้งหมดแล้ว คุณจะตอบว่าอย่างไร?",
    "choices": [
      {
        "text": "มองดูพวกเขาด้วยความมุ่งมั่น 'ถ้าพลังของฉันสามารถช่วยทุกคนได้ ฉันยินดีร่วมมืออย่างเต็มที่ค่ะ'",
        "next": "pro_c1_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ยิ้มรับอย่างอ่อนโยน 'ขอบคุณที่ต้อนรับอย่างอบอุ่นนะคะ ฉันจะพยายามทำหน้าที่ให้ดีที่สุดค่ะ'",
        "next": "pro_c1_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "พยักหน้าให้กำลังใจ 'มีอัศวินที่เข้มแข็งอย่างคุณลีออนคอยนำทาง ฉันรู้สึกปลอดภัยขึ้นเยอะเลยค่ะ'",
        "next": "pro_c1_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "ยิ้มมุมปากอย่างท้าทาย 'ฟังดูเป็นการผจญภัยที่น่าตื่นเต้นดีนี่คะ งั้นก็ฝากตัวด้วยนะทุกคน!'",
        "next": "pro_c1_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ถอนหายใจด้วยความกังวล 'ทุกอย่างมันเกิดขึ้นเร็วไปหมด... ฉันกลัวว่าจะทำได้ไม่ดีพอจังค่ะ'",
        "next": "pro_c1_wrong",
        "charGain": "all",
        "points": -10
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
    "text": "คุณเดินตรงไปที่แท่นคริสตัลกลางห้อง",
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
    "text": "พอคุณวางมือลงบนคริสตัล ก็รู้สึกถึงพลังอุ่นๆ วิ่งผ่านมือ",
    "next": "pro_after_c1_5",
    "charImg": "assets/char_leon_smile.png"
  },
  "pro_after_c1_5": {
    "chapter": "บทนำ: การตื่นขึ้นของพลัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-shrine",
    "text": "ทันใดนั้น แสงสีทองก็พุ่งขึ้นสู่ท้องฟ้า เชื่อมต่อกับดวงดาวด้านบน!",
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
    "text": "ละอองแสงโปรยปรายลงมารอบตัวคุณและทุกคน",
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
    "text": "พอแสงเริ่มจางลง คุณก็เริ่มรู้สึกหมดแรงจนเซไปนิดหน่อย",
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
    "text": "เมื่อเริ่มรู้สึกเวียนหัวและเหนื่อยล้า คุณจะทำอย่างไร?",
    "choices": [
      {
        "text": "หันไปหาดยุกเซดริก 'คุณเซดริกคะ... ขอฉันพิงแขนคุณเดินสักครู่ได้ไหมคะ เริ่มทรงตัวไม่อยู่แล้วค่ะ'",
        "next": "pro_c2_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "เอื้อมมือไปหาลูเชียน 'คุณลูเชียนคะ ช่วยถ่ายทอดเวทมนตร์อุ่นๆ ให้ฉันรู้สึกสดชื่นขึ้นหน่อยได้ไหมคะ'",
        "next": "pro_c2_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "แตะไหล่ลีออน 'คุณลีออนคะ ช่วยชะลอฝีเท้าเดินเคียงข้างฉันหน่อยนะคะ ขอบคุณที่คอยระวังหลังให้ค่ะ'",
        "next": "pro_c2_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "สะกิดเคลพร้อมแอบหัวเราะ 'เคล นายเดินเบาเป็นแมวขโมยเลย ช่วยเป็นหลักให้ฉันจับหน่อยสิ'",
        "next": "pro_c2_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ฝืนก้มหน้าเดินเร็วคนเดียว 'ฉันไม่เป็นไรค่ะ ไม่ต้องเข้ามาใกล้ขนาดนั้นก็ได้...'",
        "next": "pro_c2_wrong",
        "charGain": "all",
        "points": -10
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
    "text": "ทั้งสี่คนพาคุณเดินจากวิหารเข้าสู่พระราชวัง",
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
    "text": "ตลอดทางเดินตกแต่งอย่างสวยงาม มีโคมไฟและน้ำพุประดับอยู่",
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
    "text": "คนรับใช้ในวังออกมาต้อนรับและเปิดประตูห้องพักให้คุณ",
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
    "text": "ห้องพักกว้างขวางและสะดวกสบาย มีระเบียงมองเห็นสวนดอกไม้",
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
    "text": "เมื่ออยู่คนเดียว คุณทิ้งตัวลงนอนบนเตียงนุ่มๆ แล้วเผลอหลับไปด้วยความเหนื่อย...",
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
    "text": "เช้าวันต่อมา แสงแดดส่องเข้ามาในห้องปลุกให้คุณตื่น",
    "next": "ch1_p1_2"
  },
  "ch1_p1_2": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "คุณล้างหน้าแต่งตัวด้วยชุดที่คนรับใช้เตรียมไว้ให้",
    "next": "ch1_p1_3"
  },
  "ch1_p1_3": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "พอเปิดประตูห้องออกมา ก็พบว่าทั้งสี่คนมายืนรอคุณอยู่หน้าห้องแล้ว!",
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
    "text": "มื้อเช้าเต็มไปด้วยความสนุก ทั้งสี่คนคอยตักอาหารให้คุณจนเต็มจาน",
    "next": "ch1_p1_9"
  },
  "ch1_p1_9": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-council",
    "text": "หลังทานอาหารเสร็จ คุณเดินตามพวกเขาเข้าไปในห้องประชุมสภา",
    "next": "ch1_p1_10"
  },
  "ch1_p1_10": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-council",
    "text": "มีขุนนางบางกลุ่มเริ่มส่งเสียงคัดค้านและไม่มั่นใจในตัวคุณ",
    "next": "ch1_p1_11"
  },
  "ch1_p1_11": {
    "chapter": "บทที่ 1: สภาขุนนาง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-council",
    "text": "'ท่านดยุกเซดริก! เราจะมั่นใจได้อย่างไรว่าเด็กสาวคนนี้ควบคุมพลังได้จริงๆ!'",
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
    "bg": "bg-council",
    "text": "เมื่อมีคนสงสัยในพลังของคุณ คุณจะพิสูจน์ตัวเองอย่างไร?",
    "choices": [
      {
        "text": "ก้าวไปยืนเคียงข้างเซดริกและประกาศด้วยความมั่นคง 'ฉันจะใช้การกระทำและผลลัพธ์เป็นคำตอบให้ทุกท่านเองค่ะ'",
        "next": "ch1_c1_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ประสานมือกับลูเชียนร่ายละอองเวทดาราสีทองส่องสว่างทั่วห้องโถงให้ประจักษ์แก่สายตาทุกคน",
        "next": "ch1_c1_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "ส่งสัญญาณให้ลีออน 'คุณลีออนคะ ช่วยเป็นพยานคมดาบแห่งเกียรติยศยืนยันพลังแสงดาวร่วมกับฉันด้วยค่ะ'",
        "next": "ch1_c1_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "ส่งสายตารู้กันให้เคล ใช้ไหวพริบเปิดโปงข้อเท็จจริงจนขุนนางช่างสงสัยต้องยอมจำนนด้วยหลักฐาน",
        "next": "ch1_c1_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ก้มหน้าเงียบงันไม่กล้าสบตาใคร ปล่อยให้ความกดดันเข้าครอบงำจนบรรยากาศอึดอัด",
        "next": "ch1_c1_wrong",
        "charGain": "all",
        "points": -15
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
    "text": "ช่วงบ่ายหลังจากการประชุม คุณได้ออกมาเดินเล่นพักผ่อนในสวน",
    "next": "ch1_afternoon_2"
  },
  "ch1_afternoon_2": {
    "chapter": "บทที่ 1: กิจกรรมยามบ่าย",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-garden",
    "text": "สวนในวังมีทั้งศาลาจิบชา ลานฝึกซ้อม และสระน้ำกว้าง",
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
    "text": "ช่วงบ่ายนี้ คุณอยากทำกิจกรรมอะไรเพื่อผ่อนคลาย?",
    "choices": [
      {
        "text": "จิบชาเอิร์ลเกรย์และนั่งแลกเปลี่ยนความคิดเห็นในห้องสมุดอันเงียบสงบกับเซดริก",
        "next": "ch1_c2_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "เรียนรู้ศาสตร์การปรุงน้ำหอมและมนตราสมุนไพรโบราณในเรือนกระจกกับลูเชียน",
        "next": "ch1_c2_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "ออกกำลังยืดเส้นยืดสาย ฝึกพื้นฐานดาบป้องกันตัวและจัดดอกกุหลาบกับลีออน",
        "next": "ch1_c2_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "แอบปลอมตัวใส่ฮู้ดออกไปสำรวจตลาด ชิมขนมอร่อยๆ ริมทางอย่างอิสระกับเคล",
        "next": "ch1_c2_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ขอตัวกลับห้องพักเพียงลำพังเพราะยังรู้สึกเหนื่อยล้าสะสมจากการประชุม",
        "next": "ch1_c2_wrong",
        "charGain": "all",
        "points": -10
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
    "text": "งานเลี้ยงเต้นรำสวมหน้ากากเริ่มต้นขึ้น ห้องโถงเต็มไปด้วยแสงไฟและเสียงเพลง",
    "next": "ch2_p1_2"
  },
  "ch2_p1_2": {
    "chapter": "บทที่ 2: งานเต้นรำหน้ากาก",
    "speaker": "narrator",
    "char": null,
    "bg": "bg-palace",
    "text": "คุณสวมชุดราตรีพร้อมหน้ากากเดินเข้ามาร่วมงาน",
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
    "text": "เสียงดนตรีเริ่มบรรเลงขึ้น คุณอยากไปเต้นรำกับใคร?",
    "choices": [
      {
        "text": "วางมือลงบนฝ่ามือของเซดริก เต้นรำในจังหวะสง่างาม มั่นคง และเปี่ยมด้วยเกียรติยศ",
        "next": "ch2_c1_cedric",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "จับมือลูเชียน ล่องลอยไปตามเสียงดนตรีอันนุ่มนวลราวกับพลิ้วไหวอยู่ท่ามกลางหมู่ดาว",
        "next": "ch2_c1_lucian",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "ยิ้มตอบรับคำเชิญของลีออน เต้นรำไปกับความตั้งใจจริงใจที่น่ารักและอบอุ่นหัวใจ",
        "next": "ch2_c1_leon",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "คว้ามือเคล ออกไปหมุนตัวเต้นรำอย่างมีชีวิตชีวา สนุกสนานและเป็นกันเองที่สุด",
        "next": "ch2_c1_kael",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ยืนลังเลอยู่ริมฟลอร์เพราะกลัวเหยียบเท้าคู่เต้นจนเพลงเริ่มผ่านไป",
        "next": "ch2_c1_wrong",
        "charGain": "all",
        "points": -15
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
    "text": "ดึกแล้ว คุณจึงเดินออกมารับลมข้างนอกสวนคนเดียว",
    "next": "ch2_choice_garden"
  },
  "ch2_choice_garden": {
    "chapter": "บทที่ 2: สวนกุหลาบใต้แสงจันทร์",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ยืนรับลมอยู่สักพัก คุณอยากชวนใครมาคุยด้วย?",
    "choices": [
      {
        "text": "เดินเคียงข้างเซดริกใต้ซุ้มกุหลาบดำ พูดคุยถึงความรู้สึกเบื้องลึกที่ซ่อนอยู่ใต้ความสุขุม",
        "next": "ch2_c2_cedric",
        "charGain": "cedric",
        "points": 30
      },
      {
        "text": "นั่งพักริมสระน้ำใสกับลูเชียน เงยหน้ามองดาวตกและแลกเปลี่ยนความฝันในอนาคต",
        "next": "ch2_c2_lucian",
        "charGain": "lucian",
        "points": 30
      },
      {
        "text": "เดินรับลมที่ระเบียงหินอ่อนกับลีออน ฟังเรื่องราวความมุ่งมั่นและความจริงใจของเขา",
        "next": "ch2_c2_leon",
        "charGain": "leon",
        "points": 30
      },
      {
        "text": "ปีนขึ้นไปนั่งรับลมบนจุดชมวิวกับเคล จุดประกายไฟเล็กๆ และหัวเราะไปด้วยกัน",
        "next": "ch2_c2_kael",
        "charGain": "kael",
        "points": 30
      },
      {
        "text": "ยืนเหม่อมองท้องฟ้าคนเดียวเงียบๆ โดยไม่ได้เปิดโอกาสให้ใครได้พูดคุยเปิดใจ",
        "next": "ch2_c2_wrong",
        "charGain": "all",
        "points": -15
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
    "text": "คืนต่อมา ท้องฟ้าเปลี่ยนเป็นสีแดงเข้ม กองทัพเงาเริ่มบุกโจมตีพระราชวัง!",
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
    "text": "ศัตรูกำลังพุ่งเข้ามา คุณจะเลือกใช้แผนรับมือของใคร?",
    "choices": [
      {
        "text": "ผสานพลังเข้ากับดาบเงาของเซดริก ทลายเกราะความมืดด้วยการโจมตีที่เด็ดขาดและทรงอำนาจ",
        "next": "ch3_c1_cedric",
        "charGain": "cedric",
        "points": 40
      },
      {
        "text": "เชื่อมต่อกระแสเวทกับลูเชียน ร่ายวงแหวนมหาเวทศักดิ์สิทธิ์ชำระล้างความชั่วร้ายจนหมดสิ้น",
        "next": "ch3_c1_lucian",
        "charGain": "lucian",
        "points": 40
      },
      {
        "text": "อัดฉีดพลังแสงดาวใส่ดาบสุริยันของลีออน พุ่งทะลวงเป็นแนวหน้าปกป้องทุกคนอย่างกล้าหาญ",
        "next": "ch3_c1_leon",
        "charGain": "leon",
        "points": 40
      },
      {
        "text": "ส่งประกายดาวนำทางให้เคล อาศัยความเร็วดุจสายฟ้าแทงจุดอ่อนของมอนสเตอร์ในเสี้ยววินาที",
        "next": "ch3_c1_kael",
        "charGain": "kael",
        "points": 40
      },
      {
        "text": "ตกใจจนสะดุดล้มและคุมพลังเวทไม่อยู่ ทำให้ทุกคนต้องรีบวิ่งเข้ามารับการโจมตีแทนคุณ",
        "next": "ch3_c1_wrong",
        "charGain": "all",
        "points": -20
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
    "text": "หลังจากผ่านเรื่องราวต่างๆ มาด้วยกัน ตอนนี้ถึงเวลาเลือกคนที่คุณรู้สึกผูกพันมากที่สุดแล้ว!",
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
    "text": "ใครกันนะที่จะเดินเข้ามาหาคุณเป็นคนแรก?",
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
    "text": "คุณเดินไปกับเซดริกเพื่อมุ่งหน้าไปยังปราสาทดยุกราเวนครอสต์",
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
    "text": "ภายในปราสาทดยุกราเวนครอสต์ถูกจัดเตรียมไว้อย่างดีและดูอบอุ่น",
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
    "text": "ในห้องมีทั้งดอกไม้ หมอนนุ่มๆ และหนังสือที่คุณชอบวางเตรียมไว้",
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
    "text": "คุณยิ้มขอบคุณในความใส่ใจ ก่อนที่เขาจะพาคุณไปนั่งพักที่โซฟา",
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
    "text": "สักพัก เซดริกก็นำชาร้อนกับขนมมาเสิร์ฟให้คุณ",
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
    "text": "ขนมอร่อยมากจนคุณเผลอยิ้มออกมา",
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
    "text": "สัมผัสจากมือเขาทำให้คุณรู้สึกใจเต้นขึ้นมา",
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
    "text": "เขาขยับเข้ามานั่งข้างๆ คุณจนไหล่ชนกัน",
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
    "text": "เขามองหน้าคุณตรงๆ เพื่อรอฟังคำตอบ",
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
    "text": "ลมพัดเข้ามาเบาๆ ทางหน้าต่าง มีกลิ่นหอมจางๆ ลอยมาแตะจมูก",
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
    "text": "เซดริกเปิดใจถามว่าอะไรทำให้คุณเลือกมาอยู่ข้างๆ เขา คุณจะตอบความในใจอย่างไร?",
    "charImg": "assets/char_cedric_blush.png",
    "choices": [
      {
        "text": "สบตาเขาอย่างจริงใจ 'เพราะเวลาอยู่กับคุณ ฉันรู้สึกได้ถึงความอ่อนโยนและความปลอดภัยที่แท้จริงค่ะ'",
        "next": "cedric_ep1_good_1",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ยิ้มแก้เขิน 'คงเป็นเพราะโชคชะตาพามามั้งคะ... แต่ฉันก็ดีใจที่ได้อยู่กับคุณนะคะ'",
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
    "text": "เขาดึงคุณเข้าไปกอดไว้ ได้ยินเสียงหัวใจเขาเต้นชัดเจน",
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
    "text": "คุณทั้งสองคนนั่งคุยกันเพลินจนถึงช่วงเย็น",
    "next": "cedric_ep2_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep1_bad_1": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกยิ้มบางๆ อย่างเข้าใจ 'ไม่เป็นไรหรอก ค่อยๆ เรียนรู้กันไปนะ แค่เธอยอมเปิดใจมาอยู่ที่นี่ ฉันก็ดีใจมากแล้ว'",
    "next": "cedric_ep1_bad_1_ext_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep1_bad_2": {
    "chapter": "รูทเซดริก บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เขาพยักหน้ารับอย่างเงียบๆ แล้วเดินไปเก็บถ้วยชา",
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
    "text": "บรรยากาศในห้องเงียบลงเล็กน้อย ก่อนจะหมดวันแรก",
    "next": "cedric_ep2_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_1": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา เซดริกในชุดสบายๆ มารอรับคุณที่หน้าห้อง",
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
    "text": "ได้ยินเขาชวนไปเดทแบบนี้ ทำเอาคุณแอบเขินขึ้นมาทันที",
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
    "text": "เขาจับมือคุณเดินไปที่เรือนกระจกกุหลาบดำและลานน้ำพุ",
    "next": "cedric_ep2_6",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_6": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "ที่เรือนกระจกกุหลาบดำมีดอกไม้บานสะพรั่ง บรรยากาศสดชื่นมาก",
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
    "text": "ระหว่างเดินเล่น คุณสังเกตเห็นซุ้มขายเครื่องประดับริมทาง",
    "next": "cedric_ep2_10",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep2_10": {
    "chapter": "รูทเซดริก บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "คุณหยุดดูสร้อยข้อมือลายดาวเส้นหนึ่ง",
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
    "text": "สร้อยข้อมือพอดีกับข้อมือของคุณเป๊ะ",
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
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าแล้วนำแซนด์วิชกับน้ำผลไม้ออกมาวาง",
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
    "text": "เขายื่นขนมมาป้อนให้คุณตรงหน้า",
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
    "text": "ลมพัดมีกลีบดอกไม้ปลิวมาติดที่ผมของคุณ",
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
    "text": "เซดริกโน้มใบหน้าเข้ามาใกล้ในระยะประชิดท่ามกลางสวนกุหลาบดำ คุณจะตอบสนองต่อจังหวะใจเต้นนี้อย่างไร?",
    "charImg": "assets/char_cedric_blush.png",
    "choices": [
      {
        "text": "ไม่หลบสายตาและยกมือขึ้นแตะแก้มเขาเบาๆ 'ขอบคุณสำหรับสร้อยข้อมือและช่วงเวลาดีๆ วันนี้นะคะ'",
        "next": "cedric_ep2_good_1",
        "charGain": "cedric",
        "points": 25
      },
      {
        "text": "ก้มหน้าซ่อนความเขินอายพลางขยับถอยหลังนิดๆ 'ใจเต้นแรงขนาดนี้... แกล้งกันใช่ไหมคะ'",
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
    "text": "เขาจับมือคุณไว้แล้วแกล้งจุ๊บหลังมือเบาๆ",
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
    "text": "เซดริกขยับถอยหลังพร้อมยกมือยอมแพ้ด้วยรอยยิ้มเขิน 'ขอโทษทีนะ... พออยู่ใกล้เธอแล้วฉันเผลอใจเต้นแรงไปหน่อย ไว้คราวหน้าฉันจะค่อยเป็นค่อยไปนะ'",
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
    "text": "ระหว่างเดินกลับ ทั้งสองคนเงียบไปเล็กน้อย",
    "next": "cedric_ep3_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_1": {
    "chapter": "รูทเซดริก บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "บ่ายวันต่อมา คุณกับเซดริกออกมาเดินเล่นด้วยกันในสวน",
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
    "text": "เคลแวะมาชวนคุณไปเดินเล่นจนเซดริกออกอาการหึงหวง คุณจะจัดการสถานการณ์นี้อย่างไร?",
    "charImg": "assets/char_cedric.png",
    "char2": "kael",
    "char2Img": "assets/char_kael_smile.png",
    "choices": [
      {
        "text": "จับแขนเซดริกไว้มั่น 'ขอบคุณที่ชวนนะคะคุณเคล แต่ตอนนี้ฉันอยากอยู่กับเซดริกต่อมากกว่าค่ะ'",
        "next": "cedric_ep3_good_1",
        "charGain": "cedric",
        "points": 30
      },
      {
        "text": "หัวเราะให้ทั้งคู่ 'อย่าเพิ่งทะเลาะกันสิคะ... วันนี้ฉันขออยู่กับเซดริกก่อน วันหลังค่อยคุยกันใหม่นะคะคุณเคล'",
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
    "text": "พอเคลเดินจากไป เซดริกก็หันมามองคุณด้วยสีหน้าเขินๆ",
    "next": "cedric_ep3_after_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep3_bad_1": {
    "chapter": "รูทเซดริก บทที่ 3: อาการน้อยใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-garden",
    "text": "เซดริกคลายกังวลลงเมื่อเห็นคุณช่วยไกล่เกลี่ยอย่างนุ่มนวล 'เข้าใจแล้วล่ะ... แต่ฉันก็ยังหวงเธออยู่ดีนั่นแหละนะ'",
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
    "text": "เมื่อเหลือกันสองคน คุณจึงต้องรีบง้อเซดริกที่กำลังแอบงอนอยู่",
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
    "text": "เขาเอนตัวมาซบไหล่คุณเบาๆ เพื่ออ้อนคุณ",
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
    "text": "คุณลูบผมเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มได้",
    "next": "cedric_ep4_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_1": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "คืนหนึ่งฝนตกหนักและมีเสียงฟ้าร้องดังไปทั่ว",
    "next": "cedric_ep4_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_2": {
    "chapter": "รูทเซดริก บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงเดินไปดูที่ห้องของเซดริก และเห็นเขายืนมองหน้าต่างอยู่คนเดียว",
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
    "text": "คุณเดินเข้าไปจับมือเขา พบว่ามือของเขาเย็นเฉียบ",
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
    "text": "คุณชวนเขามานั่งข้างเตาผิงเพื่อคุยกัน",
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
    "text": "เขาเริ่มเล่าเรื่องในอดีตที่เก็บไว้ในใจให้คุณฟัง",
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
    "text": "เซดริกเล่าความเจ็บปวดในอดีตที่เคยถูกคนในตระกูลหักหลัง คุณจะมอบความอบอุ่นให้เขาอย่างไร?",
    "charImg": "assets/char_cedric.png",
    "choices": [
      {
        "text": "สอดนิ้วประสานกับมือเขาไว้แน่น 'ต่อไปนี้คุณจะไม่ต้องเผชิญหน้ากับความมืดคนเดียวอีกแล้วนะคะ ฉันจะอยู่ตรงนี้เสมอ'",
        "next": "cedric_ep4_good_1",
        "charGain": "cedric",
        "points": 30
      },
      {
        "text": "มองเขาด้วยความเห็นใจ 'เรื่องในอดีตคงหนักหนามากจริงๆ... ขอบคุณที่ไว้ใจเล่าให้ฉันฟังนะคะ'",
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
    "text": "คืนนั้นคุณกับเขานั่งคุยกันข้างเตาผิงจนเผลอหลับไป",
    "next": "cedric_ep5_1",
    "charImg": "assets/char_cedric_smile.png"
  },
  "cedric_ep4_bad_1": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "cedric",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "เซดริกพยักหน้ารับด้วยความซาบซึ้ง 'ขอบคุณที่รับฟังเรื่องราวของฉันนะ แค่รู้ว่าเธอพร้อมจะเข้าใจ ฉันก็รู้สึกโล่งใจขึ้นเยอะเลย'",
    "next": "cedric_ep4_bad_1_ext_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep4_bad_2": {
    "chapter": "รูทเซดริก บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ปล่อยให้เขานั่งอยู่คนเดียว",
    "next": "cedric_ep5_1",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_1": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-council",
    "text": "ไม่กี่วันต่อมา สภาขุนนางพยายามกดดันให้เซดริกแต่งงานทางการเมืองกับตระกูลอื่น",
    "next": "cedric_ep5_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep5_2": {
    "chapter": "รูทเซดริก บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-council",
    "text": "เรื่องนี้กลายเป็นประเด็นที่ทุกคนในวังกำลังจับตามอง",
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
    "text": "สภาขุนนางพยายามกดดันความสัมพันธ์ของคุณทั้งสอง คุณจะยืนหยัดร่วมกับเซดริกอย่างไร?",
    "charImg": "assets/char_cedric.png",
    "choices": [
      {
        "text": "บีบมือเขาเพื่อส่งต่อกำลังใจ 'ฉันเชื่อมั่นในตัวคุณค่ะ ไม่ว่าหนทางข้างหน้าจะเป็นอย่างไร เราจะผ่านมันไปด้วยกัน'",
        "next": "cedric_ep5_good_1",
        "charGain": "cedric",
        "points": 35
      },
      {
        "text": "มองเขาด้วยความกังวล 'ฉันไม่อยากให้คุณต้องเดือดร้อนเพราะฉันเลย... แต่ถ้าคุณสู้ ฉันก็จะไม่ถอยค่ะ'",
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
    "bg": "bg-council",
    "text": "เซดริกประกาศกลางสภาอย่างชัดเจนว่า เขาจะไม่แต่งงานกับใครนอกจากคุณ",
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
    "text": "ตอนนี้ไม่มีอะไรมาขวางความสัมพันธ์ของคุณกับเขาได้อีกแล้ว!",
    "next": "cedric_ep6_1",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_ep5_bad_1": {
    "chapter": "รูทเซดริก บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-council",
    "text": "เซดริกจับมือคุณไว้ 'ไม่ต้องกังวลนะ เราจะช่วยกันหาทางออกไปด้วยกัน'",
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
    "text": "คืนนั้น เซดริกพาคุณมาที่ระเบียงชมดาวที่มีแสงเทียนจุดอยู่",
    "next": "cedric_ep6_2",
    "charImg": "assets/char_cedric.png"
  },
  "cedric_ep6_2": {
    "chapter": "รูทเซดริก บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-night",
    "text": "ลมพัดเย็นสบาย ท้องฟ้าคืนนี้เต็มไปด้วยดวงดาว",
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
    "text": "เซดริกสารภาพรักและขอให้คุณอยู่เคียงข้างในฐานะดัชเชสคู่ชีวิต คุณจะให้คำตอบเขาอย่างไร?",
    "charImg": "assets/char_cedric_blush.png",
    "choices": [
      {
        "text": "โผเข้ากอดเขาด้วยน้ำตาแห่งความสุข 'ตกลงค่ะเซดริก ฉันรักคุณและจะอยู่เคียงข้างคุณตลอดไปค่ะ!'",
        "next": "cedric_true_ep_1",
        "charGain": "cedric",
        "points": 50
      },
      {
        "text": "ยิ้มอย่างซาบซึ้งใจแต่เว้นระยะ 'คุณเป็นคนสำคัญที่สุดของฉันนะคะ... แต่ฉันยังต้องการเวลาเพื่อก้าวข้ามความลังเลนี้ค่ะ'",
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
    "text": "เขาประคองใบหน้าคุณขึ้นมาสบตา แล้วโน้มตัวลงจูบคุณใต้แสงจันทร์",
    "next": "cedric_true_ep_4",
    "charImg": "assets/char_cedric_blush.png"
  },
  "cedric_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: ราชินีแห่งราเวนครอสต์",
    "speaker": "narrator",
    "char": "cedric",
    "bg": "bg-palace",
    "text": "แสงดาวบนฟ้าส่องประกายสว่างไสวไปพร้อมกับรอยยิ้มของคุณทั้งสองคน",
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
    "text": "คุณเดินไปกับลูเชียนเพื่อมุ่งหน้าไปยังหอคอยชมดาวแห่งมหาวิหาร",
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
    "text": "ภายในหอคอยชมดาวแห่งมหาวิหารถูกจัดเตรียมไว้อย่างดีและดูอบอุ่น",
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
    "text": "ในห้องมีทั้งดอกไม้ หมอนนุ่มๆ และหนังสือที่คุณชอบวางเตรียมไว้",
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
    "text": "คุณยิ้มขอบคุณในความใส่ใจ ก่อนที่เขาจะพาคุณไปนั่งพักที่โซฟา",
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
    "text": "สักพัก ลูเชียนก็นำชาร้อนกับขนมมาเสิร์ฟให้คุณ",
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
    "text": "ขนมอร่อยมากจนคุณเผลอยิ้มออกมา",
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
    "text": "สัมผัสจากมือเขาทำให้คุณรู้สึกใจเต้นขึ้นมา",
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
    "text": "เขาขยับเข้ามานั่งข้างๆ คุณจนไหล่ชนกัน",
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
    "text": "เขามองหน้าคุณตรงๆ เพื่อรอฟังคำตอบ",
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
    "text": "ลมพัดเข้ามาเบาๆ ทางหน้าต่าง มีกลิ่นหอมจางๆ ลอยมาแตะจมูก",
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
    "text": "ลูเชียนถามด้วยรอยยิ้มหวานว่าคุณคิดอย่างไรกับการมาอยู่ที่หอคอยนี้ คุณจะตอบเขาอย่างไร?",
    "charImg": "assets/char_lucian_blush.png",
    "choices": [
      {
        "text": "ยิ้มตอบอย่างอบอุ่น 'เพราะอยู่กับคุณลูเชียนแล้ว จิตใจของฉันสงบและมีความสุขมากที่สุดเลยค่ะ'",
        "next": "lucian_ep1_good_1",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "มองลูกแก้วดวงดาว 'ที่นี่สวยและเงียบสงบมากเลยค่ะ แต่บางทีก็แอบเหงาแทนคุณเหมือนกันนะ'",
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
    "text": "เขาดึงคุณเข้าไปกอดไว้ ได้ยินเสียงหัวใจเขาเต้นชัดเจน",
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
    "text": "คุณทั้งสองคนนั่งคุยกันเพลินจนถึงช่วงเย็น",
    "next": "lucian_ep2_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep1_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนยิ้มบางๆ อย่างเข้าใจ 'ไม่เป็นไรหรอก ค่อยๆ เรียนรู้กันไปนะ แค่เธอยอมเปิดใจมาอยู่ที่นี่ ฉันก็ดีใจมากแล้ว'",
    "next": "lucian_ep1_bad_1_ext_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep1_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "เขาพยักหน้ารับอย่างเงียบๆ แล้วเดินไปเก็บถ้วยชา",
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
    "text": "บรรยากาศในห้องเงียบลงเล็กน้อย ก่อนจะหมดวันแรก",
    "next": "lucian_ep2_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_1": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา ลูเชียนในชุดสบายๆ มารอรับคุณที่หน้าห้อง",
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
    "text": "ได้ยินเขาชวนไปเดทแบบนี้ ทำเอาคุณแอบเขินขึ้นมาทันที",
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
    "bg": "bg-lake",
    "text": "เขาจับมือคุณเดินไปที่ทะเลสาบจันทราและลานดูดาว",
    "next": "lucian_ep2_6",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_6": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-lake",
    "text": "ที่ทะเลสาบจันทราผิวน้ำสะท้อนแสงแดดระยิบระยับ ลมพัดเย็นสบาย",
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
    "text": "ระหว่างเดินเล่น คุณสังเกตเห็นซุ้มขายเครื่องประดับริมทาง",
    "next": "lucian_ep2_10",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep2_10": {
    "chapter": "รูทลูเชียน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "คุณหยุดดูสร้อยข้อมือลายดาวเส้นหนึ่ง",
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
    "text": "สร้อยข้อมือพอดีกับข้อมือของคุณเป๊ะ",
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
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าแล้วนำแซนด์วิชกับน้ำผลไม้ออกมาวาง",
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
    "text": "เขายื่นขนมมาป้อนให้คุณตรงหน้า",
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
    "text": "ลมพัดมีกลีบดอกไม้ปลิวมาติดที่ผมของคุณ",
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
    "text": "ลูเชียนสบตาคุณหวานซึ้งกลางเรือเวทมนตร์ในทะเลสาบกระจกเงา คุณจะทำอย่างไร?",
    "charImg": "assets/char_lucian_blush.png",
    "choices": [
      {
        "text": "เอื้อมมือไปจับมือเขาไว้ 'ถ้าคุณอยากเป็นแค่ผู้ชายธรรมดาเวลาอยู่กับฉัน ฉันก็พร้อมจะรักและดูแลคุณแบบนั้นค่ะ'",
        "next": "lucian_ep2_good_1",
        "charGain": "lucian",
        "points": 25
      },
      {
        "text": "แกล้งชวนมองวิวแก้เขิน 'ดูเงาสะท้อนในน้ำสิคะ สวยจนเหมือนเรากำลังลอยอยู่บนฟ้าเลยเนอะ'",
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
    "text": "เขาจับมือคุณไว้แล้วแกล้งจุ๊บหลังมือเบาๆ",
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
    "text": "ลูเชียนขยับถอยหลังพร้อมยกมือยอมแพ้ด้วยรอยยิ้มเขิน 'ขอโทษทีนะ... พออยู่ใกล้เธอแล้วฉันเผลอใจเต้นแรงไปหน่อย ไว้คราวหน้าฉันจะค่อยเป็นค่อยไปนะ'",
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
    "text": "ระหว่างเดินกลับ ทั้งสองคนเงียบไปเล็กน้อย",
    "next": "lucian_ep3_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_1": {
    "chapter": "รูทลูเชียน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "บ่ายวันต่อมา คุณกับลูเชียนออกมาเดินเล่นด้วยกันในสวน",
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
    "text": "ลีออนเอาขนมมาฝากจนลูเชียนออกอาการหวงและเดินมากั้นกลาง คุณจะพูดอย่างไร?",
    "charImg": "assets/char_lucian.png",
    "char2": "leon",
    "char2Img": "assets/char_leon_smile.png",
    "choices": [
      {
        "text": "เกาะแขนเสื้อลูเชียนไว้ 'ขอบคุณสำหรับขนมนะคะคุณลีออน แต่ตอนนี้ฉันอยากอยู่ฟังเรื่องดวงดาวกับลูเชียนก่อนค่ะ'",
        "next": "lucian_ep3_good_1",
        "charGain": "lucian",
        "points": 30
      },
      {
        "text": "แบ่งขนมให้ทั้งคู่ 'ใจเย็นๆ ก่อนสิคะ มานั่งกินขนมด้วยกันสามคนเลยดีกว่านะ'",
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
    "text": "พอลีออนเดินจากไป ลูเชียนก็หันมายิ้มหวานให้คุณอย่างสบายใจ",
    "next": "lucian_ep3_after_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep3_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 3: อาการน้อยใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนคลายกังวลลงเมื่อเห็นคุณช่วยไกล่เกลี่ยอย่างนุ่มนวล 'เข้าใจแล้วล่ะ... แต่ฉันก็ยังหวงเธออยู่ดีนั่นแหละนะ'",
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
    "text": "เมื่อเหลือกันสองคน คุณจึงต้องรีบปลอบลูเชียนที่ทำหน้าน้อยใจ",
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
    "text": "เขาเอนตัวมาซบไหล่คุณเบาๆ เพื่ออ้อนคุณ",
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
    "text": "คุณลูบผมเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มได้",
    "next": "lucian_ep4_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_1": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "คืนหนึ่งฝนตกหนักและมีเสียงฟ้าร้องดังไปทั่ว",
    "next": "lucian_ep4_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_2": {
    "chapter": "รูทลูเชียน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงเดินไปดูที่ห้องของลูเชียน และเห็นเขายืนมองหน้าต่างอยู่คนเดียว",
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
    "text": "คุณเดินเข้าไปจับมือเขา พบว่ามือของเขาเย็นเฉียบ",
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
    "text": "คุณชวนเขามานั่งข้างเตาผิงเพื่อคุยกัน",
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
    "text": "เขาเริ่มเล่าเรื่องในอดีตที่เก็บไว้ในใจให้คุณฟัง",
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
    "text": "ลูเชียนเล่าถึงความโดดเดี่ยวที่ต้องอยู่บนหอคอยสูงมาตั้งแต่วัยเด็ก คุณจะปลอบประโลมเขาอย่างไร?",
    "charImg": "assets/char_lucian.png",
    "choices": [
      {
        "text": "โอบกอดเขาไว้แนบอก 'ตอนนี้คุณมีฉันอยู่ข้างๆ แล้วนะคะ คุณจะไม่ต้องโดดเดี่ยวอีกต่อไปแล้วค่ะ'",
        "next": "lucian_ep4_good_1",
        "charGain": "lucian",
        "points": 30
      },
      {
        "text": "วางมือทาบบนหลังมือเขา 'รับรู้ได้เลยค่ะว่าคุณต้องเข้มแข็งมากแค่ไหน... ต่อจากนี้มีเพื่อนคุยแล้วนะ'",
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
    "text": "คืนนั้นคุณกับเขานั่งคุยกันข้างเตาผิงจนเผลอหลับไป",
    "next": "lucian_ep5_1",
    "charImg": "assets/char_lucian_smile.png"
  },
  "lucian_ep4_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "lucian",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "ลูเชียนพยักหน้ารับด้วยความซาบซึ้ง 'ขอบคุณที่รับฟังเรื่องราวของฉันนะ แค่รู้ว่าเธอพร้อมจะเข้าใจ ฉันก็รู้สึกโล่งใจขึ้นเยอะเลย'",
    "next": "lucian_ep4_bad_1_ext_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep4_bad_2": {
    "chapter": "รูทลูเชียน บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ปล่อยให้เขานั่งอยู่คนเดียว",
    "next": "lucian_ep5_1",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep5_1": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา สภาผู้เฒ่าแห่งวิหารคัดค้านความสัมพันธ์ของลูเชียน เพราะกฎโบราณของมหาปุโรหิต",
    "next": "lucian_ep5_2",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_2": {
    "chapter": "รูทลูเชียน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "เรื่องนี้กลายเป็นประเด็นที่ทุกคนในวังกำลังจับตามอง",
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
    "text": "คณะผู้เฒ่าตั้งค่ายกลทดสอบความรักของลูเชียน คุณจะจับมือเผชิญหน้ากับเขาอย่างไร?",
    "charImg": "assets/char_lucian.png",
    "choices": [
      {
        "text": "กุมมือลูเชียนก้าวเข้าสู่ค่ายกลอย่างไม่หวั่นเกรง 'ความรักของเราจะเปล่งประกายยิ่งกว่ากฎโบราณใดๆ ค่ะ'",
        "next": "lucian_ep5_good_1",
        "charGain": "lucian",
        "points": 35
      },
      {
        "text": "มองเขาด้วยความเป็นห่วง 'ระวังตัวด้วยนะคะลูเชียน ฉันจะคอยประคองพลังเวทช่วยคุณจากข้างๆ ค่ะ'",
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
    "text": "ลูเชียนอัญเชิญแสงแห่งดวงดาวมาเป็นพยานกลางวิหาร ยืนยันความรักที่บริสุทธิ์ของเขากับคุณ",
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
    "text": "ตอนนี้ไม่มีอะไรมาขวางความสัมพันธ์ของคุณกับเขาได้อีกแล้ว!",
    "next": "lucian_ep6_1",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_ep5_bad_1": {
    "chapter": "รูทลูเชียน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-garden",
    "text": "ลูเชียนกุมมือคุณไว้ 'เราจะผ่านเรื่องนี้ไปด้วยกัน ไม่ต้องกังวลนะ'",
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
    "text": "คืนนั้น ลูเชียนพาคุณมาที่ระเบียงชมดาวที่มีแสงเทียนจุดอยู่",
    "next": "lucian_ep6_2",
    "charImg": "assets/char_lucian.png"
  },
  "lucian_ep6_2": {
    "chapter": "รูทลูเชียน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-night",
    "text": "ลมพัดเย็นสบาย ท้องฟ้าคืนนี้เต็มไปด้วยดวงดาว",
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
    "text": "ลูเชียนสวมแหวนดวงดาวและขอให้คุณเป็นคู่ชีวิตชั่วนิรันดร์ คุณจะตอบเขาอย่างไร?",
    "charImg": "assets/char_lucian_blush.png",
    "choices": [
      {
        "text": "สวมกอดเขาแน่น 'ตกลงค่ะลูเชียน ฉันรักคุณและอยากแบ่งปันดวงดาวทุกคืนกับคุณตลอดไปค่ะ!'",
        "next": "lucian_true_ep_1",
        "charGain": "lucian",
        "points": 50
      },
      {
        "text": "กุมมือเขาไว้ด้วยความขอบคุณ 'ขอบคุณสำหรับความรักที่งดงามนี้นะคะ... แต่ขอให้ฉันได้ค้นหาหัวใจตัวเองอีกสักนิดนะคะ'",
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
    "text": "เขาประคองใบหน้าคุณขึ้นมาสบตา แล้วโน้มตัวลงจูบคุณใต้แสงจันทร์",
    "next": "lucian_true_ep_4",
    "charImg": "assets/char_lucian_blush.png"
  },
  "lucian_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: ปุโรหิตคู่บัลลังก์ดวงดาว",
    "speaker": "narrator",
    "char": "lucian",
    "bg": "bg-shrine",
    "text": "แสงดาวบนฟ้าส่องประกายสว่างไสวไปพร้อมกับรอยยิ้มของคุณทั้งสองคน",
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
    "text": "คุณเดินไปกับลีออนเพื่อมุ่งหน้าไปยังคฤหาสน์กองอัศวินสุริยัน",
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
    "text": "ภายในคฤหาสน์กองอัศวินสุริยันถูกจัดเตรียมไว้อย่างดีและดูอบอุ่น",
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
    "text": "ในห้องมีทั้งดอกไม้ หมอนนุ่มๆ และหนังสือที่คุณชอบวางเตรียมไว้",
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
    "text": "คุณยิ้มขอบคุณในความใส่ใจ ก่อนที่เขาจะพาคุณไปนั่งพักที่โซฟา",
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
    "text": "สักพัก ลีออนก็นำชาร้อนกับขนมมาเสิร์ฟให้คุณ",
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
    "text": "ขนมอร่อยมากจนคุณเผลอยิ้มออกมา",
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
    "text": "สัมผัสจากมือเขาทำให้คุณรู้สึกใจเต้นขึ้นมา",
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
    "text": "เขาขยับเข้ามานั่งข้างๆ คุณจนไหล่ชนกัน",
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
    "text": "เขามองหน้าคุณตรงๆ เพื่อรอฟังคำตอบ",
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
    "text": "ลมพัดเข้ามาเบาๆ ทางหน้าต่าง มีกลิ่นหอมจางๆ ลอยมาแตะจมูก",
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
    "text": "ลีออนหน้าแดงถามว่าทำไมคุณถึงยอมมาอยู่ที่คฤหาสน์อัศวินกับเขา คุณจะตอบเขาอย่างไร?",
    "charImg": "assets/char_leon_blush.png",
    "choices": [
      {
        "text": "ยิ้มให้เขาอย่างจริงใจ 'เพราะความซื่อสัตย์และรอยยิ้มของคุณทำให้ฉันรู้สึกอุ่นใจที่สุดในโลกเลยค่ะ'",
        "next": "leon_ep1_good_1",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "หัวเราะเบาๆ 'ก็เห็นคุณลีออนตั้งใจชวนขนาดนั้น ปฏิเสธไม่ลงหรอกค่ะ'",
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
    "text": "เขาดึงคุณเข้าไปกอดไว้ ได้ยินเสียงหัวใจเขาเต้นชัดเจน",
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
    "text": "คุณทั้งสองคนนั่งคุยกันเพลินจนถึงช่วงเย็น",
    "next": "leon_ep2_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep1_bad_1": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนยิ้มบางๆ อย่างเข้าใจ 'ไม่เป็นไรหรอก ค่อยๆ เรียนรู้กันไปนะ แค่เธอยอมเปิดใจมาอยู่ที่นี่ ฉันก็ดีใจมากแล้ว'",
    "next": "leon_ep1_bad_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep1_bad_2": {
    "chapter": "รูทลีออน บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "เขาพยักหน้ารับอย่างเงียบๆ แล้วเดินไปเก็บถ้วยชา",
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
    "text": "บรรยากาศในห้องเงียบลงเล็กน้อย ก่อนจะหมดวันแรก",
    "next": "leon_ep2_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_1": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา ลีออนในชุดสบายๆ มารอรับคุณที่หน้าห้อง",
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
    "text": "ได้ยินเขาชวนไปเดทแบบนี้ ทำเอาคุณแอบเขินขึ้นมาทันที",
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
    "bg": "bg-training",
    "text": "เขาพาคุณเดินไปที่ลานฝึกอัศวินและสวนดอกไม้ประจำค่าย",
    "next": "leon_ep2_6",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_6": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-training",
    "text": "ที่ค่ายอัศวินมีลมพัดเย็นสบาย ดอกทานตะวันบานเต็มลานกว้าง",
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
    "text": "ระหว่างเดินเล่น คุณสังเกตเห็นซุ้มขายเครื่องประดับริมทาง",
    "next": "leon_ep2_10",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_10": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "คุณหยุดดูสร้อยข้อมือลายดาวเส้นหนึ่ง",
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
    "text": "สร้อยข้อมือพอดีกับข้อมือของคุณเป๊ะ",
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
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าแล้วนำแซนด์วิชกับน้ำผลไม้ออกมาวาง",
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
    "text": "เขายื่นขนมมาป้อนให้คุณตรงหน้า",
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
    "text": "ลมพัดมีกลีบดอกไม้ปลิวมาติดที่ผมของคุณ",
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
    "text": "ลีออนเผลอหลุดปากบอกชอบคุณในงานเทศกาลแล้วหน้าแดงก่ำ คุณจะทำอย่างไร?",
    "charImg": "assets/char_leon_blush.png",
    "choices": [
      {
        "text": "ขยับเข้าไปจับมือเขาแน่นขึ้น 'ได้ยินชัดเจนเลยค่ะ... และฉันก็ดีใจมากที่ได้ยินคำนั้นจากคุณนะคะ'",
        "next": "leon_ep2_good_1",
        "charGain": "leon",
        "points": 25
      },
      {
        "text": "ยิ้มแซวด้วยความเอ็นดู 'พูดออกมาแล้วนะคะคุณอัศวิน หน้าแดงแข่งกับลูกแอปเปิ้ลแล้วนะ'",
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
    "text": "เขาจับมือคุณไว้แล้วแกล้งจุ๊บหลังมือเบาๆ",
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
    "text": "ลีออนขยับถอยหลังพร้อมยกมือยอมแพ้ด้วยรอยยิ้มเขิน 'ขอโทษทีนะ... พออยู่ใกล้เธอแล้วฉันเผลอใจเต้นแรงไปหน่อย ไว้คราวหน้าฉันจะค่อยเป็นค่อยไปนะ'",
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
    "text": "ระหว่างเดินกลับ ทั้งสองคนเงียบไปเล็กน้อย",
    "next": "leon_ep3_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_1": {
    "chapter": "รูทลีออน บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "บ่ายวันต่อมา คุณกับลีออนออกมาเดินเล่นด้วยกันในสวน",
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
    "text": "เซดริกเดินมาพูดจาหยั่งเชิงจนลีออนกุมมือคุณแน่นด้วยความกลัวจะเสียคุณไป คุณจะยืนยันอย่างไร?",
    "charImg": "assets/char_leon.png",
    "char2": "cedric",
    "char2Img": "assets/char_cedric_smile.png",
    "choices": [
      {
        "text": "สบตากับลีออนเพื่อความมั่นใจ 'ฉันเชื่อใจและภูมิใจในตัวคุณลีออนที่สุดค่ะ ไม่ต้องกังวลเลยนะคะ'",
        "next": "leon_ep3_good_1",
        "charGain": "leon",
        "points": 30
      },
      {
        "text": "หันไปบอกทั้งคู่ 'ทั้งท่านดยุกและคุณลีออนต่างก็มีข้อดีทั้งคู่ค่ะ อย่าพูดเปรียบเทียบกันแบบนี้เลยนะ'",
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
    "text": "พอเซดริกเดินจากไป ลีออนก็หันมาเกาหัวแก้เขินอย่างน่ารัก",
    "next": "leon_ep3_after_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep3_bad_1": {
    "chapter": "รูทลีออน บทที่ 3: อาการน้อยใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนคลายกังวลลงเมื่อเห็นคุณช่วยไกล่เกลี่ยอย่างนุ่มนวล 'เข้าใจแล้วล่ะ... แต่ฉันก็ยังหวงเธออยู่ดีนั่นแหละนะ'",
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
    "text": "เมื่อเหลือกันสองคน คุณจึงต้องรีบโอ๋ลีออนที่ทำหน้าจ๋อยอยู่",
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
    "text": "เขาเอนตัวมาซบไหล่คุณเบาๆ เพื่ออ้อนคุณ",
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
    "text": "คุณลูบผมเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มได้",
    "next": "leon_ep4_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_1": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "คืนหนึ่งฝนตกหนักและมีเสียงฟ้าร้องดังไปทั่ว",
    "next": "leon_ep4_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_2": {
    "chapter": "รูทลีออน บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงเดินไปดูที่ห้องของลีออน และเห็นเขายืนมองหน้าต่างอยู่คนเดียว",
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
    "text": "คุณเดินเข้าไปจับมือเขา พบว่ามือของเขาเย็นเฉียบ",
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
    "text": "คุณชวนเขามานั่งข้างเตาผิงเพื่อคุยกัน",
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
    "text": "เขาเริ่มเล่าเรื่องในอดีตที่เก็บไว้ในใจให้คุณฟัง",
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
    "text": "ลีออนเปิดใจเรื่องปมเด็กกำพร้าและความไม่มั่นใจในชาติตระกูล คุณจะให้กำลังใจเขาอย่างไร?",
    "charImg": "assets/char_leon.png",
    "choices": [
      {
        "text": "แตะที่หน้าอกเสื้อของเขา 'คุณค่าของคุณอยู่ที่หัวใจที่กล้าหาญและจิตใจที่งดงามตรงนี้ต่างหากค่ะ ฉันภูมิใจในตัวคุณนะ'",
        "next": "leon_ep4_good_1",
        "charGain": "leon",
        "points": 30
      },
      {
        "text": "ตบไหล่เขาเบาๆ 'อย่าคิดมากเลยนะคะ สำหรับฉัน คุณเป็นอัศวินที่พึ่งพาได้เสมอค่ะ'",
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
    "text": "คืนนั้นคุณกับเขานั่งคุยกันข้างเตาผิงจนเผลอหลับไป",
    "next": "leon_ep5_1",
    "charImg": "assets/char_leon_smile.png"
  },
  "leon_ep4_bad_1": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "leon",
    "char": "leon",
    "bg": "bg-palace",
    "text": "ลีออนพยักหน้ารับด้วยความซาบซึ้ง 'ขอบคุณที่รับฟังเรื่องราวของฉันนะ แค่รู้ว่าเธอพร้อมจะเข้าใจ ฉันก็รู้สึกโล่งใจขึ้นเยอะเลย'",
    "next": "leon_ep4_bad_1_ext_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep4_bad_2": {
    "chapter": "รูทลีออน บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ปล่อยให้เขานั่งอยู่คนเดียว",
    "next": "leon_ep5_1",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_1": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา มีรายงานว่ามอนสเตอร์บุกชายแดน ลีออนต้องนำทัพออกไปปกป้องเมือง",
    "next": "leon_ep5_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep5_2": {
    "chapter": "รูทลีออน บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "เรื่องนี้กลายเป็นประเด็นที่ทุกคนในวังกำลังจับตามอง",
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
    "text": "ลีออนกำลังจะก้าวลงสนามประลองชิงตำแหน่งผู้บัญชาการสูงสุด คุณจะมอบกำลังใจให้เขาอย่างไร?",
    "charImg": "assets/char_leon.png",
    "choices": [
      {
        "text": "ผูกริบบิ้นนำโชคที่ข้อมือเขาพร้อมอวยพร 'นำชัยชนะกลับมาให้ฉันนะคะ ลีออนของฉันเก่งที่สุดอยู่แล้ว!'",
        "next": "leon_ep5_good_1",
        "charGain": "leon",
        "points": 35
      },
      {
        "text": "สบตาเขาอย่างจริงจัง 'ขอให้ปลอดภัยกลับมาเป็นอันดับหนึ่งนะคะ ตำแหน่งไม่สำคัญเท่าชีวิตคุณนะ'",
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
    "text": "ลีออนต่อสู้อย่างกล้าหาญและคว้าชัยชนะกลับมาได้อย่างปลอดภัย เพื่อรักษาสัญญาที่ให้ไว้กับคุณ",
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
    "text": "ตอนนี้ไม่มีอะไรมาขวางความสัมพันธ์ของคุณกับเขาได้อีกแล้ว!",
    "next": "leon_ep6_1",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_ep5_bad_1": {
    "chapter": "รูทลีออน บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-garden",
    "text": "ลีออนยิ้มให้คุณอย่างมั่นใจ 'ไม่ต้องห่วงนะ ผมจะรีบกลับมาหาคุณแน่นอน!'",
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
    "text": "คืนนั้น ลีออนพาคุณมาที่ระเบียงชมดาวที่มีแสงเทียนจุดอยู่",
    "next": "leon_ep6_2",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep6_2": {
    "chapter": "รูทลีออน บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-night",
    "text": "ลมพัดเย็นสบาย ท้องฟ้าคืนนี้เต็มไปด้วยดวงดาว",
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
    "text": "ลีออนคุกเข่าขอแต่งงานพร้อมแหวนตราประจำตำแหน่ง คุณจะตอบรับความรักของเขาอย่างไร?",
    "charImg": "assets/char_leon_blush.png",
    "choices": [
      {
        "text": "ประคองให้เขาลุกขึ้นแล้วกอดเขาแน่น 'ตกลงค่ะลีออน! ฉันจะอยู่เคียงข้างและเป็นกำลังใจให้คุณตลอดชีวิตเลย!'",
        "next": "leon_true_ep_1",
        "charGain": "leon",
        "points": 50
      },
      {
        "text": "ช่วยพยุงเขาลุกขึ้น 'คุณเป็นอัศวินที่ดีที่สุดในชีวิตฉันนะคะ... แต่ฉันอยากให้เราค่อยๆ ดูกันไปก่อนได้ไหมคะ'",
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
    "text": "เขาประคองใบหน้าคุณขึ้นมาสบตา แล้วโน้มตัวลงจูบคุณใต้แสงจันทร์",
    "next": "leon_true_ep_4",
    "charImg": "assets/char_leon_blush.png"
  },
  "leon_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: ยอดดวงใจแห่งอัศวินสุริยัน",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-palace",
    "text": "แสงดาวบนฟ้าส่องประกายสว่างไสวไปพร้อมกับรอยยิ้มของคุณทั้งสองคน",
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
    "text": "คุณเดินไปกับเคลเพื่อมุ่งหน้าไปยังฐานลับบนหอนาฬิกา",
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
    "text": "ภายในฐานลับบนหอนาฬิกาถูกจัดเตรียมไว้อย่างดีและดูอบอุ่น",
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
    "text": "ในห้องมีทั้งดอกไม้ หมอนนุ่มๆ และหนังสือที่คุณชอบวางเตรียมไว้",
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
    "text": "คุณยิ้มขอบคุณในความใส่ใจ ก่อนที่เขาจะพาคุณไปนั่งพักที่โซฟา",
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
    "text": "สักพัก เคลก็นำชาร้อนกับขนมมาเสิร์ฟให้คุณ",
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
    "text": "ขนมอร่อยมากจนคุณเผลอยิ้มออกมา",
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
    "text": "สัมผัสจากมือเขาทำให้คุณรู้สึกใจเต้นขึ้นมา",
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
    "text": "เขาขยับเข้ามานั่งข้างๆ คุณจนไหล่ชนกัน",
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
    "text": "เขามองหน้าคุณตรงๆ เพื่อรอฟังคำตอบ",
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
    "text": "ลมพัดเข้ามาเบาๆ ทางหน้าต่าง มีกลิ่นหอมจางๆ ลอยมาแตะจมูก",
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
    "text": "เคลแกล้งถามว่าทำไมถึงกล้าตามจอมโจรอย่างเขามาถึงฐานลับ คุณจะตอบเขาอย่างไร?",
    "charImg": "assets/char_kael_blush.png",
    "choices": [
      {
        "text": "ยิ้มท้าทายอย่างรู้ทัน 'เพราะฉันรู้ว่าใต้ความกวนของคุณ มีความใส่ใจและจริงใจซ่อนอยู่เต็มไปหมดน่ะสิ'",
        "next": "kael_ep1_good_1",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "ยักไหล่ 'ก็ที่นี่ดูน่าสนุกและอิสระกว่าในวังนี่นา ใครจะไม่อยากมาล่ะ'",
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
    "text": "เขาดึงคุณเข้าไปกอดไว้ ได้ยินเสียงหัวใจเขาเต้นชัดเจน",
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
    "text": "คุณทั้งสองคนนั่งคุยกันเพลินจนถึงช่วงเย็น",
    "next": "kael_ep2_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep1_bad_1": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลยิ้มบางๆ อย่างเข้าใจ 'ไม่เป็นไรหรอก ค่อยๆ เรียนรู้กันไปนะ แค่เธอยอมเปิดใจมาอยู่ที่นี่ ฉันก็ดีใจมากแล้ว'",
    "next": "kael_ep1_bad_1_ext_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep1_bad_2": {
    "chapter": "รูทเคล บทที่ 1: ความน้อยใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "เขาพยักหน้ารับอย่างเงียบๆ แล้วเดินไปเก็บถ้วยชา",
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
    "text": "บรรยากาศในห้องเงียบลงเล็กน้อย ก่อนจะหมดวันแรก",
    "next": "kael_ep2_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_1": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เช้าวันต่อมา เคลในชุดสบายๆ มารอรับคุณที่หน้าห้อง",
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
    "text": "ได้ยินเขาชวนไปเดทแบบนี้ ทำเอาคุณแอบเขินขึ้นมาทันที",
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
    "bg": "bg-rooftop",
    "text": "เขาพาคุณปีนขึ้นไปบนหอนาฬิกาเพื่อดูวิวเมืองหลวงจากมุมสูง",
    "next": "kael_ep2_6",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_6": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-rooftop",
    "text": "บนยอดหอนาฬิการับลมเย็นสบาย มองเห็นหลังคาบ้านเรือนและท้องฟ้ากว้างใหญ่",
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
    "text": "ระหว่างเดินเล่น คุณสังเกตเห็นซุ้มขายเครื่องประดับริมทาง",
    "next": "kael_ep2_10",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep2_10": {
    "chapter": "รูทเคล บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "คุณหยุดดูสร้อยข้อมือลายดาวเส้นหนึ่ง",
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
    "text": "สร้อยข้อมือพอดีกับข้อมือของคุณเป๊ะ",
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
    "text": "ใต้ร่มไม้ใหญ่ เขาปูผ้าแล้วนำแซนด์วิชกับน้ำผลไม้ออกมาวาง",
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
    "text": "เขายื่นขนมมาป้อนให้คุณตรงหน้า",
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
    "text": "ลมพัดมีกลีบดอกไม้ปลิวมาติดที่ผมของคุณ",
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
    "text": "เคลบอกคำอธิษฐานโคมลอยว่าอยากให้คุณตกหลุมรักเขาจนไปไหนไม่รอด คุณจะตอบโต้อย่างไร?",
    "charImg": "assets/char_kael_blush.png",
    "choices": [
      {
        "text": "มองหน้าเขาตรงๆ ด้วยรอยยิ้ม 'ดูท่าคำอธิษฐานของนายจะเริ่มได้ผลแล้วล่ะ... รับผิดชอบด้วยนะเคล'",
        "next": "kael_ep2_good_1",
        "charGain": "kael",
        "points": 25
      },
      {
        "text": "แกล้งปัดแก้มแก้เขิน 'อธิษฐานเอาแต่ใจตัวเองชะมัดเลยนะยัยจอมโจรขี้โกง!'",
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
    "text": "เขาจับมือคุณไว้แล้วแกล้งจุ๊บหลังมือเบาๆ",
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
    "text": "เคลขยับถอยหลังพร้อมยกมือยอมแพ้ด้วยรอยยิ้มเขิน 'ขอโทษทีนะ... พออยู่ใกล้เธอแล้วฉันเผลอใจเต้นแรงไปหน่อย ไว้คราวหน้าฉันจะค่อยเป็นค่อยไปนะ'",
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
    "text": "ระหว่างเดินกลับ ทั้งสองคนเงียบไปเล็กน้อย",
    "next": "kael_ep3_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_1": {
    "chapter": "รูทเคล บทที่ 3: ศัตรูหัวใจกับคนขี้หวง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "บ่ายวันต่อมา คุณกับเคลออกมาเดินเล่นด้วยกันในสวน",
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
    "text": "ลูเชียนตามมาเจอจนเคลรีบดึงคุณเข้ามากอดแน่นด้วยความหึงหวง คุณจะพูดอย่างไร?",
    "charImg": "assets/char_kael.png",
    "char2": "lucian",
    "char2Img": "assets/char_lucian_smile.png",
    "choices": [
      {
        "text": "ซบไหล่เคลเพื่อแสดงจุดยืน 'ขอบคุณที่เป็นห่วงนะคะคุณลูเชียน แต่คืนนี้ฉันเลือกที่จะอยู่กับเคลค่ะ'",
        "next": "kael_ep3_good_1",
        "charGain": "kael",
        "points": 30
      },
      {
        "text": "ดึงแขนเสื้อทั้งคู่ 'อย่าเพิ่งมีเรื่องกันตรงนี้นะคะ ลูเชียนคะ ฉันสบายดีจริงๆ เคลดูแลดีมาก ไม่ต้องห่วงนะ'",
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
    "text": "พอเซดริกเดินจากไป เคลก็หัวเราะเบาๆ แล้วหันมายักคิ้วให้คุณ",
    "next": "kael_ep3_after_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep3_bad_1": {
    "chapter": "รูทเคล บทที่ 3: อาการน้อยใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลคลายกังวลลงเมื่อเห็นคุณช่วยไกล่เกลี่ยอย่างนุ่มนวล 'เข้าใจแล้วล่ะ... แต่ฉันก็ยังหวงเธออยู่ดีนั่นแหละนะ'",
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
    "text": "เมื่อเหลือกันสองคน คุณจึงต้องรีบดึงแขนเสื้อเคลที่กำลังทำหน้าบอกบุญไม่รับ",
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
    "text": "เขาเอนตัวมาซบไหล่คุณเบาๆ เพื่ออ้อนคุณ",
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
    "text": "คุณลูบผมเขาเบาๆ จนเขาอารมณ์ดีขึ้นและยิ้มได้",
    "next": "kael_ep4_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_1": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "คืนหนึ่งฝนตกหนักและมีเสียงฟ้าร้องดังไปทั่ว",
    "next": "kael_ep4_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_2": {
    "chapter": "รูทเคล บทที่ 4: ความลับในคืนฝนพรำ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ด้วยความเป็นห่วง คุณจึงเดินไปดูที่ห้องของเคล และเห็นเขายืนมองหน้าต่างอยู่คนเดียว",
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
    "text": "คุณเดินเข้าไปจับมือเขา พบว่ามือของเขาเย็นเฉียบ",
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
    "text": "คุณชวนเขามานั่งข้างเตาผิงเพื่อคุยกัน",
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
    "text": "เขาเริ่มเล่าเรื่องในอดีตที่เก็บไว้ในใจให้คุณฟัง",
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
    "text": "เคลเล่าความจริงเรื่องรอยสักคำสาปที่ยอมรับแทนเด็กๆ ในอดีต คุณจะสัมผัสใจเขาอย่างไร?",
    "charImg": "assets/char_kael.png",
    "choices": [
      {
        "text": "เอื้อมมือไปแตะที่รอยสักอย่างแผ่วเบา 'สำหรับฉัน รอยสักนี้คือเครื่องหมายของหัวใจที่กล้าหาญและอ่อนโยนที่สุดเลยนะ'",
        "next": "kael_ep4_good_1",
        "charGain": "kael",
        "points": 30
      },
      {
        "text": "มองเขาด้วยความซาบซึ้ง 'นายเป็นคนดีกว่าที่ใครๆ คิดไว้เยอะเลยนะเคล... ขอบคุณที่เสียสละเพื่อคนอื่นนะ'",
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
    "text": "คืนนั้นคุณกับเขานั่งคุยกันข้างเตาผิงจนเผลอหลับไป",
    "next": "kael_ep5_1",
    "charImg": "assets/char_kael_smile.png"
  },
  "kael_ep4_bad_1": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "kael",
    "char": "kael",
    "bg": "bg-night",
    "text": "เคลพยักหน้ารับด้วยความซาบซึ้ง 'ขอบคุณที่รับฟังเรื่องราวของฉันนะ แค่รู้ว่าเธอพร้อมจะเข้าใจ ฉันก็รู้สึกโล่งใจขึ้นเยอะเลย'",
    "next": "kael_ep4_bad_1_ext_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep4_bad_2": {
    "chapter": "รูทเคล บทที่ 4: บาดแผลในใจ",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-palace",
    "text": "คุณเดินกลับห้องพักไป ปล่อยให้เขานั่งอยู่คนเดียว",
    "next": "kael_ep5_1",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_1": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ไม่กี่วันต่อมา คำสาปเงาในตัวเคลเริ่มกำเริบขึ้น จนเขากลัวว่าจะทำร้ายคุณ",
    "next": "kael_ep5_2",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_2": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เรื่องนี้กลายเป็นประเด็นที่ทุกคนในวังกำลังจับตามอง",
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
    "text": "คำสาปในตัวเคลกำเริบหนักและทหารเข้าล้อม คุณจะร่วมต่อสู้ไปกับเขาอย่างไร?",
    "charImg": "assets/char_kael.png",
    "choices": [
      {
        "text": "กอดร่างเขาไว้และปลดปล่อยแสงดาวสูงสุด 'ฉันจะไม่ยอมให้ใครมาทำร้ายนายเด็ดขาด คำสาปนี้เราจะลบล้างมันไปด้วยกัน!'",
        "next": "kael_ep5_good_1",
        "charGain": "kael",
        "points": 35
      },
      {
        "text": "ยืนขวางหน้าพวกทหารไว้ 'หยุดเดี๋ยวนี้นะคะ! คนคนนี้คือผู้ช่วยชีวิตชาวเมืองไว้ ฟังความจริงก่อนสิ!'",
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
    "text": "คุณใช้พลังแสงดาวช่วยชำระล้างคำสาปเงาในตัวเขา ทำให้เคลเป็นอิสระจากความมืดได้สำเร็จ!",
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
    "text": "ตอนนี้ไม่มีอะไรมาขวางความสัมพันธ์ของคุณกับเขาได้อีกแล้ว!",
    "next": "kael_ep6_1",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_ep5_bad_1": {
    "chapter": "รูทเคล บทที่ 5: การปกป้องเพียงลำพัง",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "เคลกัดฟันจับมือคุณไว้ 'ขอแค่อยู่ใกล้เธอ ฉันจะไม่ยอมแพ้คำสาปนี้เด็ดขาด'",
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
    "text": "คืนนั้น เคลพาคุณมาที่ระเบียงชมดาวที่มีแสงเทียนจุดอยู่",
    "next": "kael_ep6_2",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep6_2": {
    "chapter": "รูทเคล บทส่งท้าย: คำสารภาพรักใต้แสงดาว",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "ลมพัดเย็นสบาย ท้องฟ้าคืนนี้เต็มไปด้วยดวงดาว",
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
    "text": "เคลสวมแหวนเงินที่ทำเองกับมือและชวนคุณออกไปท่องโลกกว้างด้วยกันตลอดชีวิต คุณจะให้คำตอบเขาอย่างไร?",
    "charImg": "assets/char_kael_blush.png",
    "choices": [
      {
        "text": "ดึงเขาเข้ามาจูบด้วยความรัก 'ไปสิเคล! โลกใบนี้กว้างใหญ่แค่ไหน ฉันก็จะไปกับนายทุกที่ตลอดไปเลย!'",
        "next": "kael_true_ep_1",
        "charGain": "kael",
        "points": 50
      },
      {
        "text": "จับมือเขาไว้ด้วยรอยยิ้ม 'ฉันรักอิสรภาพที่นายมอบให้นะเคล... แต่ขอเวลาฉันเตรียมใจสำหรับการเดินทางครั้งนี้หน่อยนะ'",
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
    "text": "เขาประคองใบหน้าคุณขึ้นมาสบตา แล้วโน้มตัวลงจูบคุณใต้แสงจันทร์",
    "next": "kael_true_ep_4",
    "charImg": "assets/char_kael_blush.png"
  },
  "kael_true_ep_4": {
    "chapter": "ตอนจบสมบูรณ์: คู่หูจอมโจรใต้เงาจันทร์",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-night",
    "text": "แสงดาวบนฟ้าส่องประกายสว่างไสวไปพร้อมกับรอยยิ้มของคุณทั้งสองคน",
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
    "text": "คุณตัดสินใจใช้ชีวิตอย่างอิสระในเอลีเซียม โดยมีทั้งสี่คนคอยเป็นเพื่อนที่ดีและอยู่เคียงข้างคุณเสมอ!",
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
    "text": "คุณหยิบหนังสือเล่มหนึ่งขึ้นมาดู พบว่ามีที่คั่นหนังสือรูปกุหลาบดำคั่นอยู่",
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
    "text": "คุณแอบยิ้มขำที่เห็นท่านดยุกผู้เคร่งขรึมเขินเพราะหนังสือบทกวี",
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
    "text": "เขาเดินเข้ามาใกล้แล้วแกล้งยีหัวคุณเบาๆ",
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
    "text": "แม้จะทำท่าเหมือนดุ แต่สายตาของเขากลับดูใจดีมาก",
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
    "text": "คำพูดของเซดริกทำให้คุณรู้สึกสบายใจขึ้นมาก",
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
    "text": "เขารินชาเติมให้คุณ พร้อมกับเลื่อนจานขนมมาไว้ใกล้ๆ",
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
    "text": "คุณบ่นอุบอิบว่าไม่ได้กินน้อยสักหน่อย ทำเอาเซดริกหัวเราะอย่างอารมณ์ดี",
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
    "text": "คุณสองคนนั่งคุยเรื่องทั่วไปกันอย่างเพลิดเพลิน",
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
    "text": "คุณก้มลงดมกลิ่นหอมของดอกกุหลาบดำ",
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
    "text": "เขาตัดดอกกุหลาบดำดอกที่สวยที่สุด แล้วใช้เวทมนตร์ลบหนามออกจนหมด",
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
    "text": "คุณรับดอกกุหลาบดำมาถือไว้ กลิ่นหอมเหมือนกลิ่นตัวของเซดริกเป๊ะ",
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
    "text": "เมื่อเดินมาถึงลานน้ำพุ ละอองน้ำกระทบแดดเกิดเป็นรุ้งกินน้ำสายเล็กๆ",
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
    "text": "คุณชี้ให้เขาดูรุ้งกินน้ำด้วยความตื่นเต้น",
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
    "text": "เขากุมมือคุณเดินเล่นรอบน้ำพุอย่างสบายอารมณ์",
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
    "text": "คุณพยักหน้ารับด้วยความดีใจที่เขาตามใจขนาดนี้",
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
    "text": "ทั้งสองคนใช้เวลาช่วงบ่ายร่วมกันอย่างมีความสุข",
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
    "text": "คุณแอบยิ้มพลางจับมือเซดริกเบาๆ เพื่อให้เขาใจเย็นลง",
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
    "text": "เขาพาคุณไปนั่งพักที่ศาลาในสวน แล้วขยับมานั่งชิดข้างๆ",
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
    "text": "พอคุณรับปาก สีหน้าเคร่งขรึมของเซดริกก็ค่อยๆ คลายลง",
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
    "text": "เขาเอนตัวมาซบไหล่คุณเบาๆ อย่างอ้อนๆ มีแค่คุณคนเดียวที่ได้เห็นมุมนี้ของเขา",
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
    "text": "คุณปล่อยให้เขาพิงไหล่เงียบๆ พลางมองหน้าเขาตอนผ่อนคลาย",
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
    "text": "เขายกมือขึ้นลูบแก้มคุณเบาๆ ด้วยสายตาขอบคุณ",
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
    "text": "คุณขยับเข้าไปกอดเขาไว้ เพื่อให้ความอบอุ่นแก่กัน",
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
    "text": "เขาดึงผ้าห่มมาคลุมไหล่ให้คุณอย่างใส่ใจ",
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
    "text": "ท่ามกลางเสียงฝน คุณรู้สึกปลอดภัยเมื่ออยู่ข้างๆ เซดริก",
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
    "bg": "bg-council",
    "text": "เมื่อเดินเข้าห้องประชุม ทุกสายตาต่างจับจ้องมาที่คุณกับเซดริก",
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
    "bg": "bg-council",
    "text": "ไม่มีขุนนางคนไหนกล้าคัดค้านสายตาที่จริงจังของเซดริก",
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
    "bg": "bg-council",
    "text": "คำพูดหนักแน่นของเซดริกทำให้คุณรู้สึกมั่นใจในตัวเขามาก",
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
    "bg": "bg-council",
    "text": "เหล่าขุนนางต่างยอมรับการตัดสินใจของเซดริกในที่สุด",
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
    "text": "คุณหัวเราะให้กับความเตรียมพร้อมล่วงหน้าของเขา",
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
    "text": "คุณซบลงกับอกเขา พลางมองดูดวงดาวบนท้องฟ้าไปด้วยกัน",
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
    "text": "คุณลองแตะลูกแก้ว ทันใดนั้นมีแสงรูปกลุ่มดาวส่องประกายขึ้นมารอบตัวคุณ",
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
    "text": "ลูเชียนขยับมายืนข้างหลัง แล้ววางมือทับลงบนมือของคุณ",
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
    "text": "กลิ่นหอมจางๆ จากเสื้อคลุมของลูเชียนทำให้คุณรู้สึกผ่อนคลาย",
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
    "text": "คุณแซวเขาขำๆ จนลูเชียนแอบแก้มแดงขึ้นมา",
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
    "text": "เขารินชาดอกไม้หอมๆ ให้คุณ พร้อมกับเค้กดวงดาวนุ่มๆ",
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
    "text": "คุณชิมเค้กพลางคุยกับลูเชียนอย่างเป็นกันเอง",
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
    "text": "สายตาขี้เล่นของลูเชียนทำเอาคุณแอบเขินตั้งแต่เริ่มวันแรก",
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
    "text": "คุณยิ้มรับคำพูดของเขาด้วยความสบายใจ",
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
    "bg": "bg-lake",
    "text": "ลูเชียนจับมือคุณก้าวลงเรือ ก่อนที่เรือจะค่อยๆ เคลื่อนออกไปกลางน้ำ",
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
    "bg": "bg-lake",
    "text": "กลีบดอกไม้ลอยมาตามผิวน้ำ ลูเชียนก้มลงช้อนขึ้นมาแล้วยื่นให้คุณ",
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
    "bg": "bg-lake",
    "text": "คุณสบตากับลูเชียนที่มองคุณด้วยรอยยิ้มอบอุ่น",
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
    "bg": "bg-lake",
    "text": "เขาขยับมานั่งข้างๆ คุณบนเรือ แล้วโอบไหล่คุณไว้กันโคลงเคลง",
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
    "bg": "bg-lake",
    "text": "ฝูงปลาตัวเล็กๆ แหวกว่ายอยู่รอบเรืออย่างเพลินตา",
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
    "bg": "bg-lake",
    "text": "คุณหัวเราะเบาๆ กับมุกตลกน่ารักๆ ของลูเชียน",
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
    "bg": "bg-lake",
    "text": "เมื่อเรือเทียบฝั่งเกาะกลางทะเลสาบ ลูเชียนก็จูงมือคุณลงไปเดินเล่น",
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
    "bg": "bg-lake",
    "text": "การได้เดินจับมือกับลูเชียนทำให้คุณรู้สึกผ่อนคลายมาก",
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
    "text": "คุณแอบยิ้มพลางแตะแขนลูเชียนเบาๆ เพื่อให้เขาสบายใจ",
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
    "text": "เขาชวนคุณมานั่งพักที่ม้านั่งใต้ร่มไม้ แล้วขยับมานั่งชิดข้างๆ",
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
    "text": "พอคุณพยักหน้า รอยยิ้มสดใสของลูเชียนก็กลับมาทันที",
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
    "text": "เขาเอนตัวมาพิงไหล่คุณอย่างคุ้นเคย ทำเอาคุณแอบยิ้มตาม",
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
    "text": "คุณปล่อยให้เขาพิงไหล่เงียบๆ พลางฟังเสียงลมพัดใบไม้",
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
    "text": "เขายกมือขึ้นลูบผมคุณเบาๆ ด้วยแววตาที่เต็มไปด้วยความซาบซึ้ง",
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
    "text": "คุณขยับเข้าไปกอดปลอบเขาไว้",
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
    "text": "เขาดึงผ้าห่มมาคลุมให้คุณอย่างอบอุ่น",
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
    "text": "ในคืนฝนตก การมีลูเชียนอยู่ข้างๆ ทำให้คุณรู้สึกอุ่นใจ",
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
    "text": "เมื่อเดินเข้าสู่วิหาร สายตาของนักบวชทุกคนต่างมองมาที่คุณกับลูเชียน",
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
    "text": "พลังเวทแสงดาวของลูเชียนทำให้ทุกคนในวิหารต้องยอมรับในปาฏิหาริย์",
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
    "text": "กฎโบราณที่ห้ามมหาปุโรหิตมีความรักถูกยกเลิกในที่สุด!",
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
    "text": "ทุกคนในวิหารต่างโค้งคำนับยินดีให้กับความรักของคุณทั้งสองคน",
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
    "text": "แหวนคริสตัลส่องประกายสวยงามใต้แสงจันทร์",
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
    "text": "เขาโอบเอวคุณเข้ามาใกล้ แล้วก้มลงซบแก้มคุณอย่างอ้อนๆ",
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
    "text": "คืนนั้นเต็มไปด้วยรอยยิ้มและความทรงจำดีๆ ที่ไม่มีวันลืม",
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
    "text": "คุณนั่งลงบนม้านั่งไม้ที่มีเบาะนุ่มๆ วางเตรียมไว้ให้",
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
    "text": "คุณดึงชายเสื้อลีออนให้นั่งลงข้างๆ ไม่ต้องคอยยืนบริการตลอดก็ได้",
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
    "text": "ลูกน้องอัศวินที่แอบดูอยู่พากันส่งเสียงเชียร์หัวหน้าตัวเอง",
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
    "text": "คุณหัวเราะอย่างเอ็นดูในความซื่อและจริงใจของลีออน",
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
    "text": "ลีออนยกถาดขนมปังอบใหม่ๆ และนมร้อนมาเสิร์ฟให้คุณด้วยรอยยิ้ม",
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
    "text": "คุณทานขนมปังอบหอมๆ พลางคุยกับลีออนอย่างสนุกสนาน",
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
    "text": "ความกระตือรือร้นและจริงใจของลีออนทำให้คุณรู้สึกผ่อนคลาย",
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
    "text": "คุณพยักหน้ารับคำชวนของเขาด้วยความตื่นเต้น",
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
    "text": "ลีออนจับมือคุณไว้ด้วยมือที่อบอุ่น",
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
    "text": "ลีออนหยิบคันธนูขึ้นมายิงเข้ากลางเป้าอย่างแม่นยำทั้งสามดอก",
    "next": "leon_ep2_sub_7",
    "charImg": "assets/char_leon.png"
  },
  "leon_ep2_sub_7": {
    "chapter": "รูทลีออน บทที่ 2: เดทแรกสุดพิเศษ",
    "speaker": "narrator",
    "char": "leon",
    "bg": "bg-training",
    "text": "ลีออนหยิบดาบไม้มาสอนท่าป้องกันตัวง่ายๆ ให้คุณอย่างตั้งใจ",
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
    "bg": "bg-training",
    "text": "เขาจับมือคุณช่วยสอนท่าฟันดาบอย่างใกล้ชิด ทำเอาคุณแอบเขินขึ้นมา",
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
    "bg": "bg-training",
    "text": "พอคุณทำตามได้ ลีออนก็ปรบมือเชียร์คุณยกใหญ่",
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
    "bg": "bg-training",
    "text": "คุณหัวเราะให้กับความน่ารักและเป็นกันเองของเขา",
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
    "bg": "bg-training",
    "text": "หลังจากซ้อมเสร็จ ลีออนก็พาคุณมานั่งพักดื่มน้ำเย็นๆ ใต้ร่มไม้",
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
    "bg": "bg-training",
    "text": "ลีออนคอยพัดและดูแลคุณอย่างดีไม่ห่าง",
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
    "text": "คุณยิ้มพลางแตะมือลีออนเพื่อให้เขาสบายใจขึ้น",
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
    "text": "เขาพาคุณไปนั่งพักที่ม้านั่งริมลานกว้าง แล้วนั่งลงข้างๆ",
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
    "text": "เขาดีใจจนเผลอดึงคุณมาหมุนตัวไปรอบๆ จนคุณอดหัวเราะไม่ได้",
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
    "text": "ท่าทางหวงแบบซื่อๆ ของลีออนทำให้คุณยิ่งเอ็นดูเขา",
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
    "text": "คุณสองคนเดินจับมือกันกลับอย่างอารมณ์ดี",
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
    "text": "เขามองคุณด้วยสายตาที่เต็มไปด้วยความซาบซึ้งใจ",
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
    "text": "คุณลูบผมสีทองของเขาเบาๆ อย่างปลอบโยน",
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
    "text": "เขากระชับผ้าห่มคลุมไหล่ให้คุณอย่างอบอุ่น",
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
    "text": "ความซื่อตรงของลีออนทำให้คุณรู้สึกอบอุ่นหัวใจเสมอ",
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
    "text": "คุณผูกริบบิ้นสีทองเข้าที่ข้อมือของลีออน เพื่ออวยพรให้เขาปลอดภัย",
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
    "text": "ในจังหวะสุดท้าย ลีออนปัดดาบของคู่ต่อสู้จนหลุดมือและคว้าชัยชนะมาได้!",
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
    "text": "ลีออนชูดาบขึ้นฟ้าพร้อมเสียงโห่ร้องยินดีของเหล่าอัศวิน",
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
    "text": "กองอัศวินทุกคนต่างยอมรับคุณเป็นคนสำคัญของท่านหัวหน้าอัศวิน",
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
    "text": "เขาสวมแหวนทองประดับเพชรลงบนนิ้วนางข้างซ้ายของคุณอย่างเบามือ",
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
    "text": "คุณหัวเราะให้กับความพยายามอย่างตั้งใจของเขา ก่อนจะกอดเขาไว้",
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
    "text": "ลีออนยิ้มให้คุณอย่างอบอุ่นและก้มลงจูบคุณอีกครั้ง",
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
    "text": "คุณหยิบกล่องดนตรีโบราณขึ้นมาดู มันส่งเสียงเพลงเบาๆ ฟังสบายหู",
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
    "text": "คุณแอบขำกับของสะสมแปลกๆ ในห้องของเคล",
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
    "text": "เขาเดินเข้ามายิ้มกวนๆ แล้วเคาะหน้าผากคุณเบาๆ",
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
    "text": "ถึงจะชอบกวนประสาท แต่แววตาของเขากลับดูห่วงใยคุณมาก",
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
    "text": "เคลชงกาแฟหอมกรุ่นมาให้คุณ พร้อมพายผลไม้ชิ้นโต",
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
    "text": "คุณนั่งกินพายพลางฟังเคลเล่าเรื่องสนุกๆ ในเมืองหลวง",
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
    "text": "รอยยิ้มขี้เล่นของเคลทำให้บรรยากาศดูเป็นกันเองมาก",
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
    "text": "คุณยิ้มรับคำท้าของเขาอย่างสนุกสนาน",
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
    "bg": "bg-rooftop",
    "text": "คุณก้มมองวิวเมืองหลวงด้านล่าง มีผู้คนเดินขวักไขว่เหมือนมดตัวเล็กๆ",
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
    "bg": "bg-rooftop",
    "text": "เคลชี้ให้คุณดูจุดต่างๆ ในเมืองหลวงอย่างคุ้นเคย",
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
    "bg": "bg-rooftop",
    "text": "คุณทึ่งในความรอบรู้เรื่องตรอกซอกซอยของเขา",
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
    "bg": "bg-rooftop",
    "text": "ลมพัดแรงขึ้น เคลจึงขยับมายืนบังลมให้คุณทางด้านหลัง",
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
    "bg": "bg-rooftop",
    "text": "คุณหันไปสบตากับเขาในระยะประชิด ทำเอาทั้งคู่ชะงักไปครู่หนึ่ง",
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
    "bg": "bg-rooftop",
    "text": "เขาเกาท้ายทอยแก้เขินแล้วชวนคุณลงไปหาของกินอร่อยๆ ในตลาด",
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
    "text": "คุณหัวเราะให้กับท่าทางเขินที่หาดูได้ยากของเขา",
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
    "text": "ทั้งคู่เดินเล่นในตลาดจนถึงช่วงเย็นอย่างสนุกสนาน",
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
    "text": "คุณดึงชายเสื้อเคลเบาๆ เพื่อบอกให้เขาหยุดแกล้งคนอื่น",
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
    "text": "เขาพาคุณกระโดดขึ้นไปนั่งบนแนวกำแพงหิน แล้วนั่งลงข้างๆ",
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
    "text": "พอคุณหันมาดุ เคลก็หัวเราะร่าอย่างชอบใจ",
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
    "text": "ความกวนแบบน่ารักของเคลทำให้คุณโกรธเขาไม่ลงสักที",
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
    "text": "คุณสองคนนั่งรับลมคุยเล่นกันจนลืมเวลา",
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
    "text": "เขามองคุณด้วยสายตาที่อ่อนโยนลงกว่าทุกที",
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
    "text": "คุณขยับเข้าไปกุมมือเขาไว้ เพื่อบอกว่าเขาไม่ได้อยู่คนเดียว",
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
    "text": "เขาดึงผ้าห่มมาคลุมตัวคุณไว้อย่างใส่ใจ",
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
    "text": "ถึงข้างนอกจะมีพายุ แต่ข้างในกลับอบอุ่นเมื่อมีเคลอยู่ใกล้ๆ",
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
    "text": "คุณใช้พลังแสงดาวช่วยชำระล้างไอความมืดออกจากรอยสักที่คอของเขาจนจางลง!",
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
    "text": "เขาดึงคุณเข้าไปกอดแน่นด้วยความดีใจและขอบคุณจากใจจริง",
    "next": "kael_ep5_sub_5",
    "charImg": "assets/char_kael.png"
  },
  "kael_ep5_sub_5": {
    "chapter": "รูทเคล บทที่ 5: บททดสอบครั้งสุดท้าย",
    "speaker": "narrator",
    "char": "kael",
    "bg": "bg-garden",
    "text": "ตอนนี้คำสาปที่ทรมานเขามาหลายปีได้หายไปจนหมดแล้ว!",
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
    "text": "รอยยิ้มอย่างโล่งใจของเคลเป็นรอยยิ้มที่สดใสที่สุดที่คุณเคยเห็น",
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
    "text": "เขาจับมือคุณไว้แน่น พร้อมที่จะก้าวเดินต่อไปด้วยกัน",
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
    "text": "คุณมองแหวนเงินที่มีร่องรอยการทำขึ้นด้วยมืออย่างตั้งใจของเคลด้วยความซาบซึ้งใจ",
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
    "text": "เขาโอบเอวคุณเข้ามาชิดแล้วก้มลงหอมแก้มคุณเบาๆ",
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
    "text": "คุณกับเคลจับมือกัน พร้อมออกเดินทางผจญภัยครั้งใหม่ไปด้วยกัน",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "เวลาอยู่กันสองคน เซดริกดูอ่อนโยนและใจดีขึ้นมาก",
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
    "text": "เขาเอื้อมมือมาช่วยจัดผมที่ปรกหน้าของคุณให้เบาๆ",
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
    "text": "คุณแอบยิ้มขำเมื่อเห็นเซดริกพยายามเก๊กขรึมแก้เขิน",
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
    "text": "คุณพยักหน้ารับด้วยความสบายใจ",
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
    "text": "ละอองแสงเวทมนตร์ลอยวนรอบนิ้วมือของเขาเบาๆ",
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
    "text": "ลูเชียนก้มลงมากระซิบข้างหูคุณเบาๆ",
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
    "text": "คุณหัวเราะให้กับความขี้เล่นของลูเชียน",
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
    "text": "รอยยิ้มของลูเชียนทำเอาคุณแอบเขินขึ้นมา",
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
    "text": "ลีออนรีบขยับมายืนข้างๆ คุณด้วยท่าทางประหม่าเล็กน้อย",
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
    "text": "ลีออนหยิบพัดอันเล็กออกมาช่วยพัดให้คุณอย่างใส่ใจ",
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
    "text": "คุณรับลูกอมจากมือลีออนมาชิม รสชาติหวานอร่อยดี",
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
    "text": "ความเป็นกันเองและจริงใจของลีออนทำให้คุณยิ้มได้เสมอ",
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
    "text": "เคลเดินเข้ามาใกล้แล้วก้มมองสบตาคุณตรงๆ",
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
    "text": "เขาดีดนิ้วเสกดอกกุหลาบแดงขึ้นมาแล้วยื่นให้คุณ",
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
    "text": "คุณรับดอกกุหลาบมาไว้พลางอมยิ้มกับท่าทางภูมิใจของเขา",
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
    "text": "แม้จะชอบกวนประสาท แต่เคลก็คอยดูแลคุณดีเสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "เสียงระฆังดังขึ้นพร้อมกับกลีบดอกไม้ที่โปรยปรายลงมาตลอดทางเดิน",
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
    "text": "เพื่อนๆ อีกสามคนมาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคน",
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
    "text": "เขาโน้มตัวลงมาจูบคุณเบาๆ เพื่อเริ่มต้นชีวิตคู่ไปด้วยกัน",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "เสียงระฆังดังขึ้นพร้อมกับกลีบดอกไม้ที่โปรยปรายลงมาตลอดทางเดิน",
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
    "text": "เพื่อนๆ อีกสามคนมาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคน",
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
    "text": "เขาโน้มตัวลงมาจูบคุณเบาๆ เพื่อเริ่มต้นชีวิตคู่ไปด้วยกัน",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "เสียงระฆังดังขึ้นพร้อมกับกลีบดอกไม้ที่โปรยปรายลงมาตลอดทางเดิน",
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
    "text": "เพื่อนๆ อีกสามคนมาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคน",
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
    "text": "เขาโน้มตัวลงมาจูบคุณเบาๆ เพื่อเริ่มต้นชีวิตคู่ไปด้วยกัน",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "คุณกับเขานั่งคุยกันอย่างมีความสุขจนไม่อยากให้หมดวัน",
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
    "text": "เขาจับมือคุณแล้วเดินไปด้วยกันช้าๆ",
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
    "text": "คุณรู้สึกว่าทั้งสองคนเริ่มสนิทกันมากขึ้นกว่าเดิม",
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
    "text": "ถึงจะเสียดาย แต่เขาก็ยังคอยดูแลคุณอยู่ใกล้ๆ เสมอ",
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
    "text": "เสียงระฆังดังขึ้นพร้อมกับกลีบดอกไม้ที่โปรยปรายลงมาตลอดทางเดิน",
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
    "text": "เพื่อนๆ อีกสามคนมาร่วมแสดงความยินดีและอวยพรให้คุณทั้งสองคน",
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
    "text": "เขาโน้มตัวลงมาจูบคุณเบาๆ เพื่อเริ่มต้นชีวิตคู่ไปด้วยกัน",
    "next": "kael_true_ep_2",
    "charImg": "assets/char_kael_blush.png"
  }
};
