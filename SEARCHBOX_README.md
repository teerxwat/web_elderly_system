# SearchBox Component

## คำอธิบาย

SearchBox เป็น React component สำหรับการค้นหาข้อมูลที่มีฟิลด์ต่างๆ ตามที่ผู้ใช้ต้องการ พร้อมกับ UI ที่สวยงามและทันสมัย

## ฟีเจอร์

-   🔍 **การค้นหาด้วยเลข Gateway**
-   📱 **การค้นหาด้วยเบอร์โทรศัพท์**
-   👤 **การค้นหาด้วย User ID**
-   📱 **การค้นหาด้วย Device ID**
-   🎨 **UI ที่สวยงามและทันสมัย**
-   📱 **Responsive Design**
-   ✨ **Animation และ Hover Effects**

## การใช้งาน

### การ Import

```jsx
import SearchBox from "./components/SearchBox";
```

### การใช้งานพื้นฐาน

```jsx
function App() {
	const handleSearch = (searchData) => {
		console.log("ข้อมูลการค้นหา:", searchData);
		// ตรงนี้คุณสามารถเพิ่มโค้ดสำหรับการค้นหาข้อมูลจริง
		// เช่น การเรียก API หรือการกรองข้อมูล
	};

	return (
		<div>
			<SearchBox onSearch={handleSearch} />
		</div>
	);
}
```

### Props

| Prop       | Type       | Required | Description                           |
| ---------- | ---------- | -------- | ------------------------------------- |
| `onSearch` | `function` | ✅       | ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่มค้นหา |

### ข้อมูลที่ส่งกลับ

ฟังก์ชัน `onSearch` จะได้รับ object ที่มีข้อมูลการค้นหา:

```javascript
{
  gateway: "GW001",        // ถ้ามีการกรอก
  phone: "0812345678",     // ถ้ามีการกรอก
  userId: "USER123",       // ถ้ามีการกรอก
  deviceId: "DEV456"       // ถ้ามีการกรอก
}
```

## ตัวอย่างการใช้งาน

### 1. การค้นหาด้วย Gateway

```jsx
const handleSearch = (searchData) => {
	if (searchData.gateway) {
		// ค้นหาด้วย Gateway
		console.log("ค้นหาด้วย Gateway:", searchData.gateway);
	}
};
```

### 2. การค้นหาด้วยหลายฟิลด์

```jsx
const handleSearch = (searchData) => {
	// ส่งข้อมูลไปยัง API
	fetch("/api/search", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(searchData),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("ผลการค้นหา:", data);
		});
};
```

### 3. การแสดงผลลัพธ์

```jsx
const [searchResults, setSearchResults] = useState([]);

const handleSearch = (searchData) => {
	// ค้นหาข้อมูล
	const results = performSearch(searchData);
	setSearchResults(results);
};

return (
	<div>
		<SearchBox onSearch={handleSearch} />

		{/* แสดงผลลัพธ์ */}
		<div className="search-results">
			{searchResults.map((result, index) => (
				<div key={index} className="result-item">
					{/* แสดงข้อมูลผลลัพธ์ */}
				</div>
			))}
		</div>
	</div>
);
```

## การปรับแต่ง

### การเปลี่ยนสี

คุณสามารถปรับแต่งสีได้โดยการแก้ไข CSS variables ใน `SearchBox.css`:

```css
.search-box {
	background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### การเปลี่ยนขนาด

```css
.search-box {
	max-width: 1000px; /* เปลี่ยนความกว้างสูงสุด */
	padding: 3rem; /* เปลี่ยน padding */
}
```

## Responsive Design

Component นี้รองรับการแสดงผลบนอุปกรณ์ต่างๆ:

-   **Desktop**: แสดงฟิลด์เป็น 2 คอลัมน์
-   **Tablet**: แสดงฟิลด์เป็น 1 คอลัมน์
-   **Mobile**: ปรับขนาดและ spacing ให้เหมาะสม

## การ Validate

-   ต้องกรอกข้อมูลอย่างน้อย 1 ฟิลด์
-   ถ้าไม่กรอกข้อมูลใดๆ จะแสดง alert แจ้งเตือน

## Browser Support

-   Chrome (เวอร์ชันล่าสุด)
-   Firefox (เวอร์ชันล่าสุด)
-   Safari (เวอร์ชันล่าสุด)
-   Edge (เวอร์ชันล่าสุด)

## การติดตั้ง

1. คัดลอกไฟล์ `SearchBox.jsx` และ `SearchBox.css` ไปยังโฟลเดอร์ `src/components/`
2. Import component ในไฟล์ที่ต้องการใช้งาน
3. ใช้งานตามตัวอย่างด้านบน

## การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

1. **Component ไม่แสดงผล**: ตรวจสอบการ import และ path
2. **CSS ไม่ทำงาน**: ตรวจสอบการ import CSS file
3. **ฟังก์ชัน onSearch ไม่ทำงาน**: ตรวจสอบการส่ง prop และการประกาศฟังก์ชัน

### การ Debug

```jsx
const handleSearch = (searchData) => {
	console.log("ข้อมูลการค้นหา:", searchData);
	// เพิ่ม console.log เพื่อดูข้อมูลที่ส่งมา
};
```
