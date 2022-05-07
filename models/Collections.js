module.exports = (sequelize, DataTypes) => {
   const Collections = sequelize.define("collection", {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       description: {
           type: DataTypes.STRING,
           allowNull: false
       },
       theme: {
           type: DataTypes.STRING,
           allowNull: false
       },
       image: {
           type: DataTypes.STRING,
           allowNull: false
       }
   })
    return Collections
}
