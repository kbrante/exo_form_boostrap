$(document).ready(function() {
    // $("input").blur(function() {
    //     var char = $(this).val().length;
    //     if (char <= 5 || char > 30) {
    //         $(this).parent().addClass('has-error')
    //     } else {
    //         $(this).parent().removeClass('has-error').addClass('has-success')
    //         $("label").addClass('control-label')
    //     }
    // })
    // $("#password2").blur(function() {
    //     if ($("#password").val() === $("#password2").val()) {
    //         $("#password, #password2").parent().addClass('has-success')
    //
    //     } else {
    //         $("#password, #password2").parent().addClass('has-error')
    //
    //     }
    // });
    // $("#submit").click(function() {
    //     if ($("input").val().length == 0) {
    //         alert("veuillez saisir les champs")
    //     }
    // })
    $('#myForm').validator()
    $(':password').pwstrength();
});
