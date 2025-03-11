# B♭ v3.0 Documentation

B♭ is a new and simplistic Lisp-inspired language.

This documentation lists all currently available features.

---

## Syntax

As a Lisp-like language, B♭ uses parentheses to separate functions.

```
(print "Hello, World!)
```

This does not require the use of semicolons.  
Function arguments are after the operator.

Functions can also be chained.

```
(print (+ 2 (* 5 6) ) )
```

This might a bit easier to see with indentation, which B♭ supports. It is not required, as all  non-functional whitespace is deleted before parsing.

```
(print
  (+ 2
    (* 5 6)
  )
)
```

All built-in functions take a strict number of arguments. For longer operations, please chain them, or better yet, create functions. We understand that this is overly verbose, but it simplifies parsing and reading.

```
(print
  (+ 2
    (+ 2
      (+ 2
        (+ 2
          (+ 2
))))))
```

Comments use the `/* ... */` syntax. Double-slash and -semicolon comments have been deleted to make the codebase more consistent.

```
(print "Hello, World!") /* Prints Hello, World to the console */
```

----

## Details for nerds

B♭ uses both a compiler and interpreter. First, the B♭ code is compiled to Assembly. This Assembly is then interpreted to run the code.

## Terminal

Use `print` to write to terminal.

```
(print "Hello, World!")
```

Use `clear` to clear the terminal.

```
(clear)
```

Use `error` to throw an error. You can also use `exception` for this; however exceptions stop the script.

```
(error "Something happened")

(exception "Please stop.")
```

Other operators such as `warn` and `log` exist for semantic purposes.

----

## Basic Arithmetic

B♭ supports all basic arithmetic functions.

Addition:
```
(print (+ 10 2) ) /* 12 */
```

Subtraction:
```
(print (- 10 2) ) /* 8 */
```

Multiplication:
```
(print (* 10 2) ) /* 20 */
```

Division:
```
(print (/ 10 2) ) /* 5 */
```

Exponentiation:
```
(print (^ 10 2) ) /* 100 */
```

Modulus:
```
(print (% 10 2) ) /* 0 */
```

Comparisons are also supported. They take two inputs and return a boolean.

Equals
```
(print (= 10 2) ) /* false */
```

Greater than:
```
(print (> 10 2) ) /* true */
```

Less than:
```
(print (< 10 2) ) /* false */
```

Greater than or equal:
```
(print (>= 10 2) ) /* true */
```

Less than or equal:
```
(print (<= 10 2) ) /* false */
```

Not equal:
```
(print (!= 10 2) ) /* true */
```

Boolean operators - supported!

AND:
```
(print (and true false) ) /* false */
```

| A | B | OUT |
|---|---|-----|
| 1 | 0 | 0   |
| 0 | 1 | 0   |
| 1 | 1 | 1   |
| 0 | 0 | 0   |

OR:
```
(print (or true false) ) /* true */
```

| A | B | OUT |
|---|---|-----|
| 1 | 0 | 1   |
| 0 | 1 | 1   |
| 1 | 1 | 1   |
| 0 | 0 | 0   |

XOR:
```
(print (xor true false) ) /* true */
```

| A | B | OUT |
|---|---|-----|
| 1 | 0 | 1   |
| 0 | 1 | 1   |
| 1 | 1 | 0   |
| 0 | 0 | 0   |

NOT:
```
(print (not true) ) /* false */
```

| IN | OUT |
|----|-----|
| 1  | 0   |
| 0  | 1   |

NAND:
```
(print (nand true false) ) /* true */
```

| A | B | OUT |
|---|---|-----|
| 1 | 0 | 1   |
| 0 | 1 | 1   |
| 1 | 1 | 0   |
| 0 | 0 | 1   |

NOR:
```
(print (nor true false) ) /* false */
```

| A | B | OUT |
|---|---|-----|
| 1 | 0 | 0   |
| 0 | 1 | 0   |
| 1 | 1 | 0   |
| 0 | 0 | 1   |

XNOR:
```
(print (xnor true false) ) /* false */
```

| A | B | OUT |
|---|---|-----|
| 1 | 0 | 0   |
| 0 | 1 | 0   |
| 1 | 1 | 1   |
| 0 | 0 | 1   |

Unary sadly exists. The two people still liking them may use `++` and `--`.

```
(print (++ 10) ) /* 11 */
```

Use `rand` to get a random integer from a range.

```
(print (rand 1 100)) /* Prints a random number from 1 to 100 */
```

This can also generate decimals, if specified.

```
(print (rand 1.0 100.0)) /* Prints a random floating-point number in specified range */
```

Rounding is done via `round`, `floor` and `ceiling`.

```
(print (round 10.5)) /* 11 */
(print (floor 10.9)) /* 10 */
(print (ceiling 10.1)) /* 11 */
```

Non-basic arithmetic is also supported.
```
abs
sin
cos
tan
csc
sec
cot
asin
acos
atan
acsc
asec
acot
sqrt
```

For complicated single-line math expressions, please use `math`. It supports variables and JavaScript -like syntax.

