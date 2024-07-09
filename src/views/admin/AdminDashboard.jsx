import React from 'react'
import { FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import logoAdmin from '../../images/admin.jpg';
const AdminDashboard = () => {
    const state = {
        series: [
            {
                name: "Orders",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
            {
                name: "Revenue",
                data: [50, 49, 60, 70, 91, 30, 45, 45]
            },
            {
                name: "Sellers",
                data: [12, 49, 60, 10, 91, 30, 48, 15]
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            char: {
                background: 'transparent',
                foreColor: "#d0d2d6"
            },
            dataLabels: {
                enabled: false,
            },
            strock: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: '#f0f0f0',
                with: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        }
                    }
                }
            ]
        }
    };
    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>$1000</h2>
                        <span>Total sales</span>
                    </div>
                    <div className='w-[40px] h-[47px] flex justify-center items-center rounded-full bg-[#fa0305]'>
                        <span className='text-white'><FaDollarSign /></span>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span>Products</span>
                    </div>
                    <div className='w-[40px] h-[47px] flex justify-center items-center rounded-full bg-[#760077]'>
                        <span className='text-white'><MdProductionQuantityLimits />
                        </span>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>10</h2>
                        <span>Sellers</span>
                    </div>
                    <div className='w-[40px] h-[47px] flex justify-center items-center rounded-full bg-[#038000]'>
                        <span className='text-white'><FaUsers />
                        </span>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
                        <h2 className='text-3xl font-bold'>336</h2>
                        <span>Orders</span>
                    </div>
                    <div className='w-[40px] h-[47px] flex justify-center items-center rounded-full bg-[#0200f8]'>
                        <span className='text-white'><FaShoppingCart /></span>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="bar"
                            height="350"
                        />
                    </div>
                </div>
                <div className='w-full lg:w-5/12 lg:pl-4 mt-5 lg:mt-0'>
                    <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Seller Message</h2>
                            <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                        </div>
                        <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                            <ol className='relative border-1 border-slate-600 ml-4'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img src={logoAdmin} alt="avatar" className='w-full rounded-full h-full shadow-lg' />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img src={logoAdmin} alt="avatar" className='w-full rounded-full h-full shadow-lg' />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img src={logoAdmin} alt="avatar" className='w-full rounded-full h-full shadow-lg' />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How are you?
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6'>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                        <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <table className='w-full text-sm text-[#d0d3d6]'>
                            <thead className='uppercase border-b border-slate-700 text-[#d0d3d6]'>
                                <tr>
                                    <th scope='col' className='py-3 px-4'>Order Id</th>
                                    <th scope='col' className='py-3 px-4'>Price</th>
                                    <th scope='col' className='py-3 px-4'>Payment Status</th>
                                    <th scope='col' className='py-3 px-4'>Order Status</th>
                                    <th scope='col' className='py-3 px-4'>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1, 2, 3, 4, 5].map((element, index) => {
                                        return <tr key={index}>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap'>#000{element}</td>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap'>$1000</td>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                                            <td className='py-3 px-4 font-medium whitespace-nowrap'><Link>View</Link></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;