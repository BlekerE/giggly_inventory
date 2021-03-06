// controller calls a model, then processes the logic 

// the model called
const User = require('../models/user')
const Product = require('../models/product')

//functions that we want the website to be able to do

// we may not need any get functions at the moment since data is being called
// directly from the fields on the site

// exports.getAddUser = (req, res, next) => {
//   User.fetchAll(users => {
//     res.render('admin', {
//       prods: users,
//       pageTitle: 'Admin',
//       path: '/admin'
//     });
//   });
// };

exports.postAddUser = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;
  const user = new User(username, password, fName, lName, email, null);
  user
    .save()
    .then(() => {
      res.redirect('/admin');
    })
    .catch(err => console.log(err));
};

exports.postAddProduct = (req, res, next) => {
  const id = req.body.productID;
  const name = req.body.productName;
  const discontinued = req.body.discontinued;
  const product = new Product(id, name, discontinued);
  product
    .save()
    .then(() => {
      res.redirect('/admin');
    })
    .catch(err => console.log(err));
};

exports.postDeleteUser = (req, res, next) => {
  const username = req.body.username;
  User.deleteById(username);
  res.redirect('/admin');
};

exports.postDiscontinueProductByID = (req, res, next) => {
  const productID = req.body.productID;
  Product.discontinueByID(productID);
  res.redirect('/admin');
};