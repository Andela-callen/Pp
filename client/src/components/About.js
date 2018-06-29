import React from 'react';
import profilePix from '../img/photo.jpg';

const About = () => {
  return (
        <div>
          <section id="about">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="photo-wrap">
                                <img src={ profilePix }className="photo" alt=""/>
                                <div className="photo-overlay">
                                    <div className="photo-text social">
                                        <a href={process.env.GITHUB_URL}><i className="fab fa-github"></i></a>
                                        <a href={process.env.LINKEDIN_URL}><i className="fab fa-linkedin-in"></i></a>
                                        <a href={process.env.IG_URL}><i className="fab fa-instagram"></i></a>
                                        <a href={process.env.FACEBOOK_URL}><i className="fab fa-facebook"></i></a>
                                        <a href={process.env.GOOGLE_URL}><i className="fab fa-google"></i></a>
                                        <a href={process.env.TWITTER_URL}><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="aboutRight" className="col-lg-6 col-12">
                            <div>
                                <h4>Hello! I am Chinazor</h4>
                                <h5>a.k.a Allen</h5>

                            </div>
                            <div>
                                <p>
                                I am a software developer developing applications and learning new
                                skills. I possess strong problem-solving and analytical skills,
                                paying close attention to details in order to come up with the
                                best alternative to business challenges. I have exercised these
                                skills while working on several projects. I have had experience
                                using various programming tools such as React, Nodejs and database
                                (PostgreSQL, mongoDB, MySQL,etc) to develop applications. During my
                                Masters Degree, I developed a
                                <a href="https://www.academia.edu/18234474/ASSET_MANAGEMENT_SYSTEM_USING_RASPBERRY_PI_Presentation_">
                                'proof of concept'</a> of an asset management system
                                using Raspberry Pi and PiCamera as Front-end QR code reader.
                                I contributed to projects such as: Syncano <a href="https://syncano.io/#/">
                                (a Backend as a Service)</a>, building services using Nodejs
                                and AWS services.
                                </p>

                                <p>
                                Along with technical skills, I am a devoted, organized and
                                approachable individual with willingness to effectively work and
                                learn new skills in order to be equally successful in both team and
                                self-directed settings. I possess strong problem-solving and
                                analytical skills, paying close attention to details in order to
                                come up with the best approaches to solve problems. I have learnt
                                and grown to communicate effectively with stakeholders and teammates
                                demonstrating in-depth knowledge of project requirements, agile
                                software development techniques and project deliverables.
                                </p>
                                <p>
                                When I'm not coding I watch movies for relaxation. I love to cook,
                                surf the web, play indoor games, travel, make new friends and
                                explore other cultures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  );
};

export default About;
