$("#clickAll").click(function() {
    if ($("#clickAll").prop("checked")) {
        $("input[name='user_active_col[]']").each(function() {
            $(this).prop("checked", true);
        });
    } else {
        $("input[name='user_active_col[]']").each(function() {
            $(this).prop("checked", false);
        });
    }
});