```
(print (math "(10 * 10) / 7")) /* 14.285714285714286 */

(define a 10.6)
(print (math "(a * 10) / a")) /* 10 */
```

----

## String Manipulation

Strings use double quotes. (`""`).

Use `letter` to get a letter of a string.

```
(print (letter 1 "Hello")) /* e */
```

All indices are zero-based.

Use `length` to get the length of a string.

```
(print (length "Hello")) /* 5 */
```

String concatenation can either be done with `+` or `concat`.

```
(print (+ "Hello " "World")) /* Hello World */

(print (concat "Hello " "World")) /* Hello World */
```

`atob` and `btoa` are used for Base64 encoding.

```
(print (atob "Hello, World!")) /* BIUwNmD2A0AEDqkBOYAmBCIA */

(print (btoa "BIUwNmD2A0AEDqkBOYAmBCIA")) /* Hello, World! */
```

Use `has` if you want to know if string contains something.

```
(define a "Hello, World!")

(print (has a "llo")) /* true */
```

Use `splice` to get a substring.

```
(print (splice "Hello" 2 4)) /* llo */
```

Replacers are a thing.

```
(print (replace "Hello, World!" "World" "Earth" )) /* Hello, Earth! */

(define a "Hello, this is gaimerI17 speaking!")
(print (replace a "gaimerI17" "anonymous")) /* Hello, this is anonyymius speaking! */
```

Strings can be formatted. Currently uppercase and lowercase are supported, as well as shuffling and reversing.

```
(print (format "uppercase" "hello")) /* HELLO */

(print (format "lowercase" "wOrLD")) /* world */

(print (format "shuffle" "apple")) /* letters of "apple" in randomised order */

(print (format "reverse" "orange")) /* egnaro */
```

----

## Variables

Variables exist. To use a variable, you first need to define it.

```
(define a 10)

(print a) /* 10 */
```

To change or redefine it, use `set`.

```
(define a 10)
(print a) /* 10 */

(set a (++ a))
(print a) /* 11 */

(set a "Hello")
(print a) /* Hello */
```

Constants can be defined with `const`. Constants cannot be redefined or changed.

Variables can be in global scope or block scope.

Use `destroy` to destroy a variable. This deletes both its value and reference.

----

## Arrays

To use an array, you need to define a variable as one.

```
(define a array) /* [] */
```

Alternatively, you can write the array as a string. Remember to escape inner quotes!

```
(define a "[\"apple\",\"banana\",\"pear\"]"
```

To add an item to the array, set it with `+` or use `pushto`.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (pushto a "mango"))
(set a (pushto a "pear"))
(set a (pushto a "kiwi"))

(print a) /* ["apple","banana", "mango", "pear", "kiwi"] */
```

The function `pushto` is called so because `push` is already used by the assembly compiler and interpreter. We apologize for needing to write two extra characters.

To remove an item from the array, use `-`.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(print a) /* ["apple","banana", "mango", "pear", "kiwi"] */

(set a (- a 1))

(print a) /* ["apple", "mango", "pear", "kiwi"] */
```

Use `length` to get the length of an array. If you want an item from it, use `letter`.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(print a) /* ["apple","banana", "mango", "pear", "kiwi"] */
(print (length a)) /* 5 */
(print (letter 1 a)) /* banana */
```

Use `concat` to combine two arrays.
```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(define b array)

(set b (+ b "javascript"))
(set b (+ b "html"))
(set b (+ b "css"))
(set b (+ b "stacklisp"))
(set b (+ b "gulfofmexico"))

(print a) /* ["apple","banana", "mango", "pear", "kiwi"] */
(print b) /* ["javascript","html","css","stacklisp","gulfofmexico"] */
(print (concat a b)) /* ["apple","banana","mango","pear","kiwi","javascript","html","css","stacklisp","gulfofmexico"] */
```

To remove the last item of an array, use `pop`.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(print a) /* ["apple","banana","mango","pear","kiwi"] */

(set a (pop a))

(print a) /* ["apple","banana","mango","pear"] */
```

NOTE: Only `set` can update a variable's value. Repeated `pop` or `push` does **not** work.  
But, things like `(print (pop a))` work. It still does not update the variable's value.

```
(define a array)
(set a (push a "apple"))
(print a) /* ["apple"] */

(print (push a "banana")) /* ["apple", "banana"] */

(print a) /* ["apple"]
```

`has` and `splice` keywords work with arrays.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(print (has a "mango")) /* true */
```

Use `replace` to replace an index or a value with something.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(set a (replace a "pear" "orange"))
(set a (replace a 1 "plum"))

(print a) /* ["apple","plum","mango","orange","kiwi"] */
```

Arrays work with `format "reverse` and `format "shuffle"`.

----

## Linked Lists

Linked lists aren't real. They do not exist.

----

## Dictionaries / Objects

As of v2.7, dictionaries are supported.

To use one, define a variable as dictionary.

```
(define a dictionary)
```

Use `assign` to make a key-value pair.

```
(define a (assign "key" "value"))
(print a) /* {"key":"value"} */
```

Use `+` to add an assigned pair to a dictionary, or `-` to remove a key and its value.

