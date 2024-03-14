var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = []; //An array to store sorted elements from both given arrays
    let i = 0; //Counter for traversing of first array
    let j = 0; //Counter for traversing of second array
    let median = 0; //To store result

    //Traversing both the arrays
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) nums3.push(nums1[i++]); //If the current element of first array is smaller than the current element of second array then add the current element of first array into the nums3 array
        else nums3.push(nums2[j++]); //Else put the current element of second array into the nums3 array
    }

    //Adding the remaining elements of both arrays into the nums3 array
    while(i < nums1.length) nums3.push(nums1[i++]);
    while(j < nums2.length) nums3.push(nums2[j++]);

    let middle = Math.floor(nums3.length / 2); //Getting the middle index of nums3 array

    if(nums3.length % 2 === 0) median = (nums3[middle] + nums3[middle-1])/2; //If the size of the array is even then get middle + middle-1 and divide by 2 to get the median.
    else median = nums3[middle]; //Or else just get the middle element from nums3 array;
    return median; //Output
};