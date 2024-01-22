const problems = [
    {
      "id": 1,
      "name": "Sum of Two Numbers",
      "description - profesional" : "You are tasked with creating a function that adds two numbers together. The function should take two parameters, which represent the numbers to be added, and return their sum. This problem tests your ability to write a basic arithmetic function.",
      "testcases": [
        {"input": [2, 3], "output": 5},
        {"input": [-1, 1], "output": 0}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 2,
      "name": "Factorial",
      "description": "Your goal is to implement a function that calculates the factorial of a given non-negative integer. The factorial of a number is the product of all positive integers up to that number. For example, the factorial of 5 (denoted as 5!) is 5 * 4 * 3 * 2 * 1 = 120.",
      "testcases": [
        {"input": 5, "output": 120},
        {"input": 0, "output": 1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 3,
      "name": "Reverse String",
      "description": "Create a function that takes a string as input and returns the reverse of that string. The reversed string should have the characters in the opposite order. This problem assesses your string manipulation skills and understanding of iterative processes",
      "testcases": [
        {"input": "hello", "output": "olleh"},
        {"input": "world", "output": "dlrow"}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 4,
      "name": "Palindrome",
      "description": "Implement a function to determine whether a given string is a palindrome. A palindrome is a sequence of characters that reads the same forwards and backward. Your function should return true if the input string is a palindrome and false otherwise. This problem encourages you to work with string comparison and iteration.",
      "testcases": [
        {"input": "racecar", "output": true},
        {"input": "hello", "output": false}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 5,
      "name": "Maximum Number",
      "description": "Your task is to create a function that finds and returns the maximum number in an array of integers. The function should take an array as input and output the largest integer present. This problem tests your understanding of array manipulation and basic search algorithms.",
      "testcases": [
        {"input": [4, 8, 2, 10], "output": 10},
        {"input": [-1, -5, -2], "output": -1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 6,
      "name": "Linear Search",
      "description": "Create a function to perform a linear search in an array for a given element. The function should iterate through the array and return the index of the element if found, or -1 if the element is not present.",
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
      "description": " Create a function that returns the intersection of two arrays. The intersection contains elements that are common to both arrays. The order of elements in the output does not matter.",
      "testcases": [
        {"input1": [1, 2, 3, 4], "input2": [3, 4, 5, 6], "output": [3, 4]},
        {"input1": [10, 20, 30], "input2": [30, 40, 50], "output": [30]}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 9,
      "name": "Binary Search",
      "description": "Implement a function to perform a binary search in a sorted array for a given element. The function should return the index of the element if found, or -1 if the element is not present.",
      "testcases": [
        {"input": [1, 2, 3, 4, 5], "element": 3, "output": 2},
        {"input": [10, 20, 30, 40, 50], "element": 35, "output": -1}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 10,
      "name": "Power of Two",
      "description": "Write a function to determine if a given integer is a power of two. The function should return true if the input is a power of two, and false otherwise.",
      "testcases": [
        {"input": 8, "output": true},
        {"input": 12, "output": false}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 11,
      "name": "GCD (Greatest Common Divisor)",
      "description": "Implement a function to find the greatest common divisor (GCD) of two numbers. The GCD is the largest positive integer that divides both numbers without leaving a remainder.",
      "testcases": [
        {"input1": 12, "input2": 18, "output": 6},
        {"input1": 30, "input2": 45, "output": 15}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 12,
      "name": "Count Duplicates",
      "description": "Write a function that counts the number of duplicates in an array. The function should return the count of elements that appear more than once.",
      "testcases": [
        {"input": [1, 2, 2, 3, 4, 4], "output": 2},
        {"input": [10, 20, 30], "output": 0}
      ],
      "difficulty": "Easy"
    },
    {
      "id": 13,
      "name": "Linked List Sum",
      "description": "Implement a function to find the sum of elements in a linked list. The linked list is a data structure where each element points to the next element in the sequence.",
      "difficulty": "Medium"
    },
    {
      "id": 14,
      "name": "Valid Parentheses",
      "description": "Write a function that determines if a given string of parentheses is valid. The function should return true if the parentheses are balanced and properly nested, and false otherwise.",
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
      "description": "Write a function that merges two sorted arrays into a single sorted array. The merged array should contain all the elements from the input arrays in ascending order.",
      "testcases": [
        {"input1": [1, 3, 5], "input2": [2, 4, 6], "output": [1, 2, 3, 4, 5, 6]},
        {"input1": [10, 20], "input2": [15, 25], "output": [10, 15, 20, 25]}
      ],
      "difficulty": "Medium"
    },
    {
      "id": 16,
      "name": "Depth First Search (DFS)",
      "description": "Implement a depth-first search algorithm for a graph. Depth-first search is a method for exploring or traversing tree or graph data structures.",
      "difficulty": "Medium"
    },
    {
      "id": 17,
      "name": "Longest Common Subsequence",
      "description": "Write a function to find the length of the longest common subsequence of two strings. A subsequence is a sequence that appears in the same relative order but not necessarily contiguous.",
      "testcases": [
        {"input1": "ABCD", "input2": "ACDF", "output": 3},
        {"input1": "AGGTAB", "input2": "GXTXAYB", "output": 4}
      ],
      "difficulty": "Medium"
    },
    {
      "id": 18,
      "name": "Heap Sort",
      "description": "Implement the heap sort algorithm for sorting an array. Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure.",
      "difficulty": "Medium"
    },
    {
      "id": 19,
      "name": "Dijkstra's Shortest Path",
      "description": "Implement Dijkstra's algorithm to find the shortest path in a graph. Dijkstra's algorithm is a graph search algorithm that solves the single-source shortest path problem.",
      "difficulty": "Medium"
    },
    {
      "id": 20,
      "name": "Quick Sort",
      "description": "Implement the quick sort algorithm for sorting an array. Quick sort is a highly efficient sorting algorithm that uses a divide-and-conquer strategy.",
      "difficulty": "Difficult"
    }
  ]
  

  export default problems;  