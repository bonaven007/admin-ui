import "./App.css";

function App() {
  const courses = [
    {
      title: "System Administration and IT Infrastructure Services",
      users: "123 users",
      duration: "60 min",
      author: "Author's Name",
      role: "Designer",
      price: "$123",
    },
    {
      title: "Operating Systems Becoming a Power User",
      users: "89 users",
      duration: "45 min",
      author: "Jane Smith",
      role: "Developer",
      price: "$99",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      users: "234 users",
      duration: "90 min",
      author: "Mike Johnson",
      role: "Network Engineer",
      price: "$149",
    },
    {
      title: "Technical Support Fundamentals",
      users: "567 users",
      duration: "40 min",
      author: "Sarah Williams",
      role: "Support Lead",
      price: "$79",
    },
    {
      title: "How to Succeed at: Writing Applications",
      users: "45 users",
      duration: "30 min",
      author: "David Brown",
      role: "Writer",
      price: "$59",
    },
    {
      title: "Medicine Administration for Carers",
      users: "178 users",
      duration: "50 min",
      author: "Dr. Emily Clark",
      role: "Medical Expert",
      price: "$89",
    },
  ];

  return (
    <div className="container">
      <div className="card-grid">
        {courses.map((course, index) => (
          <div key={index} className="card">
            {/* Image 300x200 */}
            <div className="card-image">
              <img
                src="https://www.placehold.co/300x200"
                alt={course.title}
              />
            </div>

            {/* Content */}
            <div className="card-content">
              <h3 className="card-title">{course.title}</h3>
              
              <div className="card-stats">
                <span>{course.users}</span>
                <span>{course.duration}</span>
              </div>
              
              <div className="card-author">
                <div className="author-avatar"></div>
                <div>
                  <div className="author-name">{course.author}</div>
                  <div className="author-role">{course.role}</div>
                </div>
              </div>
              
              <div className="card-footer">
                <span className="price">{course.price}</span>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;