
import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import AdminHeader from './AdminHeader'

const AdminVisitors = () => {
    return (
        <>
        <AdminHeader />
       
        <div className="adminVisitors">
            <Bar 
            
            data={{ // premier brackets js dinamic content 2 eme js object
                labels: ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Satudray', 'Sunday'],
                datasets: [
                    {
                        label: "# of Visitors",
                        data: [12, 19, 3, 5, 15, 1, 8],
                        backgroundColor: [
                            'LightGrey',
                            'LightGrey',
                            'LightGrey',
                            'LightGrey',
                            'LightGrey',
                            'LightGrey', 
                            'LightGrey', 
                        ],
                        borderColor: [
                            'grey',
                            'grey',
                            'grey',
                            'grey',
                            'grey',
                            'grey',
                            'grey',
                        ],
                        borderWidth: 2,
                        
                    },
                    {
                    label: "# of sells",
                    data: [14, 15, 6, 12, 6, 21, 18],
                        backgroundColor: [
                            'LightBlue',
                            'LightBlue',
                            'LightBlue',
                            'LightBlue',
                            'LightBlue',
                            'LightBlue', 
                            'LightBlue', 
                        ],
                        borderColor: [
                            'Blue',
                            'Blue',
                            'Blue',
                            'Blue',
                            'Blue',
                            'Blue',
                            'Blue',
                        ],
                        borderWidth: 2,
                },
                ],
                
            }}
            height={300}
            width={400}
            options= {{
                maintainAspectRatio: true,
                sacles: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        fontColor: 'green'
                    },
                },
                animation: {
                   duration: 2000,
                   easing: 'easeInQuad',
                    }
                }
            }
            />
            </div>
            
        </>
    )
}

export default AdminVisitors
