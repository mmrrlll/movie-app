(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_8b677b01._.js", {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-white text-black-foreground shadow-xs border hover:bg-[#E4E4E7]",
            noHover: "bg-white text-black-foreground ",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
;
;
const Card = ({ image, rate, title, jumpToDetails })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: jumpToDetails,
        className: " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start gap-2 rounded-lg bg-[#F4F4F5] min-h-[435px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "w-full min-h-[340px] rounded-t-lg",
                    src: image
                }, void 0, false, {
                    fileName: "[project]/src/components/Card.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex p-2 flex-col max-h-[95px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Card.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        rate,
                                        "/10"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Card.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Card.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[18px] font-normal text-[#09090B]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Card.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Card.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Card.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Card.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Movies_upcoming.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Movies_upcoming": (()=>Movies_upcoming)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Movies_upcoming = ({})=>{
    _s();
    const [upcomingMovies, setUpcomingMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const getUpcomingMovies = async ()=>{
        try {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289");
            setUpcomingMovies(data.results);
        } catch (err) {
            console.log(err.message);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Movies_upcoming.useEffect": ()=>{
            getUpcomingMovies();
        }
    }["Movies_upcoming.useEffect"], []);
    console.log(upcomingMovies);
    // const Movie = [
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/6415/2808/0ffbeccc1a7cdd3a5199e0755d66e253?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fCQufcR3am1qiooLQaqM9Q41NfwFPOLbPAZzQ3vVA3ubkL8vXYVlOARoxW3mVGAKW10Or4rEsgbn1We-Uv7tTuXNoCKZySv1bpIdwl683L-HGFQCh2aolanzjTygbJRG8oxQTaOW~juemQwUKxKlVfDrku7eyKv7kCfb8GjtOtzOXMjPUGfQ1cPuDBT-lQ66x3KsLKXsEsvNyS04Nl-XgtKjiFq3J8vWz--Y7SKpB16xhs5medKqDLyR2gKclKWDTQHp2j3nb5xDgNcjumvVKF8BAMHiDyS~EKQBNdHZif7FuEWg4eIGY97oHzVI0GbCsUbWHh0mcj~FV-FZhmU~fQ__",
    //     rating: "6.9",
    //     title: "Dear Santa",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/4b08/7764/bc03cf6c5fe844d5ce89f9658466dfef?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VxBf6a0UyNNWI2Ef8E9MKlxZyc7jcRh-qGeLDOkVM5XhV1f~sVYxwSFoidjGrQXETt45YTjmIScYqZSvyuzwmi4qgBT5YAPnS9NSSjWBqWpSONfypvg3GL6l6SDn2mxOqJ1hlrtm6BSm8Dxh8Is5UH3D96O91AeEBtziVQkE8UXZxn51XGJbKR8haCM1Y9G~649PPFyWcnVO4BZHnDC31L8sm8a11VDPZDoo4LaP5cLeHgWkb4MO3DeHYsIqG-xMZ4B9yy5ffhL86UEuULXd5okztHFp1lEGdKTrARjAVR-4~5O5RGFjsm1Hr7G9ACqNPXJZD9dtt8ixIK8w0D7Zlw__",
    //     rating: "6.9",
    //     title: "How to Train Your Dragon Live Action",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/7aa1/1575/96c5c5026e3cccbd4a9ca91b9d63dc7a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TVUi4evCaWv5DXCkFcCXhK5a7XqGLRmAZ46uJH1yM-Fvt~EQO~x3pvBs-s1NXOhAYDjpUlbOSlxEvu0qGD57d4VrRTCnAduwbs0mxFf0XrFpCnOA5Yt0Z3zOCtbnrr4uPJc9aI~O75AITvlCwxdGsFkTgJfdO9nna51yGU-NKXwsjijsbuumFxUJmGULzs5dUbvEW-zBHN2ndMv~eM2QSY0CidjLVlvxQ2il8o8ppwYjVcrskJdifcewBLBgDJTkSID-kb~gxp2lj1Kt75UebcktxFj6yKftUrfgywB1-slsmVEV0J1DftM00LXqF9Y2T1EGuq8XFxug-QkftbReyg__",
    //     rating: "6.9",
    //     title: "Alien Romulus",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/a2ea/3dd2/e396dc1c5e4ace3bda976b474aaef0b3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LmSRrZdSQ4fvHueiig5LxUblDy9QDnu6n0E9qjEYU4SB1cC4ZxO0nfnzoSC5nPJkfjMlrHY1SdUB6~Eb0heV1S31tD~18qCRsatCoxrbEFMGCmeTXRvtoU~S6ICXR6bplFR45mNqSKQDvUNEkIHEYMF~h0ryW9VulLl9XoZxBQy~z113TYtY9aYz7ATv~xiwah4fux~v7jAZbGzBF1Xv9uEx4IrN-zV0HD8lS9mA704MwbTY3V7eOie9kKJzEErMVaI5n6zP~b1GkYhAH7kolvToDYZINF6Z2~iL~M7YVfB8V2vVuqkM7nqXzqKRjMCFjUc0u0sIfhOMwehMnwwh-w__",
    //     rating: "6.9",
    //     title: "From the Ashes",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/4225/7c9e/0fafe04642928fbdc70a93ae0f01002d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cbb2m1HJmmL7XhKZeu0jrrb-Vzvg8huUbr6E6Abr6tD8f7srS6WVZMaBJyOs1XPkOFTFu-G6O21HG4dUFsnqeqvu-046LbBZcBPe54gSKZMRLhFz40LI0RYs5ZBxMZ~MLIbSoLj-u1c~vymdOCj6RQz-UXndfwRAnHB1r5fDhUDX4MPuvVK5yk5fj2i1iYl-g19Qa4q6aof6xsuLjVKfJyK3-ruSMev5YhAH1z26Z--4wtBHMaJm98J3AjnmXG3srTeVUMimrobyQ4pFtg8L9IQUijLSoFovNwLAfz6Q5DtAz~Ml~V5aY64jdFgOFLv-c0-M8WWT8iuQXYnE3Q8Znw__",
    //     rating: "6.9",
    //     title: "Space Dogg",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/d9b1/c0d7/d14a24b806271aee27997170978ff626?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MJLPlmjH-ZH2cPWHRlzeF2mkO-FENUHpt5JvN3K29xAFT8Ww5PaT1vkoH2~s7S1o9PdBVL7WIUD3SVXoWqYeNXaULj7DL~zKZAGEY7J9sQy9SpBkU-6KfwoKqKgBqd9WpjV3zP884SLjBR1uk7JFbKaS9dM6aLJa8ihx17PmQiYtynIfu6zgOSnQ1NpnzO5Sy~nhXUWqsq4HGtOHSuUOHBpazHidklA7dNz1FmnNU~o2HrjAmxvXFObmJdfJR4Yle0Ke7t749UQLDp5w~vl~ZnXL9KeJgrenXu5w~TZtYTJj024q0GblLRoHG4yYg65BGWHoz0KVQFVsrh-KctQZIA__",
    //     rating: "6.9",
    //     title: "The Order",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/9e65/3e1b/e01fc9c4092dfdecd24369e2487d8635?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W2zT-Cq57KFy0vpF5PUJ--WXF8LCLBEqBnQ8PUkVItEjV0W2RFX368cnDVg4nYlHFRKdgTAyX8jwfodIznV0XtAlkL9nrD-jSCOILZFYSbpv4pmd6zZGmjya2hXR21GMBq3ZF39oRTbDo1J7YFUNADw~Wb~TL8SBslDL7FG3Zjfuub2ASjtKbDhQe0gx5idbG9KjtBRJi4NPTZ7a4aGV8YLcwrXqWJSlulSl35dT0iBxmIzvE6syvE95yD3vqEyYX9V8RGtli0zX92gtlPN~7JKxwLgh2qEPC-ESXomLc~pyPTHM0DW5To8DX6TmdIuz~CObhMgjLzncegNSzBeEVw__",
    //     rating: "6.9",
    //     title: "Y2K",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/b356/27f6/7090bf8bfd9ce9490b6575d8d0114025?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JhRdxrMQ8UXJBqrfPkBs5wRrOK~GbcdwRWvpbW3mH1qzcV1dHl6IdvIJsVurUJEM0Y5G1d2MDqM~B5dcOuSPx9aPwcjYuEUpcW~5flXYdSkvbDLq8vGEOtH5PKEsZ7W3V7My6MZIIxn84Z5JljiqkMN9NDv4JSFFh5Q1~Ld7RtGR0ViB-Ml8o2v6afq2W0St5lwybR3W4CI93MBuPqGjIirCfvUoFF~EPRARZhfgfCI40svObKDRjHIQ20JAxOsbhYq0TyeTuS2L7H07h3KeaGEq-VxdA2IImbQsISuhKvqjt-m0rUknDmrhlpqJ57mODEPqSEqMCOOkKYbo4Omq5A__",
    //     rating: "6.9",
    //     title: "Solo Leveling: ReAwakening",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/3272/77d4/dd6fe464242bf3ceb00cbf7c51bd7f42?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qQrGMobH~gVpKUJMWrAO2IVuhXlHJSlGXyXIgxtHflEcwC2aATPKeglP7jgxCzDdw-MOD66OFKOd1qJRKlzVQpW5v2gcCcYaCSKSztYeSfLQjxL-14O8kBYJGsZ58E4K6Fd3k4L1v81thwoCLgP9UaccZg2vARvcSYyetLS5hVmJAS9yPZun4w1wOGtgbkm-kDlPo6GVGg9oWCKtczCiJ0xdPRsxbTMLeRWZodHCEyTfMmiIa7hpNpIxcXihtvW3y7-FfT7~SzXlEXi-JefqtDZ4qn9u5~VDjZ6v9fWvaWAXsdmUVxQdqpYuhYJMfuM8y561-vH~3qnYMbrEcfl0Gw__",
    //     rating: "6.9",
    //     title: "Get Away",
    //   },
    //   {
    //     image:
    //       "https://s3-alpha-sig.figma.com/img/1a78/359a/45da022f45cbd49977b6b63d7ecfb7c8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hngxFLglxhjir1xLXb2OvqA6i~gjzaI760BFiOjFM6YsKvuvgLrth42FCmhEWtP~bWQjM6cW3QrLLP-wnJeV-R~p6shS5--AxeeT-~gxccu3LD1j46jpvYKXsc8v1Z1kZwuCeWc0DzrEf~GPlbPzHT6zvYb0bfp2-2nWoVLYGL8x-p8OHdGk7Lu30S3pQDX12-Y59KuFZFexa2YNb1ODsnXmS3UjXnNcmDpBYIAXNXZIXvfuLXlMJEoETtGXaDb8HjTRS2j5atE12qFYNbyzDx4-mq8E630OQrpXcwCW1SaUXVA3SaZUCh8qjhJbRekOX5MmnOZ3LRoPU6OiS1a5BA__",
    //     rating: "6.9",
    //     title: "Sonic the Hedgehog 3",
    //   },
    // ];
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleOnClock = (id)=>{
        router.push(`details/${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start w-screen px-[80px] py-[52px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mb-4 flex justify-between items-center ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl text-black font-semibold",
                        children: "Upcoming"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Movies_upcoming.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "noHover",
                        children: [
                            "See more",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                fileName: "[project]/src/components/Movies_upcoming.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Movies_upcoming.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Movies_upcoming.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " gap-4 ",
                children: upcomingMovies.slice(0, 10).map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        jumpToDetails: ()=>{
                            handleOnClock(value.id);
                        },
                        title: value.title,
                        image: `https://image.tmdb.org/t/p/w300${value.backdrop_path}`,
                        rate: value.vote_average
                    }, index, false, {
                        fileName: "[project]/src/components/Movies_upcoming.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Movies_upcoming.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Movies_upcoming.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
};
_s(Movies_upcoming, "OdgBDryjYPP3J4v6KIvrpRCENe0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Movies_upcoming;
var _c;
__turbopack_context__.k.register(_c, "Movies_upcoming");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_8b677b01._.js.map