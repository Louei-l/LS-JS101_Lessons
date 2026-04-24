// eslint-disable-next-line no-unused-vars
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

//What will the following function invocation return?
bar(foo());

//ANS
//no
// foo returns yes, bar runs a check if input is not a no then output is no