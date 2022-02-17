// 要素を複製 複製したい要素.cloneNode(真偽値) appendChild等と共に使うこと trueを外すと複製されない

// my-clone-boxを取得
const cloneBox = document.getElementById('my-clone-box');

// my-clone-boxをクリックすると発火
cloneBox.addEventListener('click', () =>
{
    // 親要素のcontainerを取得
    const container = document.querySelector('.container');

    // my-clone-boxを複製する
    const clone = cloneBox.cloneNode(true);

    // 複製したmy-clone-boxを、containerの末尾に挿入する
    container.appendChild(clone);
});

// 参考サイト：https://qiita.com/mah666hhh/items/db29b6c2c17c569a0ffd
//            https://www.imamura.biz/blog/26914