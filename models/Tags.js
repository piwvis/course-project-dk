module.exports = (sequelize, DataTypes) => {
    const Tags = sequelize.define("tag", {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       }
   })
    return Tags
}
