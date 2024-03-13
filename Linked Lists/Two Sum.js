//LeetCode Challenge
//Add two numbers from two linked lists and also implement carry

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0; //Variable to store sum of two nodes
    let carry = 0; //Variable to store carry of sum of two nodes
    let newNode = new ListNode(); //Creating a new node for the list
    let head = newNode; //Pointer to point at the current node in the list

    //Iterating both the list simultaneously
    while(l1 || l2) {

        //If the current node in the first list is not null
        if(l1) {
            sum = sum + l1.val; //Add the value of that current node in the sum
            l1 = l1.next; //Selecting the next node in the first list
        }

        //If the current node in the second list is not null
        if(l2) {
            sum = sum + l2.val; //Add the value of that current node in the sum
            l2 = l2.next; //Selecting the next node in the second list
        }

        //Extracting the carry from the sum
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        //Inserting the newly created node into the list
        head.next = new ListNode(sum);
        head = head.next; //Selecting the next node in the list

        //Sum now contains the carry. In the next iteration, the carry will also be added
        sum = carry;
        carry = 0; //Nullifying the carry
    }

    return newNode.next; //Returning the list
};