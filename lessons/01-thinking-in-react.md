# 🚀 One-Day "Thinking in React" Crash Course (For Complete Beginners)

> **Goal**: Transform students with **ZERO programming knowledge** into **React-ready developers** in just **6 hours** — prepared to dive into **Next.js** on Day 2.

---

## 🎯 Learning Objectives
By the end of Day 1, students will:
1. **Understand** → What **React** is and *why* it exists  
2. **Recognize** → The difference between **HTML** and **JSX**  
3. **Create** → Simple **React components** with **props**  
4. **Implement** → Basic interactivity using **state** and **events**  
5. **Build** → A working **React component** for the **DS90 project**  

---

## 📚 Key Concepts (With Highlights)

### 1️⃣ HTML, CSS, JavaScript Basics
- **HTML** → Structure of the page (walls, rooms)  
- **CSS** → Styling/decoration (paint, furniture)  
- **JavaScript** → Interactivity (lights, appliances)  

**Example HTML:**
```html
<h1>Welcome to DS90!</h1>
<button>Click Me!</button>
```

---

### 2️⃣ The Copy-Paste Problem → Why We Need React
Editing repeated HTML (like **50 founder cards**) is inefficient → **React** solves this with **reusable components**.

**Without React (HTML):**
```html
<div class="founder-card">
  <h3>John Doe</h3>
</div>
<!-- Repeat many times... -->
```

**With React (JSX):**
```jsx
function FounderCard() {
  return (
    <div className="founder-card">
      <h3>John Doe</h3>
    </div>
  );
}
```

<details>
<summary>🔒 Having trouble seeing tags? Use this HTML-escaped version</summary>

**Without React (escaped):**
```html
&lt;div class="founder-card"&gt;
  &lt;h3&gt;John Doe&lt;/h3&gt;
&lt;/div&gt;
&lt;!-- Repeat many times... --&gt;
```

**With React (escaped):**
```jsx
function FounderCard() {
  return (
    &lt;div className="founder-card"&gt;
      &lt;h3&gt;John Doe&lt;/h3&gt;
    &lt;/div&gt;
  );
}
```
</details>

---

### 3️⃣ React Components
- Think of them like **recipes**: *Write once, reuse many times*  
- **Capitalized Names** → All components must start with a capital letter  
- **JSX** → HTML-like syntax with **JavaScript superpowers**

**Example:**
```jsx
function FounderCard() {
  return <div className="founder-card">...</div>;
}
```

---

### 4️⃣ Props (Properties)
- **Props** make components **flexible**  
- Analogy → *Mad Libs*: same structure, different data  
- Pass values to components for **dynamic content**

**Example:**
```jsx
<FlexibleCard name="Jane" description="Leader" />
```

---

### 5️⃣ State
- **State** = Component’s **memory** (remembers values between renders)  
- Managed using **useState** hook from React  

**Rules:**
1. Always import `useState`  
2. Call inside the component  
3. Don’t mutate directly — use the **setter function**

**Example:**
```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

---

### 6️⃣ Events
- Allow **interactivity** → Click, type, toggle  
- **Syntax:**
```jsx
onClick={handleFunction}
```

---

## 🛠 Final Project: DS90 Event Card

**Features:**
- 📋 Title, Date, Time, Location, Description (**props**)  
- 🔘 **Register/Unregister** button (**state**)  
- 👁️ **Show/Hide** details (**state**)  
- 📊 Attendee count (**state** updates**)  
