import React, { useState } from "react";
import "./EditUserModal.css";
import axios from "axios";

function EditUserModal({ userInfo, setUserInfo, handleClose }) {
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleEditUser = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", imageFile);
      formDataToSend.append("displayName", userInfo.displayName);
      formDataToSend.append("password", password);
      const token = userInfo.token;
      const response = await axios.patch(
        `http://localhost:8080/api/users/${userInfo.username}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );
      const updatedUser = response.data;
      setUserInfo({...updatedUser, token: userInfo.token});
      alert(`The user ${userInfo.username} update succesfully.`)
    } catch (error) {
      console.error("Error editing user:", error);
      alert("An error occurred while editing the user details.");
    }
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") setPassword(value);
    else {
      setUserInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content modal-content-video">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Display name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="displayName"
                  value={userInfo.displayName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label"></label>
                {imagePreview ? (
                  <div>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-view"
                    />
                    <button
                      type="button"
                      className="btn-edit-files"
                      onClick={() => setImagePreview(null)}
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <>
                    <input
                      type="file"
                      id="fileInput2"
                      accept="image/*"
                      name="image"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="fileInput2" className="file-input-label">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="60"
                          className="bi bi-upload upload"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                        </svg>
                        &nbsp;&nbsp; Select image to upload
                      </div>
                    </label>
                  </>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">New password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleEditUser}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserModal;