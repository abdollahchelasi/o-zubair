"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbb.js





const Navbb = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
        fixed: "top",
        className: (Home_module_default()).navb,
        expand: "sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: (Home_module_default()).omaricon,
                        src: "/omaricon.jpg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
                    className: (Home_module_default()).omarzubair,
                    children: "عمر الزبير المرزوقي"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
                        className: "me-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Home_module_default()).pnav,
                                    children: "الرئيسية"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/news",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Home_module_default()).pnav,
                                    children: "أخبار الرياضة"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/images",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Home_module_default()).pnav,
                                    children: "صور رياضية"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/video",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (Home_module_default()).pnav,
                                    children: "فيديوهات رياضية"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbb = (Navbb);

;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).divbody,
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Lalezar&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/omaricon.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "عمر الزبير المرزوقي "
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbb, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        sm: 12,
                        children: children
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (Home_module_default()).footer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                    fluid: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                className: (Home_module_default()).dastebandi,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Omar Mohammed Zubair Al Marzouqi"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (Home_module_default()).pfoot,
                                                children: "الرئيسية"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/news",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (Home_module_default()).pfoot,
                                                children: "أخبار الرياضة"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/images",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (Home_module_default()).pfoot,
                                                children: "صور رياضية"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/video",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (Home_module_default()).pfoot,
                                                children: "فيديوهات رياضية"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                className: (Home_module_default()).omarz,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: (Home_module_default()).omaricon,
                                            src: "/omaricon.jpg"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "عمر الزبير المرزوقي"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                className: (Home_module_default()).develop,
                                sm: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Developer By ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://abdollahchelasi.vercel.app",
                                            target: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: (Home_module_default()).abdo,
                                                children: [
                                                    "ABDOLLAH ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: (Home_module_default()).imgabdo,
                                                        src: "/a.jpg",
                                                        width: 50
                                                    }),
                                                    " CHELASI"
                                                ]
                                            })
                                        }),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,288], () => (__webpack_exec__(2674)));
module.exports = __webpack_exports__;

})();