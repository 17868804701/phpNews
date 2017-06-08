/*
Navicat MySQL Data Transfer

Source Server         : conn
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : jk

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-05-29 16:25:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `newstype` varchar(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('27', '推荐', '中国留学生毕业时赞美国空气鲜甜 外交部回应', 'http://cms-bucket.nosdn.127.net/c1823c01d3f64ba5b9b9135054bf744520170524172151.jpeg?imageView&amp;thumbnail=550x0', '2017-05-24 00:00:00', '网易新闻');
INSERT INTO `news` VALUES ('29', '推荐', '她艳压张曼玉，却遭性侵男友自杀，沦落街头', 'http://cms-bucket.nosdn.127.net/9f2d096a7ffa438ea846055269cacf9d20170524101639.jpeg', '2017-05-24 00:00:00', '网易新闻');
INSERT INTO `news` VALUES ('36', '推荐', '习近平：努力建设一支强大的现代化海军', 'http://cms-bucket.nosdn.127.net/catchpic/6/60/600730dc7d5e3664f92c3810eabcc46a.jpg', '2017-05-18 00:00:00', '网易新闻');
INSERT INTO `news` VALUES ('39', '科技', '十八大以来，习近平这样为传统文化“代言”', 'http://cms-bucket.nosdn.127.net/9f2d096a7ffa438ea846055269cacf9d20170524101639.jpeg', '2017-05-29 00:00:00', '新华网');
INSERT INTO `news` VALUES ('38', '娱乐', '西安欧亚学院20周年校庆,胡建波校长发表讲话', 'https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=ca5abb5b7bf0f736ccf344536b3cd87c/29381f30e924b899c83ff41c6d061d950a7bf697.jpg', '2017-05-28 00:00:00', '百度');
INSERT INTO `news` VALUES ('40', '百家', '江苏做了一件什么事，总理要求各地“都要这样做”?', 'http://cms-bucket.nosdn.127.net/9f2d096a7ffa438ea846055269cacf9d20170524101639.jpeg', '2017-05-29 00:00:00', '百度');
INSERT INTO `news` VALUES ('41', '社会', '4名房产中介出售业主信息被抓:10万条仅卖1千元', 'https://imgsa.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=ca5abb5b7bf0f736ccf344536b3cd87c/29381f30e924b899c83ff41c6d061d950a7bf697.jpg', '2017-05-29 00:00:00', '新浪');
INSERT INTO `news` VALUES ('42', '军事', 'P-3进香港附近空域或为收集江门某基地情报', 'http://p1.ifengimg.com/fck/2017_22/93f5af8226f7a36_w608_h434.png', '2017-05-29 00:00:00', '百度');
INSERT INTO `news` VALUES ('43', '体育', '国羽危机日渐加重 新人无力应对整体下滑局面', 'http://n.sinaimg.cn/sports/transform/20170529/t-AM-fyfquym1299339.jpg', '2017-05-29 00:00:00', '百度');
INSERT INTO `news` VALUES ('44', '汽车', '轿车操控配越野通过性，驾驶乐趣不输宝马', 'http://p1.ifengimg.com/fck/2017_22/93f5af8226f7a36_w608_h434.png', '2017-05-29 00:00:00', '腾讯');
INSERT INTO `news` VALUES ('45', '生活', '终于有人找到了高房价的死穴 炒房的真要慌了', 'http://p1.ifengimg.com/fck/2017_22/93f5af8226f7a36_w608_h434.png', '2017-05-29 00:00:00', '新华');
INSERT INTO `news` VALUES ('46', '其他', '首届中国（香港）国际汽车博览会落幕', 'http://f12.baidu.com/it/u=1573437605,2787654913&amp;fm=173&amp;s=C72E2BE00E0836C410AC8103030070D2&amp;w=640&amp;h=467&amp;img.JPEG&amp;access=215967316', '2017-05-29 00:00:00', '新浪');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin');
