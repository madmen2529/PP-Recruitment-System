# Update Version 2.0.0

## Add Order (request example)
POST /add-order
```
{
    "totalPrice": 5000,
    "orderList": [
        {
            "uid": "1",
            "product": {
                "id": 2,
                "name": "MICROSOFT SURFACE LAPTOP2 I7/8/256GB (LQQ-00022)",
                "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/8/8/889842385243-1-1574182877.jpg",
                "description": "Surface Laptop 2 รุ่น CPU Intel Core i7 รุ่นที่ 8 Ram ขนาด 16 GB และฮาร์ดดิสก์แบบ SSD 256 GB โน้ตบุ๊คประสิทธิภาพสูง ถ่ายโอนอ่านเขียนข้อมูลรวดเร็ว รองรับการทำงานทั่วไปได้หลากหลาย หน้าจอทัชสกรีน 13.5 นิ้ว ความละเอียดสูง ให้ภาพคมชัด สีสันงดงามเป็นธรรมชาติ รองรับการสัมผัสได้ถึง 10 จุด พร้อมกัน ใช้ระบบเสียง Dolby Audio Premium ให้เสียงทรงพลัง เหมาะสำหรับความบันเทิงทุกรูปแบบ ติดตั้ง Windows 10 พร้อมใช้งาน",
                "price": "61300",
                "createdAt": "2019-11-26T23:05:09.000Z",
                "updatedAt": "2019-11-26T23:05:09.000Z",
                "ProductCategoryId": 1
            },
            "amount": 3
        },
        {
            "uid": "2",
            "product": {
                "id": 3,
                "name": "ACER NOTEBOOK SWIFT SF314-57G-52FD GRAY",
                "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/A/c/Acer-Notebook-SWIFT-SF314-57G-52FD-Gray-1-1574270791.jpg",
                "description": "Acer Swift 3 SF314-57G-52FD โน๊ตบุ๊คดีไซน์บางเบา สไตล์เรียบง่าย ลงตัว สีเทา มากับหน้าจอ IPS Full HD 14 นิ้ว ขอบจอบางเพิ่มพื้นที่การมองเห็น ได้ภาพคมชัด สีสันสดสวย ติดตั้ง CPU Intel Core i5-1035G1,RAM LPDDR4 8GB ประสิทธิภาพดีเยี่ยม รองรับงานได้แบบหลากหลาย และมีการ์ดจอ Nvidia GeForce MX250 สำหรับทำงานกราฟิกและเล่นเกมสที่ใช้เปคไม่สูงมาก โน๊ตบุ๊ค Acer Swift 3 SF314 ยังมาพร้อม SSD M.2 PCIe 512 GB เพิ่มความเร็วให้กับการใช้งานต่างๆ ติดตั้ง Windows 10 ลิขสิทธิ์แท้ และ Microsoft Office Home & Student 2019...",
                "price": "20990",
                "createdAt": "2019-11-26T23:05:09.000Z",
                "updatedAt": "2019-11-26T23:05:09.000Z",
                "ProductCategoryId": 1
            },
            "amount": 1
        },
        {
            "uid": "3",
            "product": {
                "id": 1,
                "name": "APPLE MACBOOK 12.0 1.3GHZ DUAL-CORE INTEL CORE I5/8GB/512GB - GOLD",
                "image": "https://www.bnn.in.th/pub/media/catalog/product/cache/e960f294cf534815b24fe57fbd9f1a95/M/R/MRQP2THA-1-1565456431.jpg",
                "description": "MacBook ได้นำประสิทธิภาพที่มากยิ่งกว่าเดิมมาใส่ลงในโน้ตบุ๊ค Mac ที่บางและเบาที่สุดเท่าที่เคยมีมา ด้วยโปรเซสเซอร์ Intel Core รุ่นที่ 7 ใหม่, จอภาพ Retina ขนาด 12 นิ้ว คีย์บอร์ดขนาดมาตรฐาน, แทร็คแพดที่สามารถรับรู้ได้ถึงแรงกด, พอร์ต USB-C อเนกประสงค์ และแบตเตอรี่ที่ใช้งานได้นานตลอดทั้งวัน เรียกได้ว่า MacBook คือการระดมความคิดครั้งใหญ่เพื่อรวบรวมทุกอย่างไว้ในรูปทรงที่กะทัดรัด",
                "price": "52100",
                "createdAt": "2019-11-26T23:05:09.000Z",
                "updatedAt": "2019-11-26T23:05:09.000Z",
                "ProductCategoryId": 1
            },
            "amount": 2
        }
    ]
}
```

## Delete Product
DELETE /delete-product/{productId}

## Update Product
PUT /edit-product/{productId}
```
{
    name: 'google',
    price: 65000
}
```
ถ้าใส่แค่ name ก็จะ update แค่ name
ถ้าใส่แค่ price ก็จะ update แค่ price
ถ้าใส่ทั้งคู่ก็จะอัพเดททั้งคู่
