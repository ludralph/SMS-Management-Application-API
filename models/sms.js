module.exports = (sequelize, DataTypes) => {
  const Sms = sequelize.define('Sms', {
    senderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipientId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM,
      values: ['failed', 'pending', 'sent'],
      validate: {
        notEmpty: true,
      },
    },
  });
  Sms.associate = (models) => {
    models.Sms.belongsTo(models.Contact);
  };

  return Sms;
};
