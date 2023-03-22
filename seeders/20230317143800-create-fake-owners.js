'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('owners', [{
       fullname: 'John Doe',
       email:'john@gmail.com',
       uuid: "f55cfdf3-8552-4958-9ff8-fe8562e46d7e",
       createdAt: "2023-03-17T14:32:57.005Z",
       updatedAt: "2023-03-17T14:32:57.005Z",
       isBetaMember: false
     },
     {
      fullname: 'Jane Doe',
      email:'jane@gmail.com',
      uuid: "f55cfdf3-8552-4958-9ff8-fe8562e4258e",
      createdAt: "2023-03-17T14:35:57.005Z",
      updatedAt: "2023-03-17T14:38:57.005Z",
      isBetaMember: false
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('owners', null, {});
  }
};
