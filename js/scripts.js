! function(e) {
    "use strict";
    window.recent_tweets = function(n) {
        e(document).ready(function() {
            t.recentTweets(n)
        })
    }, window.recent_photos = function(n) {
        e(document).ready(function() {
            t.recentInstagramPhotos(n)
        })
    };
    var t = {
        init: function() {
            this.rebuildGrid(), this.initSmoothScroll(), this.renderPhotoSets(), this.initMenuEvents(), this.initPopups(), this.instagramFeed()
        },
        initMenuEvents: function() {
            e("body").on("click", function() {
                e(this).removeClass("menu-opened")
            }).on("keyup", function(t) {
                27 == t.keyCode && (e(this).removeClass("menu-opened"), e(this).removeClass("search-opened"))
            }), e(".jQ_headerMenuButton").on("click", function(t) {
                return event.stopPropagation(), e("body").toggleClass("menu-opened"), !1
            }), e(".jQ_headerSearchInput").on("blur", function(t) {
                "" == t.target.value && e("body").removeClass("search-opened")
            }), e(".jQ_headerSearchButton").on("click", function(t) {
                return e("body").toggleClass("search-opened"), setTimeout(function() {
                    e(".jQ_headerSearchInput").focus()
                }, 100), event.stopPropagation(), !1
            })
        },
        instagramFeed: function() {
            if (window.instagramAccessToken && instagramAccessToken.length > 0) {
                console.log(instagramAccessToken);
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https://api.instagram.com/v1/users/self/media/recent?callback=recent_photos&count=8&access_token=" + instagramAccessToken;
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }
        },
        rebuildGrid: function() {
            var t = e(".jQ_posts");
            if (t.length > 0) {
                new Packery(t.get(0), {
                    itemSelector: ".post"
                })
            }
        },
        initSmoothScroll: function() {
            e(".jQ_goTo").click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var t = e(this.hash);
                    if (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]"), t.length) return e("html,body").animate({
                        scrollTop: t.offset().top
                    }, 1e3), !1
                }
            })
        },
        recentTweets: function(t) {
            for (var n = e(".jQ_twitterFeed"), o = 0; o < Math.min(t.length, 3); o++) {
                var i = e(document.createElement("li")),
                    a = t[o];
                i.html(twttr.txt.autoLink(a.text)), n.append(i)
            }
        },
        recentInstagramPhotos: function(t) {
            if (t.data) {
                for (var n = t.data, o = "", i = 0; i < n.length; i++) {
                    var a = n[i];
                    o += "<a ", o += 'href="' + a.link + '" target="_blank" ', o += 'style="background-image: url(' + a.images.thumbnail.url + '"', o += "></a>"
                }
                e(".jQ_instagramFeedImages").empty().append(o), e(".jQ_instagramFeed").show()
            }
        },
        renderPhotoSets: function() {
            var t = e(".jQ_photoSet");
            t.length && t.photosetGrid({
                gutter: "4px",
                highresLinks: !0,
                onComplete: function() {
                    t.find("a").magnificPopup({
                        type: "image",
                        gallery: {
                            enabled: !0
                        }
                    })
                }
            })
        },
        initPopups: function() {
            e(".jQ_photoPreview").magnificPopup({
                type: "image"
            })
        }
    };
    e(document).ready(function() {
        t.init()
    })
}(jQuery);