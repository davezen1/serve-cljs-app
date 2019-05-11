// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('serve_cljs_app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
serve_cljs_app.core.home_page = (function serve_cljs_app$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Clojurescript Framework"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$someclass,"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null)], null)," and red"], null)," text."], null)], null);
});
serve_cljs_app.core.mount_root = (function serve_cljs_app$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [serve_cljs_app.core.home_page], null),document.getElementById("app"));
});
serve_cljs_app.core.init_BANG_ = (function serve_cljs_app$core$init_BANG_(){
return serve_cljs_app.core.mount_root();
});
