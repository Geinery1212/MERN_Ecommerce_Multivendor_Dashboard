import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { get_sellers } from '../../store/Reducers/sellerReducer';
import Search from '../components/Search';
const Sellers = () => {
    const dispatch = useDispatch();
    let { loader, totalSellers, sellers } = useSelector(state => state.seller);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [perPage, setPerPage] = useState(5);
    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_sellers(obj));
    }, [perPage, currentPage, searchValue]);

    useEffect(() => {
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_sellers(obj));
    }, []);
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[20px] font-bold mb-3'>Sellers</h1>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-[#d0d3d6]'>
                        <thead className='uppercase border-b border-slate-700 text-[#d0d3d6]'>
                            <tr>
                                <th scope='col' className='py-1 px-4'>No</th>
                                <th scope='col' className='py-1 px-4'>Image</th>
                                <th scope='col' className='py-1 px-4'>Name</th>
                                <th scope='col' className='py-1 px-4'>Shop Name</th>
                                <th scope='col' className='py-1 px-4'>Payment Status</th>
                                <th scope='col' className='py-1 px-4'>Email</th>
                                <th scope='col' className='py-1 px-4'>State</th>
                                <th scope='col' className='py-1 px-4'>District</th>
                                <th scope='col' className='py-1 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                (totalSellers > 0) && sellers.map((element, index) => {
                                    return <tr key={index}>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{index + 1}</td>
                                        <td className='py-1 px-4 flex justify-center items-center'>
                                            <img src={require(`../../images/category/${index + 1}.jpg`)} alt={`${index + 1}.jpg`} className='w-[45px] h-[45px]' />
                                        </td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{element.name}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{element.shopInfo ? element.shopInfo.shop : ''}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{element.payment}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{element.email}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{element.shopInfo ? element.shopInfo.district : ''}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>{element.shopInfo ? element.shopInfo.subdistrict : ''}</td>
                                        <td className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <div className='flex justify-center items-center gap-4'>
                                                <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalItems={50} perPage={perPage} showItem={3} />
                </div>
            </div>
        </div>

    )
}

export default Sellers