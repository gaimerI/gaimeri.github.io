// Ultra complex password protection mechanism
(function() {
    var _ = (function() { 
        var filler = function(x) { return x + ""; };
        return (function() {
            var mix = [114, "l", String.fromCharCode(105), 97, 110];
            return mix[1] + "e" + mix[2] + mix[4] + (~~mix[0] - 14).toString();
        })();
    })();

    var confusingElements = [
        "password-prompt",
        "protected-content",
        "password-input",
        "submit-button",
        "error-message"
    ].reduce((object, key) => { 
        object[key] = document.getElementById(key); 
        return object; 
    }, {});

    var randomList = [
        confusingElements["password-prompt"],
        confusingElements["protected-content"],
        confusingElements["password-input"],
        confusingElements["submit-button"],
        confusingElements["error-message"]
    ];

    var [z0, z1, z2, z3, z4] = randomList;

    z3.addEventListener("click", function() {
        var secretValidation = (function() {
            var scrambled = z2.value + "";
            var deobfuscate = scrambled.split("").reverse();
            return deobfuscate.reverse().join("") === _;
        })();

        var randomlyChangeStyle = function(targetElement, styleValue) {
            targetElement.style["display"] = styleValue;
        };

        if (secretValidation) {
            console.log("Access permitted!");
            randomlyChangeStyle(z0, "none");
            console.log("Confidential content incoming...");
            randomlyChangeStyle(z1, "block");
        } else {
            console.log("Access denied! Maybe next time.");
            setTimeout(function() {
                randomlyChangeStyle(z4, "block");
            }, 0);
        }
    });

    // Excessive garbage logic for distraction
    var smokeScreen = new Array(250).fill(null).map(function(value, index) { 
        return "bloat" + index * Math.random().toFixed(4); 
    }).join(";");
    console.log("Garbage data:", smokeScreen.substring(0, 20));
})();
