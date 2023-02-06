import React, { useState, useEffect } from "react";

import { User } from "../interfaces/interface";

const useFetch = (url: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    }
    getUsers();
  }, [url]);

  return { users, loading, error , setUsers};
};

export default useFetch;
