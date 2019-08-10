USE beautifyDB;

INSERT INTO users( `passportId`,`isProvider`, `createdAt`, `updatedAt`) VALUES (1,0, SYSDATE(), SYSDATE());

INSERT INTO providers(`name`, `bio`, `workingHours`,  `createdAt`, `updatedAt`) VALUES ('Kitty', 'some Kitty bio', '9:00-18:00', SYSDATE(), SYSDATE());
INSERT INTO providers(`name`, `bio`, `workingHours`,  `createdAt`, `updatedAt`) VALUES ('Hallie', 'some Hallie bio', '11:00-20:00',  SYSDATE(), SYSDATE());
INSERT INTO providers(`name`, `bio`, `workingHours`,  `createdAt`, `updatedAt`) VALUES ('Jerome', 'some Jerome bio', '12:00-16:00',  SYSDATE(), SYSDATE());
INSERT INTO providers(`name`, `bio`, `workingHours`,  `createdAt`, `updatedAt`) VALUES ('Alton', 'some Alton bio', '12:00-16:00',  SYSDATE(), SYSDATE());
INSERT INTO providers(`name`, `bio`, `workingHours`,  `createdAt`, `updatedAt`) VALUES ('Joey', 'some Joey bio', '12:00-16:00',  SYSDATE(), SYSDATE());

INSERT INTO services(`name`,  `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Men Haircut', 'hair-barber', '',  30, 65, SYSDATE(), SYSDATE());
INSERT INTO services(`name`,  `category`,`description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Women Haircut', 'hair-barber', 'Service includes client consultation, shampoo and blow-dry',  60, 90, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Highlights & Haircut', 'hair-barber', '', 150, 250, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Full Highlights', 'hair-barber', '', 180, 200, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Halloween Makeup', 'make-up', 'Full makeup', 60, 120, SYSDATE(), SYSDATE());

INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Men Haircut', 'hair-barber', '',  30, 60, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Women Haircut','hair-barber', 'Shampoo and blow-dry is included', 60, 90, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Beard Trim', 'hair-barber', '',  30, 30, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Haircut and Beard Trim', 'hair-barber', '', 60, 90, SYSDATE(), SYSDATE());

INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Venyasa all levels','yoga', 'heated', 90, 30, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Pilates','fitness', 'advanced level', 60, 20, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Abs & Ass','fitness', 'strenght training', 50, 40, SYSDATE(), SYSDATE());

INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'AROMA OIL MASSAGE', 'massage', 'This massage incorporates light to medium pressure, long strokes and kneading to reduce tension, soothe sore muscles and stimulate circulation.',60, 85, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'THAI MASSAGE','massage', 'Traditional thai massage', 60, 75, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Nutrition Counseling', 'nutritionist','Designing your personal weight loss plan', 60, 150, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ( 'Supermarket Tour','nutritionist', ' ', 60, 255, SYSDATE(), SYSDATE());

INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('French Manicure', 'nails','', 30, 45, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Blowout + Styling', 'hair-barber', 'A gorgeous bombshell blowout with your choice of dry style.',   60, 80, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Bridal Makeup', 'make-up', 'Full makeup',  60, 120, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Personal Shopping', 'fashion','',  300, 180, SYSDATE(), SYSDATE());
INSERT INTO services(`name`, `category`, `description`,`duration`,`price`, `createdAt`, `updatedAt`) VALUES ('Closet Cleanse', 'fashion', '',  150, 16, SYSDATE(), SYSDATE());


INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 1, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 2, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 3, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 4, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (1, 5, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (2, 6, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (2, 7, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (2, 8, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (2, 9, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (3, 10, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (3, 11, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (3, 12, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (4, 13, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (4, 14, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (4, 15, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (4, 16, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (5, 17, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (5, 18, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (5, 19, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (5, 20, SYSDATE(), SYSDATE());
INSERT INTO provider_services(`providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES (5, 21, SYSDATE(), SYSDATE());


-- INSERT INTO appointments(`providerId`, `serviceId`, `userId`, `start_time`, `end_time`, `createdAt`, `updatedAt`) VALUES (1, 1, 1, '2019-08-02 13:00', '2019-08-02 13:30', SYSDATE(), SYSDATE());

-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 4, '2019-08-02', SYSDATE(), SYSDATE());
-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 2, '2019-08-03', SYSDATE(), SYSDATE());
-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 3, '2019-08-06', SYSDATE(), SYSDATE());
-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 6, '2019-08-08', SYSDATE(), SYSDATE());
-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 1, '2019-08-02', SYSDATE(), SYSDATE());
-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 1, '2019-08-05', SYSDATE(), SYSDATE());
-- INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 3, '2019-08-09', SYSDATE(), SYSDATE());


INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-01', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-01', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-01', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-01', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-01', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-02', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-02', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-02', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-02', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-02', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-03', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-03', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-03', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-03', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-03', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-04', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-04', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-04', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-04', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-04', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-05', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-05', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-05', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-05', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-05', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-06', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-06', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-06', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-06', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-06', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-07', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-07', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-07', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-07', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-07', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-08', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (2, 0, '2019-08-08', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (3, 0, '2019-08-08', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-08', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (5, 0, '2019-08-08', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-10', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-12', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-12', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (1, 0, '2019-08-15', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-12', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-13', SYSDATE(), SYSDATE());
INSERT INTO slots(`providerId`, `max`, `date`, `createdAt`, `updatedAt`) VALUES (4, 0, '2019-08-17', SYSDATE(), SYSDATE());