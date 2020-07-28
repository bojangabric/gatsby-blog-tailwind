import React from 'react';
import moment from 'moment';

const Post = ({ post }) => {
  const { html } = post;
  const { title, date } = post.frontmatter;

  return (
    <>
      <h1 className="text-4xl font-bold text-center uppercase mb-6">{title}</h1>
      <div className="text-center italic text-sm mb-5">
        Sent by Bojan Gabric on {moment(date).format('MMMM Do YYYY')}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Post;
