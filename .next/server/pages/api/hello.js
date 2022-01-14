(function() {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ helloAPI; }
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function helloAPI(req, res) {
  const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient("mongodb+srv://trendafil2:databaza0@project0.gz2vh.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  const db = client.db("test"); // const collection = db.collection("categories");

  const categories = await db.collection("categories").find({}).toArray();
  const latestPosts = await db.collection("posts").find({}).sort({
    _id: -1
  }).limit(10).toArray();
  const featuredPosts = await db.collection("posts").find({
    isFeaturedPost: true
  }).sort({
    _id: -1
  }).limit(4).toArray();
  client.close();
  res.status(200).json({
    categories,
    latestPosts,
    featuredPosts
  });
}

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXRhaWx3aW5kY3NzLy4vcGFnZXMvYXBpL2hlbGxvLmpzIiwid2VicGFjazovL3dpdGgtdGFpbHdpbmRjc3MvZXh0ZXJuYWwgXCJtb25nb2RiXCIiXSwibmFtZXMiOlsiaGVsbG9BUEkiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiLCJkYiIsImNhdGVnb3JpZXMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJsYXRlc3RQb3N0cyIsInNvcnQiLCJfaWQiLCJsaW1pdCIsImZlYXR1cmVkUG9zdHMiLCJpc0ZlYXR1cmVkUG9zdCIsImNsb3NlIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxlQUFlQSxRQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDL0MsUUFBTUMsTUFBTSxHQUFHLElBQUlDLGdEQUFKLENBQ2IsZ0dBRGEsRUFFYjtBQUNFQyxtQkFBZSxFQUFFLElBRG5CO0FBRUVDLHNCQUFrQixFQUFFO0FBRnRCLEdBRmEsQ0FBZjtBQVFBLFFBQU1ILE1BQU0sQ0FBQ0ksT0FBUCxFQUFOO0FBRUEsUUFBTUMsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQVAsQ0FBVSxNQUFWLENBQVgsQ0FYK0MsQ0FhL0M7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFlBQWQsRUFBNEJDLElBQTVCLENBQWlDLEVBQWpDLEVBQXFDQyxPQUFyQyxFQUF6QjtBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFNTCxFQUFFLENBQ3pCRSxVQUR1QixDQUNaLE9BRFksRUFFdkJDLElBRnVCLENBRWxCLEVBRmtCLEVBR3ZCRyxJQUh1QixDQUdsQjtBQUFFQyxPQUFHLEVBQUUsQ0FBQztBQUFSLEdBSGtCLEVBSXZCQyxLQUp1QixDQUlqQixFQUppQixFQUt2QkosT0FMdUIsRUFBMUI7QUFPQSxRQUFNSyxhQUFhLEdBQUcsTUFBTVQsRUFBRSxDQUMzQkUsVUFEeUIsQ0FDZCxPQURjLEVBRXpCQyxJQUZ5QixDQUVwQjtBQUFFTyxrQkFBYyxFQUFFO0FBQWxCLEdBRm9CLEVBR3pCSixJQUh5QixDQUdwQjtBQUFFQyxPQUFHLEVBQUUsQ0FBQztBQUFSLEdBSG9CLEVBSXpCQyxLQUp5QixDQUluQixDQUptQixFQUt6QkosT0FMeUIsRUFBNUI7QUFPQVQsUUFBTSxDQUFDZ0IsS0FBUDtBQUVBakIsS0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVaLGNBQUY7QUFBY0ksZUFBZDtBQUEyQkk7QUFBM0IsR0FBckI7QUFDRCxDOzs7Ozs7Ozs7OztBQ3JDRCxxQyIsImZpbGUiOiJwYWdlcy9hcGkvaGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoZWxsb0FQSShyZXEsIHJlcykge1xyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudChcclxuICAgIFwibW9uZ29kYitzcnY6Ly90cmVuZGFmaWwyOmRhdGFiYXphMEBwcm9qZWN0MC5nejJ2aC5tb25nb2RiLm5ldC90ZXN0P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiLFxyXG4gICAge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihcInRlc3RcIik7XHJcblxyXG4gIC8vIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwiY2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJjYXRlZ29yaWVzXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcclxuXHJcbiAgY29uc3QgbGF0ZXN0UG9zdHMgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJwb3N0c1wiKVxyXG4gICAgLmZpbmQoe30pXHJcbiAgICAuc29ydCh7IF9pZDogLTEgfSlcclxuICAgIC5saW1pdCgxMClcclxuICAgIC50b0FycmF5KCk7XHJcblxyXG4gIGNvbnN0IGZlYXR1cmVkUG9zdHMgPSBhd2FpdCBkYlxyXG4gICAgLmNvbGxlY3Rpb24oXCJwb3N0c1wiKVxyXG4gICAgLmZpbmQoeyBpc0ZlYXR1cmVkUG9zdDogdHJ1ZSB9KVxyXG4gICAgLnNvcnQoeyBfaWQ6IC0xIH0pXHJcbiAgICAubGltaXQoNClcclxuICAgIC50b0FycmF5KCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNhdGVnb3JpZXMsIGxhdGVzdFBvc3RzLCBmZWF0dXJlZFBvc3RzIH0pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=