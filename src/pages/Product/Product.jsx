import "./product.css";
import {Link} from 'react-router-dom';
import Charts from "../../components/Charts/Charts";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="productCont">
            <div className="productTitleCont">
                <h1 className="productTitle">
                    Product
                </h1>
                <Link to="/newproduct">
                <button className="productAddButton">
                    Create
                </button>
                </Link>

            </div>

            <div className="productTop">
                <div className="productTopLeft">
                <Charts className="productCharts" data={productData} title="Product Analytics" grid dataKey="Sales"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="data:image/jpeg;base64,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" className="productInfoImg" alt="" />
                        <span className="productName">
                            Laptop
                        </span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                id:
                            </span>
                            <span className="productInfoValue">
                                123
                            </span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Sales:
                            </span>
                            <span className="productInfoValue">
                                $120
                            </span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                active:
                            </span>
                            <span className="productInfoValue">
                                yes
                            </span>
                        </div>

                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                in stock:
                            </span>
                            <span className="productInfoValue">
                                no
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label className="productLabel">
                        Product Name
                        </label>
                        <input type="text" placeholder="Laptop"/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="data:image/jpeg;base64,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" className="productUploadImg" alt="" />
                            <label for="file">
                                <Publish className="productUploadIcon"/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
