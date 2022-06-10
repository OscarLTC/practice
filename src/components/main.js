import { useEffect, useState } from "react";

export const Main = () => {
  const [distrito, setDistrito] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8069/apiregistro2022/categoria/casitodes")
      .then((res) => res.json())
      .then((data) => {
        setDistrito(data);
      });
  }, []);

  return (
    <ul>
      {distrito.map((distrito) => (
        <li key={distrito.codigo}>{distrito.nombre}</li>
      ))}
    </ul>
  );
};
