import { gql } from 'apollo-boost';

const getCandidateQuery = gql`
  {
    candidates {
      id
      imgURL
      firstName
      lastName
      intro
      address
      email
      currentjob {
        id
        companyName
        position
      }
    }
  }
`;
const getCandidateByIdQuery = gql`
  query($email: String!) {
    candidate(email: $email) {
      id
      firstName
      lastName
      address
      email
      imgURL
      phone
      intro
      cognitoId
    }
  }
`;

const getCompaniesQuery = gql`
  {
    companies {
      id
      name
      location
      industry
      perks
      website
      imgURL
    }
  }
`;

const getCompanyByIdQuery = gql`
  query($id: Int!) {
    company(id: $id) {
      id
      name
      location
      perks
      website
      imgURL
    }
  }
`;

const getCurrentJobByIdQuery = gql`
  query($candidateId: Int!) {
    currentJob(candidateId: $candidateId) {
      id
      companyName
      position
      startDate
    }
  }
`;

const getEduById = gql`
  query($candidateId: Int!) {
    education(candidateId: $candidateId) {
      name
      major
    }
  }
`;

const getPositionsQuery = gql`
  {
    companyPositions {
      id
      title
      description
      salaryRange
      datePosted
      company {
        imgURL
        name
        location
        website
      }
    }
  }
`;

const getScreeningByPositionByIdQuery = gql`
  query($id: Int!) {
    companyPosition(id: $id) {
      id
      title
      screeningQ1
      screeningQ2
      screeningQ3
    }
  }
`;

const addCompanyMutation = gql`
  mutation addCompany(
    $name: String!
    $location: String!
    $industry: String!
    $email: String!
    $password: String!
  ) {
    addCompany(
      name: $name
      location: $location
      industry: $industry
      email: $email
      password: $password
    ) {
      id
      name
      location
      industry
      email
    }
  }
`;

const addCandidateMutation = gql`
  mutation addCandidate(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $cognitoId: String
  ) {
    addCandidate(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      cognitoId: $cognitoId
    ) {
      id
      firstName
      lastName
      email
      password
      cognitoId
    }
  }
`;

const addCompanyPositionMutation = gql`
  mutation addCompanyPosition(
    $title: String!
    $description: String!
    $salaryRange: String!
    $companyId: Int!
  ) {
    addCompanyPosition(
      title: $title
      description: $description
      salaryRange: $salaryRange
      companyId: $companyId
    ) {
      id
      title
      description
      salaryRange
      companyId
    }
  }
`;

const getMatchByPositionQuery = gql`
  query($id: Int!) {
    companyPosition(id: $id) {
      title
      candidates {
        id
        firstName
        lastName
      }
    }
  }
`;

const getMatchByCandidateQuery = gql`
  query($email: String!) {
    candidate(email: $email) {
      companyPositions {
        id
        title
      }
    }
  }
`;

export {
  getCandidateQuery,
  getCompaniesQuery,
  getPositionsQuery,
  addCompanyMutation,
  addCandidateMutation,
  addCompanyPositionMutation,
  getCompanyByIdQuery,
  getCandidateByIdQuery,
  getCurrentJobByIdQuery,
  getMatchByPositionQuery,
  getScreeningByPositionByIdQuery,
  getMatchByCandidateQuery,
  getEduById,
};
