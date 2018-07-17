
 
    $(".card-header .btn").click(function () {
        if ($("#collapseOne").hasClass("show")) {
            $(".arrow").css("transform", "rotate(90deg)")
        } else {
            $(".arrow").css("transform", "rotate(270deg)")
        }
    });
    $('.ch-all').change(function () {
        if ($(this).prop("checked")) {
            $(".tour-type input[type=checkbox]").prop('checked', true);
            return;
        }
        $(".tour-type input[type=checkbox]").prop('checked', false);
    });
    $('#datepicker').datepicker($.extend({
            prevText: "&#60;",
            nextText: "&#62;",
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Нед',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
        },
        $.datepicker.regional['ru']
    ));
    $(".dropdown-on-jq").click(function () {
        $(this).toggleClass("dropdown-on-jq--on");
    });
    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 3500,
        values: [1, 3000],
        slide: function (event, ui) {
            $("#amountprev").val(ui.values[0]);
            $("#amountafter").val(ui.values[1] + "+");
        }
    });
    $("#amountafter").val($("#slider-range").slider("values", 1) + "+");
    

 
    $(document).mouseup(function (e) {
    var block = $(".dropdown-on-jq");
    if (!block.is(e.target) &&
        block.has(e.target).length === 0) {
        block.removeClass("dropdown-on-jq--on");
    }
});