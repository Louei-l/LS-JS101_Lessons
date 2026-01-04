/** CASUAL
 * 
 * new array with every other element from the original array
 * 
 * Input: arr of integers
 * Output: new arr of every other integer
 * 
 * example: [1,4,7,2,5] -> [1,7,5]
 * 
 * Declare function
 * Verify input is an array and not empty
 * Loop over original array, starting at index 0 and increasing index by 2 each time.
 *  - For each step, add current element to the new array.
 * Return the new array
 * 
 */

/** FORMAL
 * 
 * START
 * 
 * SET result_array
 * SET index = 0
 * GET arr
 * 
 * IF arr is not empty and is array
 *  WHILE index < length of arr
 *    ADD element at position index of arr to result_array
 *    SET index = index +2  
 * ELSE 
 *  PRINT enter an array with numbers
 * 
 * PRINT result_array
 * RETURN result_array
 * 
 * END
 * 
 */