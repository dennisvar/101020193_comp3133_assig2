import { gql } from 'apollo-angular';

export const list = gql`
    query GetAllEmployees {
        getAllEmployees {
            _id
            first_name
            last_name
            email
            gender
            salary
        }
    }
`
export const read = gql`
    query SearchEmployeeByEid($id: ID!) {
        searchEmployeeByEid(_id: $id) {
        _id
        first_name
        last_name
        email
        gender
        salary
        }
    }
`

export const login = gql`
    query Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            username
            email
            password
        }
    }
`