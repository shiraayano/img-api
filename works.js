
// 定义存放图片链接的数组
const imageGroups = {
  'background_mobile': [
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_mobile/104531347_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_mobile/111058829_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_mobile/111635936_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_mobile/71684890_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_mobile/82869627_p0.jpg',
  ],
  'background_tablet': [
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/109838747_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/111317868_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/112052605_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/67638415_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/70844305_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/96781044_p0.jpg',
  'https://github.com/shiraayano/img-api/blob/shiraayano-patch-1/background_tablet/99142869_p0.jpg',
  ],
  'background_pc': [
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/100783147_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/109884134_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/28827480_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/57221.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/63936697_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/66589938_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/70266119_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/71566096_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/75487936_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/82720559_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/82782742_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/82910218_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/82924488_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/83404272_p0.png',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/85603687_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/87617434_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/3/91192019_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/109034541_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/109213534_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/109509425_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/58733791_p0.jpg',
  'https://github.com/shiraayano/ChangeWallpaper/raw/main/img/2/70626212_p0.jpg',
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
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 获取传入的 id 参数
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  // 如果存在 id 参数，选择对应图片组
  let selectedGroup;
  if (id && imageGroups[id]) {
    selectedGroup = imageGroups[id];
  } else {
    // 如果没有指定 id，则随机选择所有图片组中的一张图片
    const allImages = Object.values(imageGroups).flat();
    selectedGroup = allImages;
  }

  // 随机选择图片链接
  const randomImage = selectedGroup[Math.floor(Math.random() * selectedGroup.length)];

  // 获取图片内容
  const imageResponse = await fetch(randomImage);
  const imageContent = await imageResponse.arrayBuffer();

  // 设置 Content-Type
  const imageType = getImageType(randomImage);
  const contentType = imageType ? `image/${imageType}` : 'application/octet-stream';

  // 构建响应
  const headers = {
    'Content-Type': contentType,
    'Content-Length': imageContent.byteLength,
    'Accept-Ranges': 'bytes'
  };

  return new Response(imageContent, { headers });
}

function getImageType(url) {
  const extension = url.split('.').pop().toLowerCase();
  if (extension === 'jpg' || extension === 'jpeg') {
    return 'jpeg';
  } else if (extension === 'png') {
    return 'png';
  } else if (extension === 'gif') {
    return 'gif';
  } else {
    return null;
  }
}
