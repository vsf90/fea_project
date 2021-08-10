-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 10 août 2021 à 13:44
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `boussolepro`
--

-- --------------------------------------------------------

--
-- Structure de la table `besoins`
--

DROP TABLE IF EXISTS `besoins`;
CREATE TABLE IF NOT EXISTS `besoins` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `besoins` text NOT NULL,
  `dateDeplacement` varchar(191) NOT NULL,
  `autresDemandes` text NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `besoins`
--

INSERT INTO `besoins` (`ID`, `nom`, `prenom`, `besoins`, `dateDeplacement`, `autresDemandes`, `date`) VALUES
(1, 'a', 'd', 'a', '', 's', '2021-08-09 19:50:20'),
(2, 'a', 'd', 'a', '2021-08-10T22:00:00.000Z', 's', '2021-08-09 19:50:28'),
(3, 'a', 'd', 'a', '', 's', '2021-08-09 19:50:52'),
(4, 'a', 'd', 'a', '', 's', '2021-08-09 19:51:38'),
(5, 'salima', 'cham', 'objet', '2021-08-11T22:00:00.000Z', 's', '2021-08-09 19:52:44');

-- --------------------------------------------------------

--
-- Structure de la table `boostpro`
--

DROP TABLE IF EXISTS `boostpro`;
CREATE TABLE IF NOT EXISTS `boostpro` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `confirmationAbonne` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `entreprise` varchar(191) NOT NULL,
  `secteur` varchar(191) NOT NULL,
  `contact` varchar(191) NOT NULL,
  `typeCompagne` varchar(191) NOT NULL,
  `objetCompagne` text NOT NULL,
  `montant` varchar(191) DEFAULT NULL,
  `commentaire` text,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boostpro`
--

INSERT INTO `boostpro` (`ID`, `confirmationAbonne`, `prenom`, `nom`, `entreprise`, `secteur`, `contact`, `typeCompagne`, `objetCompagne`, `montant`, `commentaire`, `date`) VALUES
(1, 'OUI', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 09:42:40'),
(2, 'OUI', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 09:43:59'),
(3, 'OUI', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 09:44:12'),
(4, 'NON', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 10:37:45');

-- --------------------------------------------------------

--
-- Structure de la table `expertbp`
--

DROP TABLE IF EXISTS `expertbp`;
CREATE TABLE IF NOT EXISTS `expertbp` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `objet` varchar(191) NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `expertbp`
--

INSERT INTO `expertbp` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `objet`, `creneaux`, `date`) VALUES
(5, 'Orga', 's', 'l', 's', 's', '  soir', '2021-08-06 11:33:24'),
(6, 'Moi en tant qu abonnÃ©(e)', 'a', 'a', 'Sonia B', 'a', 'matin  apres midi', '2021-08-09 11:54:35');

-- --------------------------------------------------------

--
-- Structure de la table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `serviceRecent` varchar(191) NOT NULL,
  `organisation` varchar(191) NOT NULL,
  `ponctualite` varchar(191) NOT NULL,
  `qualite` varchar(191) NOT NULL,
  `informations` varchar(191) NOT NULL,
  `informationBoussolePro` varchar(191) NOT NULL,
  `importance` varchar(191) NOT NULL,
  `evaluation` varchar(191) NOT NULL,
  `valeurAjoutee` varchar(191) DEFAULT NULL,
  `motsClesSprint` varchar(191) DEFAULT NULL,
  `feedbackParticulier` varchar(191) NOT NULL,
  `autorisation` varchar(191) NOT NULL,
  `feedbackAmelioration` varchar(191) DEFAULT NULL,
  `feedbackEquipe` varchar(191) DEFAULT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `feedback`
--

INSERT INTO `feedback` (`ID`, `nom`, `prenom`, `avecQui`, `serviceRecent`, `organisation`, `ponctualite`, `qualite`, `informations`, `informationBoussolePro`, `importance`, `evaluation`, `valeurAjoutee`, `motsClesSprint`, `feedbackParticulier`, `autorisation`, `feedbackAmelioration`, `feedbackEquipe`, `date`) VALUES
(1, 'a', 'b', 'Shoura Pro Observateur silencieux', 'Shoura Pro', 'Non Satisfait', 'Non Satisfait', 'Non Satisfait', 'Non Satisfait', 'OUI', 'OUI', 'bad', 'a', 'ss', 'dd', 'OUI', 'q', 'ff', '2021-08-10 09:48:52');

-- --------------------------------------------------------

--
-- Structure de la table `meetup`
--

DROP TABLE IF EXISTS `meetup`;
CREATE TABLE IF NOT EXISTS `meetup` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `prenomContactSouhaite` varchar(191) DEFAULT NULL,
  `nomContactSouhaite` varchar(191) DEFAULT NULL,
  `raisonMeet` varchar(191) NOT NULL,
  `autreInfos` text,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `meetup`
--

INSERT INTO `meetup` (`ID`, `prenom`, `nom`, `avecQui`, `prenomContactSouhaite`, `nomContactSouhaite`, `raisonMeet`, `autreInfos`, `date`) VALUES
(1, 's', 'c', 'Fea', 'sq', 'q', 'a', 'b', '2021-08-06 12:58:43'),
(2, 's', 'c', 'Fea', 'sq', 'q', 'a', 'b', '2021-08-06 12:59:45'),
(3, 'a', 'b', 'Un-e membre de FEA', 'c', 'd', 'f', 'g', '2021-08-06 13:03:35'),
(4, 'a', 'b', 'Un relais BP', 'c', 'd', 'f', 'g', '2021-08-06 13:05:02');

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

DROP TABLE IF EXISTS `publication`;
CREATE TABLE IF NOT EXISTS `publication` (
  `ID` int(11) NOT NULL,
  `titre` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `contenu` varchar(191) NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `relaisbp`
--

DROP TABLE IF EXISTS `relaisbp`;
CREATE TABLE IF NOT EXISTS `relaisbp` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `objet` varchar(191) NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `relaisbp`
--

INSERT INTO `relaisbp` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `objet`, `creneaux`, `date`) VALUES
(1, 'AbonnÃ©', 's', 'c', 's', 'c', 'matin', '2021-08-06 12:37:43'),
(2, 'Moi en tant qu abonnÃ©(e)', 's', 'c', 'Mimoun K', 'q', 'matin', '2021-08-09 11:44:32');

-- --------------------------------------------------------

--
-- Structure de la table `shourapro`
--

DROP TABLE IF EXISTS `shourapro`;
CREATE TABLE IF NOT EXISTS `shourapro` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `problematique` text NOT NULL,
  `domainesExpert` text NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `shourapro`
--

INSERT INTO `shourapro` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `problematique`, `domainesExpert`, `creneaux`, `date`) VALUES
(1, 'Orga', 'q', 'v', 's', 's', 'c', 'matin  aprÃ¨-midi  soir weekend', '2021-08-06 13:20:51'),
(2, 'Orga', 'q', 'v', 's', 's', 'c', 'matin  aprÃ¨-midi  soir weekend', '2021-08-06 13:22:08'),
(3, 'Ã‰quipe Orga Boussole PRO', 'a', 'b', 's', 'd', 'f', 'matin', '2021-08-06 13:23:23'),
(4, 'Moi en tant qu abonnÃ©(e)', 'a', 'a', 'Un-e membre de FEA', 'a', 'a', 'matin', '2021-08-09 11:09:50');

-- --------------------------------------------------------

--
-- Structure de la table `sprintpro`
--

DROP TABLE IF EXISTS `sprintpro`;
CREATE TABLE IF NOT EXISTS `sprintpro` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `prenomAbonne` varchar(191) DEFAULT NULL,
  `rangAbonne` varchar(11) DEFAULT NULL,
  `prenomExterieure` varchar(191) DEFAULT NULL,
  `raison` varchar(191) NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sprintpro`
