const mdlName = "company";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    name: {
      type: DataTypes.STRING(100)
    },
    code: {
      type: DataTypes.STRING(15)
    },
    contact_number: {
      type: DataTypes.STRING(13)
    },
    total_employee: {
      type: DataTypes.INTEGER
    },
    registration_quality: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    about: {
      type: DataTypes.TEXT
    },
    logo_url: {
      type: DataTypes.STRING(100)
    },
    facebook: {
      type: DataTypes.STRING(100)
    },
    line: {
      type: DataTypes.STRING(100)
    },
    description: {
      type: DataTypes.TEXT
    },
    mission: {
      type: DataTypes.TEXT
    },
    image_url: {
      type: DataTypes.STRING(100)
    },
    industry_id: {
      type: DataTypes.INTEGER
    }
  });

  mdl.associate = models => {};

  // user.associate = (models) => {
  //   user.hasMany(models.comment, { onDelete: 'CASCADE', foreignKey: 'user_id' })
  //   user.hasMany(models.post, { onDelete: 'CASCADE', as: 'author', foreignKey: 'user_id' })
  //   user.belongsToMany(user, { as: 'request_to', foreignKey: 'request_to_id', through: models.friend })
  //   user.belongsTo(user, { as: 'request_to', foreignKey: 'request_to_id', through: models.friend })
  // }

  return mdl;
};
