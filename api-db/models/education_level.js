const mdlName = "education_level";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    name: {
      type: DataTypes.STRING(100)
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
