/*
  Warnings:

  - You are about to drop the column `answer_status` on the `AnswerBot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `AnswerBot` DROP COLUMN `answer_status`,
    ADD COLUMN `answer_feedback` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Questions` ADD COLUMN `bot_enabled` BOOLEAN NOT NULL DEFAULT false;
