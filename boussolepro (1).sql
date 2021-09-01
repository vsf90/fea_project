-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
<<<<<<< Updated upstream:php/src/boussolepro (3).sql
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 24 août 2021 à 11:30
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21
=======
-- Hôte : 127.0.0.1
-- Généré le : lun. 23 août 2021 à 15:06
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.3.29
>>>>>>> Stashed changes:php/src/boussolepro (1).sql

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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `besoins`
--

INSERT INTO `besoins` (`ID`, `nom`, `prenom`, `besoins`, `dateDeplacement`, `autresDemandes`, `date`) VALUES
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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valider` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boostpro`
--

INSERT INTO `boostpro` (`ID`, `confirmationAbonne`, `prenom`, `nom`, `entreprise`, `secteur`, `contact`, `typeCompagne`, `objetCompagne`, `montant`, `commentaire`, `date`, `valider`) VALUES
(1, 'OUI', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-24 11:17:19', 1),
(2, 'OUI', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 09:43:59', 0),
(3, 'OUI', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 09:44:12', 0),
(4, 'NON', 'a', 'b', 'c', 'd', 'e', 'DÃ©velopper les ventes de mes produits et services', 'f', 'g', 'h', '2021-08-09 10:37:45', 0);

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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valider` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `expertbp`
--

INSERT INTO `expertbp` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `objet`, `creneaux`, `date`, `valider`) VALUES
(5, 'Orga', 's', 'l', 's', 's', '  soir', '2021-08-24 10:59:31', 1),
(6, 'Moi en tant qu abonnÃ©(e)', 'a', 'a', 'Sonia B', 'a', 'matin  apres midi', '2021-08-24 10:56:01', 1);

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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valider` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `meetup`
--

INSERT INTO `meetup` (`ID`, `prenom`, `nom`, `avecQui`, `prenomContactSouhaite`, `nomContactSouhaite`, `raisonMeet`, `autreInfos`, `date`, `valider`) VALUES
(1, 's', 'c', 'Fea', 'sq', 'q', 'a', 'b', '2021-08-06 12:58:43', 0),
(2, 's', 'c', 'Fea', 'sq', 'q', 'a', 'b', '2021-08-06 12:59:45', 0),
(3, 'a', 'b', 'Un-e membre de FEA', 'c', 'd', 'f', 'g', '2021-08-24 11:28:33', 1),
(4, 'a', 'b', 'Un relais BP', 'c', 'd', 'f', 'g', '2021-08-24 11:18:09', 1);

-- --------------------------------------------------------

--
-- Structure de la table `partenaire`
--

DROP TABLE IF EXISTS `partenaire`;
CREATE TABLE IF NOT EXISTS `partenaire` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `activite` varchar(191) NOT NULL,
  `avantage` varchar(191) NOT NULL,
  `lien` varchar(191) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `partenaire`
--

INSERT INTO `partenaire` (`ID`, `image`, `nom`, `activite`, `avantage`, `lien`) VALUES
(6, 'blob:http://localhost:3000/b69d0304-181f-4bc8-8f33-907f9dd8dda2', 'Loire Atlantique', 'PiÃ¨ce de rechange automobiles', '10 abonnements standards annuels offerts', 'http://www.loireatlantique-automotive.fr/'),
(7, 'blob:http://localhost:3000/733a6a84-8772-45fa-9789-62f86b32aae8', 'AUDIT OUEST CONSULTIONG', 'Expertise comptable, conseil fiscal et juridique', '3 abonnements standards annuels offerts', 'https://www.auditouestconsulting.com/'),
(8, 'blob:http://localhost:3000/51f2b1b3-ee30-4f58-ae65-f968bdf7b8a2', 'BALQIS FRANCE', 'Votre grossiste en produit cosmÃ©tique bio 100% naturel pour particulier et revendeur', '15% de rÃ©duction .Pour bÃ©nÃ©ficier de cette rÃ©duction, voici le code FEA15', 'https://leshuilesdebalqis.fr/'),
(12, 'blob:http://localhost:3000/1e690c85-113d-450b-8fcc-b8d4c2af0eb3', 'Iphone', 'I-commerce', 'yyyyyyyyyy', 'https://github.com/'),
(13, 'blob:http://localhost:3000/3a621839-dff7-4659-aeed-b6aad851faf0', 'sasa', 'sasa', 'sasas', 'sasa');

-- --------------------------------------------------------

--
-- Structure de la table `profilerelaisexpert`
--

DROP TABLE IF EXISTS `profilerelaisexpert`;
CREATE TABLE IF NOT EXISTS `profilerelaisexpert` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `competances` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `profilerelaisexpert`
--

INSERT INTO `profilerelaisexpert` (`ID`, `nom`, `image`, `role`, `competances`) VALUES
(1, 'll', 'blob:http://localhost:3000/2e8f7218-7d42-4fa9-b8e7-ec0d6da48b8a', 'relais', 'll'),
(2, 'j&#039;bb', 'blob:http://localhost:3000/75b3bcb9-9499-485e-b4c7-b74f8a3ee8f7', 'relais', 'mm'),
(3, 'hhhh&#039;kk&quot;', 'blob:http://localhost:3000/e1f19ee0-a289-4b89-a4fe-1fcea2c4fecc', 'relais', 'kkk&#039;ggg&quot;');

--
-- Déchargement des données de la table `profilerelaisexpert`
--

INSERT INTO `profilerelaisexpert` (`ID`, `nom`, `image`, `role`, `competances`) VALUES
(1, 'azazaz', 'blob:http://localhost:3000/30f3bd35-0737-4c19-88c6-a4ad52e425a6', 'expert', 'zazazazaz'),
(4, 'sasa', 'blob:http://localhost:3000/86cacad6-038f-4159-b221-aaa2c2638230', 'relais', 'ssassssssssssssssssssssssssssssss'),
(3, 'sasa', 'blob:http://localhost:3000/f4f4e3dd-fdb6-4eef-b5d4-b6d7ef0686cc', 'expert', 'sasasa');

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

DROP TABLE IF EXISTS `publication`;
CREATE TABLE IF NOT EXISTS `publication` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `titre` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `contenu` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `publication`
--

INSERT INTO `publication` (`ID`, `prenom`, `nom`, `titre`, `image`, `contenu`, `type`, `date`) VALUES
(25, 'sasa', 'sasa', 'sasas', 'blob:http://localhost:3000/4e6088b9-382a-4b22-983b-904ded0c2a46', 'sasas', 'Publication', '2021-08-20 22:48:12');

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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valider` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `relaisbp`
--

INSERT INTO `relaisbp` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `objet`, `creneaux`, `date`, `valider`) VALUES
(1, 'AbonnÃ©', 's', 'c', 's', 'c', 'matin', '2021-08-06 12:37:43', 0),
(2, 'Moi en tant qu abonnÃ©(e)', 's', 'c', 'Mimoun K', 'q', 'matin', '2021-08-24 11:16:12', 1);

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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valider` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `shourapro`
--

INSERT INTO `shourapro` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `problematique`, `domainesExpert`, `creneaux`, `date`, `valider`) VALUES
(1, 'Orga', 'q', 'v', 's', 's', 'c', 'matin  aprÃ¨-midi  soir weekend', '2021-08-06 13:20:51', 0),
(2, 'Orga', 'q', 'v', 's', 's', 'c', 'matin  aprÃ¨-midi  soir weekend', '2021-08-06 13:22:08', 0),
(3, 'Ã‰quipe Orga Boussole PRO', 'a', 'b', 's', 'd', 'f', 'matin', '2021-08-06 13:23:23', 0),
(4, 'Moi en tant qu abonnÃ©(e)', 'a', 'a', 'Un-e membre de FEA', 'a', 'a', 'matin', '2021-08-24 11:17:47', 1);

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
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `valider` tinyint(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sprintpro`
--

INSERT INTO `sprintpro` (`ID`, `initiateur`, `prenom`, `nom`, `avecQui`, `prenomAbonne`, `rangAbonne`, `prenomExterieure`, `raison`, `creneaux`, `date`, `valider`) VALUES
(1, 'Equipe Orga Boussole PRO', 'a', 'b', 'c', 'c', 'd', 'e', 'f', 'matin', '2021-08-24 11:12:34', 1),
(7, 'Moi en tant qu abonnÃ©', 'a', 'aaa', 'Une personne extÃ©rieure Ã  FEA', 'a', 'a', 'a', 'a', 'matin  aprÃ¨-midi', '2021-08-24 11:12:20', 1);

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `COL 1` varchar(4) DEFAULT NULL,
  `COL 2` varchar(8) DEFAULT NULL,
  `COL 3` varchar(18) DEFAULT NULL,
  `COL 4` varchar(13) DEFAULT NULL,
  `COL 5` varchar(5) DEFAULT NULL,
  `COL 6` varchar(10) DEFAULT NULL,
  `COL 7` varchar(8) DEFAULT NULL,
  `COL 8` varchar(8) DEFAULT NULL,
  `COL 9` varchar(5) DEFAULT NULL,
  `COL 10` varchar(4) DEFAULT NULL,
  `COL 11` varchar(6) DEFAULT NULL,
  `COL 12` varchar(10) DEFAULT NULL,
  `COL 13` varchar(11) DEFAULT NULL,
  `COL 14` varchar(7) DEFAULT NULL,
  `COL 15` varchar(8) DEFAULT NULL,
  `COL 16` varchar(18) DEFAULT NULL,
  `COL 17` varchar(9) DEFAULT NULL,
  `COL 18` varchar(13) DEFAULT NULL,
  `COL 19` varchar(12) DEFAULT NULL,
  `COL 20` varchar(9) DEFAULT NULL,
  `COL 21` varchar(10) DEFAULT NULL,
  `COL 22` varchar(15) DEFAULT NULL,
  `COL 23` varchar(8) DEFAULT NULL,
  `COL 24` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `test`
--

INSERT INTO `test` (`COL 1`, `COL 2`, `COL 3`, `COL 4`, `COL 5`, `COL 6`, `COL 7`, `COL 8`, `COL 9`, `COL 10`, `COL 11`, `COL 12`, `COL 13`, `COL 14`, `COL 15`, `COL 16`, `COL 17`, `COL 18`, `COL 19`, `COL 20`, `COL 21`, `COL 22`, `COL 23`, `COL 24`) VALUES
('id', 'prenom', 'email', 'pays', 'ville', 'entreprise', 'role', 'password', 'token', 'type', 'verset', 'profession', 'objectifPro', 'secteur', 'topVille', 'expertiseSouhaitez', 'expertise', 'centreInteret', 'confirmation', 'membreFEA', 'abonnement', 'confirmationLoi', 'urlImage', 'nom'),
('444', 'afraw', 'afraw@gmail.com', 'ait el farssi', 'H', 'PA452132', '69582154', 'D1360212', '2', 'dd', 'sas', 'zz', 'aa', 'hhhff', 'll', 'jj', 'zz', 'aa', 'aa', 'ff', 'd', 'ddd', 'ee', 'tinan'),
('422', 'assafo', 'assafo@gmail.com', 'ghallile', 'H', 'Pa124521', '45218547', 'D4552145', '1', 'dd', 'sas', 'zz', 'aa', 'ff', 'ddd', 'jjj', 'zz', 'aa', 'aa', 'ff', 'd', 'ddd', 'ee', 'irwan'),
('4242', 'rabil', 'rabil@gmail.com', 'tabsbast', 'F', 'Pa457854', '63254125', 'D4521365', '4', 'dd', 'sas', 'zz', 'aa', 'ff', 'ddd', 'jjjj', 'zz', 'aaa', 'aa', 'ff', 'dd', 'ddd', 'eee', 'nihya'),
('55', 'dayfas', 'dayfas@gmail.com', 'afanour', 'F', 'PA486248', '14521445', 'D2541748', '3', 'dd', 'sas', 'zz', 'aa', 'ff', 'dddd', 'jjjj', 'zz', 'aaa', 'aa', 'ff', 'ddd', 'ddd', 'eee', 'nomidia'),
('242', 'minhilan', 'minhilan@gmail.com', 'hloul', 'F', 'PA951245', '45578542', 'D1254785', '2', 'dd', 'sas', 'zz', 'aa', 'ff', 'dd', 'jjjjj', 'zzz', 'aaa', 'aaa', 'ff', 'dddd', 'ddd', 'eeee', 'tinhila');

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

<<<<<<< Updated upstream:php/src/boussolepro (3).sql
DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
=======
CREATE TABLE `utilisateur` (
  `ID` int(11) NOT NULL,
>>>>>>> Stashed changes:php/src/boussolepro (1).sql
  `rang` int(20) NOT NULL,
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
<<<<<<< Updated upstream:php/src/boussolepro (3).sql
=======
  `profession` varchar(191) NOT NULL,
>>>>>>> Stashed changes:php/src/boussolepro (1).sql
  `secteur` varchar(200) NOT NULL,
  `expertiseSouhaitez` varchar(200) NOT NULL,
  `expertise` varchar(200) NOT NULL,
  `centresInteret` text NOT NULL,
  `confirmation` varchar(191) NOT NULL,
  `membreFEA` varchar(191) NOT NULL,
  `abonnement` varchar(191) NOT NULL,
  `topVille` text NOT NULL,
  `urlImage` varchar(191) NOT NULL,
<<<<<<< Updated upstream:php/src/boussolepro (3).sql
  `confirmationLoi` varchar(191) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
=======
  `confirmationLoi` varchar(191) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
>>>>>>> Stashed changes:php/src/boussolepro (1).sql

--
-- Déchargement des données de la table `utilisateur`
--

<<<<<<< Updated upstream:php/src/boussolepro (3).sql
INSERT INTO `utilisateur` (`ID`, `rang`, `nom`, `prenom`, `email`, `pays`, `ville`, `entreprise`, `objetEntreprise`, `activiteProfessionnelle`, `role`, `password`, `token`, `type`, `verset`, `secteur`, `expertiseSouhaitez`, `expertise`, `centresInteret`, `confirmation`, `membreFEA`, `abonnement`, `topVille`, `urlImage`, `confirmationLoi`) VALUES
(12, 0, 'sd', 'cham&#039;amm', 'nn', 'Algerie', 'lk', 'hkkk', 'm', 'n', 'ModÃ©rateur', '0000', NULL, '', 'jj', '', 'nn', 'mm', 'nn', '', '', '', 'll', '', ''),
(16, 1, 'salma', 'chamranii', 'salima@gmail.com', 'Maroc', 'casablanca', 'altran', 'ddll', 'ingenieure', 'Admin', '0000', NULL, '', 'l\'homme ne recolte que le fruit de ses efforts', '', 'expertiseSll', 'expertisedd', 'centre interet', '', '', 'premium', 'casa rabat fes', '', ''),
(17, 0, 'salima', 'f', 'ff', 'Argentine', 'f', 'f', 'dd', 'ff', 'ModÃ©rateur', 'dd', NULL, '', '', '', '', '', '', '', '', '', '', '', ''),
(18, 0, 'zennou', 'khalid', 'khalid@gmail.com', 'maroc', 'rabat', '', '', '', 'khalid', 'khalid', NULL, '', '', '', '', '', '', '', '', '', '', '', ''),
(19, 0, 'sas', 'sas', 'sasa', 'sasa', 'sasa', '', '', '', 'khalid', 'sasas', NULL, '', '', '', '', '', '', '', '', '', '', '', ''),
(20, 0, 'sasa', 'sasa', 'sasa', 'sasa', 'sasa', '', '', '', 'khalid', 'sasa', NULL, '', '', '', '', '', '', '', '', '', '', '', ''),
(21, 0, 'sasas', 'sasa', 'sasa', 'sas', 'asasa', '', '', '', 'khalid', 'sasa', NULL, '', '', '', '', '', '', '', '', '', '', '', '');
=======
INSERT INTO `utilisateur` (`ID`, `rang`, `nom`, `prenom`, `email`, `pays`, `ville`, `entreprise`, `objetEntreprise`, `activiteProfessionnelle`, `role`, `password`, `token`, `type`, `verset`, `profession`, `secteur`, `expertiseSouhaitez`, `expertise`, `centresInteret`, `confirmation`, `membreFEA`, `abonnement`, `topVille`, `urlImage`, `confirmationLoi`) VALUES
(14, 0, 's', 'd', 'h', 'Bangladesh', 'k', 'n', 'm', 'n', 'Admin', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(12, 0, 'sd', 'cham', 'nn', 'Bangladesh', 'l', 'hkkk', 'm', 'n', 'Inscrit', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(13, 0, 's', 'd', 'k', 'Bangladesh', 'k', 'n', 'm', 'n', 'Admin', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(15, 0, 's', 'd', 'yh', 'Bangladesh', 'k', 'n', 'm', 'n', 'Admin', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(16, 0, 'salia', 'cham', 'h@k.com', 'France', 'casa', 'altran', 'dd', 'ingeneer', 'Admin', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(17, 0, 'salima', 'kasa', 'ffsas@mmm.ccs', 'Barbade', 'fsa', 'f', 'dddd', 'ffsassssdd', 'Modérateur', 'dd', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(18, 0, 'zennou', 'khalid', 'khalid@gmail.com', 'maroc', 'rabat', '', '', '', 'khalid', 'khalid', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(19, 0, 'sas', 'sas', 'sasa', 'sasa', 'sasa', '', '', '', 'khalid', 'sasas', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(20, 0, 'sasa', 'sasa', 'sasa', 'sasa', 'sasa', '', '', '', 'khalid', 'sasa', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(21, 0, 'sasas', 'sasa', 'sasa', 'sas', 'asasa', '', '', '', 'khalid', 'sasa', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(22, 0, '', '', '', '', '', '', '', '', 'khalid', '', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(23, 0, 'sas', 'sas', 'sasa@sa.ss', 'sas', 'sasa', '', '', '', 'khalid', 'sas', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(24, 0, '', '', '', '', '', '', '', '', 'khalid', '', NULL, '', '', '', '', '', '', '', '', '', '', '', '', ''),
(25, 0, 'zennou', 'khalid', 'khalid1zennou@gmail.com', 'Albanie', 'rabat', 'boussoul pro', 'data ', 'data', 'Modérateur', '0000', NULL, '', '', '', '', '', '', '', '', '', '', '', '', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `besoins`
--
ALTER TABLE `besoins`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `boostpro`
--
ALTER TABLE `boostpro`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `expertbp`
--
ALTER TABLE `expertbp`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `meetup`
--
ALTER TABLE `meetup`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `partenaire`
--
ALTER TABLE `partenaire`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `profilerelaisexpert`
--
ALTER TABLE `profilerelaisexpert`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `publication`
--
ALTER TABLE `publication`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `relaisbp`
--
ALTER TABLE `relaisbp`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `shourapro`
--
ALTER TABLE `shourapro`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `sprintpro`
--
ALTER TABLE `sprintpro`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `besoins`
--
ALTER TABLE `besoins`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `boostpro`
--
ALTER TABLE `boostpro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `expertbp`
--
ALTER TABLE `expertbp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `meetup`
--
ALTER TABLE `meetup`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `partenaire`
--
ALTER TABLE `partenaire`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `profilerelaisexpert`
--
ALTER TABLE `profilerelaisexpert`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `publication`
--
ALTER TABLE `publication`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `relaisbp`
--
ALTER TABLE `relaisbp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `shourapro`
--
ALTER TABLE `shourapro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `sprintpro`
--
ALTER TABLE `sprintpro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
>>>>>>> Stashed changes:php/src/boussolepro (1).sql
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
