import React from "react";
import { useState } from "react";

function NewTaskForm() {
  const initialFormState = {
    text: "",
    category: categories[0], 
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData); 
    setFormData(initialFormState); 
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInputChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>

  );
}

export default NewTaskForm;
