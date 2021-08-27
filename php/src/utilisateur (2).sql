-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 27 août 2021 à 11:02
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
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `rang` int(20) DEFAULT NULL,
  `nom` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pays` varchar(191) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `entreprise` varchar(191) NOT NULL,
  `objetEntreprise` varchar(191) NOT NULL,
  `activiteProfessionnelle` varchar(191) NOT NULL,
  `role` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` tinyint(100) DEFAULT NULL,
  `type` varchar(191) NOT NULL,
  `verset` text NOT NULL,
  `secteur` varchar(200) NOT NULL,
  `expertiseSouhaitez` varchar(200) NOT NULL,
  `expertise` varchar(200) NOT NULL,
  `centresInteret` text NOT NULL,
  `confirmation` varchar(191) NOT NULL,
  `membreFEA` varchar(191) NOT NULL,
  `abonnement` varchar(191) NOT NULL,
  `topVille` text NOT NULL,
  `urlImage` varchar(191) NOT NULL,
  `confirmationLoi` varchar(191) NOT NULL,
  `telephone` varchar(191) NOT NULL,
  `NomContact1` varchar(191) DEFAULT NULL,
  `PrenomContact1` varchar(191) DEFAULT NULL,
  `TeleContact1` int(20) DEFAULT NULL,
  `NomContact2` varchar(191) DEFAULT NULL,
  `PrenomContact2` varchar(191) DEFAULT NULL,
  `TeleContact2` int(20) DEFAULT NULL,
  `chosesessentielles` varchar(200) DEFAULT NULL,
  `CadreTravail` varchar(200) DEFAULT NULL,
  `FontConfiance` varchar(200) DEFAULT NULL,
  `ReseauQualite` text,
  `InformationImportante` varchar(200) DEFAULT NULL,
  `NouveauxClients` varchar(200) DEFAULT NULL,
  `AiderDevelopper` varchar(200) DEFAULT NULL,
  `Benefices` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID`, `rang`, `nom`, `prenom`, `email`, `pays`, `ville`, `entreprise`, `objetEntreprise`, `activiteProfessionnelle`, `role`, `password`, `token`, `type`, `verset`, `secteur`, `expertiseSouhaitez`, `expertise`, `centresInteret`, `confirmation`, `membreFEA`, `abonnement`, `topVille`, `urlImage`, `confirmationLoi`, `telephone`, `NomContact1`, `PrenomContact1`, `TeleContact1`, `NomContact2`, `PrenomContact2`, `TeleContact2`, `chosesessentielles`, `CadreTravail`, `FontConfiance`, `ReseauQualite`, `InformationImportante`, `NouveauxClients`, `AiderDevelopper`, `Benefices`) VALUES
(22, 4, 'salima', 'chamrani', 'salima@gmail.com', 'maroc', 'casablanca', 'boussole pro', 'reseau', 'ingenieure', 'Inscrit', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 0, 'zennou', 'khalid', 'khalid@gmail.com', 'maroc', 'rabat', '', '', '', 'Inscrit', 'khalid', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 0, 'sas', 'sas', 'sasa', 'sasa', 'sasa', '', '', '', 'khalid', 'sasas', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 0, 'sasa', 'sasa', 'sasa', 'sasa', 'sasa', '', '', '', 'khalid', 'sasa', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 0, 'sasas', 'sasa', 'sasa', 'sas', 'asasa', '', '', '', 'khalid', 'sasa', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
