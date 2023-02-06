import React, { useState } from "react";
import { Row, Button, Form } from "react-bootstrap";

import Users from "../allusers.json";
import UserCard from "./UserCard";
import { Container } from "@mui/material";
import useFetch from "../hooks/useFetch";

const UserFind: React.FC = () => {
  const { users, loading, error, setUsers } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setUsers(Users);
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredUsers = users.filter((user) => {
      return user?.name.toLowerCase().includes(text.toLowerCase());
    });
    setUsers(filteredUsers);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h1
        className='text-center mt-5'
        style={{ 
          color: "red",
          fontWeight: "bold",
          fontSize: "2rem",
          borderBottom: "2px solid red",
          paddingBottom: "10px",
         }}
      >
        JSON Placeholder Users
      </h1>

      <Form
        className='row g-3'
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleClick}
      >
        <div className='col-auto'>
          <Form.Control
            type='text'
            value={text}
            onChange={handleChange}
            className='form-control'
            placeholder='Search User by Name'
          />
        </div>
        <div className='col-auto'>
          <Button
            type='submit'
            disabled={!text}
            className='mb-3'
            variant='danger'
          >
            Search User 🔍
          </Button>
        </div>
      </Form>
      <Row>
        {users && users.length === 0 && <p>No Users Found 😥</p>}
        {users &&
          users?.length > 0 &&
          users?.map((user) => {
            return <UserCard key={user.id} {...user} />;
          })}
      </Row>
    </Container>
  );
};

export default UserFind;
