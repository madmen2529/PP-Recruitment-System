const mdlName = "company_job";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    status: {
      type: DataTypes.ENUM("Open", "Close")
    },
    name: {
      type: DataTypes.STRING(100)
    },
    date: {
      type: DataTypes.DATE
    },
    job_qualification: {
      type: DataTypes.TEXT
    },
    company_id: {
      type: DataTypes.INTEGER
    },
    position_id: {
      type: DataTypes.INTEGER
    },
    period_type_id: {
      type: DataTypes.INTEGER
    },
    employment_type_id: {
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
