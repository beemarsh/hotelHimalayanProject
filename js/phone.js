$(document).ready(
    function () {
        $(".log-in").click(
            function () {
                $(".panel_call").animate({width:'toggle'}, 350)
                return false;
            }
        )
    }
);