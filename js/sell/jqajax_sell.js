// Ajax req for retreive data
$(document).ready(function () {
  function showdata1() {
    output = "";
    $.ajax({
      url: "js/sell/retrieve_sell.php",
      method: "GET",
      dataType: "json",
      success: function (data1) {
        // console.log(data1);
        if (data1) {
          y = data1;
        } else {
          y = "";
        }
        for (i = 0; i < y.length; i++) {
          output +=
            "<tr><td>" +
            y[i].id +
            "</td><td>" +
            y[i].inr_total +
            "</td><td>" +
            y[i].utr +
            "</td><td><button class='btn btn-warning btn-sm btn-edit'data-sid=" +
            y[i].id +
            ">EDIT</button> <button class='btn btn-danger btn-sm btn-del' data-sid=" +
            y[i].id +
            ">DELETE</button></td></tr>";
        }
        $("#sbody").html(output);
      },
    });
  }
  showdata1();

  // Ajax req for insert data
  $("#btnAdd").click(function (e) {
    e.preventDefault();
    let stid = $("#stuId").val();
    let nm = $("#nameId").val();
    let em = $("#emailId").val();
    let pw = $("#passwordId").val();
    mydata = { id: stid, name: nm, email: em, password: pw };
    // console.log(mydata);
    $.ajax({
      url: "insert.php",
      method: "POST",
      data: JSON.stringify(mydata),
      success: function (data) {
        // console.log(data);
        msg = "<div>" + data + "</div>";
        $("#msg").html(msg);
        $("#sellForm")[0].reset();
        showdata();
      },
    });
  });

  // Ajax delete for  data
  $("sbody").on("click", ".btn-del", function () {
    // console.log("delete");
    let id = $(this).attr("data-sid");
    // console.log(id);
    mydata = { sid: id };
    mythis = this;
    $.ajax({
      url: "delete.php",
      method: "POST",
      data: JSON.stringify(mydata),
      success: function (data) {
        if (data == 1) {
          msg =
            "<div class='alert-danger text-center mt-2'>Student Deleted Sucessfully!!</div>";
          $(mythis).closest("tr").fadeOut();
        } else if (data == 0) {
          msg =
            "<div class='alert-danger text-center'>Unable to Delete!!</div>";
        }
        // console.log(data);
        $("#msg").html(msg);
        // showdata();
      },
    });
  });
  // Ajax editing for  data
  $("sbody").on("click", ".btn-edit ", function () {
    console.log("Edit Btn Clicked");
    let id = $(this).attr("data-sid");
    // console.log(id);
    mydata = { sid: id };
    $.ajax({
      url: "edit.php",
      method: "POST",
      dataType: "JSON",
      data: JSON.stringify(mydata),
      success: function (data) {
        // console.log(data);
        $("#stuId").val(data.id);
        $("#nameId").val(data.name);
        $("#emailId").val(data.email);
        $("#passwordId").val(data.password);
      },
    });
  });
});
