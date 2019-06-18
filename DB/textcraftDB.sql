-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2019 at 01:56 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `textcraft`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `name` varchar(18) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(254) NOT NULL,
  `id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`name`, `password`, `email`, `id`, `character_id`) VALUES
('admin', 'admin', 'kolstrup@hotmail.com', 3, 2),
('admin', 'admin', 'admin@admin.admin', 4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `armor`
--

CREATE TABLE `armor` (
  `id` int(11) NOT NULL,
  `name` varchar(90) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `armor`
--

INSERT INTO `armor` (`id`, `name`, `strength`, `agility`, `intellect`, `stamina`) VALUES
(1, 'Dummy Armor', 1, 1, 8, 8);

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(18) NOT NULL,
  `class_id_fk` int(11) NOT NULL,
  `statsheet_id_fk` int(11) NOT NULL,
  `inventory_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `name`, `class_id_fk`, `statsheet_id_fk`, `inventory_id_fk`) VALUES
(2, 'Defuzed', 7, 1, 1),
(3, 'Nixx', 4, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `character_id_fk` int(11) NOT NULL,
  `character_name_fk` varchar(18) NOT NULL,
  `messege` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `class` varchar(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `class`) VALUES
(1, 'Mage'),
(2, 'Warrior'),
(3, 'Hunter'),
(4, 'Paladin'),
(5, 'Warlock'),
(6, 'Druid'),
(7, 'Rogue'),
(8, 'Shaman'),
(9, 'Priest');

-- --------------------------------------------------------

--
-- Table structure for table `helm`
--

CREATE TABLE `helm` (
  `id` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL,
  `name` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `helm`
--

INSERT INTO `helm` (`id`, `strength`, `agility`, `intellect`, `stamina`, `name`) VALUES
(1, 5, 3, 0, 6, 'Dummy Helm');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `mana_potion` int(11) NOT NULL,
  `health_potion` int(11) NOT NULL,
  `currency` int(11) NOT NULL,
  `food` int(11) NOT NULL,
  `water` int(11) NOT NULL,
  `helm_fk` int(11) NOT NULL,
  `armor_fk` int(11) NOT NULL,
  `weapon_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`id`, `mana_potion`, `health_potion`, `currency`, `food`, `water`, `helm_fk`, `armor_fk`, `weapon_fk`) VALUES
(1, 1, 1, 32, 5, 5, 1, 1, 1),
(2, 23, 1, 4340, 5, 5, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `statsheet`
--

CREATE TABLE `statsheet` (
  `id` int(11) NOT NULL,
  `attack_power` int(11) NOT NULL,
  `spell_power` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statsheet`
--

INSERT INTO `statsheet` (`id`, `attack_power`, `spell_power`, `strength`, `agility`, `intellect`, `stamina`, `level`) VALUES
(1, 32, 0, 8, 12, 0, 22, 4),
(2, 834, 0, 449, 284, 21, 564, 54);

-- --------------------------------------------------------

--
-- Table structure for table `weapon`
--

CREATE TABLE `weapon` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL,
  `attack_power` int(11) NOT NULL,
  `spell_power` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `weapon`
--

INSERT INTO `weapon` (`id`, `name`, `strength`, `agility`, `intellect`, `stamina`, `attack_power`, `spell_power`) VALUES
(1, 'Dummy Weapon', 4, 5, 3, 11, 32, 12);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `background_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `character_id` (`character_id`),
  ADD KEY `character_id_2` (`character_id`);

--
-- Indexes for table `armor`
--
ALTER TABLE `armor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_id_fk` (`inventory_id_fk`),
  ADD KEY `statsheet_id_fk` (`statsheet_id_fk`),
  ADD KEY `class_id_fk` (`class_id_fk`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `helm`
--
ALTER TABLE `helm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `helm_fk` (`helm_fk`),
  ADD KEY `armor_fk` (`armor_fk`),
  ADD KEY `weapon_fk` (`weapon_fk`);

--
-- Indexes for table `statsheet`
--
ALTER TABLE `statsheet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `weapon`
--
ALTER TABLE `weapon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `armor`
--
ALTER TABLE `armor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `helm`
--
ALTER TABLE `helm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `statsheet`
--
ALTER TABLE `statsheet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `weapon`
--
ALTER TABLE `weapon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`);

--
-- Constraints for table `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`class_id_fk`) REFERENCES `classes` (`id`),
  ADD CONSTRAINT `characters_ibfk_2` FOREIGN KEY (`inventory_id_fk`) REFERENCES `inventory` (`id`),
  ADD CONSTRAINT `characters_ibfk_3` FOREIGN KEY (`statsheet_id_fk`) REFERENCES `statsheet` (`id`);

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`armor_fk`) REFERENCES `armor` (`id`),
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`helm_fk`) REFERENCES `helm` (`id`),
  ADD CONSTRAINT `inventory_ibfk_3` FOREIGN KEY (`weapon_fk`) REFERENCES `weapon` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
