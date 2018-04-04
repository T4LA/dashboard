export const data= {
    "title" : "MOOC monitor",
    "rows": [
        {
            "type" : "intro",
            "text"  : "This Monitor shows if the typical dropout pattern is effecting one of the ECO MOOCs. The y-axis shows the ‘amount of launches’ from the ECO portal to a MOOC. So if a student signs-up for a MOOC from the ECO portal this is registered as a ‘launch’. The x-axis shows the amount of activities that all learners did in a course. The size of the bubble shows the amount of users in a course. If there is a high dropout rate for a course, it will be placed on the left side of the graph. Showing an amount of launches and than only few activities what is a sign of a high dropout rate. If the course is place on the right side of the graph than there are many activities after the students signed up for a MOOC and so there is a low dropout rate."
                
        
        },
        {
            "type" : "columns",
            "cols":[
                {
                    "class" : ['col-xs-8'],
                    "widgetTitle": "Mooc Monitor",
                    "text" : "intro text",
                    "vizId" : "ngx-barchart",
                    "data" : {
                        "metadata":{
                            "xAxis": "Country",
                            "yAxis": "Population",
                        },
                        "data":[
                        {
                          "name": "Germany",
                          "value": 8940000
                        },
                        {
                          "name": "Belgium",
                          "value": 5000000
                        },
                        {
                          "name": "France",
                          "value": 7200000
                        }
                      ]}
                },
                {
                    "class" : ['col-xs-4'],
                    "widgetTitle": "Simplified view",
                    "text" : "intro text",
                    "vizId" : "array",
                    "data" : {
                        "metadata":{
                            "xAxis": "Country",
                            "yAxis": "Population",
                        },
                        "data":[
                        {
                          "name": "Germany",
                          "value": 8940000
                        },
                        {
                          "name": "Belgium",
                          "value": 5000000
                        },
                        {
                          "name": "France",
                          "value": 7200000
                        }
                      ]}
                },
            ]
                
        
        }
    ]
}
   