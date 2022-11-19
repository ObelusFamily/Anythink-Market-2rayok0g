var router = require('express').Router();

router.get('/person/:name', (req, res) => {
  res.json(req.params.name)
})
router.param('name', function (req, res, next, name) {

  // 在這裡驗證資料
  // ... ... ...
  // 顯示驗證訊息
  console.log('doing name validations on ' + name);

  // 當驗證成功時，將其儲存至 req
  req.name = name;

  // 繼續後續的處理流程
  next();
});
module.exports = router