import { CChart } from "@coreui/react-chartjs";
import React from "react";

const DBDonations = ()=>{
    return(
        <div className="flex items-center justify-center flex-col pt-6 w-full h-full" >
            <div className=" grid w-full grid-cold-1 md:grid-cols-2 gap-4 h-full">
            <div className="flex items-center justify-center">
                <div className="w-340 md:w-508">
                <CChart
                type="bar"
                data={{
                    labels:[
                        "Books",
                        "Footwear",
                        "Clothes",
                        "Money",
                        "Blood",
                        "Accessories",
                        "Food",
                    ],
                    datasets:[
                        {
                            label: "Donations",
                            backgroundColor: "#f87979",
                            data: [40,35,50,0,0,20,40],
                        },
                    ],
                }}
                labels="donation-categories"
                />
            </div>
            </div>
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-275 md:w-460">
                    <CChart
                    type="doughnut"
                    data={{
                        labels:["Books",
                        "Footwear",
                        "Clothes",
                        "Money",
                        "Blood",
                        "Accessories",
                        "Food"],
                        datasets:[
                            {
                                backgroundColor:[
                                    "#06726F",
                                    "#E46651",
                                    "#00D8FF",
                                    "#DD1B16",
                                    "#72066A",
                                    "#3E0672",
                                    "#725606",
                                ],
                                data:[40,35,50,0,0,20,40],
                            },
                        ],
                    }}
                    />

                </div>
            </div>
            </div>
        </div>
    )
}
export default DBDonations;