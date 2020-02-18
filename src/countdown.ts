import {TFunc} from './types/types';

/**
 * Prevent frequent function calls.
 *
 * @param {Function} func Function which cannot be called some time after start.
 * @param {number} ms Milliseconds.
 */
export default function countdown<TArgs extends any[] = [], TReturn = any>(func: TFunc<TArgs>, ms: number): TFunc<TArgs, TReturn> {
    let timer: number | null = null;

    return function(...args: TArgs) {
        const self = this;
        if (timer === null) {

            timer = setTimeout(() => {
                timer = null;
            }, ms);

            return func.apply(self, args);
        }
    };
}
