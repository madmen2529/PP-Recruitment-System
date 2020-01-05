const mdlName = "company_address";

module.exports = (sequelize, DataTypes) => {
  const mdl = sequelize.define(mdlName, {
    soi: {
      type: DataTypes.STRING(50)
    },
    house_no: {
      type: DataTypes.STRING(25)
    },
    building_name: {
      type: DataTypes.STRING(25)
    },
    building_no: {
      type: DataTypes.STRING(25)
    },
    village: {
      type: DataTypes.STRING(25)
    },
    postal_code: {
      type: DataTypes.STRING(5)
    },
    telephone_number: {
      type: DataTypes.STRING(13)
    },
    fax: {
      type: DataTypes.STRING(15)
    },
    company_id: {
      type: DataTypes.INTEGER
    },
    province_id: {
      type: DataTypes.INTEGER
    },
    district_id: {
      type: DataTypes.INTEGER
    },
    amphur_id: {
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
