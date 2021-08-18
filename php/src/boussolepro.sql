-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 18 août 2021 à 12:50
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.3.29

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

CREATE TABLE `besoins` (
  `ID` int(11) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `besoins` text NOT NULL,
  `dateDeplacement` varchar(191) NOT NULL,
  `autresDemandes` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `boostpro` (
  `ID` int(11) NOT NULL,
  `confirmationAbonne` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `entreprise` varchar(191) NOT NULL,
  `secteur` varchar(191) NOT NULL,
  `contact` varchar(191) NOT NULL,
  `typeCompagne` varchar(191) NOT NULL,
  `objetCompagne` text NOT NULL,
  `montant` varchar(191) DEFAULT NULL,
  `commentaire` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `expertbp` (
  `ID` int(11) NOT NULL,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `objet` varchar(191) NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `feedback` (
  `ID` int(11) NOT NULL,
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
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `feedback`
--

INSERT INTO `feedback` (`ID`, `nom`, `prenom`, `avecQui`, `serviceRecent`, `organisation`, `ponctualite`, `qualite`, `informations`, `informationBoussolePro`, `importance`, `evaluation`, `valeurAjoutee`, `motsClesSprint`, `feedbackParticulier`, `autorisation`, `feedbackAmelioration`, `feedbackEquipe`, `date`) VALUES
(1, 'a', 'b', 'Shoura Pro Observateur silencieux', 'Shoura Pro', 'Non Satisfait', 'Non Satisfait', 'Non Satisfait', 'Non Satisfait', 'OUI', 'OUI', 'bad', 'a', 'ss', 'dd', 'OUI', 'q', 'ff', '2021-08-10 09:48:52');

-- --------------------------------------------------------

--
-- Structure de la table `meetup`
--

CREATE TABLE `meetup` (
  `ID` int(11) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `prenomContactSouhaite` varchar(191) DEFAULT NULL,
  `nomContactSouhaite` varchar(191) DEFAULT NULL,
  `raisonMeet` varchar(191) NOT NULL,
  `autreInfos` text DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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
-- Structure de la table `partenaire`
--

CREATE TABLE `partenaire` (
  `ID` int(11) NOT NULL,
  `image` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `activite` varchar(191) NOT NULL,
  `avantage` varchar(191) NOT NULL,
  `lien` varchar(191) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `partenaire`
--

INSERT INTO `partenaire` (`ID`, `image`, `nom`, `activite`, `avantage`, `lien`) VALUES
(6, 'blob:http://localhost:3000/b69d0304-181f-4bc8-8f33-907f9dd8dda2', 'Loire Atlantique', 'PiÃ¨ce de rechange automobiles', '10 abonnements standards annuels offerts', 'http://www.loireatlantique-automotive.fr/'),
(7, 'blob:http://localhost:3000/733a6a84-8772-45fa-9789-62f86b32aae8', 'AUDIT OUEST CONSULTIONG', 'Expertise comptable, conseil fiscal et juridique', '3 abonnements standards annuels offerts', 'https://www.auditouestconsulting.com/'),
(8, 'blob:http://localhost:3000/51f2b1b3-ee30-4f58-ae65-f968bdf7b8a2', 'BALQIS FRANCE', 'Votre grossiste en produit cosmÃ©tique bio 100% naturel pour particulier et revendeur', '15% de rÃ©duction .Pour bÃ©nÃ©ficier de cette rÃ©duction, voici le code FEA15', 'https://leshuilesdebalqis.fr/');

-- --------------------------------------------------------

--
-- Structure de la table `profilerelaisexpert`
--

CREATE TABLE `profilerelaisexpert` (
  `ID` int(11) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `competances` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

CREATE TABLE `publication` (
  `ID` int(11) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `titre` varchar(191) NOT NULL,
  `image` varchar(191) DEFAULT NULL,
  `contenu` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `relaisbp`
--

CREATE TABLE `relaisbp` (
  `ID` int(11) NOT NULL,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `objet` varchar(191) NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `shourapro` (
  `ID` int(11) NOT NULL,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `problematique` text NOT NULL,
  `domainesExpert` text NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `sprintpro` (
  `ID` int(11) NOT NULL,
  `initiateur` varchar(191) NOT NULL,
  `prenom` varchar(191) NOT NULL,
  `nom` varchar(191) NOT NULL,
  `avecQui` varchar(191) NOT NULL,
  `prenomAbonne` varchar(191) DEFAULT NULL,
  `rangAbonne` varchar(11) DEFAULT NULL,
  `prenomExterieure` varchar(191) DEFAULT NULL,
  `raison` varchar(191) NOT NULL,
  `creneaux` varchar(191) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

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

CREATE TABLE `utilisateur` (
  `ID` int(11) NOT NULL,
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
  `token` tinyint(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID`, `nom`, `prenom`, `email`, `pays`, `ville`, `entreprise`, `objetEntreprise`, `activiteProfessionnelle`, `role`, `password`, `token`) VALUES
(14, 's', 'd', 'h', 'Bangladesh', 'k', 'n', 'm', 'n', 'Admin', '0000', NULL),
(12, 'sd', 'cham', 'nn', 'Bangladesh', 'l', 'hkkk', 'm', 'n', 'ModÃ©rateur', '0000', NULL),
(13, 's', 'd', 'h', 'Bangladesh', 'k', 'n', 'm', 'n', 'Admin', '0000', NULL),
(15, 's', 'd', 'h', 'Bangladesh', 'k', 'n', 'm', 'n', 'Admin', '0000', NULL),
(16, 'salia', 'cham', 'h@k.com', 'France', 'casa', 'altran', 'dd', 'ingeneer', 'Admin', '0000', NULL),
(17, 'salima', 'f', 'ff', 'Argentine', 'f', 'f', 'dd', 'ff', 'ModÃ©rateur', 'dd', NULL);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `profilerelaisexpert`
--
ALTER TABLE `profilerelaisexpert`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `publication`
--
ALTER TABLE `publication`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
