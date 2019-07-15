module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define(
        'Company',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(45),
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
            tableName: 'companies',
            underscored: true,
        },
    );

    Company.associate = models => {
        Company.belongsToMany(models.User, {
            as: 'users',
            through: models.CompanyHasUsers,
            foreignKey: 'companies_id',
        });
    };

    return Company;
};
