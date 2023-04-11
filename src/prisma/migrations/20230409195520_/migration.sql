/*
  Warnings:

  - You are about to drop the `_languagetoproject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `language` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_languagetoproject` DROP FOREIGN KEY `_LanguageToProject_A_fkey`;

-- DropForeignKey
ALTER TABLE `_languagetoproject` DROP FOREIGN KEY `_LanguageToProject_B_fkey`;

-- DropTable
DROP TABLE `_languagetoproject`;

-- DropTable
DROP TABLE `language`;

-- DropTable
DROP TABLE `project`;

-- CreateTable
CREATE TABLE `Projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `ProjectimageUrl` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Languages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `LanguageimageUrl` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_LanguagesToProjects` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_LanguagesToProjects_AB_unique`(`A`, `B`),
    INDEX `_LanguagesToProjects_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_LanguagesToProjects` ADD CONSTRAINT `_LanguagesToProjects_A_fkey` FOREIGN KEY (`A`) REFERENCES `Languages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_LanguagesToProjects` ADD CONSTRAINT `_LanguagesToProjects_B_fkey` FOREIGN KEY (`B`) REFERENCES `Projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
