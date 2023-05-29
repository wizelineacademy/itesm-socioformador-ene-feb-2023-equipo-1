-- CreateTable
CREATE TABLE `AnswerBot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `post_question_id` INTEGER NULL,
    `question_by_user` VARCHAR(500) NOT NULL,
    `answer_by_bot` VARCHAR(3000) NOT NULL,
    `answer_status` INTEGER NOT NULL DEFAULT 0,
    `date_created` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `assigned_department` INTEGER NULL,
    `user_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AnswerBot` ADD CONSTRAINT `AnswerBot_post_question_id_fkey` FOREIGN KEY (`post_question_id`) REFERENCES `Questions`(`question_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnswerBot` ADD CONSTRAINT `AnswerBot_assigned_department_fkey` FOREIGN KEY (`assigned_department`) REFERENCES `Departments`(`department_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnswerBot` ADD CONSTRAINT `AnswerBot_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`employee_id`) ON DELETE SET NULL ON UPDATE CASCADE;
