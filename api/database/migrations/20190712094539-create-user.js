module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(45),
                unique: true,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(45),
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: queryInterface => queryInterface.dropTable('users'),
};
