const mdlName = "job_application";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    expected_salary: {
      type: DataTypes.INTEGER
    },
    is_negotiable: {
      type: DataTypes.BOOLEAN
    },
    work_experience_summary: {
      type: DataTypes.TEXT
    },

    recruit_id: {
      type: DataTypes.INTEGER
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