```
(define a dictionary)
(set a
  (+ a
    (assign "key" "value")
  )
)
(set a
  (+ a
    (assign "apple" "orange")
  )
)
(set a
  (+ a
    (assign "spring" "summer")
  )
)

(print a) /* {"key":"value","apple":"orange","spring":"summer"} */
```

Like arrays, dictionaries can be defined as escaped strings, and combined with `concat`.

Even objects allow the use of `has` keyword. Here, it tests if a dictionary contains a specified **key**.

```
(define a dictionary)
(set a
  (+ a
    (assign "key" "value")
  )
)
(set a
  (+ a
    (assign "apple" "orange")
  )
)
(set a
  (+ a
    (assign "spring" "summer")
  )
)

(print (has a "spring")) /* true */
```

Use `replace` to change the value of a key.

```
(define a dictionary)
(set a
  (+ a
    (assign "key" "value")
  )
)
(set a
  (+ a
    (assign "apple" "orange")
  )
)
(set a
  (+ a
    (assign "spring" "summer")
  )
)

(set a (replace a "spring" "winter"))

(print a) /* {"key":"value","apple":"orange","spring":"winter"} */
```

----

## Array and Dictionary Map

Before version 3.5, you could use the `map` keyword to map arrays and dictionaries.  
However, version 3.5 broke `map`, `sort` and `check` due to changes in the interpreter. The compiler side still works.  
As of now, `map` returns undefined, **until fixed**.

----

## JavaScript Embedding

B♭ allows JavaScript to be embedded in many different places. This is inspired by SpaceTode by Lu Wilson.

```
(print (js-embed "window.innerWidth")) /* Your screen's inner width */
```

The JavaScript is hardcoded to be sandboxed.

----

## Functions

To define a function, use `defun`. Functions accept arguments and return values.

```
(defun add a b
  (return (+ a b))
)

(print (add 5 6)) /* 11 */
```

There can be as many arguments as you want. We really encourage you to use this, due to limited arguments of built-in functions.

```
(defun add a b c d e f
  (return
    (+ a
      (+ b
        (+ c
          (+ d
            (+ e f)
          )
        )
      )
    )
  )
)

(print (add 5 6 7 8 9 10)) /* 45 */
```

Return does not necessarily need a value. You can also use it to end the function prematurely.

### Examples

Factorial

```
(defun factorial n
  (if (<= n 1)
    (return 1)
    (return (* n (factorial (- n 1))))
  )
)

(print (factorial 5) /* 120 */
```

----

## Types

Types and casting are an archaic relic of old programming systems. B♭ does not explicitly use them, and casting is never required.

----

## Conditions & Loops

### if

```
(if ( = (rand 1 2) 1)
  (print "Hello") /* this is the if branch */
  (print "world") /* this is the else branch */
)
```

`if` requires an one-line true-body and one-line false-body.

For multi-line branches, use `do`.

```
(if ( = (rand 1 2) 1)
  (do
    (print "Hello")
    (print "World")
  )
  (do
    (print "Apple")
    (print "Orange")
  )
)
```

If you don't want to use else-branch, use `when` instead of `if`.

```
(when (= (rand 1 2) 1)
  (print "Hello")
  (print "World") /* Both are in if branch */
) /* No else branch */
```

Else-if or elif can be made as follows.

```
(define a (rand 1 5))
(if (= a 1)
  (print 1)
(if (= a 2)
  (print 2)
(if (= a 3)
  (print 3)
  (print "?")
)))
```

### while

`while` is the most basic loop available.

```
(define i 0)

(while (<= i 10)
  (print i)
  (set i (++ i))
) /* Prints all numbers from 0 to 10 */
```

### forever

`forever` loops forever.

```
(forever
  (print "Runs forever!")
)
```

For memory safety, the terminal and stack have a hardcoded limit of 200 000 entries.

### break

You can use `break` to escape from a loop.

```
(forever
  (print "Runs... once?)
  (break)
)
```

### no-refresh

By default, all loops have some latency. To get rid if this, use `no-refresh`.
```
(define i 0)


(while (< i 100)
  (no-refresh
    (print i)
    (set i (++ i))
  )
)
```

This makes the script run in a single frame.

### scope

Use `scope` to define a custom scope for variables. This does not loop; just makes variables defined there only exist inside it.

```
(scope
  (define i 0)
  (print i) /* i only exists here */
)

(print i) /* Error: variable i not found */
```

Normally, a variable defined in a function exists throughout it. With scope, you can even make variables that only exist on a single line.  
Functions defined with `defun` automatically make their own scope.

----

## Input / Output

Use `get-input` to get user input.

```
(print (get-input "Enter some text: "))
```

The argument specifies the text / question the user sees.  
This does not work inside `no-refresh`, due to user input possibly taking longer.

For output, you can use `clipboard-copy` 

```
(clipboard-copy "Copied text)
```

This cannot be used inside `no-refresh` or `forever`, to not clutter user's clipboard.

----

You have now read the entire documentation. More features are coming; keep an eye out for updates!  
We are also open-source and accept pull requests.
