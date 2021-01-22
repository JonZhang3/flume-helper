DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `config_name` varchar(64) NOT NULL,
  `agent_name` varchar(64) DEFAULT NULL,
  `channels` text,
  `sources` text,
  `sinks` text,
  `state` tinyint(1) unsigned DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `update_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
