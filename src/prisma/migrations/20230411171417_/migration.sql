/*
  Warnings:

  - You are about to drop the column `lenguague` on the `languages` table. All the data in the column will be lost.
  - You are about to drop the `_languagestoprojects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `language` to the `Languages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_languagestoprojects` DROP FOREIGN KEY `_LanguagesToProjects_A_fkey`;

-- DropForeignKey
ALTER TABLE `_languagestoprojects` DROP FOREIGN KEY `_LanguagesToProjects_B_fkey`;

-- AlterTable
ALTER TABLE `languages` DROP COLUMN `lenguague`,
    ADD COLUMN `language` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_languagestoprojects`;

-- CreateTable
CREATE TABLE `ProjectsandLanguage` (
    `projectId` INTEGER NOT NULL,
    `lenguageId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`projectId`, `lenguageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectsandLanguage` ADD CONSTRAINT `ProjectsandLanguage_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectsandLanguage` ADD CONSTRAINT `ProjectsandLanguage_lenguageId_fkey` FOREIGN KEY (`lenguageId`) REFERENCES `Languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
