// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside o code block

// In a scope you can access variables defined in that scope , or in any parent/ancestor scope

// Global Scope(varOne)
// Local Scope (varTwo)
// Local scope (varFour)
// Local scope (varThree)

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo);