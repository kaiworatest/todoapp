// Todo service for creating todos with validation
class TodoService {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  /**
   * Creates a new todo with the given title
   * @param {string} title - The title of the todo
   * @returns {Object} The created todo object
   * @throws {Error} If title is empty or null
   */
  createTodo(title) {
    // Validate title
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new Error('Title must be a non-empty string');
    }

    // Create new todo
    const todo = {
      id: this.nextId++,
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };

    this.todos.push(todo);
    return todo;
  }

  /**
   * Gets all todos
   * @returns {Array} Array of all todos
   */
  getAllTodos() {
    return this.todos;
  }
}

// Export a single instance
module.exports = new TodoService();