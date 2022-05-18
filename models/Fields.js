module.exports = (sequelize, DataTypes) => {
   const Fields = sequelize.define("field", {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       type: {
           type: DataTypes.STRING,
           allowNull: false
       }
   })
    return Fields
}
