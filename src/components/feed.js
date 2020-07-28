import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';

const Feed = ({ edges }) => (
  <div>
    {edges.map(edge => (
      <div key={edge.node.fields.slug} className="mb-12 flex">
        <div className="flex flex-col py-2">
          <div className="uppercase font-semibold">{moment(edge.node.frontmatter.date).format('MMMM YYYY')}</div>
          <h2 className="text-2xl font-semibold mt-1 mb-4">
            <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          <p>{edge.node.frontmatter.description}</p>
          <div className="mt-2">
            <Link to={edge.node.fields.slug} className="underline">
              Read more
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
