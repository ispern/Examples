/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ String.prototype.endsWith

/**
 * Stringインスタンスの末尾が、指定された文字列と一致
 * するかどうかを判断します。
 */
String.prototype.endsWith = function(suffix) {
    var sub = this.length - suffix.length;
    return (sub >= 0) && (this.lastIndexOf(suffix) === sub);
};

// }}}
// {{{ String.prototype.startsWith

/**
 * Stringインスタンスの先頭が、指定された文字列と一致
 * するかどうかを判定します。
 */
String.prototype.startsWith = function(prefix) {
  return this.indexOf(prefix) === 0;
};

// }}}
// {{{ String.prototype.capitalize

/**
 * キャピタライズ
 *
 * 先頭の1文字を大文字に変換します。
 */
String.prototype.capitalize = function() {
  return this.replace(/\w+/g, function(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

