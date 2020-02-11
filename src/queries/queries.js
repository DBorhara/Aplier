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
    }
  }
`;
const getCandidateByIdQuery = gql`
  query($id: ID) {
    candidate(id: $id) {
      id
      firstName
      lastName
      address
      email
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
const getScreeningQuestionsQuery = gql`
{
  screeningQuestions {
    id
    title
    screeningQ1
    screeningQ2
    screeningQ3
  }
}
`;

const addCompanyMutation = gql`
  mutation AddCompany($name: String!, $location: String!, $industry: String!) {
    addCompany(name: $name, location: $location, industry: $industry) {
      id
      name
      location
      industry
    }
  }
`;

const addCandidateMutation = gql`
  mutation AddCandidate(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addCandidate(
      addCandidateInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      id
      firstName
      lastName
      email
      token
      createdAt
    }
  }
`;

const addCompanyPositionMutation = gql`
  mutation addCompanyPosition($title: String!, $description: String!, $salaryRange: String!, $companyId:Int!) {
    addCompanyPosition(title: $title, description: $description, salaryRange: $salaryRange, companyId: $companyId ) {
      id
      title
      description
      salaryRange
      companyId
    }
  }
`;

const getMatchByPositionQuery = gql`
query($id: Int!){
  companyPosition(id: $id) {
    title
    candidates{
      id
      firstName
      lastName
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
  getMatchByPositionQuery
}
