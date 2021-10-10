import "./featuredinfo.css";
import {ArrowDownward,ArrowUpward} from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyCont">
                    <span className="featuredMoney">
                        $2,415
                    </span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>

            <span className="featuredSub">
                Compared to last month
            </span>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyCont">
                    <span className="featuredMoney">
                        $2,312
                    </span>
                    <span className="featuredMoneyRate">
                        -10.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>

            <span className="featuredSub">
                Compared to last month
            </span>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyCont">
                    <span className="featuredMoney">
                        $2,712
                    </span>
                    <span className="featuredMoneyRate">
                        +11.14 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>

            <span className="featuredSub">
                Compared to last month
            </span>

            </div>

            
        </div>
    )
}
