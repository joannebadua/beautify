USE beautifyDB;
#INSERT INTO users(`isProvider`, `createdAt`, `updatedAt`) VALUES (0, SYSDATE(), SYSDATE());
#INSERT INTO providers(`name`, `bio`, `workingHours`, `createdAt`, `updatedAt`) VALUES ('kitty', '', '9:00-18:00', SYSDATE(), SYSDATE());

#INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('kitty', 'haircut', 'men haircut', 30, 65, SYSDATE(), SYSDATE());

#INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 1, SYSDATE(), SYSDATE());


#INSERT INTO appointments(`providerId`, `serviceId`, `userId`, `start_time`, `end_time`, `createdAt`, `updatedAt`) VALUES (1, 1, 1, '2019-08-02 13:00', '2019-08-02 13:30', SYSDATE(), SYSDATE());

INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 4, '2019-08-02', SYSDATE(), SYSDATE());
