const passport = require("passport");
const jwt = require("jsonwebtoken");
const jwtOptions = require("../config/passport/passport");

module.exports = (app, db) => {
  app.post("/register", (req, res, next) => {
    // passport.authenticate("register", (err, user, info) => {
      // if (err)  console.error(err);
      
      // if (info !== undefined) {
      //   console.error(info.message);
      //   res.status(403).send(info.message);
      // } else {
        
        db.recruit.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            work_exp: req.body.work_exp,
            current_position: req.body.current_position,
            latest_company: req.body.latest_company,
            working_period: req.body.working_period,
            working_type: req.body.working_type,
            expected_salary: req.body.expected_salary,
            payment_lowest: req.body.payment_lowest,
            payment_highest: req.body.payment_highest,
            education_level: req.body.education_level,
            nationality: req.body.nationality,
            current_residence: req.body.current_residence,
            phone_number: req.body.phone_number,
            province: req.body.province,
            amphur: req.body.amphur
          })
          .then(() => {
            console.log("user created in db");
            res.status(200).send({ message: "user created" });
          })
          .catch(err => {
            console.error(err);
            res.status(400).send({ message: err.message });
          });
      // }
    // })(req, res, next);
  });

  // app.post("/loginUser", (req, res, next) => {
  //   passport.authenticate("login", (err, user, info) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     if (info !== undefined) {
  //       if (info.message === "username or password is incorrect.") {
  //         console.error(info.message);
  //         res.status(401).send({ message: info.message });
  //       } else {
  //         res.status(400).send(info.message);
  //       }
  //     } else {
  //       const token = jwt.sign(
  //         { id: user.id, role: user.role, name: user.name },
  //         jwtOptions.secretOrKey,
  //         { expiresIn: 3600 }
  //       );
  //       res.status(200).send({
  //         auth: true,
  //         token,
  //         message: "user found & logged in",
  //         role: user.role
  //       });
  //     }
  //   })(req, res, next);
  // });

  // app.post("/getuser", function(req, res) {
  //   db.user
  //     .findAll({})
  //     .then(result => {
  //       res.status(201).send(result);
  //     })
  //     .catch(err => {
  //       res.status(400).send({ message: err.message });
  //     });
  // });

  // app.delete("/deleteuser/:id", function(req, res) {
  //   db.user
  //     .destroy({
  //       where: { id: req.params.id }
  //     })
  //     .then(results => {
  //       res.status(200).send("Delete La");
  //     })
  //     .catch(err => {
  //       res.status(400).send({ message: err.message });
  //     });
  // });

  // app.get(
  //   "/protected-route",
  //   passport.authenticate("jwt", { session: false }),
  //   function(req, res) {
  //     res.status(200).send(req.user);
  //   }
  // );
};
