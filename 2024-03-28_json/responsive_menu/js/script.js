// let hamburgerClicked = true;
// hamburger button
$(".toggle").click(function () {
  let hamburgerClicked = $(".gnbMenu").hasClass("active");
  if (!hamburgerClicked) {
    $(".gnbMenu").addClass("active");
  } else {
    $(".gnbMenu").removeClass("active");
  }
  //   if (hamburgerClicked) {
  //     $(".gnbMenu").addClass("active");
  //     hamburgerClicked = false;
  //   } else {
  //     $(".gnbMenu").removeClass("active");
  //     hamburgerClicked = true;
  //   }
});
