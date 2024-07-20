import Line from "./Additional/Line";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center w-full mt-1 gap-4 bg-black">
                <div className="flex flex-col gap-1 w-full">
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </div>
                <h1 className="font-bold text-3xl text-white">VINCENT</h1>
                <div className="flex flex-col gap-1 w-full">
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </div>
                <h1 className="font-bold text-3xl text-white">YoungDumb</h1>
                <div className="flex flex-col gap-1 w-full">
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                    <Line />
                </div>
            </div>
        </>
    );
}
