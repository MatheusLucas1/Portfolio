
const Projects = () => {
  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold">Projects</h2>
    {/* Replace the placeholders with your projects */}
    <div className="my-4">
      <h3 className="text-xl font-bold">Project Name 1</h3>
      <p className="mt-2">Description of the project 1.</p>
      <a href="#" className="text-blue-500 underline">Demo</a>
      <a href="#" className="text-blue-500 underline">Code</a>
    </div>
    <div className="my-4">
      <h3 className="text-xl font-bold">Project Name 2</h3>
      <p className="mt-2">Description of the project 2.</p>
      <a href="#" className="text-blue-500 underline">Demo</a>
      <a href="#" className="text-blue-500 underline">Code</a>
    </div>
    {/* Add more projects here */}
  </div>
  )
}

export default Projects;
