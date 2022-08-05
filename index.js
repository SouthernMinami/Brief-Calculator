// オペランド1、オペランド2、演算子を受け取って、計算を行うapplyOperationという関数を作成してください。
// オペランドは文字列として渡されるのでint型に変換する必要があります。
// もし演算子が+、-、*、/に該当しない場合は、NaN(Not A Number)を返してください。

// addEventListener(種類, 関数)を使って、各ボタンがクリックされるとapplyOperationという関数が実行され、その出力をanswerというid属性を持つinputタグのvalue属性に反映させてください。
// JSではinputタグのvalue属性は直接変更することができます。

// ここからJavaScriptを記述してください。
const applyOperation = (op1, op2, operator) => {
  // 関数を完成させてください
  op1 = parseInt(op1);
  op2 = parseInt(op2);

  switch (operator) {
    case "+": return op1 + op2;
    case "-": return op1 - op2;
    case "*": return op1 * op2;
    case "/": return op2 == 0 ? op1 : op1 / op2;
    default: return "NaN";
  }


}
//
let op1 = document.getElementById("operator1");
let op2 = document.getElementById("operator2");

let answer = document.getElementById("answer");

document.getElementById("plusOperator").addEventListener("click", () => {
  answer.value = applyOperation(op1.value, op2.value, "+");
});

document.getElementById("minusOperator").addEventListener("click", () => {
  answer.value = applyOperation(op1.value, op2.value, "-");
});

document.getElementById("timesOperator").addEventListener("click", () => {
  answer.value = applyOperation(op1.value, op2.value, "*");
});

document.getElementById("divideOperator").addEventListener("click", () => {
  answer.value = applyOperation(op1.value, op2.value, "/");
});
