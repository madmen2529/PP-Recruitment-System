const mdlName = "recruit";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    title: {
      type: DataTypes.STRING(100)
    },
    firstname: {
      type: DataTypes.STRING(100)
    },
    lastname: {
      type: DataTypes.STRING(100)
    },
    birthdate: {
      type: DataTypes.DATE
    },
    gender: {
      type: DataTypes.ENUM("M", "F", "Rather not say")
    },
    image_url: {
      type: DataTypes.STRING(255)
    },
    username: {
      type: DataTypes.STRING(50)
    },
    password: {
      type: DataTypes.STRING(50)
    },

    expected_salary_min: {
      type: DataTypes.INTEGER(10)
    },
    expected_salary_max: {
      type: DataTypes.INTEGER(10)
    },
    mobile_number: {
      type: DataTypes.STRING(15)
    },
    status: {
      type: DataTypes.ENUM("Single", "Married")
    },
    has_military_conscription: {
      type: DataTypes.BOOLEAN
    },
    has_vehicle: {
      type: DataTypes.BOOLEAN
    },
    has_driving_license: {
      type: DataTypes.BOOLEAN
    },
    can_drive: {
      type: DataTypes.BOOLEAN
    },
    education_id: {
      type: DataTypes.INTEGER
    },
    address_id: {
      type: DataTypes.INTEGER
    },
    education_level_id: {
      type: DataTypes.INTEGER
    },
    nationality_id: {
      type: DataTypes.INTEGER
    },
    religion_id: {
      type: DataTypes.INTEGER
    }
  });

  mdl.associate = models => {
    // recruit.hasMany(models.comment, {
    //   onDelete: "CASCADE",
    //   foreignKey: "id"
    // });
    // recruit.belongsTo(education, {
    //   as: "id",
    //   foreignKey: "education_id",
    //   through: models.education
    // });
    // recruit.belongsTo(address, {
    //   as: "id",
    //   foreignKey: "address_id",
    //   through: models.address
    // });
    // recruit.belongsTo(education, {
    //   as: "id",
    //   foreignKey: "education_level_id",
    //   through: models.education
    // });
    // recruit.belongsTo(nationality, {
    //   as: "id",
    //   foreignKey: "nationality_id",
    //   through: models.nationality
    // });
    // recruit.belongsTo(religion, {
    //   as: "id",
    //   foreignKey: "religion_id",
    //   through: models.religion
    // });
  };

  // user.associate = (models) => {
  //   user.hasMany(models.comment, { onDelete: 'CASCADE', foreignKey: 'user_id' })
  //   user.hasMany(models.post, { onDelete: 'CASCADE', as: 'author', foreignKey: 'user_id' })
  //   user.belongsToMany(user, { as: 'request_to', foreignKey: 'request_to_id', through: models.friend })
  //   user.belongsTo(user, { as: 'request_to', foreignKey: 'request_to_id', through: models.friend })
  // }

  return mdl;
};
