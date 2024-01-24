import { useEffect, useState } from "react"

export const Demo = () => {
    const [count, setCount] = useState<number>(0)

    const foo = (index: number) => {
        console.log('foo ' + index)
    }

    // Initial Render
    console.log('App Rendered');

    // Component Did Mount / Unmount
    useEffect(() => {
        console.log('Component Did Mount') // This will run ONCE after initial rendering

        return () => {
            console.log('Component Will Unmount') // This will run ONCE before the component unmounts
        }
    }, []) // Empty dependency array means this effect will run once: after initial render (mount)

    // Component Did Update
    useEffect(() => {
        console.log('Component Did Update') // This will run whenever the `count` state changes
        foo(6)
    }, [count]) // This effect runs whenever `count` changes


    return (
        <button onClick={() => setCount(count + 1)}>Click</button>
    )
}
