
// const BASE_URL = 'http://localhost:4000';

// ✅ Fetch all posts
export const getPosts = async () => {
  const response = await fetch(`http://localhost:4000/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};