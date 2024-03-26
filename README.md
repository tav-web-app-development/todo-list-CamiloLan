[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/YqnbJ7XZ)
# Todo List

1. Clone this repo to your machine, `cd` into the cloned directory, and run `npm create vite@latest .` to install React
1. Put Visual Studio Code into Full Screen mode (press F11 on the keyboard or go to View > Appearance > Full Screen)
1. It will have an input element for finding tasks matching the inputed string
   1. Only matching tasks should be shown when text is entered into the input
1. It will have a checkbox input that when checked will hide all completed tasks
   1. Completed tasks should be crossed out when shown
1. Task list will show the task name and due date
1. All code must be formatted with a Prettify
1. Push up code when ready to submit (no need to open a PR)

Suggested HTML and CSS can be found below:

```html
<div>
  <input type="text" placeholder="Search..." />
  <label>
    <input type="checkbox" />
    Show completed tasks
  </label>
</div>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="completed-task" style="text-decoration: line-through;"
          >Gym workout</span
        >
      </td>
      <td>2024-03-26</td>
    </tr>
    <tr>
      <td>Grocery shopping</td>
      <td>2024-04-01</td>
    </tr>

    <tr>
      <td>Read chapter 5</td>
      <td>2024-04-04</td>
    </tr>
  </tbody>
</table>
```

Suggested Tasks:

```js
const TASKS = [
  {
    dueDate: "2024-03-30",
    completed: false,
    name: "Finish project proposal",
  },
  {
    dueDate: "2024-03-27",
    completed: false,
    name: "Meet with mentor",
  },
  {
    dueDate: "2024-03-28",
    completed: true,
    name: "Review study notes",
  },
  {
    dueDate: "2024-03-29",
    completed: false,
    name: "Practice coding exercises",
  },
  {
    dueDate: "2024-04-01",
    completed: false,
    name: "Plan weekend trip",
  },
  {
    dueDate: "2024-03-26",
    completed: true,
    name: "Attend yoga class",
  },
  {
    dueDate: "2024-03-31",
    completed: false,
    name: "Update resume",
  },
  {
    dueDate: "2024-04-02",
    completed: false,
    name: "Research career options",
  },
  {
    dueDate: "2024-04-03",
    completed: true,
    name: "Start reading new book",
  },
  {
    dueDate: "2024-04-04",
    completed: true,
    name: "Schedule dentist appointment",
  },
];

const handleInputTextChange = (inputedText) => {
  const filteredTasks = TASKS.filter((task) => {
    task.name.toLowerCase().indexOf(inputedText.toLowerCase()) !== -1;
  });
  return filteredTasks;
};
```
