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

/***/ "../node_modules/next/dist/shared/lib/dynamic.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/shared/lib/dynamic.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = dynamic;\nexports.noSSR = noSSR;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = _extends({}, loadableOptions, dynamicOptions);\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = _extends({}, loadableOptions, options);\n    // Error if Fizz rendering is not enabled and `suspense` option is set to true\n    if ( true && loadableOptions.suspense) {\n        throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);\n    }\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = _extends({}, loadableOptions, loadableOptions.loadableGenerated);\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false}).\n    // skip `ssr` for suspense mode and opt-in React.lazy directly\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.suspense) {\n        if (!loadableOptions.ssr) {\n            delete loadableOptions.ssr;\n            return noSSR(loadableFn, loadableOptions);\n        }\n        delete loadableOptions.ssr;\n    }\n    return loadableFn(loadableOptions);\n}\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst isServerSide = \"undefined\" === \"undefined\";\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNIRCxrQkFBZSxHQUFHRyxPQUFPLENBQUM7QUFDMUJILGFBQWEsR0FBR0ksS0FBSyxDQUFDO0FBQ3RCLElBQUlDLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUlDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEJBQVksQ0FBQyxDQUFDO0FBQzdELFNBQVNKLE9BQU8sQ0FBQ00sY0FBYyxFQUFFQyxPQUFPLEVBQUU7SUFDdEMsSUFBSUMsVUFBVSxHQUFHSCxTQUFTLENBQUNOLE9BQU87SUFDbEMsSUFBSVUsZUFBZSxHQUFHO1FBQ2xCLHdEQUF3RDtRQUN4REMsT0FBTyxFQUFFLENBQUMsRUFBRUMsS0FBSyxHQUFHQyxTQUFTLEdBQUdDLFNBQVMsR0FBRyxHQUFHO1lBQzNDLElBQUksQ0FBQ0EsU0FBUyxFQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzVCLElBQUlDLElBQXNDLEVBQUU7Z0JBQ3hDLElBQUlGLFNBQVMsRUFBRTtvQkFDWCxPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFDRCxJQUFJRCxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxhQUFhLENBQUNULE1BQU0sQ0FBQ0gsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTyxFQUFFLGFBQWEsQ0FBQ2QsTUFBTSxDQUFDSCxPQUFPLENBQUNnQixhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFSixLQUFLLENBQUNNLEtBQUssQ0FBQyxDQUFDO2lCQUNwSjthQUNKO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtLQUNKO0lBQ0QscUVBQXFFO0lBQ3JFLHdHQUF3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T0FBTyxDQUFDO0lBQy9CLG9GQUFvRjtJQUNwRixJQUFJLENBQUNILFlBQVksRUFBRTtRQUNmLE9BQU9DLG1CQUFtQixDQUFDaEMsZUFBZSxDQUFDLENBQUM7S0FDL0M7SUFDRCxNQUFNbUMsT0FBTyxHQUFHbkMsZUFBZSxDQUFDQyxPQUFPO0lBQ3ZDLGdEQUFnRDtJQUNoRCxPQUFPLElBQUksYUFBYSxDQUFDUixNQUFNLENBQUNILE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQzZCLE9BQU8sRUFBRTtZQUN2RGpDLEtBQUssRUFBRSxJQUFJO1lBQ1hDLFNBQVMsRUFBRSxJQUFJO1lBQ2ZDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCZ0MsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO0NBQ1Y7QUFFRCxJQUFJLENBQUMsT0FBT2hELE9BQU8sQ0FBQ0UsT0FBTyxLQUFLLFVBQVUsSUFBSyxPQUFPRixPQUFPLENBQUNFLE9BQU8sS0FBSyxRQUFRLElBQUlGLE9BQU8sQ0FBQ0UsT0FBTyxLQUFLLElBQUksQ0FBRSxJQUFJLE9BQU9GLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDd0MsVUFBVSxLQUFLLFdBQVcsRUFBRTtJQUNySzVDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLENBQUNFLE9BQU8sRUFBRSxZQUFZLEVBQUU7UUFBRUQsS0FBSyxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7SUFDdEVILE1BQU0sQ0FBQ2dDLE1BQU0sQ0FBQzlCLE9BQU8sQ0FBQ0UsT0FBTyxFQUFFRixPQUFPLENBQUMsQ0FBQztJQUN4Q2lELE1BQU0sQ0FBQ2pELE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxPQUFPLENBQUM7Q0FDbEMsQ0FFRCxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmRlcnMvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanM/MWIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGR5bmFtaWM7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9sb2FkYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO1xuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucywgb3B0aW9ucykge1xuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XG4gICAgbGV0IGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XG4gICAgICAgICAgICBpZiAoIXBhc3REZWxheSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0gX2V4dGVuZHMoe30sIGxvYWRhYmxlT3B0aW9ucywgZHluYW1pY09wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gICAgbG9hZGFibGVPcHRpb25zID0gX2V4dGVuZHMoe30sIGxvYWRhYmxlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgLy8gRXJyb3IgaWYgRml6eiByZW5kZXJpbmcgaXMgbm90IGVuYWJsZWQgYW5kIGBzdXNwZW5zZWAgb3B0aW9uIGlzIHNldCB0byB0cnVlXG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBsb2FkYWJsZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHN1c3BlbnNlIG9wdGlvbiB1c2FnZSBpbiBuZXh0L2R5bmFtaWMuIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1keW5hbWljLXN1c3BlbnNlYCk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgbG9hZGFibGVPcHRpb25zLCBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQpO1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSkuXG4gICAgLy8gc2tpcCBgc3NyYCBmb3Igc3VzcGVuc2UgbW9kZSBhbmQgb3B0LWluIFJlYWN0LmxhenkgZGlyZWN0bHlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJyAmJiAhbG9hZGFibGVPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIGlmICghbG9hZGFibGVPcHRpb25zLnNzcikge1xuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gc291cmNlKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSk7XG59XG5cbmlmICgodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIGV4cG9ydHMuZGVmYXVsdCA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cy5kZWZhdWx0ICE9PSBudWxsKSkgJiYgdHlwZW9mIGV4cG9ydHMuZGVmYXVsdC5fX2VzTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cy5kZWZhdWx0LCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5kZWZhdWx0LCBleHBvcnRzKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJub1NTUiIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsImxvYWRhYmxlT3B0aW9ucyIsImxvYWRpbmciLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInByb2Nlc3MiLCJjcmVhdGVFbGVtZW50IiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsIl9leHRlbmRzIiwiZW52IiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsInRpbWVkT3V0IiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"../node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst page = __webpack_require__.e(/*! import() */ \"async-pages_orders_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../async-pages/orders */ \"./async-pages/orders.js\"));\nconst Page = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"async-pages_orders_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../async-pages/orders */ \"./async-pages/orders.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"orders.js -> \" + \"../async-pages/orders\"\n        ]\n    }\n});\nasync function getStaticProps(context) {\n    const { getStaticProps  } = await page;\n    console.log(getStaticProps);\n    if (getStaticProps) {\n        const props = await getStaticProps(context);\n        return {\n            props,\n            revalidate: 10\n        };\n    }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUNuQyxNQUFNQyxJQUFJLEdBQUcsMEtBQStCO0FBRTVDLE1BQU1DLElBQUksR0FBR0YsbURBQU8sQ0FBQyxJQUFNLDBLQUErQjs7Ozs7O0VBQUM7QUFFcEQsZUFBZUcsY0FBYyxDQUFDQyxPQUFPLEVBQUU7SUFDMUMsTUFBTSxFQUFFRCxjQUFjLEdBQUUsR0FBSSxNQUFNRixJQUFJO0lBRXBDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsY0FBYyxDQUFDLENBQUM7SUFFNUIsSUFBSUEsY0FBYyxFQUFFO1FBQ2xCLE1BQU1JLEtBQUssR0FBSSxNQUFNSixjQUFjLENBQUNDLE9BQU8sQ0FBQztRQUU1QyxPQUFPO1lBQ0xHLEtBQUs7WUFDTEMsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDO0tBQ0g7Q0FDSjs7QUFJSCxpRUFBZU4sSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JkZXJzLy4vcGFnZXMvb3JkZXJzLmpzPzQ2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IHBhZ2UgPSBpbXBvcnQoJy4uL2FzeW5jLXBhZ2VzL29yZGVycycpO1xuXG5jb25zdCBQYWdlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2FzeW5jLXBhZ2VzL29yZGVycycpKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGdldFN0YXRpY1Byb3BzIH0gPSAoYXdhaXQgcGFnZSk7XG4gIFxuICAgICAgY29uc29sZS5sb2coZ2V0U3RhdGljUHJvcHMpO1xuICBcbiAgICAgIGlmIChnZXRTdGF0aWNQcm9wcykge1xuICAgICAgICBjb25zdCBwcm9wcyA9ICBhd2FpdCBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KTtcbiAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgcmV2YWxpZGF0ZTogMTAsXG4gICAgICAgIH07XG4gICAgICB9XG4gIH07XG4gIFxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInBhZ2UiLCJQYWdlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ }),

/***/ "../node_modules/next/dynamic.js":
/*!***************************************!*\
  !*** ../node_modules/next/dynamic.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"../node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3SEFBcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcmRlcnMvLi4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcz9mMDU5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/next/dynamic.js\n");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

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

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "stream/web":
/*!*****************************!*\
  !*** external "stream/web" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream/web");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "util/types":
/*!*****************************!*\
  !*** external "util/types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("util/types");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

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