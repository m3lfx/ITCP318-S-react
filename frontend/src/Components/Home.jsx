import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios from 'axios'
import Product from './Product/Product'
import MetaData from './Layout/MetaData'
import Loader from './Layout/Loader'

const Home = () => {
    const [products, setProducts] = useState([])
    const [productsCount, setProductsCount] = useState(0)
    const [resPerPage, setResPerPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [filteredProductsCount, setFilteredProductsCount] = useState(0)

    const [currentPage, setCurrentPage] = useState(1)

    let { keyword } = useParams();
    let count = productsCount;

    if (keyword) {
        count = filteredProductsCount
    }

    const getProducts = async (keyword = '', page=1) => {
        let link = `http://localhost:4001/api/v1/products?keyword=${keyword}&page=${page}`

        let res = await axios.get(link)
        console.log(res)
        setProducts(res.data.products)
        setProductsCount(res.data.productsCount)
        setFilteredProductsCount(res.data.filteredProductsCount)

        setResPerPage(res.data.resPerPage)
        setLoading(false)
    }

    useEffect(() => {
        getProducts(keyword, currentPage)
    }, [keyword, currentPage]);
    return (
        <>
            <MetaData title={'Buy Best Products Online'} />
            {loading ? <Loader /> : (<div className="container container-fluid">
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                    {resPerPage < count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Stack spacing={2}>
                                <Pagination
                                    count={Math.ceil(count / resPerPage)}
                                    page={currentPage}
                                    onChange={(event, value) => setCurrentPage(value)}
                                    // onChange={setCurrentPageNo}
                                    color="primary"
                                    variant="outlined"
                                    shape="rounded"
                                    showFirstButton
                                    showLastButton
                                    size="large"
                                    sx={{
                                        backgroundColor: 'white',

                                    }}
                                />
                            </Stack>
                        </div>
                    )}

                </section>


            </div>)}

        </>

    )
}

export default Home