export const projectName = 'Demo App';

const projectsData = [
    {
      id: 'scsc5115',
      name: 'test',
      status: 'To Do',
      issues: [
        {
          id: "1xmhnfb",
          title: 'Issue 1',
          assignee: 'John Doe',
          status :'To Do',
          description: 'This is the first issue',
          priority: 'High',
          duedate:'20-08-2023',
          comments: "Add comments",
        },
        {
            id: "2yrhgn",
            title: 'To do 1',
            assignee: 'Doe',
            status :'To Do',
            description: 'This is the Second issue',
            priority: 'High',
            duedate:'20-08-2023',
            comments: "Add comments",
          },
        // More issues...
      ],
    },
    {
      id: 'cfef84',
      name: 'test',
      status: 'In Progress',
      issues: [
        {
          id: "3jlhjj",
          title: 'Issue 2',
          assignee: 'Jane Smith',
          status :'In Progress',
          description: 'This is the second issue',
          priority: 'Medium',
          duedate:'20-08-2023',
          comments: "Add comments",
        },
        {
            id: "4rgfbdn",
            title: 'testIssue 2',
            assignee: 'Smith',
            status :'In Progress',
            description: 'This is the test issue',
            priority: 'Medium',
            duedate:'20-08-2023',
            comments: "Add comments",
          },
        // More issues...
      ],
    },
    {
        id: 'wdwf82',
        name: 'test',
        status: 'Completed',
        issues: [
          {
            id: "5affbf",
            title: 'Issue 3',
            assignee: 'Mc Smith',
            status :'Completed',
            description: 'This is the third issue',
            priority: 'Low',
            duedate:'20-08-2023',
            comments: "Add comments",
          },
          {
            id: "6lghmfg",
            title: 'Issue 3',
            assignee: 'Mc Smith',
            status :'Completed',
            description: 'This is the third issue',
            priority: 'Low',
            duedate:'20-08-2023',
            comments: "Add comments",
          },
          // More issues...
        ],
      },
  ];
  
  export default projectsData;
  