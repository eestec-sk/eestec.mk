-- CreateTable
CREATE TABLE `User` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
