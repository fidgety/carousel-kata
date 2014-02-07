define(['jquery'], function($) {
    return {
        init: function() {
            $('.autocomplete').on('keyup', function() {
                $('.autocomplete').val('hi');
            });
        }
    }
});
