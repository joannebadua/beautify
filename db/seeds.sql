USE beautifyDB;

INSERT INTO users(`isProvider`, `createdAt`, `updatedAt`) VALUES (0, SYSDATE(), SYSDATE());
INSERT INTO providers(`name`, `bio`, `workingHours`, `img`, `createdAt`, `updatedAt`) VALUES ('kitty', '', '9:00-18:00', 'https://i.pinimg.com/originals/7f/e7/df/7fe7df8f3843a85b22127899c280b6dd.jpg', SYSDATE(), SYSDATE());

INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('kitty', 'Hair/Barber', 'men haircut', 30, 65, SYSDATE(), SYSDATE());

INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 1, SYSDATE(), SYSDATE());


INSERT INTO appointments(`providerId`, `serviceId`, `userId`, `start_time`, `end_time`, `createdAt`, `updatedAt`) VALUES (1, 1, 1, '2019-08-02 13:00', '2019-08-02 13:30', SYSDATE(), SYSDATE());

INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 4, '2019-08-02', SYSDATE(), SYSDATE());
