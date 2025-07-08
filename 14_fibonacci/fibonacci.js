const fibonacci = function() {
    let count = Number(arguments[0]);
    if (count < 0) return "OOPS";
`    // else if (count == 0) return 0;`
    else{
        let pre = 0;
        let post = 1;
        for (let i=0; i<count;i++){
            let temp = pre + post;
            pre = post;
            post = temp;
        }
        return pre;
    }
};

// Do not edit below this line
module.exports = fibonacci;
