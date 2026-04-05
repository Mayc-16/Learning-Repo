var number;
const tickets = [
  { number: "INC0010001", state: "New" },
  { number: "INC0010002", state: "In Progress" },
  { number: "INC0010003", state: "On Hold" },
  { number: "INC0010004", state: "Resolved" },
  { number: "INC0010005", state: "Closed" },
  { number: "INC0010006", state: "In Progress" },
  { number: "INC0010007", state: "New" },
  { number: "INC0010008", state: "Resolved" },
  { number: "INC0010009", state: "New" },
  { number: "INC0010010", state: "In Progress" }
];

function getUnresolved(tickets) {
  return tickets
    .filter(ticket => ticket.state !== "Resolved")
    .map(ticket => ticket.number);
}

console.log(getUnresolved(tickets));