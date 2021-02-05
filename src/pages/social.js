import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import SocialCards from 'components/social-cards';
import { graphql } from 'gatsby';

const Social = ({ data }) => (
    <Layout>
      
          <SocialCards items={data.socialJson.socialCards.items}/> 
    </Layout>
);

export default Social;

export const query = graphql`
  query SocialQuery {
    socialJson {
      socialCards {
        items {
          title
          icon
          frontColor
          iconColor
          backContent
          flavorText
        }
      }
    }
  }
`;
