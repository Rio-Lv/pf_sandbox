function retrieve_attribute(database, task_ID, entity_no, attribute) {
  return database["task_ID"]["Entities"][entity_no]["Attributes"][attribute];
}

function entity_overview(database, task_ID, entity_no, attribute) {
  return database["task_ID"]["Entities"][entity_no]["Attributes"];
}

function add_new_task(database) {
  task_ID = create_new_task_ID(database);
  database.task_ID = {
    Task_ID: task_ID,
    Backtrack_tasks: [],
    Data_creation: Date.now(),
    Entities: [],
  };
  return database;
}

function create_new_task_ID(database, initials) {
  // task ID format: initials plus an underscore, followed by
  // a letter followed by three letters or numbers.
  // Starting with A001. The total number of permutations is 1,071,875.
  // Unless someone does 5 tasks every day for 60 years, we will not run
  // out of personal IDs.
}
const isNowCats = (data) => {
  for (var [key, value] of Object.entries(data.AA7)) {
    data.AA7[key] = "cat";
  }
  console.log(data);
};
export const Main = (database) => {
  var data = database;
  //your code here
  //eg...
  isNowCats(data);

  return data;
};
