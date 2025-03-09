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
