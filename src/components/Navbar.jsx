import Line from "./Additional/Line";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center w-full gap-4 bg-black pr-2">
                <div className="flex flex-col gap-0.5 w-full">
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </div>
                <h1 className="font-bold text-3xl text-white">VINCENT</h1>
                <div className="flex flex-col gap-0.5 w-full">
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </div>
                <h1 className="font-extralight text-1xl text-white">Young DUMB</h1>
                <div className="flex flex-col gap-0.5 w-full">
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </div>
                <p className="text-gray-500">DARK
                    MODE
                    ONLY</p>
            </div>
        </>
    );
}
