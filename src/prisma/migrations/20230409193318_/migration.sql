/*
  Warnings:

  - You are about to drop the `projectsandlanguage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `projectsandlanguage` DROP FOREIGN KEY `ProjectsandLanguage_lenguageId_fkey`;

-- DropForeignKey
ALTER TABLE `projectsandlanguage` DROP FOREIGN KEY `ProjectsandLanguage_projectId_fkey`;

-- DropTable
DROP TABLE `projectsandlanguage`;

-- CreateTable
CREATE TABLE `_LanguageToProject` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LanguageToProject_AB_unique`(`A`, `B`),
    INDEX `_LanguageToProject_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_LanguageToProject` ADD CONSTRAINT `_LanguageToProject_A_fkey` FOREIGN KEY (`A`) REFERENCES `Language`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LanguageToProject` ADD CONSTRAINT `_LanguageToProject_B_fkey` FOREIGN KEY (`B`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
