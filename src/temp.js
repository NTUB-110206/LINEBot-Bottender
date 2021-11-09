let news_carousel = {
    "type": "carousel",
    "contents": []
}

let news_contents = {
    "type": "bubble",
    "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
            {
                "type": "image",
                "url": "https://static.news.bitcoin.com/wp-content/uploads/2021/08/rocket.png",
                "size": "full",
                "aspectMode": "cover",
                "aspectRatio": "2:3",
                "gravity": "top"
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "[NEWS TITLE]",
                                "size": "xl",
                                "color": "#ffffff",
                                "weight": "bold"
                            }
                        ]
                    },
                    {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                            {
                                "type": "text",
                                "text": "[NEWS DATE]",
                                "color": "#ebebeb",
                                "size": "sm",
                                "flex": 0
                            }
                        ],
                        "spacing": "lg"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "filler"
                            },
                            {
                                "type": "box",
                                "layout": "baseline",
                                "contents": [
                                    {
                                        "type": "filler"
                                    },
                                    {
                                        "type": "text",
                                        "text": "[NEWS LINK]",
                                        "color": "#ffffff",
                                        "flex": 0,
                                        "offsetTop": "-2px",
                                        "action": {
                                            "type": "uri",
                                            "label": "action",
                                            "uri": "http://linecorp.com/"
                                        }
                                    },
                                    {
                                        "type": "filler"
                                    }
                                ],
                                "spacing": "sm"
                            },
                            {
                                "type": "filler"
                            }
                        ],
                        "borderWidth": "1px",
                        "cornerRadius": "4px",
                        "spacing": "sm",
                        "borderColor": "#ffffff",
                        "margin": "xxl",
                        "height": "40px"
                    }
                ],
                "position": "absolute",
                "offsetBottom": "0px",
                "offsetStart": "0px",
                "offsetEnd": "0px",
                "backgroundColor": "#091942cc",
                "paddingAll": "20px",
                "paddingTop": "18px"
            },
            {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "[NEWS TREND]",
                        "color": "#ffffff",
                        "align": "center",
                        "size": "xs",
                        "offsetTop": "3px"
                    }
                ],
                "position": "absolute",
                "cornerRadius": "20px",
                "offsetTop": "18px",
                "backgroundColor": "#000000",
                "offsetStart": "18px",
                "height": "25px",
                "width": "53px"
            }
        ],
        "paddingAll": "0px"
    }
}


module.exports = { news_carousel, news_contents }