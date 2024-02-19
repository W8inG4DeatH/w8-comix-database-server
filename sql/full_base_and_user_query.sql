CREATE TABLE IF NOT EXISTS `User` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `login` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `Comix` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `comixTitle` VARCHAR(255) NOT NULL,
  `seriesTitle` VARCHAR(255),
  `seriesSubtitle` VARCHAR(255),
  `author` VARCHAR(255),
  `publisher` VARCHAR(255),
  `publishmentYear` INT,
  `numberOfPages` INT,
  `coverUrlLink` VARCHAR(255),
  `coverHard` BOOLEAN,
  `rating` INT,
  `collected` BOOLEAN,
  `userId` INT,
  FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `User` (`id`, `login`, `password`) VALUES
(1, 'W8inG4DeatH', '2011weronika');
