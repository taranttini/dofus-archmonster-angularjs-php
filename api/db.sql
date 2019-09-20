DROP TABLE IF EXISTS `dofus_user_archmonster`;
DROP TABLE IF EXISTS `dofus_user`;

CREATE TABLE `dofus_user` (
     `id` INT NOT NULL AUTO_INCREMENT
    ,`name` VARCHAR(100) NOT NULL
    ,`email` VARCHAR(100) NOT NULL
    ,`password` VARCHAR(30) NOT NULL
    ,`auth_token` VARCHAR(100)
    ,`recover_token` VARCHAR(100)
    ,`recover_valid_to` TIMESTAMP
    ,`config_data` TEXT

    ,PRIMARY KEY (`id`)
    ,UNIQUE (`email`)
    ,UNIQUE (`auth_token`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `dofus_user_archmonster` (
    `dofus_user_id` INT NOT NULL
    ,`json_data` TEXT NOT NULL
    ,`updated_at` TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

    ,CONSTRAINT `dofus_user_arch_u1` UNIQUE (`dofus_user_id`)
    ,CONSTRAINT `dofus_user_arch_fk1` FOREIGN KEY (`dofus_user_id`) REFERENCES `dofus_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `dofus_user` (`name`,`email`,`password`) VALUES
('demo','demo@demo.com','e10adc3949ba59abbe56e057f20f88'),
('tarantini','taranttini@hotmail.com','e10adc3949ba59abbe56e057f20f88');

-- e10adc3949ba59abbe56e057f20f88 == 123456

INSERT INTO `dofus_user_archmonster` (`dofus_user_id`, `json_data`) VALUES
(1, '{}'), (2, '{}');

