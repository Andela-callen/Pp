import form from '../server/form';
// import github from '../server/github';

module.exports = (app) => {
  app.post(
    '/api/form/sendmessage',
    form.sendMessage
  );

  // app.get(
  //   'api/github/getrepo',
  //   github.getRepo
  // );
};
