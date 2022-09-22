/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/orders";
exports.ids = ["pages/orders"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = dynamic;\nexports.noSSR = noSSR;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = _extends({}, loadableOptions, dynamicOptions);\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = _extends({}, loadableOptions, options);\n    // Error if Fizz rendering is not enabled and `suspense` option is set to true\n    if ( true && loadableOptions.suspense) {\n        throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated);\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false}).\n    // skip `ssr` for suspense mode and opt-in React.lazy directly\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.suspense) {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === \"undefined\";\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUdHLE9BQU8sQ0FBQztBQUMxQkgsYUFBYSxHQUFHSSxLQUFLLENBQUM7QUFDdEIsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsU0FBUyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDLENBQUM7QUFDN0QsU0FBU0osT0FBTyxDQUFDTSxjQUFjLEVBQUVDLE9BQU8sRUFBRTtJQUN0QyxJQUFJQyxVQUFVLEdBQUdILFNBQVMsQ0FBQ04sT0FBTztJQUNsQyxJQUFJVSxlQUFlLEdBQUc7UUFDbEIsd0RBQXdEO1FBQ3hEQyxPQUFPLEVBQUUsQ0FBQyxFQUFFQyxLQUFLLEdBQUdDLFNBQVMsR0FBR0MsU0FBUyxHQUFHLEdBQUc7WUFDM0MsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUIsSUFBSUMsSUFBc0MsRUFBRTtnQkFDeEMsSUFBSUYsU0FBUyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELElBQUlELEtBQUssRUFBRTtvQkFDUCxPQUFPLGFBQWEsQ0FBQ1QsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRUosS0FBSyxDQUFDSyxPQUFPLEVBQUUsYUFBYSxDQUFDZCxNQUFNLENBQUNILE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUVKLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUM7aUJBQ3BKO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxxRUFBcUU7SUFDckUsd0dBQXdHO0lBQ3hHLDJIQUEySDtJQUMzSCxtRUFBbUU7SUFDbkUsSUFBSVgsY0FBYyxZQUFZWSxPQUFPLEVBQUU7UUFDbkNULGVBQWUsQ0FBQ1UsTUFBTSxHQUFHLElBQUliLGNBQWMsQ0FBQztJQUNoRCx1RkFBdUY7S0FDdEYsTUFBTSxJQUFJLE9BQU9BLGNBQWMsS0FBSyxVQUFVLEVBQUU7UUFDN0NHLGVBQWUsQ0FBQ1UsTUFBTSxHQUFHYixjQUFjLENBQUM7SUFDNUMsbUdBQW1HO0tBQ2xHLE1BQU0sSUFBSSxPQUFPQSxjQUFjLEtBQUssUUFBUSxFQUFFO1FBQzNDRyxlQUFlLEdBQUdXLFFBQVEsQ0FBQyxFQUFFLEVBQUVYLGVBQWUsRUFBRUgsY0FBYyxDQUFDLENBQUM7S0FDbkU7SUFDRCxnSEFBZ0g7SUFDaEhHLGVBQWUsR0FBR1csUUFBUSxDQUFDLEVBQUUsRUFBRVgsZUFBZSxFQUFFRixPQUFPLENBQUMsQ0FBQztJQUN6RCw4RUFBOEU7SUFDOUUsSUFBSSxLQUE4QixJQUFJRSxlQUFlLENBQUNjLFFBQVEsRUFBRTtRQUM1RCxNQUFNLElBQUlDLEtBQUssQ0FBQyxDQUFDLG1IQUFtSCxDQUFDLENBQUMsQ0FBQztLQUMxSTtJQUNELDJEQUEyRDtJQUMzRCxJQUFJZixlQUFlLENBQUNnQixpQkFBaUIsRUFBRTtRQUNuQ2hCLGVBQWUsR0FBR1csUUFBUSxDQUFDLEVBQUUsRUFBRVgsZUFBZSxFQUFFQSxlQUFlLENBQUNnQixpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE9BQU9oQixlQUFlLENBQUNnQixpQkFBaUIsQ0FBQztLQUM1QztJQUNELG9HQUFvRztJQUNwRyw4REFBOEQ7SUFDOUQsSUFBSSxPQUFPaEIsZUFBZSxDQUFDaUIsR0FBRyxLQUFLLFNBQVMsSUFBSSxDQUFDakIsZUFBZSxDQUFDYyxRQUFRLEVBQUU7UUFDdkUsSUFBSSxDQUFDZCxlQUFlLENBQUNpQixHQUFHLEVBQUU7WUFDdEIsT0FBT2pCLGVBQWUsQ0FBQ2lCLEdBQUcsQ0FBQztZQUMzQixPQUFPekIsS0FBSyxDQUFDTyxVQUFVLEVBQUVDLGVBQWUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBT0EsZUFBZSxDQUFDaUIsR0FBRyxDQUFDO0tBQzlCO0lBQ0QsT0FBT2xCLFVBQVUsQ0FBQ0MsZUFBZSxDQUFDLENBQUM7Q0FDdEM7QUFDRCxTQUFTVyxRQUFRLEdBQUc7SUFDaEJBLFFBQVEsR0FBR3pCLE1BQU0sQ0FBQ2dDLE1BQU0sSUFBSSxTQUFTQyxNQUFNLEVBQUU7UUFDekMsSUFBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsQ0FBQztZQUNyQyxJQUFJRyxNQUFNLEdBQUdGLFNBQVMsQ0FBQ0QsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSUksR0FBRyxJQUFJRCxNQUFNLENBQUM7Z0JBQ2xCLElBQUlyQyxNQUFNLENBQUN1QyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDSixNQUFNLEVBQUVDLEdBQUcsQ0FBQyxFQUFFO29CQUNuREwsTUFBTSxDQUFDSyxHQUFHLENBQUMsR0FBR0QsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtTQUNKO1FBQ0QsT0FBT0wsTUFBTSxDQUFDO0tBQ2pCLENBQUM7SUFDRixPQUFPUixRQUFRLENBQUNpQixLQUFLLENBQUMsSUFBSSxFQUFFUCxTQUFTLENBQUMsQ0FBQztDQUMxQztBQUNELFNBQVMzQixzQkFBc0IsQ0FBQ21DLEdBQUcsRUFBRTtJQUNqQyxPQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHRCxHQUFHLEdBQUc7UUFDakN2QyxPQUFPLEVBQUV1QyxHQUFHO0tBQ2YsQ0FBQztDQUNMO0FBQ0QsTUFBTUUsWUFBWSxHQUFHLFdBQWEsS0FBSyxXQUFXO0FBQ2xELFNBQVN2QyxLQUFLLENBQUN3QyxtQkFBbUIsRUFBRWhDLGVBQWUsRUFBRTtJQUNqRCx5RUFBeUU7SUFDekUsT0FBT0EsZUFBZSxDQUFDaUMsT0FBTyxDQUFDO0lBQy9CLE9BQU9qQyxlQUFlLENBQUNrQyxPQUFPLENBQUM7SUFDL0Isb0ZBQW9GO0lBQ3BGLElBQUksQ0FBQ0gsWUFBWSxFQUFFO1FBQ2YsT0FBT0MsbUJBQW1CLENBQUNoQyxlQUFlLENBQUMsQ0FBQztLQUMvQztJQUNELE1BQU1tQyxPQUFPLEdBQUduQyxlQUFlLENBQUNDLE9BQU87SUFDdkMsZ0RBQWdEO0lBQ2hELE9BQU8sSUFBSSxhQUFhLENBQUNSLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDNkIsT0FBTyxFQUFFO1lBQ3ZEakMsS0FBSyxFQUFFLElBQUk7WUFDWEMsU0FBUyxFQUFFLElBQUk7WUFDZkMsU0FBUyxFQUFFLEtBQUs7WUFDaEJnQyxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7Q0FDVjtBQUVELElBQUksQ0FBQyxPQUFPaEQsT0FBTyxDQUFDRSxPQUFPLEtBQUssVUFBVSxJQUFLLE9BQU9GLE9BQU8sQ0FBQ0UsT0FBTyxLQUFLLFFBQVEsSUFBSUYsT0FBTyxDQUFDRSxPQUFPLEtBQUssSUFBSSxDQUFFLElBQUksT0FBT0YsT0FBTyxDQUFDRSxPQUFPLENBQUN3QyxVQUFVLEtBQUssV0FBVyxFQUFFO0lBQ3JLNUMsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUFFRCxLQUFLLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FBQztJQUN0RUgsTUFBTSxDQUFDZ0MsTUFBTSxDQUFDOUIsT0FBTyxDQUFDRSxPQUFPLEVBQUVGLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDaUQsTUFBTSxDQUFDakQsT0FBTyxHQUFHQSxPQUFPLENBQUNFLE9BQU8sQ0FBQztDQUNsQyxDQUVELG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL29yZGVycy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljLmpzP2UyNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICAgIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBsb2FkYWJsZU9wdGlvbnMsIGR5bmFtaWNPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBsb2FkYWJsZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIC8vIEVycm9yIGlmIEZpenogcmVuZGVyaW5nIGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX1JFQUNUX1JPT1QgJiYgbG9hZGFibGVPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgIH1cbiAgICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICAgIGlmIChsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0gX2V4dGVuZHMoe30sIGxvYWRhYmxlT3B0aW9ucywgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pLlxuICAgIC8vIHNraXAgYHNzcmAgZm9yIHN1c3BlbnNlIG1vZGUgYW5kIG9wdC1pbiBSZWFjdC5sYXp5IGRpcmVjdGx5XG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicgJiYgIWxvYWRhYmxlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHNvdXJjZSl7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgaXNTZXJ2ZXJTaWRlID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLCBsb2FkYWJsZU9wdGlvbnMpIHtcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlcztcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgICBpZiAoIWlzU2VydmVyU2lkZSkge1xuICAgICAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO1xuICAgIH1cbiAgICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmc7XG4gICAgLy8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xuICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgICAgICAgdGltZWRPdXQ6IGZhbHNlXG4gICAgICAgIH0pO1xufVxuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJkeW5hbWljIiwibm9TU1IiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJsb2FkYWJsZU9wdGlvbnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJwcm9jZXNzIiwiY3JlYXRlRWxlbWVudCIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJfZXh0ZW5kcyIsImVudiIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5Iiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJ0aW1lZE91dCIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst page = __webpack_require__.e(/*! import() */ \"async-pages_orders_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../async-pages/orders */ \"./async-pages/orders.js\"));\nconst Page = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"async-pages_orders_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../async-pages/orders */ \"./async-pages/orders.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"orders.js -> \" + \"../async-pages/orders\"\n        ]\n    }\n});\nasync function getStaticProps(context) {\n    const { getStaticProps  } = await page;\n    console.log(getStaticProps);\n    if (getStaticProps) {\n        const props = await getStaticProps(context);\n        return {\n            props,\n            revalidate: 10\n        };\n    }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUNuQyxNQUFNQyxJQUFJLEdBQUcsMEtBQStCO0FBRTVDLE1BQU1DLElBQUksR0FBR0YsbURBQU8sQ0FBQyxJQUFNLDBLQUErQjs7Ozs7O0VBQUM7QUFFcEQsZUFBZUcsY0FBYyxDQUFDQyxPQUFPLEVBQUU7SUFDMUMsTUFBTSxFQUFFRCxjQUFjLEdBQUUsR0FBSSxNQUFNRixJQUFJO0lBRXBDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsY0FBYyxDQUFDLENBQUM7SUFFNUIsSUFBSUEsY0FBYyxFQUFFO1FBQ2xCLE1BQU1JLEtBQUssR0FBSSxNQUFNSixjQUFjLENBQUNDLE9BQU8sQ0FBQztRQUU1QyxPQUFPO1lBQ0xHLEtBQUs7WUFDTEMsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO0tBQ0g7Q0FDSjs7QUFJSCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JkZXJzLy4vcGFnZXMvb3JkZXJzLmpzPzQ2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IHBhZ2UgPSBpbXBvcnQoJy4uL2FzeW5jLXBhZ2VzL29yZGVycycpO1xuXG5jb25zdCBQYWdlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2FzeW5jLXBhZ2VzL29yZGVycycpKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGdldFN0YXRpY1Byb3BzIH0gPSAoYXdhaXQgcGFnZSk7XG4gIFxuICAgICAgY29uc29sZS5sb2coZ2V0U3RhdGljUHJvcHMpO1xuICBcbiAgICAgIGlmIChnZXRTdGF0aWNQcm9wcykge1xuICAgICAgICBjb25zdCBwcm9wcyA9ICBhd2FpdCBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KTtcbiAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXG4gICAgICAgIH07XG4gICAgICB9XG4gIH07XG4gIFxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInBhZ2UiLCJQYWdlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL29yZGVycy8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanM/NzNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/dist/shared/lib/styled-jsx":
/*!**************************************************!*\
  !*** external "next/dist/shared/lib/styled-jsx" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/orders.js"));
module.exports = __webpack_exports__;

})();