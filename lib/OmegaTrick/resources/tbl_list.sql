SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_list`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_list`;
CREATE TABLE `tbl_list` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `caption` varchar(255) NOT NULL,
  `modified` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `tbl_list`
-- ----------------------------
INSERT INTO `tbl_list` VALUES ('1', 'リストアイテム１', '2010-04-16 21:57:37', '2010-04-16 21:57:34'), ('2', 'リストアイテム２', '2010-04-16 21:57:39', '2010-04-16 21:57:37'), ('3', 'リストアイテム３', '2010-04-16 21:58:04', '2010-04-16 21:58:00');

