"use strict";

require(["../require-config"], function () {
  require(["zepto"], function ($) {
    $(function () {
      getTable();

      function getTable() {
        var new_list = '<ul class="tableTr" data-id="111"><li>张三丰</li><li class="blue">￥12000</li><li class="green">￥6000</li><li onclick="goCrash(this)">提现</li></ul><ul class="tableTr" data-id="222"><li>张三丰</li><li class="blue">￥12000</li><li class="green">￥6000</li><li onclick="goCrash(this)">提现</li></ul>';
        $(".js_tablelist").append(new_list);
      }

      $(".js_sure").on("click", function () {
        testNum(".js_crash");
        var error_len = $(".red_border").length;
        if (error_len > 0) {
          return false;
        }
        var crash = $(".js_crash").val();
        var id = $(".js_id").val();
        console.log(id);

        $(".alert_con").hide();
        $(".zheceng").hide();

        $(".js_id").val("");
      });

      $(".js_alert_con_close").on("click", function () {
        $(".alert_con").hide();
        $("#alert_tip .alert_con_br").html();
        $(".zheceng").hide();
      });
    });
  });
});
function goCrash(obj) {
  var id = $(obj).parents("ul").attr("data-id");
  $(".js_id").val(id);
  $("#alert_alert").show();
  $(".zheceng").show();
}

function testNum(id) {
  var val = $(id).val();
  var val_exp = /^[\d]{1,8}$/;
  if (!val_exp.test(val)) {
    $(id).parents("dl").addClass("red_border");
  } else {
    $(id).parents("dl").removeClass("red_border");
  }
}