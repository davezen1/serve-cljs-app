(ns serve-cljs-app.prod
  (:require
    [serve-cljs-app.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
