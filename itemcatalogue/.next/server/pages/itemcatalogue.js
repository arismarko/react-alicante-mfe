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
exports.id = "pages/itemcatalogue";
exports.ids = ["pages/itemcatalogue"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = dynamic;\nexports.noSSR = noSSR;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = _extends({}, loadableOptions, dynamicOptions);\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = _extends({}, loadableOptions, options);\n    // Error if Fizz rendering is not enabled and `suspense` option is set to true\n    if ( true && loadableOptions.suspense) {\n        throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated);\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false}).\n    // skip `ssr` for suspense mode and opt-in React.lazy directly\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.suspense) {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === \"undefined\";\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLEtBQUssRUFBRSxJQUFJO0NBQ2QsRUFBQyxDQUFDO0FBQ0hELGtCQUFlLEdBQUdHLE9BQU8sQ0FBQztBQUMxQkgsYUFBYSxHQUFHSSxLQUFLLENBQUM7QUFDdEIsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDLENBQUM7QUFDckQsSUFBSUMsU0FBUyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4QkFBWSxDQUFDLENBQUM7QUFDN0QsU0FBU0osT0FBTyxDQUFDTSxjQUFjLEVBQUVDLE9BQU8sRUFBRTtJQUN0QyxJQUFJQyxVQUFVLEdBQUdILFNBQVMsQ0FBQ04sT0FBTztJQUNsQyxJQUFJVSxlQUFlLEdBQUc7UUFDbEIsd0RBQXdEO1FBQ3hEQyxPQUFPLEVBQUUsQ0FBQyxFQUFFQyxLQUFLLEdBQUdDLFNBQVMsR0FBR0MsU0FBUyxHQUFHLEdBQUc7WUFDM0MsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJLENBQUM7WUFDNUIsSUFBSUMsSUFBc0MsRUFBRTtnQkFDeEMsSUFBSUYsU0FBUyxFQUFFO29CQUNYLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2dCQUNELElBQUlELEtBQUssRUFBRTtvQkFDUCxPQUFPLGFBQWEsQ0FBQ1QsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRUosS0FBSyxDQUFDSyxPQUFPLEVBQUUsYUFBYSxDQUFDZCxNQUFNLENBQUNILE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUVKLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUM7aUJBQ3BKO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFDRCxxRUFBcUU7SUFDckUsd0dBQXdH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QUFPLENBQUM7SUFDL0Isb0ZBQW9GO0lBQ3BGLElBQUksQ0FBQ0gsWUFBWSxFQUFFO1FBQ2YsT0FBT0MsbUJBQW1CLENBQUNoQyxlQUFlLENBQUMsQ0FBQztLQUMvQztJQUNELE1BQU1tQyxPQUFPLEdBQUduQyxlQUFlLENBQUNDLE9BQU87SUFDdkMsZ0RBQWdEO0lBQ2hELE9BQU8sSUFBSSxhQUFhLENBQUNSLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDNkIsT0FBTyxFQUFFO1lBQ3ZEakMsS0FBSyxFQUFFLElBQUk7WUFDWEMsU0FBUyxFQUFFLElBQUk7WUFDZkMsU0FBUyxFQUFFLEtBQUs7WUFDaEJnQyxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7Q0FDVjtBQUVELElBQUksQ0FBQyxPQUFPaEQsT0FBTyxDQUFDRSxPQUFPLEtBQUssVUFBVSxJQUFLLE9BQU9GLE9BQU8sQ0FBQ0UsT0FBTyxLQUFLLFFBQVEsSUFBSUYsT0FBTyxDQUFDRSxPQUFPLEtBQUssSUFBSSxDQUFFLElBQUksT0FBT0YsT0FBTyxDQUFDRSxPQUFPLENBQUN3QyxVQUFVLEtBQUssV0FBVyxFQUFFO0lBQ3JLNUMsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFLFlBQVksRUFBRTtRQUFFRCxLQUFLLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FBQztJQUN0RUgsTUFBTSxDQUFDZ0MsTUFBTSxDQUFDOUIsT0FBTyxDQUFDRSxPQUFPLEVBQUVGLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDaUQsTUFBTSxDQUFDakQsT0FBTyxHQUFHQSxPQUFPLENBQUNFLE9BQU8sQ0FBQztDQUNsQyxDQUVELG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l0ZW1jYXRhbG9ndWUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcz9lMjVkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbmV4cG9ydHMubm9TU1IgPSBub1NTUjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgbG9hZGFibGVPcHRpb25zLCBkeW5hbWljT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgbG9hZGFibGVPcHRpb25zLCBvcHRpb25zKTtcbiAgICAvLyBFcnJvciBpZiBGaXp6IHJlbmRlcmluZyBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIGxvYWRhYmxlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBsb2FkYWJsZU9wdGlvbnMsIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCk7XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7XG4gICAgfVxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KS5cbiAgICAvLyBza2lwIGBzc3JgIGZvciBzdXNwZW5zZSBtb2RlIGFuZCBvcHQtaW4gUmVhY3QubGF6eSBkaXJlY3RseVxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nICYmICFsb2FkYWJsZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2Upe1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KTtcbn1cblxuaWYgKCh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgZXhwb3J0cy5kZWZhdWx0ID09PSAnb2JqZWN0JyAmJiBleHBvcnRzLmRlZmF1bHQgIT09IG51bGwpKSAmJiB0eXBlb2YgZXhwb3J0cy5kZWZhdWx0Ll9fZXNNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLmRlZmF1bHQsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgT2JqZWN0LmFzc2lnbihleHBvcnRzLmRlZmF1bHQsIGV4cG9ydHMpO1xuICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiZHluYW1pYyIsIm5vU1NSIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibG9hZGFibGVPcHRpb25zIiwibG9hZGluZyIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwicHJvY2VzcyIsImNyZWF0ZUVsZW1lbnQiLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwiX2V4dGVuZHMiLCJlbnYiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwidGltZWRPdXQiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/itemcatalogue.js":
/*!********************************!*\
  !*** ./pages/itemcatalogue.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst page = __webpack_require__.e(/*! import() */ \"async-pages_itemcatalogue_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../async-pages/itemcatalogue */ \"./async-pages/itemcatalogue.js\"));\nconst Page = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"async-pages_itemcatalogue_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../async-pages/itemcatalogue */ \"./async-pages/itemcatalogue.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"itemcatalogue.js -> \" + \"../async-pages/itemcatalogue\"\n        ]\n    }\n});\nconst getStaticProps = async (ctx)=>{\n    const { getStaticProps  } = await page;\n    console.log(getStaticProps);\n    if (getStaticProps) {\n        return getStaticProps(ctx);\n    } else {\n        return {};\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pdGVtY2F0YWxvZ3VlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFDbkMsTUFBTUMsSUFBSSxHQUFHLCtMQUFzQztBQUVuRCxNQUFNQyxJQUFJLEdBQUdGLG1EQUFPLENBQUMsSUFBTSwrTEFBc0M7Ozs7OztFQUFDO0FBRTNELE1BQU1HLGNBQWMsR0FBRyxPQUFNQyxHQUFHLEdBQUk7SUFDekMsTUFBTSxFQUFFRCxjQUFjLEdBQUUsR0FBSSxNQUFNRixJQUFJO0lBRXRDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsY0FBYyxDQUFDLENBQUM7SUFFNUIsSUFBSUEsY0FBYyxFQUFFO1FBQ2xCLE9BQU9BLGNBQWMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7S0FDNUIsTUFBTTtRQUNMLE9BQU8sRUFBRTtLQUNWO0NBQ0YsQ0FBQztBQUVGLGlFQUFlRixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdGVtY2F0YWxvZ3VlLy4vcGFnZXMvaXRlbWNhdGFsb2d1ZS5qcz8xZDY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBwYWdlID0gaW1wb3J0KCcuLi9hc3luYy1wYWdlcy9pdGVtY2F0YWxvZ3VlJyk7XG5cbmNvbnN0IFBhZ2UgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vYXN5bmMtcGFnZXMvaXRlbWNhdGFsb2d1ZScpKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgeyBnZXRTdGF0aWNQcm9wcyB9ID0gKGF3YWl0IHBhZ2UpO1xuXG4gIGNvbnNvbGUubG9nKGdldFN0YXRpY1Byb3BzKTtcblxuICBpZiAoZ2V0U3RhdGljUHJvcHMpIHtcbiAgICByZXR1cm4gZ2V0U3RhdGljUHJvcHMoY3R4KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge31cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwicGFnZSIsIlBhZ2UiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/itemcatalogue.js\n");

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"./node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLHVIQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2l0ZW1jYXRhbG9ndWUvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzPzczZDQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dynamic.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/itemcatalogue.js"));
module.exports = __webpack_exports__;

})();