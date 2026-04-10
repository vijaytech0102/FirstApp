# Angular Basics - Teaching Guide

## Overview
This guide demonstrates all fundamental Angular concepts with practical examples in the `firstApp` project. You can use these examples to explain Angular to students.

---

## 1. **Interpolation - `{{ }}`**

**What it does:** Displays component property values in the template

**Syntax:**
```html
{{ propertyName }}
{{ expression }}
```

**Example in app:**
```typescript
// Component
title = 'Angular Basics Guide';

// Template
<h1>{{ title }}</h1>
<p>{{ 2 + 3 }}</p>
<p>{{ userName || 'Guest' }}</p>
```

**Key Points:**
- One-way binding (Component → Template only)
- Displays the result of any valid expression
- Can use operators like `||`, `?:`, etc.

---

## 2. **Two-Way Binding - `[(ngModel)]`**

**What it does:** Synchronizes data between template and component in both directions

**Syntax:**
```html
<input [(ngModel)]="propertyName" />
```

**Example in app:**
```typescript
// Component
userName: string = '';
userEmail: string = '';

// Template
<input type="text" [(ngModel)]="userName" placeholder="Enter name..." />
<p>User entered: {{ userName }}</p>
```

**How it works:**
- When user types → Component property updates
- When component changes property → Input field updates
- Uses `FormsModule` (already imported)

**Key Points:**
- Real-time synchronization
- Combines property binding `[ngModel]` and event binding `(ngModelChange)`
- Must be on form controls (input, textarea, select)

---

## 3. **Property Binding - `[property]`**

**What it does:** Binds component properties to DOM element properties

**Syntax:**
```html
<element [property]="expression">
```

**Examples in app:**
```typescript
// Component
imageUrl = 'https://via.placeholder.com/200';
isDisabled = false;
placeholder = 'Enter your name';

// Template
<img [src]="imageUrl" [alt]="'Image'" />
<button [disabled]="isDisabled">Click me</button>
<input [placeholder]="placeholder" />
```

**Key Points:**
- One-way binding (Component → Template)
- Can bind to any DOM property
- Different from HTML attributes
- Examples: `[disabled]`, `[src]`, `[class.active]`, etc.

---

## 4. **Event Binding - `(event)`**

**What it does:** Responds to user events and calls methods

**Syntax:**
```html
<element (event)="handler()">
<element (event)="handler($event)">
```

**Examples in app:**
```typescript
// Component
clickCount = 0;

handleClick() {
  this.clickCount++;
  console.log('Button clicked');
}

// Template
<button (click)="handleClick()">Click Me!</button>
<button (click)="toggleLogin()">{{ isLoggedIn ? 'Logout' : 'Login' }}</button>
<input (keyup)="onKeyUp($event)" />
```

**Common Events:**
- `(click)` - Mouse click
- `(keyup)` / `(keydown)` - Keyboard events
- `(change)` - Input change
- `(mouseover)` / `(mouseout)` - Mouse events
- `(submit)` - Form submit
- `(blur)` / `(focus)` - Focus events

**Key Points:**
- One-way binding (Template → Component)
- Can pass `$event` object
- Can pass parameters: `(click)="delete(id)"`

---

## 5. **Structural Directives - `*ngIf`**

**What it does:** Conditionally adds or removes DOM elements

**Syntax:**
```html
<element *ngIf="condition">
<element *ngIf="condition; else templateName">
```

**Examples in app:**
```typescript
// Component
isLoggedIn = false;
showDetails = false;
userRole = 'admin';

// Template
<p *ngIf="isLoggedIn">You are logged in!</p>
<p *ngIf="!isLoggedIn">Please log in</p>

<!-- ngIf with else -->
<div *ngIf="userRole === 'admin'; else notAdmin">
  Admin content here
</div>
<ng-template #notAdmin>
  <p>Regular user content</p>
</ng-template>
```

**Key Points:**
- Completely removes/adds element from DOM (not just hidden)
- More efficient than `display: none`
- Use `ng-template` for else block
- Can use `*ngIf="condition"` or `[ngIf]="condition"`

---

## 6. **Structural Directives - `*ngFor`**

**What it does:** Repeats DOM elements for each item in a list

**Syntax:**
```html
<element *ngFor="let item of array">
<element *ngFor="let item of array; let index = index">
```

**Examples in app:**
```typescript
// Component
students = [
  { id: 1, name: 'Rajesh', score: 85 },
  { id: 2, name: 'Priya', score: 92 }
];

// Template
<li *ngFor="let student of students">
  {{ student.name }} - {{ student.score }}
</li>

<!-- With index -->
<li *ngFor="let student of students; let index = index">
  {{ index + 1 }}. {{ student.name }}
</li>

<!-- Removing items -->
<button (click)="removeStudent(student.id)">Delete</button>
```

**Available helpers:**
- `let index = index` - Current index
- `let odd = odd` - Is odd index
- `let even = even` - Is even index
- `let first = first` - Is first item
- `let last = last` - Is last item

**Key Points:**
- Creates element for each array item
- `let` creates local template variable
- Can access array index and other helpers
- Always provide `trackBy` for large lists (performance)

