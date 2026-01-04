/** CASUAL
 * 
 * index of 3rd occurence of specified char in array.
 * 
 * Input: array with characters
 * Input: specified character to match
 * Output: index of 3rd occurence of specified char in array.
 * 
 * Declare a new function
 * Verify that array is not empty and is array
 * Loop over array and match each element with specified character
 *   IF there is a match 
 *     increase occurence by 1
 *     IF occurence equals to 3
 *       Return index
 *     ELSE
 *      do nothing
 *  increase index by 1
 * If after looping over all elements in array the occurence is less than 3
 *  Return null
 */


/** FORMAL
 * 
 * START
 * 
 * GET arr
 * GET char
 * SET index = 0
 * SET occurence = 0
 * 
 * 
 * IF arr is not empty and is array
 *  WHILE index < arr length
 *   IF char = arr element at index
 *    SET occurence = occurence + 1
 *      IF occurence = 3
 *        PRINT index
 *        RETURN index
 *  SET index = index + 1
 * 
 * RETURN null
 * 
 * END
 *  
 */