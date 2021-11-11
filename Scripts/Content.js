class Content {
    /**
     * Loads content to string given a path
     * puts that information as content of div given its id
     * If the id is not provided, we just return that text as string.
     * @param {string} link 
     * @param {sting} id_element 
     * @return {string}
     */
    static loadContent(link, id_element) {
        var htmlContent;

        $.ajax({
            url: link,
            type: 'get',
            async: false,
            success: function (html) {
                htmlContent = html;
            }
        });

        if (id_element != undefined) {
            $('#' + id_element).html(htmlContent);
        }


        return htmlContent;
    }
} //ends class Content