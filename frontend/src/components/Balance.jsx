export function Balance({value}){
    return(
        <div className="flex">
            <div className="font-bold text-lg flex flex-col justify-center h-full ">
                Your Balance:
            </div>
            <div className="font-semibold ml-4 text-lgw">
                Rs {value}
            </div>
        </div>
    )
}