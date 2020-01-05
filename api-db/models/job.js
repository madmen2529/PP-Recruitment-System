const mdlName = "job";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    experience: {
      type: DataTypes.STRING(100)
    },
    title: {
      type: DataTypes.STRING(100)
    },
    company: {
      type: DataTypes.STRING(100)
    },
    startdate: {
      type: DataTypes.DATE
    },
    enddate: {
      type: DataTypes.DATE
    },
    position: {
      type: DataTypes.STRING(100)
    },

    job_type_id: {
      type: DataTypes.INTEGER
    },
    recruit_id: {
      type: DataTypes.INTEGER
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
