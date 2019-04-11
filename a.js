$(
  function () {
      var input = $('input');
      var button  = $('.button-class');
      var list = $('#list');

    function adding(){
      var value = input.val();
      input.val("");
      list.append(
        $("<li>").html(value)
          .append(
            $("<input>",{type:"checkbox"}).click(function () {
              $(this).parent().toggleClass("base")   })
          )
          .append(
            $("<button>",{id: "upbtn"}).text("^").click(function () {
              let current = $(this).closest('li');
              current.prev().before(current);

            }))
          .append(
            $("<button>",{id: "dnbtn"}).text("v").click(function () {
              let current = $(this).closest('li');
              current.next().after(current);
            }))
          .append(
            $("<button>",{id: "btn"}).text("x").click(function () {
              $(this).parent().hide()
            })
          )
      )
    }
    button.click(
      function () {
        adding()
      }
    );
    input.val("");
    button.next().click(
      function () {
        $(".base").remove();

      }
    );
    input.keypress(function (e) {
      console.log(e.which);
      if(e.which === 13)
      {
        adding()
      }
    })

  }
);
