import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "@reach/router"
import { TypeLayout, LeftBox, RigthBox } from "../../../components"
import { MainLayout } from "../../../components/Layouts"
import { accessToken } from "../../../utils/accessToken"
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

const Type = () => {
  const { id } = useParams();
  const [ type, setType ] = useState([]);
  const [ user, setUser ] = useState({});

  const fetchType = async () => {
    try {
      const result = await axios.get(`${baseURL}/types/${id}`);
      setType(result.data.data);
      console.log(result.data.data);
      console.log(result.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  const fetchUser = async () => {
    try {
      const result = await axios.get(`${baseURL}/users/ffbf809a-257c-4b21-ba2c-b71a7f84de9f`);
      setUser(result.data.data);
      console.log(result.data.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  

  useEffect(() => {
    fetchType();
    fetchUser();
  }, []);

  return (
    <>
      <MainLayout>
        <LeftBox user={user} post={user.Post}/>
        <TypeLayout type={type}/>
        <RigthBox/>
      </MainLayout>
    </>
  );
};

export { Type };
export default Type;