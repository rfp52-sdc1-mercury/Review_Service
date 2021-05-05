var Reviews = mongoose.Schema({
	product : String,
  page : Number,
  count : Number,
  results : [Review]
});

var Review = mongoose.Schema({
  review_id : Number,
	rating : Number,
	summary : String,
	recommend : Boolean,
	response : String,
	body : String,
	date : Date,
  reviewer_name : String,
  reviewer_email : String,
  helpfulness : Number
  photos: [Photos]
});

var Photos = mongoose.Schema({
  id : Number,
  url : String
});

var ReviewMeta = mongoose.Schema({
  product_id : Number,
  ratings: {
    0 : Number,
    1 : Number,
    2 : Number,
    3 : Number,
    4 : Number,
    5 : Number
  }
  recommended: {
  false : Number,
  true : Number
  }
  characteristics: [Characteristics]
});

var Characteristics = mongoose.Schema ({
  characteristic: String :{
    id : Number,
    value: String
  }
});