import { gql } from "@apollo/client";


export const RETRIEVE_ALL_CLOSET = gql`
query RetrieveAllCloset {
  retrieveAllCloset {
    id
    name
    userId
    created_at
    product {
        id
        nameOfProduct
        nameOfCollection
        dateOfCollection
        closetId
        like
        image
        created_at
    }
  }
}`