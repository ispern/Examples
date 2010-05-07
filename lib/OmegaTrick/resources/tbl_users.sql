SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tbl_users`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE `tbl_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `del` tinyint(4) NOT NULL COMMENT '削除フラグ',
  `auto_signin_key` char(32) NOT NULL COMMENT '自動サインインキー',
  `email` varchar(255) NOT NULL COMMENT 'メールアドレス',
  `password` varchar(255) NOT NULL COMMENT 'パスワード',
  `last_name` varchar(255) NOT NULL COMMENT '姓',
  `first_name` varchar(255) NOT NULL COMMENT '名',
  `last_name_kana` varchar(255) NOT NULL COMMENT '姓カナ',
  `first_name_kana` varchar(255) NOT NULL COMMENT '名カナ',
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',
  `created` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '作成日時',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `tbl_users`
-- ----------------------------
INSERT INTO `tbl_users` VALUES ('1', '0', '8bdbc34f1f79a875581bdc15acb47b1f', 'master@omegatrick.com', 'trickmaster', '尾女鹿', '鳥区', 'オメガ', 'トリック', '2010-04-12 12:36:37', '2010-04-12 11:49:44');

