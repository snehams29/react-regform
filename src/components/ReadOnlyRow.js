import React, { useContext, useState } from "react";
import UsersContext from "../store/users-context";
import { loadCoordinates } from "../coordinatesCheck";
import Button from "./UI/Button";

const ReadOnlyRow = (props) => {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const usersCtx = useContext(UsersContext);

  const onLoadCoordinates = async (event, user) => {
    event.preventDefault();
    setIsLoading(true);
    setLocation(await loadCoordinates(user));
    setIsLoading(false);
  };
  return (
    <tr>
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{props.user.city}</td>
      <td>{props.user.street}</td>
      <td>{props.user.houseNumber}</td>
      <td>{props.user.zipCode}</td>
      
      <td>
       
        <Button onClick={(event) => usersCtx.onEdit(event, props.user)}>
          Edit
        </Button>
        <Button onClick={(event) => usersCtx.onDelete(event, props.user.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
