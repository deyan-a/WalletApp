var clearData = function (formName) {
    var $form = formName;
    $($form).children('input[type="text"]').val('');
    $($form).children('input[type="number"]').val('');
    $($form).children('textarea').val('');             
}