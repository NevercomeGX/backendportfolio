/*
  Warnings:

  - The primary key for the `language` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `image` on the `language` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `language` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageUrl` on the `project` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `project` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `_projectlanguage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `LanguageimageUrl` to the `Language` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProjectimageUrl` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_projectlanguage` DROP FOREIGN KEY `_ProjectLanguage_A_fkey`;

-- DropForeignKey
ALTER TABLE `_projectlanguage` DROP FOREIGN KEY `_ProjectLanguage_B_fkey`;

-- AlterTable
ALTER TABLE `language` DROP PRIMARY KEY,
    DROP COLUMN `image`,
    ADD COLUMN `LanguageimageUrl` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `project` DROP PRIMARY KEY,
    DROP COLUMN `imageUrl`,
    ADD COLUMN `ProjectimageUrl` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `_projectlanguage`;

-- CreateTable
CREATE TABLE `ProjectsandLanguage` (
    `projectId` INTEGER NOT NULL,
    `lenguageId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`projectId`, `lenguageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectsandLanguage` ADD CONSTRAINT `ProjectsandLanguage_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectsandLanguage` ADD CONSTRAINT `ProjectsandLanguage_lenguageId_fkey` FOREIGN KEY (`lenguageId`) REFERENCES `Language`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
