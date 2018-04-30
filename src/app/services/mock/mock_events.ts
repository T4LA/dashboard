export const Events = [
  {
    timestamp: "2018-04-18T13:05:00+02:00",
    version: "1.0.0",
    actor: {
      mbox: "mailto:learner@example.com",
      name: "You",
      objectType: "Agent"
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: {
        "en-US": "completed"
      }
    },
    object: {
      id: "http://adlnet.gov/expapi/activities/example",
      definition: {
        name: {
          "en-US": "Assignment"
        },
        description: {
          "en-US": "Assignment 001"
        }
      },
      objectType: "Activity"
    },
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  },
  {
    timestamp: "2018-04-15T01:05:00+02:00",
    version: "1.0.0",
    actor: {
      mbox: "mailto:learner@example.com",
      account: {
        name: "learner",
        homePage: "http://example.com"
      },
      name: "You",
      objectType: "Agent"
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: {
        "en-US": "watched"
      }
    },
    object: {
      id: "http://adlnet.gov/expapi/activities/example",
      definition: {
        name: {
          "en-US": "Video"
        },
        description: {
          "en-US": "Lecture Video 001"
        }
      },
      objectType: "Activity"
    },
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  },
  {
    timestamp: "2018-04-04T17:10:00+02:00",
    version: "1.0.0",
    actor: {
      mbox: "mailto:learner@example.com",
      account: {
        name: "learner",
        homePage: "http://example.com"
      },
      name: "You",
      objectType: "Agent"
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: {
        "en-US": "watched"
      }
    },
    object: {
      id: "http://adlnet.gov/expapi/activities/example",
      definition: {
        name: {
          "en-US": "Video"
        },
        description: {
          "en-US": "Lecture Video 002"
        }
      },
      objectType: "Activity"
    },
    result: {
      score: {
        scaled: 0.75
      },
      success: true,
      completion: true
    }
  }
];
