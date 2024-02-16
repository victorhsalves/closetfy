
import { gql } from "@apollo/client";


export const RETRIEVE_ALL_CLOSET = gql`
query RetrieveAllCloset {
    retrieveClosetById(input: { userId: "b218489e-f25f-41f5-b022-a33f9a369763" }) {
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
        category {
            id
            nameOfCategory
        }
    }
}`
