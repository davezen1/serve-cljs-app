(ns ^:figwheel-no-load serve-cljs-app.dev
  (:require
    [serve-cljs-app.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
