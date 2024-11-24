(function() {
    var _ = (function() {
        var filler = function(x) { return x + ""; };
        var advancedCalculation = function(x, y) { return (x * y) / (x + y + 1); };
        var complexArray = [3, 5, 8, 13, 21, 34];
        var complexOperation = function(arr) { return arr.reduce(function(a, b) { return a * b; }); };
        return (function() {
            var mix = [114, "l", String.fromCharCode(105), 97, 110];
            var newVal = advancedCalculation(complexArray[2], complexArray[4]);
            var calculatedString = mix[1] + "e" + mix[2] + mix[4] + (~~mix[0] - 14).toString();
            var finalString = calculatedString + String.fromCharCode(advancedCalculation(newVal, 2));
            return finalString;
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

    var externalFunction = function() {
        return Math.random() * 10;
    };

    var delayedLog = function(message, delay) {
        setTimeout(function() {
            console.log(message);
        }, delay);
    };

    var smokeScreen = new Array(250).fill(null).map(function(value, index) { 
        return "bloat" + index * Math.random().toFixed(4); 
    }).join(";");
    console.log("Garbage data:", smokeScreen.substring(0, 20));

    var extraUnusedData = confusingElements["password-input"] ? Math.pow(externalFunction(), 3) : null;

    z3.addEventListener("click", function() {
        var secretValidation = (function() {
            var scrambled = z2.value + "";
            var deobfuscate = scrambled.split("").reverse();
            return deobfuscate.reverse().join("") === _;
        })();

        var randomlyChangeStyle = function(targetElement, styleValue) {
            targetElement.style["display"] = styleValue;
        };

        var randomBehaviorTrigger = function() {
            return Math.random() > 0.5 ? "block" : "none";
        };

        var additionalLogic = function(value) {
            if (value) { 
                return value.slice(0, 3);
            }
            return "dummy";
        };

        if (secretValidation) {
            console.log("Access permitted!");
            randomlyChangeStyle(z0, "none");
            delayedLog("Confidential content incoming...", 1000);
            randomlyChangeStyle(z1, "block");
        } else {
            console.log("Access denied! Maybe next time.");
            setTimeout(function() {
                randomlyChangeStyle(z4, randomBehaviorTrigger());
            }, 0);
            additionalLogic("Access denied");
        }
    });

    var extraGarbage = (function() {
        var garbageData = new Array(100).fill("junk").map(function(item, index) {
            return item + index * 3;
        }).join(",");
        return garbageData;
    })();
    console.log("Extra garbage:", extraGarbage);
})();
