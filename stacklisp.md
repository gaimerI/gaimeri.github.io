# StackLisp v3.0 Documentation

StackLisp is a new and simplistic Lisp-inspired language.

This documentation lists all currently available features.

---

## Syntax

As a Lisp-like language, StackLisp uses parentheses to separate functions.

```
(print "Hello, World!)
```

This does not require the use of semicolons.  
Function arguments are after the operator.  
Functions can also be chained.

```
(print (+ 2 (* 5 6) ) )
```

This might a bit easier to see with indentation, which StackLisp supports. It is not required, as all  non-functional whitespace is deleted before parsing.

```
(print
  (+ 2
    (* 5 6)
  )
)
```

All functions either take zero, one or two arguments. For longer operations, please chain them.

```
(print
  (+ 2
    (+ 2
      (+ 2
        (+ 2
          (+ 2
          )
        )
      )
    )
  )
)
```

Comments use the `/* ... */` syntax. Double-slash and -semicolon comments have been deleted to make the codebase more consistent.

```
(print "Hello, World!") /* Prints Hello, World to the console */
```

----

## Basic Arithmetic

StackLisp supports all basic arithmetic functions.

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

OR:
```
(print (or true false) ) /* true */
```

NOT:
```
(print (not true) ) /* false */
```

Unary exists. The two people using it may use `++` and `--`.

Addition:
```
(print (++ 10) ) /* 11 */
```

Use `rand` to get a random integer from a range.

```
(print (rand 1 100)) /* Prints a random number from 1 to 100 */
```

This can also generate decimals, if specified.

```
(print (rand 1.0 100.0)) /* Prints a random floating-point number */
```

Non-basic arithmetic is also supported.
```
abs
sin
cos
tan
asin
acos
atan
sqrt
```

----

## String Manipulation

Strings use double quotes. (`""`).

Use `letter` to get a letter of a string.

```
(print (letter 1 "Hello") ) /* e */
```

All indices are zero-based.

Use `length` to get the length of a string.

```
(print (length "Hello") ) /* 5 */
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

Immutable data is on todo-list for v4.0.

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

To add an item to the array, use `+`.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(print a) /* ["apple","banana", "mango", "pear", "kiwi"] */
```
To remove an item from the array, use `-`.

```
(define a array)

(set a (+ a "apple"))
(set a (+ a "banana"))
(set a (+ a "mango"))
(set a (+ a "pear"))
(set a (+ a "kiwi"))

(print a) /* ["apple","banana", "mango", "pear", "kiwi"] */

(set a (- a 1)

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

This does not necessarily need to be set; `(print (pop a))` works as well.

----

## Dictionaries / Objects

As of v3.0, dictionaries are supported.

To use one, define a variable as dictionary.

```
(define a dictionary)
```

Use `assign` to make a key-value pair.

```
(define a (assign "key" "value"))
(print a) /* {"key":"value"} */
```

Use `+` to add an assigned pair to a dictionary.

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

----

## JavaScript Embedding

StackLisp allows JavaScript to be embedded in many different places.

```
(print (js-embed "window.innerWidth")) /* Your screen's inner width */
```

The JavaScript is, by default, sandboxed.

----

## Functions

To define a function, use `defun`. Functions accept arguments and return values.

```
(defun add a b
  (return (+ a b))
)

(print (add 5 6)) /* 11 */
```

There can be as many arguments as you want. We really encourage you to use this.

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

Use `scope` to define a scope for variables. This does not loop; just makes variables defined there only exist inside it.

```
(scope
  (define i 0)
  (print i)
)

(print i) /* Error: variable i not found */
```

----

## Input / Output

Use `get-input` to get user input.

```
(print (get-input "Enter some text: "))
```

The argument specifies the text / question the user sees.  
This does not work inside `no-refresh`.

For output, you can use `clipboard-copy` 

```
(clipboard-copy "Copied text)
```

This cannot be used inside `no-refresh` or `forever`.

----

You have now read the entire documentation. More features are coming; keep an eye out for updates!
