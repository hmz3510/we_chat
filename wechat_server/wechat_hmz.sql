SET NAMES UTF8;
DROP DATABASE IF EXISTS wechat_hmz;
CREATE DATABASE wechat_hmz CHARSET = UTF8;
USE wechat_hmz;

/*轮播表*/
CREATE TABLE sc_index_carousel(
	lid INT(11) PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(256),
	title VARCHAR(128)
);
/*首页商品数据表*/
CREATE TABLE sc_laptop(
	lid INT(11) PRIMARY key AUTO_INCREMENT,
	family_id INT(11),
	title VARCHAR(128),
	price decimal(10,2),
	took INT(11),
	img VARCHAR(256)
);

CREATE TABLE sc_laptop_nav(
	lid INT(11) PRIMARY KEY AUTO_INCREMENT,
	fid  INT(11),
	title VARCHAR(128)
);

CREATE TABLE sc_laptop_product(
	lid INT(11) PRIMARY KEY AUTO_INCREMENT,
	pid INT(11),
	title VARCHAR(64),
	img_url VARCHAR(256)
);
CREATE TABLE sc_laptop_head(
	lid INT(11),
	pid INT(11),
	title VARCHAR(64)

);

/*图片表*/
CREATE TABLE sc_laptop_pic(
	pid INT(11) PRIMARY KEY AUTO_INCREMENT,
	laptop_id INT(11),
	lg VARCHAR(256)
);

/*用户表*/
CREATE TABLE sc_user(
	uid INT(11) PRIMARY KEY AUTO_INCREMENT,
	openid INT(11),
	nickName VARCHAR(64),
	avatarUrl VARCHAR(512),
	province VARCHAR(16)
);


/*商品数据表*/
CREATE TABLE sc_shopcart (
	iid INT(11) PRIMARY KEY AUTO_INCREMENT,
	user_id INT(11),
	product_id INT(11),
	count INT(11),
	isselect boolean
);


/*插入轮播数据*/
INSERT INTO sc_index_carousel values('NULL','http://192.168.199.233:4000/images/banner/banner-1.jpg','轮播广告');
INSERT INTO sc_index_carousel values('NULL','http://192.168.199.233:4000/images/banner/fruit-banner.png','轮播广告');
INSERT INTO sc_index_carousel values('NULL','http://192.168.199.233:4000/images/banner/banner-6.jpg','轮播广告');

/*插入商品数据*/
INSERT INTO sc_laptop values('1','1','秋日田园 有机红富士苹果','78.00','30','http://192.168.199.233:4000/images/food/11.png');
INSERT INTO sc_laptop values('2','1','澳大利亚进口脐橙 丑橙 新鲜','128.00','15','http://192.168.199.233:4000/images/food/5.png');
INSERT INTO sc_laptop values('3','1','西瓜 新鲜水果 现摘现卖','35.00','10','http://192.168.199.233:4000/images/food/西瓜.png');
INSERT INTO sc_laptop values('4','1','外国进口香瓜 新鲜营养','20.00','30','http://192.168.199.233:4000/images/food/香瓜.png');
INSERT INTO sc_laptop values('5','2','戴尔 超薄笔记本 搭配i7处理器','5211.00','100','http://192.168.199.233:4000/images/tel/find_01.jpg');
INSERT INTO sc_laptop values('6','2','苹果7plus 256G 红色专属个人手机','6415.00','78','http://192.168.199.233:4000/images/tel/floor1_col2_13.jpg');
INSERT INTO sc_laptop values('7','2','苹果MACbookb超薄黑色笔记本','4300.00','100','http://192.168.199.233:4000/images/tel/find_05.jpg');
INSERT INTO sc_laptop values('8','2','华为手机 专属你的手机用出不一样','2100.00','33','http://192.168.199.233:4000/images/tel/rank_col1_04.jpg');

/*插入搜索*/
INSERT sc_laptop_nav values('1','1','热搜推荐');
INSERT sc_laptop_nav values('2','2','手机数码');
INSERT sc_laptop_nav values('3','3','生鲜果蔬');
INSERT sc_laptop_nav values('4','4','运动户外');
INSERT sc_laptop_nav values('5','5','家用电器');
INSERT sc_laptop_nav values('6','6','电脑办公');
INSERT sc_laptop_nav values('7','7','美妆护肤');
INSERT sc_laptop_nav values('8','8','女装内衣');
INSERT sc_laptop_nav values('9','9','个户清洁');
INSERT sc_laptop_nav values('10','10','生活充值');
INSERT sc_laptop_nav values('11','11','家具家纺');
INSERT sc_laptop_nav values('12','12','男装内衣');
INSERT sc_laptop_nav values('13','13','生活美食');
INSERT sc_laptop_nav values('14','14','酒水饮料');

