import Child from "./Child";
import photo from "./assets/react.svg"
const Parent = () => {

    return (
        <>
            <div className="flex gap-5">
                <Child Offer=" offer 30 %" img={photo}/>
                <Child Offer=" offer 70 %" img={photo}/>
            </div>

        </>
    )
}
export default Parent;