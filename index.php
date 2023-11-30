<?php
// download.php

// 定义存放图片链接的数组
$imageGroups = [
    '1' => [
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/102996140_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/66343936_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/67280596_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/67506480_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/78104901_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/80468767_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/81731861_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/85819594_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/89893271_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/90945887_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/94755985_p0.png'
    ],
    '2' => [
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/109034541_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/109213534_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/109509425_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/58733791_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/70626212_p0.jpg'
    ],
    '3' => [
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/102996140_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/66343936_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/67280596_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/67506480_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/78104901_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/80468767_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/81731861_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/85819594_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/89893271_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/90945887_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/1/94755985_p0.png'
    ]
];

// 判断是否请求的是特定组的图片
$isWebRequest = isset($_GET['id']);

// 如果是请求特定组的图片
if ($isWebRequest) {
    $id = $_GET['id'];

    // 检查是否存在相应的图片组
    if (array_key_exists($id, $imageGroups)) {
        $selectedGroup = $imageGroups[$id];
    } else {
        die('请求的图片组不存在。');
    }
} else {
    // 如果没有指定 id，则随机选择所有图片组中的一张图片
    $allImages = [];
    foreach ($imageGroups as $group) {
        $allImages = array_merge($allImages, $group);
    }

    $selectedGroup = $allImages;
}

// 随机选择图片链接
$randomImage = $selectedGroup[array_rand($selectedGroup)];

// 获取图片内容及类型
$imageContent = file_get_contents($randomImage);

// 设置 Content-Type
$imageType = exif_imagetype($randomImage);
$allowedTypes = [
    IMAGETYPE_JPEG => 'image/jpeg',
    IMAGETYPE_PNG => 'image/png',
    IMAGETYPE_GIF => 'image/gif',
];

if (isset($allowedTypes[$imageType])) {
    header('Content-Type: ' . $allowedTypes[$imageType]);
} else {
    header('Content-Type: application/octet-stream');
}

// 输出图片内容
header('Content-Length: ' . strlen($imageContent));
header('Accept-Ranges: bytes');

echo $imageContent;
exit(); // 结束脚本执行
