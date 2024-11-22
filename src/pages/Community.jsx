import  { useState } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  // Handle form submission
  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (newPost.trim() === '') return;

    const post = {
      id: Date.now(),
      content: newPost,
      author: 'Patient', // Replace with actual user data
      timestamp: new Date().toLocaleString(),
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Community Space</h1>

      {/* Post Form */}
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Share your thoughts, questions, or experiences..."
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
          >
            Post
          </button>
        </form>
      </div>

      {/* Posts Feed */}
      <div className="w-full max-w-lg mt-8 space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-600">No posts yet. Be the first to share!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-800">{post.content}</p>
              <div className="text-sm text-gray-500 mt-2">
                <span>{post.author}</span> · <span>{post.timestamp}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Community;
