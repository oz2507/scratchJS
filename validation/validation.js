function validate() {
    // DocumentとはオブジェクトでありHTMLが丸ごと入っている
    // IDからinputのvalueを取得し代入する
    const name = document.getElementById('input_name').value;
    if (name.length > 8) {
        alert('入力可能な文字数は8文字未満です');
        return;
    } else if (name.length == 0) {
        alert('値が入力されていません');
        return;
    } else {
        alert('情報が送信されました');
        // Document.フォームの名前.submit()で情報を送信する
        document.validation.submit();
    }
}