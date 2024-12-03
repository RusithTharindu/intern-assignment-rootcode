"use client"

import { useState, useEffect } from "react";
import {Post} from "../types/index"
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList"

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(
        (res) => res.json()
      )
      .then(
        (data) => {
          setPosts(data);
          setFilteredPosts(data);
        }
      )
  },[])

  const handleSearchQuery = (query: string) => {
    const filterPost = posts.filter((post) => {
      post.title.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredPosts(filterPost);
  }

  return (
    <>
      <div>
        <SearchBar onSearch={handleSearchQuery} />
        <PostList posts={filteredPosts} /> 
      </div>
    </>
  );
}

export default Home;