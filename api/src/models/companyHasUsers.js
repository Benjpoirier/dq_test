module.exports = (sequelize, DataTypes) => {
    const CompanyHasUsers = sequelize.define(
        'CompanyHasUsers',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
            },
            companies_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            users_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        },
        {
            hooks: {},
            tableName: 'company_has_users',
            underscored: true,
        },
    );

    CompanyHasUsers.associate = models => {
        CompanyHasUsers.belongsTo(models.Company, {
            foreignKey: 'companies_id',
        });
        CompanyHasUsers.belongsTo(models.User, {
            foreignKey: 'users_id',
        });
    };

    return CompanyHasUsers;
};
