/**
 * Created by Jahanzaib on 8/27/2014.
 */

chrome.app.runtime.onLaunched.addListener(function(launchData){
    chrome.app.window.create('../index.html',{
        id:"Bmi-Calculator",
        bounds:{
            width:410,
            height:645
        },
        minWidth:410,
        minHeight:645,
        maxWidth:410,
        maxHeight:645
        /*frame:"none"*/
    });
});
chrome.runtime.onInstalled.addListener(function(){
    console.log('installed');
});
