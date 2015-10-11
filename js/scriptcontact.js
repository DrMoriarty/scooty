$(function() {
    var paraTag = $('input#submit').parent('p');
    $(paraTag).children('input').remove();
    $(paraTag).append('<input type="button" name="submit" id="submit" value="отправить" class="buttoncontact" />');

    $('#main input#submit').click(function() {
        $('#main').append('<img src="images/loader.gif" class="loaderIcon" alt="" />');

        var name = $('input#name').val();
        var email = $('input#email').val();
   
        var comments = $('textarea#comments').val();

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email + '&comments=' + comments,

            success: function(results) {
                $('#main img.loaderIcon').fadeOut(1000);
                $('ul#response').html(results);
            }
        }); // end ajax
    });
});
		