const problems = [
    {
      "id": 1,
      "name": "Sum of Two Numbers",
      "description": "Write a function that takes two numbers as parameters and returns their sum.",
      "testcases": [
        {"input": [2, 3], "output": 5},
        {"input": [-1, 1], "output": 0}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 2,
      "name": "Factorial",
      "description": "Write a function that calculates the factorial of a given number.",
      "testcases": [
        {"input": 5, "output": 120},
        {"input": 0, "output": 1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 3,
      "name": "Reverse String",
      "description": "Write a function that reverses a given string.",
      "testcases": [
        {"input": "hello", "output": "olleh"},
        {"input": "world", "output": "dlrow"}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 4,
      "name": "Palindrome",
      "description": "Write a function to check if a given string is a palindrome.",
      "testcases": [
        {"input": "racecar", "output": true},
        {"input": "hello", "output": false}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 5,
      "name": "Maximum Number",
      "description": "Write a function that finds the maximum number in an array of integers.",
      "testcases": [
        {"input": [4, 8, 2, 10], "output": 10},
        {"input": [-1, -5, -2], "output": -1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 6,
      "name": "Linear Search",
      "description": "Write a function to perform a linear search in an array for a given element.",
      "testcases": [
        {"input": [1, 2, 3, 4, 5], "element": 3, "output": 2},
        {"input": [10, 20, 30, 40], "element": 50, "output": -1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 7,
      "name": "FizzBuzz",
      "description": "Write a program that prints the numbers from 1 to 100. But for multiples of 3, print 'Fizz' instead of the number, and for the multiples of 5, print 'Buzz'. For numbers that are multiples of both three and five, print 'FizzBuzz'.",
      "difficulty": "Easy"
    },
    {
      "id": 8,
      "name": "Array Intersection",
      "description": "Write a function that returns the intersection of two arrays.",
      "testcases": [
        {"input1": [1, 2, 3, 4], "input2": [3, 4, 5, 6], "output": [3, 4]},
        {"input1": [10, 20, 30], "input2": [30, 40, 50], "output": [30]}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 9,
      "name": "Binary Search",
      "description": "Write a function to perform a binary search in a sorted array for a given element.",
      "testcases": [
        {"input": [1, 2, 3, 4, 5], "element": 3, "output": 2},
        {"input": [10, 20, 30, 40, 50], "element": 35, "output": -1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 10,
      "name": "Power of Two",
      "description": "Write a function to determine if a given integer is a power of two.",
      "testcases": [
        {"input": 8, "output": true},
        {"input": 12, "output": false}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 11,
      "name": "GCD (Greatest Common Divisor)",
      "description": "Write a function to find the greatest common divisor of two numbers.",
      "testcases": [
        {"input1": 12, "input2": 18, "output": 6},
        {"input1": 30, "input2": 45, "output": 15}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 12,
      "name": "Count Duplicates",
      "description": "Write a function that counts the number of duplicates in an array.",
      "testcases": [
        {"input": [1, 2, 2, 3, 4, 4], "output": 2},
        {"input": [10, 20, 30], "output": 0}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 13,
      "name": "Linked List Sum",
      "description": "Write a function to find the sum of elements in a linked list.",
      "difficulty": "Medium"
    },
    {
      "id": 14,
      "name": "Valid Parentheses",
      "description": "Write a function that determines if a given string of parentheses is valid.",
      "testcases": [
        {"input": "((()))", "output": true},
        {"input": "()[]{}", "output": true},
        {"input": "({[)]}", "output": false}
      ],
      "difficulty": "Medium"
    },
    {
      "id": 15,
      "name": "Merge Sorted Arrays",
      "description": "Write a function that merges two sorted arrays into a single sorted array.",
      "testcases": [
        {"input1": [1, 3, 5], "input2": [2, 4, 6], "output": [1, 2, 3, 4, 5, 6]},
        {"input1": [10, 20], "input2": [15, 25], "output": [10, 15, 20, 25]}
      ],
      "difficulty": "Medium"
    },
    {
      "id": 16,
      "name": "Depth First Search (DFS)",
      "description": "Implement a depth-first search algorithm for a graph.",
      "difficulty": "Medium"
    },
    {
      "id": 17,
      "name": "Longest Common Subsequence",
      "description": "Write a function to find the length of the longest common subsequence of two strings.",
      "testcases": [
        {"input1": "ABCD", "input2": "ACDF", "output": 3},
        {"input1": "AGGTAB", "input2": "GXTXAYB", "output": 4}
      ],
      "difficulty": "Medium"
    },
    {
      "id": 18,
      "name": "Heap Sort",
      "description": "Implement the heap sort algorithm for sorting an array.",
      "difficulty": "Medium"
    },
    {
      "id": 19,
      "name": "Dijkstra's Shortest Path",
      "description": "Implement Dijkstra's algorithm to find the shortest path in a graph.",
      "difficulty": "Medium"
    },
    {
      "id": 20,
      "name": "Quick Sort",
      "description": "Implement the quick sort algorithm for sorting an array.",
      "difficulty": "Difficult"
    }
  ]
  

  export default problems;