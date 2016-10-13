var API_HOST = 'http://wwww.matmore.com'

var apis = {
    getHomeInfo: 'home/getHomeInfo.php',
    getClassifyList: 'classify/getClassifyList.php',
    getClassifyDetail: '/classify/getClassifyDetail.php',
    getCartInfo: 'cart/getCartInfo.php',
    getArtistList: 'artist/getArtistList.php',
    getArtistDetail: 'artist/getArtistDetail.php',
    getUserInfo: "user/getUserInfo.php"
}

function requestGet( url ) {
    return new Promise(( resolve, reject ) => {
        wx.request( {
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                resolve( res )
            },
            fail: function( res ) {
                reject( res )
            }
        })
    })
}

function requestPost( url, data ) {
    return new Promise(( resolve, reject ) => {
        wx.request( {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
            success: function( res ) {
                resolve( res )
            },
            fail: function( res ) {
                reject( res )
            }
        })
    })
}

function uploadFile( url, filePath, name, formData ) {
    return new Promise(( resolve, reject ) => {
        wx.uploadFile( {
            url: url,
            filePath: filePath,
            name: name,
            formData: formData,
            success: function( res ) {
                resolve( res )
            },
            fail: function( res ) {
                reject( res )
            }
        })
    })
}

function downloadFile( url, type ) {
    return new Promise(( resolve, reject ) => {
        wx.downloadFile( {
            url: url,
            type: type,
            success: function( res ) {
                resolve( res )
            },
            fail: function( res ) {
                reject( res )
            }
        })
    })
}

module.exports = {
    API_HOST: API_HOST,
    APIS: apis,
    get: requestGet,
    post: requestPost,
    uploadFile: uploadFile,
    downloadFile: downloadFile
}