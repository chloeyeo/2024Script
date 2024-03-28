//export default data = [{ title: "hi" }, {}]; // object data (like json). mock up data.
// either put export default at the start without const
// or const data = and export default data at the bottom!
const data = [
  { title: "first title", content: "some content", date: "2024-03-03" },
  { title: "second title", content: "some content", date: "2024-03-03" },
  { title: "third title", content: "some content", date: "2024-03-03" },
]; // object data (like json). mock up data.
const data2 = [{ title: "hi" }, {}];
const testData = "hello";

console.log(data[0].title);

// javascript is optimised for web bc it changes JS to our data just by json.parsor and does this fast
// JSP single page application does not refreshes page, i.e. does not visit the current page again, it just updates the page in one page.
// so JS is much better in terms of using less power.

// export default data; // export 'default' is only used when we default a SINGLE object/variable
// otherwise for multiple exports we use export and {}. without the default.
export { data, data2, testData };
