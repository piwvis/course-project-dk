module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define("item", {
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
        tags: {
            type: DataTypes.STRING,
            allowNull: false
        }
   })
    return Items
}
