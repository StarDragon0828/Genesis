import { Modal, Table } from 'react-bootstrap';
import View from '../components/UI/View';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Button from '../components/UI/Button';

export default function MyUsers(props) {
  const userName = localStorage.getItem("auth-name");
  const userEmail = localStorage.getItem("auth-email");

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [users, setUsers] = useState([
    { name: userName, email: userEmail },
    { name: "ne", email: userEmail }
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");

  const handleOpenEditModal = (index) => {
    setEditingIndex(index);
    setInputNameValue(users[index].name);
    setInputEmailValue(users[index].email);
    setShowEditModal(true);
  };

  const handleOpenDeleteModal = (index) => {
    setEditingIndex(index);
    setShowDeleteModal(true);
}

  const handleCloseEditModal = () => {
    setEditingIndex(null);
    setInputNameValue("");
    setInputEmailValue("");
    setShowEditModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleNameChange = (event) => {
    setInputNameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setInputEmailValue(event.target.value);
  };

  const saveName = () => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[editingIndex] = {
        name: inputNameValue,
        email: inputEmailValue
      };
      return updatedUsers;
    });
    handleCloseEditModal();
  };

  const handleDeleteUser = (index) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.splice(index, 1); // Remove the user at the specified index
      return updatedUsers;
    });
    handleCloseDeleteModal();
  };

  return (
    <View>
      <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>User</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Customer</td>
              <td id="edit">
                <View onClick={() => handleOpenEditModal(index)}>
                  <FontAwesomeIcon icon={faPen} />
                </View>
              </td>
              <td id="">
                <View onClick={() => handleOpenDeleteModal(index)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </View>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showEditModal} onHide={handleCloseEditModal} centered id="editModal">
        <Modal.Header closeButton>
          <Modal.Title className="edit-modal-title">
            Would you like to edit?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-body">
          <View className="d-flex align-items-center justify-content-between">
            <h5 className="title">Name</h5>
            <input
              type="text"
              value={inputNameValue}
              onChange={handleNameChange}
            />
            <h5 className="title">Email</h5>
            <input
              value={inputEmailValue}
              onChange={handleEmailChange}
            />
          </View>
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Change"
            className="edit-btn"
            onClick={saveName}
          />
          <Button
            text="Cancel"
            className="edit-btn"
            onClick={handleCloseEditModal}
          />
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered id="deleteModal">
        <Modal.Header closeButton>
          <Modal.Title className="edit-modal-title">
            Would you like to delete?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="delete-body">
            <h5 className='title' >Click the "Ok" button to delete all user information.</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Ok"
            className="delete-btn"
            onClick={() => handleDeleteUser(editingIndex)}
          />
          <Button
            text="Cancel"
            className="delete-btn"
            onClick={handleCloseDeleteModal}
          />
        </Modal.Footer>
      </Modal>
    </View>
  );
}