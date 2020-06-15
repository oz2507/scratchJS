<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>お問合せ</title>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link href="./validation.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script type='text/javascript' src="./validation.js"></script>
</head>
<body>
  <div class="container">
    <div class="form-sec">
      <h4 class="pt-5">Contact form</h4>
      <form name="qryform" id="qryform" method="post" action="" novalidate="novalidate">

        <div class="form-group">
          <label>お名前:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name">
        </div>

        <div class="form-group">
          <label>性別:</label><br>
          <input type="radio" class="" id="name" placeholder="Enter gender" name="gender">
          <label for="gender_m">男性</label>
          <input type="radio" class="" id="name" placeholder="Enter gender" name="gender">
          <label for="gender_f">女性</label>
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" id="name" placeholder="Enter Email" name="email">
        </div>

        <div class="form-group">
          <label>電話番号:</label>
          <input type="text" class="form-control" id="phone" placeholder="Enter Phone no." name="phone">
        </div>

        <div class="form-group">
          <label>ご用件:</label>
          <input type="text" class="form-control" id="name" placeholder="Subject" name="subject">
        </div>

        <div class="form-group">
          <label>内容:</label>
          <textarea name="issues" class="form-control" id="iq" placeholder="Enter your Issues/query"></textarea>
        </div>

        <button id="sweetalert">送信</button>
      </form>
    </div>
  </div>  <!-- cointainer -->
</body>
</html>