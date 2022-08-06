import {gql} from '@apollo/client/core';

const POST_IMAGE = gql`
  mutation PostImage($imagePath: String!) {
    postImage(imagePath: $imagePath) {
      imagePath
    }
  }
`;
export {POST_IMAGE};
