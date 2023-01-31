/*
  Warnings:

  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `cartId` INTEGER NULL,
    MODIFY `price` DECIMAL NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `users` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL DEFAULT '0',
    `username` VARCHAR(50) NOT NULL DEFAULT '0',
    `password` VARCHAR(50) NOT NULL DEFAULT '0',
    `name` VARCHAR(50) NOT NULL DEFAULT '0',

    UNIQUE INDEX `Индекс 2`(`Id`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cart` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('draft', 'payed') NOT NULL,

    UNIQUE INDEX `Индекс 2`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_cartId_fkey` FOREIGN KEY (`cartId`) REFERENCES `Cart`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;