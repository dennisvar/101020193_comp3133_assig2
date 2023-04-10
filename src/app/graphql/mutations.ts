import { gql } from 'apollo-angular';

export const create = gql`
    mutation AddNewEmployee($firstName: String!, $lastName: String!, $email: String!, $gender: String!, $salary: Float!) {
        addNewEmployee(first_name: $firstName, last_name: $lastName, email: $email, gender: $gender, salary: $salary) {
            _id
            first_name
            last_name
            email
            gender
            salary
        }
    }
`

export const update = gql`
    mutation UpdateEmployeeByEid($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $gender: String!, $salary: Float!) {
    updateEmployeeByEid(_id: $id, first_name: $firstName, last_name: $lastName, email: $email, gender: $gender, salary: $salary) {
        _id
        first_name
        last_name
        email
        gender
        salary
    }
    }
`

export const remove = gql`
    mutation DeleteEmployeeByEid($id: String!) {
        deleteEmployeeByEid(_id: $id) {
            _id
            first_name
            last_name
            email
            gender
            salary
        }
    }
`

export const signup = gql`
    mutation Signup($username: String!, $email: String!, $password: String!) {
        signup(username: $username, email: $email, password: $password) {
            username
            email
            password
        }
    }
`