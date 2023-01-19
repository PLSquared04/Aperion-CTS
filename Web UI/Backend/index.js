const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const cors = require("cors");
const product = require("./product");
const user = require("./user");

const PORT = process.env.PORT || 5000;
const mongopw = process.env.DBPW;

try {
  mongoose.connect(
    `mongodb+srv://PLSM:${mongopw}@cluster0.fx6xecm.mongodb.net/ECommerce?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Connected");
} catch (err) {
  console.log(err);
}

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Connected to backend!</h1>");
});

app.post("/addUser", async (req, res) => {
  await user.insertMany([
    {
      uid: req.body.uid,
      user_name: req.body.user_name,
      address: req.body.address,
      DOB: req.body.DOB,
      cart: [],
      products: [],
    },
  ]);
});

app.get("/getProducts", async (req, res) => {
  const data = await product.find({});
  res.json(data);
});

app.post("/getCartDetails", async (req, res) => {
  const data = await user.find({ uid: req.body.uid });
  res.json(data);
});

app.post("/updateCart", async (req, res) => {
  const user_data = await user.findOne({ uid: req.body.uid });
  const product_data = await product.findOne({ _id: req.body.__id });
  let flag = 0;
  if (user_data.cart.length === 0) {
    console.log("1");
    await user.updateOne(
      { uid: req.body.uid },
      {
        $addToSet: {
          cart: {
            _id: product_data._id,
            price: product_data.price,
            quantity: 1,
          },
        },
      }
    );
    flag = 1;
  } else {
    //console.log("Inside");
    for (let item of user_data.cart) {
      //console.log(JSON.stringify(item._id) === JSON.stringify(product_data._id));
      console.log("2");
      if (
        JSON.stringify(item._id) === JSON.stringify(product_data._id) &&
        item.quantity + 1 <= product_data.stock
      ) {
        // console.log("Here");
        // const temp = await user.findOneAndUpdate({ $and: [{ uid: req.body.uid }, { "cart._id": item._id }] }, { $inc: { "cart.quantity": 1 } });
        await user.updateOne(
          {
            $and: [
              { uid: req.body.uid },
              { cart: { $elemMatch: { _id: item._id } } },
            ],
          },
          { $inc: { "cart.$.quantity": 1 } }
        );
        flag = 1;
        break;
      }
    }
  }

  if (flag === 0) {
    console.log("3");
    await user.updateOne(
      { uid: req.body.uid },
      {
        $addToSet: {
          cart: {
            _id: product_data._id,
            price: product_data.price,
            quantity: 1,
          },
        },
      }
    );
  }
});

app.listen(8000, () => {
  console.log("Listening on port 8000!");
});
