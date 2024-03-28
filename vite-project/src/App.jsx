import { useState } from 'react';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);
  
  const tasks = [
      { id: 1, name: 'Go to the gym', dueDate: '2024-03-24', completed: true },
      { id: 2, name: 'Make the bed', dueDate: '2024-03-26', completed: false },
      { id: 3, name: 'Call mom', dueDate: '2024-03-26', completed: false },
      { id: 4, name: 'Do the dishes', dueDate: '2024-03-26', completed: true}
  ];

  const filteredTasks = tasks.filter(task => {
      const matchSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCompletion = showCompleted || !task.completed;
      return matchSearch && matchCompletion;
  });

  return (
      <>
          <div>
              <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
              <label>
                  <input
                      type="checkbox"
                      checked={showCompleted}
                      onChange={(e) => setShowCompleted(e.target.checked)}
                  />
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
                  {filteredTasks.map((task) => (
                      <tr key={task.id}>
                          <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                              {task.name}
                          </td>
                          <td>{task.dueDate}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </>
  );
}


export default App;
