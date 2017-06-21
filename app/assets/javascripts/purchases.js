
$(document).on('turbolinks:load', function() {
    $('.btn-purchase').click(function() {
        var $btn = $(this);
        var defaultClass = 'btn-primary';
        var activeClass = 'btn-success';
        function successCreate(response) {
            $btn.addClass(activeClass);
            $btn.removeClass(defaultClass);
            $btn.data('purchase-id', response.id);
        }

        function successDelete(response) {
            $btn.removeClass(activeClass);
            $btn.addClass(defaultClass);
        }

        if ($btn.hasClass(activeClass)) {
            var url = '/purchases/' + $btn.data('purchase-id') + '.json';
            $.ajax({
                type: 'DELETE',
                url: url,
                success: successDelete,
                dataType: 'json'
            });
        } else {
            $.ajax({
                type: 'POST',
                url: '/purchases',
                data: {
                    purchase: {
                        game_id: $btn.data('game-id')
                    }
                },
                success: successCreate,
                dataType: 'json'
            });
        }
    });
});