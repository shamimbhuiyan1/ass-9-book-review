import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div>
      <div className="context-api">
        <h2>What is Context API ?</h2>
        <p>
          Answer: Context API is a special method to avoid props drilling that
          means when we try to send props from parents component to child
          component we need to send attributes among component to component
          which is so on.If we use react context api when not need to send props
          to our desire child component,we can easily get data any component.{" "}
        </p>
      </div>
      <div className="context-api">
        <h2>What is Semantic Tags?</h2>
        <p>
          Answer: Semantic tags are latest version of html which is known as
          HTML5. we should use semantic tags when you want to mark up a content
          block that has an important role in the document structure.Semantic
          HTML tags allow you to add meaning to your markup so that search
          engines, screen readers, and web browsers can make sense of it. By
          default, when a user agent reads your content it doesn’t understand
          the context and meaning. Semantic HTML tags let you serve structured
          content to your users, which is especially important for on-page SEO
          and accessibility.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
