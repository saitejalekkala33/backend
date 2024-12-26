const express = require('express');
const { uploadVideo, getVideo, deleteVideo, getAllVideos, uploadLanguage, getAllLanguages, deleteLanguage } = require('../controllers/videoController');
const { uploadReview, getReview, getAllReviews} = require('../controllers/reviewController');
const { createUser, getAllUsers, getUserByUsername, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.route('/user').post(createUser).get(getAllUsers).get(getUserByUsername);
router.route('/user/:id').delete(deleteUser);
router.route('/video').post(uploadVideo).get(getAllVideos);
router.route('/language').post(uploadLanguage).get(getAllLanguages);  
router.route('/language/:id').delete(deleteLanguage); 
router.route('/video/:id').get(getVideo).delete(deleteVideo);
router.route('/review').post(uploadReview).get(getAllReviews);
router.route('/review/:id').get(getReview);

module.exports = router;