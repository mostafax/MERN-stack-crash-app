import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import Form from './components/EmployeeTable';
import Message from './components/EmployeeTable';
import EmployeeAPI from './EmployeeAPi';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                employees: [],
                isEditForm: {
                    fristName: "",
                    lastName: "",
                    salary: "",
                    job: "",

                },
                message: ""
            };
            this.deleteHandler = this.deleteHandler.bind(this);
            this.addHandler = this.addHandler.bind(this);
            this.updateHandler = this.updateHandler.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.sowEditForm = this.sowEditForm.bind(this);


        }
        componentDidMount() {
            EmployeeAPI.getEmployess().then(data => { this.setState({ employees: data.response }) });
        }

        restForm() {
            this.setState({
                employee: {
                    fristName: "",
                    lastName: "",
                    salary: "",
                    job: "",
                }
            });
        }
        handleChange(e) {
            this.setState({
                employee: {
                    ...this.state.employee,
                    [e.target.name]: e.target.value
                }
            });
        }
        showEditForm(employee) {
            this.setState({
                isEditForm: true,
                employee: employee
            });
        }

        async deleteHandler(is) {
            const deleteData = await EmployeeAPI.deleteEmployee(id);
            const message = deleteData.message;
            if (message.msgError) {
                this.setState({ message });
            } else {
                const data = await EmployeeAPI.getEmployess();
                this.setState({ message, employees: data.response });
            }
        }

        async updateHandler(e) {
            e.preventDefault();
            const updateData = await EmployeeAPI.deleteEmployee(this.state.employee);
            const message = updateData.message;
            if (message.msgError) {
                this.setState({ message });
            } else {
                const data = await EmployeeAPI.getEmployess();
                this.setState({ message, employees: data.response });
            }
            this.setState({ isEditForm: false });
            this.restForm();
        }

        async addHandler(e) {
            e.preventDefault();
            const postData = await EmployeeAPI.createEmployee(this.state.employee);
            const message = post.message;
            if (message.msgError) {
                this.setState({ message });
            } else {
                const data = await EmployeeAPI.getEmployess();
                this.setState({ message, employees: data.response });
            }
            this.restForm();
        }

        renserEmployeeTable() {
                if (this.state.employees.length > 0) {
                    return ( <EmployeeTable employees = { this.state.employees }
                        deleteHandler = { this.deleteHandler }
                        showEditForm = { this.showEditForm }
                        />);
                    }
                    return null;
                }

                renderForm() {
                    return ( <Form isEditForm = { this.sate.isEditForm }
                        employee = { this.state.employee }
                        handleChange = { this.handleChange }
                        handler = {!this.state.isEditForm ? this.addHandler : this.updateHandler }
                        />
                    );
                }
                renderMessage() {
                    if (this.state.message === "") {
                        return null;
                    }
                    return ( < Message message = { this.state.message }
                        />)
                    };


                    render() {
                        return ( <div className = "row" >
                            <div className = "col" > < /div>
                            <div className = "col-10" > {
                                this.renserEmployeeTable() }
                                 { this.renderForm() }
                                  { this.renderMessage() }
                            </div>
                              <div className = "col" > </div> </div>
                        )
                    }

                }
