/*
  Warnings:

  - You are about to drop the column `LanguageimageUrl` on the `languages` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `languages` table. All the data in the column will be lost.
  - You are about to drop the column `ProjectimageUrl` on the `projects` table. All the data in the column will be lost.
  - Added the required column `languageImageUrl` to the `Languages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lenguague` to the `Languages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectImageUrl` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `languages` DROP COLUMN `LanguageimageUrl`,
    DROP COLUMN `name`,
    ADD COLUMN `languageImageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `lenguague` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `projects` DROP COLUMN `ProjectimageUrl`,
    ADD COLUMN `projectImageUrl` VARCHAR(191) NOT NULL;
