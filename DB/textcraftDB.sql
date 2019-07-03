-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2019 at 08:44 AM
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
  `account_name` varchar(18) NOT NULL,
  `password` varchar(25) NOT NULL,
  `email` varchar(254) NOT NULL,
  `account_id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_name`, `password`, `email`, `account_id`, `character_id`) VALUES
('admin', 'admin', 'admin@admin.admin', 4, 3),
('test', 'testpassword', 'test@test.test', 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `armor`
--

CREATE TABLE `armor` (
  `armor_id` int(11) NOT NULL,
  `armor_name` varchar(90) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `armor`
--

INSERT INTO `armor` (`armor_id`, `armor_name`, `strength`, `agility`, `intellect`, `stamina`) VALUES
(1, 'Dummy Armor', 1, 1, 8, 8);

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `character_id` int(11) NOT NULL,
  `character_name` varchar(18) NOT NULL,
  `class_id_fk` int(11) NOT NULL,
  `statsheet_id_fk` int(11) NOT NULL,
  `inventory_id_fk` int(11) NOT NULL,
  `resource_id_fk` int(11) NOT NULL,
  `extra_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`character_id`, `character_name`, `class_id_fk`, `statsheet_id_fk`, `inventory_id_fk`, `resource_id_fk`, `extra_id_fk`) VALUES
(2, 'Defuzed', 8, 1, 1, 1, 1),
(3, 'Nixxi', 1, 2, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `messege_id` int(11) NOT NULL,
  `character_id_fk` int(11) NOT NULL,
  `character_name_fk` varchar(18) NOT NULL,
  `messege` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`class_id`, `class_name`) VALUES
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
-- Table structure for table `extra`
--

CREATE TABLE `extra` (
  `extra_id` int(11) NOT NULL,
  `extra_save` tinyint(1) NOT NULL,
  `extra_random` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `extra`
--

INSERT INTO `extra` (`extra_id`, `extra_save`, `extra_random`) VALUES
(1, 1, 16),
(2, 1, 15);

-- --------------------------------------------------------

--
-- Table structure for table `helm`
--

CREATE TABLE `helm` (
  `helm_id` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL,
  `helm_name` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `helm`
--

INSERT INTO `helm` (`helm_id`, `strength`, `agility`, `intellect`, `stamina`, `helm_name`) VALUES
(1, 5, 3, 0, 6, 'Dummy Helm');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `inventory_id` int(11) NOT NULL,
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

INSERT INTO `inventory` (`inventory_id`, `mana_potion`, `health_potion`, `currency`, `food`, `water`, `helm_fk`, `armor_fk`, `weapon_fk`) VALUES
(1, 1, 1, 32, 5, 5, 1, 1, 1),
(2, 23, 1, 4340, 5, 5, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE `resources` (
  `resource_id` int(11) NOT NULL,
  `hp` int(11) NOT NULL,
  `hpMax` int(11) NOT NULL,
  `mana` int(11) NOT NULL,
  `manaMax` int(11) NOT NULL,
  `rage` int(11) NOT NULL,
  `rageMax` int(11) NOT NULL,
  `energy` int(11) NOT NULL,
  `energyMax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resources`
--

INSERT INTO `resources` (`resource_id`, `hp`, `hpMax`, `mana`, `manaMax`, `rage`, `rageMax`, `energy`, `energyMax`) VALUES
(1, 100, 100, 100, 130, 0, 100, 100, 100),
(2, 2381, 2381, 100, 1230, 0, 100, 100, 100);

-- --------------------------------------------------------

--
-- Table structure for table `statsheet`
--

CREATE TABLE `statsheet` (
  `statsheet_id` int(11) NOT NULL,
  `attack_power` int(11) NOT NULL,
  `spell_power` int(11) NOT NULL,
  `strength` int(11) NOT NULL,
  `agility` int(11) NOT NULL,
  `intellect` int(11) NOT NULL,
  `stamina` int(11) NOT NULL,
  `levelPre` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `exp` int(11) NOT NULL,
  `expMax` int(11) NOT NULL,
  `skill_points` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `statsheet`
--

INSERT INTO `statsheet` (`statsheet_id`, `attack_power`, `spell_power`, `strength`, `agility`, `intellect`, `stamina`, `levelPre`, `level`, `exp`, `expMax`, `skill_points`) VALUES
(1, 100, 0, 8, 12, 0, 22, 1, 1, 0, 6, 0),
(2, 33, 432, 449, 284, 21, 564, 54, 54, 0, 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `weapon`
--

CREATE TABLE `weapon` (
  `weapon_id` int(11) NOT NULL,
  `weapon_name` varchar(100) NOT NULL,
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

INSERT INTO `weapon` (`weapon_id`, `weapon_name`, `strength`, `agility`, `intellect`, `stamina`, `attack_power`, `spell_power`) VALUES
(1, 'Dummy Weapon', 4, 5, 3, 11, 32, 12);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `zone_id` int(11) NOT NULL,
  `zone_name` varchar(80) NOT NULL,
  `background_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`),
  ADD KEY `character_id` (`character_id`),
  ADD KEY `character_id_2` (`character_id`);

--
-- Indexes for table `armor`
--
ALTER TABLE `armor`
  ADD PRIMARY KEY (`armor_id`);

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`character_id`),
  ADD KEY `inventory_id_fk` (`inventory_id_fk`),
  ADD KEY `statsheet_id_fk` (`statsheet_id_fk`),
  ADD KEY `class_id_fk` (`class_id_fk`),
  ADD KEY `resource_id_fk` (`resource_id_fk`) USING BTREE,
  ADD KEY `extra_id_fk` (`extra_id_fk`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`messege_id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `extra`
--
ALTER TABLE `extra`
  ADD PRIMARY KEY (`extra_id`);

--
-- Indexes for table `helm`
--
ALTER TABLE `helm`
  ADD PRIMARY KEY (`helm_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`inventory_id`),
  ADD KEY `helm_fk` (`helm_fk`),
  ADD KEY `armor_fk` (`armor_fk`),
  ADD KEY `weapon_fk` (`weapon_fk`);

--
-- Indexes for table `resources`
--
ALTER TABLE `resources`
  ADD PRIMARY KEY (`resource_id`);

--
-- Indexes for table `statsheet`
--
ALTER TABLE `statsheet`
  ADD PRIMARY KEY (`statsheet_id`);

--
-- Indexes for table `weapon`
--
ALTER TABLE `weapon`
  ADD PRIMARY KEY (`weapon_id`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`zone_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `armor`
--
ALTER TABLE `armor`
  MODIFY `armor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `character_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `messege_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `extra`
--
ALTER TABLE `extra`
  MODIFY `extra_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `helm`
--
ALTER TABLE `helm`
  MODIFY `helm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `resources`
--
ALTER TABLE `resources`
  MODIFY `resource_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `statsheet`
--
ALTER TABLE `statsheet`
  MODIFY `statsheet_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `weapon`
--
ALTER TABLE `weapon`
  MODIFY `weapon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `zone_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`character_id`) REFERENCES `characters` (`character_id`) ON DELETE CASCADE;

--
-- Constraints for table `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`class_id_fk`) REFERENCES `classes` (`class_id`),
  ADD CONSTRAINT `characters_ibfk_2` FOREIGN KEY (`inventory_id_fk`) REFERENCES `inventory` (`inventory_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `characters_ibfk_3` FOREIGN KEY (`statsheet_id_fk`) REFERENCES `statsheet` (`statsheet_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `characters_ibfk_4` FOREIGN KEY (`resource_id_fk`) REFERENCES `resources` (`resource_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `characters_ibfk_5` FOREIGN KEY (`extra_id_fk`) REFERENCES `extra` (`extra_id`) ON DELETE CASCADE;

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`armor_fk`) REFERENCES `armor` (`armor_id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`helm_fk`) REFERENCES `helm` (`helm_id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `inventory_ibfk_3` FOREIGN KEY (`weapon_fk`) REFERENCES `weapon` (`weapon_id`) ON DELETE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
