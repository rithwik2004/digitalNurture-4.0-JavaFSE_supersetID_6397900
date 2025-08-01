import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => this.setState({ posts: data }))
      .catch((error) => this.setState({ error }));
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`Error occurred: ${error.toString()}`);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
