/**
 * OmegaTrickローディングマスク
 *
 * Ext JS/Omega Trickが読み込まれる前に、ピュアJavaScriptのみで
 * ローディングマスクを動的に生成します。
 */

// OmegaTrickオブジェクト生成
OmegaTrick = {
    createElement : function(o) {

        var div = document.createElement((o.tag || 'div'));

        if(o.id) {
            div.id = o.id;
        }

        if(o.html) {
            div.innerHTML = o.html;
        }

        if(o.cls) {
            div.className = o.cls;
        }

        if(o.src) {
            div.src = o.src
        }

        if(o.width) {
            div.width = o.width;
        }

        if(o.height) {
            div.height = o.height;
        }

        if(o.renderTo) {
            o.renderTo.appendChild(div);
        }

        return div;
    }
};

// 全体を覆うマスクDIVタグ生成
OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADINGMASK',
    renderTo: document.body    
});

// ロゴ表示用DIVタグ生成
OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADING_LOGO',
    renderTo: document.body
});

// 処理状態表示用DIVタグ生成
OmegaTrick.progress = OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADING_PROGRESS', 
    renderTo: document.body
});

OmegaTrick.progressMsg = OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADING_PROGRESS_MSG',
    tag: 'p',
    html: '初期化中...',
    renderTo: OmegaTrick.progress     
});

delete OmegaTrick;
