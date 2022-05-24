module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define("user", {
       id:{
           type:DataTypes.UUID,
           defaultValue: DataTypes.UUIDV4,
           primaryKey: true
       },
       userName: {
           type: DataTypes.STRING,
           allowNull: false
       },
       password: {
           type: DataTypes.STRING,
           allowNull: false
       },
       email: {
           type: DataTypes.STRING,
           allowNull: false
       },
       // change status on integer instead of string
       status: {
           type: DataTypes.INTEGER,
           allowNull: false
       }
   })
    return User
}
