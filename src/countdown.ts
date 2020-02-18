import {TFunc} from './types/types';

/**
 * Prevent frequent function calls.
 *
 * @param {Function} func Function which cannot be called some time after start.
 * @param {number} ms Milliseconds.
 */
export default function countdown<TArgs extends any[] = []>(func: TFunc<TArgs>, ms: number): TFunc<TArgs> {
    let timer: any = null;
    return function(...args: TArgs) {
        const self = this;

        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            func.apply(self, args);
            timer = null;
        }, ms);
    };
}