--

INSERT INTO `sprintpro` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `prenomAbonne`, `rangAbonne`, `prenomExterieure`, `raison`, `creneaux`, `date`) VALUES
(1, 'Equipe Orga Boussole PRO', 'a', 'b', 'c', 'c', 'd', 'e', 'f', 'matin', '2021-08-06 13:58:14'),
(7, 'Moi en tant qu abonnÃ©', 'a', 'aaa', 'Une personne extÃ©rieure Ã  FEA', 'a', 'a', 'a', 'a', 'matin  aprÃ¨-midi', '2021-08-09 10:57:16');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`ID`, `email`, `password`) VALUES
(1, 'sa', 'li'),
(2, 'sa', 'li'),
(3, 'salima', 'cham');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(30) DEFAULT NULL,
  `nom` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `pays` varchar(191) DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `token` tinyint(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID`, `prenom`, `nom`, `email`, `pays`, `ville`, `role`, `password`, `token`) VALUES
(1, NULL, NULL, 'salima', NULL, NULL, NULL, 'cham', NULL),
(2, NULL, NULL, 'salima', NULL, NULL, NULL, 'cham', NULL),
(3, NULL, NULL, 'salima', NULL, NULL, NULL, 'cham', NULL),
(4, NULL, NULL, '', NULL, NULL, NULL, '', NULL),
(5, NULL, NULL, '', NULL, NULL, NULL, '', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
