'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('productos', 'esPorPeso', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('productos', 'esPorPeso');
  }
};
