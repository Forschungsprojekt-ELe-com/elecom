window.header_slider = function(t, e = {}) {
    let n = t.find("span.block_heading"),
        i = {
            color: "#3c7dff",
            closed_by_default: !1
        };
    for (let t in e) i[t] = e[t];
    let l = {
        child_headers: function(t, e, n) {
            let i = [];
            for (let l = t + 1; l < n.length; l++) {
                let t = n[l];
                if (!(e < t.tagName.split("H")[1])) break;
                i.push(t)
            }
            return i
        },
        neighbor_header: function(t, e, n) {
            let i = null;
            for (let l = t + 1; l < n.length; l++) {
                let t = n[l];
                if (t.tagName.split("H")[1] <= e) {
                    i = t;
                    break
                }
            }
            return i
        },
        toggle_slide: function(t, e = null) {
            let n = e ? t.nextUntil(e) : t.nextAll();
            t.attr("slide") ? (t.removeAttr("slide"), n.slideDown()) : (t.attr("slide", 1), n.slideUp())
        }
    };
    n.each(function(t, e) {
        let r = {
            index: t,
            size: this.tagName.split("H")[1],
            dom: e,
            jq: $(this)
        };
        var o, s, d, a, g;
        r.jq.on("click", function() {
            ! function(t) {
                let e = l.child_headers(t.index, t.size, n),
                    i = l.neighbor_header(t.index, t.size, n);
                l.toggle_slide(t.jq, i), $(e).each(function(t, e) {
                    $(e).removeAttr("slide")
                })
            }(r)
        }), i.closed_by_default && r.jq.click()
    })
};