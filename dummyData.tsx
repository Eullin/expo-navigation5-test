export const screens = [
     {
      "Screen": 'TabOneScreen',
      "config":  {
        "buttonTitle": "ScreenOne",
        "icon": "Mote",
        "props":  {
          "renderMode": "web",
          "url": "https://www.kk.no/mote/",
        },
        "routeName": "Meeting",
        "title": "Mote",
      },
    },
     {
      "Screen": "TabTwoScreen",
      "config":  {
        "routeName": "ScreenTwo",
      },
    },
  ];

export const data2 =  [
   {
    "Screen": "[Function HomeScreen]",
    "config":  {
      "buttonTitle": "Hjem",
      "icon": "home",
      "props":  {
        "pushHandler": "[Function pushHandler]",
        "removePushHandler": "[Function removePushHandler]",
        "renderMode": "web",
        "url": "https://www.kk.no/",
      },
      "routeName": "Home",
      "title": "Hjem",
    },
  },
   {
    "Screen": "[Function WebViewArticleScreen]",
    "config":  {
      "routeName": "WebViewArticle",
    },
  },
   {
    "Screen": "[Function FeedbackScreen]",
    "config":  {
      "routeName": "Feedback",
    },
  },
]

  export const stackConfig = {
    "defaultNavigationOptions": {
      "header": "Function header",
    },
    "initialRouteName": "Menu",
  }

  export const screen = {
    "buttonTitle": "Mer",
    "icon": "burger",
    "props": {},
    "routeName": "Menu",
    "title": "Mer",
  }

  export const colors =  {
    "errorBackground": "red",
    "errorText": "#fff",
    "headerBackgroundColor": "#1B1A1A",
    "headerIconColor": "#FFFFFF",
    "lightGrey": "#e2e2e2",
    "noticeBackground": "#262626",
    "noticeText": "#fff",
    "primary": "black",
    "primaryDark": "#000",
    "secondary": "#999",
    "tabBarBackgroundColor": "#FFFFFF",
    "tabBarBorderTopColor": "#EFEFEF",
    "tabBarLabelColor": "#999",
    "tabBarLabelFontSize": 11,
    "tabBarShowIcon": true,
    "tabBarShowLabel": true,
    "tabIconDefaultFill": "transparent",
    "tabIconDefaultStroke": "black",
    "tabIconSelectedFill": "#1B1A1A",
    "tabIconSelectedStroke": "#1B1A1A",
    "tabIconSize": 20,
    "type": "#303030",
    "warningBackground": "#EAEB5E",
    "warningText": "#666804",
  }