const express = require('express')
const mongoose = require('mongoose')

const apiRouter = express.Router();
var db = mongoose.connection;

const Restaurant = require('../../models/postRestaurant');
const Item = require('../../models/postItem');

const getReviews = (req, res) => {
  Promise.all([
    Restaurant.find(),
    Item.find()
  ])
  .then(results => {
    res.send(results);
  })
  .catch(err => {
    console.log("Error");
  })
}

const getRestaurantReviews = (req, res) => {
  console.log("restaurants");
  Restaurant.find({}, function(err, restaurants){
    res.send(restaurants);
  });
}

const getItemReviews = (req, res) => {
  Item.find({}, function(err, items){
    res.send(items);
  });
}

const getRestaurantReview = (req, res) => {
  Restaurant.find({_id: req.params.id}, function(err, restaurant){
    res.send(restaurant);
  });
}

const getItemReview = (req, res) => {
  Item.find({_id:req.params.id}, function(err, item){
    res.send(item);
  });
}

const reviewRestaurant = (req, res) => {
  var newRestaurant = new Restaurant();

  console.log(req.body.name);
  newRestaurant.name = req.body.name;

  newRestaurant.save(function(err, restaurant){
    if(err){
      res.send('error');
    }else{
      res.send(restaurant);
    }
  });

}

const reviewItem = (req, res) => {
  Item.create(req.body, function(err, item){
    if(err){
      res.send('error 404');
    }else{
      res.send(item);
    }
  });
}

apiRouter.get('/restaurant/reviews', getRestaurantReviews);
apiRouter.get('/restaurant/reviews/:id', getRestaurantReview);
apiRouter.get('/item/reviews/:id', getItemReview);
apiRouter.get('/item/reviews', getItemReviews);

apiRouter.get('/reviews', getReviews);

apiRouter.post('/restaurant/review', reviewRestaurant);
apiRouter.post('/item/review', reviewItem);

module.exports = apiRouter;
