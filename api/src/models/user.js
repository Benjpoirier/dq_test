module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                type: DataTypes.UUIDV4,
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING(45),
                unique: { msg: { message: 'Email unique violation' } },
                validate: {
                    isEmail: true,
                },
            },
            name: {
                type: DataTypes.STRING,
            },
        },
        {
            hooks: {},
            tableName: 'users',
            underscored: true,
        },
    );

    User.associate = models => {
        User.belongsToMany(models.Company, {
            as: 'companies',
            through: models.CompanyHasUsers,
            foreignKey: 'users_id',
            onDelete: 'cascade',
            hooks: true,
        });
    };

    return User;
};
