import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUsers, postUserData } from "../redux";

function UserContainer({ fetchUsers, userData, postUserData }) {


  
  const [states, setStates] = useState({userid: 0, title: "", body: ""})



  

  useEffect(() => {
    fetchUsers();
  }, []);

  const clickHandler = (e) => {
    e.preventDefault()
    postUserData(states)
  }

  return (
    <div>
      <div>
        <form>
          <div>
            <input
              type="text"
              name="userid"
              value = {states.userid}
              onChange = {(e)=>{setStates({...states, userid:e.target.value})}}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value = {states.title}
              onChange = {(e)=>{setStates({...states, title:e.target.value})}}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value = {states.body}
              onChange = {(e)=>{setStates({...states, body:e.target.value})}}
            />
          </div>
          <button type="submit" onClick = {clickHandler}>Submit</button>
        </form>
      </div>

      {/* {userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user) => <p>{user.name}</p>)}
          </div>
        </div>
      )} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    postData: state.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    postUserData: user => dispatch(postUserData(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
