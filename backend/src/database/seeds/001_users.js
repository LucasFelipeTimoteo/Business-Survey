
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: "Lucas Felipe",
          email: "admin@email.com",
          password: "$2b$10$jYTlUdb/CisWv1h8CW/GH.Jz/03MACJ7BHb.sxjMaiaDGBDoFBSuG"
        }
      ]);

    });
};
