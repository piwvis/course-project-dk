module.exports = (sequelize, DataTypes) => {
   const Permissions = sequelize.define("permission", {
       id:{
           type:DataTypes.INTEGER,
           autoIncrement:true,
           primaryKey: true
       },
       type:{
           type:DataTypes.STRING,

       }
   })
    return Permissions
}
