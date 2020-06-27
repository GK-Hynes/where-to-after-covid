import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";

import { useSiteMetadata } from "hooks";

import Container from "components/Container";

const Header = () => {
  const { companyName, companyUrl } = useSiteMetadata();

  return (
    <header>
      <Container type="content">
        <h1>
          <Link className="project-title" to="/">
            {companyName}
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <a href={companyUrl}>
              <span className="visually-hidden">Github</span>
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