/*插入分类数据*/
INSERT sc_laptop_product values("1",'1','手机','http://192.168.199.233:4000/images/tel/floor1_col2_01.jpg');
INSERT sc_laptop_product values("2",'1','电脑','http://192.168.199.233:4000/images/tel/find_01.jpg');
INSERT sc_laptop_product values("3",'1','女装','http://192.168.199.233:4000/images/tel/find_04.jpg');
INSERT sc_laptop_product values("4",'1','床套','http://192.168.199.233:4000/images/tel/find_06.jpg');
INSERT sc_laptop_product values("5",'1','耳机','http://192.168.199.233:4000/images/tel/floor1_col2_04.jpg');
INSERT sc_laptop_product values("6",'1','手表','http://192.168.199.233:4000/images/tel/floor1_col2_16.jpg');
INSERT sc_laptop_product values("7",'1','电饭锅','http://192.168.199.233:4000/images/tel/ll_02_01.jpg');
INSERT sc_laptop_product values("8",'1','吸尘器','http://192.168.199.233:4000/images/tel/ll_02_02.jpg');
INSERT sc_laptop_product values("9",'1','微波炉','http://192.168.199.233:4000/images/tel/ll_02_04.jpg');
INSERT sc_laptop_product values("10",'1','相机','http://192.168.199.233:4000/images/tel/ll_01_01.jpg');
INSERT sc_laptop_product values("11",'1','零食','http://192.168.199.233:4000/images/tel/ll_03_03.jpg');
INSERT sc_laptop_product values("12",'1','剃须刀','http://192.168.199.233:4000/images/tel/rank_col3_03.jpg');
INSERT sc_laptop_product values("13",'1','吹风机','http://192.168.199.233:4000/images/tel/rank_col3_05.jpg');
INSERT sc_laptop_product values("14",'1','洗衣液','http://192.168.199.233:4000/images/tel/ll_04_03.jpg');

INSERT sc_laptop_product values("15",'2','iphoneX','http://192.168.199.233:4000/images/tel/rank_col1_02.jpg');
INSERT sc_laptop_product values("16",'2','荣耀V10','http://192.168.199.233:4000/images/tel/floor1_col2_01.jpg');
INSERT sc_laptop_product values("17",'2','iphone6','http://192.168.199.233:4000/images/tel/floor1_col2_02.jpg');
INSERT sc_laptop_product values("18",'2','华为Mate10','http://192.168.199.233:4000/images/tel/floor1_col2_03.jpg');
INSERT sc_laptop_product values("19",'2','华为11','http://192.168.199.233:4000/images/tel/rank_col1_05.jpg');
INSERT sc_laptop_product values("20",'2','OPPOR11s','http://192.168.199.233:4000/images/tel/rank_col1_03.jpg');
INSERT sc_laptop_product values("21",'2','小米Note3','http://192.168.199.233:4000/images/tel/rank_col1_06.jpg');
INSERT sc_laptop_product values("22",'2','华为11','http://192.168.199.233:4000/images/tel/rank_col1_05.jpg');
INSERT sc_laptop_product values("23",'2','OPPOR11s','http://192.168.199.233:4000/images/tel/rank_col1_03.jpg');

INSERT sc_laptop_product values("24",'3','苹果','http://192.168.199.233:4000/images/food/11.png');
INSERT sc_laptop_product values("25",'3','樱桃','http://192.168.199.233:4000/images/food/1.png');
INSERT sc_laptop_product values("26",'3','桂圆','http://192.168.199.233:4000/images/food/2.png');
INSERT sc_laptop_product values("27",'3','蓝莓','http://192.168.199.233:4000/images/food/4.png');
INSERT sc_laptop_product values("28",'3','橙子','http://192.168.199.233:4000/images/food/5.png');
INSERT sc_laptop_product values("29",'3','龙虾','http://192.168.199.233:4000/images/food/f3-2-1.png');
INSERT sc_laptop_product values("30",'3','河虾','http://192.168.199.233:4000/images/food/f3-2-2.png');
INSERT sc_laptop_product values("31",'3','大闸蟹','http://192.168.199.233:4000/images/food/f3-2-5.png');

/*插入head*/
INSERT sc_laptop_head values("1",'1','热门搜索');
INSERT sc_laptop_head values("2",'2','热销推荐');
INSERT sc_laptop_head values("3",'3','新鲜水果 海鲜');

/*插入图片数据*/
INSERT sc_laptop_pic values('1','1','http://192.168.199.233:4000/images/details/fruit/5b72a1aaN6e7539a2.jpg');
INSERT sc_laptop_pic values('2','1','http://192.168.199.233:4000/images/details/fruit/5b72a1aaN3eea579a.jpg');
INSERT sc_laptop_pic values('3','1','http://192.168.199.233:4000/images/details/fruit/5b72a1aaN9ab987da.jpg');
INSERT sc_laptop_pic values('4','1','http://192.168.199.233:4000/images/details/fruit/5b72a1aaN64f24871.jpg');
INSERT sc_laptop_pic values('5','1','http://192.168.199.233:4000/images/details/fruit/5b72a33aNb32da185.jpg');
INSERT sc_laptop_pic values('6','1','http://192.168.199.233:4000/images/details/fruit/5b766580Nea529a05.jpg');
INSERT sc_laptop_pic values('7','1','http://192.168.199.233:4000/images/details/fruit/5b72a1aaN82c89175.jpg');

INSERT sc_laptop_pic values('8','2','http://192.168.199.233:4000/images/details/bijiben/be44924632f402de.jpg');
INSERT sc_laptop_pic values('9','2','http://192.168.199.233:4000/images/details/bijiben/597e71f2a511541c.jpg');
INSERT sc_laptop_pic values('10','2','http://192.168.199.233:4000/images/details/bijiben/a5fe385c3ba13ea5.jpg');
INSERT sc_laptop_pic values('11','2','http://192.168.199.233:4000/images/details/bijiben/b32ae8c75291bb08.jpg');
INSERT sc_laptop_pic values('12','2','http://192.168.199.233:4000/images/details/bijiben/b182b35c1b06748f.jpg');

/*插入用户信息*/
INSERT INTO sc_user values ('1','1','海贼王','null','上海');

/*插入商品购物车*/
INSERT INTO	 sc_shopcart values('1','1','1','5','0');
INSERT INTO	 sc_shopcart values('2','1','6','10','0');
INSERT INTO	 sc_shopcart values('3','1','4','100','0');
INSERT INTO	 sc_shopcart values('4','1','2','11','0');
INSERT INTO	 sc_shopcart values('5','1','5','9','0');
