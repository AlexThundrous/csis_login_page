import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('http://localhost:3002/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  render() {
    const { users } = this.state;

    return (
      <div className='text-white'>
        <h2>Registered Users</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.address}</td>
                <td>{user.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
