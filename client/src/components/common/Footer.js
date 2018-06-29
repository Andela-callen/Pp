import React from 'react';

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* <div className="col-12 col-sm-6">
                        <p>Copyright &copy; { new Date().getFullYear()} ACE</p>
                    </div> */}
                    <div className="pull-center">
                        <p className="pull-right">
                        <a href={process.env.GITHUB_URL}><i className="fab fa-github"></i></a>
                        <a href={process.env.LINKEDIN_URL}><i className="fab fa-linkedin-in"></i></a>
                        <a href={process.env.IG_URL}><i className="fab fa-instagram"></i></a>
                        <a href={process.env.FACEBOOK_URL}><i className="fab fa-facebook"></i></a>
                        <a href={process.env.GOOGLE_URL}><i className="fab fa-google"></i></a>
                        <a href={process.env.TWITTER_URL}><i className="fab fa-twitter"></i></a><br/>
                        Copyright &copy; { new Date().getFullYear()} ACE
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
