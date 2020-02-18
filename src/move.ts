
/**
 * Moves an array item from one position in an array to another.
 *
 * @param {Array<any>} array Array.
 * @param {number} moveIndex The index of the item to move.
 * @param {number} toIndex The index to move item at moveIndex to.
 */
export default function move(array: Array<any>, moveIndex: number, toIndex: number) {
    const item = array[moveIndex];
    const length = array.length;
    const diff = moveIndex - toIndex;

    if (diff > 0) { // move left
        return [
            ...array.slice(0, toIndex),
            item,
            ...array.slice(toIndex, moveIndex),
            ...array.slice(moveIndex + 1, length)
        ];
    } else if (diff < 0) { // move right
        const targetIndex = toIndex + 1;
        return [
            ...array.slice(0, moveIndex),
            ...array.slice(moveIndex + 1, targetIndex),
            item,
            ...array.slice(targetIndex, length)
        ];
    }
    return array;
}
