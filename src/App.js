import React, { Component } from 'react';
//import logo from './logo.svg';
import Table from './components/Table'
import './App.css';



//const API = 'https://hn.algolia.com/api/v1/search?query=';
const API = 'https://dry-harbor-88607.herokuapp.com/api/users';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: [],
        currentPage:1,
        usersPerPage:5
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event)
    {
      this.setState(
        {
          currentPage:Number(event.target.id)
        }
      )
    }

    componentDidMount() {
      fetch(API)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data
            });
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {

      const { error, isLoaded , currentPage, usersPerPage, data,dat, users} = this.state;

      /*
      // Logic for displaying current todos
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

      const renderUsers = currentUsers.map((data, index) => {
          return <li key= {index}>{dat}</li>;
      }
    );


    // Logic for displaying page numbers
    const pageNumbers = [];
    for (var i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number =>
      {
        return(
          <li
            key = {number}
            id = {number}
            onClick = {this.handleClick}
            >
            {number}
            </li>
        );
      }
    );

    return (
          <div>
            <ul>
              {renderUsers}
            </ul>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>
        );

        */

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        return (
          <div>

          <div class="container">
              <div class="row">


                  <div class="col-md-10 col-md-offset-1">

                      <div class="panel panel-default panel-table">
                        <div class="panel-heading">
                          <div class="row">
                            <div class="col col-xs-6">
                              <h3 class="panel-title">Users</h3>
                            </div>
                            <div class="col col-xs-6 text-right">
                              <button type="button" class="btn btn-sm btn-primary btn-create">Create New</button>
                            </div>
                          </div>
                        </div>
                        <div class="panel-body">

            <div>

            <table class="table table-striped table-bordered table-list">
            <thead>
              <tr>
                  <th>Full Names</th>
                  <th>Email Address</th>
                  <th>Phone Number</th>
                  <th>Status</th>
              </tr>
            </thead>

                {this.state.data.map((dat, i)=>
                              <tbody>
                                      <tr key={i}>

                                        <td>
                                          {dat.attributes.first_name} {dat.attributes.last_name}
                                        </td>

                                        <td>
                                        {dat.attributes.email}
                                        </td>

                                        <td>
                                        {dat.attributes.mobile_number}
                                        </td>

                                        <td>Active</td>

                                      </tr>
                              </tbody>

                            )}

            </table>

            </div>

              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col col-xs-4">Page 1 of 5
                  </div>
                  <div class="col col-xs-8">
                    <ul class="pagination hidden-xs pull-right">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                    </ul>
                    <ul class="pagination visible-xs pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>




          </div>

        );




      }
    }
  }


  export default App;
