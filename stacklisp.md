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

This might a bit easier to see with indentation, which StackLisp supports. It is not required, as all whitespace is deleted while parsing.

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
