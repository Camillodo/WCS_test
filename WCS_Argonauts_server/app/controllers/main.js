// Just a simple welcoming message for the main road
const mainController = {

  home: (req, res) => {
      res.send('Welcome to the Argo');
  }

};


//EXPORT
module.exports = mainController;