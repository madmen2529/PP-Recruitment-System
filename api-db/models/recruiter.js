const mdlName = "recruiter";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    firstname: {
      type: DataTypes.STRING(100)
    },
    lastname: {
      type: DataTypes.STRING(100)
    },
    username: {
      type: DataTypes.STRING(100)
    },
    password: {
      type: DataTypes.STRING(100)
    },
    company_id: {
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