---

## 7. **Class Binding - `[class]` & `[ngClass]`**

**What it does:** Dynamically adds or removes CSS classes

**Syntax:**
```html
<element [class.className]="condition">
<element [ngClass]="{ class1: cond1, class2: cond2 }">
```

**Examples in app:**
```typescript
// Component
isActive = true;
isDisabled = false;

// Template
<div [class.active]="isActive" [class.disabled]="isDisabled">
  Box with dynamic classes
</div>

<!-- Multiple classes -->
<div [ngClass]="{ 'active': isActive, 'error': hasError, 'warning': isWarning }">
  Content
</div>

<!-- CSS -->
.active { background-color: green; }
.disabled { opacity: 0.5; }
```

**Key Points:**
- `[class.name]="condition"` - Best for single class
- `[ngClass]="object"` - Best for multiple classes
- Class is applied when condition is true
- CSS class name can include hyphens

---

## 8. **Style Binding - `[style]`**

**What it does:** Dynamically adds inline CSS styles

**Syntax:**
```html
<element [style.property]="value">
<element [style.property.unit]="value">
```

**Examples in app:**
```typescript
// Component
backgroundColor = '#f0f0f0';
fontSize = '16px';

// Template
<div [style.backgroundColor]="backgroundColor"
     [style.fontSize]="fontSize">
  Styled content
</div>

<!-- With units -->
<div [style.width.px]="width">Width in pixels</div>
<div [style.margin.%]="margin">Margin in percent</div>
```

**Key Points:**
- Property names use camelCase (not CSS kebab-case)
- Can specify unit: `[style.width.px]`
- One-way binding only
- For multiple styles, consider CSS classes

---

## 9. **Computed Properties - `get`**

**What it does:** Calculate values dynamically on-the-fly

**Syntax:**
```typescript
get propertyName(): Type {
  return computed_value;
}
```

**Example in app:**
```typescript
// Component
userName: string = '';

get greeting(): string {
  return this.userName ? `Welcome, ${this.userName}!` : 'Welcome, Guest!';
}

get totalScore(): number {
  return this.students.reduce((sum, s) => sum + s.score, 0);
}

// Template
<p>{{ greeting }}</p>
<p>Total: {{ totalScore }}</p>
```

**Key Points:**
- Automatically recalculates when dependencies change
- More efficient than calling a method
- Great for derived values
- Read-only (use `set` for setters)

---

## 10. **Combining Everything**

**Practical Form Example:**

```typescript
// Component
students = [...];
userName: string = '';

addStudent() {
  const newStudent = {
    id: this.students.length + 1,
    name: this.userName || 'New Student',
    score: Math.floor(Math.random() * 100)
  };
  this.students.push(newStudent);
  this.userName = '';
}

removeStudent(id: number) {
  this.students = this.students.filter(s => s.id !== id);
}

clearForm() {
  this.userName = '';
}
```

```html
<!-- Template -->
<!-- Interpolation + Two-way binding + Event binding -->
<div>
  <input type="text" [(ngModel)]="userName" placeholder="Student name" />
  <button (click)="addStudent()">Add Student</button>
  <button (click)="clearForm()">Clear</button>
</div>

<!-- Structural directive + Class binding -->
<ul>
  <li *ngFor="let student of students; let index = index"
      [class.header]="index === 0">
    {{ index + 1 }}. {{ student.name }}
    <span [style.color]="student.score > 80 ? 'green' : 'red'">
      {{ student.score }}
    </span>
    <button (click)="removeStudent(student.id)">Delete</button>
  </li>
</ul>

<!-- Conditional rendering -->
<p *ngIf="students.length === 0">No students yet</p>
<p *ngIf="students.length > 0">Total: {{ students.length }} students</p>
```

---

## Summary Table

| Feature | Syntax | Direction | Type |
|---------|--------|-----------|------|
| Interpolation | `{{ }}` | Component → Template | Expression |
| Two-Way Binding | `[(ngModel)]` | Both | Form Input |
| Property Binding | `[property]` | Component → Template | Property |
| Event Binding | `(event)` | Template → Component | Event |
| *ngIf | `*ngIf="cond"` | Conditional | Structural |
| *ngFor | `*ngFor="let x of y"` | Loop | Structural |
| Class Binding | `[class.name]` | Dynamic CSS | Class |
| Style Binding | `[style.prop]` | Dynamic CSS | Inline |

---

## Practice Exercises

1. **Add input validation:** Only enable "Add" button if name is not empty
2. **Sort students:** Add a button to sort by name or score
3. **Filter list:** Add input to filter students by name
4. **Color coding:** Change text color based on score (>80 = green, <50 = red)
5. **Count display:** Show "No students", "1 student", "2+ students" based on count
6. **Edit functionality:** Add edit button to modify student details
7. **Average calculation:** Display average score of all students

---

## Resources

- [Angular Official Docs](https://angular.dev)
- [Angular Template Syntax](https://angular.dev/guide/templates)
- [Built-in Directives](https://angular.dev/guide/directives/built-in-directives)
- [Component Interaction](https://angular.dev/guide/component-interaction)

