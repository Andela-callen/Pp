import React from 'react';

/**
 * @class Skills
 * @extends {React.Component}
 * @render {render()}
 */
class Skills extends React.Component {
  render() { // eslint-disable-line
    return (
        <div>
          <section id="skills">
            <div className="section-header">
                <div>
                    <h2>Skills</h2>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <div className="circle"><i className="fab fa-js"></i></div>
                                <h3>Web Design</h3>

                                <p>To be Done</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <div className="circle"><i className="fab fa-html5"></i></div>
                                <h3>Coding</h3>

                                <p>To be Done</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <div className="circle"><i className="fab fa-react"></i></div>
                                <h3>Clean Code</h3>

                                <p>To be Done</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <div className="circle"><i className="fa fa-database"></i></div>
                                <h3>Database</h3>

                                <p>To be done</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
  }
}

export default Skills;
