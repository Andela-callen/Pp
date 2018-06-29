import React from 'react';
import axios from 'axios';

import Galaimage from './Galaimage';

/**
 * @class Portfolio
 * @extends {React.Component}
 * @render {render()}
 */
class Portfolio extends React.Component {
  state= {
    repos: []
  };

  /**
   *
   * @returns {function} - setState
   */
  getRepo = async () => {
    await axios.get(`https://api.github.com/users/${process.env.GITHUB_NAME}/repos?=${process.env.GITHUB_ACESS_TOKEN}`)
      .then((res) => {
        const repos = res.data;
        this.setState({ repos });
      });
  }
  /**
     *
     * @returns {function} - getRepo
     */
  componentDidMount() {
    this.getRepo();
  }

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    return (
        <div>
          <section id="portfolio">
            <div className="section-header">
              <div>
                  <h2>Github Repos</h2>
              </div>
            </div>
            <div className="container" data-category="plugins">

                  <ul className="repo_ul">
                    {this.state.repos.map(repo =>
                    <a href={`${repo.html_url}`} key={repo.id}>
                    <li>{repo.name}</li>
                    </a>)}
                  </ul>
            </div>
              <div>
                  <h2 className="filter">My Designs</h2>
              </div>
            {/* </div> */}
            <div className="container" data-category="design">
                  <Galaimage />
            </div>
          </section>
        </div>
    );
  }
}

export default Portfolio;
