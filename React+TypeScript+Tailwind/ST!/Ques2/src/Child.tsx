

type offerType={
    Offer:string,
    img:string
}
const Child=(props:offerType)=>{
    return(
        <>
        <div className="">
            <div>{props.Offer}</div>
            <div>
                <img src={props.img} alt="" />
            </div>
            
        </div>
        </>
    )
}
export default Child