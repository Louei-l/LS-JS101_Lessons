/** CASUAL
 * 
 * merge two arrays where elements of the first array should become the elements at the even indexes of the returned array, 
 * while the elements of the second array should become the elements at the odd indexes.
 * 
 * example: [1, 2, 3], [4, 5, 6]; // => [1, 4, 2, 5, 3, 6]
 * 
 * Input: two arrays
 * Output: one array
 * 
 * Declare new function
 * Verify the two arrays are not empty and contain only numbers
 * Loop over both input-arrays
 *  add elemets into new output-array by alternating the input-arrays
 * 
 * Return output-array
 */

/** FORMAL
 * 
 * START
 * 
 * GET arr1
 * GET arr2
 * SET outputArray = empty array
 * SET index = 0
 * 
 * IF arr1 and arr2 contain numbers
 *  WHILE index < arr1 length
 *   ADD elemet at position index of arr1 to outputArray
 *   ADD element at position index of arr2 to outputArray
 *   SET index = index + 1
 * 
 * PRINT outputArray
 * RETURN outputArray
 * 
 * END
 */