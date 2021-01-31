function getUrlParams() {

    var paramMap = {};
    if (location.search.length == 0) {
      return paramMap;
    }
    var parts = location.search.substring(1).split("&");
  
    for (var i = 0; i < parts.length; i ++) {
      var component = parts[i].split("=");
      paramMap [decodeURIComponent(component[0])] = decodeURIComponent(component[1]);
    }
    return paramMap;
}

// Displays the appropriate error code
var errCode = getUrlParams()['errcode'];
var errMsg = getUrlParams()['errmsg'];


document.getElementById("title").innerHTML = errCode + " " + errMsg;    // Tab name
document.getElementById("errorText").innerHTML = "Error " + errCode;    // Main message
document.getElementById("subtext").innerHTML = errMsg;                  // Main message
