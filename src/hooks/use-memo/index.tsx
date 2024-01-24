import { useMemo, useState } from "react";
import { initialItems } from './utils';

export const Demo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
    const selectedItem = useMemo(
        () => items.find((item) => item.isSelected),
        [items],
    );

    // const selectedItem = useMemo(
    //     () => items.find((item) => item.id === selectedItem?.id),
    //     [items],
    // );

    return (
        <div className='tutorial'>
            <h1>Count: {count}</h1>
            <h1>Selected Item: {selectedItem?.id}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}
