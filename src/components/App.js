import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from "./Task";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const categories = ["All", "Category 1", "Category 2", "Category 3"];
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm 
      categories={categories}
       onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList  
      categories={categories}
      />
    </div>
  );
}

export default App;
