import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LeftBox, PostsLayout, RigthBox } from "../../../components"
import { MainLayout } from "../../../components/Layouts"
import {accessToken} from "../../../utils/accessToken"
import { baseURL } from "../../../services/baseURL"

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const Main = () => {
  const [ user, setUser ] = useState({});
  const [ posts, setPosts ] = useState([]);
  
  const fetchUser = async () => {
    try {
      const result = await axios.get(`${baseURL}/users/ffbf809a-257c-4b21-ba2c-b71a7f84de9f`);
      setUser(result.data.data);
      console.log(result.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  
  const fetchPosts = async () => {
    try {
      const result = await axios.get(`${baseURL}/posts`);
      setPosts(result.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  
  console.log('Hola');
  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  return (
    <>
      <MainLayout>
        <LeftBox user={user} post={user.Post}/>
        <PostsLayout posts={posts}/>
        <RigthBox/>
      </MainLayout>
    </>
  );
};

export { Main };
export default Main;