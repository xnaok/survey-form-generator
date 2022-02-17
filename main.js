const cloneBox = document.getElementById('my-clone-box');

cloneBox.addEventListener('click', () =>
{
    const container = document.querySelector('.container');

    const clone = cloneBox.cloneNode(true);

    container.appendChild(clone);
});

// 参考サイト：https://qiita.com/mah666hhh/items/db29b6c2c17c569a0ffd
//            https://www.imamura.biz/blog/26914