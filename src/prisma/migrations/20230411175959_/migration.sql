/*
  Warnings:

  - The primary key for the `projectsandlanguage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `lenguageId` on the `projectsandlanguage` table. All the data in the column will be lost.
  - Added the required column `languageId` to the `ProjectsandLanguage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `projectsandlanguage` DROP FOREIGN KEY `ProjectsandLanguage_lenguageId_fkey`;

-- AlterTable
ALTER TABLE `projectsandlanguage` DROP PRIMARY KEY,
    DROP COLUMN `lenguageId`,
    ADD COLUMN `languageId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`projectId`, `languageId`);

-- AddForeignKey
ALTER TABLE `ProjectsandLanguage` ADD CONSTRAINT `ProjectsandLanguage_languageId_fkey` FOREIGN KEY (`languageId`) REFERENCES `Languages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
