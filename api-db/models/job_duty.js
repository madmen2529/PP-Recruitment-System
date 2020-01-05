const mdlName = "job_qualification";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    amount: {
      type: DataTypes.INTEGER(3)
    },
    gender: {
      type: DataTypes.ENUM("M", "F", "Both")
    },
    is_salary_negotiable: {
      type: DataTypes.BOOLEAN
    },
    experience_from: {
      type: DataTypes.DATE
    },
    experience_to: {
      type: DataTypes.DATE
    },
    contact_person: {
      type: DataTypes.STRING()
    },
    contact_person_phone_number: {
      type: DataTypes.STRING(13)
    },
    education_level_id: {
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
